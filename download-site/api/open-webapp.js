import { kv } from '@vercel/kv';

const WEBAPP_URL = 'https://fitlight-app.vercel.app';

export default async function handler(req, res) {
  try {
    await kv.incr('webapp_opens');
  } catch (err) {
    console.error('Compteur KV indisponible :', err);
  }

  res.writeHead(302, { Location: WEBAPP_URL });
  res.end();
}
