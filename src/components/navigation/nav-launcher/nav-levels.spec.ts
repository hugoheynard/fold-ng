import { Component, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect, afterEach, beforeEach, vi } from "vitest";
import { FoldNavLauncherComponent } from "./nav-launcher.component";
import { FoldNavGroupComponent } from "./nav-group.component";
import { FoldNavTileComponent } from "./nav-tile.component";
import { FoldNavSectionComponent } from "./nav-section.component";

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

/**
 * The same launcher with its tiles filed under sections — a loose tile before,
 * one after, and the group inside a section. Sections are categories, not
 * levels: everything above must hold unchanged across them.
 */
@Component({
  standalone: true,
  imports: [
    FoldNavLauncherComponent,
    FoldNavGroupComponent,
    FoldNavSectionComponent,
    FoldNavTileComponent,
  ],
  template: `<fold-nav-launcher [(open)]="open" heading="Admin">
    <a fold-nav-tile icon="home" label="A" data-t="a"></a>
    <fold-nav-section label="Sell" color="#06a4a4" icon="home">
      <a fold-nav-tile icon="home" label="B" data-t="b"></a>
      <fold-nav-group icon="library" label="PIM" data-g="pim">
        <button fold-nav-tile label="Products" data-e="products"></button>
        <button fold-nav-tile label="Categories" data-e="categories"></button>
      </fold-nav-group>
    </fold-nav-section>
    <fold-nav-section label="Run">
      <a fold-nav-tile icon="home" label="C" data-t="c"></a>
    </fold-nav-section>
    <a fold-nav-tile icon="home" label="D" data-t="d"></a>
  </fold-nav-launcher>`,
})
class SectionedHostComponent {
  readonly open = signal(true);
}

function render(
  host: typeof HostComponent | typeof SectionedHostComponent = HostComponent,
) {
  const fixture = TestBed.createComponent(host);
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

describe("fold-nav-launcher — the two levels, across sections", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  afterEach(() => {
    vi.useRealTimers();
    document.body.style.overflow = "";
  });

  it("runs the wave across sections, from the touched tile", () => {
    // DOM order is A · B · PIM · C · D — the section boundaries do not reset
    // the distance, or the wave would restart at every header.
    const { el, step, fixture } = render(SectionedHostComponent);
    el("[data-g='pim'] .ng-face").click();
    fixture.detectChanges();

    expect(step("[data-g='pim']")).toBe("0");
    expect(step("[data-t='b']")).toBe("1");
    expect(step("[data-t='c']")).toBe("1");
    expect(step("[data-t='a']")).toBe("2");
    expect(step("[data-t='d']")).toBe("2");
    expect(el("[data-t='c']").hasAttribute("data-leaving")).toBe(true);
    expect(el("[data-g='pim']").hasAttribute("data-anchor")).toBe(true);
  });

  it("leaves the sheet's rows out of the level-1 wave", () => {
    // Querying descendants (to reach into sections) also reaches the sheet:
    // its rows must be staged as rows, top-down, not as level-1 tiles.
    const { step, drill } = render(SectionedHostComponent);
    drill();

    expect(step("[data-e='products']")).toBe("0");
    expect(step("[data-e='categories']")).toBe("1");
  });

  it("counts only level-1 items for the density — five here, so compact", () => {
    const { root } = render(SectionedHostComponent);
    expect(root.querySelector(".nl-grid")?.getAttribute("data-density")).toBe(
      "many",
    );
  });

  it("opens a group that sits in a section, and focus follows down and back", () => {
    const { el, root, drill, settle } = render(SectionedHostComponent);
    drill();

    expect(root.querySelector(".nl-dialog")?.getAttribute("data-level")).toBe(
      "2",
    );
    expect(el("[data-g='pim']").hasAttribute("data-open")).toBe(true);
    expect(document.activeElement).toBe(el("[data-e='products']"));

    el(".nl-back").click();
    settle(300);

    expect(root.querySelector(".nl-dialog")?.getAttribute("data-level")).toBe(
      "1",
    );
    expect(document.activeElement).toBe(el("[data-g='pim'] .ng-face"));
  });

  it("keeps Escape contextual inside a section", () => {
    const { fixture, root, drill, escape, settle } = render(
      SectionedHostComponent,
    );
    drill();
    escape();
    settle(300);
    expect(fixture.componentInstance.open()).toBe(true);
    expect(root.querySelector(".nl-dialog")?.getAttribute("data-level")).toBe(
      "1",
    );

    escape();
    expect(fixture.componentInstance.open()).toBe(false);
  });

  it("climbs on a swipe to the right from a sectioned sheet", () => {
    const { root, drill, settle } = render(SectionedHostComponent);
    drill();
    // jsdom has no PointerEvent; the handler reads `clientX` only.
    const body = root.querySelector(".nl-body") as HTMLElement;
    body.dispatchEvent(new MouseEvent("pointerdown", { clientX: 10 }));
    body.dispatchEvent(new MouseEvent("pointerup", { clientX: 120 }));
    settle(300);

    expect(root.querySelector(".nl-dialog")?.getAttribute("data-level")).toBe(
      "1",
    );
  });
});
