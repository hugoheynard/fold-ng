import { Component, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import { Sh3AppShellComponent } from "./app-shell.component";

@Component({
  standalone: true,
  imports: [Sh3AppShellComponent],
  template: `<sh3-app-shell>
    <nav railPrimary data-t="rp">rail one</nav>
    <nav railSecondary data-t="rs">rail two</nav>
    <div header data-t="hd">header</div>
    <main data-t="content">page</main>
  </sh3-app-shell>`,
})
class HostComponent {}

@Component({
  standalone: true,
  imports: [Sh3AppShellComponent],
  template: `<sh3-app-shell [railWidth]="rail()" [headerHeight]="header()" />`,
})
class SizedHostComponent {
  readonly rail = signal<number | undefined>(72);
  readonly header = signal<number | undefined>(undefined);
}

function setup() {
  const fixture = TestBed.createComponent(HostComponent);
  fixture.detectChanges();
  return fixture.nativeElement as HTMLElement;
}

describe("Sh3AppShellComponent", () => {
  it("renders the four structural cells", () => {
    const host = setup();
    for (const cell of [
      "rail-primary",
      "rail-secondary",
      "header",
      "content",
    ]) {
      expect(host.querySelector(`.${cell}`)).not.toBeNull();
    }
  });

  it("projects each element into its slot", () => {
    const host = setup();
    expect(host.querySelector(".rail-primary [data-t='rp']")).not.toBeNull();
    expect(host.querySelector(".rail-secondary [data-t='rs']")).not.toBeNull();
    expect(host.querySelector(".header [data-t='hd']")).not.toBeNull();
    // Unattributed content falls through to the default (content) slot.
    expect(host.querySelector(".content [data-t='content']")).not.toBeNull();
  });

  it("maps a set sizing input to its CSS variable, leaves an unset one inheritable", () => {
    const fixture = TestBed.createComponent(SizedHostComponent);
    fixture.detectChanges();
    const shell = fixture.nativeElement.querySelector(
      "sh3-app-shell",
    ) as HTMLElement;

    // Set input → the var is written on the host, overriding the stylesheet.
    expect(shell.style.getPropertyValue("--sh3-shell-rail-width")).toBe("72px");
    // Unset input → no inline var, so the stylesheet default keeps winning.
    expect(shell.style.getPropertyValue("--sh3-shell-header-height")).toBe("");
  });

  it("drops the CSS variable again when the input is cleared", () => {
    const fixture = TestBed.createComponent(SizedHostComponent);
    fixture.detectChanges();
    const shell = fixture.nativeElement.querySelector(
      "sh3-app-shell",
    ) as HTMLElement;

    fixture.componentInstance.rail.set(undefined);
    fixture.detectChanges();
    expect(shell.style.getPropertyValue("--sh3-shell-rail-width")).toBe("");
  });
});
