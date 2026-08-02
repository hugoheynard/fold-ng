import { describe, expect, it } from "vitest";

import { foldCalendarNextFocus, foldFocusDayCell } from "./keyboard";

/** 2026-05-20 is a Wednesday, mid-week and mid-month — nothing snaps by luck. */
const WEDNESDAY = "2026-05-20";

describe("foldCalendarNextFocus", () => {
  it("steps a day horizontally", () => {
    expect(foldCalendarNextFocus("ArrowLeft", WEDNESDAY)).toBe("2026-05-19");
    expect(foldCalendarNextFocus("ArrowRight", WEDNESDAY)).toBe("2026-05-21");
  });

  it("steps a whole week vertically, keeping the column", () => {
    expect(foldCalendarNextFocus("ArrowUp", WEDNESDAY)).toBe("2026-05-13");
    expect(foldCalendarNextFocus("ArrowDown", WEDNESDAY)).toBe("2026-05-27");
  });

  it("snaps to the bounds of the week", () => {
    expect(foldCalendarNextFocus("Home", WEDNESDAY)).toBe("2026-05-18");
    expect(foldCalendarNextFocus("End", WEDNESDAY)).toBe("2026-05-24");
  });

  it("follows the week anchor when snapping", () => {
    expect(foldCalendarNextFocus("Home", WEDNESDAY, "sun")).toBe("2026-05-17");
    expect(foldCalendarNextFocus("End", WEDNESDAY, "sun")).toBe("2026-05-23");
  });

  it("pages by month", () => {
    expect(foldCalendarNextFocus("PageUp", WEDNESDAY)).toBe("2026-04-20");
    expect(foldCalendarNextFocus("PageDown", WEDNESDAY)).toBe("2026-06-20");
  });

  it("clamps a month page onto a shorter month", () => {
    expect(foldCalendarNextFocus("PageDown", "2026-01-31")).toBe("2026-02-28");
  });

  it("crosses month and year boundaries by stepping", () => {
    expect(foldCalendarNextFocus("ArrowRight", "2026-12-31")).toBe(
      "2027-01-01",
    );
    expect(foldCalendarNextFocus("ArrowUp", "2026-05-02")).toBe("2026-04-25");
  });

  it("ignores keys that are not grid navigation", () => {
    expect(foldCalendarNextFocus("Enter", WEDNESDAY)).toBeNull();
    expect(foldCalendarNextFocus(" ", WEDNESDAY)).toBeNull();
    expect(foldCalendarNextFocus("a", WEDNESDAY)).toBeNull();
    expect(foldCalendarNextFocus("Tab", WEDNESDAY)).toBeNull();
  });
});

describe("foldFocusDayCell", () => {
  function grid(dates: readonly string[]): HTMLElement {
    const root = document.createElement("div");
    for (const date of dates) {
      const cell = document.createElement("div");
      cell.setAttribute("data-fold-day", date);
      cell.tabIndex = -1;
      root.append(cell);
    }
    document.body.append(root);
    return root;
  }

  it("focuses a rendered cell and reports it", () => {
    const root = grid(["2026-05-18", "2026-05-19"]);
    expect(foldFocusDayCell(root, "2026-05-19")).toBe(true);
    expect(
      (document.activeElement as HTMLElement).getAttribute("data-fold-day"),
    ).toBe("2026-05-19");
  });

  it("reports a miss when the day is off the grid — the signal to page", () => {
    expect(foldFocusDayCell(grid(["2026-05-18"]), "2026-06-18")).toBe(false);
  });

  it("is a no-op with no grid, which is what SSR hands it", () => {
    expect(foldFocusDayCell(null, "2026-05-18")).toBe(false);
  });

  it("refuses a value that is not a date rather than building a bad selector", () => {
    // Interpolated raw, `"] , [x="` is a SyntaxError, not a miss.
    expect(foldFocusDayCell(grid(["2026-05-18"]), '"] , [x="')).toBe(false);
  });
});
