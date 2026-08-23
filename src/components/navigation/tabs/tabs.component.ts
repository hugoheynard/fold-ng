import {
  booleanAttribute,
  Component,
  computed,
  ElementRef,
  inject,
  input,
  model,
  viewChildren,
} from "@angular/core";
import { FoldBadgeComponent } from "../../content/badge/badge.component";
import { FoldIconComponent } from "../../foundations/icon/icon.component";
import { FoldTabTooltipDirective } from "../tab-tooltip.directive";
import type { FoldPopoverSide } from "../../overlays/popover/placement";
import type { FoldIconName } from "../../foundations/icon/builtin-icons";
import { FoldIdService } from "../../../a11y/id.service";
import { FOLD_NAV_LAYOUT } from "../../layout/nav-layout/nav-layout.context";

/**
 * A tab in a {@link FoldTabsComponent} bar.
 *
 * Generic over the **key** so a caller whose sections are a closed union
 * (`"overview" | "settings"`) keeps that type end to end: the bar writes it back
 * already narrowed, and a panel bound to a key outside the union is a compile
 * error. Defaults to `string`, so an untyped caller is unaffected.
 */
export type FoldTabItem<K extends string = string> = {
  /** Unique key — identifies the tab / its panel, emitted on change. */
  key: K;
  /** Display label. */
  label: string;
  /** Optional leading icon. */
  icon?: FoldIconName;
  /** Optional trailing count badge. `undefined`/`null` hides it. */
  badge?: string | number | null;
};

/**
 * The read side a {@link FoldTabPanelComponent} needs to wire itself to a tab —
 * exposed by `fold-tabs` via `exportAs="foldTabs"`. Decouples the panel from the
 * concrete component.
 */
export interface FoldTabsContext<K extends string = string> {
  /** The active tab's key. */
  activeKey(): K;
  /** The DOM id of the tab for `key` (a panel's `aria-labelledby`). */
  tabId(key: K): string;
  /** The DOM id of the panel for `key` (a tab's `aria-controls`). */
  panelId(key: K): string;
}

/**
 * `<fold-tabs>` — the **in-page tabs widget** (the ARIA Tabs pattern): a
 * `role="tablist"` of `role="tab"` buttons that switch layered panels **without
 * navigating**. Arrow keys move between tabs (roving tabindex — only the active
 * tab is in the Tab order), `Home`/`End` jump to the ends, and each tab is wired
 * to its panel via `aria-controls` ↔ `aria-labelledby`.
 *
 * Pair it with one {@link FoldTabPanelComponent} per key, handed the bar via a
 * template ref so the two coordinate across slots (e.g. inside a
 * `fold-nav-layout`). Same visual as {@link FoldViewNavComponent}; the
 * difference is **semantics** — use `fold-tabs` for in-page panel switching, and
 * `fold-view-nav` when the tabs actually navigate (route) between views.
 *
 * `activeKey` is a two-way model — the single way to drive selection. Bind
 * `[(activeKey)]` and the bar writes the new key back on click / arrow keys:
 *
 * ```html
 * <fold-nav-layout>
 *   <fold-tabs tabNav #t="foldTabs" [tabs]="tabs" [(activeKey)]="tab" />
 *   <fold-tab-panel [tabs]="t" key="overview">…</fold-tab-panel>
 *   <fold-tab-panel [tabs]="t" key="settings">…</fold-tab-panel>
 * </fold-nav-layout>
 * ```
 *
 * Same visual knobs as `fold-view-nav` (`activeStyle` · `direction` · `size` ·
 * `background`). Sizing shares the tab-bar tokens.
 *
 * @selector `fold-tabs`
 */
@Component({
  selector: "fold-tabs",
  standalone: true,
  exportAs: "foldTabs",
  imports: [FoldIconComponent, FoldBadgeComponent, FoldTabTooltipDirective],
  templateUrl: "./tabs.component.html",
  styleUrl: "./tabs.component.scss",
  host: { "[class.is-sticky]": "sticky()" },
})
export class FoldTabsComponent<
  K extends string = string,
> implements FoldTabsContext<K> {
  /** The tabs to render, in order. */
  readonly tabs = input.required<readonly FoldTabItem<K>[]>();
  /**
   * The `key` of the active tab (the shown panel), as a **two-way model** — the
   * single source of selection. Bind `[(activeKey)]` and the bar writes the new
   * key back on click / arrow keys; to *react* to a change without a writeback,
   * listen to the model's `(activeKeyChange)`. There is no separate change
   * output — the model is the one way.
   */
  readonly activeKey = model.required<K>();
  /** How the active tab reads: accent underline, or accent fill. */
  readonly activeStyle = input<"underline" | "fill">("underline");
  /**
   * Bar orientation (drives `aria-orientation`). Defaults to `auto`: follows a
   * wrapping `fold-nav-layout`, else `horizontal`.
   */
  readonly direction = input<"horizontal" | "vertical" | "auto">("auto");
  /** Density — see {@link FoldViewNavComponent} for the same scale. */
  readonly size = input<"compact" | "comfortable">("compact");

  /**
   * How items share the bar's width — a separate axis from {@link size}.
   *
   * - `start` (default) — each item takes the width of its own content.
   * - `stretch` — items divide the bar's width equally (a bottom tab bar).
   *
   * `size` used to decide this in passing: `compact` stretched, `comfortable`
   * hugged, while the prop documented itself as "pure padding/typography". One
   * prop quietly steering two axes is the thing `button-icon`/`toggle-icon` and
   * `view-nav`/`tabs` were each split apart to stop doing.
   *
   * Vertical bars ignore it — a rail stacks, it does not share a width.
   */
  readonly justify = input<"start" | "stretch">("start");
  /** Collapse to icons — see {@link FoldViewNavComponent.collapsed}. */
  readonly collapsed = input(false, { transform: booleanAttribute });
  /** `surface` (filled bar, default) or `transparent`. */
  readonly background = input<"transparent" | "surface">("surface");

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

  /** `direction` with `auto` resolved against the wrapping layout. */

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

  protected readonly resolvedDirection = computed<"horizontal" | "vertical">(
    () => {
      const d = this.direction();
      if (d !== "auto") {
        return d;
      }
      return this.layout?.stacked() ? "horizontal" : "vertical";
    },
  );

  /** Per-instance id root, so ids are unique + stable across SSR. */
  private readonly uid = inject(FoldIdService).next("fold-tabs");
  private readonly tabButtons =
    viewChildren<ElementRef<HTMLButtonElement>>("tabBtn");

  tabId(key: K): string {
    return `${this.uid}-tab-${key}`;
  }
  panelId(key: K): string {
    return `${this.uid}-panel-${key}`;
  }

  protected select(key: K): void {
    this.commit(key);
  }

  /** Records a new selection by writing the `activeKey` model — the two-way
   *  binding (or its `activeKeyChange`) carries it to the parent. */
  private commit(key: K): void {
    this.activeKey.set(key);
  }

  /**
   * Roving-tabindex keyboard model (APG Tabs, automatic activation): arrows move
   * — and select — the adjacent tab, `Home`/`End` the ends. Both axes work, so
   * it stays correct whether the bar is horizontal, vertical, or a
   * mobile-collapsed vertical.
   */
  protected onKeydown(event: KeyboardEvent): void {
    const keys = this.tabs().map((t) => t.key);
    if (keys.length === 0) {
      return;
    }
    const current = keys.indexOf(this.activeKey());
    let target: number;
    switch (event.key) {
      case "ArrowRight":
      case "ArrowDown":
        target = (current + 1) % keys.length;
        break;
      case "ArrowLeft":
      case "ArrowUp":
        target = (current - 1 + keys.length) % keys.length;
        break;
      case "Home":
        target = 0;
        break;
      case "End":
        target = keys.length - 1;
        break;
      default:
        return;
    }
    event.preventDefault();
    const key = keys[target];
    if (key === undefined) {
      return;
    }
    this.commit(key);
    this.tabButtons()[target]?.nativeElement.focus();
  }
}
