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
  templateUrl: "./badge.component.html",
  // Inline so the component is fully self-contained — no external asset to
  // resolve or ship. Colours/sizes come entirely from @sh3pherd/ui tokens.
  styleUrl: "./badge.component.scss",
  host: {
    "[class]": 'variant() + " " + radius()',
  },
})
export class Sh3BadgeComponent {
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
   * - `success` — green, positive / complete
   */
  readonly variant = input<"accent" | "info" | "warning" | "alert" | "success">(
    "accent",
  );
}
