import { booleanAttribute, Component, input, output } from "@angular/core";
import { NgTemplateOutlet } from "@angular/common";
import { Sh3IconComponent } from "../icon/icon.component";
import type { Sh3IconName } from "../icon/icon.registry";

/**
 * `<sh3-link>` — an inline text link / link-button: accent-coloured, underline
 * on hover, with optional leading + trailing icons (a nav chevron, an external
 * glyph). Renders an `<a>` when given `href`, otherwise a `<button>` that emits
 * `(clicked)` — so the same look serves both navigation and in-app actions.
 *
 * - `tone` — `accent` (default, brand link) · `muted` (secondary).
 * - `icon` / `trailingIcon` — optional glyphs around the label.
 * - `disabled` — button mode only.
 *
 * @selector `sh3-link`
 *
 * @example
 * ```html
 * <sh3-link icon="company" trailingIcon="chevron-right" (clicked)="openOrg()">
 *   Voir l'organigramme
 * </sh3-link>
 * <sh3-link href="https://sh3pherd.dev/docs" tone="muted">Documentation</sh3-link>
 * ```
 */
@Component({
  selector: "sh3-link",
  standalone: true,
  imports: [NgTemplateOutlet, Sh3IconComponent],
  host: { "[class.tone-muted]": "tone() === 'muted'" },
  template: `<ng-template #inner>
      @if (icon(); as i) {
        <sh3-icon [name]="i" size="sm" />
      }
      <span class="lnk-label"><ng-content /></span>
      @if (trailingIcon(); as t) {
        <sh3-icon [name]="t" size="sm" />
      }
    </ng-template>
    @if (href(); as h) {
      <a class="lnk" [href]="h">
        <ng-container [ngTemplateOutlet]="inner" />
      </a>
    } @else {
      <button
        type="button"
        class="lnk"
        [disabled]="disabled()"
        (click)="clicked.emit()"
      >
        <ng-container [ngTemplateOutlet]="inner" />
      </button>
    }`,
  styles: `
    :host {
      display: inline-flex;
      min-width: 0;
    }
    .lnk {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      min-width: 0;
      padding: 0;
      border: 0;
      background: none;
      font-family: inherit;
      font-size: var(--sh3-text-xs);
      font-weight: 600;
      color: var(--sh3-color-primary);
      text-decoration: none;
      cursor: pointer;
      transition: color var(--sh3-motion-fast);
    }
    :host(.tone-muted) .lnk {
      color: var(--sh3-color-text-secondary);
    }
    .lnk:hover .lnk-label {
      text-decoration: underline;
    }
    .lnk:disabled {
      color: var(--sh3-color-text-muted);
      cursor: not-allowed;
    }
    .lnk:disabled .lnk-label {
      text-decoration: none;
    }
    .lnk-label {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  `,
})
export class Sh3LinkComponent {
  /** Leading icon glyph. */
  readonly icon = input<Sh3IconName>();
  /** Trailing icon glyph (e.g. a nav chevron). */
  readonly trailingIcon = input<Sh3IconName>();
  /** Colour role — `accent` (default) or `muted`. */
  readonly tone = input<"accent" | "muted">("accent");
  /** When set, the link renders as an `<a href>` instead of a button. */
  readonly href = input<string>();
  /** Disable the button form (no effect on the `href` form). */
  readonly disabled = input(false, { transform: booleanAttribute });
  /** Fires on click in the button form. */
  readonly clicked = output<void>();
}
