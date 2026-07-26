/** Public types for {@link FoldDataTableComponent} — a controlled, presentational
 *  roster table (sticky header, sortable columns, per-row tone accents, mobile
 *  cards). The parent owns paging/sorting/filtering; the table only renders. */

/** Per-row semantic accent — a left bar + subtle tint. */
export type FoldTableTone = "warning" | "alert" | "success" | null;

export type FoldTableSortDir = "asc" | "desc";

/** The active sort, or `null` when unsorted. `key` matches a column key. */
export interface FoldTableSort {
  readonly key: string;
  readonly dir: FoldTableSortDir;
}

/**
 * A column definition. Cell CONTENT is supplied by a projected
 * `<ng-template foldCell="<key>" let-row>` — this object only carries the
 * header + layout metadata.
 */
export interface FoldTableColumn {
  /** Stable key — matches the cell template and (when sortable) the sort field. */
  readonly key: string;
  readonly label: string;
  /** Renders a sort button in the header; emits `sortChange` with `key`. */
  readonly sortable?: boolean;
  /** Text alignment of the header + cells. Default left; `right` for numeric. */
  readonly align?: "right" | "center";
  /** Optional fixed column width (any CSS length). */
  readonly width?: string;
  /** Clip overflowing text to one line with an ellipsis (pair with `width`).
   *  Cell templates should set their own `title` for the full-text tooltip. */
  readonly truncate?: boolean;
  /** Extra class applied to every cell in the column. */
  readonly cellClass?: string;
}

/** Empty-state copy shown when `rows` is empty. */
export interface FoldTableEmpty {
  readonly title: string;
  readonly subtitle?: string;
}
