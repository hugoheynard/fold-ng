import { TestBed } from "@angular/core/testing";
import { describe, it, expect, vi } from "vitest";
import { Sh3PaginatorComponent } from "./paginator.component";

function create(props: {
  currentPage: number;
  pageSize: number;
  totalItems: number;
  siblingCount?: number;
  disabled?: boolean;
}) {
  const fixture = TestBed.createComponent(Sh3PaginatorComponent);
  const ref = fixture.componentRef;
  ref.setInput("currentPage", props.currentPage);
  ref.setInput("pageSize", props.pageSize);
  ref.setInput("totalItems", props.totalItems);
  if (props.siblingCount !== undefined) {
    ref.setInput("siblingCount", props.siblingCount);
  }
  if (props.disabled !== undefined) {
    ref.setInput("disabled", props.disabled);
  }
  fixture.detectChanges();
  return { fixture, component: fixture.componentInstance };
}

const pageList = (c: Sh3PaginatorComponent) =>
  c.pageItems().map((i) => (i.kind === "page" ? i.page : "…"));

describe("Sh3PaginatorComponent", () => {
  it("computes totalPages, clamping to 1 when empty", () => {
    expect(
      create({
        currentPage: 1,
        pageSize: 10,
        totalItems: 237,
      }).component.totalPages(),
    ).toBe(24);
    expect(
      create({
        currentPage: 1,
        pageSize: 10,
        totalItems: 0,
      }).component.totalPages(),
    ).toBe(1);
  });

  it("computes the visible item range, clamped on the last page + zeroed when empty", () => {
    const mid = create({
      currentPage: 3,
      pageSize: 10,
      totalItems: 237,
    }).component;
    expect([mid.rangeStart(), mid.rangeEnd()]).toEqual([21, 30]);
    const last = create({
      currentPage: 24,
      pageSize: 10,
      totalItems: 237,
    }).component;
    expect([last.rangeStart(), last.rangeEnd()]).toEqual([231, 237]);
    const empty = create({
      currentPage: 1,
      pageSize: 10,
      totalItems: 0,
    }).component;
    expect([empty.rangeStart(), empty.rangeEnd()]).toEqual([0, 0]);
  });

  it("guards prev/next at the edges and when disabled", () => {
    const first = create({
      currentPage: 1,
      pageSize: 10,
      totalItems: 100,
    }).component;
    expect([first.canGoPrev(), first.canGoNext()]).toEqual([false, true]);
    const last = create({
      currentPage: 10,
      pageSize: 10,
      totalItems: 100,
    }).component;
    expect([last.canGoPrev(), last.canGoNext()]).toEqual([true, false]);
    const off = create({
      currentPage: 5,
      pageSize: 10,
      totalItems: 100,
      disabled: true,
    }).component;
    expect([off.canGoPrev(), off.canGoNext()]).toEqual([false, false]);
  });

  it("builds the ellipsis sequence for each current-page position", () => {
    expect(
      pageList(
        create({ currentPage: 1, pageSize: 10, totalItems: 50 }).component,
      ),
    ).toEqual([1, 2, 3, 4, 5]);
    expect(
      pageList(
        create({ currentPage: 1, pageSize: 10, totalItems: 100 }).component,
      ),
    ).toEqual([1, 2, "…", 10]);
    expect(
      pageList(
        create({ currentPage: 5, pageSize: 10, totalItems: 100 }).component,
      ),
    ).toEqual([1, "…", 4, 5, 6, "…", 10]);
    expect(
      pageList(
        create({ currentPage: 10, pageSize: 10, totalItems: 100 }).component,
      ),
    ).toEqual([1, "…", 9, 10]);
  });

  it("emits pageChange only on a real move, clamped to range, never when disabled", () => {
    const { component } = create({
      currentPage: 5,
      pageSize: 10,
      totalItems: 100,
    });
    const spy = vi.fn();
    component.pageChange.subscribe(spy);
    component.goToPage(5); // same page → no emit
    component.goToPage(999); // clamp → 10
    component.goToPage(-7); // clamp → 1
    expect(spy.mock.calls).toEqual([[10], [1]]);

    const off = create({
      currentPage: 5,
      pageSize: 10,
      totalItems: 100,
      disabled: true,
    }).component;
    const offSpy = vi.fn();
    off.pageChange.subscribe(offSpy);
    off.goToPage(6);
    off.prev();
    off.next();
    expect(offSpy).not.toHaveBeenCalled();
  });

  it("emits pageSizeChange for a valid change only", () => {
    const { component } = create({
      currentPage: 1,
      pageSize: 10,
      totalItems: 100,
    });
    const spy = vi.fn();
    component.pageSizeChange.subscribe(spy);
    component.onPageSizeChange("25");
    component.onPageSizeChange("not-a-number");
    component.onPageSizeChange("0");
    component.onPageSizeChange("10"); // unchanged
    expect(spy.mock.calls).toEqual([[25]]);
  });

  it("renders nav chevrons + a button per page item", () => {
    const { fixture } = create({
      currentPage: 1,
      pageSize: 10,
      totalItems: 100,
    });
    const host = fixture.nativeElement as HTMLElement;
    expect(host.querySelectorAll("sh3-icon").length).toBe(2);
    expect(host.querySelector(".page-btn.is-active")?.textContent?.trim()).toBe(
      "1",
    );
  });
});
