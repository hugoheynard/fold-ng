import { Component, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import { Sh3MenuComponent } from "./menu.component";

@Component({
  standalone: true,
  imports: [Sh3MenuComponent],
  template: `<sh3-menu
    [collapsible]="collapsible()"
    [(expanded)]="expanded"
    [tint]="tint()"
  >
    <div header class="h">Brand</div>
    <a class="item">Item</a>
    <div footer class="f">Account</div>
  </sh3-menu>`,
})
class HostComponent {
  readonly collapsible = signal(false);
  readonly expanded = signal(false);
  readonly tint = signal<"follow" | "neutral" | "primary">("follow");
}

function render() {
  const fixture = TestBed.createComponent(HostComponent);
  fixture.detectChanges();
  const menu = fixture.nativeElement.querySelector("sh3-menu") as HTMLElement;
  return { fixture, menu };
}

describe("Sh3MenuComponent", () => {
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

  it("ignores expanded unless collapsible", () => {
    const { fixture, menu } = render();
    fixture.componentInstance.expanded.set(true);
    fixture.detectChanges();
    // collapsible is false — expansion is inert.
    expect(menu.classList.contains("expanded")).toBe(false);

    fixture.componentInstance.collapsible.set(true);
    fixture.detectChanges();
    expect(menu.classList.contains("expanded")).toBe(true);
  });

  it("reflects the tint mode onto the host as data-tint", () => {
    const { fixture, menu } = render();
    expect(menu.getAttribute("data-tint")).toBe("follow");
    fixture.componentInstance.tint.set("primary");
    fixture.detectChanges();
    expect(menu.getAttribute("data-tint")).toBe("primary");
  });

  it("toggles the expanded class + writes back the two-way state", () => {
    const { fixture, menu } = render();
    fixture.componentInstance.collapsible.set(true);
    fixture.detectChanges();
    expect(menu.classList.contains("expanded")).toBe(false);

    menu.querySelector<HTMLButtonElement>(".menu-toggle")?.click();
    fixture.detectChanges();
    expect(menu.classList.contains("expanded")).toBe(true);
    expect(fixture.componentInstance.expanded()).toBe(true);
  });
});
