import { Component, input, output } from "@angular/core";
import { FoldBadgeComponent } from "../badge/badge.component";
import { FoldIconComponent } from "../icon/icon.component";
import type { FoldIconName } from "../icon/icon.registry";

export type FoldTabNavItem = {
  /** Unique key — identifies the tab and is emitted on click. */
  key: string;
  /** Display label. */
  label: string;
  /** Optional leading icon, by registry name (rendered as an `fold-icon`). */
  icon?: FoldIconName;
  /** Optional trailing badge (e.g. a count). `undefined`/`null` hides it. */
  badge?: string | number | null;
};

/**
 * `<fold-tab-nav>` — a tab navigation bar (buttons only; the parent renders the
 * content for the active key).
 *
 * - `activeStyle` — `underline` (accent border on the active tab) or `fill`
 *   (accent background pill, good for sidebars).
 * - `direction` — `horizontal` (row, equal-width) or `vertical` (stacked
 *   sidebar; auto-collapses to a horizontal icon-accordion at ≤768px).
 *
 * @selector `fold-tab-nav`
 *
 * @example
 * ```html
 * <fold-tab-nav
 *   [tabs]="[{ key: 'members', label: 'Members', badge: 3 }, { key: 'settings', label: 'Settings' }]"
 *   [activeKey]="tab()"
 *   activeStyle="underline"
 *   direction="horizontal"
 *   (tabChange)="tab.set($event)"
 * />
 * ```
 */
@Component({
  selector: "fold-tab-nav",
  standalone: true,
  imports: [FoldIconComponent, FoldBadgeComponent],
  templateUrl: "./tab-nav.component.html",
  // Inline + token-driven. Neutral 1px lines use --fold-color-border /
  // -surface-raised so they flip correctly in light mode (the app original
  // hard-coded white-alpha, which would vanish on a light background).
  styleUrl: "./tab-nav.component.scss",
})
export class FoldTabNavComponent {
  /** The tabs to render, in order. */
  readonly tabs = input.required<FoldTabNavItem[]>();

  /** The `key` of the currently active tab. */
  readonly activeKey = input.required<string>();

  /** How the active tab reads: accent underline, or accent fill. */
  readonly activeStyle = input<"underline" | "fill">("underline");

  /** Bar orientation (vertical auto-collapses to horizontal on mobile). */
  readonly direction = input<"horizontal" | "vertical">("horizontal");

  /**
   * Density, from tightest to roomiest:
   * - `reduce` — an icon accordion: every tab but the active one drops its label
   *   (and badge) to just its icon, while the active tab keeps its label and
   *   takes the remaining room. A tab with no icon keeps its label, so nothing
   *   is left unlabelled. Swap to it from your own breakpoint when the bar is
   *   too tight for every label.
   * - `compact` (default) — inline / popover bars.
   * - `comfortable` — a prominent, page-level bar.
   */
  readonly size = input<"reduce" | "compact" | "comfortable">("compact");

  /** `surface` (filled bar, default) or `transparent` (blends with the app). */
  readonly background = input<"transparent" | "surface">("surface");

  /** Emits the `key` of the clicked tab. */
  readonly tabChange = output<string>();
}
