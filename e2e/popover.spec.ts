import { test, expect, type Page } from "@playwright/test";

// Behaviour that only exists in a real browser: the native `popover` top layer,
// actual box sizing, and keyboard/focus. These complement the Vitest units
// (placement math + aria/keyboard logic) which jsdom can't take further.

test.beforeEach(async ({ page }) => {
  await page.goto("/#/popover");
  await expect(page.getByRole("heading", { name: "popover" })).toBeVisible();
});

/** The first row-actions dropdown, and locators scoped inside it (several
 *  dropdowns on the page share item names — scoping avoids strict-mode clashes). */
function firstDropdown(page: Page) {
  const root = page.locator("fold-dropdown").first();
  return {
    root,
    trigger: root.locator("button").first(),
    menu: root.getByRole("menu"),
    item: (name: string) => root.getByRole("menuitem", { name }),
  };
}

test("dropdown opens onto a visible, non-collapsed menu", async ({ page }) => {
  const dd = firstDropdown(page);
  await dd.trigger.click();
  await expect(dd.menu).toBeVisible();
  await expect(dd.root.getByRole("menuitem")).toHaveCount(3);
  const box = await dd.menu.boundingBox();
  expect(box?.width ?? 0).toBeGreaterThan(120); // not the 0-width collapse
  expect(box?.height ?? 0).toBeGreaterThan(40);
});

test("keyboard: opens onto the first item, arrows move, Escape restores focus", async ({
  page,
}) => {
  const dd = firstDropdown(page);
  await dd.trigger.click();
  await expect(dd.item("Rename")).toBeFocused();
  await page.keyboard.press("ArrowDown");
  await expect(dd.item("Duplicate")).toBeFocused();
  await page.keyboard.press("End");
  await expect(dd.item("Delete")).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(dd.menu).toBeHidden();
  await expect(dd.trigger).toBeFocused();
});

test("type-ahead (multi-letter) jumps to the matching item", async ({
  page,
}) => {
  const dd = firstDropdown(page);
  await dd.trigger.click();
  // "d" alone would hit Duplicate first; the buffered "de" disambiguates.
  await page.keyboard.press("d");
  await expect(dd.item("Duplicate")).toBeFocused();
  await page.keyboard.press("e"); // within the 500 ms buffer → "de"
  await expect(dd.item("Delete")).toBeFocused();
});

test("selecting an item runs the action and closes the menu", async ({
  page,
}) => {
  const dd = firstDropdown(page);
  await dd.trigger.click();
  await dd.item("Rename").click();
  await expect(dd.menu).toBeHidden();
  await expect(page.locator(".pop-readout")).toContainText("Rename");
});

test("outside-click dismisses the menu", async ({ page }) => {
  const dd = firstDropdown(page);
  await dd.trigger.click();
  await expect(dd.menu).toBeVisible();
  await page.getByRole("heading", { name: "popover" }).click();
  await expect(dd.menu).toBeHidden();
});

test("content popover shows its panel and an arrow", async ({ page }) => {
  await page.getByRole("button", { name: "Notifications" }).click();
  await expect(page.locator(".pop-panel")).toBeVisible();
  // Scoped to *this* popover rather than a bare `.fpop-arrow`: the page can
  // carry more than one arrowed panel.
  const panel = page.locator(".fpop-panel", {
    has: page.locator(".pop-panel"),
  });
  await expect(panel.locator(".fpop-arrow")).toBeVisible();
});

test("playground: the panel positions itself (data-placement is set)", async ({
  page,
}) => {
  await page.getByRole("button", { name: "Open menu ▾" }).click();
  const panel = page.locator("fold-dropdown").last().locator(".fpop-panel");
  await expect(panel).toBeVisible();
  const placement = await panel.getAttribute("data-placement");
  expect(placement).toBeTruthy(); // positioning ran (flip/size/shift resolved)
});
