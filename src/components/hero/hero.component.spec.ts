import { Component, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import { HeroComponent } from "./hero.component";

@Component({
  standalone: true,
  imports: [HeroComponent],
  template: `<sh3-hero [tone]="tone()" [padding]="padding()">
    <span class="body">Content</span>
  </sh3-hero>`,
})
class HostComponent {
  readonly tone = signal<"neutral" | "sunken" | "gradient" | "primary">(
    "neutral",
  );
  readonly padding = signal<"sm" | "md" | "lg">("lg");
}

function render() {
  const fixture = TestBed.createComponent(HostComponent);
  fixture.detectChanges();
  const hero = fixture.nativeElement.querySelector("sh3-hero") as HTMLElement;
  return { fixture, hero };
}

describe("HeroComponent", () => {
  it("projects its content", () => {
    expect(render().hero.querySelector(".body")?.textContent).toBe("Content");
  });

  it("carries no modifier classes at the defaults (neutral tone, lg padding)", () => {
    expect(render().hero.className).toBe("");
  });

  it("maps each tone to its modifier class", () => {
    const { fixture, hero } = render();
    for (const [tone, cls] of [
      ["sunken", "t-sunken"],
      ["gradient", "t-gradient"],
      ["primary", "t-primary"],
    ] as const) {
      fixture.componentInstance.tone.set(tone);
      fixture.detectChanges();
      expect(hero.classList.contains(cls)).toBe(true);
    }
    fixture.componentInstance.tone.set("neutral");
    fixture.detectChanges();
    expect(hero.className).toBe("");
  });

  it("maps non-default padding to a modifier class", () => {
    const { fixture, hero } = render();
    fixture.componentInstance.padding.set("sm");
    fixture.detectChanges();
    expect(hero.classList.contains("p-sm")).toBe(true);
  });
});
