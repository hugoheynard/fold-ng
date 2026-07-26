import { test, expect, type Page } from "@playwright/test";

// Browser-only behaviour for the styleable select: the native `popover` top
// layer, real focus landing inside the list, and keyboard selection. The Vitest
// units cover the aria/keyboard logic against jsdom; this is the real tier.

test.beforeEach(async ({ page }) => {
  await page.goto("/#/listbox");
  await expect(page.getByRole("heading", { name: "listbox" })).toBeVisible();
});

/** The nth `fold-listbox` on the page, with locators scoped inside it. */
function listbox(page: Page, index: number) {
  const root = page.locator("fold-listbox").nth(index);
  return {
    root,
    trigger: root.locator(".lb-trigger"),
    list: root.getByRole("listbox"),
    option: (name: string) => root.getByRole("option", { name }),
  };
}

test("opens a styled panel with focus in the list", async ({ page }) => {
  const lb = listbox(page, 0);
  await lb.trigger.click();
  await expect(lb.list).toBeVisible();
  await expect(lb.trigger).toHaveAttribute("aria-expanded", "true");
  // Focus is on the listbox itself (activedescendant pattern), not a row.
  await expect(lb.list).toBeFocused();
  const box = await lb.list.boundingBox();
  expect(box?.width ?? 0).toBeGreaterThan(120); // real panel, not a 0-collapse
});

test("keyboard: arrows skip disabled, Enter selects and closes", async ({
  page,
}) => {
  const lb = listbox(page, 1); // the teams list, with a disabled row
  await lb.trigger.click();
  await page.keyboard.press("ArrowDown"); // Production → Hospitality
  await page.keyboard.press("ArrowDown"); // → Communication
  await page.keyboard.press("Enter");
  await expect(lb.list).toBeHidden();
  await expect(lb.trigger).toContainText("Communication");
  await expect(lb.trigger).toBeFocused(); // focus returns to the trigger
});

test("type-ahead jumps to the matching option", async ({ page }) => {
  const lb = listbox(page, 0);
  await lb.trigger.click();
  await page.keyboard.press("l"); // "Livre sterling"
  await page.keyboard.press("Enter");
  await expect(lb.trigger).toContainText("Livre sterling");
});

test("a disabled option can't be chosen by click", async ({ page }) => {
  const lb = listbox(page, 1);
  await lb.trigger.click();
  // `force` bypasses Playwright's actionability guard (the row is aria-disabled)
  // to prove a real click still commits nothing and leaves the panel open.
  await lb.option("Sécurité").click({ force: true });
  await expect(lb.list).toBeVisible(); // still open, nothing committed
});

test("outside-click dismisses the panel", async ({ page }) => {
  const lb = listbox(page, 0);
  await lb.trigger.click();
  await expect(lb.list).toBeVisible();
  await page.getByRole("heading", { name: "listbox" }).click();
  await expect(lb.list).toBeHidden();
});
