import { describe, expect, it } from "vitest";

import {
  foldAddDays,
  foldAddMonths,
  foldDaysBetween,
  foldEndOfMonth,
  foldIsCalendarDate,
  foldIsWeekEnd,
  foldStartOfMonth,
  foldStartOfWeek,
  foldToNativeDate,
  foldToday,
  foldWeekdayIndex,
} from "./calendar-date";

describe("foldIsCalendarDate", () => {
  it("accepts a well-formed date", () => {
    expect(foldIsCalendarDate("2026-05-18")).toBe(true);
  });

  it("rejects an unpadded or malformed shape", () => {
    expect(foldIsCalendarDate("2026-5-18")).toBe(false);
    expect(foldIsCalendarDate("2026-05-1")).toBe(false);
    expect(foldIsCalendarDate("2026-05-18T00:00:00Z")).toBe(false);
    expect(foldIsCalendarDate("")).toBe(false);
  });

  it("rejects a day that does not exist in its month", () => {
    expect(foldIsCalendarDate("2026-02-30")).toBe(false);
    expect(foldIsCalendarDate("2026-13-01")).toBe(false);
    expect(foldIsCalendarDate("2026-04-31")).toBe(false);
  });

  it("accepts 29 February only in a leap year", () => {
    expect(foldIsCalendarDate("2024-02-29")).toBe(true);
    expect(foldIsCalendarDate("2026-02-29")).toBe(false);
  });
});

describe("foldAddDays", () => {
  it("moves forward and back", () => {
    expect(foldAddDays("2026-05-18", 1)).toBe("2026-05-19");
    expect(foldAddDays("2026-05-18", -1)).toBe("2026-05-17");
    expect(foldAddDays("2026-05-18", 0)).toBe("2026-05-18");
  });

  it("rolls over a month and a year boundary", () => {
    expect(foldAddDays("2026-05-31", 1)).toBe("2026-06-01");
    expect(foldAddDays("2026-12-31", 1)).toBe("2027-01-01");
    expect(foldAddDays("2026-01-01", -1)).toBe("2025-12-31");
  });

  it("crosses a leap day", () => {
    expect(foldAddDays("2024-02-28", 1)).toBe("2024-02-29");
    expect(foldAddDays("2026-02-28", 1)).toBe("2026-03-01");
  });

  it("crosses a spring-forward DST boundary without losing a day", () => {
    // Europe/Paris springs forward on 2026-03-29; local-time arithmetic would
    // return the same date twice here.
    expect(foldAddDays("2026-03-28", 1)).toBe("2026-03-29");
    expect(foldAddDays("2026-03-29", 1)).toBe("2026-03-30");
  });

  it("crosses an autumn fall-back boundary without repeating a day", () => {
    expect(foldAddDays("2026-10-24", 1)).toBe("2026-10-25");
    expect(foldAddDays("2026-10-25", 1)).toBe("2026-10-26");
  });
});

describe("foldDaysBetween", () => {
  it("is zero on the same day and signed either way", () => {
    expect(foldDaysBetween("2026-05-18", "2026-05-18")).toBe(0);
    expect(foldDaysBetween("2026-05-18", "2026-05-21")).toBe(3);
    expect(foldDaysBetween("2026-05-21", "2026-05-18")).toBe(-3);
  });

  it("counts across a DST boundary in whole days", () => {
    expect(foldDaysBetween("2026-03-28", "2026-03-30")).toBe(2);
    expect(foldDaysBetween("2026-10-24", "2026-10-26")).toBe(2);
  });

  it("counts across a year", () => {
    expect(foldDaysBetween("2026-01-01", "2027-01-01")).toBe(365);
  });
});

describe("foldAddMonths", () => {
  it("moves whole months", () => {
    expect(foldAddMonths("2026-05-18", 1)).toBe("2026-06-18");
    expect(foldAddMonths("2026-05-18", -1)).toBe("2026-04-18");
  });

  it("crosses a year boundary", () => {
    expect(foldAddMonths("2026-12-15", 1)).toBe("2027-01-15");
    expect(foldAddMonths("2026-01-15", -1)).toBe("2025-12-15");
  });

  it("clamps the day to the target month instead of overflowing", () => {
    expect(foldAddMonths("2026-01-31", 1)).toBe("2026-02-28");
    expect(foldAddMonths("2024-01-31", 1)).toBe("2024-02-29");
    expect(foldAddMonths("2026-03-31", -1)).toBe("2026-02-28");
    expect(foldAddMonths("2026-05-31", 1)).toBe("2026-06-30");
  });
});

describe("foldStartOfMonth / foldEndOfMonth", () => {
  it("brackets a 31-day month", () => {
    expect(foldStartOfMonth("2026-05-18")).toBe("2026-05-01");
    expect(foldEndOfMonth("2026-05-18")).toBe("2026-05-31");
  });

  it("brackets a 30-day month", () => {
    expect(foldEndOfMonth("2026-04-10")).toBe("2026-04-30");
  });

  it("brackets February in both a common and a leap year", () => {
    expect(foldEndOfMonth("2026-02-10")).toBe("2026-02-28");
    expect(foldEndOfMonth("2024-02-10")).toBe("2024-02-29");
  });

  it("brackets December", () => {
    expect(foldEndOfMonth("2026-12-05")).toBe("2026-12-31");
  });
});

describe("foldStartOfWeek", () => {
  // 2026-05-18 is a Monday.
  it("returns the date itself when it is already the anchor", () => {
    expect(foldStartOfWeek("2026-05-18", "mon")).toBe("2026-05-18");
  });

  it("rolls back to Monday by default", () => {
    expect(foldStartOfWeek("2026-05-24", "mon")).toBe("2026-05-18"); // Sunday
    expect(foldStartOfWeek("2026-05-21", "mon")).toBe("2026-05-18"); // Thursday
    expect(foldStartOfWeek("2026-05-19")).toBe("2026-05-18");
  });

  it("honours a Sunday anchor", () => {
    expect(foldStartOfWeek("2026-05-18", "sun")).toBe("2026-05-17");
    expect(foldStartOfWeek("2026-05-17", "sun")).toBe("2026-05-17");
  });

  it("honours a Saturday anchor", () => {
    expect(foldStartOfWeek("2026-05-18", "sat")).toBe("2026-05-16");
  });

  it("rolls back across a month boundary", () => {
    expect(foldStartOfWeek("2026-06-02", "mon")).toBe("2026-06-01");
    expect(foldStartOfWeek("2026-03-01", "mon")).toBe("2026-02-23");
  });
});

describe("foldWeekdayIndex", () => {
  it("is zero on the anchor and six on the last day", () => {
    expect(foldWeekdayIndex("2026-05-18", "mon")).toBe(0);
    expect(foldWeekdayIndex("2026-05-24", "mon")).toBe(6);
  });

  it("shifts with the anchor", () => {
    expect(foldWeekdayIndex("2026-05-18", "sun")).toBe(1);
    expect(foldWeekdayIndex("2026-05-17", "sun")).toBe(0);
  });
});

describe("foldIsWeekEnd", () => {
  it("flags the two closing days of a Monday-anchored week", () => {
    expect(foldIsWeekEnd("2026-05-23")).toBe(true); // Saturday
    expect(foldIsWeekEnd("2026-05-24")).toBe(true); // Sunday
    expect(foldIsWeekEnd("2026-05-22")).toBe(false); // Friday
  });

  it("follows the anchor rather than hard-coding Sat/Sun", () => {
    // Anchored on Sunday, the closing pair becomes Friday + Saturday.
    expect(foldIsWeekEnd("2026-05-22", "sun")).toBe(true);
    expect(foldIsWeekEnd("2026-05-23", "sun")).toBe(true);
    expect(foldIsWeekEnd("2026-05-24", "sun")).toBe(false);
  });
});

describe("foldToday", () => {
  it("reads the local clock, not UTC", () => {
    // 23:30 local on the 18th is already the 19th in UTC east of Greenwich —
    // the calendar must highlight the day the user sees.
    const localLateEvening = new Date(2026, 4, 18, 23, 30, 0);
    expect(foldToday(localLateEvening)).toBe("2026-05-18");
  });

  it("pads single-digit months and days", () => {
    expect(foldToday(new Date(2026, 0, 3, 12, 0, 0))).toBe("2026-01-03");
  });
});

describe("foldToNativeDate", () => {
  it("lands on UTC midnight so Intl formatting keeps the day", () => {
    const native = foldToNativeDate("2026-05-18");
    expect(native.getUTCFullYear()).toBe(2026);
    expect(native.getUTCMonth()).toBe(4);
    expect(native.getUTCDate()).toBe(18);
    expect(native.getUTCHours()).toBe(0);
  });

  it("round-trips through Intl in UTC", () => {
    const label = new Intl.DateTimeFormat("en-GB", {
      weekday: "long",
      timeZone: "UTC",
    }).format(foldToNativeDate("2026-05-18"));
    expect(label).toBe("Monday");
  });
});
