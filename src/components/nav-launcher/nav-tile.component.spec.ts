import { Component, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import { Sh3NavTileComponent } from "./nav-tile.component";

@Component({
  standalone: true,
  imports: [Sh3NavTileComponent],
  template: `<a
    sh3-nav-tile
    icon="home"
    label="Home"
    [variant]="variant()"
    [active]="active()"
  ></a>`,
})
class HostComponent {
  readonly active = signal(false);
  readonly variant = signal<"surface" | "filled">("surface");
}

function setup() {
  const fixture = TestBed.createComponent(HostComponent);
  fixture.detectChanges();
  const tile = fixture.nativeElement.querySelector(
    "[sh3-nav-tile]",
  ) as HTMLElement;
  return { fixture, tile };
}

describe("Sh3NavTileComponent", () => {
  it("renders the icon and the label", () => {
    const { tile } = setup();
    expect(tile.querySelector("sh3-icon")).not.toBeNull();
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
});
