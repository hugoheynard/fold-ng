import { test, expect, devices, type Page } from "@playwright/test";

// Mobile browsers (iOS Safari, and Android browsers that follow it) zoom onto a
// focused field whose text is under 16px, and stay zoomed. fold floors the text of every keyboard-taking field under
// `@media (pointer: coarse)` — touch only; a mouse keeps the scale. Chromium
// with touch emulation is enough to prove the rule applies: what Safari reads
// is the computed font-size of the focused field.

// One iPhone and one Android profile — run in Chromium with touch emulation
// (the media query is what is under test, not the engine).
const PROFILES = { iPhone: devices["iPhone 13"], Android: devices["Pixel 7"] };
const FIELDS =
  "input:not([type=checkbox]):not([type=radio]):not([type=range]):not([type=file]), textarea, select";

/** Focus each field, read its computed font-size in px. */
async function focusedSizes(page: Page, scope: string): Promise<number[]> {
  const fields = page.locator(`${scope} :is(${FIELDS})`);
  await fields.first().waitFor();
  const n = await fields.count();
  expect(n).toBeGreaterThan(0);
  const sizes: number[] = [];
  for (let i = 0; i < n; i++) {
    const f = fields.nth(i);
    if (!(await f.isVisible()) || (await f.isDisabled())) {
      continue;
    }
    await f.focus();
    sizes.push(
      await f.evaluate((el) => parseFloat(getComputedStyle(el).fontSize)),
    );
  }
  expect(sizes.length).toBeGreaterThan(0);
  return sizes;
}

for (const [name, device] of Object.entries(PROFILES)) {
  test.describe(`on a touch screen — ${name}`, () => {
    test.use({
      viewport: device.viewport,
      deviceScaleFactor: device.deviceScaleFactor,
      isMobile: true,
      hasTouch: true,
    });

    test("the pointer is coarse", async ({ page }) => {
      await page.goto("/#/form");
      expect(
        await page.evaluate(() => matchMedia("(pointer: coarse)").matches),
      ).toBe(true);
    });

    test("fold-input (sm / md / lg) renders ≥ 16px at focus", async ({
      page,
    }) => {
      await page.goto("/#/form");
      for (const px of await focusedSizes(page, "fold-input")) {
        expect(px).toBeGreaterThanOrEqual(16);
      }
    });

    test("fold-combobox renders ≥ 16px at focus", async ({ page }) => {
      await page.goto("/#/combobox");
      for (const px of await focusedSizes(page, "fold-combobox")) {
        expect(px).toBeGreaterThanOrEqual(16);
      }
    });

    test("the multiselect search field renders ≥ 16px at focus", async ({
      page,
    }) => {
      await page.goto("/#/listbox");
      await page.getByRole("tab", { name: "multiselect" }).click();
      const ms = page
        .locator("fold-multiselect")
        .filter({ hasText: "Allergènes" });
      await ms.locator(".lb-trigger").click();
      const search = ms.getByRole("searchbox");
      await expect(search).toBeFocused();
      expect(
        await search.evaluate((el) =>
          parseFloat(getComputedStyle(el).fontSize),
        ),
      ).toBeGreaterThanOrEqual(16);
    });
  });
}

test("with a mouse, the field keeps its scale (sm stays under 16px)", async ({
  page,
}) => {
  await page.goto("/#/form");
  const sizes = await focusedSizes(page, "fold-input.sm");
  expect(Math.min(...sizes)).toBeLessThan(16);
});
