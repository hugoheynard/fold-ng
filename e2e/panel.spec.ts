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

/**
 * The bottom sheet must sit on the BOTTOM edge.
 *
 * `side="auto"` narrow used to align the dock — `.panel-dock { align-items:
 * flex-end }` inside `@container`. An element can't match its own container
 * query (`container-type` makes the dock a container for its *descendants*), so
 * the rule never applied: the sheet kept `stretch`, and a `height: auto` sheet
 * under `stretch` hangs off the TOP. A bottom sheet at the top of the screen.
 *
 * jsdom has no layout and no container queries — hence a browser test, and one
 * that measures the gap to the bottom edge rather than reading a style: what
 * matters is where the thing IS.
 */
test("a narrow `side=auto` panel docks to the bottom edge", async ({
  page,
}) => {
  // A WIDE viewport with a NARROW stage — the case the promise is about
  // ("keyed off the stage's own width, not the viewport"), and the one that
  // discriminates: shrinking the viewport too would make some *ancestor*
  // container match ≤640 and the old dock rule would resolve against it,
  // hiding the bug behind the gallery's own layout.
  await page.setViewportSize({ width: 1280, height: 700 });
  await page.goto("/#/panel");
  await page.addStyleTag({ content: ".panel-stage { width: 400px; }" });
  const stage = page.locator(".panel-stage");
  await expect(stage).toBeVisible();

  await page.getByRole("button", { name: "Auto (by width)" }).click();
  const sheet = page.locator(".panel-stage .panel");
  await expect(sheet).toBeVisible();
  // Let the slide-up settle before measuring.
  await page.waitForTimeout(400);

  const [sheetBox, stageBox] = await Promise.all([
    sheet.boundingBox(),
    stage.boundingBox(),
  ]);
  const stageBottom = (stageBox?.y ?? 0) + (stageBox?.height ?? 0);
  const sheetBottom = (sheetBox?.y ?? 0) + (sheetBox?.height ?? 0);

  // Flush with the stage's bottom (a hairline of tolerance for borders).
  expect(Math.abs(sheetBottom - stageBottom)).toBeLessThanOrEqual(2);

  // …and it HUGS ITS CONTENT. This is the assertion that catches the bug: an
  // unaligned sheet inherits the dock's `stretch` and fills the whole dock, so
  // it *also* touches the bottom — while reading, to anyone looking at it, as
  // a panel stuck to the top. Height is what tells the two apart.
  expect(sheetBox?.height ?? 0).toBeLessThan((stageBox?.height ?? 0) - 40);
});
