import { Component, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { FoldAppShellComponent } from "./app-shell.component";

@Component({
  standalone: true,
  imports: [FoldAppShellComponent],
  template: `<fold-app-shell>
    <nav railPrimary data-t="rp">rail one</nav>
    <nav railSecondary data-t="rs">rail two</nav>
    <div header data-t="hd">header</div>
    <div data-t="content">page</div>
    <div footer data-t="ft">player</div>
  </fold-app-shell>`,
})
class HostComponent {}

@Component({
  standalone: true,
  imports: [FoldAppShellComponent],
  template: `<fold-app-shell [railWidth]="rail()" [headerHeight]="header()" />`,
})
class SizedHostComponent {
  readonly rail = signal<number | undefined>(72);
  readonly header = signal<number | undefined>(undefined);
}

@Component({
  standalone: true,
  imports: [FoldAppShellComponent],
  template: `<fold-app-shell
    [headerLayout]="layout()"
    [footerLayout]="footer()"
  />`,
})
class LayoutHostComponent {
  readonly layout = signal<"inset" | "full">("inset");
  readonly footer = signal<"inset" | "full">("inset");
}

@Component({
  standalone: true,
  imports: [FoldAppShellComponent],
  template: `<fold-app-shell [footerBehavior]="behavior()">
    <div data-t="content">page</div>
    <div footer data-t="ft">player</div>
  </fold-app-shell>`,
})
class FooterBehaviorHostComponent {
  readonly behavior = signal<"pinned" | "scroll">("pinned");
}

function setup() {
  const fixture = TestBed.createComponent(HostComponent);
  fixture.detectChanges();
  return fixture.nativeElement as HTMLElement;
}

describe("FoldAppShellComponent", () => {
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
      "fold-app-shell",
    ) as HTMLElement;

    // Set input → the var is written on the host, overriding the stylesheet.
    expect(shell.style.getPropertyValue("--fold-shell-rail-width")).toBe(
      "72px",
    );
    // Unset input → no inline var, so the stylesheet default keeps winning.
    expect(shell.style.getPropertyValue("--fold-shell-header-height")).toBe("");
  });

  it("drops the CSS variable again when the input is cleared", () => {
    const fixture = TestBed.createComponent(SizedHostComponent);
    fixture.detectChanges();
    const shell = fixture.nativeElement.querySelector(
      "fold-app-shell",
    ) as HTMLElement;

    fixture.componentInstance.rail.set(undefined);
    fixture.detectChanges();
    expect(shell.style.getPropertyValue("--fold-shell-rail-width")).toBe("");
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
    // can paint edge-to-edge (padding is fold-page-layout's job).
    const shell = host.querySelector("fold-app-shell") as HTMLElement;
    expect(shell.style.getPropertyValue("--fold-shell-content-padding")).toBe(
      "",
    );
    expect(content).not.toBeNull();
  });

  it("is inset by default (no layout classes)", () => {
    const host = setup();
    const shell = host.querySelector("fold-app-shell") ?? host;
    expect(shell.classList.contains("header-full")).toBe(false);
    expect(shell.classList.contains("footer-full")).toBe(false);
  });

  it('toggles the header-full class from headerLayout="full"', () => {
    const fixture = TestBed.createComponent(LayoutHostComponent);
    fixture.detectChanges();
    const shell = fixture.nativeElement.querySelector(
      "fold-app-shell",
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
      "fold-app-shell",
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
      "fold-app-shell",
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
      "fold-app-shell",
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

  it("renders a skip-link, first, targeting the focusable <main>", () => {
    const host = setup();
    const skip = host.querySelector("a.skip-link") as HTMLAnchorElement;
    const main = host.querySelector("main.content") as HTMLElement;
    expect(skip).not.toBeNull();
    expect(skip.textContent?.trim()).toBe("Skip to content");
    // <main> is focusable so the jump lands, and the link targets its id.
    expect(main.getAttribute("tabindex")).toBe("-1");
    const id = main.getAttribute("id");
    expect(id).toBeTruthy();
    expect(skip.getAttribute("href")).toBe(`#${id}`);
    // It is the first focusable element in the shell (before the rails).
    expect(host.querySelector("a[href], button, [tabindex]")).toBe(skip);
  });

  it("skip-link moves focus to <main> and prevents the fragment navigation", () => {
    const fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();
    const host = fixture.nativeElement as HTMLElement;
    document.body.appendChild(host);
    try {
      const skip = host.querySelector("a.skip-link") as HTMLAnchorElement;
      const main = host.querySelector("main.content") as HTMLElement;
      const evt = new MouseEvent("click", { cancelable: true, bubbles: true });
      skip.dispatchEvent(evt);
      // No `#id` fragment nav (a hash-routing app would treat it as a route);
      // focus moves straight to <main>.
      expect(evt.defaultPrevented).toBe(true);
      expect(document.activeElement).toBe(main);
    } finally {
      host.remove();
    }
  });

  it('scrolls the content region itself when contentScroll="auto"', () => {
    const fixture = TestBed.createComponent(FoldAppShellComponent);
    fixture.detectChanges();
    const shell = fixture.nativeElement as HTMLElement;
    expect(shell.classList.contains("content-auto")).toBe(false);

    fixture.componentRef.setInput("contentScroll", "auto");
    fixture.detectChanges();
    expect(shell.classList.contains("content-auto")).toBe(true);
  });
});

/** Feeds the shell's ResizeObserver a width so a test can drive the narrow /
 *  wide state that gates the mobile drawer. */
let emitWidth: ((width: number) => void) | undefined;
const realResizeObserver = globalThis.ResizeObserver;

function stubResizeObserver(): void {
  class FakeResizeObserver {
    constructor(callback: ResizeObserverCallback) {
      emitWidth = (width) =>
        callback(
          [{ contentRect: { width } } as ResizeObserverEntry],
          this as unknown as ResizeObserver,
        );
    }
    observe(): void {}
    disconnect(): void {}
    unobserve(): void {}
  }
  globalThis.ResizeObserver =
    FakeResizeObserver as unknown as typeof ResizeObserver;
}

@Component({
  standalone: true,
  imports: [FoldAppShellComponent],
  template: `<fold-app-shell [mobileNav]="mode()" [(mobileNavOpen)]="open">
    <nav railPrimary><button data-t="rail-btn">Home</button></nav>
    <div data-t="content">page</div>
  </fold-app-shell>`,
})
class DrawerHostComponent {
  readonly open = signal(false);
  readonly mode = signal<"drawer" | "none">("drawer");
}

describe("FoldAppShellComponent · mobile drawer", () => {
  beforeEach(() => stubResizeObserver());
  afterEach(() => {
    globalThis.ResizeObserver = realResizeObserver;
    emitWidth = undefined;
  });

  function render() {
    const fixture = TestBed.createComponent(DrawerHostComponent);
    fixture.detectChanges();
    const shell = fixture.nativeElement.querySelector(
      "fold-app-shell",
    ) as HTMLElement;
    return { fixture, shell };
  }

  it("does not open the drawer while the shell is wide (desktop safety)", () => {
    const { fixture, shell } = render();
    emitWidth?.(1200);
    fixture.componentInstance.open.set(true);
    fixture.detectChanges();
    // Open flag set, but a wide shell keeps the rails in view — no drawer.
    expect(shell.classList.contains("mobile-nav-open")).toBe(false);
    expect(shell.querySelector(".mobile-scrim")).toBeNull();
  });

  it("opens the drawer (class + scrim) only when narrow AND open", () => {
    const { fixture, shell } = render();
    emitWidth?.(480);
    fixture.componentInstance.open.set(true);
    fixture.detectChanges();
    expect(shell.classList.contains("mobile-nav-open")).toBe(true);
    expect(shell.querySelector(".mobile-scrim")).not.toBeNull();
  });

  it("is a named modal dialog with an inert background while open", () => {
    const { fixture, shell } = render();
    emitWidth?.(480);
    fixture.componentInstance.open.set(true);
    fixture.detectChanges();

    const rail = shell.querySelector(".rail-primary") as HTMLElement;
    expect(rail.getAttribute("role")).toBe("dialog");
    expect(rail.getAttribute("aria-modal")).toBe("true");
    expect(rail.getAttribute("aria-label")).toBe("Navigation");
    // Every sibling region is inert, so a screen reader can't wander behind it.
    expect((shell.querySelector(".header") as HTMLElement).inert).toBe(true);
    expect((shell.querySelector(".content") as HTMLElement).inert).toBe(true);

    // Closing lifts both the dialog semantics and the inert barrier.
    fixture.componentInstance.open.set(false);
    fixture.detectChanges();
    expect(rail.getAttribute("role")).toBeNull();
    expect(rail.getAttribute("aria-modal")).toBeNull();
    expect((shell.querySelector(".content") as HTMLElement).inert).toBe(false);
  });

  it("closes the drawer when the scrim is clicked", () => {
    const { fixture, shell } = render();
    emitWidth?.(480);
    fixture.componentInstance.open.set(true);
    fixture.detectChanges();

    const scrim = shell.querySelector(".mobile-scrim") as HTMLElement;
    scrim.click();
    fixture.detectChanges();
    expect(fixture.componentInstance.open()).toBe(false);
    expect(shell.classList.contains("mobile-nav-open")).toBe(false);
  });

  it("closes the drawer on Escape", () => {
    const { fixture, shell } = render();
    emitWidth?.(480);
    fixture.componentInstance.open.set(true);
    fixture.detectChanges();

    document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }));
    fixture.detectChanges();
    expect(fixture.componentInstance.open()).toBe(false);
    expect(shell.classList.contains("mobile-nav-open")).toBe(false);
  });

  it('renders no built-in drawer when mobileNav="none" (launcher composed apart)', () => {
    const { fixture, shell } = render();
    fixture.componentInstance.mode.set("none");
    emitWidth?.(480);
    fixture.componentInstance.open.set(true);
    fixture.detectChanges();
    // Narrow + open, but `none` mode defers to an app-composed launcher: no
    // drawer class, no scrim. `mobileNavOpen` stays live for the launcher.
    expect(shell.classList.contains("mobile-nav-open")).toBe(false);
    expect(shell.querySelector(".mobile-scrim")).toBeNull();
  });

  it("resets the open flag when the shell widens past the breakpoint", () => {
    const { fixture } = render();
    emitWidth?.(480);
    fixture.componentInstance.open.set(true);
    fixture.detectChanges();
    expect(fixture.componentInstance.open()).toBe(true);

    // Rotate / widen back to desktop — the stuck drawer must not linger.
    emitWidth?.(1200);
    fixture.detectChanges();
    expect(fixture.componentInstance.open()).toBe(false);
  });
});
