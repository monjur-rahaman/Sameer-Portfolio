import { test, expect } from '@playwright/test';

for (const viewport of [{ width: 320, height: 480 }, { width: 390, height: 844 }, { width: 1024, height: 768 }]) {
  test(`mobile navigation exposes all pages at ${viewport.width}px`, async ({ page }) => {
    await page.setViewportSize(viewport);
    await page.goto('/home', { waitUntil: 'domcontentloaded' });
    const toggle = page.getByRole('button', { name: 'Toggle navigation' });
    const navigation = page.getByRole('navigation', { name: 'Mobile navigation', exact: true });
    await toggle.click();
    await expect(toggle).toHaveAttribute('aria-expanded', 'true');
    const projects = navigation.getByRole('button', { name: 'Projects submenu' });
    await projects.click();
    await expect(projects).toHaveAttribute('aria-expanded', 'true');
    await expect(navigation.getByRole('link', { name: 'Research', exact: true })).toBeVisible();
    await expect(navigation.getByRole('link', { name: 'Blogs', exact: true })).toBeVisible();

    for (const [name, path] of [
      ['Research', '/projects/research'], ['Blogs', '/projects/blog'],
      ['Projects', '/projects'], ['Publications', '/publications'],
      ['Gallery', '/gallery'], ['Student Organization', '/student-organization'],
      ['Social Organization', '/social-organization'], ['Contact', '/contact'],
      ['Search', '/search'], ['Home', '/home'],
    ]) {
      if (!await navigation.isVisible()) await toggle.click();
      const link = navigation.getByRole('link', { name, exact: true });
      await link.scrollIntoViewIfNeeded();
      await expect(link).toBeInViewport();
      await link.click();
      await expect(page).toHaveURL(new RegExp(`${path}$`));
      await expect(navigation).toHaveCount(0);
    }
    await toggle.click();
    await page.keyboard.press('Escape');
    await expect(navigation).toHaveCount(0);
    await expect(toggle).toBeFocused();
    expect(await page.locator('.site-header').evaluate(header => header.scrollWidth <= window.innerWidth)).toBe(true);
  });
}

test('mobile menu closes when switching to desktop', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/home', { waitUntil: 'domcontentloaded' });
  await page.getByRole('button', { name: 'Toggle navigation' }).click();
  await page.setViewportSize({ width: 1440, height: 900 });
  await expect(page.getByRole('navigation', { name: 'Mobile navigation', exact: true })).toHaveCount(0);
  await page.getByRole('button', { name: 'Projects menu', exact: true }).click();
  await expect(page.locator('.site-nav__dropdown').getByRole('link', { name: 'Research' })).toBeVisible();
});
