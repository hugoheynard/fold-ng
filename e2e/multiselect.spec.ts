import { test, expect, type Page } from "@playwright/test";

// The multi-select lives in the "multiselect" tab of /#/listbox — open it first,
// then exercise the browser-only behaviour: toggling keeps the panel open, and
// the ARIA + focus live in a real top layer. It starts with two currencies picked.

test.beforeEach(async ({ page }) => {
  await page.goto("/#/listbox");
  await expect(page.getByRole("heading", { name: "listbox" })).toBeVisible();
  await page.getByRole("tab", { name: "multiselect" }).click();
});

function multiselect(page: Page, label = "Devises") {
  const root = page.locator("fold-multiselect").filter({ hasText: label });
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
  await expect(ms.list).toBeVisible(); // wait for the open before typing into it
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

test("searchable: focus in the field, filter keeps groups, ↓ enters the list", async ({
  page,
}) => {
  const ms = multiselect(page, "Allergènes");
  await ms.trigger.click();
  const search = ms.root.getByRole("searchbox", {
    name: "Rechercher un allergène",
  });
  await expect(search).toBeFocused();
  await search.fill("noi");
  await expect(ms.root.getByRole("option")).toHaveText(["Noisettes", "Noix"]);
  await expect(
    ms.root.getByRole("group", { name: "Fruits à coque" }),
  ).toBeVisible();
  await expect(ms.root.getByRole("status")).toHaveText("2 allergènes");
  // The pick the search hides is still selected and still named.
  await expect(ms.trigger).toContainText("Noix");
  await page.keyboard.press("ArrowDown");
  await expect(ms.list).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(ms.option("Noisettes")).toHaveAttribute("aria-selected", "true");
  await page.keyboard.press("Escape");
  await expect(ms.list).toBeHidden();
});

test("searchable: no match shows and announces the empty text", async ({
  page,
}) => {
  const ms = multiselect(page, "Allergènes");
  await ms.trigger.click();
  await ms.root.getByRole("searchbox").fill("zzz");
  await expect(ms.root.locator(".lb-empty")).toHaveText("Aucun allergène");
  await expect(ms.root.getByRole("status")).toHaveText("Aucun allergène");
});
