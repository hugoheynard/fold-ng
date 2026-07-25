import { describe, it, expect } from "vitest";
import { foldContrast, foldLuminance, foldReadableInk } from "./contrast";
import { FOLD_AUTO_PALETTES } from "./palettes";

// The avatar's ink pair (mirror of avatar.component.ts) — the two inks
// foldReadableInk chooses between for initials on a categorical fill.
const DARK_INK = "#1a202c";
const LIGHT_INK = "#ffffff";

describe("colour contrast helpers", () => {
  it("computes luminance, and null for a non-hex", () => {
    expect(foldLuminance("#000000")).toBeCloseTo(0, 5);
    expect(foldLuminance("#ffffff")).toBeCloseTo(1, 5);
    expect(foldLuminance("rebeccapurple")).toBeNull();
  });

  it("computes the WCAG ratio (order-independent), null on a non-hex", () => {
    expect(foldContrast("#000000", "#ffffff")).toBeCloseTo(21, 1);
    expect(foldContrast("#ffffff", "#000000")).toBeCloseTo(21, 1);
    expect(foldContrast("#fff", "not-a-colour")).toBeNull();
  });

  it("picks the higher-contrast ink for a fill", () => {
    expect(foldReadableInk("#ffe0cc", DARK_INK, LIGHT_INK)).toBe(DARK_INK); // light fill → dark ink
    expect(foldReadableInk("#1a2a44", DARK_INK, LIGHT_INK)).toBe(LIGHT_INK); // dark fill → light ink
    expect(foldReadableInk("not-a-colour", DARK_INK, LIGHT_INK)).toBe(DARK_INK); // fallback
  });
});

// The guarantee: picking the max-contrast ink means EVERY palette fill clears AA
// for the initials — no fill can leave illegible text. Locks the avatar's
// legibility across all built-in palettes (and documents the floor for custom
// ones: any fill lands at or above the black/white crossover, ~4.5:1).
describe("avatar initials clear AA on every palette fill", () => {
  const fills = [
    ...new Set(Object.values(FOLD_AUTO_PALETTES).flatMap((p) => [...p])),
  ];

  for (const fill of fills) {
    it(`${fill} → readable ink ≥ 4.5:1`, () => {
      const ink = foldReadableInk(fill, DARK_INK, LIGHT_INK);
      const ratio = foldContrast(fill, ink) ?? 0;
      expect(
        ratio,
        `${fill} on ${ink} = ${ratio.toFixed(2)}:1`,
      ).toBeGreaterThanOrEqual(4.5);
    });
  }
});
