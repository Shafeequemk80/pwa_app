let cacheData = "appV1";

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheData).then((cache) => {
      return cache.addAll([
        "/static/js/bundle.js",
        "/static/js/main.chunk.js",
        "/static/js/0.chunk.js",
        "/index.html",
        "/",
        "/users",
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  if (!navigator.onLine) {
    event.respondWith(
      caches.match(event.request).then((response) => {
        if(response){
            return response 
        }
        let fetchUrl= event.request.clone()
        fetch(fetchUrl)
      })
    );
  }
});
