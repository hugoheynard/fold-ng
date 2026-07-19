import { booleanAttribute, Component, input } from "@angular/core";
import { Sh3IconComponent } from "../icon/icon.component";
import type { Sh3IconName } from "../icon/icon.registry";

/**
 * `<sh3-page-layout>` — the vertical scaffold for a settings/admin-style page:
 * an optional `icon` + `title` + `description` header, an optional top-right
 * actions slot, and a body that stacks its children with a consistent rhythm.
 * Pair it with {@link Sh3PageSectionComponent} for grouped sub-sections.
 *
 * Content projection:
 * - default slot → the page body (sections, cards, banners…).
 * - `[titleBadge]` → an inline pill beside the title (e.g. a status/kind badge).
 * - `[pageActions]` → the top-right header slot (e.g. an export button).
 *
 * ```html
 * <sh3-page-layout icon="grid" title="Facturation" description="Abonnement…">
 *   <button pageActions>Exporter</button>
 *   <sh3-page-section title="Moyens de paiement">…</sh3-page-section>
 * </sh3-page-layout>
 * ```
 *
 * @selector `sh3-page-layout`
 */
@Component({
  selector: "sh3-page-layout",
  standalone: true,
  imports: [Sh3IconComponent],
  host: {
    "[class.is-wide]": "wide()",
    "[class.is-fluid]": "fluid()",
  },
  templateUrl: "./page-layout.component.html",
  styleUrl: "./page-layout.component.scss",
})
export class Sh3PageLayoutComponent {
  /** The page heading. Omit for a header-less page. */
  readonly title = input<string>();
  /** An optional leading icon shown beside the title. */
  readonly icon = input<Sh3IconName>();
  /** A one-line description under the title. */
  readonly description = input<string>();
  /** Widen the column to 940px (two-column pages). */
  readonly wide = input(false);
  /** Drop the max-width cap entirely — the page fills its container. */
  readonly fluid = input(false, { transform: booleanAttribute });
}
