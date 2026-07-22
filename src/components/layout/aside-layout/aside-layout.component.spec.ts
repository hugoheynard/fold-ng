import { readFileSync } from "node:fs";
import { join } from "node:path";
import { Component, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import { FoldAsideLayoutComponent } from "./aside-layout.component";

@Component({
  standalone: true,
  imports: [FoldAsideLayoutComponent],
  template: `<fold-aside-layout
    [asideRightLabel]="rightLabel()"
    [topOffset]="offset()"
  >
    @if (left()) {
      <div asideLeft>L</div>
    }
    <div>C</div>
    <div asideRight>R</div>
  </fold-aside-layout>`,
})
class HostComponent {
  readonly left = signal(true);
  readonly rightLabel = signal<string | undefined>(undefined);
  readonly offset = signal<number | string | undefined>(undefined);
}

function render() {
  const fixture = TestBed.createComponent(HostComponent);
  fixture.detectChanges();
  const host = fixture.nativeElement as HTMLElement;
  return {
    fixture,
    layout: host.querySelector("fold-aside-layout") as HTMLElement,
    center: host.querySelector(".al-center") as HTMLElement,
    railLeft: host.querySelector(".al-aside-left") as HTMLElement,
    railRight: host.querySelector(".al-aside-right") as HTMLElement,
  };
}

describe("FoldAsideLayoutComponent", () => {
  it("routes each slot into its own owned wrapper", () => {
    const { center, railLeft, railRight } = render();
    // default (untagged) content lands in the centre column
    expect(center.textContent).toContain("C");
    expect(railLeft.textContent).toContain("L");
    expect(railRight.textContent).toContain("R");
  });

  it("empties the left rail wrapper when its slot is empty (reactive)", () => {
    const { fixture, railLeft, railRight, center } = render();
    expect(railLeft.textContent).toContain("L");

    fixture.componentInstance.left.set(false);
    fixture.detectChanges();
    expect(railLeft.textContent).toBe("");
    // the other slots are untouched
    expect(center.textContent).toContain("C");
    expect(railRight.textContent).toContain("R");
  });

  it("exposes no landmark on a rail without a label", () => {
    const { railRight } = render();
    expect(railRight.getAttribute("role")).toBeNull();
    expect(railRight.getAttribute("aria-label")).toBeNull();
  });

  it("marks a labelled rail as a complementary landmark (reactive)", () => {
    const { fixture, railRight } = render();
    fixture.componentInstance.rightLabel.set("Résumé du contrat");
    fixture.detectChanges();
    expect(railRight.getAttribute("role")).toBe("complementary");
    expect(railRight.getAttribute("aria-label")).toBe("Résumé du contrat");

    // clearing the label removes the landmark again
    fixture.componentInstance.rightLabel.set(undefined);
    fixture.detectChanges();
    expect(railRight.getAttribute("role")).toBeNull();
  });

  it("drives the sticky-offset var from the topOffset input", () => {
    const { fixture, layout } = render();
    // unset → the var is left to the CSS default / per-rail overrides
    expect(layout.style.getPropertyValue("--fold-aside-layout-top")).toBe("");

    fixture.componentInstance.offset.set(0);
    fixture.detectChanges();
    expect(layout.style.getPropertyValue("--fold-aside-layout-top")).toBe(
      "0px",
    );

    fixture.componentInstance.offset.set("2rem");
    fixture.detectChanges();
    expect(layout.style.getPropertyValue("--fold-aside-layout-top")).toBe(
      "2rem",
    );
  });

  // happy-dom can't exercise the layout at runtime (it computes neither `:has()`
  // nor grid), and the SCSS isn't compiled in the unit-test env — so we lock the
  // SOURCE against the exact regression we fixed: styling the *projected* slots
  // as direct grid children silently no-ops under view encapsulation. This keeps
  // slot styling on component-owned wrappers (and ::ng-deep-free). Runtime
  // column/sticky behaviour is covered by the AOT build; the `:has()` non-scoping
  // was verified in the compiled bundle (see the fix commit).
  it("keeps slot styling on owned wrappers (guards the encapsulation regression)", () => {
    // vitest runs with cwd at the package root (`packages/ui`).
    const raw = readFileSync(
      join(
        process.cwd(),
        "src/components/layout/aside-layout/aside-layout.component.scss",
      ),
      "utf-8",
    );
    // strip comments so a mention in prose ("… no ::ng-deep") isn't a false hit
    const scss = raw.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/.*$/gm, "");
    // never style the projected slots directly — they carry the page's scope attr
    expect(scss).not.toMatch(
      /\.al-grid\s*>\s*\[(center|asideleft|asideright)\]/,
    );
    // the owned wrappers are what gets styled instead
    expect(scss).toMatch(/\.al-center\b/);
    expect(scss).toMatch(/\.al-aside\b/);
    expect(scss).not.toContain("::ng-deep");
  });
});
