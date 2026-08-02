import {
  afterNextRender,
  computed,
  signal,
  untracked,
  type Injector,
  type Signal,
} from "@angular/core";

import type { FoldCalendarDate, FoldWeekday } from "./calendar-date";
import { foldCalendarNextFocus, foldFocusDayCell } from "./calendar-keyboard";

/**
 * The single tab stop of a date grid, and the arrow keys that move it.
 *
 * A grid has **one** focusable cell at a time (the ARIA grid pattern), which
 * means three questions that have nothing to do with rendering a month: which
 * cell holds the stop, where does a key move it, and what happens when it moves
 * off the rendered window. Answering them here keeps the component about the
 * grid, and lets the rule be exercised without one.
 */

/** What the roving focus needs from the grid it moves over. */
export interface FoldRovingFocusHost {
  /** Every date currently rendered — focus may not leave it. */
  readonly dates: Signal<ReadonlySet<FoldCalendarDate>>;
  /** Where the stop sits before the user has moved it (today, else the 1st). */
  readonly fallback: Signal<FoldCalendarDate | null>;
  /** The anchor `Home`/`End` snap to. */
  readonly weekStartsOn: Signal<FoldWeekday>;
  /** The grid's root element, for the cell lookup. `null` under SSR. */
  root(): HTMLElement | null;
  /** Page the calendar to a date that is not on screen. */
  page(date: FoldCalendarDate): void;
  /** Used to schedule the post-render focus. */
  readonly injector: Injector;
}

export class FoldCalendarRovingFocus {
  /** The day holding focus, once the user has moved it. */
  private readonly focused = signal<FoldCalendarDate | null>(null);
  /** A day to focus once the grid has re-rendered around a new period. */
  private readonly deferred = signal<FoldCalendarDate | null>(null);

  constructor(private readonly host: FoldRovingFocusHost) {}

  /**
   * The cell carrying the tab stop: the focused day while it is on screen,
   * else the host's fallback — so paging never strands the grid without one.
   */
  readonly activeDate = computed<FoldCalendarDate | null>(() => {
    const focused = this.focused();
    if (focused !== null && this.host.dates().has(focused)) {
      return focused;
    }
    return this.host.fallback();
  });

  tabIndexFor(date: FoldCalendarDate): 0 | -1 {
    return date === this.activeDate() ? 0 : -1;
  }

  /** A cell took focus — by keyboard, or by a click. */
  onFocus(date: FoldCalendarDate): void {
    this.focused.set(date);
  }

  /**
   * Applies `key` to the date axis, reporting whether it was a navigation key.
   *
   * The move happens in place when the target is on screen; when it is not, the
   * host pages to it and the focus is deferred until the new cells exist.
   */
  move(key: string, from: FoldCalendarDate): boolean {
    const next = foldCalendarNextFocus(key, from, this.host.weekStartsOn());
    if (next === null) {
      return false;
    }
    this.focused.set(next);
    if (!foldFocusDayCell(this.host.root(), next)) {
      this.host.page(next);
      this.deferred.set(next);
      this.focusAfterRender();
    }
    return true;
  }

  /**
   * Focuses the deferred day once the grid has rendered around the new period.
   *
   * `afterNextRender` rather than an `effect`: the ordering of an effect against
   * the DOM it wants to touch is not contracted and has already changed between
   * Angular versions, and this way the SSR no-op is explicit. The request is
   * **consumed**, or repeating the exact same move would be a no-op on the
   * signal and drop focus onto `<body>`.
   */
  private focusAfterRender(): void {
    afterNextRender(
      () => {
        const target = untracked(this.deferred);
        if (target === null) {
          return;
        }
        this.deferred.set(null);
        foldFocusDayCell(this.host.root(), target);
      },
      { injector: this.host.injector },
    );
  }
}
