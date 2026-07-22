import { Component, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import { FoldHeroComponent } from "./hero.component";

@Component({
  standalone: true,
  imports: [FoldHeroComponent],
  template: `<fold-hero
    [surface]="surface()"
    [accent]="accent()"
    [padding]="padding()"
    [accentBar]="accentBar()"
  >
    <span class="body">Content</span>
  </fold-hero>`,
})
class HostComponent {
  readonly surface = signal<"card" | "sunken" | "primary">("card");
  readonly accent = signal<"none" | "subtle" | "gradient">("none");
  readonly padding = signal<"sm" | "md" | "lg">("lg");
  readonly accentBar = signal(false);
}

function render() {
  const fixture = TestBed.createComponent(HostComponent);
  fixture.detectChanges();
  const hero = fixture.nativeElement.querySelector("fold-hero") as HTMLElement;
  return { fixture, hero };
}

describe("FoldHeroComponent", () => {
  it("projects its content", () => {
    expect(render().hero.querySelector(".body")?.textContent).toBe("Content");
  });

  it("carries no modifier classes at the defaults (card surface, no accent, lg padding)", () => {
    expect(render().hero.className).toBe("");
  });

  it("maps each base surface to its modifier class", () => {
    const { fixture, hero } = render();
    for (const [surface, cls] of [
      ["sunken", "s-sunken"],
      ["primary", "s-primary"],
    ] as const) {
      fixture.componentInstance.surface.set(surface);
      fixture.detectChanges();
      expect(hero.classList.contains(cls)).toBe(true);
    }
    fixture.componentInstance.surface.set("card");
    fixture.detectChanges();
    expect(hero.className).toBe("");
  });

  it("maps each accent to its modifier class", () => {
    const { fixture, hero } = render();
    for (const [accent, cls] of [
      ["subtle", "a-subtle"],
      ["gradient", "a-gradient"],
    ] as const) {
      fixture.componentInstance.accent.set(accent);
      fixture.detectChanges();
      expect(hero.classList.contains(cls)).toBe(true);
    }
  });

  it("composes a base surface with an accent (orthogonal)", () => {
    const { fixture, hero } = render();
    fixture.componentInstance.surface.set("sunken");
    fixture.componentInstance.accent.set("subtle");
    fixture.detectChanges();
    expect(hero.classList.contains("s-sunken")).toBe(true);
    expect(hero.classList.contains("a-subtle")).toBe(true);
  });

  it("maps non-default padding to a modifier class", () => {
    const { fixture, hero } = render();
    fixture.componentInstance.padding.set("sm");
    fixture.detectChanges();
    expect(hero.classList.contains("p-sm")).toBe(true);
  });

  it("adds the accent-bar class (orthogonal to surface + accent)", () => {
    const { fixture, hero } = render();
    expect(hero.classList.contains("has-bar")).toBe(false);
    fixture.componentInstance.accentBar.set(true);
    fixture.componentInstance.accent.set("subtle");
    fixture.detectChanges();
    expect(hero.classList.contains("has-bar")).toBe(true);
    expect(hero.classList.contains("a-subtle")).toBe(true);
  });
});
