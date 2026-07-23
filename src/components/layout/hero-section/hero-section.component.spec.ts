import { Component, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import { FoldHeroSectionComponent } from "./hero-section.component";

@Component({
  standalone: true,
  imports: [FoldHeroSectionComponent],
  template: `<fold-hero-section [align]="align()" [wash]="wash()">
    <span heroBackdrop class="mark">watermark</span>
    <h1 class="title">Fold</h1>
  </fold-hero-section>`,
})
class HostComponent {
  readonly align = signal<"center" | "start">("center");
  readonly wash = signal(true);
}

function render() {
  const fixture = TestBed.createComponent(HostComponent);
  fixture.detectChanges();
  const el = fixture.nativeElement.querySelector(
    "fold-hero-section",
  ) as HTMLElement;
  return { fixture, el };
}

describe("FoldHeroSectionComponent", () => {
  it("projects the content column", () => {
    expect(render().el.querySelector(".hs-content .title")?.textContent).toBe(
      "Fold",
    );
  });

  it("routes [heroBackdrop] into the aria-hidden decorative lane", () => {
    const backdrop = render().el.querySelector(".hs-backdrop");
    expect(backdrop?.getAttribute("aria-hidden")).toBe("true");
    expect(backdrop?.querySelector(".mark")?.textContent).toBe("watermark");
  });

  it("carries no modifier classes at the defaults (centre, washed)", () => {
    expect(render().el.className).toBe("");
  });

  it("adds align-start only when left-aligned", () => {
    const { fixture, el } = render();
    expect(el.classList.contains("align-start")).toBe(false);
    fixture.componentInstance.align.set("start");
    fixture.detectChanges();
    expect(el.classList.contains("align-start")).toBe(true);
  });

  it("adds no-wash when the wash is turned off", () => {
    const { fixture, el } = render();
    expect(el.classList.contains("no-wash")).toBe(false);
    fixture.componentInstance.wash.set(false);
    fixture.detectChanges();
    expect(el.classList.contains("no-wash")).toBe(true);
  });
});
