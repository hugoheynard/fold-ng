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

  it("lays its children out in a column, so a panel sets no margins", () => {
    expect(scss()).toMatch(/display:\s*flex/);
    expect(scss()).toMatch(/flex-direction:\s*column/);
    expect(scss()).toMatch(/gap:\s*var\(--fold-space-md\)/);
  });
});
