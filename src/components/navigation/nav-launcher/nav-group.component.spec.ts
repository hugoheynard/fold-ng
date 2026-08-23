import { Component, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect, afterEach, beforeEach, vi } from "vitest";
import { FoldNavLauncherComponent } from "./nav-launcher.component";
import { FoldNavGroupComponent } from "./nav-group.component";
import { FoldNavTileComponent } from "./nav-tile.component";

@Component({
  standalone: true,
  imports: [
    FoldNavLauncherComponent,
    FoldNavGroupComponent,
    FoldNavTileComponent,
  ],
  template: `<fold-nav-launcher [(open)]="open" heading="Admin">
    <a fold-nav-tile icon="home" label="Home" data-t="home"></a>
    <fold-nav-group icon="library" label="PIM" data-g="pim">
      @for (e of entries(); track e) {
        <a fold-nav-tile [label]="e" [attr.data-e]="e"></a>
      }
    </fold-nav-group>
    <a fold-nav-tile icon="settings" label="Settings" data-t="settings"></a>
  </fold-nav-launcher>`,
})
class HostComponent {
  readonly open = signal(true);
  readonly entries = signal(["Products", "Categories"]);
}

function render() {
  const fixture = TestBed.createComponent(HostComponent);
  fixture.detectChanges();
  const root = fixture.nativeElement as HTMLElement;
  const face = (): HTMLButtonElement =>
    root.querySelector<HTMLButtonElement>("[data-g='pim'] .ng-face")!;
  const drill = (): void => {
    face().click();
    fixture.detectChanges();
    vi.advanceTimersByTime(300);
    fixture.detectChanges();
  };
  return { fixture, root, face, drill };
}

describe("FoldNavGroupComponent", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  afterEach(() => {
    vi.useRealTimers();
    document.body.style.overflow = "";
  });

  it("makes a tile inside it a ROW, and one outside it a square", () => {
    // Nothing is passed to say which — the tile resolves the group through the
    // element injector, which follows the tree the consumer wrote.
    const { root } = render();
    const inside = root.querySelector("[data-e='Products']");
    const outside = root.querySelector("[data-t='home']");

    expect(inside?.classList.contains("is-row")).toBe(true);
    expect(inside?.querySelector(".nt-row-label")).not.toBeNull();
    expect(outside?.classList.contains("is-row")).toBe(false);
    expect(outside?.querySelector(".nt-label")).not.toBeNull();
  });

  it("falls back to a status dot when a row has no icon", () => {
    const { root } = render();
    const lead = root.querySelector("[data-e='Products'] .nt-lead");
    // The gutter is still there — a silent row must not shift its neighbour.
    expect(lead).not.toBeNull();
    expect(lead?.querySelector(".nt-dot")).not.toBeNull();
  });

  it("DERIVES the entry count instead of being told it", () => {
    // A count declared beside the list it counts is a second source of truth:
    // the first tile added without touching it makes the header lie.
    const { fixture, root, drill } = render();
    drill();
    expect(root.querySelector(".nl-sub")?.textContent).toBe("2 entries");

    fixture.componentInstance.entries.set(["Products", "Categories", "VAT"]);
    fixture.detectChanges();
    expect(root.querySelector(".nl-sub")?.textContent).toBe("3 entries");
  });

  it("keeps the sheet inert until it opens", () => {
    // display:none hides it from the eye; only `inert` hides it from Tab.
    const { root, drill } = render();
    const sheet = root.querySelector("[data-g='pim'] .ng-sheet");
    expect(sheet?.hasAttribute("inert")).toBe(true);

    drill();
    expect(sheet?.hasAttribute("inert")).toBe(false);
  });

  it("announces the level it opened", () => {
    // The descent is mute to a screen reader otherwise: the animation carries
    // nothing at all, and there is no breadcrumb to read.
    const { root, drill } = render();
    expect(root.querySelector(".nl-live")?.textContent).toBe("");

    drill();
    expect(root.querySelector(".nl-live")?.textContent).toBe("PIM, 2 entries");
  });

  it("says a single entry in the singular", () => {
    const { fixture, root, drill } = render();
    fixture.componentInstance.entries.set(["Products"]);
    fixture.detectChanges();
    drill();

    expect(root.querySelector(".nl-sub")?.textContent).toBe("1 entry");
  });
});
