import {
  Component,
  type TemplateRef,
  booleanAttribute,
  computed,
  contentChild,
  contentChildren,
  input,
  output,
  signal,
} from "@angular/core";
import { NgClass, NgTemplateOutlet } from "@angular/common";
import { FoldDataTableCellDirective } from "./data-table-cell.directive";
import { FoldDataTableRowCardDirective } from "./data-table-row-card.directive";
import { FoldIconComponent } from "../../foundations/icon/icon.component";
import { FoldSpinnerComponent } from "../../foundations/spinner/spinner.component";
import type { FoldIconName } from "../../foundations/icon/builtin-icons";
import type {
  FoldTableColumn,
  FoldTableEmpty,
  FoldTableSort,
  FoldTableTone,
} from "./data-table.types";

/**
 * `fold-data-table` — a controlled, presentational roster table. The parent
 * supplies already-paged/sorted `rows`, a `columns` definition, and a
 * `<ng-template foldCell="<key>">` per column for the cell content; the table
 * owns the chrome (sticky sortable header, row tone accents, focus/click, the
 * mobile card layout, the loading + empty states).
 *
 * Selection stays controlled too: pass a `selected` set of row keys and handle
 * `selectionChange` — the table renders the checkbox column, the header
 * select-all (with an indeterminate state over the current rows), and the
 * selected-row tint, but never owns the set.
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
  imports: [NgClass, NgTemplateOutlet, FoldIconComponent, FoldSpinnerComponent],
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
   * How the table behaves on a narrow screen:
   * - `scroll` (default) — stay tabular; the body scrolls horizontally. The
   *   table imposes no card layout unless asked.
   * - `auto-cards` — each row stacks into an auto label/value card.
   * - `custom` — hide the table and render the projected `foldRowCard` template
   *   per row, so the parent owns the mobile presentation.
   */
  readonly mobileLayout = input<"scroll" | "auto-cards" | "custom">("scroll");
  /** Row density — `compact` tightens padding for dense rosters. */
  readonly density = input<"comfortable" | "compact">("comfortable");
  /** Pin the identity column while the body scrolls horizontally (wide tables). */
  readonly stickyFirst = input(false, { transform: booleanAttribute });

  /** Renders the checkbox column + header select-all. */
  readonly selectable = input(false, { transform: booleanAttribute });
  /** Controlled selection — the set of selected row keys. The parent owns it. */
  readonly selected = input<ReadonlySet<string | number>>(new Set());
  /** Accessible label for a row's checkbox, e.g. `(row) => row.name`. */
  readonly selectionLabel = input<(row: T) => string>();

  /** Emits the next selection set on any checkbox toggle (never mutates input). */
  readonly selectionChange = output<Set<string | number>>();
  /** Emits the clicked sortable column's `key`. */
  readonly sortChange = output<string>();
  readonly rowClick = output<T>();

  /** Key of the row that currently holds the single tab stop (roving tabindex). */
  private readonly focusedKey = signal<string | number | null>(null);

  private readonly cells = contentChildren(FoldDataTableCellDirective);
  private readonly cellMap = computed(() => {
    const map = new Map<string, TemplateRef<unknown>>();
    for (const cell of this.cells()) {
      map.set(cell.foldCell(), cell.template);
    }
    return map;
  });

  private readonly rowCard = contentChild(FoldDataTableRowCardDirective);
  /** The custom mobile-card template, only when `mobileLayout="custom"`. */
  readonly rowCardTemplate = computed<TemplateRef<unknown> | null>(() =>
    this.mobileLayout() === "custom"
      ? (this.rowCard()?.template ?? null)
      : null,
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
    this.selectionChange.emit(next);
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
    this.selectionChange.emit(next);
  }

  labelFor(row: T): string | null {
    return this.selectionLabel()?.(row) ?? null;
  }

  /* ── roving-tabindex keyboard navigation over clickable rows ── */

  /** The single tab stop: the focused row, else the first row. */
  rowTabIndex(row: T, index: number): 0 | -1 | null {
    if (!this.clickable()) {
      return null;
    }
    const first = this.rows()[0];
    if (first === undefined) {
      return -1;
    }
    const active = this.focusedKey() ?? this.keyOf(first, 0);
    return this.keyOf(row, index) === active ? 0 : -1;
  }

  onRowFocus(row: T, index: number): void {
    this.focusedKey.set(this.keyOf(row, index));
  }

  onRowKeydown(event: KeyboardEvent, row: T): void {
    switch (event.key) {
      case "Enter":
        this.onRowActivate(row);
        break;
      case " ":
        this.onRowActivate(row);
        event.preventDefault();
        break;
      case "ArrowDown":
        this.focusRow(event.currentTarget, "nextElementSibling");
        event.preventDefault();
        break;
      case "ArrowUp":
        this.focusRow(event.currentTarget, "previousElementSibling");
        event.preventDefault();
        break;
      case "Home":
        this.focusEdgeRow(event.currentTarget, "firstElementChild");
        event.preventDefault();
        break;
      case "End":
        this.focusEdgeRow(event.currentTarget, "lastElementChild");
        event.preventDefault();
        break;
      default:
        break;
    }
  }

  private focusRow(
    from: EventTarget | null,
    edge: "nextElementSibling" | "previousElementSibling",
  ): void {
    if (!(from instanceof Element)) {
      return;
    }
    const sibling = from[edge];
    if (sibling instanceof HTMLElement) {
      sibling.focus();
    }
  }

  private focusEdgeRow(
    from: EventTarget | null,
    edge: "firstElementChild" | "lastElementChild",
  ): void {
    if (!(from instanceof Element)) {
      return;
    }
    const target = from.parentElement?.[edge];
    if (target instanceof HTMLElement) {
      target.focus();
    }
  }
}
