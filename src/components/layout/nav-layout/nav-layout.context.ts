import {
  InjectionToken,
  type Signal,
  type WritableSignal,
} from "@angular/core";

/**
 * The slice of a {@link FoldNavLayoutComponent} that a projected bar reads to
 * follow the layout — exposed through DI so a `fold-view-nav` / `fold-tabs` with
 * `direction="auto"` orients itself without the consumer wiring `tl.stacked()`.
 */
export interface FoldNavLayoutContext {
  /**
   * True when the layout currently stacks the bar **above** the content (a `top`
   * placement, or a `side` rail that has folded) — i.e. the bar should be
   * horizontal. False when it sits as a vertical rail beside the content.
   */
  readonly stacked: Signal<boolean>;

  /**
   * Written by the projected bar, read by the layout: true while the bar shows
   * icons only.
   *
   * The context used to run ONE way — the bar knew everything about the layout
   * and the layout nothing about the bar — so `collapsed` (the bar's prop) and
   * the rail width (the layout's) had no way to meet. `fold-view-nav`'s own
   * JSDoc said to "narrow the layout's `--fold-nav-layout-rail-width` to
   * match", by hand, at every call site. A system does not delegate that.
   */
  readonly barCollapsed: WritableSignal<boolean>;
}

/** DI handle for the nearest {@link FoldNavLayoutComponent}, if any. */
export const FOLD_NAV_LAYOUT = new InjectionToken<FoldNavLayoutContext>(
  "FOLD_NAV_LAYOUT",
);
