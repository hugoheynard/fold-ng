import { Component, input } from "@angular/core";
import { FoldIconComponent } from "../../foundations/icon/icon.component";
import type { FoldIconName } from "../../foundations/icon/builtin-icons";

/**
 * `<fold-page-layout>` — the vertical scaffold for a settings/admin-style page:
 * an optional `icon` + `title` header with a description slot, an optional
 * top-right actions slot, and a body that stacks its children with a consistent
 * rhythm. Pair it with {@link FoldPageSectionComponent} for grouped sub-sections.
 *
 * **It owns the page gutter, not the width.** The `fold-app-shell` content region
 * is full-bleed (so a page can paint edge-to-edge); this component supplies the
 * themed margins via its own padding, and otherwise **fills whatever width it is
 * given**. It does *not* cap the column — narrowing a block to a readable measure
 * is the content's job (wrap that block in your own max-width container), never
 * the page scaffold's. The *horizontal* gutter is a single token,
 * `--fold-page-gutter` (default `32px`) — retune it per page/theme, or set it to
 * `0` for a bleeding dashboard. A {@link FoldPageSectionComponent} with `bleed`
 * cancels exactly that token to span the page edge-to-edge (a full-width band
 * amid padded content), so the two never desync — including on a responsive gutter.
 * The *vertical* rhythm between stacked elements is its own token,
 * `--fold-page-gap` (default `32px`), retunable the same way.
 *
 * Content projection:
 * - default slot → the page body (sections, cards, banners…).
 * - `[titleBadge]` → an inline pill beside the title (e.g. a status/kind badge).
 * - `[description]` → the intro under the title. A **slot**, not a string
 *   input: a description that needs a `<code>`, a link or a second sentence is
 *   the common case, not the exception. The layout styles what you project
 *   (muted, small, full column width) so the markup stays yours. Project
 *   nothing and the header is just the title — put your own intro block in the
 *   body. Cap the line with `--fold-page-desc-measure` on a fluid page.
 * - `[pageActions]` → the top-right header slot (e.g. an export button).
 *
 * ```html
 * <fold-page-layout icon="grid" title="Facturation">
 *   <p description>Abonnement de l'entreprise et gestion des paiements.</p>
 *   <button pageActions>Exporter</button>
 *   <fold-page-section title="Moyens de paiement">…</fold-page-section>
 * </fold-page-layout>
 * ```
 *
 * @selector `fold-page-layout`
 */
@Component({
  selector: "fold-page-layout",
  standalone: true,
  imports: [FoldIconComponent],
  templateUrl: "./page-layout.component.html",
  styleUrl: "./page-layout.component.scss",
})
export class FoldPageLayoutComponent {
  /** The page heading. Omit for a header-less page. */
  readonly title = input<string>();
  /** An optional leading icon shown beside the title. */
  readonly icon = input<FoldIconName>();
}
