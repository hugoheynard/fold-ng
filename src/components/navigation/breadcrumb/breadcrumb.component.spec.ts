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

  it('names ancestors only on [currentPage]="false" — no aria-current at all', () => {
    // The shape a trail takes above an <h1>: the last crumb is the FAMILY, not
    // the page, so it must keep linking and must not claim to be current.
    @Component({
      standalone: true,
      imports: [FoldBreadcrumbComponent],
      template: `<fold-breadcrumb [items]="items" [currentPage]="false" />`,
    })
    class TrailHost {
      readonly items: readonly FoldBreadcrumbItem[] = [
        { label: "Produits", routerLink: "/produits" },
        { label: "Tartes", routerLink: "/produits/tartes" },
      ];
    }

    const fixture = TestBed.createComponent(TrailHost);
    fixture.detectChanges();
    const host = fixture.nativeElement as HTMLElement;
    expect(host.querySelector(".bc-current")).toBeNull();
    expect(host.querySelector("[aria-current]")).toBeNull();
    // …and the trailing crumb is still a link, since it carries a target.
    const links = [...host.querySelectorAll<HTMLAnchorElement>("a.bc-link")];
    expect(links.length).toBe(2);
    expect(links[1]?.getAttribute("href")).toBe("/produits/tartes");
  });

  it('renders a target-less trailing crumb as plain text on [currentPage]="false"', () => {
    // A family with no page of its own: a step, not a link, and still not
    // "current" — the fallback must not quietly re-enter the current-page branch.
    @Component({
      standalone: true,
      imports: [FoldBreadcrumbComponent],
      template: `<fold-breadcrumb [items]="items" [currentPage]="false" />`,
    })
    class DeadEndHost {
      readonly items: readonly FoldBreadcrumbItem[] = [
        { label: "Produits", routerLink: "/produits" },
        { label: "Tartes" },
      ];
    }

    const fixture = TestBed.createComponent(DeadEndHost);
    fixture.detectChanges();
    const host = fixture.nativeElement as HTMLElement;
    const nodes = [...host.querySelectorAll<HTMLElement>(".bc-node")];
    expect(nodes.length).toBe(2);
    expect(nodes[1]?.tagName).toBe("SPAN");
    expect(nodes[1]?.classList.contains("bc-current")).toBe(false);
    expect(nodes[1]?.hasAttribute("aria-current")).toBe(false);
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
