import { Component, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import { Sh3AsideLayoutComponent } from "./aside-layout.component";

@Component({
  standalone: true,
  imports: [Sh3AsideLayoutComponent],
  template: `<sh3-aside-layout [asideRightLabel]="rightLabel()">
    @if (left()) {
      <div asideLeft>L</div>
    }
    <div>C</div>
    <div asideRight>R</div>
  </sh3-aside-layout>`,
})
class HostComponent {
  readonly left = signal(true);
  readonly rightLabel = signal<string | undefined>(undefined);
}

function render() {
  const fixture = TestBed.createComponent(HostComponent);
  fixture.detectChanges();
  const host = fixture.nativeElement as HTMLElement;
  return {
    fixture,
    center: host.querySelector(".al-center") as HTMLElement,
    railLeft: host.querySelector(".al-aside-left") as HTMLElement,
    railRight: host.querySelector(".al-aside-right") as HTMLElement,
  };
}

describe("Sh3AsideLayoutComponent", () => {
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
});
