import {
  booleanAttribute,
  Component,
  inject,
  input,
  model,
} from "@angular/core";
import {
  FoldIconComponent,
  type FoldIconTone,
} from "../../foundations/icon/icon.component";
import type { FoldIconName } from "../../foundations/icon/builtin-icons";
import { FoldIdService } from "../../../a11y/id.service";

/** The register a {@link FoldPageSectionComponent} title wears. A skin over the
 *  same `h2`, never a change of heading semantics. */
export type FoldSectionTitleVariant = "eyebrow" | "heading";

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
 * The section's vertical rhythm — the head↔body gap, and the `stack` body's
 * item gap — is a single token, `--fold-page-section-gap` (default the `lg`
 * space); retune it per section or theme.
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
    "[attr.data-title-variant]": "titleVariant()",
    "[attr.data-separator]": "separator() ? '' : null",
    "[attr.data-collapsible]": "collapsible() ? '' : null",
    "[attr.data-open]": "collapsible() && !open() ? null : ''",
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
  /**
   * Which register the title wears — a **skin**, never a change of semantics.
   * The heading is the same `h2` either way, with the same `aria-level` and the
   * same region name; only its face changes.
   *
   * - `eyebrow` (default) — the micro-label register: 2xs, bold, uppercase,
   *   tracked, in `--fold-font-label`, exactly what a data-table column head and
   *   a `fold-element-title` eyebrow already wear. A section title is a **label
   *   for the block below it**, and at page scale a stack of base-size headings
   *   competes with the very content it is supposed to label.
   * - `heading` — a plain base-size title, for a page where a section really is
   *   a chapter and its title should read as prose.
   */
  readonly titleVariant = input<FoldSectionTitleVariant>("eyebrow");
  /**
   * Close the section head on a hairline — the same gesture as
   * `fold-page-layout`'s `separator`, for the same reason: when the body runs
   * flush against the head, the head reads as its first row.
   */
  readonly separator = input(false, { transform: booleanAttribute });

  /**
   * Let the reader fold the section's **body** away.
   *
   * What collapses is the body, and nothing else: the title, its subtitle, its
   * description and its `[sectionActions]` stay in place. That line is the whole
   * difference between folding and hiding — a tab hid the section's STATE along
   * with its fields, so you could not tell what was missing without opening
   * every one. Folded here, the section still says what it is and what it is
   * doing; you just stop looking at its inputs.
   *
   * Consequences of that rule, both deliberate: the actions remain clickable
   * while folded (a section can be saved without unfolding it), and the toggle
   * is the TITLE, not the whole header — a button around the header would have
   * swallowed those actions into itself.
   */
  readonly collapsible = input(false, { transform: booleanAttribute });

  /**
   * Whether the body is showing. Two-way, and **open by default**: a section
   * that starts folded is a section someone has to discover.
   */
  readonly open = model(true);

  protected toggle(): void {
    this.open.update((value) => !value);
  }
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

  /** Body id, so the title button can point `aria-controls` at it. Derived from
   *  the heading's so the two always name the same section. */
  protected readonly bodyId = `${this.headingId}-body`;
}
