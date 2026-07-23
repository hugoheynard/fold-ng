import { Component, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import {
  FoldStickyColumnDirective,
  type FoldStickyColumnAnchor,
} from "./sticky-column.directive";

@Component({
  standalone: true,
  imports: [FoldStickyColumnDirective],
  template: `<aside
    foldStickyColumn
    [sticky]="anchor()"
    [stickyOffset]="offset()"
  ></aside>`,
})
class HostComponent {
  readonly anchor = signal<FoldStickyColumnAnchor>("top");
  readonly offset = signal<number | string | undefined>(undefined);
}

function render() {
  const fixture = TestBed.createComponent(HostComponent);
  fixture.detectChanges();
  const aside = fixture.nativeElement.querySelector("aside") as HTMLElement;
  return { fixture, aside };
}

describe("FoldStickyColumnDirective", () => {
  it("lays the host out as a sticky flex column via inline styles", () => {
    const { aside } = render();
    expect(aside.style.display).toBe("flex");
    expect(aside.style.flexDirection).toBe("column");
    // tunable via CSS vars (default fallbacks kept in the value)
    expect(aside.style.position).toContain("--fold-sticky-column-position");
    expect(aside.style.gap).toContain("--fold-sticky-column-gap");
  });

  it("defaults to a top anchor at the header-clearance offset", () => {
    const { aside } = render();
    expect(aside.style.top).toContain("--fold-sticky-column-offset");
    expect(aside.style.bottom).toBe("auto");
    expect(aside.style.transform).toBe("none");
    expect(aside.style.alignSelf).toBe("start");
  });

  it("pins to the bottom edge for the bottom anchor", () => {
    const { fixture, aside } = render();
    fixture.componentInstance.anchor.set("bottom");
    fixture.detectChanges();
    expect(aside.style.top).toBe("auto");
    expect(aside.style.bottom).toContain("--fold-sticky-column-offset");
    expect(aside.style.transform).toBe("none");
    // in-flow position must match the anchor so a short column starts pinned
    expect(aside.style.alignSelf).toBe("end");
  });

  it("centres via top:50% + translateY for the center anchor", () => {
    const { fixture, aside } = render();
    fixture.componentInstance.anchor.set("center");
    fixture.detectChanges();
    expect(aside.style.top).toBe("50%");
    expect(aside.style.transform).toBe("translateY(-50%)");
    // top:50% pins the top edge, so the column must start at the row top
    expect(aside.style.alignSelf).toBe("start");
  });

  it("resolves a numeric offset to px on the pinned edge", () => {
    const { fixture, aside } = render();
    fixture.componentInstance.offset.set(24);
    fixture.detectChanges();
    expect(aside.style.top).toBe("24px");

    fixture.componentInstance.anchor.set("bottom");
    fixture.detectChanges();
    expect(aside.style.top).toBe("auto");
    expect(aside.style.bottom).toBe("24px");
  });

  it("nudges off dead-centre when an offset is set with center", () => {
    const { fixture, aside } = render();
    fixture.componentInstance.anchor.set("center");
    fixture.componentInstance.offset.set("2rem");
    fixture.detectChanges();
    expect(aside.style.top).toBe("calc(50% + 2rem)");
  });

  it("resolves a numeric center offset to px inside the calc", () => {
    const { fixture, aside } = render();
    fixture.componentInstance.anchor.set("center");
    fixture.componentInstance.offset.set(24);
    fixture.detectChanges();
    expect(aside.style.top).toBe("calc(50% + 24px)");
    expect(aside.style.transform).toBe("translateY(-50%)");
  });
});
