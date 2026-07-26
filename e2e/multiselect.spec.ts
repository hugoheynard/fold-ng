import { test, expect, type Page } from "@playwright/test";

// Browser-only behaviour for the multi-select: the native popover top layer, and
// that toggling a row keeps the panel open (unlike the single-select listbox).
// Vitest covers the toggle/aria logic against jsdom; this is the real tier.

test.beforeEach(async ({ page }) => {
  await page.goto("/#/listbox");
  await expect(page.getByRole("heading", { name: "listbox" })).toBeVisible();
});

function multiselect(page: Page) {
  const root = page.locator("fold-multiselect");
  return {
    root,
    trigger: root.locator(".lb-trigger"),
    list: root.getByRole("listbox"),
    option: (name: string) => root.getByRole("option", { name }),
  };
}

test("toggling rows accumulates a set and keeps the panel open", async ({
  page,
}) => {
  const ms = multiselect(page);
  await ms.trigger.click();
  await expect(ms.list).toBeVisible();
  await ms.option("Soul").click();
  await expect(ms.list).toBeVisible(); // stays open
  await expect(ms.option("Soul")).toHaveAttribute("aria-selected", "true");
  await ms.option("Funk").click();
  await expect(ms.list).toBeVisible();
  // starts with Rock + Jazz preselected → summary now lists four
  await expect(ms.trigger).toContainText("Soul");
  await expect(ms.trigger).toContainText("Funk");
});

test("clicking a selected row removes it", async ({ page }) => {
  const ms = multiselect(page);
  await ms.trigger.click();
  await expect(ms.option("Rock")).toHaveAttribute("aria-selected", "true");
  await ms.option("Rock").click();
  await expect(ms.option("Rock")).toHaveAttribute("aria-selected", "false");
  await expect(ms.list).toBeVisible();
});

test("keyboard: Enter toggles the active row without closing", async ({
  page,
}) => {
  const ms = multiselect(page);
  await ms.trigger.click();
  await page.keyboard.press("End"); // Électro (last)
  await page.keyboard.press("Enter");
  await expect(ms.option("Électro")).toHaveAttribute("aria-selected", "true");
  await expect(ms.list).toBeVisible();
});

test("outside-click dismisses the panel", async ({ page }) => {
  const ms = multiselect(page);
  await ms.trigger.click();
  await expect(ms.list).toBeVisible();
  await page.getByRole("heading", { name: "listbox" }).click();
  await expect(ms.list).toBeHidden();
});
