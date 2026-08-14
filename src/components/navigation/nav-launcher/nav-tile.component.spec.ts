import { Component, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import { FoldNavTileComponent } from "./nav-tile.component";

@Component({
  standalone: true,
  imports: [FoldNavTileComponent],
  template: `<a
    fold-nav-tile
    icon="home"
    label="Home"
    [variant]="variant()"
    [active]="active()"
    [badge]="badge()"
  ></a>`,
})
class HostComponent {
  readonly active = signal(false);
  readonly variant = signal<"surface" | "filled">("surface");
  readonly badge = signal<string | number | undefined>(undefined);
}

function setup() {
  const fixture = TestBed.createComponent(HostComponent);
  fixture.detectChanges();
  const tile = fixture.nativeElement.querySelector(
    "[fold-nav-tile]",
  ) as HTMLElement;
  return { fixture, tile };
}

describe("FoldNavTileComponent", () => {
  it("renders the icon and the label", () => {
    const { tile } = setup();
    expect(tile.querySelector("fold-icon")).not.toBeNull();
    expect(tile.querySelector(".nt-label")?.textContent).toContain("Home");
  });

  it("lights the active state (class + aria-current) only when active", () => {
    const { fixture, tile } = setup();
    expect(tile.classList.contains("is-active")).toBe(false);
    expect(tile.getAttribute("aria-current")).toBeNull();

    fixture.componentInstance.active.set(true);
    fixture.detectChanges();
    expect(tile.classList.contains("is-active")).toBe(true);
    expect(tile.getAttribute("aria-current")).toBe("page");
  });

  it("toggles the filled look from variant", () => {
    const { fixture, tile } = setup();
    expect(tile.classList.contains("is-filled")).toBe(false);

    fixture.componentInstance.variant.set("filled");
    fixture.detectChanges();
    expect(tile.classList.contains("is-filled")).toBe(true);
  });

  it("shows no badge by default", () => {
    expect(setup().tile.querySelector(".nt-badge")).toBeNull();
  });

  it("shows a count", () => {
    const { fixture, tile } = setup();
    fixture.componentInstance.badge.set(3);
    fixture.detectChanges();

    expect(tile.querySelector(".nt-badge")?.textContent?.trim()).toBe("3");
  });

  it("treats a count of zero as nothing to say", () => {
    // So a caller can pass a raw count. Pre-mapping 0 to null is the app-side
    // dance this input exists to remove.
    const { fixture, tile } = setup();
    fixture.componentInstance.badge.set(0);
    fixture.detectChanges();

    expect(tile.querySelector(".nt-badge")).toBeNull();
  });

  it("caps a big count, like the collapsed rail", () => {
    const { fixture, tile } = setup();
    fixture.componentInstance.badge.set(140);
    fixture.detectChanges();

    expect(tile.querySelector(".nt-badge")?.textContent?.trim()).toBe("99+");
  });

  it("folds the badge into the accessible name, and hides the bubble", () => {
    // Read alone the bubble announces a bare "3", detached from what it counts.
    const { fixture, tile } = setup();
    fixture.componentInstance.badge.set(3);
    fixture.detectChanges();

    expect(tile.getAttribute("aria-label")).toBe("Home, 3");
    expect(tile.querySelector(".nt-badge")?.getAttribute("aria-hidden")).toBe(
      "true",
    );
  });

  it("leaves the accessible name alone when there is no badge", () => {
    expect(setup().tile.getAttribute("aria-label")).toBeNull();
  });
});
