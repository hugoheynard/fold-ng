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
  it("projects its content", () => {
    const { card } = render();
    expect(card.querySelector(".body")?.textContent).toBe("Content");
  });

  it("carries no modifier classes at the defaults (lg radius, md padding)", () => {
    const { card } = render();
    expect(card.className).toBe("");
  });

  it("maps radius + padding + interactive to modifier classes", () => {
    const { fixture, card } = render();
    fixture.componentInstance.radius.set("sm");
    fixture.componentInstance.padding.set("none");
    fixture.componentInstance.interactive.set(true);
    fixture.detectChanges();
    expect(card.classList.contains("r-sm")).toBe(true);
    expect(card.classList.contains("p-none")).toBe(true);
    expect(card.classList.contains("is-interactive")).toBe(true);
  });

  it("switches the surface tint via the `surface` input", () => {
    const { fixture, card } = render();
    expect(card.classList.contains("s-sunken")).toBe(false);
    fixture.componentInstance.surface.set("sunken");
    fixture.detectChanges();
    expect(card.classList.contains("s-sunken")).toBe(true);
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

  it("toggles the separators modifier via the `separators` input", () => {
    const { fixture, card } = render();
    expect(card.classList.contains("has-sep")).toBe(false);
    fixture.componentInstance.separators.set(true);
    fixture.detectChanges();
    expect(card.classList.contains("has-sep")).toBe(true);
  });
});
