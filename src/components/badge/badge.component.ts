import { Component, input } from "@angular/core";

/**
 * Badge / tag for labels, statuses, and categories.
 *
 * @selector `sh3-badge`
 *
 * @example
 * ```html
 * <sh3-badge content="In repertoire" />
 * <sh3-badge content="Jazz" radius="square" variant="info" />
 * <sh3-badge content="Pending" variant="warning" />
 * ```
 */
@Component({
  selector: "sh3-badge",
  standalone: true,
  template: `{{ content() }}`,
  // Inline so the component is fully self-contained — no external asset to
  // resolve or ship. Colours/sizes come entirely from @sh3pherd/ui tokens.
  styles: `
    :host {
      display: inline-flex;
      align-items: center;
      user-select: none;
      font-size: var(--sh3-text-xs);
      font-weight: 500;
      white-space: nowrap;
      padding: 1px 7px;
    }
    :host(.pill) {
      border-radius: var(--sh3-radius-pill);
    }
    :host(.square) {
      border-radius: var(--sh3-radius-sm);
    }
    :host(.accent) {
      background: var(--sh3-color-primary-surface);
      border: 1px solid var(--sh3-color-primary-border);
      color: var(--sh3-color-primary-text);
    }
    :host(.info) {
      background: var(--sh3-color-info-surface);
      border: 1px solid var(--sh3-color-info-border);
      color: var(--sh3-color-info-text);
    }
    :host(.warning) {
      background: var(--sh3-color-warning-surface);
      border: 1px solid var(--sh3-color-warning-border);
      color: var(--sh3-color-warning-text);
    }
    :host(.alert) {
      background: var(--sh3-color-alert-surface);
      border: 1px solid var(--sh3-color-alert-border);
      color: var(--sh3-color-alert-text);
    }
  `,
  host: {
    "[class]": 'variant() + " " + radius()',
  },
})
export class BadgeComponent {
  /** Text displayed inside the badge. */
  readonly content = input.required<string>();

  /**
   * Border-radius preset.
   * - `pill` — fully rounded (default)
   * - `square` — small radius (like genre tags)
   */
  readonly radius = input<"pill" | "square">("pill");

  /**
   * Semantic colour variant, mapped to design tokens.
   * - `accent` (default) — teal, general purpose
   * - `info` — purple, informative / categorical
   * - `warning` — amber, attention needed
   * - `alert` — red, critical / error
   */
  readonly variant = input<"accent" | "info" | "warning" | "alert">("accent");
}
