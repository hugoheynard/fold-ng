import { TestBed, type ComponentFixture } from "@angular/core/testing";
import { describe, it, expect, vi, afterEach } from "vitest";
import { FoldPaginatorComponent } from "./paginator.component";
import { provideFoldPaginatorLabels } from "./paginator-labels";

function create(props: {
  currentPage: number;
  pageSize: number;
  totalItems: number;
  siblingCount?: number;
  disabled?: boolean;
  pageSizeOptions?: readonly number[];
  attach?: boolean;
}): {
  fixture: ComponentFixture<FoldPaginatorComponent>;
  component: FoldPaginatorComponent;
  el: HTMLElement;
} {
  const fixture = TestBed.createComponent(FoldPaginatorComponent);
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
  if (props.pageSizeOptions !== undefined) {
    ref.setInput("pageSizeOptions", props.pageSizeOptions);
  }
  const el = fixture.nativeElement as HTMLElement;
  if (props.attach) {
    document.body.appendChild(el);
  }
  fixture.detectChanges();
  return { fixture, component: fixture.componentInstance, el };
}

const pageList = (c: FoldPaginatorComponent) =>
  c.pageItems().map((i) => (i.kind === "page" ? i.page : "…"));

describe("FoldPaginatorComponent", () => {
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

  it("defaults an omitted pageSize to the first of pageSizeOptions", () => {
    const fixture = TestBed.createComponent(FoldPaginatorComponent);
    const ref = fixture.componentRef;
    ref.setInput("currentPage", 1);
    ref.setInput("totalItems", 90);
    ref.setInput("pageSizeOptions", [25, 50, 100]);
    // pageSize deliberately not set.
    fixture.detectChanges();
    const c = fixture.componentInstance;
    expect(c.effectivePageSize()).toBe(25);
    expect(c.totalPages()).toBe(4); // ceil(90 / 25)
    expect(c.rangeEnd()).toBe(25);
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
    expect(host.querySelectorAll("fold-icon").length).toBe(2);
    expect(host.querySelector(".page-btn.is-active")?.textContent?.trim()).toBe(
      "1",
    );
  });
});

describe("FoldPaginatorComponent — robustness", () => {
  it("clamps an out-of-range currentPage so the range never goes garbage", () => {
    // page 24 with size 100 over 237 items → only 3 pages; a lagging parent.
    const c = create({
      currentPage: 24,
      pageSize: 100,
      totalItems: 237,
    }).component;
    expect(c.page()).toBe(3); // clamped to totalPages
    expect([c.rangeStart(), c.rangeEnd()]).toEqual([201, 237]); // not 2301–237
    expect(c.canGoNext()).toBe(false);
  });

  it("floors + zero-bounds a fractional / negative siblingCount", () => {
    const frac = create({
      currentPage: 5,
      pageSize: 10,
      totalItems: 100,
      siblingCount: 1.9,
    }).component;
    expect(frac.pageItems().filter((i) => i.kind === "page").length).toBe(5);
    const neg = create({
      currentPage: 5,
      pageSize: 10,
      totalItems: 100,
      siblingCount: -3,
    }).component;
    // sibs=0 → 1 … 5 … 10
    expect(
      neg.pageItems().map((i) => (i.kind === "page" ? i.page : "…")),
    ).toEqual([1, "…", 5, "…", 10]);
  });

  it("injects the current pageSize into the options so the select never lies", () => {
    const { component, el } = create({
      currentPage: 1,
      pageSize: 30,
      totalItems: 100,
      pageSizeOptions: [10, 25, 50, 100],
    });
    expect([...component.sizeOptions()]).toEqual([10, 25, 30, 50, 100]);
    const select = el.querySelector<HTMLSelectElement>(".page-size__select")!;
    expect(select.value).toBe("30"); // the real size is shown, not a phantom
  });

  it("coerces a bare `disabled` attribute (booleanAttribute)", () => {
    const fixture = TestBed.createComponent(FoldPaginatorComponent);
    const ref = fixture.componentRef;
    ref.setInput("currentPage", 5);
    ref.setInput("pageSize", 10);
    ref.setInput("totalItems", 100);
    ref.setInput("disabled", ""); // a bare attribute coerces to true
    fixture.detectChanges();
    expect(fixture.componentInstance.disabled()).toBe(true);
  });
});

describe("FoldPaginatorComponent — DOM interaction", () => {
  it("emits from the prev / next / page buttons", () => {
    const { component, el } = create({
      currentPage: 5,
      pageSize: 10,
      totalItems: 100,
    });
    const spy = vi.fn();
    component.pageChange.subscribe(spy);

    el.querySelector<HTMLButtonElement>(".nav-btn--prev")!.click();
    el.querySelector<HTMLButtonElement>(".nav-btn--next")!.click();
    el.querySelectorAll<HTMLButtonElement>(".page-btn")[0]!.click(); // page 1

    expect(spy.mock.calls).toEqual([[4], [6], [1]]);
  });

  it("emits pageSizeChange from the native select", () => {
    const { component, el } = create({
      currentPage: 1,
      pageSize: 10,
      totalItems: 100,
    });
    const spy = vi.fn();
    component.pageSizeChange.subscribe(spy);
    const select = el.querySelector<HTMLSelectElement>(".page-size__select")!;
    select.value = "25";
    select.dispatchEvent(new Event("change"));
    expect(spy).toHaveBeenCalledWith(25);
  });
});

describe("FoldPaginatorComponent — i18n labels", () => {
  it("defaults to English on the nav, arrows, size and range", () => {
    const { el } = create({ currentPage: 3, pageSize: 10, totalItems: 237 });
    expect(el.querySelector("nav")?.getAttribute("aria-label")).toBe(
      "Pagination",
    );
    expect(el.querySelector(".nav-btn--prev")?.getAttribute("aria-label")).toBe(
      "Previous page",
    );
    expect(el.querySelector(".range")?.textContent?.trim()).toBe(
      "21–30 of 237",
    );
    expect(
      el.querySelector(".page-size__select")?.getAttribute("aria-label"),
    ).toBe("Items per page");
  });

  it("takes an app-wide provider override (partial, English fallback)", () => {
    TestBed.configureTestingModule({
      providers: [
        provideFoldPaginatorLabels({
          nav: "Pagination FR",
          range: (s, e, t) => `${s}–${e} sur ${t}`,
        }),
      ],
    });
    const { el } = create({ currentPage: 3, pageSize: 10, totalItems: 237 });
    expect(el.querySelector("nav")?.getAttribute("aria-label")).toBe(
      "Pagination FR",
    );
    expect(el.querySelector(".range")?.textContent?.trim()).toBe(
      "21–30 sur 237",
    );
    // an untouched key keeps its English default
    expect(el.querySelector(".nav-btn--next")?.getAttribute("aria-label")).toBe(
      "Next page",
    );
  });

  it("lets a per-instance `labels` input win over the provider", () => {
    TestBed.configureTestingModule({
      providers: [provideFoldPaginatorLabels({ next: "provider-next" })],
    });
    const { fixture, el } = create({
      currentPage: 1,
      pageSize: 10,
      totalItems: 100,
    });
    fixture.componentRef.setInput("labels", { next: "instance-next" });
    fixture.detectChanges();
    expect(el.querySelector(".nav-btn--next")?.getAttribute("aria-label")).toBe(
      "instance-next",
    );
  });
});

describe("FoldPaginatorComponent — focus management", () => {
  afterEach(() => {
    document.querySelectorAll("fold-paginator").forEach((n) => n.remove());
  });

  /** Wire the controlled loop: pageChange feeds currentPage back in. */
  function controlled(start: number): { el: HTMLElement } {
    const built = create({
      currentPage: start,
      pageSize: 10,
      totalItems: 100,
      attach: true,
    });
    built.component.pageChange.subscribe((p) => {
      built.fixture.componentRef.setInput("currentPage", p);
      built.fixture.detectChanges();
    });
    return built;
  }

  it("moves focus to the active page button after a page-number click", () => {
    const { el } = controlled(1);
    el.querySelectorAll<HTMLButtonElement>(".page-btn")[1]!.click(); // page 2
    expect(document.activeElement).toBe(
      el.querySelector(".page-btn.is-active"),
    );
    expect(document.activeElement?.textContent?.trim()).toBe("2");
  });

  it("keeps focus on the next arrow while it stays enabled", () => {
    const { el } = controlled(1);
    el.querySelector<HTMLButtonElement>(".nav-btn--next")!.click(); // → page 2
    expect(document.activeElement).toBe(el.querySelector(".nav-btn--next"));
  });

  it("falls back to the active page when the used arrow becomes disabled", () => {
    const { el } = controlled(2);
    el.querySelector<HTMLButtonElement>(".nav-btn--prev")!.click(); // → 1, prev disabled
    expect(document.activeElement).toBe(
      el.querySelector(".page-btn.is-active"),
    );
    expect(document.activeElement?.textContent?.trim()).toBe("1");
  });
});
