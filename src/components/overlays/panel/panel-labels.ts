import { InjectionToken, type Provider } from "@angular/core";

/**
 * App-wide default for a panel header's close-button label. Lets a non-English
 * app set the label **once** — every `fold-panel-header` (the host's template
 * panels and each feature's component panel) reads it, so there is no per-panel
 * wiring. A `closeLabel` input on a specific header still wins.
 */
export const FOLD_PANEL_CLOSE_LABEL = new InjectionToken<string>(
  "FOLD_PANEL_CLOSE_LABEL",
  { factory: () => "Close" },
);

/** Overridable panel labels. */
export interface FoldPanelLabels {
  /** Close-button accessible label. */
  readonly close: string;
}

/**
 * Provide app-wide panel labels once at bootstrap.
 *
 * @example
 * ```ts
 * // app.config.ts
 * providers: [provideFoldPanelLabels({ close: "Fermer" })];
 * ```
 */
export function provideFoldPanelLabels(labels: FoldPanelLabels): Provider {
  return { provide: FOLD_PANEL_CLOSE_LABEL, useValue: labels.close };
}
