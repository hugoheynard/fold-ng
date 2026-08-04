import { Component, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import {
  FoldScrollRegionDirective,
  type FoldScrollAxis,
} from "./scroll-region.directive";
import {
  FOLD_SCROLL_FROZEN_CLASS,
  ScrollRegionRegistry,
} from "../a11y/scroll-region-registry.service";

@Component({
  standalone: true,
  imports: [FoldScrollRegionDirective],
  template: `<div [foldScrollRegion]="axis()" class="region">content</div>`,
})
class HostComponent {
  readonly axis = signal<FoldScrollAxis | "">("");
}

function render() {
  const fixture = TestBed.createComponent(HostComponent);
  fixture.detectChanges();
  const el = (fixture.nativeElement as HTMLElement).querySelector(
    ".region",
  ) as HTMLElement;
  return { fixture, el };
}

describe("FoldScrollRegionDirective", () => {
  it("sets the vertical foot-guns by default (bare attribute = block)", () => {
    const { el } = render();
    expect(el.style.overflowY).toBe("auto");
    expect(el.style.overflowX).toBe(""); // untouched on the block axis
    expect(el.style.minHeight).toBe("0");
    expect(el.style.minWidth).toBe(""); // only the scroll axis gets min-*: 0
    expect(el.style.overscrollBehavior).toBe("contain");
    expect(el.style.scrollbarWidth).toBe("thin");
  });

  it('scrolls horizontally on axis="inline"', () => {
    const { fixture, el } = render();
    fixture.componentInstance.axis.set("inline");
    fixture.detectChanges();
    expect(el.style.overflowX).toBe("auto");
    expect(el.style.overflowY).toBe(""); // untouched on the inline axis
    expect(el.style.minWidth).toBe("0");
    expect(el.style.minHeight).toBe("");
  });

  it('scrolls both axes on axis="both"', () => {
    const { fixture, el } = render();
    fixture.componentInstance.axis.set("both");
    fixture.detectChanges();
    expect(el.style.overflowX).toBe("auto");
    expect(el.style.overflowY).toBe("auto");
    expect(el.style.minHeight).toBe("0");
    expect(el.style.minWidth).toBe("0");
  });

  it("registers with the registry so an overlay can freeze it — without clobbering its own overflow", () => {
    const { el } = render();
    const registry = TestBed.inject(ScrollRegionRegistry);
    registry.freeze();
    // The directive's host joined the registry in its constructor, so the freeze
    // reaches it — as a class, so the directive's own inline overflow-y survives.
    expect(el.classList.contains(FOLD_SCROLL_FROZEN_CLASS)).toBe(true);
    expect(el.style.overflowY).toBe("auto");

    registry.unfreeze();
    expect(el.classList.contains(FOLD_SCROLL_FROZEN_CLASS)).toBe(false);
    expect(el.style.overflowY).toBe("auto"); // untouched throughout
  });

  it("unregisters on destroy — a later freeze no longer touches it", () => {
    const { fixture, el } = render();
    const registry = TestBed.inject(ScrollRegionRegistry);
    fixture.destroy();
    registry.freeze();
    expect(el.classList.contains(FOLD_SCROLL_FROZEN_CLASS)).toBe(false);
  });
});
