import { booleanAttribute, Component, input } from "@angular/core";
import { Sh3ElementTitleComponent } from "../element-title/element-title.component";

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
  },
  template: `@if (title() || description()) {
      <div class="section-head">
        @if (title(); as t) {
          <sh3-element-title
            [variant]="divider() ? 'bar' : 'eyebrow'"
            [title]="t"
          >
            <ng-content select="[sectionActions]" titleAction />
          </sh3-element-title>
        }
        @if (description()) {
          <p class="section-desc">{{ description() }}</p>
        }
      </div>
    }
    <div class="section-body"><ng-content /></div>`,
  styles: `
    :host {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    /* Column: the title row (sh3-element-title owns title + action) then the
       optional description below it. */
    .section-head {
      display: flex;
      flex-direction: column;
      gap: 6px;
      min-width: 0;
    }
    .section-desc {
      margin: 0;
      font-size: var(--sh3-text-sm);
      line-height: 1.5;
      max-width: 62ch;
      color: var(--sh3-color-text-secondary);
    }
    .section-body {
      min-width: 0;
    }
    /* Stack: body is a vertical flow of form fields with even spacing. */
    :host(.stack) .section-body {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    /* ── Surface: a card (raised) or sunken box wrapping the section. The radius
       is what makes it read as a card — a transparent section has none. ── */
    :host(.s-card),
    :host(.s-sunken) {
      padding: 20px;
      border: 1px solid var(--sh3-color-border);
      border-radius: var(--sh3-radius-lg);
    }
    :host(.s-card) {
      background: var(--sh3-color-surface-card);
    }
    :host(.s-sunken) {
      background: var(--sh3-color-surface-sunken);
      border-color: var(--sh3-color-border-subtle);
    }

    /* ── Divider: title becomes a bordered header bar, body padded below.
       Comes after the surface rules (equal specificity) so it wins. ── */
    :host(.divider) {
      gap: 0;
      padding: 0;
      overflow: hidden;
    }
    :host(.divider) .section-head {
      padding: 14px 20px;
      border-bottom: 1px solid var(--sh3-color-border-subtle);
    }
    :host(.divider) .section-body {
      padding: 8px 20px 14px;
    }
    @media (max-width: 700px) {
      :host(.divider) .section-head {
        padding: 12px 15px;
      }
      :host(.divider) .section-body {
        padding: 6px 15px 12px;
      }
    }
  `,
})
export class Sh3PageSectionComponent {
  /** The section heading (rendered small + uppercase). */
  readonly title = input<string>();
  /** A one-line description under the title. */
  readonly description = input<string>();
  /** Base surface — `transparent` (flat, default), `card` (raised + radius), `sunken` (deep + radius). */
  readonly surface = input<"transparent" | "card" | "sunken">("transparent");
  /** With a surface, render the title as a bordered header bar above a padded body. */
  readonly divider = input(false, { transform: booleanAttribute });
  /** Lay the body out as an evenly-spaced vertical stack of form fields. */
  readonly stack = input(false, { transform: booleanAttribute });
}
