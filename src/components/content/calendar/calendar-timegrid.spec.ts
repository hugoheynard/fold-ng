import { describe, expect, it } from "vitest";

import { foldBuildTimeGrid, foldIsTimed } from "./calendar-timegrid";
import type { FoldCalendarEvent } from "./calendar.types";

/** Monday. */
const MONDAY = "2026-05-18";

function timed(
  id: string,
  date: string,
  startTime: string,
  endTime: string,
  end = date,
): FoldCalendarEvent {
  return { id, start: date, end, label: id, startTime, endTime };
}

function at<T>(list: readonly T[], index: number): T {
  const item = list[index];
  if (item === undefined) {
    throw new Error(`expected an item at index ${index}`);
  }
  return item;
}

describe("foldIsTimed", () => {
  it("needs both ends — half a time is a data bug, not a placement", () => {
    expect(foldIsTimed(timed("a", MONDAY, "09:00", "10:00"))).toBe(true);
    expect(
      foldIsTimed({ id: "b", start: MONDAY, end: MONDAY, label: "b" }),
    ).toBe(false);
    expect(
      foldIsTimed({
        id: "c",
        start: MONDAY,
        end: MONDAY,
        label: "c",
        startTime: "09:00",
      }),
    ).toBe(false);
  });
});

describe("foldBuildTimeGrid — the window", () => {
  it("snaps a seven-day grid to the week", () => {
    const grid = foldBuildTimeGrid([], { date: "2026-05-20" });
    expect(grid.columns).toHaveLength(7);
    expect(at(grid.columns, 0).day.date).toBe(MONDAY);
  });

  it("is a day view at dayCount 1, anchored on the date itself", () => {
    const grid = foldBuildTimeGrid([], { date: "2026-05-20", dayCount: 1 });
    expect(grid.columns).toHaveLength(1);
    expect(at(grid.columns, 0).day.date).toBe("2026-05-20");
  });

  it("labels every hour inside the window, and none outside", () => {
    const grid = foldBuildTimeGrid([], {
      date: MONDAY,
      dayStart: "08:00",
      dayEnd: "12:00",
    });
    expect(grid.hours).toEqual(["08:00", "09:00", "10:00", "11:00"]);
    expect(grid.startMinute).toBe(480);
    expect(grid.endMinute).toBe(720);
  });

  it("refuses a window with no height rather than dividing by zero", () => {
    const grid = foldBuildTimeGrid([], {
      date: MONDAY,
      dayStart: "18:00",
      dayEnd: "08:00",
    });
    expect(grid.endMinute).toBe(1440);
  });
});

describe("foldBuildTimeGrid — placing a block", () => {
  it("positions it as a fraction of the visible window, not in pixels", () => {
    const grid = foldBuildTimeGrid([timed("m", MONDAY, "09:00", "10:00")], {
      date: MONDAY,
      dayStart: "08:00",
      dayEnd: "18:00",
    });
    const block = at(at(grid.columns, 0).blocks, 0);
    // 09:00 is one hour into a ten-hour window; the meeting is one hour long.
    expect(block.top).toBeCloseTo(0.1);
    expect(block.height).toBeCloseTo(0.1);
    expect(block.continuesBefore).toBe(false);
    expect(block.continuesAfter).toBe(false);
  });

  it("puts each day's events in that day's column and no other", () => {
    const grid = foldBuildTimeGrid(
      [
        timed("mon", MONDAY, "09:00", "10:00"),
        timed("wed", "2026-05-20", "09:00", "10:00"),
      ],
      { date: MONDAY },
    );
    expect(grid.columns.map((c) => c.blocks.length)).toEqual([
      1, 0, 1, 0, 0, 0, 0,
    ]);
  });

  it("clips to the window and says it was clipped", () => {
    const grid = foldBuildTimeGrid([timed("early", MONDAY, "06:00", "09:00")], {
      date: MONDAY,
      dayStart: "08:00",
      dayEnd: "18:00",
    });
    const block = at(at(grid.columns, 0).blocks, 0);
    expect(block.top).toBe(0);
    expect(block.continuesBefore).toBe(true);
    expect(block.continuesAfter).toBe(false);
  });

  it("drops an event that misses the window entirely", () => {
    const grid = foldBuildTimeGrid([timed("night", MONDAY, "01:00", "05:00")], {
      date: MONDAY,
      dayStart: "08:00",
      dayEnd: "18:00",
    });
    expect(at(grid.columns, 0).blocks).toHaveLength(0);
  });

  it("cuts a span crossing midnight into one block per day", () => {
    // Monday 14:00 → Wednesday 10:00 is three blocks, each with the right
    // open edge — not one impossible block running off the bottom.
    const grid = foldBuildTimeGrid(
      [timed("long", MONDAY, "14:00", "10:00", "2026-05-20")],
      { date: MONDAY },
    );
    const blocks = grid.columns.flatMap((column) => column.blocks);
    expect(blocks).toHaveLength(3);
    expect(blocks.map((b) => [b.continuesBefore, b.continuesAfter])).toEqual([
      [false, true],
      [true, true],
      [true, false],
    ]);
    expect(at(blocks, 1).top).toBe(0);
    expect(at(blocks, 1).height).toBe(1);
  });

  it("keys each slice separately, so a span can be tracked per day", () => {
    const grid = foldBuildTimeGrid(
      [timed("long", MONDAY, "14:00", "10:00", "2026-05-19")],
      { date: MONDAY },
    );
    const keys = grid.columns.flatMap((c) => c.blocks).map((b) => b.key);
    expect(new Set(keys).size).toBe(keys.length);
  });
});

describe("foldBuildTimeGrid — overlaps within a day", () => {
  it("shares the width between events that actually collide", () => {
    const grid = foldBuildTimeGrid(
      [
        timed("a", MONDAY, "09:00", "11:00"),
        timed("b", MONDAY, "10:00", "12:00"),
      ],
      { date: MONDAY },
    );
    expect(
      at(grid.columns, 0).blocks.map((b) => [b.column, b.columns]),
    ).toEqual([
      [0, 2],
      [1, 2],
    ]);
  });

  it("leaves back-to-back meetings at full width", () => {
    const grid = foldBuildTimeGrid(
      [
        timed("a", MONDAY, "09:00", "10:00"),
        timed("b", MONDAY, "10:00", "11:00"),
      ],
      { date: MONDAY },
    );
    expect(at(grid.columns, 0).blocks.every((b) => b.columns === 1)).toBe(true);
  });
});

describe("foldBuildTimeGrid — the all-day strip", () => {
  const absence: FoldCalendarEvent = {
    id: "leave",
    start: "2026-05-19",
    end: "2026-05-21",
    label: "Léa — leave",
  };

  it("spans days exactly as the month grid does", () => {
    const grid = foldBuildTimeGrid([absence], { date: MONDAY });
    expect(grid.allDay).toHaveLength(1);
    const band = at(grid.allDay, 0);
    expect([band.startColumn, band.endColumn]).toEqual([1, 3]);
    expect(band.continuesBefore).toBe(false);
    expect(band.continuesAfter).toBe(false);
  });

  it("keeps timed events off the strip and all-day events off the clock", () => {
    const grid = foldBuildTimeGrid(
      [absence, timed("m", MONDAY, "09:00", "10:00")],
      { date: MONDAY },
    );
    expect(grid.allDay.map((b) => b.event.id)).toEqual(["leave"]);
    expect(
      grid.columns.flatMap((c) => c.blocks).map((b) => b.event.id),
    ).toEqual(["m"]);
  });

  it("counts what the strip's lane budget could not take", () => {
    const many = Array.from({ length: 4 }, (_unused, index) => ({
      ...absence,
      id: `leave${index}`,
    }));
    const grid = foldBuildTimeGrid(many, { date: MONDAY, maxAllDayLanes: 2 });
    expect(grid.allDay).toHaveLength(2);
    expect(grid.allDayHiddenCount).toBe(2);
  });

  it("clips a span that starts before the window", () => {
    const grid = foldBuildTimeGrid(
      [{ ...absence, start: "2026-05-10", end: "2026-05-19" }],
      { date: MONDAY },
    );
    const band = at(grid.allDay, 0);
    expect(band.startColumn).toBe(0);
    expect(band.continuesBefore).toBe(true);
  });
});
