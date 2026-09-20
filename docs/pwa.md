# Progressive Web App

The production build generates `manifest.webmanifest`, `sw.js`, and a versioned
precache with Vite PWA. All local pages, scripts, styles, icons, and portfolio
photos are cached after the first successful online visit. Google Fonts are
cached as they are used. External sites, email actions, and the embedded Google
Map still need their usual network connection or external app.

## Run and verify

```sh
npm run build
npm run preview
```

Open the localhost URL printed by Vite. Service workers are intentionally disabled
in `npm run dev` to avoid caching development files. After the offline-ready
notice appears, disable the network and reload any page.

Run `npm run test:pwa` for production-browser checks of installability, icon sizes,
offline deep links and images on every route, offline search, and the install UI.
The tests use installed Google Chrome by default. Alternatively, install Playwright
Chromium with `npx playwright install chromium` and set `PLAYWRIGHT_CHANNEL=chromium`.
The install UI test simulates the browser prompt; it does not install an OS app.

## Install

- Chrome/Edge: use the browser's install action, or the **Install app** button in
  the footer when the browser offers installation.
- iPhone/iPad Safari: use **Share → Add to Home Screen**. Safari does not expose
  the `beforeinstallprompt` event used by the in-page button.

The app opens at `/home` in a standalone window. Launcher icons reuse the site's
existing S favicon, with a separate opaque maskable icon for Android.

## Deploy

Publish the contents of `dist` at the domain root over HTTPS. Localhost is also
supported for testing; plain HTTP on a LAN IP is not a secure service-worker
context. Configure the host to serve `index.html` for application routes such as
`/publications` and `/projects/research`. Serve actual static files first; missing
JS, icons, or service-worker files must not be rewritten to HTML.

Serve `sw.js`, `index.html`, and `manifest.webmanifest` with revalidation
(`Cache-Control: no-cache`); hashed files in `assets/` can use immutable caching.
Use the proper JavaScript and manifest MIME types. Keep deployment files together
so a service-worker install never references missing assets.

New builds show an **Update now / Later** notice rather than interrupting a reader.
Choosing Update now activates the new worker and reloads the page. To check an
update manually, open one production build, deploy a changed build, and revisit
the app in another tab. The old tab should offer the update. Choosing Later keeps
the current session usable; the waiting worker can activate after all old tabs close.

Implementation references: [Vite PWA React integration](https://vite-pwa-org.netlify.app/frameworks/react.html)
and [MDN installation guidance](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/How_to/Trigger_install_prompt).
