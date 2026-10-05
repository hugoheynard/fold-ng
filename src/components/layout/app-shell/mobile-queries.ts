/**
 * Named media queries for {@link FoldAppShellComponent}'s `mobileQuery` input —
 * the common answers to "when should the shell switch to its single-column,
 * drawer layout?". Pass a key (`mobileQuery="phoneOrTablet"`) or a raw query built with
 * {@link foldMediaQuery}.
 *
 * - `phone` (default) — viewport ≤768px. The historical behaviour.
 * - `touchLandscape` — any device with a touch (coarse) pointer held in landscape, regardless
 *   of width (a phone or tablet on its side), plus `phone`.
 * - `phoneOrTablet` — `phone`, plus any viewport with a touch (coarse) pointer up to 1366px:
 *   an iPad in either orientation, including a 12.9" in landscape. A desktop
 *   with a mouse keeps the rails at the same width.
 *
 * The touch presets test `any-pointer: coarse`, not `pointer: coarse`: an iPad
 * with a trackpad / Magic Keyboard attached can report a FINE primary pointer
 * while its screen is still touched. The trade-off: a touch-screen laptop
 * ≤1366px also matches `phoneOrTablet` — pick `phone` or a raw query if that matters.
 */
export const FOLD_MOBILE_QUERIES = {
  phone: "(max-width: 768px)",
  touchLandscape:
    "(max-width: 768px), (any-pointer: coarse) and (orientation: landscape)",
  phoneOrTablet:
    "(max-width: 768px), (any-pointer: coarse) and (max-width: 1366px)",
} as const;

/** A key of {@link FOLD_MOBILE_QUERIES}. */
export type FoldMobileQueryName = keyof typeof FOLD_MOBILE_QUERIES;

declare const foldMediaQueryBrand: unique symbol;

/**
 * A raw media query, branded so that it can only come from
 * {@link foldMediaQuery}. A plain `string` arm (`| (string & {})`) would admit
 * a misspelt key (`"tablette"`) as a "query" that never matches — the shell
 * would silently stay wide. The brand makes the escape hatch explicit.
 */
export type FoldMediaQuery = string & { readonly [foldMediaQueryBrand]: true };

/** Marks a raw media query as intended for `mobileQuery`. */
export function foldMediaQuery(query: string): FoldMediaQuery {
  // The brand is type-only: every string is a valid carrier at runtime.
  if (!isBranded(query)) {
    throw new Error("unreachable");
  }
  return query;
}

function isBranded(query: string): query is FoldMediaQuery {
  return typeof query === "string";
}

function isPresetName(query: string): query is FoldMobileQueryName {
  return Object.hasOwn(FOLD_MOBILE_QUERIES, query);
}

/** What `mobileQuery` accepts: a named query (autocompleted), or a branded raw one. */
export type FoldMobileQuery = FoldMobileQueryName | FoldMediaQuery;

/** Resolves a named query to its media query; a raw query passes through. */
export function resolveFoldMobileQuery(query: FoldMobileQuery): string {
  return isPresetName(query) ? FOLD_MOBILE_QUERIES[query] : query;
}
