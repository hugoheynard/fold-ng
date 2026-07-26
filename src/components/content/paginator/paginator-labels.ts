import { InjectionToken, type Provider } from "@angular/core";

/**
 * Every user-facing / accessible string the paginator renders. Parameterised
 * strings (the visible range, a page's aria-label) are functions so a locale
 * can reorder or reword them, not just translate a fixed template. All defaults
 * are English — a non-English app overrides them once via
 * {@link provideFoldPaginatorLabels}, or per instance via the `labels` input.
 */
export interface FoldPaginatorLabels {
  /** `aria-label` of the page-size `<select>`. */
  readonly pageSize: string;
  /** Trailing text after the size selector, e.g. "per page". */
  readonly perPage: string;
  /** `aria-label` of the page-navigation `<nav>`. */
  readonly nav: string;
  /** Previous-page button `aria-label`. */
  readonly previous: string;
  /** Next-page button `aria-label`. */
  readonly next: string;
  /** Shown in place of the range when there are no items. */
  readonly empty: string;
  /** A page button's `aria-label`, e.g. `(3) => "Page 3"`. */
  readonly page: (page: number) => string;
  /** The visible range label, e.g. `(21, 30, 237) => "21–30 of 237"`. */
  readonly range: (start: number, end: number, total: number) => string;
}

/** The English defaults — the base every override merges onto. */
export const FOLD_PAGINATOR_DEFAULT_LABELS: FoldPaginatorLabels = {
  pageSize: "Items per page",
  perPage: "per page",
  nav: "Pagination",
  previous: "Previous page",
  next: "Next page",
  empty: "No items",
  page: (page) => `Page ${page}`,
  range: (start, end, total) => `${start}–${end} of ${total}`,
};

/** App-wide paginator labels; defaults to English. */
export const FOLD_PAGINATOR_LABELS = new InjectionToken<FoldPaginatorLabels>(
  "FOLD_PAGINATOR_LABELS",
  { factory: () => FOLD_PAGINATOR_DEFAULT_LABELS },
);

/**
 * Provide app-wide paginator labels once at bootstrap. Partial — any key you
 * omit keeps its English default.
 *
 * @example
 * ```ts
 * // app.config.ts
 * providers: [
 *   provideFoldPaginatorLabels({
 *     perPage: "par page",
 *     previous: "Page précédente",
 *     range: (s, e, t) => `${s}–${e} sur ${t}`,
 *   }),
 * ];
 * ```
 */
export function provideFoldPaginatorLabels(
  labels: Partial<FoldPaginatorLabels>,
): Provider {
  return {
    provide: FOLD_PAGINATOR_LABELS,
    useValue: { ...FOLD_PAGINATOR_DEFAULT_LABELS, ...labels },
  };
}
