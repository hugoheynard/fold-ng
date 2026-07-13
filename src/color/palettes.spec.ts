import { describe, it, expect } from "vitest";
import { SH3_AUTO_PALETTES, sh3HashSeed, sh3ResolvePalette } from "./palettes";

describe("auto-colour palettes", () => {
  it("sh3HashSeed is deterministic", () => {
    expect(sh3HashSeed("Hugo")).toBe(sh3HashSeed("Hugo"));
    // 'a' → charCode 97 → the well-known anchor used across the suite.
    expect(sh3HashSeed("a")).toBe(97);
  });

  it("has the curated palettes at the expected sizes", () => {
    expect(SH3_AUTO_PALETTES.vivid.length).toBe(10);
    expect(SH3_AUTO_PALETTES.extended.length).toBe(20);
    expect(SH3_AUTO_PALETTES.pastel.length).toBe(10);
  });

  it("extended starts with the full vivid set (no recolour on switch)", () => {
    expect(SH3_AUTO_PALETTES.extended.slice(0, 10)).toEqual([
      ...SH3_AUTO_PALETTES.vivid,
    ]);
  });

  it("sh3ResolvePalette maps a name, passes a custom list through, and guards empties", () => {
    expect(sh3ResolvePalette("pastel")).toEqual([...SH3_AUTO_PALETTES.pastel]);
    const custom = ["#111111", "#222222"];
    expect(sh3ResolvePalette(custom)).toBe(custom);
    expect(sh3ResolvePalette([])).toEqual([...SH3_AUTO_PALETTES.vivid]);
  });
});
