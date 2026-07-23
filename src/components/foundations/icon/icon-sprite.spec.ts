import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import { foldIconToSymbol, FOLD_ICON_SPRITE_ID } from "./icon-sprite";
import { FoldIconSprite } from "./icon-sprite.service";

describe("foldIconToSymbol", () => {
  it("renames <svg> to <symbol>, ids it, and carries viewBox", () => {
    const out = foldIconToSymbol(
      "search",
      '<svg viewBox="0 0 24 24"><path d="M0 0"/></svg>',
    );
    expect(out).toBe(
      '<symbol id="fold-icon-search" viewBox="0 0 24 24"><path d="M0 0"/></symbol>',
    );
  });

  it("carries presentation attributes but drops xmlns / width / height", () => {
    const out = foldIconToSymbol(
      "arrow",
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M5 12h14"/></svg>',
    );
    expect(out).toContain('id="fold-icon-arrow"');
    expect(out).toContain('viewBox="0 0 24 24"');
    expect(out).toContain('fill="none"');
    expect(out).toContain('stroke="currentColor"');
    expect(out).not.toContain("xmlns");
    expect(out).not.toContain("width=");
    expect(out).not.toContain("height=");
  });
});

describe("FoldIconSprite", () => {
  function freshSprite(): FoldIconSprite {
    document.getElementById(FOLD_ICON_SPRITE_ID)?.remove();
    return TestBed.inject(FoldIconSprite);
  }

  it("mounts a hidden sprite in <body> and adds a symbol", () => {
    const s = freshSprite();
    s.ensure("a", '<svg viewBox="0 0 2 2"><path d="M0 0"/></svg>');
    const el = document.getElementById(FOLD_ICON_SPRITE_ID);
    expect(el?.getAttribute("aria-hidden")).toBe("true");
    expect(el?.querySelector("symbol#fold-icon-a")).toBeTruthy();
  });

  it("adds a given icon only once (idempotent)", () => {
    const s = freshSprite();
    const svg = '<svg viewBox="0 0 2 2"><path d="M0 0"/></svg>';
    s.ensure("dup", svg);
    s.ensure("dup", svg);
    const el = document.getElementById(FOLD_ICON_SPRITE_ID);
    const matches = [...(el?.querySelectorAll("symbol") ?? [])].filter(
      (sym) => sym.id === "fold-icon-dup",
    );
    expect(matches).toHaveLength(1);
  });
});
