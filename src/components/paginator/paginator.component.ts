import { Component, computed, input, output } from "@angular/core";
import { Sh3IconComponent } from "../icon/icon.component";

/**
 * Item representing one slot in the page navigation bar.
 * Either a concrete page number (1-indexed) or an ellipsis gap.
 */
export type Sh3PageItem = { kind: "page"; page: number } | { kind: "gap" };

/**
 * `sh3-paginator` — presentational, fully controlled.
 *
 * Designed for **server-side pagination** (offset/limit): the parent owns
 * `currentPage`, `pageSize` and `totalItems`, fires the HTTP call on
 * `(pageChange)` / `(pageSizeChange)`, then feeds the new values back in.
 *
 * Renders: `[page size selector] [items range] [‹ 1 2 3 … N ›]`.
 *
 * @example
 * ```html
 * <sh3-paginator
 *   [currentPage]="page()"
 *   [pageSize]="size()"
 *   [totalItems]="total()"
 *   (pageChange)="loadPage($event)"
 *   (pageSizeChange)="changeSize($event)" />
 * ```
 */
@Component({
  selector: "sh3-paginator",
  standalone: true,
  imports: [Sh3IconComponent],
  template: `
    @let options = pageSizeOptions();

    <div class="paginator-left">
      @if (options.length > 0) {
        <label class="page-size">
          <select
            #pageSizeSelect
            class="page-size__select"
            [value]="pageSize()"
            [disabled]="disabled()"
            (change)="onPageSizeChange(pageSizeSelect.value)"
            aria-label="Éléments par page"
          >
            @for (opt of options; track opt) {
              <option [value]="opt">{{ opt }}</option>
            }
          </select>
          <span class="page-size__label">par page</span>
        </label>
      }

      @if (totalItems() > 0) {
        <span class="range"
          >{{ rangeStart() }}–{{ rangeEnd() }} sur {{ totalItems() }}</span
        >
      } @else {
        <span class="range range--empty">Aucun élément</span>
      }
    </div>

    <nav class="pages" aria-label="Pagination">
      <button
        type="button"
        class="nav-btn"
        [disabled]="!canGoPrev()"
        (click)="prev()"
        aria-label="Page précédente"
      >
        <sh3-icon name="chevron-left" [size]="15" />
      </button>

      @for (item of pageItems(); track $index) {
        @if (item.kind === "page") {
          <button
            type="button"
            class="page-btn"
            [class.is-active]="item.page === currentPage()"
            [attr.aria-current]="item.page === currentPage() ? 'page' : null"
            [attr.aria-label]="'Page ' + item.page"
            [disabled]="disabled()"
            (click)="goToPage(item.page)"
          >
            {{ item.page }}
          </button>
        } @else {
          <span class="gap" aria-hidden="true">…</span>
        }
      }

      <button
        type="button"
        class="nav-btn"
        [disabled]="!canGoNext()"
        (click)="next()"
        aria-label="Page suivante"
      >
        <sh3-icon name="chevron-right" [size]="15" />
      </button>
    </nav>
  `,
  styleUrl: "./paginator.component.css",
})
export class Sh3PaginatorComponent {
  /** 1-indexed current page. */
  readonly currentPage = input.required<number>();

  /** Total number of items across all pages (drives `totalPages` + range label). */
  readonly totalItems = input.required<number>();

  /** Number of items per page. Must be > 0. */
  readonly pageSize = input.required<number>();

  /** Selectable page sizes. Set `[]` to hide the size selector entirely. */
  readonly pageSizeOptions = input<readonly number[]>([10, 25, 50, 100]);

  /**
   * How many page buttons to render on each side of the current page
   * between the first/last anchors. Example with `siblingCount: 1`:
   * `1 … 4 [5] 6 … 10`.
   * @default 1
   */
  readonly siblingCount = input<number>(1);

  /** Disables all controls (both page nav and size selector). */
  readonly disabled = input<boolean>(false);

  /** Fires with the new 1-indexed page number. */
  readonly pageChange = output<number>();

  /** Fires with the newly selected page size. */
  readonly pageSizeChange = output<number>();

  // ─── Derived state ────────────────────────────────────────────

  /** Total pages, minimum 1 so the UI always shows at least "1 of 1". */
  readonly totalPages = computed<number>(() => {
    const size = this.pageSize();
    const total = this.totalItems();
    if (size <= 0 || total <= 0) {
      return 1;
    }
    return Math.ceil(total / size);
  });

  /** Zero-indexed start / end of the currently visible range (for the label). */
  readonly rangeStart = computed<number>(() => {
    if (this.totalItems() === 0) {
      return 0;
    }
    return (this.currentPage() - 1) * this.pageSize() + 1;
  });

  readonly rangeEnd = computed<number>(() =>
    Math.min(this.currentPage() * this.pageSize(), this.totalItems()),
  );

  readonly canGoPrev = computed<boolean>(
    () => !this.disabled() && this.currentPage() > 1,
  );
  readonly canGoNext = computed<boolean>(
    () => !this.disabled() && this.currentPage() < this.totalPages(),
  );

  /**
   * Page buttons to render, with ellipsis gaps.
   *
   * Algorithm: always render page 1 and page N; render `siblingCount`
   * pages on each side of the current page; insert a single `gap` between
   * any two non-contiguous blocks.
   */
  readonly pageItems = computed<Sh3PageItem[]>(() => {
    const total = this.totalPages();
    const current = this.currentPage();
    const sibs = Math.max(0, this.siblingCount());

    // Small enough to show every page — no ellipsis needed.
    // `5 + 2*sibs` = first + last + current + 2*sibs around current + 2 gap slots.
    if (total <= 5 + 2 * sibs) {
      return Array.from({ length: total }, (_, i) => ({
        kind: "page" as const,
        page: i + 1,
      }));
    }

    const leftSibling = Math.max(current - sibs, 2);
    const rightSibling = Math.min(current + sibs, total - 1);

    const showLeftGap = leftSibling > 2;
    const showRightGap = rightSibling < total - 1;

    const items: Sh3PageItem[] = [{ kind: "page", page: 1 }];

    if (showLeftGap) {
      items.push({ kind: "gap" });
    }

    for (let p = leftSibling; p <= rightSibling; p++) {
      items.push({ kind: "page", page: p });
    }

    if (showRightGap) {
      items.push({ kind: "gap" });
    }

    items.push({ kind: "page", page: total });
    return items;
  });

  // ─── Handlers ─────────────────────────────────────────────────

  goToPage(page: number): void {
    if (this.disabled()) {
      return;
    }
    const clamped = Math.max(1, Math.min(page, this.totalPages()));
    if (clamped === this.currentPage()) {
      return;
    }
    this.pageChange.emit(clamped);
  }

  prev(): void {
    if (this.canGoPrev()) {
      this.goToPage(this.currentPage() - 1);
    }
  }

  next(): void {
    if (this.canGoNext()) {
      this.goToPage(this.currentPage() + 1);
    }
  }

  onPageSizeChange(raw: string): void {
    const size = Number(raw);
    if (Number.isFinite(size) && size > 0 && size !== this.pageSize()) {
      this.pageSizeChange.emit(size);
    }
  }
}
