import { Component, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import { Sh3MenuItemComponent } from "./menu-item.component";

@Component({
  standalone: true,
  imports: [Sh3MenuItemComponent],
  template: `<a
    sh3-menu-item
    [icon]="'home'"
    [label]="label()"
    [active]="active()"
    [badge]="badge()"
  ></a>`,
})
class HostComponent {
  readonly label = signal("Home");
  readonly active = signal(false);
  readonly badge = signal<string | number | undefined>(undefined);
}

function render() {
  const fixture = TestBed.createComponent(HostComponent);
  fixture.detectChanges();
  const item = fixture.nativeElement.querySelector("a") as HTMLElement;
  return { fixture, item };
}

describe("Sh3MenuItemComponent", () => {
  it("renders the icon and the tooltip label", () => {
    const { item } = render();
    expect(item.querySelector("sh3-icon")).not.toBeNull();
    expect(item.querySelector(".mi-tip")?.textContent).toBe("Home");
  });

  it("toggles the active indicator via the `active` input", () => {
    const { fixture, item } = render();
    expect(item.classList.contains("is-active")).toBe(false);
    fixture.componentInstance.active.set(true);
    fixture.detectChanges();
    expect(item.classList.contains("is-active")).toBe(true);
  });

  it("renders no badge by default", () => {
    const { item } = render();
    expect(item.querySelector(".mi-dot")).toBeNull();
    expect(item.querySelector(".mi-badge")).toBeNull();
  });

  it("renders a plain corner dot + pill for a text badge", () => {
    const { fixture, item } = render();
    fixture.componentInstance.badge.set("new");
    fixture.detectChanges();
    const dot = item.querySelector(".mi-dot");
    expect(dot).not.toBeNull();
    expect(dot?.classList.contains("mi-dot-count")).toBe(false);
    expect(dot?.textContent).toBe("");
    expect(item.querySelector(".mi-badge")).not.toBeNull();
    expect(item.getAttribute("aria-label")).toBe("Home, new");
  });

  it("renders a count bubble for a numeric badge, capped at 99+", () => {
    const { fixture, item } = render();
    fixture.componentInstance.badge.set(3);
    fixture.detectChanges();
    const dot = item.querySelector(".mi-dot");
    expect(dot?.classList.contains("mi-dot-count")).toBe(true);
    expect(dot?.textContent?.trim()).toBe("3");

    fixture.componentInstance.badge.set(150);
    fixture.detectChanges();
    expect(item.querySelector(".mi-dot")?.textContent?.trim()).toBe("99+");
  });

  it("treats a zero count and empty string as no badge", () => {
    const { fixture, item } = render();
    fixture.componentInstance.badge.set(0);
    fixture.detectChanges();
    expect(item.querySelector(".mi-dot")).toBeNull();
    expect(item.getAttribute("aria-label")).toBeNull();

    fixture.componentInstance.badge.set("");
    fixture.detectChanges();
    expect(item.querySelector(".mi-dot")).toBeNull();
  });
});
