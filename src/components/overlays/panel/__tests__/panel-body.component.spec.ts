import { readFileSync } from "node:fs";
import { join } from "node:path";
import { Component } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import { FoldPanelBodyComponent } from "../panel-body.component";

@Component({
  standalone: true,
  imports: [FoldPanelBodyComponent],
  template: `<fold-panel-body>
    <p class="field">Un champ</p>
  </fold-panel-body>`,
})
class HostComponent {}

/**
 * The SCSS is not compiled in the unit-test env, so a computed-style assertion
 * would pass against an empty stylesheet — it would test nothing. As elsewhere
 * in the package (see `aside-layout`), we lock the SOURCE against the exact
 * regressions this component exists to prevent.
 */
function scss(): string {
  const raw = readFileSync(
    join(
      process.cwd(),
      "src/components/overlays/panel/panel-body.component.scss",
    ),
    "utf-8",
  );
  return raw.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/.*$/gm, "");
}

describe("FoldPanelBodyComponent", () => {
  it("projects its children", () => {
    const fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();
    const body = (fixture.nativeElement as HTMLElement).querySelector(
      "fold-panel-body",
    );
    expect(body?.querySelector(".field")).not.toBeNull();
  });

  it("takes the leftover space and scrolls what does not fit", () => {
    expect(scss()).toMatch(/flex:\s*1\s+1\s+auto/);
    expect(scss()).toMatch(/overflow-y:\s*auto/);
  });

  it("sets min-height: 0 — the rule hand-rolled copies forget", () => {
    // A flex item's default minimum height is `min-content`: without this, a
    // tall child GROWS the box instead of scrolling it, and the footer is
    // pushed past the panel's bottom edge, where `overflow: hidden` clips it.
    // This single declaration is the whole reason the component earns its keep.
    expect(scss()).toMatch(/min-height:\s*0/);
  });

  it("lays its children out in a single column, so a panel sets no margins", () => {
    expect(scss()).toMatch(/display:\s*grid/);
    expect(scss()).toMatch(/grid-template-columns:\s*minmax\(0,\s*1fr\)/);
    expect(scss()).toMatch(/gap:\s*var\(--fold-space-md\)/);
    // Content-sized rows must pack at the top: a short panel would otherwise
    // spread the leftover space between its fields.
    expect(scss()).toMatch(/align-content:\s*start/);
  });

  it("sizes its rows to the content, so no child can be crushed", () => {
    // A flex column lets every child shrink, and a child whose `overflow` is
    // not `visible` has an automatic minimum size of ZERO. `fold-danger-zone`
    // (rounded corners, hence `overflow: hidden`) measured 2px — its two
    // borders — in a full panel: a destructive action erased, with almost no
    // overflow left to scroll to. `max-content` rows are the whole fix.
    expect(scss()).toMatch(/grid-auto-rows:\s*max-content/);
    expect(scss()).not.toMatch(/flex-direction:\s*column/);
  });
});
