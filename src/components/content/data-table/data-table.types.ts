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
 * A column definition.
 *
 * Cell content comes from **one of two places**, and the choice is about how
 * much the cell has to say:
 *
 * - {@link FoldTableColumn.value} — a plain accessor, for a column that only
 *   prints a field. Four columns out of seven usually are, and asking each of
 *   them for its own `<ng-template>` buries the two that actually need one.
 * - a projected `<ng-template foldCell="<key>" let-row>` — for anything with
 *   markup: a badge, two stacked lines, a link. It **wins** when both are
 *   given, so a column can start as an accessor and grow a template without
 *   its definition changing.
 *
 * Generic over the row type so `value` stays typed. The default `unknown` keeps
 * a plain `FoldTableColumn[]` valid for the template-only case.
 */
export interface FoldTableColumn<T = unknown> {
  /** Stable key — matches the cell template and (when sortable) the sort field. */
  readonly key: string;
  readonly label: string;
  /** Renders a sort button in the header; emits `sortChange` with `key`. */
  readonly sortable?: boolean;
  /** Text alignment of the header + cells. Default left. An explicit value wins
   *  over the right alignment {@link FoldTableColumn.numeric} implies. */
  readonly align?: "right" | "center";
  /**
   * The column holds NUMBERS — amounts, counts, durations.
   *
   * Two things follow, and they are the same thing said twice: the cells get
   * tabular figures, and they align right. A column of amounts set in
   * proportional figures does not line up under itself, so the eye has to read
   * every row instead of scanning the column — which is the only reason one
   * puts numbers in a table at all.
   *
   * It is a flag and not two properties because they are never wanted apart:
   * right-aligned proportional digits still fail to line up, and tabular digits
   * ragged on the left defeat their own purpose.
   */
  readonly numeric?: boolean;
  /** Optional fixed column width (any CSS length). */
  readonly width?: string;
  /** Clip overflowing text to one line with an ellipsis (pair with `width`).
   *  Cell templates should set their own `title` for the full-text tooltip. */
  readonly truncate?: boolean;
  /**
   * Extra class applied to every cell in the column.
   *
   * ⚠️ It lands on the table's OWN `<td>`/`<th>`, which wears the table's
   * encapsulation — so a consumer's component styles cannot reach it. Only a
   * global or utility class does anything here. To style a cell from the
   * consumer's own stylesheet, project a `<ng-template foldCell>`: what it
   * renders belongs to the consumer, attribute and all.
   */
  readonly cellClass?: string;
  /**
   * Prints one value per row — the whole cell, as text.
   *
   * Ignored when a `foldCell` template exists for this key: markup beats text,
   * and a column that has both is a column mid-migration, not a conflict to
   * arbitrate.
   */
  readonly value?: (row: T) => string | number;
}

/** Empty-state copy shown when `rows` is empty. */
export interface FoldTableEmpty {
  readonly title: string;
  readonly subtitle?: string;
}
