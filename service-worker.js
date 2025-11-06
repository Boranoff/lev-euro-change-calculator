const CACHE_NAME = "offline-cache-v1";
const FILES_TO_CACHE = [
  '/',
  '/index.html',
  '/favicon.ico',
  '/favicon_512x512.png',
  '/favicon_192x192.png'
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(FILES_TO_CACHE))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
