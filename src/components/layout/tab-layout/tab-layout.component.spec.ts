import { Component, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect, afterEach } from "vitest";
import { FoldTabLayoutComponent } from "./tab-layout.component";

/** Captures the observer callback so a test can feed it widths directly. */
let emitWidth: ((width: number) => void) | undefined;
const realResizeObserver = globalThis.ResizeObserver;

function stubResizeObserver(): void {
  class FakeResizeObserver {
    constructor(callback: ResizeObserverCallback) {
      emitWidth = (width) =>
        callback(
          [{ contentRect: { width } } as ResizeObserverEntry],
          this as unknown as ResizeObserver,
        );
    }
    observe(): void {}
    disconnect(): void {}
    unobserve(): void {}
  }
  globalThis.ResizeObserver =
    FakeResizeObserver as unknown as typeof ResizeObserver;
}

afterEach(() => {
  globalThis.ResizeObserver = realResizeObserver;
  emitWidth = undefined;
});

@Component({
  standalone: true,
  imports: [FoldTabLayoutComponent],
  template: `<fold-tab-layout
    [placement]="placement()"
    [foldAt]="foldAt()"
    #tl="foldTabLayout"
  >
    <nav tabNav class="nav">Nav</nav>
    <div class="body">Body</div>
    <span class="probe">{{ tl.stacked() }}</span>
  </fold-tab-layout>`,
})
class HostComponent {
  readonly placement = signal<"top" | "side">("top");
  readonly foldAt = signal(720);
}

function render() {
  const fixture = TestBed.createComponent(HostComponent);
  fixture.detectChanges();
  const root = fixture.nativeElement as HTMLElement;
  return {
    fixture,
    layout: root.querySelector("fold-tab-layout") as HTMLElement,
    root,
  };
}

describe("FoldTabLayoutComponent", () => {
  it("projects the nav and the content into their regions", () => {
    const { layout } = render();
    expect(layout.querySelector(".tl-nav .nav")?.textContent).toBe("Nav");
    expect(layout.querySelector(".tl-body .body")?.textContent).toBe("Body");
  });

  it("keeps the content out of the nav region", () => {
    const { layout } = render();
    expect(layout.querySelector(".tl-nav .body")).toBeNull();
  });

  it("stacks by default (placement=top): nav above, no row modifier", () => {
    const { layout, root } = render();
    expect(layout.classList.contains("is-row")).toBe(false);
    expect(root.querySelector(".probe")?.textContent).toBe("true");
  });

  it("lays a side placement out as a row until it folds", () => {
    const { fixture, layout, root } = render();
    fixture.componentInstance.placement.set("side");
    fixture.detectChanges();
    // Unmeasured (jsdom reports 0), so a side layout starts as a rail.
    expect(layout.classList.contains("is-row")).toBe(true);
    expect(root.querySelector(".probe")?.textContent).toBe("false");
  });

  describe("folding (side)", () => {
    function sideLayout() {
      stubResizeObserver();
      const fixture = TestBed.createComponent(HostComponent);
      fixture.componentInstance.placement.set("side");
      fixture.componentInstance.foldAt.set(720);
      fixture.detectChanges();
      const layout = (fixture.nativeElement as HTMLElement).querySelector(
        "fold-tab-layout",
      ) as HTMLElement;
      const at = (width: number) => {
        emitWidth?.(width);
        fixture.detectChanges();
        return layout.classList.contains("is-row");
      };
      return { at };
    }

    it("folds at or below foldAt, and stays a rail above it", () => {
      const { at } = sideLayout();
      expect(at(900)).toBe(true); // roomy → rail
      expect(at(720)).toBe(false); // at the threshold → folded
      expect(at(400)).toBe(false); // narrower → still folded
    });

    it("does not unfold on the width a scrollbar gives back", () => {
      const { at } = sideLayout();
      at(700); // folded
      // Folding makes the content taller; losing / regaining ~15px of scrollbar
      // must not flip it straight back — that was the oscillation.
      expect(at(730)).toBe(false);
      expect(at(745)).toBe(false);
    });

    it("unfolds once clearly past the threshold", () => {
      const { at } = sideLayout();
      at(700); // folded
      expect(at(750)).toBe(false); // still inside the dead band (720 + 32)
      expect(at(800)).toBe(true); // clear of it → rail again
    });
  });
});
