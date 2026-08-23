import { Component, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import { FoldMenuComponent } from "./menu.component";

@Component({
  standalone: true,
  imports: [FoldMenuComponent],
  template: `<fold-menu
    [collapsible]="collapsible()"
    [(expanded)]="expanded"
    [tint]="tint()"
    [level]="level()"
    [navLabel]="navLabel()"
  >
    <div header class="h">Brand</div>
    <a class="item">Item</a>
    <div footer class="f">Account</div>
  </fold-menu>`,
})
class HostComponent {
  readonly collapsible = signal(false);
  readonly expanded = signal<boolean | undefined>(false);
  readonly tint = signal<"follow" | "neutral" | "primary">("follow");
  readonly level = signal<"primary" | "secondary" | "tertiary">("primary");
  readonly navLabel = signal<string | undefined>(undefined);
}

function render() {
  const fixture = TestBed.createComponent(HostComponent);
  fixture.detectChanges();
  const menu = fixture.nativeElement.querySelector("fold-menu") as HTMLElement;
  return { fixture, menu };
}

describe("FoldMenuComponent", () => {
  it("routes header / default / footer into their bands", () => {
    const { menu } = render();
    expect(menu.querySelector(".menu-head .h")?.textContent).toBe("Brand");
    expect(menu.querySelector(".menu-body .item")?.textContent).toBe("Item");
    expect(menu.querySelector(".menu-foot .f")?.textContent).toBe("Account");
  });

  it("shows the toggle only when collapsible", () => {
    const { fixture, menu } = render();
    expect(menu.querySelector(".menu-toggle")).toBeNull();
    fixture.componentInstance.collapsible.set(true);
    fixture.detectChanges();
    expect(menu.querySelector(".menu-toggle")).not.toBeNull();
  });

  it("expands as a standalone state (no collapsible needed)", () => {
    const { fixture, menu } = render();
    // A static labelled sidebar: expanded without collapsible.
    fixture.componentInstance.expanded.set(true);
    fixture.detectChanges();
    expect(menu.classList.contains("expanded")).toBe(true);
    // collapsible only governs the toggle, not the expanded state.
    expect(menu.querySelector(".menu-toggle")).toBeNull();
  });

  it("reflects the tint mode onto the host as data-tint", () => {
    const { fixture, menu } = render();
    expect(menu.getAttribute("data-tint")).toBe("follow");
    fixture.componentInstance.tint.set("primary");
    fixture.detectChanges();
    expect(menu.getAttribute("data-tint")).toBe("primary");
  });

  it("reflects the rail level onto the host as data-level", () => {
    const { fixture, menu } = render();
    expect(menu.getAttribute("data-level")).toBe("primary");
    fixture.componentInstance.level.set("secondary");
    fixture.detectChanges();
    expect(menu.getAttribute("data-level")).toBe("secondary");
  });

  it("names the nav landmark only when a label is given", () => {
    const { fixture, menu } = render();
    const nav = menu.querySelector("nav.menu-body");
    // Unset: no empty name — a lone rail is fine as the page's only <nav>.
    expect(nav?.hasAttribute("aria-label")).toBe(false);
    fixture.componentInstance.navLabel.set("PIM");
    fixture.detectChanges();
    expect(nav?.getAttribute("aria-label")).toBe("PIM");
  });

  it("toggles the expanded class + writes back the two-way state", () => {
    const { fixture, menu } = render();
    fixture.componentInstance.collapsible.set(true);
    fixture.detectChanges();
    // expanded is bound to false here → explicit wins, so it starts collapsed.
    expect(menu.classList.contains("expanded")).toBe(false);

    menu.querySelector<HTMLButtonElement>(".menu-toggle")?.click();
    fixture.detectChanges();
    expect(menu.classList.contains("expanded")).toBe(true);
    expect(fixture.componentInstance.expanded()).toBe(true);
  });

  it("unbound expanded follows collapsible (collapsible → boots open)", () => {
    @Component({
      standalone: true,
      imports: [FoldMenuComponent],
      // No expanded binding — the effective state must follow collapsible.
      template: `<fold-menu [collapsible]="c">
        <a class="item">Item</a>
      </fold-menu>`,
    })
    class BareHost {
      c = true;
    }

    const open = TestBed.createComponent(BareHost);
    open.detectChanges();
    expect(
      (
        open.nativeElement.querySelector("fold-menu") as HTMLElement
      ).classList.contains("expanded"),
    ).toBe(true);

    // …and a bare (non-collapsible) menu boots as the icon rail.
    const plain = TestBed.createComponent(BareHost);
    plain.componentInstance.c = false;
    plain.detectChanges();
    expect(
      (
        plain.nativeElement.querySelector("fold-menu") as HTMLElement
      ).classList.contains("expanded"),
    ).toBe(false);
  });

  it("an explicit [expanded]=false wins over the collapsible default", () => {
    @Component({
      standalone: true,
      imports: [FoldMenuComponent],
      template: `<fold-menu collapsible [expanded]="false">
        <a class="item">Item</a>
      </fold-menu>`,
    })
    class ForcedHost {}

    const fixture = TestBed.createComponent(ForcedHost);
    fixture.detectChanges();
    expect(
      (
        fixture.nativeElement.querySelector("fold-menu") as HTMLElement
      ).classList.contains("expanded"),
    ).toBe(false);
  });
});
