import {
  Component,
  type TemplateRef,
  booleanAttribute,
  computed,
  contentChildren,
  input,
  output,
} from "@angular/core";
import { NgClass, NgTemplateOutlet } from "@angular/common";
import { FoldDataTableCellDirective } from "./data-table-cell.directive";
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
 * mobile card layout, the empty state).
 *
 * Generic over the row type `T` so `rowKey`/`rowTone`/`rowClick` stay typed.
 * Cell templates are untyped (`let-row` is `any`) — render through the parent's
 * typed helpers.
 */
@Component({
  selector: "fold-data-table",
  standalone: true,
  imports: [NgClass, NgTemplateOutlet],
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
  /** Makes rows focusable + clickable (emits `rowClick`). */
  readonly clickable = input(false, { transform: booleanAttribute });
  readonly zebra = input(false, { transform: booleanAttribute });
  readonly hover = input(true, { transform: booleanAttribute });
  readonly mobileCards = input(true, { transform: booleanAttribute });

  /** Emits the clicked sortable column's `key`. */
  readonly sortChange = output<string>();
  readonly rowClick = output<T>();

  private readonly cells = contentChildren(FoldDataTableCellDirective);
  private readonly cellMap = computed(() => {
    const map = new Map<string, TemplateRef<unknown>>();
    for (const cell of this.cells()) {
      map.set(cell.foldCell(), cell.template);
    }
    return map;
  });

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

  /** The sort glyph for a column: neutral `↕`, or the active direction. */
  sortArrow(key: string): string {
    const sort = this.sort();
    if (sort?.key !== key) {
      return "↕";
    }
    return sort.dir === "asc" ? "↑" : "↓";
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
}
