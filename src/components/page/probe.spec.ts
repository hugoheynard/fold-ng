import { Component } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import { Sh3AsideLayoutComponent } from "./aside-layout.component";

@Component({ standalone: true, imports: [Sh3AsideLayoutComponent],
  template: `<sh3-aside-layout><div asideRight>R</div></sh3-aside-layout>` })
class H {}

describe("probe", () => {
  it("dumps style sources", () => {
    const f = TestBed.createComponent(H);
    f.detectChanges();
    const styleTags = document.querySelectorAll("style");
    console.log("STYLE_TAGS_COUNT", styleTags.length);
    const adopted = (document as unknown as { adoptedStyleSheets?: CSSStyleSheet[] }).adoptedStyleSheets ?? [];
    console.log("ADOPTED_COUNT", adopted.length);
    const fromTags = Array.from(styleTags).map(s => s.textContent ?? "").join("\n");
    console.log("HAS_AL_GRID_IN_TAGS", fromTags.includes("al-grid"));
    console.log("SAMPLE", fromTags.slice(0, 300));
    expect(true).toBe(true);
  });
});
