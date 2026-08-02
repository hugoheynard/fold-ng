import { describe, expect, it } from "vitest";

import { foldRangeForView, foldShiftDate, foldViewTitle } from "./navigation";

/** A Wednesday in a month that opens on a Friday. */
const WEDNESDAY = "2026-05-20";

describe("foldShiftDate", () => {
  it("moves a day at a time in the day view", () => {
    expect(foldShiftDate("day", WEDNESDAY, 1)).toBe("2026-05-21");
    expect(foldShiftDate("day", WEDNESDAY, -1)).toBe("2026-05-19");
  });

  it("moves whole weeks, snapping to the week start", () => {
    expect(foldShiftDate("week", WEDNESDAY, 1)).toBe("2026-05-25");
    expect(foldShiftDate("week", WEDNESDAY, -1)).toBe("2026-05-11");
  });

  it("follows the week anchor when snapping", () => {
    expect(foldShiftDate("week", WEDNESDAY, 0, "sun")).toBe("2026-05-17");
  });

  it("moves whole months from the 1st, so a long month cannot drift", () => {
    expect(foldShiftDate("month", "2026-05-31", 1)).toBe("2026-06-01");
    expect(foldShiftDate("month", WEDNESDAY, -1)).toBe("2026-04-01");
  });

  it("lists by month, like the month view", () => {
    expect(foldShiftDate("list", WEDNESDAY, 1)).toBe("2026-06-01");
  });
});

describe("foldRangeForView", () => {
  it("brackets a single day", () => {
    expect(foldRangeForView("day", WEDNESDAY)).toEqual({
      from: WEDNESDAY,
      to: WEDNESDAY,
    });
  });

  it("brackets the whole week", () => {
    expect(foldRangeForView("week", WEDNESDAY)).toEqual({
      from: "2026-05-18",
      to: "2026-05-24",
    });
  });

  it("brackets the painted grid, not just the month", () => {
    // May 2026 opens on a Friday, so the grid starts on 27 April.
    expect(foldRangeForView("month", WEDNESDAY)).toEqual({
      from: "2026-04-27",
      to: "2026-05-31",
    });
  });

  it("honours the week anchor", () => {
    // 31 May 2026 is itself a Sunday, so a Sunday-anchored grid opens a whole
    // extra row after it.
    expect(foldRangeForView("month", WEDNESDAY, "sun")).toEqual({
      from: "2026-04-26",
      to: "2026-06-06",
    });
  });
});

describe("foldViewTitle", () => {
  it("names the month", () => {
    expect(foldViewTitle("month", WEDNESDAY, "en-GB")).toBe("May 2026");
    expect(foldViewTitle("list", WEDNESDAY, "en-GB")).toBe("May 2026");
  });

  it("names the day in full", () => {
    expect(foldViewTitle("day", WEDNESDAY, "en-GB")).toContain("20 May 2026");
    expect(foldViewTitle("day", WEDNESDAY, "en-GB")).toContain("Wednesday");
  });

  it("names both ends of the week", () => {
    const title = foldViewTitle("week", WEDNESDAY, "en-GB");
    expect(title).toContain("18");
    expect(title).toContain("24 May 2026");
  });

  it("names both months when the week straddles two", () => {
    const title = foldViewTitle("week", "2026-04-30", "en-GB");
    expect(title).toContain("April");
    expect(title).toContain("May");
  });

  it("localises", () => {
    expect(foldViewTitle("month", WEDNESDAY, "fr-FR")).toBe("mai 2026");
  });
});

describe("foldRangeForView — list", () => {
  it("scopes to the month itself, not the grid around it", () => {
    // The month view paints the days either side and needs their events; a
    // list has no padding days, so an April row in a May list is noise.
    expect(foldRangeForView("list", "2026-05-18")).toEqual({
      from: "2026-05-01",
      to: "2026-05-31",
    });
    expect(foldRangeForView("month", "2026-05-18")).toEqual({
      from: "2026-04-27",
      to: "2026-05-31",
    });
  });
});

describe("an app's own view", () => {
  it("pages and titles like a month, so it always lands on a real date", () => {
    expect(foldShiftDate("rooms", "2026-05-18", 1)).toBe("2026-06-01");
    expect(foldRangeForView("rooms", "2026-05-18").from).toBe("2026-04-27");
    expect(foldViewTitle("rooms", "2026-05-18", "en-GB")).toBe("May 2026");
  });
});
