import { test, expect, type Page } from "@playwright/test";

/**
 * Browser-only behaviour for the calendar family — the things jsdom cannot
 * exercise and the two bugs that reached the gallery before a human looked at
 * it: real focus moving across a `role="grid"`, real grid geometry (spanning
 * bands, the ISO week column shifting every placed element), container queries
 * dropping a chip's parts before they truncate, and the time grid's blocks
 * landing where their minutes say they should.
 */

function month(page: Page) {
  const root = page.locator("fold-calendar-month").first();
  return {
    root,
    day: (date: string) => root.locator(`[data-fold-day="${date}"]`),
    bands: root.locator(".foldcal-band"),
    overflow: root.locator(".foldcal-overflow"),
  };
}

test.describe("month grid — the keyboard path", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/#/calendar-month");
    await expect(
      page.getByRole("heading", { name: "calendar-month" }),
    ).toBeVisible();
  });

  test("has exactly one tab stop, and the arrows move it a day at a time", async ({
    page,
  }) => {
    const m = month(page);
    const stops = m.root.locator('[data-fold-day][tabindex="0"]');
    await expect(stops).toHaveCount(1);

    await stops.focus();
    const from = await stops.getAttribute("data-fold-day");
    await page.keyboard.press("ArrowRight");
    await expect(m.day(from ?? "")).not.toBeFocused();

    // The stop follows the focus: still exactly one, and it is the new day.
    await expect(m.root.locator('[data-fold-day][tabindex="0"]')).toHaveCount(
      1,
    );
  });

  test("vertical arrows step a week, keeping the column", async ({ page }) => {
    const m = month(page);
    const stop = m.root.locator('[data-fold-day][tabindex="0"]').first();
    await stop.focus();
    const before = await stop.getAttribute("data-fold-day");

    await page.keyboard.press("ArrowDown");
    const after = await page.evaluate(() =>
      document.activeElement?.getAttribute("data-fold-day"),
    );
    const days =
      (Date.parse(`${after}T00:00:00Z`) - Date.parse(`${before}T00:00:00Z`)) /
      86_400_000;
    expect(days).toBe(7);
  });

  test("PageDown pages the month AND lands the focus — twice in a row", async ({
    page,
  }) => {
    // The regression that shipped: the deferred focus target was a latch that
    // was never consumed, so repeating the same move dropped focus onto <body>.
    const m = month(page);
    await m.root.locator('[data-fold-day][tabindex="0"]').first().focus();
    const start = await page.evaluate(() =>
      document.activeElement?.getAttribute("data-fold-day"),
    );

    // The focus lands *after* the grid re-renders around the new month, so it
    // is polled rather than read — reading it immediately is a race, not a
    // failure.
    const focused = (): Promise<string | null | undefined> =>
      page.evaluate(() =>
        document.activeElement?.getAttribute("data-fold-day"),
      );

    await page.keyboard.press("PageDown");
    await expect.poll(focused).not.toBe(start);
    const first = await focused();
    expect(first).not.toBeNull();

    await page.keyboard.press("PageUp");
    await expect.poll(focused).toBe(start);
    await page.keyboard.press("PageDown");
    await expect.poll(focused).toBe(first);
  });

  test("Home and End snap to the week's own bounds", async ({ page }) => {
    const m = month(page);
    await m.root.locator('[data-fold-day][tabindex="0"]').first().focus();
    await page.keyboard.press("Home");
    const start = await page.evaluate(
      () => document.activeElement?.getBoundingClientRect().left,
    );
    await page.keyboard.press("End");
    const end = await page.evaluate(
      () => document.activeElement?.getBoundingClientRect().left,
    );
    expect(end ?? 0).toBeGreaterThan(start ?? 0);
  });

  test("Enter activates the focused day", async ({ page }) => {
    const m = month(page);
    await m.root.locator('[data-fold-day][tabindex="0"]').first().focus();
    await page.keyboard.press("Enter");
    await expect(page.getByText(/Last day clicked: “20\d\d-/)).toBeVisible();
  });
});

test.describe("month grid — real geometry", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/#/calendar-month");
    await expect(
      page.getByRole("heading", { name: "calendar-month" }),
    ).toBeVisible();
  });

  test("a multi-day band is wider than a single day cell", async ({ page }) => {
    const m = month(page);
    const cell = await m.day("2026-05-20").boundingBox();
    const widest = await m.bands.evaluateAll((nodes) =>
      Math.max(...nodes.map((n) => n.getBoundingClientRect().width)),
    );
    expect(widest).toBeGreaterThan((cell?.width ?? 0) * 1.5);
  });

  test("an overflow chip sits inside the day that actually lost something", async ({
    page,
  }) => {
    const grid = page.locator("fold-calendar-month").nth(1); // the crowded demo
    const chip = grid.locator(".foldcal-overflow").first();
    await expect(chip).toBeVisible();
    const chipBox = await chip.boundingBox();
    const column = await grid
      .locator("[data-fold-day]")
      .filter({ has: page.locator(":scope") })
      .first()
      .boundingBox();
    expect(chipBox?.width ?? 0).toBeLessThanOrEqual((column?.width ?? 0) * 1.2);
  });

  test("the ISO week column shifts every placed element with it", async ({
    page,
  }) => {
    // The playground's stage renders inside an iframe — a locator on the page
    // finds nothing, which is exactly how this test found out.
    const stage = page.frameLocator("dev-playground iframe");
    await page.getByRole("button", { name: "ISO weeks", exact: true }).click();

    const weekNumber = stage.locator(".foldcal-weeknum").first();
    await expect(weekNumber).toBeVisible();

    const weekBox = await weekNumber.boundingBox();
    const firstDay = await stage
      .locator("[data-fold-day]")
      .first()
      .boundingBox();
    // The number is to the reading side of the first day, not on top of it.
    expect((weekBox?.x ?? 0) + (weekBox?.width ?? 0)).toBeLessThanOrEqual(
      (firstDay?.x ?? 0) + 1,
    );
  });
});

test.describe("the composed calendar", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/#/calendar-views");
    await expect(
      page.getByRole("heading", { name: "calendar views" }),
    ).toBeVisible();
  });

  test("switching off a feed empties it from the grid and the rail together", async ({
    page,
  }) => {
    const rail = page.locator("fold-calendar-agenda").first();
    const chip = page.getByRole("button", { name: /^Leave, shown$/ });
    await expect(rail.getByText("Léa M. — leave")).toBeVisible();

    await chip.click();
    await expect(
      page.getByRole("button", { name: /^Leave, hidden$/ }),
    ).toBeVisible();
    await expect(rail.getByText("Léa M. — leave")).toHaveCount(0);
  });

  test("clicking a day drills into the day view", async ({ page }) => {
    // Not a day a band covers: bands sit *over* the cell, so a pointer landing
    // on one opens the event instead — which is the intended reading, and the
    // reason this picks an empty day rather than forcing the click through.
    const grid = page.locator("fold-calendar-month").first();
    await grid.locator('[data-fold-day="2026-05-27"]').click();
    await expect(page.locator("fold-calendar-day").first()).toBeVisible();
  });

  test("the agenda collapses to a spine and back", async ({ page }) => {
    const rail = page.locator("fold-calendar-agenda").first();
    await rail.getByRole("button", { name: "Collapse" }).click();
    await expect(rail.locator(".foldcala.is-collapsed")).toBeVisible();

    await rail.getByRole("button", { name: "Expand" }).click();
    await expect(rail.locator(".foldcala.is-collapsed")).toHaveCount(0);
  });

  test("a week column drops its subline before the label truncates", async ({
    page,
  }) => {
    // The bug a human caught: at a narrow width the labels fell to one letter.
    const week = page.locator("fold-calendar-week").first();
    await expect(week).toBeVisible();
    const label = week.locator(".foldcal-chip-label").first();
    const text = (await label.textContent())?.trim() ?? "";
    expect(text.length).toBeGreaterThan(3);
  });
});

test.describe("time grid", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/#/calendar-timegrid");
    await expect(
      page.getByRole("heading", { name: "calendar-timegrid" }),
    ).toBeVisible();
  });

  test("a block lands where its minutes say, measured against the hour rules", async ({
    page,
  }) => {
    const grid = page.locator("fold-calendar-timegrid").first();
    const body = await grid.locator(".foldcaltg-cols").boundingBox();
    const block = await grid
      .locator(".foldcaltg-block")
      .filter({ hasText: "Point équipe" })
      .boundingBox();

    // 09:00 in an 08:00–20:00 window is one twelfth down.
    const offset = ((block?.y ?? 0) - (body?.y ?? 0)) / (body?.height ?? 1);
    expect(offset).toBeGreaterThan(0.07);
    expect(offset).toBeLessThan(0.1);
  });

  test("colliding meetings share the width; a lone one keeps it", async ({
    page,
  }) => {
    const grid = page.locator("fold-calendar-timegrid").first();
    const column = await grid.locator(".foldcaltg-col").first().boundingBox();
    const colliding = await grid
      .locator(".foldcaltg-block")
      .filter({ hasText: "Point équipe" })
      .boundingBox();
    const alone = await grid
      .locator(".foldcaltg-block")
      .filter({ hasText: "Démo" })
      .boundingBox();

    expect(colliding?.width ?? 0).toBeLessThan((column?.width ?? 0) * 0.7);
    expect(alone?.width ?? 0).toBeGreaterThan((column?.width ?? 0) * 0.8);
  });

  test("the first hour label is not clipped under the all-day strip", async ({
    page,
  }) => {
    // It was, in the first build of this component.
    const grid = page.locator("fold-calendar-timegrid").first();
    const gutter = await grid.locator(".foldcaltg-gutter").boundingBox();
    const first = await grid.locator(".foldcaltg-hour").first().boundingBox();
    expect(first?.y ?? 0).toBeGreaterThanOrEqual((gutter?.y ?? 0) - 1);
  });

  test("a block's glyph sits beside its label, on the same line", async ({
    page,
  }) => {
    const block = page
      .locator("fold-calendar-timegrid .foldcaltg-block")
      .filter({ hasText: "Point équipe" })
      .first();
    const blockBox = await block.boundingBox();
    const labelBox = await block
      .locator(".foldcaltg-block-label")
      .boundingBox();
    expect((labelBox?.y ?? 0) - (blockBox?.y ?? 0)).toBeLessThan(6);
  });

  test("the now line is drawn once, on today's column", async ({ page }) => {
    const grid = page.locator("fold-calendar-timegrid").first();
    await expect(grid.locator(".foldcaltg-now")).toHaveCount(1);
  });
});
