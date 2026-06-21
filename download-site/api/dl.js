import { kv } from '@vercel/kv';

export default async function handler(req, res) {
  const target = process.env.APK_DOWNLOAD_URL;

  if (!target) {
    res.status(503).send('Téléchargement indisponible pour le moment.');
    return;
  }

  try {
    await kv.incr('downloads_total');
  } catch (err) {
    console.error('Compteur KV indisponible :', err);
  }

  res.writeHead(302, { Location: target });
  res.end();
}
