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
import { Sh3DataTableCellDirective } from "./data-table-cell.directive";
import type {
  Sh3TableColumn,
  Sh3TableEmpty,
  Sh3TableSort,
  Sh3TableTone,
} from "./data-table.types";

/**
 * `sh3-data-table` — a controlled, presentational roster table. The parent
 * supplies already-paged/sorted `rows`, a `columns` definition, and a
 * `<ng-template sh3Cell="<key>">` per column for the cell content; the table
 * owns the chrome (sticky sortable header, row tone accents, focus/click, the
 * mobile card layout, the empty state).
 *
 * Generic over the row type `T` so `rowKey`/`rowTone`/`rowClick` stay typed.
 * Cell templates are untyped (`let-row` is `any`) — render through the parent's
 * typed helpers.
 */
@Component({
  selector: "sh3-data-table",
  standalone: true,
  imports: [NgClass, NgTemplateOutlet],
  template: `
    <div
      class="sh3dt-wrap"
      [class.sh3dt--zebra]="zebra()"
      [class.sh3dt--hover]="hover()"
      [class.sh3dt--cards]="mobileCards()"
    >
      <table class="sh3dt">
        <thead>
          <tr>
            @for (col of columns(); track col.key) {
              <th
                scope="col"
                [style.width]="col.width || null"
                [attr.aria-sort]="col.sortable ? ariaSort(col.key) : null"
              >
                @if (col.sortable) {
                  <button
                    type="button"
                    class="sh3dt-th-sort"
                    [class.right]="col.align === 'right'"
                    (click)="sortChange.emit(col.key)"
                  >
                    <span>{{ col.label }}</span>
                    <span class="sh3dt-arrow" [class.on]="isSorted(col.key)">{{
                      sortArrow(col.key)
                    }}</span>
                  </button>
                } @else {
                  <span
                    class="sh3dt-th-plain"
                    [class.right]="col.align === 'right'"
                    >{{ col.label }}</span
                  >
                }
              </th>
            }
          </tr>
        </thead>
        <tbody>
          @for (row of rows(); track keyOf(row, $index); let i = $index) {
            @let tone = toneOf(row);
            <tr
              class="sh3dt-row"
              [class.tone-warning]="tone === 'warning'"
              [class.tone-alert]="tone === 'alert'"
              [class.tone-success]="tone === 'success'"
              [class.clickable]="clickable()"
              [attr.tabindex]="clickable() ? 0 : null"
              (click)="onRowActivate(row)"
              (keydown.enter)="onRowActivate(row)"
            >
              @for (col of columns(); track col.key) {
                <td
                  class="sh3dt-cell"
                  [class.is-primary]="col.key === primaryKey()"
                  [class.right]="col.align === 'right'"
                  [ngClass]="col.cellClass || ''"
                  [attr.data-label]="col.label"
                >
                  @if (cellTemplate(col.key); as tpl) {
                    <ng-container
                      [ngTemplateOutlet]="tpl"
                      [ngTemplateOutletContext]="{ $implicit: row, index: i }"
                    />
                  }
                </td>
              }
            </tr>
          }
        </tbody>
      </table>

      @if (rows().length === 0 && empty(); as e) {
        <div class="sh3dt-empty">
          <div class="sh3dt-empty-t">{{ e.title }}</div>
          @if (e.subtitle) {
            <div class="sh3dt-empty-s">{{ e.subtitle }}</div>
          }
        </div>
      }
    </div>
  `,
  styleUrl: "./data-table.component.css",
})
export class Sh3DataTableComponent<T> {
  readonly columns = input.required<readonly Sh3TableColumn[]>();
  readonly rows = input.required<readonly T[]>();
  /** Stable row identity — defaults to the row index. */
  readonly rowKey = input<(row: T, index: number) => string | number>();
  /** Optional per-row semantic tone (left accent + tint). */
  readonly rowTone = input<(row: T) => Sh3TableTone>();
  readonly sort = input<Sh3TableSort | null>(null);
  readonly empty = input<Sh3TableEmpty>();
  /** Makes rows focusable + clickable (emits `rowClick`). */
  readonly clickable = input(false, { transform: booleanAttribute });
  readonly zebra = input(false, { transform: booleanAttribute });
  readonly hover = input(true, { transform: booleanAttribute });
  readonly mobileCards = input(true, { transform: booleanAttribute });

  /** Emits the clicked sortable column's `key`. */
  readonly sortChange = output<string>();
  readonly rowClick = output<T>();

  private readonly cells = contentChildren(Sh3DataTableCellDirective);
  private readonly cellMap = computed(() => {
    const map = new Map<string, TemplateRef<unknown>>();
    for (const cell of this.cells()) {
      map.set(cell.sh3Cell(), cell.template);
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

  toneOf(row: T): Sh3TableTone {
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
