import { test, expect, type FrameLocator, type Page } from "@playwright/test";

/**
 * Geometry contract for `fold-nav-layout` / `fold-view-nav` / the tab bar.
 *
 * MEASUREMENT, not pixels — deliberately, and for the reason
 * `calendar-visual.spec.ts` already states: pixel baselines are per-platform,
 * so they cannot gate CI, and a snapshot says *that* something moved while a
 * measurement says *what*. Every assertion here maps to one acceptance
 * criterion of the nav diagnostic.
 *
 * Everything runs inside the playground's preview `<iframe>` — a real isolated
 * viewport, which is also what makes the fold thresholds meaningful.
 */

const STAGE = ".pg-vp-iframe";

async function openTabNav(page: Page): Promise<FrameLocator> {
  await page.goto("/#/tab-nav");
  await page.waitForLoadState("networkidle");
  const frame = page.frameLocator(STAGE);
  // The bar lives in the playground's preview iframe — a real isolated
  // viewport, which is what makes a fold threshold mean anything here.
  await expect(
    frame.locator("fold-view-nav .tab-bar-item").first(),
  ).toBeVisible();
  return frame;
}

/** Click a playground control by its `params` label and the option's text. */
async function setParam(
  page: Page,
  label: string,
  option: string,
): Promise<void> {
  const field = page.locator(".np-field", { hasText: label }).first();
  await field.getByRole("button", { name: option, exact: true }).click();
}

interface Type {
  readonly size: string;
  readonly weight: string;
}

async function labelType(frame: FrameLocator): Promise<Type> {
  return frame
    .locator("fold-view-nav .tab-bar-item")
    .first()
    .evaluate((el) => {
      const s = getComputedStyle(el);
      return { size: s.fontSize, weight: s.fontWeight };
    });
}

test.describe("tab bar · typography answers to size alone", () => {
  test("orientation does not restyle the labels", async ({ page }) => {
    // The `direction="auto"` fold used to swap 10px/600 for 12px/500, so
    // crossing `foldAt` recomposed the menu instead of moving it.
    const frame = await openTabNav(page);

    await setParam(page, "direction", "horizontal");
    const horizontal = await labelType(frame);

    await setParam(page, "direction", "vertical");
    const vertical = await labelType(frame);

    expect(vertical).toEqual(horizontal);
  });

  test("size is the axis that does move type", async ({ page }) => {
    const frame = await openTabNav(page);
    await setParam(page, "direction", "horizontal");

    await setParam(page, "size", "compact");
    const compact = await labelType(frame);

    await setParam(page, "size", "comfortable");
    const comfortable = await labelType(frame);

    expect(parseFloat(comfortable.size)).toBeGreaterThan(
      parseFloat(compact.size),
    );
  });
});

test.describe("tab bar · a filled pill is not clipped by its banner", () => {
  test("background=surface + activeStyle=fill pads both ends", async ({
    page,
  }) => {
    const frame = await openTabNav(page);
    await setParam(page, "direction", "horizontal");
    await setParam(page, "background", "surface");
    await setParam(page, "activeStyle", "fill");

    const pad = await frame
      .locator("fold-view-nav .tab-bar.bg-surface")
      .first()
      .evaluate((el) => {
        const s = getComputedStyle(el);
        return { top: s.paddingTop, bottom: s.paddingBottom };
      });
    expect(pad.bottom).toBe(pad.top);
  });

  test("activeStyle=underline still lets the active item reach the rule", async ({
    page,
  }) => {
    // The zero bottom padding is RIGHT here — the fix must not generalise.
    const frame = await openTabNav(page);
    await setParam(page, "direction", "horizontal");
    await setParam(page, "background", "surface");
    await setParam(page, "activeStyle", "underline");

    const bottom = await frame
      .locator("fold-view-nav .tab-bar.bg-surface")
      .first()
      .evaluate((el) => getComputedStyle(el).paddingBottom);
    expect(parseFloat(bottom)).toBe(0);
  });
});
