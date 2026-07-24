import { NgTemplateOutlet } from "@angular/common";
import {
  booleanAttribute,
  Component,
  computed,
  inject,
  input,
  output,
} from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { FoldBadgeComponent } from "../../content/badge/badge.component";
import { FoldIconComponent } from "../../foundations/icon/icon.component";
import type { FoldIconName } from "../../foundations/icon/builtin-icons";
import { FOLD_NAV_LAYOUT } from "../../layout/nav-layout/nav-layout.context";

export type FoldViewNavItem = {
  /** Unique key — identifies the item and is emitted by `activeChange`. */
  key: string;
  /** Display label. */
  label: string;
  /** Optional leading icon, by registry name (rendered as an `fold-icon`). */
  icon?: FoldIconName;
  /** Optional trailing badge (e.g. a count). `undefined`/`null` hides it. */
  badge?: string | number | null;
  /**
   * Router target — makes this item a real `routerLink` `<a>`: cmd/middle-click
   * opens a new tab, the URL is a deep link, and the active state is driven
   * automatically by `routerLinkActive` (no `activeKey` needed). Accepts the
   * same value as `[routerLink]` — a path string or a commands array.
   */
  link?: string | unknown[];
  /** External URL — renders a plain `<a href>` (no router). */
  href?: string;
  /** Disable the item: non-interactive + dimmed. */
  disabled?: boolean;
};

/**
 * `<fold-view-nav>` — a **navigation** bar styled as tabs: a `<nav>` whose items
 * *go somewhere*. Give each item a `link` (or `href`) and it renders a real
 * `<a>` — so cmd/middle-click opens a new tab, the URL is a deep link, and the
 * active item is driven automatically by `routerLinkActive` +
 * `aria-current="page"`. Without a link an item is a `<button>` that emits
 * `activeChange` and reads its active state from `activeKey` (view switching
 * with no route).
 *
 * **Navigation, not the tabs widget.** Reach for this when a tab routes / switches
 * views. When tabs toggle **layered panels in place** (same URL), use
 * {@link FoldTabsComponent} — same look, but the ARIA Tabs pattern
 * (`role="tablist"`, arrow keys, `tabpanel`).
 *
 * - `activeStyle` — `underline` (accent border) or `fill` (accent pill).
 * - `direction` — `auto` (default: follows a wrapping `fold-nav-layout`, else
 *   vertical), `vertical`, or `horizontal`.
 *
 * @selector `fold-view-nav`
 *
 * @example
 * ```html
 * <!-- real navigation: link items, active state automatic -->
 * <fold-view-nav [items]="[
 *   { key: 'members', label: 'Members', link: 'members', badge: 3 },
 *   { key: 'settings', label: 'Settings', link: 'settings' },
 * ]" />
 * <router-outlet />
 * ```
 */
@Component({
  selector: "fold-view-nav",
  standalone: true,
  imports: [
    NgTemplateOutlet,
    FoldIconComponent,
    FoldBadgeComponent,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: "./view-nav.component.html",
  // Inline + token-driven. Neutral 1px lines use --fold-color-border /
  // -surface-raised so they flip correctly in light mode (the app original
  // hard-coded white-alpha, which would vanish on a light background).
  styleUrl: "./view-nav.component.scss",
})
export class FoldViewNavComponent {
  /** The items to render, in order. */
  readonly items = input.required<FoldViewNavItem[]>();

  /**
   * The active item's `key` — for **button** items (no `link`). Link items ignore
   * it: their active state comes from the URL via `routerLinkActive`.
   */
  readonly activeKey = input<string>("");

  /** How the active item reads: accent underline, or accent fill. */
  readonly activeStyle = input<"underline" | "fill">("underline");

  /**
   * Bar orientation. Defaults to `auto`: inside a `fold-nav-layout` it follows
   * the layout (vertical rail, horizontal once folded) with no wiring; on its
   * own it is `vertical` — the readable-first shape, reading as the app's
   * **third navigation rail** (app menu → workspace → in-page views, the
   * `--fold-rail-tertiary` level). Force `horizontal` for a page-level top bar.
   */
  readonly direction = input<"horizontal" | "vertical" | "auto">("auto");

  /**
   * Density — pure padding/typography:
   * - `compact` (default) — inline / popover bars.
   * - `comfortable` — a prominent, page-level bar.
   */
  readonly size = input<"compact" | "comfortable">("compact");

  /**
   * Collapse the bar to icons (independent of {@link size}). **Horizontal**, an
   * icon accordion: every item but the active one drops to its icon, the active
   * one keeps its label. **Vertical**, a collapsed icon rail (like a folded
   * menu): every item shows just its icon, its label a hover/focus tooltip and
   * its count a corner bubble — narrow the layout's `--fold-nav-layout-rail-width`
   * to match. Either way an item with no icon keeps its label, so nothing is left
   * unlabelled. Toggle it from your own breakpoint when the bar is too tight.
   */
  readonly collapsed = input(false, { transform: booleanAttribute });

  /**
   * `transparent` (default — blends with the app, so the items read directly) or
   * `surface` (a filled bar that carries its own rail background).
   */
  readonly background = input<"transparent" | "surface">("transparent");

  /** Emits the `key` of a clicked **button** item (link items just navigate). */
  readonly activeChange = output<string>();

  /** The nearest layout, if any — lets `direction="auto"` follow it. */
  private readonly layout = inject(FOLD_NAV_LAYOUT, { optional: true });

  /** `direction` with `auto` resolved against the wrapping layout. */
  protected readonly resolvedDirection = computed<"horizontal" | "vertical">(
    () => {
      const d = this.direction();
      if (d !== "auto") {
        return d;
      }
      return this.layout?.stacked() ? "horizontal" : "vertical";
    },
  );
}
