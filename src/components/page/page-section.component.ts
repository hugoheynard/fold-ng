import { booleanAttribute, Component, input } from "@angular/core";

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
 * - `tone` — `transparent` (default, flat on the page) · `raised` (card) ·
 *   `sunken` (deep container). A non-transparent tone adds padding, a hairline
 *   and a radius.
 * - `divider` — when `true` (only meaningful with a tone), the title renders as
 *   a bordered header **bar** with the body padded below it, instead of the
 *   title sitting inline above the body.
 * - `stack` — lay the body out as an evenly-spaced vertical stack (form fields).
 *
 * ```html
 * <sh3-page-section title="Moyens de paiement" description="Le moyen par défaut…">
 *   <button sectionActions>Ajouter</button>
 *   …
 * </sh3-page-section>
 *
 * <sh3-page-section tone="raised" title="Informations générales">…form…</sh3-page-section>
 * <sh3-page-section tone="sunken" divider title="Documents">
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
  host: {
    "[class.t-raised]": "tone() === 'raised'",
    "[class.t-sunken]": "tone() === 'sunken'",
    "[class.divider]": "divider()",
    "[class.stack]": "stack()",
  },
  template: `@if (title() || description()) {
      <div class="section-head">
        <div class="section-text">
          @if (title()) {
            <h2 class="section-title">{{ title() }}</h2>
          }
          @if (description()) {
            <p class="section-desc">{{ description() }}</p>
          }
        </div>
        <div class="section-actions">
          <ng-content select="[sectionActions]" />
        </div>
      </div>
    }
    <div class="section-body"><ng-content /></div>`,
  styles: `
    :host {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    .section-head {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 12px;
    }
    .section-text {
      display: flex;
      flex-direction: column;
      gap: 6px;
      min-width: 0;
    }
    .section-title {
      margin: 0;
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--sh3-color-text-muted);
    }
    .section-desc {
      margin: 0;
      font-size: var(--sh3-text-sm);
      line-height: 1.5;
      max-width: 62ch;
      color: var(--sh3-color-text-secondary);
    }
    .section-actions {
      flex: none;
      display: inline-flex;
      align-items: center;
      gap: 8px;
    }
    .section-actions:empty {
      display: none;
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

    /* ── Tone: a raised or sunken card wrapping the section (transparent = none) ── */
    :host(.t-raised),
    :host(.t-sunken) {
      padding: 20px;
      border: 1px solid var(--sh3-color-border);
      border-radius: var(--sh3-radius-lg);
    }
    :host(.t-raised) {
      background: var(--sh3-color-surface-card);
    }
    :host(.t-sunken) {
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
      align-items: center;
      padding: 14px 20px;
      border-bottom: 1px solid var(--sh3-color-border-subtle);
    }
    /* The header-bar title reads a touch larger + brighter than the inline one. */
    :host(.divider) .section-title {
      font-size: 11px;
      color: var(--sh3-color-text-secondary);
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
  /** Elevation tone — `transparent` (flat, default), `raised` (card), `sunken` (deep). */
  readonly tone = input<"transparent" | "raised" | "sunken">("transparent");
  /** With a surface, render the title as a bordered header bar above a padded body. */
  readonly divider = input(false, { transform: booleanAttribute });
  /** Lay the body out as an evenly-spaced vertical stack of form fields. */
  readonly stack = input(false, { transform: booleanAttribute });
}
