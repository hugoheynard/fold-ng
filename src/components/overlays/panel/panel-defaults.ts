import { InjectionToken, type Provider, type Type } from "@angular/core";
import type {
  FoldPanelDefaults,
  FoldPanelDefaultsProvider,
  FoldPanelSize,
} from "./panel.types";

/** The named width scale, in pixels. `md` is the historical default (490). */
const PANEL_SIZE_PX: Record<FoldPanelSize, number> = {
  sm: 360,
  md: 490,
  lg: 640,
  xl: 820,
};

/** Resolve a `width` (px number or named size) to pixels; `undefined` → `md`. */
export function panelWidthPx(
  width: number | FoldPanelSize | undefined,
): number {
  if (typeof width === "number") {
    return width;
  }
  return PANEL_SIZE_PX[width ?? "md"];
}

/**
 * App-wide panel defaults — the base layer of the cascade (see
 * {@link FoldPanelDefaults}). Provide it once at bootstrap to give every panel a
 * product-level identity (e.g. "our panels are solid, and dock left"); a
 * component's static `foldPanel` and a per-call `open()` option both win over it.
 */
export const FOLD_PANEL_DEFAULTS = new InjectionToken<FoldPanelDefaults>(
  "FOLD_PANEL_DEFAULTS",
);

/**
 * Provide app-wide panel defaults once at bootstrap.
 *
 * @example
 * ```ts
 * // app.config.ts
 * providers: [provideFoldPanelDefaults({ surface: "solid" })];
 * ```
 */
export function provideFoldPanelDefaults(
  defaults: FoldPanelDefaults,
): Provider {
  return { provide: FOLD_PANEL_DEFAULTS, useValue: defaults };
}

/**
 * Type-guard: does this class declare a static `foldPanel` object? Uses `in`
 * narrowing (no type assertion) so the property is reachable, then checks it is
 * a non-null object before trusting it as {@link FoldPanelDefaults}.
 */
function declaresPanelDefaults(
  component: Type<unknown>,
): component is Type<unknown> & FoldPanelDefaultsProvider {
  return (
    "foldPanel" in component &&
    component.foldPanel !== null &&
    typeof component.foldPanel === "object"
  );
}

/** Read a component's static `foldPanel` shape, or `{}` if it declares none. */
export function readComponentPanelDefaults(
  component: Type<unknown>,
): FoldPanelDefaults {
  return declaresPanelDefaults(component) ? component.foldPanel : {};
}
