import { describe, it, expect } from "vitest";
import { AUTO_PALETTES, hashSeed, resolvePalette } from "./palettes";

describe("auto-colour palettes", () => {
  it("hashSeed is deterministic", () => {
    expect(hashSeed("Hugo")).toBe(hashSeed("Hugo"));
    // 'a' → charCode 97 → the well-known anchor used across the suite.
    expect(hashSeed("a")).toBe(97);
  });

  it("has the curated palettes at the expected sizes", () => {
    expect(AUTO_PALETTES.vivid.length).toBe(10);
    expect(AUTO_PALETTES.extended.length).toBe(20);
    expect(AUTO_PALETTES.pastel.length).toBe(10);
  });

  it("extended starts with the full vivid set (no recolour on switch)", () => {
    expect(AUTO_PALETTES.extended.slice(0, 10)).toEqual([
      ...AUTO_PALETTES.vivid,
    ]);
  });

  it("resolvePalette maps a name, passes a custom list through, and guards empties", () => {
    expect(resolvePalette("pastel")).toEqual([...AUTO_PALETTES.pastel]);
    const custom = ["#111111", "#222222"];
    expect(resolvePalette(custom)).toBe(custom);
    expect(resolvePalette([])).toEqual([...AUTO_PALETTES.vivid]);
  });
});
