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

/**
 * Width in the frame's OWN pixels.
 *
 * Not `boundingBox()`: the playground scales the preview iframe with a CSS
 * transform, so Playwright reports the scaled size and an absolute assertion
 * silently drifts with the device ruler. Measured inside the frame instead,
 * where the transform does not apply.
 */
async function width(
  locator: ReturnType<FrameLocator["locator"]>,
): Promise<number> {
  return locator.evaluate((el) => el.getBoundingClientRect().width);
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

test.describe("nav layout · a collapsed rail hugs its icons", () => {
  test("the track narrows with no consumer-set rail width", async ({
    page,
  }) => {
    // The acceptance criterion, literally: the demo used to post
    // `--fold-nav-layout-rail-width: 56px` by hand for exactly this case, and
    // that workaround is gone. `collapsed` belongs to the bar and the track to
    // the layout; they now meet on the DI context.
    const frame = await openTabNav(page);
    await setParam(page, "direction", "vertical");

    const track = frame.locator("fold-nav-layout .tl-nav").first();
    await expect(track).toBeVisible();
    const expanded = await width(track);

    await setParam(page, "collapsed", "icons");
    await expect(
      frame.locator("fold-view-nav .tab-bar.is-collapsed"),
    ).toBeVisible();
    const collapsed = await width(track);

    const icon = await width(
      frame.locator("fold-view-nav .tab-bar-icon").first(),
    );
    // Hugs: within a couple of paddings of the icon itself, not a 200px track.
    expect(collapsed).toBeLessThan(expanded / 2);
    expect(collapsed).toBeLessThan(icon + 48);
  });

  test("an explicit rail width still wins", async ({ page }) => {
    // The fix must not take the knob away from a consumer who wants one.
    const frame = await openTabNav(page);
    await setParam(page, "direction", "vertical");
    await setParam(page, "collapsed", "icons");

    const track = frame.locator("fold-nav-layout .tl-nav").first();
    await frame
      .locator("fold-nav-layout")
      .first()
      .evaluate((el: HTMLElement) => {
        el.style.setProperty("--fold-nav-layout-rail-width", "120px");
      });
    await expect.poll(async () => Math.round(await width(track))).toBe(120);
  });
});

test.describe("tab bar · a busy collapsed bar scrolls", () => {
  test("horizontal + collapsed is a scroller, and the active label survives", async ({
    page,
  }) => {
    // The accordion was excluded from the scroll because it "fits any width".
    // It does not: the squeezed item was the active one, the only one that
    // keeps its label, so the current page's name became an ellipsis.
    const frame = await openTabNav(page);
    await setParam(page, "direction", "horizontal");
    await setParam(page, "collapsed", "icons");
    await expect(
      frame.locator("fold-view-nav .tab-bar.is-collapsed"),
    ).toBeVisible();

    const host = frame.locator("fold-view-nav").first();
    expect(await host.evaluate((el) => getComputedStyle(el).overflowX)).toBe(
      "auto",
    );

    // The active label is laid out at its full text width, not clipped to fit.
    const cropped = await frame
      .locator(".tab-bar-item.is-active .tab-bar-label")
      .first()
      .evaluate((el) => el.scrollWidth > el.clientWidth + 1);
    expect(cropped).toBe(false);
  });

  test("a collapsed VERTICAL rail still lets its tooltips escape", async ({
    page,
  }) => {
    // The rail does not scroll, so it keeps `overflow: visible`. The fix must
    // not take that from it.
    const frame = await openTabNav(page);
    await setParam(page, "direction", "vertical");
    await setParam(page, "collapsed", "icons");

    const overflow = await frame
      .locator("fold-view-nav")
      .first()
      .evaluate((el) => getComputedStyle(el).overflow);
    expect(overflow).toBe("visible");
  });
});

test.describe("tab bar · a collapsed tooltip lives in the top layer", () => {
  test("it escapes the scroller, on a horizontal collapsed bar", async ({
    page,
  }) => {
    // The whole point of the move: the bar is a scroll box now, and a scroller
    // clips. An absolutely-positioned tooltip could not survive that; a shown
    // `popover` renders above everything with no ancestor to arrange.
    const frame = await openTabNav(page);
    await setParam(page, "direction", "horizontal");
    await setParam(page, "collapsed", "icons");

    const inactive = frame.locator(".tab-bar-item:not(.is-active)").first();
    const label = inactive.locator(".tab-bar-label");

    // Hidden until hovered — a `[popover]` is `display: none` until shown.
    await expect(label).toBeHidden();

    await inactive.hover();
    await expect(label).toBeVisible();

    const escaped = await label.evaluate((el) => {
      const bar = el.closest("fold-view-nav");
      if (bar === null) {
        return false;
      }
      const tip = el.getBoundingClientRect();
      const box = bar.getBoundingClientRect();
      // Below the bar's own box — i.e. outside what the scroller would clip.
      return tip.top >= box.bottom - 1;
    });
    expect(escaped).toBe(true);
  });

  test("an icon-only item still has a name", async ({ page }) => {
    // `opacity: 0` kept the label in the accessibility tree; `display: none`
    // does not. An icon with no name is worse than a clipped tooltip.
    const frame = await openTabNav(page);
    await setParam(page, "direction", "vertical");
    await setParam(page, "collapsed", "icons");

    const item = frame.locator(".tab-bar-item").first();
    const name = await item.getAttribute("aria-label");
    expect(name).not.toBeNull();
    expect(name?.length).toBeGreaterThan(0);
  });

  test("an expanded bar keeps its label inline, with no popover", async ({
    page,
  }) => {
    // The directive must be inert outside the collapsed modes.
    const frame = await openTabNav(page);
    await setParam(page, "direction", "horizontal");
    await setParam(page, "collapsed", "off");

    const label = frame.locator(".tab-bar-item .tab-bar-label").first();
    await expect(label).toBeVisible();
    expect(await label.getAttribute("popover")).toBeNull();
  });
});
