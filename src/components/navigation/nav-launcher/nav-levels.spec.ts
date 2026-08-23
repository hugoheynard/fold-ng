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
    <a fold-nav-tile icon="home" label="A" data-t="a"></a>
    <a fold-nav-tile icon="home" label="B" data-t="b"></a>
    <a fold-nav-tile icon="home" label="C" data-t="c"></a>
    <fold-nav-group icon="library" label="PIM" data-g="pim">
      <button fold-nav-tile label="Products" data-e="products"></button>
      <button fold-nav-tile label="Categories" data-e="categories"></button>
    </fold-nav-group>
  </fold-nav-launcher>`,
})
class HostComponent {
  readonly open = signal(true);
}

function render() {
  const fixture = TestBed.createComponent(HostComponent);
  fixture.detectChanges();
  const root = fixture.nativeElement as HTMLElement;
  const el = (sel: string): HTMLElement =>
    root.querySelector<HTMLElement>(sel)!;
  const step = (sel: string): string =>
    el(sel).style.getPropertyValue("--fold-nl-step");
  const settle = (ms: number): void => {
    vi.advanceTimersByTime(ms);
    fixture.detectChanges();
  };
  const drill = (): void => {
    el("[data-g='pim'] .ng-face").click();
    fixture.detectChanges();
    settle(300);
  };
  const escape = (): void => {
    document.dispatchEvent(
      new KeyboardEvent("keydown", { key: "Escape", bubbles: true }),
    );
    fixture.detectChanges();
  };
  return { fixture, root, el, step, settle, drill, escape };
}

describe("fold-nav-launcher — the two levels", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  afterEach(() => {
    vi.useRealTimers();
    document.body.style.overflow = "";
  });

  it("starts the wave at the TOUCHED tile, not at the top of the list", () => {
    // The whole point of the transition: the movement is born under the finger.
    // Keyed to list position instead, it would read as a list refreshing.
    const { el, step, fixture } = render();
    el("[data-g='pim'] .ng-face").click();
    fixture.detectChanges();

    // The group is 4th; its neighbours are 1, 2 and 3 steps away from it.
    expect(step("[data-g='pim']")).toBe("0");
    expect(step("[data-t='c']")).toBe("1");
    expect(step("[data-t='b']")).toBe("2");
    expect(step("[data-t='a']")).toBe("3");
  });

  it("marks the touched tile as the anchor, and its sisters as leaving", () => {
    const { el, fixture } = render();
    el("[data-g='pim'] .ng-face").click();
    fixture.detectChanges();

    expect(el("[data-g='pim']").hasAttribute("data-anchor")).toBe(true);
    expect(el("[data-t='a']").hasAttribute("data-anchor")).toBe(false);
    expect(el("[data-t='a']").hasAttribute("data-leaving")).toBe(true);
  });

  it("sends focus to the sheet's first entry on the way down", () => {
    // Without this the focus-trap keeps the caret on a tile that is no longer
    // on screen, and the next Tab starts from nowhere.
    const { el, drill } = render();
    drill();

    expect(document.activeElement).toBe(el("[data-e='products']"));
  });

  it("moves focus only once the new level is actually on screen", () => {
    // Setting the level is a signal write: the sheet is still inert and the
    // rows unrendered until change detection has run. Focusing there and then
    // failed silently, and the trap fell back to the first control in the
    // dialog — so the caret landed on "dismiss" every time someone opened a
    // section. Asserting on the focused element alone cannot see this; the
    // level PAINTED at the moment focus is taken can.
    const { el, root, drill } = render();
    let levelAtFocus: string | null = null;
    el("[data-e='products']").addEventListener("focus", () => {
      levelAtFocus = root
        .querySelector(".nl-dialog")
        ?.getAttribute("data-level") as string | null;
    });

    drill();

    expect(levelAtFocus).toBe("2");
  });

  it("returns focus to the tile it came from on the way back", () => {
    const { el, drill, settle } = render();
    drill();

    el(".nl-back").click();
    settle(300);

    expect(document.activeElement).toBe(el("[data-g='pim'] .ng-face"));
  });

  it("makes Escape contextual: level 2 climbs, level 1 closes", () => {
    const { fixture, root, drill, escape, settle } = render();
    drill();
    expect(root.querySelector(".nl-dialog")?.getAttribute("data-level")).toBe(
      "2",
    );

    escape();
    settle(300);
    // Climbed — not closed.
    expect(fixture.componentInstance.open()).toBe(true);
    expect(root.querySelector(".nl-dialog")?.getAttribute("data-level")).toBe(
      "1",
    );

    escape();
    expect(fixture.componentInstance.open()).toBe(false);
  });

  it("ignores a second tap while the transition is running", () => {
    const { el, fixture, root, settle } = render();
    el("[data-g='pim'] .ng-face").click();
    fixture.detectChanges();
    // Mid-descent: still level 1, and tapping again must not queue a second one.
    el("[data-g='pim'] .ng-face").click();
    fixture.detectChanges();
    settle(600);

    expect(root.querySelector(".nl-dialog")?.getAttribute("data-level")).toBe(
      "2",
    );
  });

  it("comes back to level 1 when it is closed and re-opened", () => {
    // Re-opening onto a sheet from a previous visit drops you somewhere you
    // never asked to be.
    const { fixture, root, drill } = render();
    drill();

    fixture.componentInstance.open.set(false);
    fixture.detectChanges();
    fixture.componentInstance.open.set(true);
    fixture.detectChanges();

    expect(root.querySelector(".nl-dialog")?.getAttribute("data-level")).toBe(
      "1",
    );
  });
});
