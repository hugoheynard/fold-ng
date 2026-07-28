import {
  afterRenderEffect,
  booleanAttribute,
  Component,
  computed,
  ElementRef,
  inject,
  input,
  output,
} from "@angular/core";
import { FoldIconComponent } from "../../foundations/icon/icon.component";
import {
  FOLD_PAGINATOR_LABELS,
  type FoldPaginatorLabels,
} from "./paginator-labels";

/**
 * Item representing one slot in the page navigation bar.
 * Either a concrete page number (1-indexed) or an ellipsis gap.
 */
export type FoldPageItem = { kind: "page"; page: number } | { kind: "gap" };

/** Which control a page change should refocus after the parent re-renders. */
type RefocusTarget = "active" | "prev" | "next";

/**
 * `fold-paginator` — presentational, fully controlled.
 *
 * Designed for **server-side pagination** (offset/limit): the parent owns
 * `currentPage`, `pageSize` and `totalItems`, fires the HTTP call on
 * `(pageChange)` / `(pageSizeChange)`, then feeds the new values back in. The
 * component tolerates a lagging or out-of-range `currentPage` — the visible
 * range, the active button and the prev/next guards all use an internally
 * clamped page, so a stale value can never render a nonsensical range.
 *
 * Renders: `[page size selector] [items range] [‹ 1 2 3 … N ›]`.
 *
 * **Accessible:** the `<nav>`, both arrows, each page (`aria-current="page"` on
 * the active one) and the size selector carry labels, all overridable for i18n
 * via {@link provideFoldPaginatorLabels} (English by default) or the `labels`
 * input. After a page change it moves focus to the control the user was on (the
 * active page, or the prev/next arrow while it stays enabled) so keyboard focus
 * is never dropped to `<body>`.
 *
 * @selector `fold-paginator`
 *
 * @example
 * ```html
 * <fold-paginator
 *   [currentPage]="page()"
 *   [pageSize]="size()"
 *   [totalItems]="total()"
 *   (pageChange)="loadPage($event)"
 *   (pageSizeChange)="changeSize($event)" />
 * ```
 */
@Component({
  selector: "fold-paginator",
  standalone: true,
  imports: [FoldIconComponent],
  templateUrl: "./paginator.component.html",
  styleUrl: "./paginator.component.scss",
})
export class FoldPaginatorComponent {
  /** 1-indexed current page. */
  readonly currentPage = input.required<number>();

  /** Total number of items across all pages (drives `totalPages` + range label). */
  readonly totalItems = input.required<number>();

  /**
   * Number of items per page (must be > 0). Optional: when omitted, the first
   * of {@link pageSizeOptions} is used, so the common case only needs
   * `currentPage` + `totalItems`. Everything visible derives from the effective
   * size, so a control-it-later parent stays consistent.
   */
  readonly pageSize = input<number>();

  /** Selectable page sizes. Set `[]` to hide the size selector entirely. */
  readonly pageSizeOptions = input<readonly number[]>([10, 25, 50, 100]);

  /** The size actually in effect: the `pageSize` input, else the first option. */
  readonly effectivePageSize = computed<number>(() => {
    const size = this.pageSize();
    if (size !== undefined && size > 0) {
      return size;
    }
    return this.pageSizeOptions()[0] ?? 10;
  });

  /**
   * How many page buttons to render on each side of the current page
   * between the first/last anchors. Example with `siblingCount: 1`:
   * `1 … 4 [5] 6 … 10`.
   * @default 1
   */
  readonly siblingCount = input<number>(1);

  /** Disables all controls (both page nav and size selector). */
  readonly disabled = input(false, { transform: booleanAttribute });

  /** Per-instance label overrides (merged over the app-wide / English defaults). */
  readonly labels = input<Partial<FoldPaginatorLabels>>();

  /** Fires with the new 1-indexed page number. */
  readonly pageChange = output<number>();

  /** Fires with the newly selected page size. */
  readonly pageSizeChange = output<number>();

  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly injectedLabels = inject(FOLD_PAGINATOR_LABELS);

  /** Effective labels — the app-wide (or English) set, with the `labels` input on top. */
  readonly l = computed<FoldPaginatorLabels>(() => ({
    ...this.injectedLabels,
    ...this.labels(),
  }));

  // ─── Derived state ────────────────────────────────────────────

  /** Total pages, minimum 1 so the UI always shows at least "1 of 1". */
  readonly totalPages = computed<number>(() => {
    const size = this.effectivePageSize();
    const total = this.totalItems();
    if (size <= 0 || total <= 0) {
      return 1;
    }
    return Math.ceil(total / size);
  });

  /** The current page clamped into `[1, totalPages]` — the value everything
   *  visible derives from, so a lagging/out-of-range parent never shows a
   *  broken range or highlights a phantom page. */
  readonly page = computed<number>(() =>
    Math.min(Math.max(this.currentPage(), 1), this.totalPages()),
  );

  /** Sanitised sibling count — a non-negative integer. */
  private readonly siblings = computed<number>(() =>
    Math.max(0, Math.floor(this.siblingCount())),
  );

  /** The rendered size options, always including the current `pageSize` (so the
   *  `<select>` can never silently show a value the parent isn't using). */
  readonly sizeOptions = computed<readonly number[]>(() => {
    const opts = this.pageSizeOptions();
    const size = this.effectivePageSize();
    if (opts.includes(size)) {
      return opts;
    }
    return [...opts, size].sort((a, b) => a - b);
  });

  /** Zero-indexed start / end of the currently visible range (for the label). */
  readonly rangeStart = computed<number>(() => {
    if (this.totalItems() === 0) {
      return 0;
    }
    return (this.page() - 1) * this.effectivePageSize() + 1;
  });

  readonly rangeEnd = computed<number>(() =>
    Math.min(this.page() * this.effectivePageSize(), this.totalItems()),
  );

  readonly canGoPrev = computed<boolean>(
    () => !this.disabled() && this.page() > 1,
  );
  readonly canGoNext = computed<boolean>(
    () => !this.disabled() && this.page() < this.totalPages(),
  );

  /**
   * Page buttons to render, with ellipsis gaps.
   *
   * Algorithm: always render page 1 and page N; render `siblingCount`
   * pages on each side of the current page; insert a single `gap` between
   * any two non-contiguous blocks.
   */
  readonly pageItems = computed<FoldPageItem[]>(() => {
    const total = this.totalPages();
    const current = this.page();
    const sibs = this.siblings();

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

    const items: FoldPageItem[] = [{ kind: "page", page: 1 }];

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

  // ─── Focus management (keep keyboard focus after a page change) ─

  private refocus: RefocusTarget | null = null;
  private lastFocusedPage = -1;

  constructor() {
    // Browser-only, runs after the DOM reflects the new page. When a page
    // change originated from a click here, move focus to the control the user
    // was on so it is never dropped to <body>.
    afterRenderEffect(() => {
      const page = this.page();
      if (this.refocus !== null && page !== this.lastFocusedPage) {
        this.applyRefocus(this.refocus);
        this.refocus = null;
      }
      this.lastFocusedPage = page;
    });
  }

  private applyRefocus(target: RefocusTarget): void {
    const root = this.host.nativeElement;
    const active = root.querySelector<HTMLElement>(".page-btn.is-active");
    let el: HTMLElement | null = active;
    if (target === "prev" && this.canGoPrev()) {
      el = root.querySelector<HTMLElement>(".nav-btn--prev");
    } else if (target === "next" && this.canGoNext()) {
      el = root.querySelector<HTMLElement>(".nav-btn--next");
    }
    el?.focus();
  }

  // ─── Handlers ─────────────────────────────────────────────────

  goToPage(page: number, via: RefocusTarget = "active"): void {
    if (this.disabled()) {
      return;
    }
    const clamped = Math.max(1, Math.min(page, this.totalPages()));
    if (clamped === this.page()) {
      return;
    }
    this.refocus = via;
    this.pageChange.emit(clamped);
  }

  prev(): void {
    if (this.canGoPrev()) {
      this.goToPage(this.page() - 1, "prev");
    }
  }

  next(): void {
    if (this.canGoNext()) {
      this.goToPage(this.page() + 1, "next");
    }
  }

  onPageSizeChange(raw: string): void {
    const size = Number(raw);
    if (
      Number.isFinite(size) &&
      size > 0 &&
      size !== this.effectivePageSize()
    ) {
      this.pageSizeChange.emit(size);
    }
  }
}
