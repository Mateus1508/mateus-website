const CONTROL_CHARS = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F\u2028\u2029]/g
const HTML_OR_JS =
  /<[a-z!?/]|javascript\s*:|vbscript\s*:|livescript\s*:|data\s*:text\/html|\bon[a-z]+\s*=|expression\s*\(/i
const EMAIL_RE = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i

export function hasInjection(value) {
  return typeof value === 'string' && HTML_OR_JS.test(value)
}

export function sanitizeText(value, max, { keepNewlines = false } = {}) {
  if (typeof value !== 'string') return ''
  let text = value.normalize('NFKC').replace(CONTROL_CHARS, '')
  if (keepNewlines) {
    text = text.replace(/\r\n/g, '\n').replace(/\r/g, '\n')
  } else {
    text = text.replace(/[\r\n]/g, ' ')
  }
  text = text.replace(/[<>]/g, '')
  return text.trim().slice(0, max)
}

export function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export function isSafeEmail(value) {
  if (typeof value !== 'string') return false
  const email = value.trim().toLowerCase()
  if (email.length < 6 || email.length > 254) return false
  if (email.includes('..') || email.includes(' ') || email.includes('\n')) return false
  if (hasInjection(email)) return false
  return EMAIL_RE.test(email)
}

export function readString(body, key) {
  if (!body || typeof body !== 'object' || Array.isArray(body)) return ''
  const value = body[key]
  return typeof value === 'string' ? value : ''
}
