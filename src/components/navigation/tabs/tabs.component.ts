import {
  Component,
  ElementRef,
  inject,
  input,
  output,
  viewChildren,
} from "@angular/core";
import { FoldBadgeComponent } from "../../content/badge/badge.component";
import { FoldIconComponent } from "../../foundations/icon/icon.component";
import type { FoldIconName } from "../../foundations/icon/builtin-icons";
import { FoldIdService } from "../../../a11y/id.service";

/** A tab in a {@link FoldTabsComponent} bar. */
export type FoldTabItem = {
  /** Unique key — identifies the tab / its panel, emitted on change. */
  key: string;
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
export interface FoldTabsContext {
  /** The active tab's key. */
  activeKey(): string;
  /** The DOM id of the tab for `key` (a panel's `aria-labelledby`). */
  tabId(key: string): string;
  /** The DOM id of the panel for `key` (a tab's `aria-controls`). */
  panelId(key: string): string;
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
 * ```html
 * <fold-nav-layout>
 *   <fold-tabs
 *     nav
 *     #t="foldTabs"
 *     [tabs]="tabs"
 *     [activeKey]="tab()"
 *     (tabChange)="tab.set($event)"
 *   />
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
  imports: [FoldIconComponent, FoldBadgeComponent],
  templateUrl: "./tabs.component.html",
  styleUrl: "./tabs.component.scss",
})
export class FoldTabsComponent implements FoldTabsContext {
  /** The tabs to render, in order. */
  readonly tabs = input.required<FoldTabItem[]>();
  /** The `key` of the active tab (the shown panel). */
  readonly activeKey = input.required<string>();
  /** How the active tab reads: accent underline, or accent fill. */
  readonly activeStyle = input<"underline" | "fill">("underline");
  /** Bar orientation (drives arrow-key axis + `aria-orientation`). */
  readonly direction = input<"horizontal" | "vertical">("horizontal");
  /** Density — see {@link FoldViewNavComponent} for the same scale. */
  readonly size = input<"reduce" | "compact" | "comfortable">("compact");
  /** `surface` (filled bar, default) or `transparent`. */
  readonly background = input<"transparent" | "surface">("surface");
  /** Emits the newly-selected tab's `key`. */
  readonly tabChange = output<string>();

  /** Per-instance id root, so ids are unique + stable across SSR. */
  private readonly uid = inject(FoldIdService).next("fold-tabs");
  private readonly tabButtons =
    viewChildren<ElementRef<HTMLButtonElement>>("tabBtn");

  tabId(key: string): string {
    return `${this.uid}-tab-${key}`;
  }
  panelId(key: string): string {
    return `${this.uid}-panel-${key}`;
  }

  protected select(key: string): void {
    this.tabChange.emit(key);
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
    this.tabChange.emit(key);
    this.tabButtons()[target]?.nativeElement.focus();
  }
}
