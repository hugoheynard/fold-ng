import { Component } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import { TabNavComponent, type TabNavItem } from "./tab-nav.component";

@Component({
  standalone: true,
  imports: [TabNavComponent],
  template: `<sh3-tab-nav
    [tabs]="tabs"
    [activeKey]="activeKey"
    [activeStyle]="activeStyle"
    [direction]="direction"
    [size]="size"
    [background]="background"
    (tabChange)="picked = $event"
  />`,
})
class HostComponent {
  tabs: TabNavItem[] = [
    { key: "a", label: "Alpha", badge: 3 },
    { key: "b", label: "Beta", icon: "M12 2 2 22h20z" },
  ];
  activeKey = "a";
  activeStyle: "underline" | "fill" = "underline";
  direction: "horizontal" | "vertical" = "horizontal";
  size: "compact" | "comfortable" = "compact";
  background: "transparent" | "surface" = "transparent";
  picked: string | undefined;
}

function setup(patch: Partial<HostComponent> = {}) {
  const fixture = TestBed.createComponent(HostComponent);
  Object.assign(fixture.componentInstance, patch);
  fixture.detectChanges();
  const host = fixture.nativeElement as HTMLElement;
  return {
    instance: fixture.componentInstance,
    nav: host.querySelector(".tab-nav") as HTMLElement,
    buttons: [...host.querySelectorAll(".tab-nav-item")] as HTMLButtonElement[],
  };
}

describe("TabNavComponent", () => {
  it("renders one tab per item with its label", () => {
    const { buttons } = setup();
    const labels = buttons.map((b) =>
      b.querySelector(".tab-nav-label")?.textContent?.trim(),
    );
    expect(labels).toEqual(["Alpha", "Beta"]);
  });

  it("marks the active tab", () => {
    const { buttons } = setup({ activeKey: "b" });
    expect(buttons[0].classList.contains("is-active")).toBe(false);
    expect(buttons[1].classList.contains("is-active")).toBe(true);
  });

  it("emits the clicked key", () => {
    const { buttons, instance } = setup();
    buttons[1].click();
    expect(instance.picked).toBe("b");
  });

  it("renders a badge and an icon only where provided", () => {
    const { buttons } = setup();
    expect(
      buttons[0].querySelector(".tab-nav-badge")?.textContent?.trim(),
    ).toBe("3");
    expect(buttons[0].querySelector(".tab-nav-icon")).toBeNull();
    expect(
      buttons[1].querySelector(".tab-nav-icon path")?.getAttribute("d"),
    ).toBe("M12 2 2 22h20z");
  });

  it("reflects activeStyle + direction on the nav", () => {
    const { nav } = setup({ activeStyle: "fill", direction: "vertical" });
    expect(nav.classList.contains("style-fill")).toBe(true);
    expect(nav.classList.contains("dir-vertical")).toBe(true);
    expect(nav.classList.contains("style-underline")).toBe(false);
  });

  it("applies the comfortable size only when asked", () => {
    expect(setup().nav.classList.contains("size-comfortable")).toBe(false);
    expect(
      setup({ size: "comfortable" }).nav.classList.contains("size-comfortable"),
    ).toBe(true);
  });

  it("carries a filled background only when asked", () => {
    expect(setup().nav.classList.contains("bg-surface")).toBe(false);
    expect(
      setup({ background: "surface" }).nav.classList.contains("bg-surface"),
    ).toBe(true);
  });
});
