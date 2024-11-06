self.addEventListener('install', (event) => {
    console.log('Service Worker installed');
});

self.addEventListener('fetch', (event) => {
    // This is a basic service worker that only logs fetch events
    console.log('Fetching:', event.request.url);
});
