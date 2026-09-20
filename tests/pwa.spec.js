import { test, expect } from '@playwright/test';

async function ready(page) {
  await page.goto('/home', { waitUntil: 'domcontentloaded' });
  await expect.poll(() => page.evaluate(async () => {
    const registration = await navigator.serviceWorker.getRegistration();
    return {
      active: registration?.active?.state,
      controller: navigator.serviceWorker.controller?.state,
      installing: registration?.installing?.state,
      waiting: registration?.waiting?.state,
    };
  }), { timeout: 15000 }).toMatchObject({ active: 'activated', controller: 'activated' });
}

test('manifest and icons meet Chrome installability checks', async ({ playwright }, testInfo) => {
  // Installation is blocked in Playwright's default incognito context.
  const context = await playwright.chromium.launchPersistentContext(testInfo.outputPath('chrome-profile'), {
    channel: process.env.PLAYWRIGHT_CHANNEL || 'chrome',
    baseURL: 'http://127.0.0.1:4175',
  });
  try {
  const page = await context.newPage();
  await page.goto('/home', { waitUntil: 'domcontentloaded' });
  await expect(page.locator('main')).toBeVisible();
  const manifest = await page.evaluate(async () => {
    const href = document.querySelector('link[rel="manifest"]').href;
    return (await fetch(href)).json();
  });
  expect(manifest.display).toBe('standalone');
  expect(manifest.start_url).toBe('/home');
  expect(manifest.icons.some(icon => icon.purpose === 'maskable')).toBe(true);
  for (const icon of manifest.icons) {
    const dimensions = await page.evaluate(async (src) => {
      const image = new Image();
      image.src = src;
      await image.decode();
      return `${image.naturalWidth}x${image.naturalHeight}`;
    }, icon.src);
    expect(dimensions).toBe(icon.sizes);
  }
  const cdp = await page.context().newCDPSession(page);
  await expect.poll(async () => (await cdp.send('Page.getInstallabilityErrors')).installabilityErrors).toEqual([]);
  } finally {
    await context.close();
  }
});

test('every page and its local images load offline, including direct deep links', async ({ page, context }) => {
  test.setTimeout(60000);
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await ready(page);
  await expect(page.getByRole('status')).toContainText('ready to browse offline');
  await page.getByRole('button', { name: 'Dismiss', exact: true }).click();
  await context.setOffline(true);
  for (const path of ['/home', '/publications', '/projects', '/projects/research', '/projects/blog', '/social-organization', '/gallery', '/student-organization', '/contact', '/search']) {
    await page.goto(path, { waitUntil: 'domcontentloaded' });
    await expect(page.locator('main')).toBeVisible();
    const imagesLoaded = await page.locator('main img').evaluateAll(async images => {
      await Promise.all(images.map(image => image.decode()));
      return images.every(image => image.naturalWidth > 0);
    });
    expect(imagesLoaded).toBe(true);
  }
  await page.getByRole('textbox', { name: 'Search this site' }).fill('publications');
  await page.locator('.search-results a').first().click();
  await expect(page).toHaveURL(/\/publications$/);
  expect(errors).toEqual([]);
});

test('install control handles a one-use browser prompt and disappears after installation', async ({ page }) => {
  await ready(page);
  await page.evaluate(() => {
    const event = new Event('beforeinstallprompt', { cancelable: true });
    window.installPromptCalls = 0;
    event.prompt = async () => { window.installPromptCalls++; };
    event.userChoice = Promise.resolve({ outcome: 'accepted', platform: 'web' });
    window.dispatchEvent(event);
  });
  await page.getByRole('button', { name: 'Install app', exact: true }).click();
  expect(await page.evaluate(() => window.installPromptCalls)).toBe(1);
  await expect(page.getByRole('button', { name: 'Install app', exact: true })).toHaveCount(0);
  await page.evaluate(() => window.dispatchEvent(new Event('appinstalled')));
  await expect(page.getByRole('button', { name: 'Install app', exact: true })).toHaveCount(0);
});
