import { Component } from "@angular/core";
import { KindBadgeComponent } from "../../components/kind-badge.component";
import { ComposedOfComponent } from "../../components/composed-of.component";
import {
  FoldBreadcrumbComponent,
  FoldPageLayoutComponent,
  FoldPageSectionComponent,
  type FoldBreadcrumbItem,
} from "../../../src/public-api";

/** `/breadcrumb` — the `fold-breadcrumb` hierarchical trail (routerLink or href). */
@Component({
  selector: "gal-breadcrumb-page",
  standalone: true,
  imports: [
    KindBadgeComponent,
    ComposedOfComponent,
    FoldBreadcrumbComponent,
    FoldPageLayoutComponent,
    FoldPageSectionComponent,
  ],
  templateUrl: "./breadcrumb.page.html",
  styleUrl: "./breadcrumb.page.scss",
})
export default class BreadcrumbPage {
  /** routerLink crumbs → real gallery routes; the last is the current page. */
  protected readonly routed: readonly FoldBreadcrumbItem[] = [
    { label: "Home", routerLink: "/home" },
    { label: "Navigation", routerLink: "/menu" },
    { label: "Breadcrumb" },
  ];
  /** href crumbs → works without the router (external / non-router apps). */
  protected readonly linked: readonly FoldBreadcrumbItem[] = [
    { label: "example.com", href: "https://example.com" },
    { label: "Docs", href: "https://example.com/docs" },
    { label: "Breadcrumb" },
  ];

  protected readonly code = `<fold-breadcrumb
  [items]="[
    { label: 'Accueil', routerLink: '/' },
    { label: 'Catalogue', routerLink: '/catalogue' },
    { label: 'Café d’Isère' },        // last = current page (no link)
  ]"
/>

<!-- href crumbs work without the router (external / non-router apps) -->
<fold-breadcrumb [items]="[{ label: 'Docs', href: '/docs' }, { label: 'Here' }]" />`;
}
