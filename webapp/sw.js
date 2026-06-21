// FitLight — service worker (offline + installable)
// Stratégie : stale-while-revalidate. On sert depuis le cache immédiatement,
// et on met le cache à jour en arrière-plan pour la prochaine ouverture.

const CACHE = 'fitlight-v33';
const ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icon.svg',
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  // On ne gère que les GET de même origine
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;

  e.respondWith(
    caches.open(CACHE).then((cache) =>
      cache.match(req).then((cached) => {
        const network = fetch(req)
          .then((res) => {
            if (res && res.status === 200) cache.put(req, res.clone());
            return res;
          })
          .catch(() => cached);
        // Cache d'abord (instantané + offline), réseau en repli/rafraîchissement
        return cached || network;
      })
    )
  );
});
