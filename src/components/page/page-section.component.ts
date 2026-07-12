import { Component, input } from "@angular/core";

/**
 * `<sh3-page-section>` — a titled sub-section inside a {@link PageLayoutComponent}:
 * an optional uppercase `title` + `description`, an optional right-aligned
 * actions slot, and the section content below.
 *
 * Content projection:
 * - default slot → the section content.
 * - `[sectionActions]` → the right-aligned header slot.
 *
 * ```html
 * <sh3-page-section title="Moyens de paiement" description="Le moyen par défaut…">
 *   <button sectionActions>Ajouter</button>
 *   …
 * </sh3-page-section>
 * ```
 *
 * @selector `sh3-page-section`
 */
@Component({
  selector: "sh3-page-section",
  standalone: true,
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
    <ng-content />`,
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
  `,
})
export class PageSectionComponent {
  /** The section heading (rendered small + uppercase). */
  readonly title = input<string>();
  /** A one-line description under the title. */
  readonly description = input<string>();
}
