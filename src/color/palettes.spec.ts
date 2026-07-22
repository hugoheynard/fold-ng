import { describe, it, expect } from "vitest";
import {
  FOLD_AUTO_PALETTES,
  foldHashSeed,
  foldResolvePalette,
} from "./palettes";

describe("auto-colour palettes", () => {
  it("foldHashSeed is deterministic", () => {
    expect(foldHashSeed("Hugo")).toBe(foldHashSeed("Hugo"));
    // 'a' → charCode 97 → the well-known anchor used across the suite.
    expect(foldHashSeed("a")).toBe(97);
  });

  it("has the curated palettes at the expected sizes", () => {
    expect(FOLD_AUTO_PALETTES.vivid.length).toBe(10);
    expect(FOLD_AUTO_PALETTES.extended.length).toBe(20);
    expect(FOLD_AUTO_PALETTES.pastel.length).toBe(10);
  });

  it("extended starts with the full vivid set (no recolour on switch)", () => {
    expect(FOLD_AUTO_PALETTES.extended.slice(0, 10)).toEqual([
      ...FOLD_AUTO_PALETTES.vivid,
    ]);
  });

  it("foldResolvePalette maps a name, passes a custom list through, and guards empties", () => {
    expect(foldResolvePalette("pastel")).toEqual([
      ...FOLD_AUTO_PALETTES.pastel,
    ]);
    const custom = ["#111111", "#222222"];
    expect(foldResolvePalette(custom)).toBe(custom);
    expect(foldResolvePalette([])).toEqual([...FOLD_AUTO_PALETTES.vivid]);
  });
});
