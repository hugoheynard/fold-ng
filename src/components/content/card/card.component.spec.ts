import { Component, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import { FoldCardComponent } from "./card.component";
import type { FoldCardBandChrome } from "./card.component";

@Component({
  standalone: true,
  imports: [FoldCardComponent],
  template: `<fold-card
    [surface]="surface()"
    [radius]="radius()"
    [padding]="padding()"
    [interactive]="interactive()"
    [ariaLabel]="ariaLabel()"
    [separators]="separators()"
    [raisedBands]="raisedBands()"
    (activated)="activations.push($event)"
  >
    @if (withHeader()) {
      <span cardHeader class="head">Header</span>
    }
    <span class="body">Content</span>
    @if (withFooter()) {
      <span cardFooter class="foot">Footer</span>
    }
  </fold-card>`,
})
class HostComponent {
  readonly surface = signal<"card" | "sunken" | "accent">("card");
  readonly radius = signal<"sm" | "md" | "lg">("lg");
  readonly padding = signal<"none" | "sm" | "md" | "lg">("md");
  readonly interactive = signal(false);
  readonly ariaLabel = signal<string | undefined>(undefined);
  readonly separators = signal<FoldCardBandChrome>("none");
  readonly raisedBands = signal<FoldCardBandChrome>("none");
  readonly withHeader = signal(false);
  readonly withFooter = signal(false);
  readonly activations: Event[] = [];
}

function render() {
  const fixture = TestBed.createComponent(HostComponent);
  fixture.detectChanges();
  const card = fixture.nativeElement.querySelector("fold-card") as HTMLElement;
  return { fixture, card };
}

describe("FoldCardComponent", () => {
  it("renders the three region elements (header / body / footer)", () => {
    const { card } = render();
    expect(card.querySelector("div.card-header")).not.toBeNull();
    expect(card.querySelector("div.card-body")).not.toBeNull();
    expect(card.querySelector("div.card-footer")).not.toBeNull();
  });

  it("uses neutral <div> bands, not <header>/<footer> landmark elements", () => {
    const { card } = render();
    // <header>/<footer> inside a non-sectioning custom element expose spurious
    // banner/contentinfo landmarks — the bands must be plain divs.
    expect(card.querySelector("header")).toBeNull();
    expect(card.querySelector("footer")).toBeNull();
  });

  it("projects default content into the body", () => {
    const { card } = render();
    expect(card.querySelector(".card-body .body")?.textContent).toBe("Content");
  });

  it("carries no modifier classes at the defaults (card, lg, md)", () => {
    const { card } = render();
    expect(card.className).toBe("");
  });

  it("maps radius to a modifier class (none for lg)", () => {
    const { fixture, card } = render();
    expect(card.classList.contains("r-md")).toBe(false);
    fixture.componentInstance.radius.set("md");
    fixture.detectChanges();
    expect(card.classList.contains("r-md")).toBe(true);
    fixture.componentInstance.radius.set("sm");
    fixture.detectChanges();
    expect(card.classList.contains("r-sm")).toBe(true);
    fixture.componentInstance.radius.set("lg");
    fixture.detectChanges();
    expect(card.classList.contains("r-md")).toBe(false);
    expect(card.classList.contains("r-sm")).toBe(false);
  });

  it("maps padding to a modifier class (none for md)", () => {
    const { fixture, card } = render();
    for (const [value, cls] of [
      ["none", "p-none"],
      ["sm", "p-sm"],
      ["lg", "p-lg"],
    ] as const) {
      fixture.componentInstance.padding.set(value);
      fixture.detectChanges();
      expect(card.classList.contains(cls)).toBe(true);
    }
    fixture.componentInstance.padding.set("md");
    fixture.detectChanges();
    expect(card.className).toBe("");
  });

  it("switches the surface tint via the `surface` input", () => {
    const { fixture, card } = render();
    expect(card.classList.contains("s-sunken")).toBe(false);
    fixture.componentInstance.surface.set("sunken");
    fixture.detectChanges();
    expect(card.classList.contains("s-sunken")).toBe(true);
  });

  it("marks an accent card with s-accent + data-surface (auto-inversion)", () => {
    const { fixture, card } = render();
    fixture.componentInstance.surface.set("accent");
    fixture.detectChanges();
    expect(card.classList.contains("s-accent")).toBe(true);
    expect(card.classList.contains("s-sunken")).toBe(false);
    // the data-surface attr is what triggers the token-layer role inversion
    expect(card.getAttribute("data-surface")).toBe("accent");
  });

  it("adds is-interactive + a button role/tabindex via `interactive`", () => {
    const { fixture, card } = render();
    expect(card.classList.contains("is-interactive")).toBe(false);
    expect(card.getAttribute("role")).toBeNull();
    expect(card.getAttribute("tabindex")).toBeNull();
    fixture.componentInstance.interactive.set(true);
    fixture.detectChanges();
    expect(card.classList.contains("is-interactive")).toBe(true);
    expect(card.getAttribute("role")).toBe("button");
    expect(card.getAttribute("tabindex")).toBe("0");
  });

  it("exposes `ariaLabel` only while interactive", () => {
    const { fixture, card } = render();
    fixture.componentInstance.ariaLabel.set("Open Acme");
    fixture.detectChanges();
    // not interactive → the label must not leak onto a presentational card
    expect(card.getAttribute("aria-label")).toBeNull();
    fixture.componentInstance.interactive.set(true);
    fixture.detectChanges();
    expect(card.getAttribute("aria-label")).toBe("Open Acme");
  });

  it("emits `activated` on click, Enter and Space when interactive", () => {
    const { fixture, card } = render();
    const host = fixture.componentInstance;
    host.interactive.set(true);
    fixture.detectChanges();

    card.click();
    card.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter" }));
    card.dispatchEvent(new KeyboardEvent("keydown", { key: " " }));
    expect(host.activations.length).toBe(3);

    // an unrelated key is ignored
    card.dispatchEvent(new KeyboardEvent("keydown", { key: "a" }));
    expect(host.activations.length).toBe(3);
  });

  it("never emits `activated` when not interactive", () => {
    const { fixture, card } = render();
    const host = fixture.componentInstance;
    card.click();
    card.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter" }));
    expect(host.activations.length).toBe(0);
  });

  it("projects [cardHeader] and [cardFooter] into their bands", () => {
    const { fixture, card } = render();
    expect(card.querySelector(".card-header .head")).toBeNull();
    expect(card.querySelector(".card-footer .foot")).toBeNull();
    fixture.componentInstance.withHeader.set(true);
    fixture.componentInstance.withFooter.set(true);
    fixture.detectChanges();
    expect(card.querySelector(".card-header .head")?.textContent).toBe(
      "Header",
    );
    expect(card.querySelector(".card-footer .foot")?.textContent).toBe(
      "Footer",
    );
  });

  it("keeps the body content in .card-body whether or not bands are present", () => {
    const { fixture, card } = render();
    expect(card.querySelector(".card-body .body")).not.toBeNull();
    fixture.componentInstance.withHeader.set(true);
    fixture.componentInstance.withFooter.set(true);
    fixture.detectChanges();
    // Same wrapper, same location — the body never moves out of .card-body.
    expect(card.querySelector(".card-body .body")).not.toBeNull();
    expect(card.querySelector(".card-header .body")).toBeNull();
  });

  it("maps `separators` to per-band classes (none/header/footer/both)", () => {
    const { fixture, card } = render();
    const sep = fixture.componentInstance.separators;
    expect(card.classList.contains("sep-header")).toBe(false);
    expect(card.classList.contains("sep-footer")).toBe(false);

    sep.set("header");
    fixture.detectChanges();
    expect(card.classList.contains("sep-header")).toBe(true);
    expect(card.classList.contains("sep-footer")).toBe(false);

    sep.set("footer");
    fixture.detectChanges();
    expect(card.classList.contains("sep-header")).toBe(false);
    expect(card.classList.contains("sep-footer")).toBe(true);

    sep.set("both");
    fixture.detectChanges();
    expect(card.classList.contains("sep-header")).toBe(true);
    expect(card.classList.contains("sep-footer")).toBe(true);
  });

  it("maps `raisedBands` to per-band classes (none/header/footer/both)", () => {
    const { fixture, card } = render();
    const raised = fixture.componentInstance.raisedBands;
    raised.set("footer");
    fixture.detectChanges();
    expect(card.classList.contains("raise-footer")).toBe(true);
    expect(card.classList.contains("raise-header")).toBe(false);

    raised.set("both");
    fixture.detectChanges();
    expect(card.classList.contains("raise-header")).toBe(true);
    expect(card.classList.contains("raise-footer")).toBe(true);
  });

  it("separators and raisedBands are independent per-band axes", () => {
    const { fixture, card } = render();
    // a raised header over a separated footer — asymmetric, each axis its own band
    fixture.componentInstance.raisedBands.set("header");
    fixture.componentInstance.separators.set("footer");
    fixture.detectChanges();
    expect(card.classList.contains("raise-header")).toBe(true);
    expect(card.classList.contains("raise-footer")).toBe(false);
    expect(card.classList.contains("sep-footer")).toBe(true);
    expect(card.classList.contains("sep-header")).toBe(false);
  });
});

@Component({
  standalone: true,
  imports: [FoldCardComponent],
  template: `<fold-card interactive>bare</fold-card>`,
})
class BareInteractiveHost {}

@Component({
  standalone: true,
  imports: [FoldCardComponent],
  template: `<fold-card interactive="false">explicit false</fold-card>`,
})
class FalseInteractiveHost {}

// The original bug: `interactive` lacked `booleanAttribute`, so a bare attribute
// coerced to "" (falsy — no effect) while `interactive="false"` coerced to a
// truthy string. These pin the corrected coercion.
describe("FoldCardComponent · interactive attribute coercion", () => {
  function cardOf(host: typeof BareInteractiveHost): HTMLElement {
    const fixture = TestBed.createComponent(host);
    fixture.detectChanges();
    return fixture.nativeElement.querySelector("fold-card") as HTMLElement;
  }

  it("treats a bare `interactive` attribute as true", () => {
    const card = cardOf(BareInteractiveHost);
    expect(card.classList.contains("is-interactive")).toBe(true);
    expect(card.getAttribute("role")).toBe("button");
  });

  it('treats `interactive="false"` as false', () => {
    const card = cardOf(FalseInteractiveHost);
    expect(card.classList.contains("is-interactive")).toBe(false);
    expect(card.getAttribute("role")).toBeNull();
  });
});
