import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [react(), VitePWA({
    registerType: 'prompt',
    includeAssets: ['favicon.svg', 'icons/*.png'],
    manifest: {
      id: '/',
      name: 'Md. Samir Islam — Academic Portfolio',
      short_name: 'Samir Portfolio',
      description: 'Research, publications, and community work by Md. Samir Islam.',
      lang: 'en',
      start_url: '/home',
      scope: '/',
      display: 'standalone',
      theme_color: '#0d6b4b',
      background_color: '#ffffff',
      icons: [
        { src: '/icons/pwa-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
        { src: '/icons/pwa-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
        { src: '/icons/pwa-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
      ],
    },
    workbox: {
      // All local pages and images remain available after the first online visit.
      globPatterns: ['**/*.{js,css,html,svg,png,jpg,webmanifest}'],
      navigateFallback: '/index.html',
      navigateFallbackDenylist: [/^\/api\//, /\.[^/]+$/],
      cleanupOutdatedCaches: true,
      clientsClaim: true,
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/fonts\.googleapis\.com\//,
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'portfolio-font-styles',
            cacheableResponse: { statuses: [0, 200] },
            expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 },
          },
        },
        {
          urlPattern: /^https:\/\/fonts\.gstatic\.com\//,
          handler: 'CacheFirst',
          options: {
            cacheName: 'portfolio-font-files',
            cacheableResponse: { statuses: [0, 200] },
            expiration: { maxEntries: 30, maxAgeSeconds: 60 * 60 * 24 * 365 },
          },
        },
      ],
    },
  })],
  server: {
    host: true,
    allowedHosts: [
      'noninterpretational-wavingly-hazel.ngrok-free.dev'
    ]
  }
})
