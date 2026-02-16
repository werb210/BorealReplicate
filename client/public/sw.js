// Disabled service worker to prevent cache blank screen issues.
self.addEventListener("install", () => {
  // Intentionally no-op to avoid caching during stabilization.
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.map((key) => caches.delete(key))))
  );
});
