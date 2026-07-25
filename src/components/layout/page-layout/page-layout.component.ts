import { Component, contentChild, Directive, input } from "@angular/core";
import { FoldIconComponent } from "../../foundations/icon/icon.component";
import type { FoldIconName } from "../../foundations/icon/builtin-icons";

/**
 * Marks a custom page title projected into {@link FoldPageLayoutComponent} — put
 * it on inline heading content when the plain `icon` + `title` inputs aren't
 * enough (an avatar, a two-tone title, a live status). It renders inside the
 * page's `<h1>`, so keep it inline and text-like. Its presence switches the
 * header on in place of the input-driven title.
 *
 * @example
 * ```html
 * <fold-page-layout>
 *   <span pageTitle><fold-avatar … /> Acme Records</span>
 * </fold-page-layout>
 * ```
 */
@Directive({ selector: "[pageTitle]", standalone: true })
export class FoldPageTitleDirective {}

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
 * - `[pageTitle]` ({@link FoldPageTitleDirective}) → a custom title, rendered
 *   inside the `<h1>` in place of the `icon` + `title` inputs, for when a plain
 *   string won't do (an avatar, a two-tone title). Its presence alone switches
 *   the header on.
 * - `[titleBadge]` → an inline pill beside the title (e.g. a status/kind badge).
 * - `p[description]` → the intro under the title. A **slot**, not a string
 *   input: a description that needs a `<code>`, a link or a second sentence is
 *   the common case, not the exception. It must be a `<p description>` — the
 *   selector is tag-qualified on purpose, so a body child that carries its own
 *   `description` input (e.g. `<fold-page-section description="…">`) is not
 *   swallowed into the header. The layout styles what you project (muted, small,
 *   full column width) so the markup stays yours. Project nothing and the header
 *   is just the title. Cap the line with `--fold-page-desc-measure` on a fluid page.
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
  /** The page heading (`<h1>`). Omit for a header-less page — or when the page
   *  already carries its `<h1>` elsewhere (e.g. a leading `fold-hero-section`),
   *  so a page never ends up with two top-level headings. */
  readonly title = input<string>();
  /** An optional leading icon shown beside the title. */
  readonly icon = input<FoldIconName>();

  /** A projected `[pageTitle]`, if any — switches the header on for a custom
   *  title even without the `title` input. */
  protected readonly customTitle = contentChild(FoldPageTitleDirective);
}
