import { Component } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { provideRouter, Router } from "@angular/router";
import { beforeEach, describe, it, expect } from "vitest";
import {
  FoldViewNavComponent,
  type FoldViewNavItem,
} from "./view-nav.component";

@Component({
  standalone: true,
  imports: [FoldViewNavComponent],
  template: `<fold-view-nav
    [items]="items"
    [activeKey]="activeKey"
    [activeStyle]="activeStyle"
    [direction]="direction"
    [size]="size"
    [collapsed]="collapsed"
    [background]="background"
    (activeKeyChange)="picked = $event"
  />`,
})
class HostComponent {
  items: FoldViewNavItem[] = [
    { key: "a", label: "Alpha", badge: 3 },
    { key: "b", label: "Beta", icon: "settings" },
  ];
  activeKey = "a";
  activeStyle: "underline" | "fill" = "underline";
  direction: "horizontal" | "vertical" | "auto" = "horizontal";
  size: "compact" | "comfortable" = "compact";
  collapsed = false;
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
    nav: host.querySelector(".tab-bar") as HTMLElement,
    buttons: [...host.querySelectorAll(".tab-bar-item")] as HTMLButtonElement[],
  };
}

describe("FoldViewNavComponent", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideRouter([
          { path: "alpha", children: [] },
          { path: "beta", children: [] },
        ]),
      ],
    });
  });

  it("renders one tab per item with its label", () => {
    const { buttons } = setup();
    const labels = buttons.map((b) =>
      b.querySelector(".tab-bar-label")?.textContent?.trim(),
    );
    expect(labels).toEqual(["Alpha", "Beta"]);
  });

  it("marks the active tab", () => {
    const { buttons } = setup({ activeKey: "b" });
    expect(buttons[0]!.classList.contains("is-active")).toBe(false);
    expect(buttons[1]!.classList.contains("is-active")).toBe(true);
  });

  it("emits the clicked key", () => {
    const { buttons, instance } = setup();
    buttons[1]!.click();
    expect(instance.picked).toBe("b");
  });

  it("renders a badge and an icon only where provided", () => {
    const { buttons } = setup();
    expect(
      buttons[0]!.querySelector(".tab-bar-badge")?.textContent?.trim(),
    ).toBe("3");
    expect(buttons[0]!.querySelector(".tab-bar-icon")).toBeNull();
    expect(buttons[1]!.querySelector(".tab-bar-badge")).toBeNull();
    // The icon is an fold-icon (registry-named), not a hand-rolled <svg><path>.
    const icon = buttons[1]!.querySelector("fold-icon.tab-bar-icon");
    expect(icon).not.toBeNull();
    expect(icon?.querySelector("svg")).not.toBeNull();
  });

  it("tints the badge accent on the active tab, neutral otherwise", () => {
    const { buttons } = setup({ activeKey: "a" });
    expect(
      buttons[0]!.querySelector(".tab-bar-badge")?.classList.contains("accent"),
    ).toBe(true);
  });

  it("marks the collapsed icon mode on the nav", () => {
    expect(setup().nav.classList.contains("is-collapsed")).toBe(false);
    expect(
      setup({ collapsed: true }).nav.classList.contains("is-collapsed"),
    ).toBe(true);
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

  it("renders a real anchor for a link item (deep-linkable)", () => {
    const { buttons } = setup({
      items: [
        { key: "a", label: "Alpha", link: "alpha" },
        { key: "b", label: "Beta", link: "beta" },
      ],
    });
    expect(buttons.every((el) => el.tagName === "A")).toBe(true);
    expect(buttons[0]!.getAttribute("href")).toBe("/alpha");
  });

  it("drives the active state from the URL for link items (routerLinkActive)", async () => {
    const fixture = TestBed.createComponent(HostComponent);
    fixture.componentInstance.items = [
      { key: "a", label: "Alpha", link: "alpha" },
      { key: "b", label: "Beta", link: "beta" },
    ];
    fixture.detectChanges();
    await TestBed.inject(Router).navigateByUrl("/beta");
    fixture.detectChanges();

    const anchors = [
      ...(fixture.nativeElement as HTMLElement).querySelectorAll(
        ".tab-bar-item",
      ),
    ];
    expect(anchors[1]!.classList.contains("is-active")).toBe(true);
    expect(anchors[1]!.getAttribute("aria-current")).toBe("page");
    expect(anchors[0]!.classList.contains("is-active")).toBe(false);
    expect(anchors[0]!.getAttribute("aria-current")).toBeNull();
  });

  it("renders a disabled button for a disabled item", () => {
    const { buttons } = setup({
      items: [{ key: "a", label: "Alpha", disabled: true }],
    });
    expect(buttons[0]!.tagName).toBe("BUTTON");
    expect(buttons[0]!.hasAttribute("disabled")).toBe(true);
    expect(buttons[0]!.getAttribute("aria-disabled")).toBe("true");
  });
});
