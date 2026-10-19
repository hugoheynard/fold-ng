import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, it, expect } from "vitest";

/**
 * Mobile browsers zoom onto a focused field whose text is under 16px. fold floors
 * the text of every keyboard-taking field under `@media (pointer: coarse)`,
 * through ONE mechanism: the `size()` mixin of `_field-box.scss`, on the same
 * selector that sets the size (so it wins without `!important`). jsdom applies
 * no stylesheet — the rendered size is checked in `e2e/touch-text-floor.spec.ts`;
 * this locks the wiring.
 */
const formsDir = join(dirname(fileURLToPath(import.meta.url)), "..");
const read = (p: string) => readFileSync(join(formsDir, p), "utf8");

describe("touch text floor", () => {
  it("the size mixin floors the font at --fold-text-touch-min under a coarse pointer", () => {
    const box = read("_field-box.scss");
    expect(box).toMatch(/@if \$text-entry \{\s*@media \(pointer: coarse\) \{/);
    expect(box).toContain("max(var(--fold-text-touch-min), map.get($s, font))");
    expect(box).not.toContain("!important;");
  });

  it("the native-field shell sizes inputs, selects and textareas as text entry", () => {
    const shell = read("input/input-shell.scss");
    expect(shell).not.toMatch(/\$text-entry: false/);
    expect(shell).toMatch(/:host\(\.md\) input,\s*:host\(\.md\) select/);
  });

  it("every keyboard-taking field stylesheet goes through that shell (or the size mixin)", () => {
    for (const file of [
      "input/input.component.scss", // fold-input, and fold-search / fold-password-field which wrap it
      "input/textarea.component.scss",
      "input/number-input.component.scss",
      "input/date.component.scss", // fold-date and fold-time
      "input/select.component.scss",
      "combobox/combobox.component.scss",
    ]) {
      expect(read(file), file).toMatch(/field-input-shell;/);
    }
    expect(read("listbox/multiselect.component.scss")).toMatch(
      /\.lb-search \{[^}]*@include box\.size\(sm\);/,
    );
  });

  it("button triggers opt out — no browser zooms on a button", () => {
    expect(read("listbox/_listbox-shell.scss")).toMatch(
      /box\.size\(md, \$text-entry: false\)/,
    );
  });
});
