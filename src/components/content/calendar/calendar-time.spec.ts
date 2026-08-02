import { describe, expect, it } from "vitest";

import {
  FOLD_MINUTES_PER_DAY,
  foldAddMinutes,
  foldFromMinutes,
  foldIsCalendarTime,
  foldToMinutes,
} from "./calendar-time";

describe("foldIsCalendarTime", () => {
  it("accepts a real wall-clock time", () => {
    expect(foldIsCalendarTime("00:00")).toBe(true);
    expect(foldIsCalendarTime("09:30")).toBe(true);
    expect(foldIsCalendarTime("23:59")).toBe(true);
  });

  it("accepts 24:00 as the end of the day, and nothing else at hour 24", () => {
    expect(foldIsCalendarTime("24:00")).toBe(true);
    expect(foldIsCalendarTime("24:01")).toBe(false);
    expect(foldIsCalendarTime("24:30")).toBe(false);
  });

  it("rejects a minute field of 60 or more, even under 1440 total", () => {
    // The regression: HH:mm-shaped, total minutes < 1440, but not a real time.
    expect(foldIsCalendarTime("00:60")).toBe(false);
    expect(foldIsCalendarTime("10:75")).toBe(false);
    expect(foldIsCalendarTime("23:60")).toBe(false);
    expect(foldIsCalendarTime("12:99")).toBe(false);
  });

  it("rejects an hour past 24", () => {
    expect(foldIsCalendarTime("25:00")).toBe(false);
    expect(foldIsCalendarTime("99:00")).toBe(false);
  });

  it("rejects anything that is not HH:mm", () => {
    expect(foldIsCalendarTime("9:00")).toBe(false);
    expect(foldIsCalendarTime("09:00:00")).toBe(false);
    expect(foldIsCalendarTime("09h00")).toBe(false);
    expect(foldIsCalendarTime("")).toBe(false);
    expect(foldIsCalendarTime("noon")).toBe(false);
  });
});

describe("foldToMinutes", () => {
  it("counts minutes since midnight", () => {
    expect(foldToMinutes("00:00")).toBe(0);
    expect(foldToMinutes("01:30")).toBe(90);
    expect(foldToMinutes("24:00")).toBe(FOLD_MINUTES_PER_DAY);
  });
});

describe("foldFromMinutes", () => {
  it("renders HH:mm, zero-padded", () => {
    expect(foldFromMinutes(0)).toBe("00:00");
    expect(foldFromMinutes(90)).toBe("01:30");
    expect(foldFromMinutes(FOLD_MINUTES_PER_DAY)).toBe("24:00");
  });

  it("clamps to the day rather than wrapping", () => {
    expect(foldFromMinutes(-30)).toBe("00:00");
    expect(foldFromMinutes(FOLD_MINUTES_PER_DAY + 30)).toBe("24:00");
  });

  it("rounds a fractional minute", () => {
    expect(foldFromMinutes(90.4)).toBe("01:30");
    expect(foldFromMinutes(90.6)).toBe("01:31");
  });
});

describe("foldAddMinutes", () => {
  it("shifts a time and clamps at the day's ends", () => {
    expect(foldAddMinutes("09:00", 90)).toBe("10:30");
    expect(foldAddMinutes("09:00", -600)).toBe("00:00");
    expect(foldAddMinutes("23:00", 120)).toBe("24:00");
  });
});
