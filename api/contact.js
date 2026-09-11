import { handleContact, setApiHeaders } from '../server/contact.js'

export const config = {
  maxDuration: 10,
}

export default async function handler(req, res) {
  setApiHeaders(res)

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ ok: false, error: 'method' })
  }

  return handleContact(req, res)
}
