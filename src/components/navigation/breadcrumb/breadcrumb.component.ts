import { ChangeDetectionStrategy, Component, input } from "@angular/core";
import { RouterLink } from "@angular/router";
import { FoldIconComponent } from "../../foundations/icon/icon.component";

/**
 * One crumb in a {@link FoldBreadcrumbComponent} trail. A crumb links via **either**
 * an Angular `routerLink` (in-app) **or** a plain `href` (external / a non-router
 * app); give neither for a non-interactive step. The **last** item is always
 * rendered as the current page (never a link), whatever it carries.
 */
export interface FoldBreadcrumbItem {
  /** The crumb's visible text. */
  readonly label: string;
  /** Angular router target — a `routerLink` commands string or array. Takes
   *  precedence over {@link href}. */
  readonly routerLink?: string | unknown[];
  /** Plain URL — for an external crumb, or an app that doesn't use the router. */
  readonly href?: string;
}

/**
 * `<fold-breadcrumb>` — a hierarchical trail of links to the current page. Data
 * driven: pass `[items]`; each crumb links by `routerLink` **or** `href`, so it
 * works in a router app and degrades to plain anchors without one (importing it
 * never forces `@angular/router` — `RouterLink` is only instantiated on a crumb
 * that actually sets `routerLink`). The last item renders as the current page
 * (`aria-current="page"`), not a link. Chevron separators are decorative.
 *
 * ```html
 * <fold-breadcrumb
 *   [items]="[
 *     { label: 'Accueil', routerLink: '/' },
 *     { label: 'Catalogue', routerLink: '/catalogue' },
 *     { label: 'Café d’Isère' },
 *   ]"
 * />
 * ```
 *
 * @selector `fold-breadcrumb`
 */
@Component({
  selector: "fold-breadcrumb",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, FoldIconComponent],
  templateUrl: "./breadcrumb.component.html",
  styleUrl: "./breadcrumb.component.scss",
  host: {
    role: "navigation",
    "[attr.aria-label]": "ariaLabel()",
  },
})
export class FoldBreadcrumbComponent {
  /** The trail, root first; the last item is the current page. */
  readonly items = input.required<readonly FoldBreadcrumbItem[]>();
  /** Accessible name of the navigation landmark. @default 'Breadcrumb' */
  readonly ariaLabel = input("Breadcrumb");
}
