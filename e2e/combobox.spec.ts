import { test, expect } from "@playwright/test";

// Browser-only behaviour of fold-combobox: the top-layer panel opening under
// the field while focus STAYS in the input, keyboard pick, and the remote mode
// (debounce → loading → results) that jsdom cannot drive end to end.

test.beforeEach(async ({ page }) => {
  await page.goto("/#/combobox");
  await expect(page.getByRole("heading", { name: "combobox" })).toBeVisible();
});

test("typing opens the propositions under the field, focus stays in it", async ({
  page,
}) => {
  const box = page.getByRole("combobox", { name: "Article" });
  await box.fill("pain");
  const list = page.getByRole("listbox");
  await expect(list).toBeVisible();
  await expect(box).toBeFocused();
  await expect(page.getByRole("option")).toHaveCount(3);
  const field = await box.boundingBox();
  const panel = await list.boundingBox();
  expect((panel?.y ?? 0) >= (field?.y ?? 0) + (field?.height ?? 0)).toBe(true);
});

test("keyboard: ↓ then Enter picks, Escape closes", async ({ page }) => {
  const box = page.getByRole("combobox", { name: "Article" });
  await box.fill("crois");
  await expect(page.getByRole("listbox")).toBeVisible();
  await page.keyboard.press("ArrowDown");
  await page.keyboard.press("Enter");
  await expect(box).toHaveValue("Croissant");
  await expect(page.getByRole("listbox")).toBeHidden();
  await box.fill("b");
  await expect(page.getByRole("listbox")).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("listbox")).toBeHidden();
  await expect(box).toBeFocused();
});

test("remote + clearOnSelect: search, wait, add, field empties", async ({
  page,
}) => {
  await page.getByRole("button", { name: "remote" }).click();
  await page
    .locator(".np-field", { hasText: "clearOnSelect" })
    .getByRole("button", { name: "on" })
    .click();
  const box = page.getByRole("combobox", { name: "Article" });
  await box.fill("eclair");
  await box.fill("éclair");
  await expect(
    page.getByRole("option", { name: /Éclair au café/ }),
  ).toBeVisible();
  await page.getByRole("option", { name: /Éclair au café/ }).click();
  await expect(box).toHaveValue("");
  await expect(page.locator(".cbx-basket")).toContainText("Éclair au café");
});
