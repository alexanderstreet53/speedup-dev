import { test, expect, Page } from '@playwright/test';

// ── Helpers ───────────────────────────────────────────────────────────────────

async function checkNoHorizontalOverflow(page: Page) {
  const overflow = await page.evaluate(() =>
    document.documentElement.scrollWidth > document.documentElement.clientWidth
  );
  expect(overflow, 'Page should not have horizontal overflow').toBe(false);
}

async function checkNoOverlappingElements(page: Page) {
  const overlaps = await page.evaluate(() => {
    // Only check leaf-level interactive/content elements (not containers)
    const selectors = ['h1', 'h2', 'h3', 'a', 'button', 'input', 'select', 'textarea'];
    const elements = Array.from(document.querySelectorAll(selectors.join(',')));

    const rects = elements
      .map(el => ({
        el,
        tag: el.tagName,
        text: (el.textContent ?? '').trim().slice(0, 30),
        rect: el.getBoundingClientRect(),
      }))
      .filter(({ rect }) =>
        rect.width > 5 && rect.height > 5 && rect.top >= 0 && rect.top < window.innerHeight * 3
      );

    const issues: string[] = [];
    for (let i = 0; i < rects.length; i++) {
      for (let j = i + 1; j < rects.length; j++) {
        const a = rects[i], b = rects[j];

        // Skip if one element contains the other
        if (a.el.contains(b.el) || b.el.contains(a.el)) continue;

        const overlapX = Math.min(a.rect.right, b.rect.right) - Math.max(a.rect.left, b.rect.left);
        const overlapY = Math.min(a.rect.bottom, b.rect.bottom) - Math.max(a.rect.top, b.rect.top);

        // Only flag if substantial overlap in both axes (>30px) — rules out margin/padding edge cases
        if (overlapX > 30 && overlapY > 30) {
          issues.push(`"${a.text}" (${a.tag}) overlaps "${b.text}" (${b.tag})`);
        }
      }
    }
    return issues.slice(0, 5);
  });
  expect(overlaps, `Overlapping elements: ${overlaps.join(' | ')}`).toHaveLength(0);
}

async function checkNavVisible(page: Page) {
  await expect(page.getByText('patter').first()).toBeVisible();
  await expect(page.getByRole('link', { name: /get in touch/i }).first()).toBeVisible();
}

async function checkNavSingleRow(page: Page) {
  // Nav should be compact — no taller than 100px (single row)
  const navHeight = await page.locator('nav').first().evaluate(
    el => el.getBoundingClientRect().height
  );
  expect(navHeight, `Nav height ${navHeight}px should be a single row (< 100px)`).toBeLessThan(100);
}

// ── Pages ─────────────────────────────────────────────────────────────────────

const pages = [
  { path: '/',         name: 'Home'     },
  { path: '/services', name: 'Services' },
  { path: '/about',    name: 'About'    },
  { path: '/contact',  name: 'Contact'  },
];

// ── Per-page tests ────────────────────────────────────────────────────────────

for (const { path, name } of pages) {
  test.describe(`${name} page`, () => {

    test('loads with status 200 and no console errors', async ({ page }) => {
      const errors: string[] = [];
      page.on('console', msg => { if (msg.type() === 'error') errors.push(msg.text()); });
      page.on('pageerror', err => errors.push(err.message));

      const response = await page.goto(path);
      expect(response?.status()).toBe(200);
      const realErrors = errors.filter(e => !e.includes('favicon') && !e.includes('404'));
      expect(realErrors, `Console errors on ${name}: ${realErrors.join(', ')}`).toHaveLength(0);
    });

    test('nav is visible and single row', async ({ page }) => {
      await page.goto(path);
      await checkNavVisible(page);
      await checkNavSingleRow(page);
    });

    test('no horizontal overflow', async ({ page }) => {
      await page.goto(path);
      await checkNoHorizontalOverflow(page);
    });

    test('no overlapping interactive elements', async ({ page }) => {
      await page.goto(path);
      await page.waitForLoadState('networkidle');
      await checkNoOverlappingElements(page);
    });

  });
}

// ── Home page content ─────────────────────────────────────────────────────────

test.describe('Home page content', () => {

  test('hero section is present with headline and CTA', async ({ page }) => {
    await page.goto('/');
    // Partial text match — robust to line breaks in JSX
    await expect(page.locator('h1')).toContainText('mountain');
    await expect(page.locator('h1')).toContainText('Live');
    await expect(page.getByRole('link', { name: /build my app/i })).toBeVisible();
  });

  test('live demo section shows resort name and status', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText('Live Demo')).toBeVisible();
    await expect(page.getByText('Ridgeline Resort')).toBeVisible();
  });

  test('shows run and lift status cards', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText('Summit Express')).toBeVisible();
    await expect(page.getByText('Eagle Gondola')).toBeVisible();
  });

  test('stats section is present', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText('Resorts powered')).toBeVisible();
    await expect(page.getByText('Runs tracked live')).toBeVisible();
  });

});

// ── Contact form ──────────────────────────────────────────────────────────────

test.describe('Contact form', () => {

  test('all form fields are present', async ({ page }) => {
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
    await expect(page.getByLabel('First name')).toHaveValue('Test');
    await expect(page.getByLabel('Email')).toHaveValue('test@resort.com');
  });

  test('submit button is enabled on load', async ({ page }) => {
    await page.goto('/contact');
    const btn = page.getByRole('button', { name: /send message/i });
    await expect(btn).toBeEnabled();
  });

});

// ── Mobile-specific ───────────────────────────────────────────────────────────

test.describe('Mobile layout', () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test('home page: no overflow on mobile', async ({ page }) => {
    await page.goto('/');
    await checkNoHorizontalOverflow(page);
    await expect(page.locator('h1')).toContainText('mountain');
  });

  test('about page: principles visible on mobile', async ({ page }) => {
    await page.goto('/about');
    await checkNoHorizontalOverflow(page);
    await expect(page.getByText('Bespoke, not templated')).toBeVisible();
    await expect(page.getByText('Live means live')).toBeVisible();
  });

  test('services page: no overflow on mobile', async ({ page }) => {
    await page.goto('/services');
    await checkNoHorizontalOverflow(page);
    await expect(page.getByText('Bespoke Resort App')).toBeVisible();
  });

  test('contact page: form fields accessible on mobile', async ({ page }) => {
    await page.goto('/contact');
    await checkNoHorizontalOverflow(page);
    await expect(page.getByLabel('First name')).toBeVisible();
    await expect(page.getByLabel('Last name')).toBeVisible();
  });

});

// ── API health check ──────────────────────────────────────────────────────────

test.describe('API', () => {

  test('/api/health returns ok', async ({ request, baseURL }) => {
    const res = await request.get(`${baseURL}/api/health`);
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(body.status).toBe('ok');
    expect(body.timestamp).toBeTruthy();
  });

});
