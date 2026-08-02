import { describe, expect, it } from "vitest";

import { foldCalendarNextFocus } from "./calendar-keyboard";

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
