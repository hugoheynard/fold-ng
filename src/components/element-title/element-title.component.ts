import { Component, input } from "@angular/core";

/**
 * `<sh3-element-title>` — the small uppercase label that heads a section, card
 * or panel. One primitive with two emphases, so the "uppercase 700 mini-title"
 * is never hand-rolled per feature.
 *
 * - `eyebrow` (default) — 10px, muted. The quiet inline section/card label.
 * - `bar` — 11px, secondary. Larger + brighter, for a divider header bar.
 *
 * Optional trailing action (an edit/add button, a lock badge) projects into the
 * `[titleAction]` slot, right-aligned. The label — not the action — is the
 * heading for assistive tech (`role="heading"`); set `level` for outline depth.
 *
 * @selector `sh3-element-title`
 *
 * @example
 * ```html
 * <sh3-element-title>Contexte</sh3-element-title>
 * <sh3-element-title variant="bar">Documents</sh3-element-title>
 * <sh3-element-title>
 *   Poste
 *   <button titleAction (click)="edit()">✎</button>
 * </sh3-element-title>
 * ```
 */
@Component({
  selector: "sh3-element-title",
  standalone: true,
  host: { "[class.v-bar]": "variant() === 'bar'" },
  template: `<span class="et-label" role="heading" [attr.aria-level]="level()"
      ><ng-content
    /></span>
    <span class="et-action"><ng-content select="[titleAction]" /></span>`,
  styles: `
    :host {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      margin: 0;
    }
    .et-label {
      min-width: 0;
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--sh3-color-text-muted);
    }
    :host(.v-bar) .et-label {
      font-size: 11px;
      color: var(--sh3-color-text-secondary);
    }
    .et-action {
      flex: none;
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }
    .et-action:empty {
      display: none;
    }
  `,
})
export class Sh3ElementTitleComponent {
  /** Emphasis — `eyebrow` (10px muted, default) or `bar` (11px secondary). */
  readonly variant = input<"eyebrow" | "bar">("eyebrow");
  /** Heading outline depth exposed to assistive tech (`aria-level`). */
  readonly level = input(2);
}
