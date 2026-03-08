import { test, expect, Page } from '@playwright/test';

// ── Helpers ──────────────────────────────────────────────────────────────────

async function checkNoHorizontalOverflow(page: Page) {
  const overflow = await page.evaluate(() => {
    return document.documentElement.scrollWidth > document.documentElement.clientWidth;
  });
  expect(overflow, 'Page should not have horizontal overflow').toBe(false);
}

async function checkNoOverlappingElements(page: Page) {
  const overlaps = await page.evaluate(() => {
    const elements = Array.from(document.querySelectorAll('nav, h1, h2, p, a, button, input, textarea'));
    const rects = elements.map(el => {
      const r = el.getBoundingClientRect();
      return { el: el.tagName + (el.id ? `#${el.id}` : ''), top: r.top, left: r.left, bottom: r.bottom, right: r.right, width: r.width, height: r.height };
    }).filter(r => r.width > 0 && r.height > 0 && r.top >= 0);

    const issues: string[] = [];
    for (let i = 0; i < rects.length; i++) {
      for (let j = i + 1; j < rects.length; j++) {
        const a = rects[i], b = rects[j];
        const overlapX = Math.min(a.right, b.right) - Math.max(a.left, b.left);
        const overlapY = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
        if (overlapX > 20 && overlapY > 20) {
          issues.push(`${a.el} overlaps ${b.el}`);
        }
      }
    }
    return issues.slice(0, 5); // cap output
  });
  expect(overlaps, `Overlapping elements detected: ${overlaps.join(', ')}`).toHaveLength(0);
}

async function checkNavVisible(page: Page) {
  const logo = page.getByText('patter');
  await expect(logo).toBeVisible();
  const contactBtn = page.getByRole('link', { name: /get in touch/i });
  await expect(contactBtn).toBeVisible();
}

// ── Pages under test ──────────────────────────────────────────────────────────

const pages = [
  { path: '/', name: 'Home' },
  { path: '/services', name: 'Services' },
  { path: '/about', name: 'About' },
  { path: '/contact', name: 'Contact' },
];

// ── Tests ─────────────────────────────────────────────────────────────────────

for (const { path, name } of pages) {
  test.describe(`${name} page`, () => {

    test('loads without errors', async ({ page }) => {
      const errors: string[] = [];
      page.on('console', msg => { if (msg.type() === 'error') errors.push(msg.text()); });
      page.on('pageerror', err => errors.push(err.message));

      const response = await page.goto(path);
      expect(response?.status(), `${name} should return 200`).toBe(200);
      expect(errors.filter(e => !e.includes('favicon')), `No console errors on ${name}`).toHaveLength(0);
    });

    test('nav is visible and aligned', async ({ page }) => {
      await page.goto(path);
      await checkNavVisible(page);

      // Nav should be a single line (no wrapping/overflow)
      const navHeight = await page.locator('nav').first().evaluate(el => el.getBoundingClientRect().height);
      expect(navHeight, 'Nav should be compact (< 80px)').toBeLessThan(80);
    });

    test('no horizontal overflow', async ({ page }) => {
      await page.goto(path);
      await checkNoHorizontalOverflow(page);
    });

    test('no overlapping elements', async ({ page }) => {
      await page.goto(path);
      // Scroll through the page to trigger any lazy elements
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      await page.evaluate(() => window.scrollTo(0, 0));
      await checkNoOverlappingElements(page);
    });

  });
}

// ── Home page specific ────────────────────────────────────────────────────────

test.describe('Home page content', () => {
  test('hero headline and CTA are visible', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText('Your mountain.')).toBeVisible();
    await expect(page.getByRole('link', { name: /build my app/i })).toBeVisible();
  });

  test('live demo section is present', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText('Live Demo')).toBeVisible();
    await expect(page.getByText('Ridgeline Resort')).toBeVisible();
    await expect(page.getByText('Live', { exact: true })).toBeVisible();
  });

  test('shows run and lift status cards', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText('Summit Express')).toBeVisible();
    await expect(page.getByText('Eagle Gondola')).toBeVisible();
  });
});

// ── Contact form ──────────────────────────────────────────────────────────────

test.describe('Contact form', () => {
  test('all form fields are present and interactive', async ({ page }) => {
    await page.goto('/contact');
    await expect(page.getByLabel('First name')).toBeVisible();
    await expect(page.getByLabel('Last name')).toBeVisible();
    await expect(page.getByLabel('Email')).toBeVisible();
    await expect(page.getByLabel('Resort name')).toBeVisible();
    await expect(page.getByLabel(/pistes/i)).toBeVisible();
    await expect(page.getByLabel(/what does your resort need/i)).toBeVisible();
    await expect(page.getByRole('button', { name: /send message/i })).toBeVisible();
  });

  test('form can be filled out', async ({ page }) => {
    await page.goto('/contact');
    await page.getByLabel('First name').fill('Test');
    await page.getByLabel('Last name').fill('Resort');
    await page.getByLabel('Email').fill('test@resort.com');
    await page.getByLabel('Resort name').fill('Test Mountain');
    await page.getByLabel(/what does your resort need/i).fill('Need a live run status app');
    // Verify values were entered
    await expect(page.getByLabel('First name')).toHaveValue('Test');
    await expect(page.getByLabel('Email')).toHaveValue('test@resort.com');
  });
});

// ── Mobile-specific ───────────────────────────────────────────────────────────

test.describe('Mobile layout', () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test('About principles stack vertically on mobile', async ({ page }) => {
    await page.goto('/about');
    const principles = page.locator('text=Bespoke, not templated').locator('..');
    await expect(principles).toBeVisible();
    await checkNoHorizontalOverflow(page);
  });

  test('Services bullets stack on mobile', async ({ page }) => {
    await page.goto('/services');
    await checkNoHorizontalOverflow(page);
    await expect(page.getByText('Bespoke Resort App')).toBeVisible();
  });

  test('Contact name fields stack on mobile', async ({ page }) => {
    await page.goto('/contact');
    await checkNoHorizontalOverflow(page);
    await expect(page.getByLabel('First name')).toBeVisible();
    await expect(page.getByLabel('Last name')).toBeVisible();
  });
});
