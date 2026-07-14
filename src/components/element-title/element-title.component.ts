import { Component, input } from "@angular/core";

/**
 * `<sh3-element-title>` — the small uppercase label that heads a section, card
 * or panel. One primitive with two emphases, so the "uppercase 700 mini-title"
 * is never hand-rolled per feature.
 *
 * - `eyebrow` (default) — 10px, muted. The quiet inline section/card label.
 * - `bar` — 11px, secondary. Larger + brighter, for a divider header bar.
 *
 * Renders as a heading for assistive tech (`role="heading"`); set `level` for
 * the right outline depth (default 2).
 *
 * @selector `sh3-element-title`
 *
 * @example
 * ```html
 * <sh3-element-title>Contexte</sh3-element-title>
 * <sh3-element-title variant="bar">Documents</sh3-element-title>
 * ```
 */
@Component({
  selector: "sh3-element-title",
  standalone: true,
  host: {
    role: "heading",
    "[attr.aria-level]": "level()",
    "[class.v-bar]": "variant() === 'bar'",
  },
  template: `<ng-content />`,
  styles: `
    :host {
      display: block;
      margin: 0;
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--sh3-color-text-muted);
    }
    :host(.v-bar) {
      font-size: 11px;
      color: var(--sh3-color-text-secondary);
    }
  `,
})
export class Sh3ElementTitleComponent {
  /** Emphasis — `eyebrow` (10px muted, default) or `bar` (11px secondary). */
  readonly variant = input<"eyebrow" | "bar">("eyebrow");
  /** Heading outline depth exposed to assistive tech (`aria-level`). */
  readonly level = input(2);
}
