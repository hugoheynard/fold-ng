import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import { FOLD_AUTO_PALETTES } from "./palettes";
import {
  FoldPaletteRegistry,
  provideFoldPalette,
} from "./palette-registry.service";

function registry(...providers: unknown[]): FoldPaletteRegistry {
  TestBed.configureTestingModule({ providers: providers as never });
  return TestBed.inject(FoldPaletteRegistry);
}

describe("FoldPaletteRegistry", () => {
  it("defaults to vivid and colours a seed deterministically", () => {
    const reg = registry();
    expect(reg.current()).toEqual([...FOLD_AUTO_PALETTES.vivid]);
    // 'a' → hash 97 → 97 % 10 = 7 → vivid[7].
    expect(reg.colorFor("a")).toBe(FOLD_AUTO_PALETTES.vivid[7]);
    expect(reg.colorFor("Hugo")).toBe(reg.colorFor("Hugo"));
  });

  it("use() switches the active palette app-wide", () => {
    const reg = registry();
    reg.use("pastel");
    expect(reg.current()).toEqual([...FOLD_AUTO_PALETTES.pastel]);
    expect(reg.colorFor("a")).toBe(FOLD_AUTO_PALETTES.pastel[7]);
  });

  it("accepts a consumer's own colour list", () => {
    const reg = registry();
    const brand = ["#000000", "#ffffff"];
    reg.use(brand);
    expect(reg.current()).toEqual(brand);
    // hash('a') = 97 → 97 % 2 = 1 → brand[1].
    expect(reg.colorFor("a")).toBe("#ffffff");
  });

  it("provideFoldPalette sets the bootstrap default", () => {
    const reg = registry(provideFoldPalette("pastel"));
    expect(reg.current()).toEqual([...FOLD_AUTO_PALETTES.pastel]);
  });
});
