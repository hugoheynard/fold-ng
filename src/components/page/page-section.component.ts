import { booleanAttribute, Component, input } from "@angular/core";
import { Sh3ElementTitleComponent } from "../element-title/element-title.component";
import type { Sh3IconName } from "../icon/icon.registry";

/**
 * `<sh3-page-section>` — a titled sub-section inside a {@link Sh3PageLayoutComponent}:
 * an optional uppercase `title` + `description`, an optional right-aligned
 * actions slot, and the section content below.
 *
 * Content projection:
 * - default slot → the section content.
 * - `[sectionActions]` → the right-aligned header slot.
 *
 * Orthogonal appearance knobs compose the look:
 * - `surface` — `transparent` (default, flat on the page) · `card` (raised) ·
 *   `sunken` (deep container). A non-transparent surface adds padding, a
 *   hairline and a radius — the radius is what makes it read as a card. Same
 *   vocabulary as {@link Sh3CardComponent} / {@link Sh3HeroComponent}.
 * - `divider` — when `true` (only meaningful with a surface), the title renders
 *   as a bordered header **bar** with the body padded below it, instead of the
 *   title sitting inline above the body.
 * - `stack` — lay the body out as an evenly-spaced vertical stack (form fields).
 * - `bleed` — break the section out of the page gutter to span the layout
 *   edge-to-edge (a full-width band amid padded sections). It cancels exactly
 *   `--sh3-page-gutter` — the same token {@link Sh3PageLayoutComponent} pads
 *   with — so it stays flush at every breakpoint and never overflows. Only
 *   meaningful inside an `sh3-page-layout`.
 *
 * ```html
 * <sh3-page-section title="Moyens de paiement" description="Le moyen par défaut…">
 *   <button sectionActions>Ajouter</button>
 *   …
 * </sh3-page-section>
 *
 * <sh3-page-section surface="card" title="Informations générales">…form…</sh3-page-section>
 * <sh3-page-section surface="sunken" divider title="Documents">
 *   <button sectionActions>Ajouter</button>
 *   …dense panel…
 * </sh3-page-section>
 * ```
 *
 * @selector `sh3-page-section`
 */
@Component({
  selector: "sh3-page-section",
  standalone: true,
  imports: [Sh3ElementTitleComponent],
  host: {
    "[class.s-card]": "surface() === 'card'",
    "[class.s-sunken]": "surface() === 'sunken'",
    "[class.divider]": "divider()",
    "[class.stack]": "stack()",
    "[class.is-bleed]": "bleed()",
  },
  templateUrl: "./page-section.component.html",
  styleUrl: "./page-section.component.scss",
})
export class Sh3PageSectionComponent {
  /** The section heading (rendered small + uppercase). */
  readonly title = input<string>();
  /** An optional leading icon beside the title. */
  readonly icon = input<Sh3IconName>();
  /** A one-line description under the title. */
  readonly description = input<string>();
  /** Base surface — `transparent` (flat, default), `card` (raised + radius), `sunken` (deep + radius). */
  readonly surface = input<"transparent" | "card" | "sunken">("transparent");
  /** With a surface, render the title as a bordered header bar above a padded body. */
  readonly divider = input(false, { transform: booleanAttribute });
  /** Lay the body out as an evenly-spaced vertical stack of form fields. */
  readonly stack = input(false, { transform: booleanAttribute });
  /** Break out of the page gutter to span the layout edge-to-edge — cancels
   *  `--sh3-page-gutter` exactly, so it stays flush at every breakpoint. Only
   *  meaningful inside an `sh3-page-layout`. */
  readonly bleed = input(false, { transform: booleanAttribute });
}
