import { booleanAttribute, Component, inject, input } from "@angular/core";
import {
  FoldIconComponent,
  type FoldIconTone,
} from "../../foundations/icon/icon.component";
import type { FoldIconName } from "../../foundations/icon/builtin-icons";
import { FoldIdService } from "../../../a11y/id.service";

/**
 * `<fold-page-section>` — a titled, semantic **`<section>`** grouping of page
 * content inside a {@link FoldPageLayoutComponent}: a `title` + optional
 * `description`, a right-aligned actions slot, and the content below.
 *
 * **It is structure, not a box.** The `title` renders a real **`<h2>`** (a
 * genuine section heading under the page's `<h1>`, not a decorative eyebrow) and
 * the region is a `<section>` named by it (`aria-labelledby`) — so a page reads
 * as an outline to assistive tech. Set `headingLevel` to correct the `aria-level`
 * where a section nests deeper. It paints nothing: transparent, no border, no
 * radius. For a **visual box**, wrap the content in a {@link FoldCardComponent} —
 * the two are orthogonal and compose (a section can hold a card; a card never
 * needs to know about the page).
 *
 * Content projection:
 * - default slot → the section content.
 * - `[sectionActions]` → the right-aligned header slot, beside the `title`.
 * - `[sectionHeader]` → a **bespoke** header, used *instead of* `title` when the
 *   default `<h2>` isn't enough (e.g. project a {@link FoldElementTitleComponent}
 *   with an icon tile + subtitle). The projected header owns its own heading
 *   semantics.
 *
 * Two orthogonal helpers, both independent of the title:
 * - `stack` — lay the body out as an evenly-spaced vertical stack (form fields).
 * - `bleed` — break the section out of the page gutter to span the layout
 *   edge-to-edge (a full-width band amid padded sections). It cancels exactly
 *   `--fold-page-gutter` — the same token {@link FoldPageLayoutComponent} pads
 *   with — so it stays flush at every breakpoint and never overflows. As the
 *   **first** band it also swallows the page's top padding (a hero flush to the
 *   top); as the **last**, the bottom padding (a footer band). A band in the
 *   middle keeps the vertical rhythm. Only meaningful inside an `fold-page-layout`.
 *
 * ```html
 * <fold-page-section title="Moyens de paiement" description="Le moyen par défaut…">
 *   <button sectionActions>Ajouter</button>
 *   …
 * </fold-page-section>
 *
 * <!-- bespoke header instead of the default h2 -->
 * <fold-page-section>
 *   <fold-element-title sectionHeader variant="title" icon="company" title="Contexte" />
 *   …
 * </fold-page-section>
 *
 * <!-- need a box? compose with fold-card -->
 * <fold-page-section title="Documents">
 *   <fold-card surface="sunken">…</fold-card>
 * </fold-page-section>
 * ```
 *
 * @selector `fold-page-section`
 */
@Component({
  selector: "fold-page-section",
  standalone: true,
  imports: [FoldIconComponent],
  host: {
    "[class.stack]": "stack()",
    "[class.is-bleed]": "bleed()",
    // `title` is a heading input — strip the reflected native attribute so it
    // never doubles as a browser tooltip.
    "[attr.title]": "null",
  },
  templateUrl: "./page-section.component.html",
  styleUrl: "./page-section.component.scss",
})
export class FoldPageSectionComponent {
  /** The section heading (rendered small + uppercase; the region's a11y name). */
  readonly title = input<string>();
  /** An optional leading icon beside the title. */
  readonly icon = input<FoldIconName>();
  /** Tint of the leading icon — forwarded to `fold-icon`'s `tone`. Defaults to
   *  `secondary` (a muted ink, a step below the title). */
  readonly iconTone = input<FoldIconTone>("secondary");
  /** A one-line description under the title. */
  readonly description = input<string>();
  /** Heading depth exposed to assistive tech (`aria-level`) — set it so sections
   *  nest correctly under the page's `<h1>` (2 by default). */
  readonly headingLevel = input(2);
  /** Lay the body out as an evenly-spaced vertical stack of form fields. */
  readonly stack = input(false, { transform: booleanAttribute });
  /** Break out of the page gutter to span the layout edge-to-edge — cancels
   *  `--fold-page-gutter` exactly, so it stays flush at every breakpoint. As the
   *  first/last band it also flushes to the page's top/bottom edge. Only
   *  meaningful inside an `fold-page-layout`. */
  readonly bleed = input(false, { transform: booleanAttribute });

  /** SSR-safe id on the heading, so the `<section>` names its region with
   *  `aria-labelledby` (only when there's a title). */
  protected readonly headingId =
    inject(FoldIdService).next("fold-page-section");
}
