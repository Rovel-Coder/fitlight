import { kv } from '@vercel/kv';

export default async function handler(req, res) {
  let count = 0;
  try {
    count = (await kv.get('downloads_total')) || 0;
  } catch (err) {
    console.error('Compteur KV indisponible :', err);
  }
  res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate');
  res.status(200).json({ downloads_total: count });
}
