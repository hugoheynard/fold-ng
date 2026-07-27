import { InjectionToken, type Provider } from "@angular/core";

/**
 * Every user-facing / accessible string {@link FoldDataTableComponent} renders
 * that isn't supplied per row. Parameterised strings are functions so a locale
 * can reword, not just translate. All defaults are English — a non-English app
 * overrides them once via {@link provideFoldDataTableLabels}, or per instance
 * via the `labels` input. (Per-row names come from the `selectionLabel` input;
 * {@link FoldDataTableLabels.selectRow} is only the fallback when it's unset.)
 */
export interface FoldDataTableLabels {
  /** `aria-label` of the select-all header checkbox. */
  readonly selectAll: string;
  /** Fallback `aria-label` of a row checkbox (used when no `selectionLabel`). */
  readonly selectRow: string;
  /** A sortable header's button `aria-label`, e.g. `("Name") => "Sort by Name"`. */
  readonly sortBy: (column: string) => string;
  /** The loading spinner's accessible label. */
  readonly loading: string;
}

/** The English defaults — the base every override merges onto. */
export const FOLD_DATA_TABLE_DEFAULT_LABELS: FoldDataTableLabels = {
  selectAll: "Select all rows",
  selectRow: "Select row",
  sortBy: (column) => `Sort by ${column}`,
  loading: "Loading…",
};

/** App-wide data-table labels; defaults to English. */
export const FOLD_DATA_TABLE_LABELS = new InjectionToken<FoldDataTableLabels>(
  "FOLD_DATA_TABLE_LABELS",
  { factory: () => FOLD_DATA_TABLE_DEFAULT_LABELS },
);

/**
 * Provide app-wide data-table labels once at bootstrap. Partial — any key you
 * omit keeps its English default.
 *
 * @example
 * ```ts
 * providers: [
 *   provideFoldDataTableLabels({
 *     selectAll: "Tout sélectionner",
 *     sortBy: (c) => `Trier par ${c}`,
 *   }),
 * ];
 * ```
 */
export function provideFoldDataTableLabels(
  labels: Partial<FoldDataTableLabels>,
): Provider {
  return {
    provide: FOLD_DATA_TABLE_LABELS,
    useValue: { ...FOLD_DATA_TABLE_DEFAULT_LABELS, ...labels },
  };
}
