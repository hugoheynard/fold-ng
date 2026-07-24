import { InjectionToken, type Signal } from "@angular/core";

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
}

/** DI handle for the nearest {@link FoldNavLayoutComponent}, if any. */
export const FOLD_NAV_LAYOUT = new InjectionToken<FoldNavLayoutContext>(
  "FOLD_NAV_LAYOUT",
);
