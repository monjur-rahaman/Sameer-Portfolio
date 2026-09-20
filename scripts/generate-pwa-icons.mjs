import { chromium } from '@playwright/test';
import { mkdir, readFile, writeFile } from 'node:fs/promises';

// Rasterize the existing vector favicon; its centered S fits the maskable safe zone.
const source = await readFile(new URL('../public/favicon.svg', import.meta.url), 'utf8');
const output = new URL('../public/icons/', import.meta.url);
await mkdir(output, { recursive: true });
const browser = await chromium.launch({ channel: process.env.PLAYWRIGHT_CHANNEL || 'chrome' });
try {
  const page = await browser.newPage();
  for (const [name, size] of [
    ['pwa-192.png', 192], ['pwa-512.png', 512],
    ['pwa-maskable-512.png', 512], ['apple-touch-icon.png', 180],
  ]) {
    const data = await page.evaluate(async ({ source, size }) => {
      const image = new Image();
      image.src = `data:image/svg+xml;base64,${btoa(source)}`;
      await image.decode();
      const canvas = document.createElement('canvas');
      canvas.width = canvas.height = size;
      canvas.getContext('2d').drawImage(image, 0, 0, size, size);
      return canvas.toDataURL('image/png').split(',')[1];
    }, { source, size });
    await writeFile(new URL(name, output), Buffer.from(data, 'base64'));
  }
} finally {
  await browser.close();
}
