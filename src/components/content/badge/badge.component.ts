import { Component, input } from "@angular/core";

/**
 * Semantic colour variants for {@link FoldBadgeComponent}, mapped to design
 * tokens. Shared so other components (e.g. `fold-menu-item`'s badge) can tint a
 * badge from the same vocabulary.
 * - `accent` — teal, general purpose
 * - `info` — purple, informative / categorical
 * - `warning` — amber, attention needed
 * - `alert` — red, critical / error
 * - `success` — green, positive / complete
 */
export type FoldBadgeVariant =
  "neutral" | "accent" | "info" | "warning" | "alert" | "success";

/**
 * Badge / tag for labels, statuses, and categories.
 *
 * @selector `fold-badge`
 *
 * @example
 * ```html
 * <fold-badge content="In repertoire" />
 * <fold-badge content="Jazz" radius="square" variant="info" />
 * <fold-badge content="Pending" variant="warning" />
 * ```
 */
@Component({
  selector: "fold-badge",
  standalone: true,
  templateUrl: "./badge.component.html",
  // Inline so the component is fully self-contained — no external asset to
  // resolve or ship. Colours/sizes come entirely from fold-ng tokens.
  styleUrl: "./badge.component.scss",
  host: {
    "[class]": 'variant() + " " + radius()',
  },
})
export class FoldBadgeComponent {
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
   * - `neutral` — dim + unsaturated, for counts and non-semantic tags
   * - `accent` (default) — teal, general purpose
   * - `info` — purple, informative / categorical
   * - `warning` — amber, attention needed
   * - `alert` — red, critical / error
   * - `success` — green, positive / complete
   */
  readonly variant = input<FoldBadgeVariant>("accent");
}
