const CACHE_NAME = 'ncs-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/convert.html',
  '/icons/ncs_logo.png',
  '/index.js',
  '/convert.js',
  '/css.css',
  '/assets/Cascadia.ttf',
];

// Install event: cache files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Fetch event: serve from cache
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
