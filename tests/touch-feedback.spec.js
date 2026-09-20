import { test, expect } from '@playwright/test';

test.use({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });

async function press(page, locator) {
  await locator.scrollIntoViewIfNeeded();
  const bounds = await locator.boundingBox();
  const point = { x: bounds.x + bounds.width / 2, y: bounds.y + Math.min(bounds.height / 2, 60) };
  const input = await page.context().newCDPSession(page);
  await input.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [point] });
  return { input, point };
}

test('touch buttons visibly highlight and still activate their action', async ({ page }) => {
  await page.goto('/home', { waitUntil: 'domcontentloaded' });
  const tab = page.getByRole('tab', { name: 'Leadership & Service' });
  const { input } = await press(page, tab);
  await expect(tab).toHaveAttribute('data-touch-feedback', '');
  await expect(tab).toHaveCSS('filter', 'brightness(0.92)');
  await input.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
  await expect(tab).toHaveAttribute('aria-selected', 'true');
  await expect(tab).not.toHaveAttribute('data-touch-feedback');

  await page.getByRole('button', { name: 'Toggle navigation' }).tap();
  const navigation = page.getByRole('navigation', { name: 'Mobile navigation', exact: true });
  await navigation.getByRole('button', { name: 'Projects submenu' }).tap();
  await navigation.getByRole('link', { name: 'Research', exact: true }).tap();
  await expect(page).toHaveURL(/\/projects\/research$/);
});

test('cards highlight on touch and clear when the finger starts scrolling', async ({ page }) => {
  await page.goto('/student-organization', { waitUntil: 'domcontentloaded' });
  const card = page.locator('.community-card').first();
  const { input, point } = await press(page, card);
  await expect(card).toHaveAttribute('data-touch-feedback', '');
  await expect(card).toHaveCSS('background-color', 'rgb(240, 250, 244)');
  await input.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [{ ...point, y: point.y - 50 }] });
  await expect(card).not.toHaveAttribute('data-touch-feedback');
  await input.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
});

test('disabled buttons stay unchanged and reduced motion retains tap feedback', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/home', { waitUntil: 'domcontentloaded' });
  const disabled = page.locator('.home-social').first();
  const { input } = await press(page, disabled);
  await expect(page.locator('[data-touch-feedback]')).toHaveCount(0);
  await input.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });

  const button = page.getByRole('button', { name: 'Toggle navigation' });
  const touch = await press(page, button);
  await expect(button).toHaveCSS('filter', 'brightness(0.92)');
  await expect(button).toHaveCSS('transform', 'none');
  await touch.input.send('Input.dispatchTouchEvent', { type: 'touchCancel', touchPoints: [] });
  await expect(button).not.toHaveAttribute('data-touch-feedback');
});
