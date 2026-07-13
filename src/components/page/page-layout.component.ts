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
  template: `@if (title() || description()) {
      <header class="page-head">
        <div class="page-head-text">
          @if (title()) {
            <h1 class="page-title">{{ title() }}</h1>
          }
          @if (description()) {
            <p class="page-desc">{{ description() }}</p>
          }
        </div>
        <div class="page-actions"><ng-content select="[pageActions]" /></div>
      </header>
    }
    <div class="page-body"><ng-content /></div>`,
  styles: `
    :host {
      display: flex;
      flex-direction: column;
      gap: 32px;
      max-width: 780px;
    }
    /* Widen for two-column pages (e.g. a form + a context aside). */
    :host(.is-wide) {
      max-width: 940px;
    }
    .page-head {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 16px;
    }
    .page-head-text {
      display: flex;
      flex-direction: column;
      gap: 5px;
      min-width: 0;
    }
    .page-title {
      margin: 0;
      font-size: var(--sh3-text-xl);
      font-weight: 700;
      letter-spacing: -0.02em;
      line-height: 1.2;
      color: var(--sh3-color-text);
    }
    .page-desc {
      margin: 0;
      font-size: var(--sh3-text-sm);
      line-height: 1.5;
      max-width: 60ch;
      color: var(--sh3-color-text-muted);
    }
    .page-actions {
      flex: none;
      display: inline-flex;
      align-items: center;
      gap: 8px;
    }
    /* Nothing projected → no empty slot pushing the layout. */
    .page-actions:empty {
      display: none;
    }
    .page-body {
      display: flex;
      flex-direction: column;
      gap: 32px;
    }
  `,
})
export class Sh3PageLayoutComponent {
  /** The page heading. Omit for a header-less page. */
  readonly title = input<string>();
  /** A one-line description under the title. */
  readonly description = input<string>();
  /** Widen the column to 940px (two-column pages). */
  readonly wide = input(false);
}
