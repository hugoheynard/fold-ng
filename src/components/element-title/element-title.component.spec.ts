import { Component, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import { Sh3ElementTitleComponent } from "./element-title.component";

@Component({
  standalone: true,
  imports: [Sh3ElementTitleComponent],
  template: `<sh3-element-title [variant]="variant()" [level]="level()">
    Contexte
    @if (withAction()) {
      <button titleAction class="act">edit</button>
    }
  </sh3-element-title>`,
})
class HostComponent {
  readonly variant = signal<"eyebrow" | "bar">("eyebrow");
  readonly level = signal(2);
  readonly withAction = signal(false);
}

function render() {
  const fixture = TestBed.createComponent(HostComponent);
  fixture.detectChanges();
  const el = fixture.nativeElement.querySelector(
    "sh3-element-title",
  ) as HTMLElement;
  return { fixture, el };
}

describe("Sh3ElementTitleComponent", () => {
  it("projects its label text", () => {
    const { el } = render();
    expect(el.querySelector(".et-label")?.textContent?.trim()).toBe("Contexte");
  });

  it("makes the label a heading for assistive tech, level 2 by default", () => {
    const { el } = render();
    const label = el.querySelector(".et-label");
    expect(label?.getAttribute("role")).toBe("heading");
    expect(label?.getAttribute("aria-level")).toBe("2");
  });

  it("reflects a custom level on the label", () => {
    const { fixture, el } = render();
    fixture.componentInstance.level.set(3);
    fixture.detectChanges();
    expect(el.querySelector(".et-label")?.getAttribute("aria-level")).toBe("3");
  });

  it("is eyebrow by default and toggles the bar variant class", () => {
    const { fixture, el } = render();
    expect(el.classList.contains("v-bar")).toBe(false);

    fixture.componentInstance.variant.set("bar");
    fixture.detectChanges();
    expect(el.classList.contains("v-bar")).toBe(true);
  });

  it("projects a trailing action into [titleAction]", () => {
    const { fixture, el } = render();
    expect(el.querySelector(".et-action .act")).toBeNull();

    fixture.componentInstance.withAction.set(true);
    fixture.detectChanges();
    expect(el.querySelector(".et-action .act")).not.toBeNull();
  });
});
