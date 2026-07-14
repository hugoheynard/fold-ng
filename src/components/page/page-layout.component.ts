import { Component, input } from "@angular/core";

/**
 * `<sh3-page-layout>` — the vertical scaffold for a settings/admin-style page:
 * an optional `title` + `description` header, an optional top-right actions
 * slot, and a body that stacks its children with a consistent rhythm. Pair it
 * with {@link Sh3PageSectionComponent} for grouped sub-sections.
 *
 * Content projection:
 * - default slot → the page body (sections, cards, banners…).
 * - `[pageActions]` → the top-right header slot (e.g. an export button).
 *
 * ```html
 * <sh3-page-layout title="Facturation" description="Abonnement…">
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
  host: { "[class.is-wide]": "wide()" },
  templateUrl: "./page-layout.component.html",
  styleUrl: "./page-layout.component.scss",
})
export class Sh3PageLayoutComponent {
  /** The page heading. Omit for a header-less page. */
  readonly title = input<string>();
  /** A one-line description under the title. */
  readonly description = input<string>();
  /** Widen the column to 940px (two-column pages). */
  readonly wide = input(false);
}
