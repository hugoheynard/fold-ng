import { Component } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import { AppShellComponent } from "./app-shell.component";

@Component({
  standalone: true,
  imports: [AppShellComponent],
  template: `<sh3-app-shell>
    <nav railPrimary data-t="rp">rail one</nav>
    <nav railSecondary data-t="rs">rail two</nav>
    <div header data-t="hd">header</div>
    <main data-t="content">page</main>
  </sh3-app-shell>`,
})
class HostComponent {}

function setup() {
  const fixture = TestBed.createComponent(HostComponent);
  fixture.detectChanges();
  return fixture.nativeElement as HTMLElement;
}

describe("AppShellComponent", () => {
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
});
