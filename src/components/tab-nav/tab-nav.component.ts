import { Component, input, output } from "@angular/core";
import { Sh3BadgeComponent } from "../badge/badge.component";
import { Sh3IconComponent } from "../icon/icon.component";
import type { Sh3IconName } from "../icon/icon.registry";

export type Sh3TabNavItem = {
  /** Unique key — identifies the tab and is emitted on click. */
  key: string;
  /** Display label. */
  label: string;
  /** Optional leading icon, by registry name (rendered as an `sh3-icon`). */
  icon?: Sh3IconName;
  /** Optional trailing badge (e.g. a count). `undefined`/`null` hides it. */
  badge?: string | number | null;
};

/**
 * `<sh3-tab-nav>` — a tab navigation bar (buttons only; the parent renders the
 * content for the active key).
 *
 * - `activeStyle` — `underline` (accent border on the active tab) or `fill`
 *   (accent background pill, good for sidebars).
 * - `direction` — `horizontal` (row, equal-width) or `vertical` (stacked
 *   sidebar; auto-collapses to a horizontal icon-accordion at ≤768px).
 *
 * @selector `sh3-tab-nav`
 *
 * @example
 * ```html
 * <sh3-tab-nav
 *   [tabs]="[{ key: 'members', label: 'Members', badge: 3 }, { key: 'settings', label: 'Settings' }]"
 *   [activeKey]="tab()"
 *   activeStyle="underline"
 *   direction="horizontal"
 *   (tabChange)="tab.set($event)"
 * />
 * ```
 */
@Component({
  selector: "sh3-tab-nav",
  standalone: true,
  imports: [Sh3IconComponent, Sh3BadgeComponent],
  templateUrl: "./tab-nav.component.html",
  // Inline + token-driven. Neutral 1px lines use --sh3-color-border /
  // -surface-raised so they flip correctly in light mode (the app original
  // hard-coded white-alpha, which would vanish on a light background).
  styleUrl: "./tab-nav.component.scss",
})
export class Sh3TabNavComponent {
  /** The tabs to render, in order. */
  readonly tabs = input.required<Sh3TabNavItem[]>();

  /** The `key` of the currently active tab. */
  readonly activeKey = input.required<string>();

  /** How the active tab reads: accent underline, or accent fill. */
  readonly activeStyle = input<"underline" | "fill">("underline");

  /** Bar orientation (vertical auto-collapses to horizontal on mobile). */
  readonly direction = input<"horizontal" | "vertical">("horizontal");

  /** `compact` (inline/popover, default) or `comfortable` (page-level bar). */
  readonly size = input<"compact" | "comfortable">("compact");

  /** `surface` (filled bar, default) or `transparent` (blends with the app). */
  readonly background = input<"transparent" | "surface">("surface");

  /** Emits the `key` of the clicked tab. */
  readonly tabChange = output<string>();
}
