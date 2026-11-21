import { readFileSync } from "node:fs";
import { join } from "node:path";
import { Component, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import {
  FoldAsideLayoutComponent,
  type FoldAsideBand,
} from "./aside-layout.component";

@Component({
  standalone: true,
  imports: [FoldAsideLayoutComponent],
  template: `<fold-aside-layout
    [asideRightLabel]="rightLabel()"
    [topOffset]="offset()"
    [stackLeftFirst]="stackFirst()"
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
  readonly stackFirst = signal(false);
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

  it("toggles the stack-left-first host class from the input", () => {
    // The reorder itself is a container-query rule (order: 0) that happy-dom
    // can't compute; the unit-testable contract is the input → host class the
    // rule keys off, so a collapsed nav rail can precede the content it drives.
    const { fixture, layout } = render();
    expect(layout.classList.contains("stack-left-first")).toBe(false);

    fixture.componentInstance.stackFirst.set(true);
    fixture.detectChanges();
    expect(layout.classList.contains("stack-left-first")).toBe(true);
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

  it("stamps the banded side, and nothing at all on `none`", () => {
    // The attribute carries the SIDE — the CSS closes the gutter and pays the
    // centre back on that side only, so a boolean would not be enough to say
    // which edge moved.
    @Component({
      standalone: true,
      imports: [FoldAsideLayoutComponent],
      template: `<fold-aside-layout [band]="band()">
        <div asideRight>Rail</div>
        <div>Centre</div>
      </fold-aside-layout>`,
    })
    class BandHost {
      readonly band = signal<FoldAsideBand>("none");
    }

    const fixture = TestBed.createComponent(BandHost);
    fixture.detectChanges();
    const host = (fixture.nativeElement as HTMLElement).querySelector(
      "fold-aside-layout",
    )!;
    expect(host.hasAttribute("data-band")).toBe(false);
    fixture.componentInstance.band.set("right");
    fixture.detectChanges();
    expect(host.getAttribute("data-band")).toBe("right");
    fixture.componentInstance.band.set("both");
    fixture.detectChanges();
    expect(host.getAttribute("data-band")).toBe("both");
  });

  it("flags the bleed only on [bleed]", () => {
    @Component({
      standalone: true,
      imports: [FoldAsideLayoutComponent],
      template: `<fold-aside-layout [bleed]="on()">
        <div>Centre</div>
      </fold-aside-layout>`,
    })
    class BleedHost {
      readonly on = signal(false);
    }

    const fixture = TestBed.createComponent(BleedHost);
    fixture.detectChanges();
    const host = (fixture.nativeElement as HTMLElement).querySelector(
      "fold-aside-layout",
    )!;
    expect(host.classList.contains("is-bleed")).toBe(false);
    fixture.componentInstance.on.set(true);
    fixture.detectChanges();
    expect(host.classList.contains("is-bleed")).toBe(true);
  });

  it("routes [asideEnd] into its own wrapper, last in the DOM", () => {
    // Last in the DOM: in one column it closes the page after the rails, and
    // the reading/tab order must match what the eye sees.
    @Component({
      standalone: true,
      imports: [FoldAsideLayoutComponent],
      template: `<fold-aside-layout>
        <div asideLeft>L</div>
        <div>C</div>
        <div asideRight>R</div>
        <div asideEnd>E</div>
      </fold-aside-layout>`,
    })
    class EndHost {}

    const fixture = TestBed.createComponent(EndHost);
    fixture.detectChanges();
    const grid = (fixture.nativeElement as HTMLElement).querySelector(
      ".al-grid",
    )!;
    const end = grid.querySelector(".al-end")!;
    expect(end.textContent).toContain("E");
    expect(grid.lastElementChild).toBe(end);
    // the end slot is not swallowed by the centre's default slot
    expect(grid.querySelector(".al-center")!.textContent).not.toContain("E");
  });

  it("toggles the keep-side-rail host class from the input", () => {
    @Component({
      standalone: true,
      imports: [FoldAsideLayoutComponent],
      template: `<fold-aside-layout [keepSideRail]="on()">
        <div>C</div>
        <div asideRight>R</div>
      </fold-aside-layout>`,
    })
    class KeepHost {
      readonly on = signal(false);
    }

    const fixture = TestBed.createComponent(KeepHost);
    fixture.detectChanges();
    const host = (fixture.nativeElement as HTMLElement).querySelector(
      "fold-aside-layout",
    )!;
    expect(host.classList.contains("keep-side-rail")).toBe(false);
    fixture.componentInstance.on.set(true);
    fixture.detectChanges();
    expect(host.classList.contains("keep-side-rail")).toBe(true);
  });

  it("only adds the end row when [asideEnd] is filled (no gap paid by existing pages)", () => {
    // happy-dom can't lay out a grid; lock the SOURCE: every rule that names an
    // `end` area is guarded by `:has([asideend])`, so a page without the slot
    // keeps its exact grid — no empty row, no extra gap.
    const raw = readFileSync(
      join(
        process.cwd(),
        "src/components/layout/aside-layout/aside-layout.component.scss",
      ),
      "utf-8",
    );
    const scss = raw.replace(/\/\*[\s\S]*?\*\//g, "");
    const rules = scss
      .split("}")
      .filter((rule) => /--al-areas:[^;]*"[^"]*\bend\b/.test(rule));
    expect(rules.length).toBeGreaterThan(0);
    for (const rule of rules) {
      expect(rule).toContain(":has([asideend])");
    }
  });

  /**
   * Régression (0.38.0) : le repli en une colonne ne listait que `:host .al-grid`,
   * moins spécifique que les règles des colonnes — une requête de conteneur
   * n'ajoute aucune spécificité — et la page gardait ses trois colonnes sur un
   * téléphone.
   */
  it("collapses every column combination, not just the bare grid", () => {
    const raw = readFileSync(
      join(
        process.cwd(),
        "src/components/layout/aside-layout/aside-layout.component.scss",
      ),
      "utf-8",
    );
    const scss = raw.replace(/\/\*[\s\S]*?\*\//g, "");
    const collapse = scss.slice(scss.indexOf("@container (max-width: 1040px)"));
    const block = collapse.slice(0, collapse.indexOf("--al-areas: none"));
    for (const combo of [
      ":host:has([asideleft]):has([asideright]) .al-grid",
      ":host:has([asideend]):has([asideleft]):has([asideright]) .al-grid",
    ]) {
      expect(block).toContain(combo);
    }
  });

  it("keeps the side rail sticky in keepSideRail mode (a tablet keeps its summary in view)", () => {
    const raw = readFileSync(
      join(
        process.cwd(),
        "src/components/layout/aside-layout/aside-layout.component.scss",
      ),
      "utf-8",
    );
    const scss = raw.replace(/\/\*[\s\S]*?\*\//g, "");
    const keep = scss.slice(
      scss.indexOf("@container (min-width: 701px) and (max-width: 1040px)"),
    );
    // Several rules target the side rail there (its grid area, its stickiness):
    // one of them must keep it sticky.
    const rules = keep
      .split("}")
      .filter((rule) =>
        rule.includes(":host(.keep-side-rail) .al-aside-right {"),
      );
    expect(rules.some((rule) => rule.includes("position: sticky"))).toBe(true);
  });
});
