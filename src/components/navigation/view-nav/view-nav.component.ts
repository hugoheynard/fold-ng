import { Component, input, output } from "@angular/core";
import { FoldBadgeComponent } from "../../content/badge/badge.component";
import { FoldIconComponent } from "../../foundations/icon/icon.component";
import type { FoldIconName } from "../../foundations/icon/builtin-icons";

export type FoldViewNavItem = {
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
 * `<fold-view-nav>` — a **navigation** bar styled as tabs: a `<nav>` of buttons
 * that switch **views** (the parent routes / renders the view for the active
 * key), with `aria-current="page"` on the active one.
 *
 * **Navigation, not the tabs widget.** Reach for this when a tab *goes somewhere*
 * (routing, view switching). When tabs toggle **layered panels in place** (same
 * URL), use {@link FoldTabsComponent} instead — same look, but the ARIA Tabs
 * pattern (`role="tablist"`, arrow keys, `tabpanel`). Using the tabs pattern for
 * navigation is an anti-pattern, so the two are separate components on purpose.
 *
 * - `activeStyle` — `underline` (accent border on the active item) or `fill`
 *   (accent background pill, good for sidebars).
 * - `direction` — `horizontal` (row, equal-width) or `vertical` (stacked
 *   sidebar; auto-collapses to a horizontal icon-accordion at ≤768px).
 *
 * @selector `fold-view-nav`
 *
 * @example
 * ```html
 * <fold-view-nav
 *   [tabs]="[{ key: 'members', label: 'Members', badge: 3 }, { key: 'settings', label: 'Settings' }]"
 *   [activeKey]="tab()"
 *   activeStyle="underline"
 *   direction="horizontal"
 *   (tabChange)="tab.set($event)"
 * />
 * ```
 */
@Component({
  selector: "fold-view-nav",
  standalone: true,
  imports: [FoldIconComponent, FoldBadgeComponent],
  templateUrl: "./view-nav.component.html",
  // Inline + token-driven. Neutral 1px lines use --fold-color-border /
  // -surface-raised so they flip correctly in light mode (the app original
  // hard-coded white-alpha, which would vanish on a light background).
  styleUrl: "./view-nav.component.scss",
})
export class FoldViewNavComponent {
  /** The tabs to render, in order. */
  readonly tabs = input.required<FoldViewNavItem[]>();

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
