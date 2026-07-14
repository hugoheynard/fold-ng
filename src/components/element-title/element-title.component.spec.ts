import { Component, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import { Sh3ElementTitleComponent } from "./element-title.component";

@Component({
  standalone: true,
  imports: [Sh3ElementTitleComponent],
  template: `<sh3-element-title [variant]="variant()" [level]="level()">
    Contexte
  </sh3-element-title>`,
})
class HostComponent {
  readonly variant = signal<"eyebrow" | "bar">("eyebrow");
  readonly level = signal(2);
}

function render() {
  const fixture = TestBed.createComponent(HostComponent);
  fixture.detectChanges();
  return {
    fixture,
    el: fixture.nativeElement.querySelector("sh3-element-title") as HTMLElement,
  };
}

describe("Sh3ElementTitleComponent", () => {
  it("projects its label text", () => {
    const { el } = render();
    expect(el.textContent?.trim()).toBe("Contexte");
  });

  it("is a heading for assistive tech, level 2 by default", () => {
    const { el } = render();
    expect(el.getAttribute("role")).toBe("heading");
    expect(el.getAttribute("aria-level")).toBe("2");
  });

  it("reflects a custom level", () => {
    const { fixture, el } = render();
    fixture.componentInstance.level.set(3);
    fixture.detectChanges();
    expect(el.getAttribute("aria-level")).toBe("3");
  });

  it("is eyebrow by default and toggles the bar variant class", () => {
    const { fixture, el } = render();
    expect(el.classList.contains("v-bar")).toBe(false);

    fixture.componentInstance.variant.set("bar");
    fixture.detectChanges();
    expect(el.classList.contains("v-bar")).toBe(true);
  });
});
