import { NgTemplateOutlet } from "@angular/common";
import {
  booleanAttribute,
  Component,
  computed,
  effect,
  inject,
  input,
  model,
} from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { FoldBadgeComponent } from "../../content/badge/badge.component";
import { FoldIconComponent } from "../../foundations/icon/icon.component";
import { FoldTabTooltipDirective } from "../tab-tooltip.directive";
import type { FoldPopoverSide } from "../../overlays/popover/placement";
import type { FoldIconName } from "../../foundations/icon/builtin-icons";
import { FOLD_NAV_LAYOUT } from "../../layout/nav-layout/nav-layout.context";
import { FOLD_NARROW } from "../../layout/breakpoints";
import { observeElementWidth } from "../../../dom/observe-element-width";

export type FoldViewNavItem = {
  /** Unique key — identifies the item; a button item writes it to `activeKey`. */
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
 * `aria-current="page"`. Without a link an item is a `<button>` that drives the
 * `activeKey` **two-way model** — bind `[(activeKey)]` for view switching with
 * no route.
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
    FoldTabTooltipDirective,
  ],
  templateUrl: "./view-nav.component.html",
  // Inline + token-driven. Neutral 1px lines use --fold-color-border /
  // -surface-raised so they flip correctly in light mode (the app original
  // hard-coded white-alpha, which would vanish on a light background).
  styleUrl: "./view-nav.component.scss",
  host: {
    // A standalone horizontal bar owns the gap to the content it heads, matching
    // fold-nav-layout. Inside a layout, the layout owns that gap (these two
    // classes never both apply there); the SCSS keys the margin on their
    // conjunction. Vertical is a side rail, not a header — no block-end margin.
    "[class.is-standalone]": "isStandalone()",
    "[class.is-horizontal]": "resolvedDirection() === 'horizontal'",
    "[class.is-sticky]": "sticky()",
    "[class.is-narrow]": "narrow()",
  },
})
export class FoldViewNavComponent {
  /** The items to render, in order. */
  readonly items = input.required<readonly FoldViewNavItem[]>();

  /**
   * The active item's `key`, as a **two-way model** — for **button** items (no
   * `link`). Bind `[(activeKey)]` and a click writes the new key back; there is
   * no separate change output (the model is the one way). Link items ignore it:
   * their active state comes from the URL via `routerLinkActive`.
   *
   * **Deliberately `string`, where {@link FoldTabsComponent.activeKey} is
   * generic.** This model has a zero value — `""`, "no item selected", the state
   * a bar of pure link items sits in forever. No caller's union of view keys
   * contains `""`, so a generic `K` here would have to be `K | ""` and hand the
   * narrowing back to the caller — the very burden the generic exists to remove.
   * `fold-tabs` has no such zero value (`model.required`), which is why it can.
   */
  readonly activeKey = model<string>("");

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
   * to match. An item with no icon falls back to a square glyph of its label's
   * initial, so the rail stays icon-width whether or not items carry icons.
   * Toggle it from your own breakpoint when the bar is too tight.
   */
  readonly collapsed = input(false, { transform: booleanAttribute });

  /**
   * `transparent` (default — blends with the app, so the items read directly) or
   * `surface` (a filled bar that carries its own rail background).
   */
  readonly background = input<"transparent" | "surface">("transparent");

  /**
   * Pin the bar to the top of its scroll container, so a long view can be
   * navigated without scrolling back up. Pair it with the default
   * `background="surface"`: a `transparent` bar would let the content scroll
   * through it. Bleeding the bar to the page's edges stays the page's business
   * — the page owns the gutter.
   */
  readonly sticky = input(false, { transform: booleanAttribute });

  /** The nearest layout, if any — lets `direction="auto"` follow it. */
  private readonly layout = inject(FOLD_NAV_LAYOUT, { optional: true });

  /**
   * No wrapping `fold-nav-layout`. Standalone, the bar owns its gap to the
   * following content; inside a layout, the layout owns it (avoiding a double
   * gap).
   */
  protected readonly isStandalone = computed(() => this.layout === null);

  /** The bar's own width — the box a standalone bar tightens its gap against. */
  private readonly width = observeElementWidth();

  /** Narrow enough to tighten the gap. Its own box, never the window. */
  protected readonly narrow = computed(
    () => this.width() > 0 && this.width() <= FOLD_NARROW,
  );

  constructor() {
    // Tell the layout the bar is icon-only, so its rail track can hug it. The
    // context runs both ways now: `collapsed` is the bar's prop and the rail
    // width the layout's, and they had no way to meet.
    effect(() => this.layout?.barCollapsed.set(this.collapsed()));
  }

  /** Which side a collapsed tooltip sits on: a rail pushes right, a bar down. */
  protected readonly tooltipSide = computed<FoldPopoverSide>(() =>
    this.resolvedDirection() === "vertical" ? "right" : "bottom",
  );

  /**
   * True when this item's label is a TOOLTIP rather than inline text: every
   * item on a collapsed rail, and every inactive one on a collapsed bar (the
   * active one keeps its label inline).
   *
   * A tooltip label is `display: none` until shown — a `[popover]` is — so the
   * item also takes an explicit `aria-label`. The old `opacity: 0` left the
   * text in the accessibility tree; the top layer does not, and an icon with no
   * name is worse than a clipped tooltip.
   */
  protected isTooltip(active: boolean): boolean {
    return (
      this.collapsed() && (this.resolvedDirection() === "vertical" || !active)
    );
  }

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
