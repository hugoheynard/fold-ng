import { Component, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect, afterEach } from "vitest";
import { FoldNavLauncherComponent } from "./nav-launcher.component";
import { FoldNavTileComponent } from "./nav-tile.component";

@Component({
  standalone: true,
  imports: [FoldNavLauncherComponent, FoldNavTileComponent],
  template: `<fold-nav-launcher [(open)]="open">
    <a fold-nav-tile icon="home" label="Home" data-t="tile"></a>
  </fold-nav-launcher>`,
})
class HostComponent {
  readonly open = signal(false);
}

function render() {
  const fixture = TestBed.createComponent(HostComponent);
  fixture.detectChanges();
  const root = fixture.nativeElement as HTMLElement;
  return { fixture, root };
}

@Component({
  standalone: true,
  imports: [FoldNavLauncherComponent, FoldNavTileComponent],
  template: `<fold-nav-launcher [open]="true" [columns]="cols()">
    @for (t of tiles(); track t) {
      <a fold-nav-tile icon="home" [label]="t"></a>
    }
  </fold-nav-launcher>`,
})
class ColsHostComponent {
  readonly cols = signal<number | "auto">("auto");
  readonly tiles = signal<string[]>(["a", "b", "c"]);
}

function renderCols() {
  const fixture = TestBed.createComponent(ColsHostComponent);
  fixture.detectChanges();
  const grid = fixture.nativeElement.querySelector(".nl-grid") as HTMLElement;
  const cols = (): string => grid.style.getPropertyValue("--nav-cols");
  return { fixture, cols };
}

describe("FoldNavLauncherComponent", () => {
  afterEach(() => {
    // The scroll-lock writes body.style.overflow — leave the DOM clean.
    document.body.style.overflow = "";
  });

  it("renders nothing while closed", () => {
    const { root } = render();
    expect(root.querySelector(".nl-dialog")).toBeNull();
    expect(root.querySelector(".nl-scrim")).toBeNull();
  });

  it("renders the scrim, dialog and projected tiles when open", () => {
    const { fixture, root } = render();
    fixture.componentInstance.open.set(true);
    fixture.detectChanges();
    expect(root.querySelector(".nl-scrim")).not.toBeNull();
    const dialog = root.querySelector(".nl-dialog");
    expect(dialog).not.toBeNull();
    expect(dialog?.getAttribute("role")).toBe("dialog");
    expect(dialog?.getAttribute("aria-modal")).toBe("true");
    expect(root.querySelector(".nl-grid [data-t='tile']")).not.toBeNull();
  });

  it("locks body scroll while open and restores it on close", () => {
    const { fixture } = render();
    fixture.componentInstance.open.set(true);
    fixture.detectChanges();
    expect(document.body.style.overflow).toBe("hidden");

    fixture.componentInstance.open.set(false);
    fixture.detectChanges();
    expect(document.body.style.overflow).not.toBe("hidden");
  });

  /**
   * This used to click `.nl-scrim`, and passed for years while the gesture did
   * not work: jsdom has no layout, so it never noticed that `.nl-dialog` is
   * `position: fixed; inset: 0` at a higher z-index and covers the scrim whole.
   * The handler existed; nothing could ever reach it. The dismiss target is the
   * surface a pointer actually lands on.
   */
  it("closes on a click on the empty surface", () => {
    const { fixture, root } = render();
    fixture.componentInstance.open.set(true);
    fixture.detectChanges();

    const dialog = root.querySelector(".nl-dialog");
    expect(dialog).toBeInstanceOf(HTMLElement);
    dialog?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    fixture.detectChanges();
    expect(fixture.componentInstance.open()).toBe(false);
    expect(root.querySelector(".nl-dialog")).toBeNull();
  });

  it("a click on a tile does NOT dismiss it", () => {
    // The tile navigates; swallowing that click into a dismiss would race the
    // route change and make the launcher feel like it closed by accident.
    const { fixture, root } = render();
    fixture.componentInstance.open.set(true);
    fixture.detectChanges();

    const tile = root.querySelector(".fold-nav-tile");
    expect(tile).toBeInstanceOf(HTMLElement);
    tile?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    fixture.detectChanges();
    expect(fixture.componentInstance.open()).toBe(true);
  });

  it("closes on the close button", () => {
    const { fixture, root } = render();
    fixture.componentInstance.open.set(true);
    fixture.detectChanges();

    (root.querySelector(".nl-close") as HTMLElement).click();
    fixture.detectChanges();
    expect(fixture.componentInstance.open()).toBe(false);
  });

  it("closes on Escape", () => {
    const { fixture, root } = render();
    fixture.componentInstance.open.set(true);
    fixture.detectChanges();

    document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }));
    fixture.detectChanges();
    expect(fixture.componentInstance.open()).toBe(false);
    expect(root.querySelector(".nl-dialog")).toBeNull();
  });

  it("scales auto columns to the tile count (≤4 → 2, more → 3)", () => {
    const { fixture, cols } = renderCols();
    // 3 tiles → 2 columns (few, so large flat tiles).
    expect(cols()).toBe("2");

    fixture.componentInstance.tiles.set(["a", "b", "c", "d", "e"]);
    fixture.detectChanges();
    // 5 tiles → 3 columns.
    expect(cols()).toBe("3");
  });

  it("pins the column count when given a number", () => {
    const { fixture, cols } = renderCols();
    fixture.componentInstance.cols.set(4);
    fixture.detectChanges();
    expect(cols()).toBe("4");
  });
});
