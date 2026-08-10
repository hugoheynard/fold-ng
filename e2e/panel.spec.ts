import { test, expect } from "@playwright/test";

/**
 * The panel-open glitch, as a regression test.
 *
 * A panel starts its enter animation parked off-edge (`translateX(100%)`). If
 * the dock doesn't clip, that parked panel joins the positioned host's
 * **scrollable overflow** — and the browser, moving focus into the panel, then
 * scrolls the host sideways to reveal it. The main content jumped left by the
 * panel's width and eased back as the slide-in shrank the overflow again.
 *
 * jsdom can't see any of this: it has no layout, no animation, and no focus
 * scrolling. Hence a browser test.
 */
test("opening a panel never scrolls the page sideways", async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 500 });
  await page.goto("/#/panel");
  const stage = page.locator(".panel-stage");
  await expect(stage).toBeVisible();

  const restWidth = await stage.evaluate((el) => el.scrollWidth);

  // Sample every frame across the whole enter animation, not just after it —
  // the glitch was transient and would be invisible to a settled assertion.
  await stage.evaluate((el) => {
    const w = window as unknown as { __peak?: { left: number; width: number } };
    w.__peak = { left: 0, width: 0 };
    let frames = 0;
    const tick = () => {
      w.__peak = {
        left: Math.max(w.__peak?.left ?? 0, el.scrollLeft),
        width: Math.max(w.__peak?.width ?? 0, el.scrollWidth),
      };
      frames += 1;
      if (frames < 60) {
        requestAnimationFrame(tick);
      }
    };
    requestAnimationFrame(tick);
  });

  await page.getByRole("button", { name: "Modal · glass" }).click();
  await page.waitForTimeout(1200);

  const peak = await page.evaluate(
    () =>
      (window as unknown as { __peak: { left: number; width: number } }).__peak,
  );

  expect(peak.left).toBe(0);
  expect(peak.width).toBe(restWidth);
});
