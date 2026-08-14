import { InjectionToken, type Provider } from "@angular/core";

/**
 * The handful of words the package says **on its own**, scattered across
 * components rather than owned by one.
 *
 * Every other label cluster in fold-ng belongs to a single component
 * (`fold-paginator`, `fold-data-table`, …) and gets its own token. These four do
 * not: `optional` sits on every labelled field, `info` on every help bubble,
 * `clear` on a clearable control, `loading` on a placeholder that can appear
 * anywhere. Left as per-instance inputs only, a non-English app had to repeat
 * the same translation at every call site — 25 `optionalLabel="facultatif"`
 * across 9 files in the app that prompted this — or, worse, forget one and ship
 * a lone English word into an otherwise translated screen.
 *
 * Precedence, as everywhere in the package: **English default ← app-wide
 * provider ← the component's own input**. The per-instance input still wins, for
 * the field whose help bubble deserves a sentence of its own.
 */
export interface FoldCommonLabels {
  /** The word inside a label's `(optional)` marker. */
  readonly optional: string;
  /** Accessible name of a help-bubble trigger (`fold-info`, `info` inputs). */
  readonly info: string;
  /** Accessible name of a control's clear (×) affordance. */
  readonly clear: string;
  /** Message of a `fold-loading` placeholder given no `message`. */
  readonly loading: string;
}

/** The English defaults — the base every override merges onto. */
export const FOLD_COMMON_DEFAULT_LABELS: FoldCommonLabels = {
  optional: "optional",
  info: "More information",
  clear: "Clear",
  loading: "Loading...",
};

/** App-wide shared labels; defaults to English. */
export const FOLD_COMMON_LABELS = new InjectionToken<FoldCommonLabels>(
  "FOLD_COMMON_LABELS",
  { factory: () => FOLD_COMMON_DEFAULT_LABELS },
);

/**
 * Provide the package's shared labels once at bootstrap. Partial — any key you
 * omit keeps its English default.
 *
 * @example
 * ```ts
 * // app.config.ts
 * providers: [
 *   provideFoldCommonLabels({
 *     optional: "facultatif",
 *     info: "En savoir plus",
 *     clear: "Effacer",
 *     loading: "Chargement…",
 *   }),
 * ];
 * ```
 */
export function provideFoldCommonLabels(
  labels: Partial<FoldCommonLabels>,
): Provider {
  return {
    provide: FOLD_COMMON_LABELS,
    useValue: { ...FOLD_COMMON_DEFAULT_LABELS, ...labels },
  };
}
