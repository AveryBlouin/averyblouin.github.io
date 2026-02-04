const addResourcesToCache = async (resources) => {
  const cache = await caches.open("v1");
  await cache.addAll(resources);
};

self.addEventListener("install", (event) => {
  event.waitUntil(
    addResourcesToCache([
      "/eval.html",
      "https://cdn.jsdelivr.net/npm/eruda",
    ]),
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(caches.match(event.request));
});
