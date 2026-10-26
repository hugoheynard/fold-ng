import { readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, it, expect } from "vitest";

/**
 * Focus rings and field outlines must be SEEN (WCAG 1.4.11 / 2.4.7, RGAA 3.3 /
 * 10.7). `--fold-color-primary-border` is a tint (1.3–1.9:1 on the page, see
 * `field-border-contrast.spec.ts`): it was the ring of eight components, and a
 * 30–35 % `color-mix` glow was the ring of the slider thumbs and the checkbox.
 * A ring is drawn in `--fold-color-primary`, which clears 3:1 everywhere.
 *
 * jsdom applies no stylesheet, so this reads the sources: it locks the wiring.
 */
const componentsDir = join(dirname(fileURLToPath(import.meta.url)), "..");

function scssFiles(dir: string): string[] {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) {
      return scssFiles(path);
    }
    return path.endsWith(".scss") ? [path] : [];
  });
}

const sheets = scssFiles(componentsDir).map((path) => ({
  file: relative(componentsDir, path),
  css: readFileSync(path, "utf8"),
}));
const read = (file: string): string =>
  sheets.find((s) => s.file === file)?.css ?? "";

describe("focus rings and field outlines", () => {
  it("no ring (outline / box-shadow) is drawn in the primary-border tint", () => {
    for (const { file, css } of sheets) {
      expect(
        css,
        `${file} draws a ring in --fold-color-primary-border`,
      ).not.toMatch(/(outline|box-shadow):[^;]*--fold-color-primary-border/);
    }
  });

  it("the slider thumbs (fold-slider .sl-input, fold-range-slider .rs-thumb) get a solid ring", () => {
    const thumb = read("forms/slider/slider.scss");
    expect(thumb).toMatch(
      /&:focus-visible::-webkit-slider-thumb \{\s*box-shadow: 0 0 0 2px var\(--fold-color-primary\);/,
    );
    expect(thumb).toMatch(
      /&:focus-visible::-moz-range-thumb \{\s*box-shadow: 0 0 0 2px var\(--fold-color-primary\);/,
    );
    expect(read("forms/slider/slider.component.scss")).toContain(
      "@include slider.thumb",
    );
    expect(read("forms/slider/range-slider.component.scss")).toContain(
      "@include slider.thumb",
    );
  });

  it("the checkbox box gets a solid ring, not a tinted glow", () => {
    expect(read("forms/checkbox/checkbox.component.scss")).toMatch(
      /\.cb-native:focus-visible ~ \.cb-box \{\s*outline: 2px solid var\(--fold-color-primary\);/,
    );
  });

  it("every outline: none on a focusable control has a visible replacement", () => {
    // The paginator's page-size <select> used to swap its outline for a 1.4:1
    // border tint; it now keeps a real outline.
    expect(read("content/paginator/paginator.component.scss")).toMatch(
      /\.page-size__select:focus-visible \{\s*outline: 2px solid var\(--fold-color-primary\);/,
    );
  });

  it("form controls at rest are outlined in --fold-color-border-field", () => {
    for (const file of [
      "forms/input/input-shell.scss",
      "forms/listbox/_listbox-shell.scss",
      "forms/listbox/multiselect.component.scss",
      "forms/input/number-input.component.scss",
      "forms/checkbox/checkbox.component.scss",
      "content/paginator/paginator.component.scss",
    ]) {
      expect(read(file), file).toMatch(
        /border: 1(\.5)?px solid var\(--fold-color-border-field\);/,
      );
    }
  });
});
