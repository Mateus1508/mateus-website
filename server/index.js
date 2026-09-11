import 'dotenv/config'
import { existsSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import express from 'express'
import nodemailer from 'nodemailer'
import {
  escapeHtml,
  hasInjection,
  isSafeEmail,
  readString,
  sanitizeText,
} from './sanitize.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const app = express()
const port = Number(process.env.API_PORT) || 3001

app.disable('x-powered-by')
app.use(express.json({ limit: '16kb', strict: true }))
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff')
  res.setHeader('X-Frame-Options', 'DENY')
  res.setHeader('Referrer-Policy', 'no-referrer')
  res.setHeader('X-XSS-Protection', '0')
  if (req.path.startsWith('/api')) {
    res.setHeader(
      'Content-Security-Policy',
      "default-src 'none'; script-src 'none'; object-src 'none'; base-uri 'none'; frame-ancestors 'none'",
    )
  } else if (process.env.NODE_ENV === 'production') {
    res.setHeader(
      'Content-Security-Policy',
      "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src https://fonts.gstatic.com; img-src 'self' data:; connect-src 'self'; object-src 'none'; base-uri 'self'; frame-ancestors 'none'; form-action 'self'",
    )
  }
  next()
})

const hitsByKey = new Map()
const WINDOW_MS = 24 * 60 * 60 * 1000
const MAX_HITS = 1

function clientKey(req) {
  const forwarded = req.headers['x-forwarded-for']
  const ip =
    typeof forwarded === 'string' && forwarded.trim()
      ? forwarded.split(',')[0].trim()
      : req.socket.remoteAddress || 'unknown'
  return ip
}

function hitCount(key) {
  const now = Date.now()
  const stamps = (hitsByKey.get(key) || []).filter((t) => now - t < WINDOW_MS)
  hitsByKey.set(key, stamps)
  return stamps.length
}

function tooMany(key) {
  return hitCount(key) >= MAX_HITS
}

function recordHit(key) {
  const stamps = hitsByKey.get(key) || []
  stamps.push(Date.now())
  hitsByKey.set(key, stamps)
}

function parseBody(body) {
  if (!body || typeof body !== 'object' || Array.isArray(body)) return null

  const raw = {
    website: readString(body, 'website'),
    name: readString(body, 'name'),
    email: readString(body, 'email'),
    company: readString(body, 'company'),
    service: readString(body, 'service'),
    message: readString(body, 'message'),
  }

  if (raw.website.trim()) return { honeypot: true }

  const fields = [raw.name, raw.email, raw.company, raw.service, raw.message]
  if (fields.some(hasInjection)) return null

  const name = sanitizeText(raw.name, 80)
  const email = sanitizeText(raw.email, 254).toLowerCase()
  const company = sanitizeText(raw.company, 120)
  const service = sanitizeText(raw.service, 80)
  const message = sanitizeText(raw.message, 4000, { keepNewlines: true })

  if (name.length < 2 || !isSafeEmail(email) || message.length < 10) return null

  return { name, email, company, service, message }
}

const smtpUser = (process.env.SMTP_USER || '').trim()
const smtpPass = (process.env.SMTP_PASS || '').replace(/\s+/g, '')
let transporterPromise
let fallbackTo = ''

async function getTransporter() {
  if (transporterPromise) return transporterPromise

  transporterPromise = (async () => {
    if (smtpUser && smtpPass) {
      const port = Number(process.env.SMTP_PORT) || 465
      fallbackTo = process.env.CONTACT_TO || smtpUser
      return nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'smtp.gmail.com',
        port,
        secure: process.env.SMTP_SECURE !== 'false',
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      })
    }

    if (process.env.NODE_ENV === 'production') {
      throw new Error('SMTP not configured')
    }

    const test = await nodemailer.createTestAccount()
    fallbackTo = test.user
    console.log('SMTP de teste (Ethereal):', test.user)
    return nodemailer.createTransport({
      host: test.smtp.host,
      port: test.smtp.port,
      secure: test.smtp.secure,
      auth: { user: test.user, pass: test.pass },
    })
  })()

  return transporterPromise
}

app.post('/api/contact', async (req, res) => {
  const parsed = parseBody(req.body)
  if (!parsed) {
    return res.status(400).json({ ok: false, error: 'validation' })
  }

  if (parsed.honeypot) {
    return res.json({ ok: true })
  }

  const ip = clientKey(req)
  if (tooMany(ip) || tooMany(parsed.email)) {
    return res.status(429).json({ ok: false, error: 'rate_limit' })
  }

  try {
    const transporter = await getTransporter()
    const to = process.env.CONTACT_TO || smtpUser || fallbackTo
    const from = process.env.CONTACT_FROM || smtpUser || fallbackTo || 'noreply@localhost'
    if (!to) {
      return res.status(503).json({ ok: false, error: 'send_failed' })
    }

    const subject = `Contato do site: ${parsed.name}`
    const text = [
      `Nome: ${parsed.name}`,
      `E-mail: ${parsed.email}`,
      parsed.company ? `Empresa: ${parsed.company}` : null,
      parsed.service ? `Assunto: ${parsed.service}` : null,
      '',
      parsed.message,
    ]
      .filter(Boolean)
      .join('\n')

    const html = `
      <p><strong>Nome:</strong> ${escapeHtml(parsed.name)}</p>
      <p><strong>E-mail:</strong> ${escapeHtml(parsed.email)}</p>
      ${parsed.company ? `<p><strong>Empresa:</strong> ${escapeHtml(parsed.company)}</p>` : ''}
      ${parsed.service ? `<p><strong>Assunto:</strong> ${escapeHtml(parsed.service)}</p>` : ''}
      <p>${escapeHtml(parsed.message).replace(/\n/g, '<br>')}</p>
    `

    const info = await transporter.sendMail({
      from,
      to,
      replyTo: parsed.email,
      subject,
      text,
      html,
    })

    const preview = nodemailer.getTestMessageUrl(info)
    if (preview) {
      console.log('Preview do e-mail:', preview)
    }

    recordHit(ip)
    recordHit(parsed.email)
    return res.json({ ok: true })
  } catch (err) {
    console.error('Falha ao enviar contato:', err instanceof Error ? err.message : 'erro')
    return res.status(503).json({ ok: false, error: 'send_failed' })
  }
})

const dist = path.join(__dirname, '..', 'dist')
if (process.env.NODE_ENV === 'production' && existsSync(dist)) {
  app.use(express.static(dist))
  app.get(/^(?!\/api).*/, (_req, res) => {
    res.sendFile(path.join(dist, 'index.html'))
  })
}

app.listen(port, () => {
  console.log(`API de contato em http://localhost:${port}`)
})
