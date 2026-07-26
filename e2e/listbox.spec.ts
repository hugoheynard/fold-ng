import { test, expect, type Page } from "@playwright/test";

// Browser-only behaviour for the styleable single-select: the native `popover`
// top layer, real focus in the list, keyboard selection, clear, and the Tab /
// closed-type-ahead / keyboard-open paths that jsdom can't exercise. The listbox
// is the default tab of /#/listbox.

test.beforeEach(async ({ page }) => {
  await page.goto("/#/listbox");
  await expect(page.getByRole("heading", { name: "listbox" })).toBeVisible();
});

function listbox(page: Page) {
  const root = page.locator("fold-listbox");
  return {
    root,
    trigger: root.locator(".lb-trigger"),
    clear: root.locator(".lb-clear"),
    list: root.getByRole("listbox"),
    option: (name: string) => root.getByRole("option", { name }),
  };
}

test("opens onto a visible, non-collapsed listbox with focus inside", async ({
  page,
}) => {
  const lb = listbox(page);
  await lb.trigger.click();
  await expect(lb.list).toBeVisible();
  await expect(lb.list).toBeFocused();
  const box = await lb.list.boundingBox();
  expect(box?.width ?? 0).toBeGreaterThan(120);
});

test("keyboard: arrows move, Enter selects, focus returns to the trigger", async ({
  page,
}) => {
  const lb = listbox(page);
  await lb.trigger.click(); // armed on the current value (Euro)
  await page.keyboard.press("ArrowDown"); // → US Dollar
  await page.keyboard.press("Enter");
  await expect(lb.list).toBeHidden();
  await expect(lb.trigger).toContainText("US Dollar");
  await expect(lb.trigger).toBeFocused();
});

test("opens from the keyboard on the trigger", async ({ page }) => {
  const lb = listbox(page);
  await lb.trigger.focus();
  await page.keyboard.press("ArrowDown");
  await expect(lb.list).toBeVisible();
});

test("type-ahead on the closed trigger picks without opening", async ({
  page,
}) => {
  const lb = listbox(page);
  await lb.trigger.focus();
  await page.keyboard.press("y"); // Yen — matched while closed
  await expect(lb.list).toBeHidden();
  await expect(lb.trigger).toContainText("Yen");
});

test("clear resets to the placeholder", async ({ page }) => {
  const lb = listbox(page);
  await expect(lb.trigger).toContainText("Euro");
  await lb.clear.click();
  await expect(lb.trigger).toContainText("Choisir une devise");
});

test("Tab out of the open list advances focus, never trapping on the trigger", async ({
  page,
}) => {
  const lb = listbox(page);
  await lb.trigger.click();
  await expect(lb.list).toBeFocused();
  await page.keyboard.press("Tab");
  await expect(lb.list).toBeHidden();
  await expect(lb.trigger).not.toBeFocused();
});

test("outside-click dismisses the list", async ({ page }) => {
  const lb = listbox(page);
  await lb.trigger.click();
  await expect(lb.list).toBeVisible();
  await page.getByRole("heading", { name: "listbox" }).click();
  await expect(lb.list).toBeHidden();
});
