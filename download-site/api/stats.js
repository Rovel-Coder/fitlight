import { kv } from '@vercel/kv';

export default async function handler(req, res) {
  const token = req.query.token;

  if (!process.env.ADMIN_TOKEN || token !== process.env.ADMIN_TOKEN) {
    res.status(401).json({ error: 'Non autorisé' });
    return;
  }

  const count = (await kv.get('downloads_total')) || 0;
  res.status(200).json({ downloads_total: count });
}
