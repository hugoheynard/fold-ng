import { Component, computed, signal } from "@angular/core";
import { KindBadgeComponent } from "../../components/kind-badge.component";
import { DevPlaygroundComponent } from "../../components/playground.component";
import {
  FoldCardComponent,
  FoldPageLayoutComponent,
  FoldPaginatorComponent,
} from "../../../src/public-api";

/** `/paginator` — the `fold-paginator` gallery page (controlled loop + playground). */
@Component({
  selector: "gal-paginator-page",
  standalone: true,
  imports: [
    KindBadgeComponent,
    DevPlaygroundComponent,
    FoldPageLayoutComponent,
    FoldCardComponent,
    FoldPaginatorComponent,
  ],
  templateUrl: "./paginator.page.html",
})
export default class PaginatorPage {
  /* ── live controlled loop ── */
  protected readonly page = signal(1);
  protected readonly size = signal(10);
  protected readonly total = 237;

  protected onPage(p: number): void {
    this.page.set(p);
  }
  protected onSize(s: number): void {
    this.size.set(s);
    // Keep the current page in range when the size shrinks the page count.
    const pages = Math.max(1, Math.ceil(this.total / s));
    if (this.page() > pages) {
      this.page.set(pages);
    }
  }

  /* ── playground ── */
  protected readonly pgTotal = signal(237);
  protected readonly pgSize = signal(10);
  protected readonly pgPage = signal(5);
  protected readonly pgSiblings = signal(1);
  protected readonly pgDisabled = signal(false);

  protected pgOnPage(p: number): void {
    this.pgPage.set(p);
  }

  protected readonly playgroundCode = computed(() => {
    const lines = [
      "<fold-paginator",
      '  [currentPage]="page()"',
      '  [pageSize]="size()"',
      `  [totalItems]="${this.pgTotal()}"`,
    ];
    if (this.pgSiblings() !== 1) {
      lines.push(`  [siblingCount]="${this.pgSiblings()}"`);
    }
    if (this.pgDisabled()) {
      lines.push("  disabled");
    }
    lines.push(
      '  (pageChange)="page.set($event)"',
      '  (pageSizeChange)="size.set($event)" />',
    );
    return lines.join("\n");
  });
}
