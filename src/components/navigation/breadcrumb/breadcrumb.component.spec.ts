import { Component, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { provideRouter } from "@angular/router";
import { describe, it, expect, beforeEach } from "vitest";
import {
  FoldBreadcrumbComponent,
  type FoldBreadcrumbItem,
} from "./breadcrumb.component";

@Component({
  standalone: true,
  imports: [FoldBreadcrumbComponent],
  template: `<fold-breadcrumb [items]="items()" [ariaLabel]="label()" />`,
})
class HostComponent {
  readonly items = signal<readonly FoldBreadcrumbItem[]>([
    { label: "Accueil", routerLink: "/" },
    { label: "Catalogue", href: "https://example.com/cat" },
    { label: "Café d’Isère" },
  ]);
  readonly label = signal("Breadcrumb");
}

function render() {
  const fixture = TestBed.createComponent(HostComponent);
  fixture.detectChanges();
  const host = fixture.nativeElement as HTMLElement;
  return {
    fixture,
    items: fixture.componentInstance.items,
    label: fixture.componentInstance.label,
    nav: () => host.querySelector<HTMLElement>("fold-breadcrumb")!,
    nodes: () => [...host.querySelectorAll<HTMLElement>(".bc-node")],
    links: () => [...host.querySelectorAll<HTMLAnchorElement>("a.bc-link")],
    seps: () => host.querySelectorAll(".bc-sep"),
    current: () => host.querySelector<HTMLElement>(".bc-current"),
  };
}

describe("FoldBreadcrumbComponent", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [provideRouter([])] });
  });

  it("is a navigation landmark with an accessible name", () => {
    const r = render();
    expect(r.nav().getAttribute("role")).toBe("navigation");
    expect(r.nav().getAttribute("aria-label")).toBe("Breadcrumb");
    r.label.set("Fil d’Ariane");
    r.fixture.detectChanges();
    expect(r.nav().getAttribute("aria-label")).toBe("Fil d’Ariane");
  });

  it("renders one node per item and a separator between each", () => {
    const r = render();
    expect(r.nodes().length).toBe(3);
    expect(r.seps().length).toBe(2); // n-1
  });

  it("renders the last item as the current page (not a link)", () => {
    const r = render();
    const current = r.current()!;
    expect(current.textContent).toContain("Café d’Isère");
    expect(current.getAttribute("aria-current")).toBe("page");
    expect(current.tagName).toBe("SPAN");
  });

  it("links a routerLink crumb and an href crumb, but not the current one", () => {
    const r = render();
    const links = r.links();
    expect(links.length).toBe(2); // Accueil (routerLink) + Catalogue (href)
    // the routerLink crumb resolves to an href on the anchor
    expect(links[0]?.getAttribute("href")).toBe("/");
    expect(links[1]?.getAttribute("href")).toBe("https://example.com/cat");
  });

  it("renders a link-less crumb as plain text (neither routerLink nor href)", () => {
    const r = render();
    r.items.set([{ label: "Step" }, { label: "Now" }]);
    r.fixture.detectChanges();
    // first (non-last, no link) is a plain span, not an anchor
    expect(r.links().length).toBe(0);
    expect(r.nodes()[0]?.tagName).toBe("SPAN");
  });
});
