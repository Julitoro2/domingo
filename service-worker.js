// service-worker.js

self.addEventListener('install', function(event) {
    console.log('Service Worker instalado');
  });
  
  self.addEventListener('activate', function(event) {
    console.log('Service Worker activado');
  });
  
  self.addEventListener('fetch', function(event) {
    console.log('Solicitud de recuperación: ', event.request.url);
  });
  