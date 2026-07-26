import { test, expect, type Page } from "@playwright/test";

// The multi-select lives in the "multiselect" tab of /#/listbox — open it first,
// then exercise the browser-only behaviour: toggling keeps the panel open, and
// the ARIA + focus live in a real top layer. It starts with two currencies picked.

test.beforeEach(async ({ page }) => {
  await page.goto("/#/listbox");
  await expect(page.getByRole("heading", { name: "listbox" })).toBeVisible();
  await page.getByRole("tab", { name: "multiselect" }).click();
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

test("is a multi-selectable listbox that stays open while toggling", async ({
  page,
}) => {
  const ms = multiselect(page);
  await ms.trigger.click();
  await expect(ms.list).toHaveAttribute("aria-multiselectable", "true");
  await ms.option("Yen").click();
  await expect(ms.list).toBeVisible(); // stays open
  await expect(ms.option("Yen")).toHaveAttribute("aria-selected", "true");
});

test("clicking a selected row removes it", async ({ page }) => {
  const ms = multiselect(page);
  await ms.trigger.click();
  await expect(ms.option("Euro")).toHaveAttribute("aria-selected", "true");
  await ms.option("Euro").click();
  await expect(ms.option("Euro")).toHaveAttribute("aria-selected", "false");
  await expect(ms.list).toBeVisible();
});

test("keyboard: Enter toggles the active row without closing", async ({
  page,
}) => {
  const ms = multiselect(page);
  await ms.trigger.click();
  await page.keyboard.press("End"); // last option
  await page.keyboard.press("Enter");
  await expect(ms.list).toBeVisible();
});

test("outside-click dismisses the panel", async ({ page }) => {
  const ms = multiselect(page);
  await ms.trigger.click();
  await expect(ms.list).toBeVisible();
  await page.getByRole("heading", { name: "listbox" }).click();
  await expect(ms.list).toBeHidden();
});
