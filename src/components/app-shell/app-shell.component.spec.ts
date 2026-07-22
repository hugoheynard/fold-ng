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
    <div data-t="content">page</div>
    <div footer data-t="ft">player</div>
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

@Component({
  standalone: true,
  imports: [Sh3AppShellComponent],
  template: `<sh3-app-shell
    [headerLayout]="layout()"
    [footerLayout]="footer()"
    [appearance]="appearance()"
  />`,
})
class LayoutHostComponent {
  readonly layout = signal<"inset" | "full">("inset");
  readonly footer = signal<"inset" | "full">("inset");
  readonly appearance = signal<"flat" | "floating">("flat");
}

@Component({
  standalone: true,
  imports: [Sh3AppShellComponent],
  template: `<sh3-app-shell [footerBehavior]="behavior()">
    <div data-t="content">page</div>
    <div footer data-t="ft">player</div>
  </sh3-app-shell>`,
})
class FooterBehaviorHostComponent {
  readonly behavior = signal<"pinned" | "scroll">("pinned");
}

function setup() {
  const fixture = TestBed.createComponent(HostComponent);
  fixture.detectChanges();
  return fixture.nativeElement as HTMLElement;
}

describe("Sh3AppShellComponent", () => {
  it("renders the five structural cells", () => {
    const host = setup();
    for (const cell of [
      "rail-primary",
      "rail-secondary",
      "header",
      "content",
      "footer",
    ]) {
      expect(host.querySelector(`.${cell}`)).not.toBeNull();
    }
  });

  it("projects each element into its slot", () => {
    const host = setup();
    expect(host.querySelector(".rail-primary [data-t='rp']")).not.toBeNull();
    expect(host.querySelector(".rail-secondary [data-t='rs']")).not.toBeNull();
    expect(host.querySelector(".header [data-t='hd']")).not.toBeNull();
    expect(host.querySelector(".footer [data-t='ft']")).not.toBeNull();
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

  it("names its regions semantically — <header>, <main> and <footer>", () => {
    const host = setup();
    expect(host.querySelector("header.header")).not.toBeNull();
    expect(host.querySelector("main.content")).not.toBeNull();
    // The footer is the document's contentinfo landmark.
    expect(host.querySelector("footer.footer")).not.toBeNull();
    // One <main> per document: the frame owns it, so nothing projected into it
    // may declare another (nor a nested <header>, which HTML forbids).
    expect(host.querySelectorAll("main").length).toBe(1);
  });

  it("adds no gutter — the content region is full-bleed", () => {
    const host = setup();
    const content = host.querySelector(".content") as HTMLElement;
    // No inline padding var, and the stylesheet no longer pads .content: a page
    // can paint edge-to-edge (padding is sh3-page-layout's job).
    const shell = host.querySelector("sh3-app-shell") as HTMLElement;
    expect(shell.style.getPropertyValue("--sh3-shell-content-padding")).toBe(
      "",
    );
    expect(content).not.toBeNull();
  });

  it("is flat + inset by default (no layout classes)", () => {
    const host = setup();
    const shell = host.querySelector("sh3-app-shell") ?? host;
    expect(shell.classList.contains("header-full")).toBe(false);
    expect(shell.classList.contains("footer-full")).toBe(false);
    expect(shell.classList.contains("floating")).toBe(false);
  });

  it('toggles the header-full class from headerLayout="full"', () => {
    const fixture = TestBed.createComponent(LayoutHostComponent);
    fixture.detectChanges();
    const shell = fixture.nativeElement.querySelector(
      "sh3-app-shell",
    ) as HTMLElement;

    fixture.componentInstance.layout.set("full");
    fixture.detectChanges();
    expect(shell.classList.contains("header-full")).toBe(true);

    fixture.componentInstance.layout.set("inset");
    fixture.detectChanges();
    expect(shell.classList.contains("header-full")).toBe(false);
  });

  it('toggles the footer-full class from footerLayout="full"', () => {
    const fixture = TestBed.createComponent(LayoutHostComponent);
    fixture.detectChanges();
    const shell = fixture.nativeElement.querySelector(
      "sh3-app-shell",
    ) as HTMLElement;

    fixture.componentInstance.footer.set("full");
    fixture.detectChanges();
    expect(shell.classList.contains("footer-full")).toBe(true);

    fixture.componentInstance.footer.set("inset");
    fixture.detectChanges();
    expect(shell.classList.contains("footer-full")).toBe(false);
  });

  it('pins the footer as a grid row by default (footerBehavior="pinned")', () => {
    const fixture = TestBed.createComponent(FooterBehaviorHostComponent);
    fixture.detectChanges();
    const shell = fixture.nativeElement.querySelector(
      "sh3-app-shell",
    ) as HTMLElement;

    expect(shell.classList.contains("footer-scroll")).toBe(false);
    // The footer is a grid row (sibling of .content), not inside the scroll.
    expect(shell.querySelector(".content .footer-inflow")).toBeNull();
    expect(shell.querySelector(".footer [data-t='ft']")).not.toBeNull();
  });

  it('flows the footer inside the content scroll when footerBehavior="scroll"', () => {
    const fixture = TestBed.createComponent(FooterBehaviorHostComponent);
    fixture.componentInstance.behavior.set("scroll");
    fixture.detectChanges();
    const shell = fixture.nativeElement.querySelector(
      "sh3-app-shell",
    ) as HTMLElement;

    expect(shell.classList.contains("footer-scroll")).toBe(true);
    // The footer now flows at the end of the content, not as a grid row.
    expect(
      shell.querySelector(".content .footer-inflow [data-t='ft']"),
    ).not.toBeNull();
    // Toggling back returns it to the pinned grid row.
    fixture.componentInstance.behavior.set("pinned");
    fixture.detectChanges();
    expect(shell.querySelector(".content .footer-inflow")).toBeNull();
    expect(shell.querySelector(".footer [data-t='ft']")).not.toBeNull();
  });

  it('toggles the floating class from appearance="floating"', () => {
    const fixture = TestBed.createComponent(LayoutHostComponent);
    fixture.detectChanges();
    const shell = fixture.nativeElement.querySelector(
      "sh3-app-shell",
    ) as HTMLElement;

    fixture.componentInstance.appearance.set("floating");
    fixture.detectChanges();
    expect(shell.classList.contains("floating")).toBe(true);

    fixture.componentInstance.appearance.set("flat");
    fixture.detectChanges();
    expect(shell.classList.contains("floating")).toBe(false);
  });
});
