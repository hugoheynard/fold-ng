import {
  Component,
  type TemplateRef,
  booleanAttribute,
  numberAttribute,
  computed,
  contentChild,
  contentChildren,
  effect,
  inject,
  input,
  isDevMode,
  model,
  output,
  signal,
} from "@angular/core";
import { NgClass, NgTemplateOutlet } from "@angular/common";
import { FoldDataTableCellDirective } from "./data-table-cell.directive";
import { FoldDataTableRowCardDirective } from "./data-table-row-card.directive";
import { FoldDataTableRowDetailDirective } from "./data-table-row-detail.directive";
import { focusAdjacentRow, focusEdgeRow } from "./data-table-keyboard";
import { observeElementWidth } from "../../../dom/observe-element-width";
import { foldAt } from "../../../dom/fold-at";
import { FoldIconComponent } from "../../foundations/icon/icon.component";
import { FoldIdService } from "../../../a11y/id.service";
import { FoldSpinnerComponent } from "../../foundations/spinner/spinner.component";
import { FoldCheckboxComponent } from "../../forms/checkbox/checkbox.component";
import type { FoldIconName } from "../../foundations/icon/builtin-icons";
import type {
  FoldTableColumn,
  FoldTableEmpty,
  FoldTableSort,
  FoldTableTone,
} from "./data-table.types";
import {
  FOLD_DATA_TABLE_LABELS,
  type FoldDataTableLabels,
} from "./data-table-labels";

/** Default container width (px) at or below which the card layout takes over. */
const CARDS_AT = 600;

/**
 * `fold-data-table` — a controlled, presentational roster table. The parent
 * supplies already-paged/sorted `rows`, a `columns` definition, and a
 * `<ng-template foldCell="<key>">` per column for the cell content; the table
 * owns the chrome (sticky sortable header, row tone accents, focus/click, the
 * mobile card layout, the loading + empty states).
 *
 * Selection is a two-way model: bind `[(selected)]` with a set of row keys and
 * the table writes the next set back on any checkbox toggle — it renders the
 * checkbox column, the header select-all (with an indeterminate state over the
 * current rows), and the selected-row tint. Bind it one-way (`[selected]`) to
 * stay fully controlled.
 *
 * A row can open a **detail drawer in place**: project a
 * `<ng-template foldRowDetail let-row>` and the table grows a trailing toggle
 * column, opening the drawer beneath its row (inside the card, in the card
 * layout). Bind `[(expanded)]` with a set of row keys to control it, or let the
 * table own it. `expandMode` decides whether opening one closes the others —
 * `single` by default, because a drawer is usually read one at a time.
 *
 * The narrow-screen behaviour is the parent's choice, not an imposed one, via
 * `mobileLayout`: `scroll` (default — stay tabular, scroll horizontally),
 * `auto-cards` (each row stacks into a label/value card), or `custom` (the
 * parent supplies `<ng-template foldRowCard let-row>` and owns the card).
 *
 * Accessible by construction: the first column renders as `<th scope="row">`
 * (screen readers announce each row by its identity cell), the sort direction
 * rides on `aria-sort` (the icon is decorative), clickable rows answer Enter and
 * Space and form a single roving-tabindex group (Arrow/Home/End move between
 * rows), and `caption` gives the table a visually-hidden name.
 *
 * Generic over the row type `T` so `rowKey`/`rowTone`/`rowClick` stay typed.
 * Cell templates are untyped (`let-row` is `any`) — render through the parent's
 * typed helpers.
 */
@Component({
  selector: "fold-data-table",
  standalone: true,
  imports: [
    NgClass,
    NgTemplateOutlet,
    FoldIconComponent,
    FoldSpinnerComponent,
    FoldCheckboxComponent,
  ],
  templateUrl: "./data-table.component.html",
  styleUrl: "./data-table.component.scss",
})
export class FoldDataTableComponent<T> {
  readonly columns = input.required<readonly FoldTableColumn[]>();
  readonly rows = input.required<readonly T[]>();
  /** Stable row identity — defaults to the row index. */
  readonly rowKey = input<(row: T, index: number) => string | number>();
  /** Optional per-row semantic tone (left accent + tint). */
  readonly rowTone = input<(row: T) => FoldTableTone>();
  readonly sort = input<FoldTableSort | null>(null);
  readonly empty = input<FoldTableEmpty>();
  /** While `true`, shows a spinner instead of the empty state — a table that
   *  is fetching reads as "loading", never as "no data". */
  readonly loading = input(false, { transform: booleanAttribute });
  /** Accessible table name, rendered as a visually-hidden `<caption>`. Set it
   *  when the surrounding context does not already name the table for AT. */
  readonly caption = input<string>();
  /** Makes rows focusable + clickable (emits `rowClick`). */
  readonly clickable = input(false, { transform: booleanAttribute });
  readonly zebra = input(false, { transform: booleanAttribute });
  readonly hover = input(true, { transform: booleanAttribute });
  /**
   * How the table presents itself when its CONTAINER is too narrow.
   *
   * - `scroll` (default) — stay tabular; the body scrolls horizontally.
   * - `cards` — one card per row. The content is the projected `foldRowCard`
   *   template if there is one, otherwise a default label/value card.
   *
   * @see cardsAt for the width that decides.
   */
  readonly narrowLayout = input<"scroll" | "cards">("scroll");

  /** Container width (px) at or below which `cards` takes over. */
  readonly cardsAt = input(CARDS_AT, { transform: numberAttribute });

  /**
   * Chrome around a projected `foldRowCard`.
   *
   * - `shell` (default) — the card wears the library's outline, radius, shadow,
   *   tone rail and selected state, so a consumer supplies content and nothing
   *   else.
   * - `none` — a bare container; the parent takes everything back, including
   *   the selection checkbox. This reproduces what `mobileLayout="custom"`
   *   rendered before the shell existed.
   */
  readonly rowCardChrome = input<"shell" | "none">("shell");

  /**
   * @deprecated Use {@link narrowLayout} plus a projected `foldRowCard`.
   *
   * `custom` was redundant: projecting the template already said everything.
   * `scroll` → the default · `auto-cards` → `narrowLayout="cards"` ·
   * `custom` → `narrowLayout="cards"` + `<ng-template foldRowCard>`.
   * Removed before 1.0.
   */
  readonly mobileLayout = input<"scroll" | "auto-cards" | "custom">("scroll");
  /** Row density — `compact` tightens padding for dense rosters. */
  readonly density = input<"comfortable" | "compact">("comfortable");
  /** Pin the identity column while the body scrolls horizontally (wide tables). */
  readonly stickyFirst = input(false, { transform: booleanAttribute });

  /** Renders the checkbox column + header select-all. */
  readonly selectable = input(false, { transform: booleanAttribute });
  /**
   * Selected row keys, as a **two-way model** — bind `[(selected)]` and the
   * table writes the next set back on any toggle (it never mutates the set in
   * place). One-way `[selected]` stays fully controlled. The one source of
   * selection: there is no separate change output.
   */
  readonly selected = model<ReadonlySet<string | number>>(new Set());
  /** Accessible label for a row's checkbox, e.g. `(row) => row.name`. */
  readonly selectionLabel = input<(row: T) => string>();
  /** Per-instance label overrides (merged over the app-wide / English defaults). */
  readonly labels = input<Partial<FoldDataTableLabels>>();
  /**
   * The open rows, by key. A two-way model, exactly like `selected`: bind
   * `[(expanded)]` and the table writes the next set on every toggle, or bind
   * one-way to stay fully controlled.
   */
  readonly expanded = model<ReadonlySet<string | number>>(new Set());
  /**
   * Whether opening a row closes the others.
   *
   * `single` by default — a drawer is read, not compared, and two open at once
   * push the rest of the list off the screen for no gain. `multi` when the
   * drawers ARE the comparison.
   */
  readonly expandMode = input<"single" | "multi">("single");

  /** Emits the clicked sortable column's `key`. */
  readonly sortChange = output<string>();
  readonly rowClick = output<T>();

  /** Key of the row that currently holds the single tab stop (roving tabindex). */
  private readonly focusedKey = signal<string | number | null>(null);
  /** The table's OWN width — the box that decides, not the window. */
  private readonly width = observeElementWidth();

  /**
   * True while the table's own box is narrow.
   *
   * It used to be `matchMedia("(max-width: 700px)")` — the VIEWPORT — and the
   * mobile CSS repeated the same query. A table in a 480px panel on a 1920px
   * screen stayed an unreadable table; the same table full-width on a tablet
   * became cards for no reason. `_tab-bar.scss` states the rule the library
   * keeps everywhere else: container width is the only axis.
   *
   * Hysteretic via the shared `foldAt`: switching to cards makes the content
   * taller, which can bring a scrollbar in and hand ~15px of width back —
   * enough to cross the threshold again and flip forever.
   */
  protected readonly isNarrow = foldAt(this.width, this.cardsAt);
  private readonly injectedLabels = inject(FOLD_DATA_TABLE_LABELS);

  /** Effective labels — the app-wide (or English) set, with the `labels` input on top. */
  protected readonly l = computed<FoldDataTableLabels>(() => ({
    ...this.injectedLabels,
    ...this.labels(),
  }));

  constructor() {
    // `mobileLayout` is deprecated; say so once, where the author will see it.
    effect(() => {
      if (isDevMode() && this.mobileLayout() !== "scroll") {
        console.warn(
          `[fold-data-table] \`mobileLayout="${this.mobileLayout()}"\` is deprecated. ` +
            `Use narrowLayout="cards"` +
            (this.mobileLayout() === "custom"
              ? " with a projected <ng-template foldRowCard>."
              : ".") +
            " It is removed before 1.0.",
        );
      }
    });

    // Dev guard: `truncate` clips against the column `width`; without one it
    // silently won't truncate. Warn so the misuse surfaces at authoring time.
    effect(() => {
      if (!isDevMode()) {
        return;
      }
      for (const col of this.columns()) {
        if (col.truncate && !col.width) {
          console.warn(
            `[fold-data-table] column "${col.key}" sets truncate but no width; ` +
              `truncation needs a width to clip against.`,
          );
        }
      }
    });
  }

  private readonly cells = contentChildren(FoldDataTableCellDirective);
  private readonly cellMap = computed(() => {
    const map = new Map<string, TemplateRef<unknown>>();
    for (const cell of this.cells()) {
      map.set(cell.foldCell(), cell.template);
    }
    return map;
  });

  private readonly rowDetail = contentChild(FoldDataTableRowDetailDirective);

  /** The drawer template, or `null`. Its PRESENCE is the feature switch. */
  protected readonly rowDetailTemplate = computed<TemplateRef<unknown> | null>(
    () => this.rowDetail()?.template ?? null,
  );

  protected readonly expandable = computed(
    () => this.rowDetailTemplate() !== null,
  );

  /** Stable prefix for the drawer ids the toggles point at with `aria-controls`. */
  private readonly uid = inject(FoldIdService).next("fold-data-table");

  protected detailId(row: T, index: number): string {
    return `${this.uid}-detail-${this.keyOf(row, index)}`;
  }

  protected isRowExpanded(row: T, index: number): boolean {
    return this.expanded().has(this.keyOf(row, index));
  }

  /** Toggles a row's drawer, honouring {@link expandMode}. */
  protected toggleExpand(row: T, index: number): void {
    const key = this.keyOf(row, index);
    const open = this.expanded();
    if (open.has(key)) {
      const next = new Set(open);
      next.delete(key);
      this.expanded.set(next);
      return;
    }
    this.expanded.set(
      this.expandMode() === "single" ? new Set([key]) : new Set(open).add(key),
    );
  }

  private readonly rowCard = contentChild(FoldDataTableRowCardDirective);
  /**
   * True while the narrow CARD layout is what renders — the table is not built
   * at all in that state.
   *
   * `auto-cards` used to be a CSS rewrite of the table: the `<tr>` went
   * `display: block`, its cells `display: flex`, the `<tbody>` `display: flex`.
   * Changing the `display` of a table element **drops its implicit role**, so
   * the table stopped being a table without becoming a list, and the `<thead>`
   * stayed in the tree as orphaned headers. Rendering a real list instead is
   * the fix; there is nothing left to hide.
   */
  protected readonly cardMode = computed(
    () => this.isNarrow() && this.resolvedNarrowLayout() === "cards",
  );

  /** `narrowLayout`, with the deprecated `mobileLayout` folded in. */
  private readonly resolvedNarrowLayout = computed<"scroll" | "cards">(() =>
    this.mobileLayout() === "scroll" ? this.narrowLayout() : "cards",
  );

  /** The column that names the row — `primaryKey`, else the first one. */
  protected readonly identityColumn = computed<FoldTableColumn | null>(() => {
    const cols = this.columns();
    const key = this.primaryKey();
    return cols.find((c) => c.key === key) ?? cols[0] ?? null;
  });

  /**
   * The small line above the identity: the second column, but only when it is
   * a `truncate` one — that flag is how a table says "this is a long, secondary
   * string" (a reference, a path), which is exactly what an overline is for.
   */
  protected readonly overlineColumn = computed<FoldTableColumn | null>(() => {
    const rest = this.columns().filter(
      (c) => c.key !== this.identityColumn()?.key,
    );
    const second = rest[0];
    return second?.truncate === true ? second : null;
  });

  /** Everything else, as label/value pairs. */
  protected readonly gridColumns = computed<readonly FoldTableColumn[]>(() => {
    const skip = new Set(
      [this.identityColumn()?.key, this.overlineColumn()?.key].filter(
        (k): k is string => k !== undefined,
      ),
    );
    return this.columns().filter((c) => !skip.has(c.key));
  });

  /** The custom mobile-card template, only when `mobileLayout="custom"`. */
  readonly rowCardTemplate = computed<TemplateRef<unknown> | null>(
    () => this.rowCard()?.template ?? null,
  );

  /**
   * The toolbar's surface level — the "weight" the title bar lends the table.
   * All four map to fold surface tokens (never a hard-coded colour): `default`
   * (a subtle header lift), `sunken` / `raised` (a step down / up the elevation
   * ramp), and `accent` — a brand-filled bar whose projected content
   * auto-inverts to the on-accent palette per theme (the shared
   * `[data-surface="accent"]` machinery).
   */
  readonly toolbarSurface = input<"default" | "sunken" | "raised" | "accent">(
    "default",
  );

  /** The first column is the identity/primary cell (full-width on mobile). */
  readonly primaryKey = computed(() => this.columns()[0]?.key ?? "");

  /** Total ARIA column count (data columns + the checkbox column). */
  readonly colCount = computed(
    () =>
      this.columns().length +
      (this.selectable() ? 1 : 0) +
      (this.expandable() ? 1 : 0),
  );

  /** Current row keys, in order — the roving-nav anchor set. */
  private readonly rowKeys = computed(() =>
    this.rows().map((row, i) => this.keyOf(row, i)),
  );
  /** The row that holds the single tab stop: the focused row while it still
   *  exists, else the first row — so a removed/filtered focus never strands the
   *  roving group with zero tab stops. */
  private readonly activeRowKey = computed<string | number | null>(() => {
    const focused = this.focusedKey();
    const keys = this.rowKeys();
    if (focused !== null && keys.includes(focused)) {
      return focused;
    }
    return keys[0] ?? null;
  });

  cellTemplate(key: string): TemplateRef<unknown> | null {
    return this.cellMap().get(key) ?? null;
  }

  keyOf(row: T, index: number): string | number {
    return this.rowKey()?.(row, index) ?? index;
  }

  toneOf(row: T): FoldTableTone {
    return this.rowTone()?.(row) ?? null;
  }

  isSorted(key: string): boolean {
    return this.sort()?.key === key;
  }

  /** The sort icon for a column: a neutral up/down (`expand-all`) when idle, or
   *  the active direction chevron. Decorative — `aria-sort` on the `<th>` is the
   *  accessible carrier, so these icons stay `aria-hidden` (fold-icon default). */
  sortIcon(key: string): FoldIconName {
    const sort = this.sort();
    if (sort?.key !== key) {
      return "expand-all";
    }
    return sort.dir === "asc" ? "chevron-up" : "chevron-down";
  }

  ariaSort(key: string): "ascending" | "descending" | "none" {
    const sort = this.sort();
    if (sort?.key !== key) {
      return "none";
    }
    return sort.dir === "asc" ? "ascending" : "descending";
  }

  onRowActivate(row: T): void {
    if (this.clickable()) {
      this.rowClick.emit(row);
    }
  }

  /* ── selection (controlled) ── */

  isRowSelected(row: T, index: number): boolean {
    return this.selected().has(this.keyOf(row, index));
  }

  /** All current rows selected (drives the header checkbox `checked`). */
  readonly allSelected = computed(
    () =>
      this.rows().length > 0 &&
      this.rows().every((row, i) => this.selected().has(this.keyOf(row, i))),
  );

  /** Some — but not all — current rows selected (header `indeterminate`). */
  readonly someSelected = computed(
    () =>
      !this.allSelected() &&
      this.rows().some((row, i) => this.selected().has(this.keyOf(row, i))),
  );

  toggleRow(row: T, index: number): void {
    const next = new Set(this.selected());
    const key = this.keyOf(row, index);
    if (next.has(key)) {
      next.delete(key);
    } else {
      next.add(key);
    }
    this.selected.set(next);
  }

  /** Select-all toggles every current row; if all are already in, clears them. */
  toggleAll(): void {
    const next = new Set(this.selected());
    const select = !this.allSelected();
    this.rows().forEach((row, i) => {
      const key = this.keyOf(row, i);
      if (select) {
        next.add(key);
      } else {
        next.delete(key);
      }
    });
    this.selected.set(next);
  }

  labelFor(row: T): string {
    return this.selectionLabel()?.(row) ?? this.l().selectRow;
  }

  /* ── roving-tabindex keyboard navigation over clickable rows ── */

  /** The single tab stop: the focused (or fallback first) row. */
  rowTabIndex(row: T, index: number): 0 | -1 | null {
    if (!this.clickable()) {
      return null;
    }
    const active = this.activeRowKey();
    return active !== null && this.keyOf(row, index) === active ? 0 : -1;
  }

  onRowFocus(row: T, index: number): void {
    this.focusedKey.set(this.keyOf(row, index));
  }

  onRowKeydown(event: KeyboardEvent, row: T): void {
    // Only when the row itself holds focus — never when the key bubbled up from
    // an inner control (a link, a button, the selection checkbox), which owns it.
    if (event.target !== event.currentTarget) {
      return;
    }
    switch (event.key) {
      case "Enter":
        this.onRowActivate(row);
        break;
      case " ":
        this.onRowActivate(row);
        event.preventDefault();
        break;
      case "ArrowDown":
        focusAdjacentRow(event.currentTarget, "nextElementSibling");
        event.preventDefault();
        break;
      case "ArrowUp":
        focusAdjacentRow(event.currentTarget, "previousElementSibling");
        event.preventDefault();
        break;
      case "Home":
        focusEdgeRow(event.currentTarget, "firstElementChild");
        event.preventDefault();
        break;
      case "End":
        focusEdgeRow(event.currentTarget, "lastElementChild");
        event.preventDefault();
        break;
      default:
        break;
    }
  }
}
