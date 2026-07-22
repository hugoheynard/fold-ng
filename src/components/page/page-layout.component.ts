import { booleanAttribute, Component, input } from "@angular/core";
import { Sh3IconComponent } from "../icon/icon.component";
import type { Sh3IconName } from "../icon/icon.registry";

/**
 * `<sh3-page-layout>` — the vertical scaffold for a settings/admin-style page:
 * an optional `icon` + `title` header with a description slot, an optional
 * top-right actions slot, and a body that stacks its children with a consistent
 * rhythm. Pair it with {@link Sh3PageSectionComponent} for grouped sub-sections.
 *
 * **It owns the page gutter.** The `sh3-app-shell` content region is full-bleed
 * (so a page can paint edge-to-edge); this component supplies the themed margins
 * via its own padding. Wrap a page's content in `sh3-page-layout` to get them,
 * or leave the shell content bare for a full-width surface. The *horizontal*
 * gutter is a single token, `--sh3-page-gutter` (default `32px`) — retune it per
 * page/theme, or set it to `0` for a bleeding dashboard. A
 * {@link Sh3PageSectionComponent} with `bleed` cancels exactly that token to
 * span the page edge-to-edge (a full-width band amid padded content), so the two
 * never desync — including on a responsive gutter.
 *
 * Content projection:
 * - default slot → the page body (sections, cards, banners…).
 * - `[titleBadge]` → an inline pill beside the title (e.g. a status/kind badge).
 * - `[description]` → the intro under the title. A **slot**, not a string
 *   input: a description that needs a `<code>`, a link or a second sentence is
 *   the common case, not the exception. The layout styles what you project
 *   (muted, small, full column width) so the markup stays yours. Project
 *   nothing and the header is just the title — put your own intro block in the
 *   body. Cap the line with `--sh3-page-desc-measure` on a fluid page.
 * - `[pageActions]` → the top-right header slot (e.g. an export button).
 *
 * ```html
 * <sh3-page-layout icon="grid" title="Facturation">
 *   <p description>Abonnement de l'entreprise et gestion des paiements.</p>
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
  /** Widen the column to 940px (two-column pages). */
  readonly wide = input(false);
  /** Drop the max-width cap entirely — the page fills its container. */
  readonly fluid = input(false, { transform: booleanAttribute });
}
