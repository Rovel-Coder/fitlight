import { kv } from '@vercel/kv';

export default async function handler(req, res) {
  let downloads = 0, webapp = 0;
  try {
    downloads = (await kv.get('downloads_total')) || 0;
    webapp = (await kv.get('webapp_opens')) || 0;
  } catch (err) {
    console.error('Compteur KV indisponible :', err);
  }
  res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate');
  res.status(200).json({ downloads_total: downloads, webapp_opens: webapp });
}
