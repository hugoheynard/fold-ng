import { test, expect, type Page } from "@playwright/test";

/**
 * Visual regression for the calendar — the tier that catches what neither a
 * unit test nor axe can see.
 *
 * Both visual bugs that reached this family got through a green suite: a week
 * chip truncated to a single letter at a narrow width, and a custom chip
 * wrapping out of its lane. Nothing asserted a pixel, so nothing failed.
 *
 * Shot per theme, because the tone scale and the surfaces are the thing most
 * likely to break when a token moves, and once in RTL, because the family
 * claims logical properties throughout and "it looks supported until an Arabic
 * locale ships" is the failure mode that claim invites.
 *
 * Baselines are written on the first run and committed; a diff over the
 * threshold is a real change that someone has to look at.
 */

// Pinned: the week view is container-queried, so a pixel of width decides
// whether a chip keeps its subline — which is the very thing being shot.
test.use({ viewport: { width: 1280, height: 900 } });

const THEMES = ["umbra", "lumen"] as const;

/**
 * The month only, on purpose.
 *
 * The week view is container-queried and the time grid scrolls, so both settle
 * a pixel differently between runs against a live dev server — a screenshot
 * test that fails one run in three teaches people to ignore it, which is worse
 * than not having it. Their geometry is asserted by measurement instead
 * (`calendar.spec.ts`: a block's offset against the hour rules, a chip's label
 * length under a container query), which is stable and says more about *why*.
 *
 * Add them here the day this runs against a pinned CI browser.
 */
const VIEWS = [
  ["/#/calendar-month", "calendar-month", "fold-calendar-month"],
] as const;

async function settle(page: Page, heading: string): Promise<void> {
  await expect(page.getByRole("heading", { name: heading })).toBeVisible();
  // The grids animate nothing, but fonts and the icon sprite land a tick late.
  await page.waitForLoadState("networkidle");
}

/**
 * Switches the gallery's theme and waits for it to land.
 *
 * Waited on the switcher's own `is-on`, not on a `data-theme` attribute: umbra
 * is the base theme and carries none, so an attribute check is `undefined` for
 * exactly one of the values and silently right for the others.
 */
async function useTheme(page: Page, theme: string): Promise<void> {
  const button = page.locator(".gal-theme", { hasText: theme });
  await button.click();
  await expect(button).toHaveClass(/is-on/);
}

for (const theme of THEMES) {
  for (const [route, heading, selector] of VIEWS) {
    test(`${selector} looks right in ${theme}`, async ({ page }) => {
      await page.goto(route);
      await settle(page, heading);
      await useTheme(page, theme);

      await expect(page.locator(selector).first()).toHaveScreenshot(
        `${selector}-${theme}.png`,
        { maxDiffPixelRatio: 0.01 },
      );
    });
  }
}

test("the month grid mirrors cleanly in RTL", async ({ page }) => {
  // Continuation edges, chevrons, cell separators and chip padding are all
  // logical properties; this is the shot that proves it rather than claiming it.
  await page.goto("/#/calendar-month");
  await settle(page, "calendar-month");
  await page.evaluate(() => {
    document.documentElement.setAttribute("dir", "rtl");
  });

  await expect(page.locator("fold-calendar-month").first()).toHaveScreenshot(
    "fold-calendar-month-rtl.png",
    { maxDiffPixelRatio: 0.01 },
  );
});
