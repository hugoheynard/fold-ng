import { Component, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import { Sh3CardComponent } from "./card.component";

@Component({
  standalone: true,
  imports: [Sh3CardComponent],
  template: `<sh3-card
    [surface]="surface()"
    [radius]="radius()"
    [padding]="padding()"
    [interactive]="interactive()"
    [separators]="separators()"
    [raisedBands]="raisedBands()"
  >
    @if (withHeader()) {
      <span cardHeader class="head">Header</span>
    }
    <span class="body">Content</span>
    @if (withFooter()) {
      <span cardFooter class="foot">Footer</span>
    }
  </sh3-card>`,
})
class HostComponent {
  readonly surface = signal<"card" | "sunken">("card");
  readonly radius = signal<"sm" | "md" | "lg">("lg");
  readonly padding = signal<"none" | "sm" | "md" | "lg">("md");
  readonly interactive = signal(false);
  readonly separators = signal(false);
  readonly raisedBands = signal(false);
  readonly withHeader = signal(false);
  readonly withFooter = signal(false);
}

function render() {
  const fixture = TestBed.createComponent(HostComponent);
  fixture.detectChanges();
  const card = fixture.nativeElement.querySelector("sh3-card") as HTMLElement;
  return { fixture, card };
}

describe("Sh3CardComponent", () => {
  it("renders the three region elements (header / body / footer)", () => {
    const { card } = render();
    expect(card.querySelector("header.card-header")).not.toBeNull();
    expect(card.querySelector("div.card-body")).not.toBeNull();
    expect(card.querySelector("footer.card-footer")).not.toBeNull();
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

  it("adds is-interactive via the `interactive` input", () => {
    const { fixture, card } = render();
    expect(card.classList.contains("is-interactive")).toBe(false);
    fixture.componentInstance.interactive.set(true);
    fixture.detectChanges();
    expect(card.classList.contains("is-interactive")).toBe(true);
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

  it("toggles the separators modifier via the `separators` input", () => {
    const { fixture, card } = render();
    expect(card.classList.contains("has-sep")).toBe(false);
    fixture.componentInstance.separators.set(true);
    fixture.detectChanges();
    expect(card.classList.contains("has-sep")).toBe(true);
  });

  it("toggles the raised-bands modifier via the `raisedBands` input", () => {
    const { fixture, card } = render();
    expect(card.classList.contains("raised-bands")).toBe(false);
    fixture.componentInstance.raisedBands.set(true);
    fixture.detectChanges();
    expect(card.classList.contains("raised-bands")).toBe(true);
  });

  it("separators and raisedBands are independent modifiers", () => {
    const { fixture, card } = render();
    fixture.componentInstance.raisedBands.set(true);
    fixture.detectChanges();
    expect(card.classList.contains("raised-bands")).toBe(true);
    expect(card.classList.contains("has-sep")).toBe(false);
    fixture.componentInstance.separators.set(true);
    fixture.componentInstance.raisedBands.set(false);
    fixture.detectChanges();
    expect(card.classList.contains("has-sep")).toBe(true);
    expect(card.classList.contains("raised-bands")).toBe(false);
  });
});
