import { describe, expect, it } from "vitest";

import { foldBuildDay, foldBuildWeek } from "./columns";
import type { FoldCalendarEvent } from "./types";

const WEDNESDAY = "2026-05-20";

function event(
  id: string,
  start: string,
  end: string,
  extra: Partial<FoldCalendarEvent> = {},
): FoldCalendarEvent {
  return { id, start, end, label: id, ...extra };
}

function at<T>(list: readonly T[], index: number): T {
  const item = list[index];
  if (item === undefined) {
    throw new Error(`expected an item at index ${index}, got none`);
  }
  return item;
}

describe("foldBuildWeek", () => {
  it("returns the seven days of the week the date falls in", () => {
    const columns = foldBuildWeek([], { date: WEDNESDAY });
    expect(columns).toHaveLength(7);
    expect(at(columns, 0).day.date).toBe("2026-05-18");
    expect(at(columns, 6).day.date).toBe("2026-05-24");
  });

  it("follows the anchor", () => {
    const columns = foldBuildWeek([], {
      date: WEDNESDAY,
      weekStartsOn: "sun",
    });
    expect(at(columns, 0).day.date).toBe("2026-05-17");
  });

  it("lists a multi-day event under every day it covers", () => {
    const columns = foldBuildWeek([event("span", "2026-05-19", "2026-05-21")], {
      date: WEDNESDAY,
    });
    const covered = columns
      .filter((column) => column.events.length > 0)
      .map((column) => column.day.date);
    expect(covered).toEqual(["2026-05-19", "2026-05-20", "2026-05-21"]);
  });

  it("counts the events on each day cell it returns", () => {
    const columns = foldBuildWeek(
      [
        event("a", "2026-05-19", "2026-05-21"),
        event("b", "2026-05-20", "2026-05-20"),
      ],
      { date: WEDNESDAY },
    );
    expect(columns.map((column) => column.day.eventCount)).toEqual([
      0, 1, 2, 1, 0, 0, 0,
    ]);
  });

  it("never drops anything, so no day reports a hidden count", () => {
    const columns = foldBuildWeek(
      Array.from({ length: 12 }, (_unused, index) =>
        event(`e${index}`, WEDNESDAY, WEDNESDAY),
      ),
      { date: WEDNESDAY },
    );
    expect(at(columns, 2).events).toHaveLength(12);
    expect(columns.every((column) => column.day.hiddenCount === 0)).toBe(true);
  });

  it("is empty, not broken, with no events at all", () => {
    const columns = foldBuildWeek([], { date: WEDNESDAY });
    expect(columns.every((column) => column.events.length === 0)).toBe(true);
    expect(columns.every((column) => column.day.eventCount === 0)).toBe(true);
  });

  it("shades Sat+Sun independently of the anchor", () => {
    const sundayFirst = foldBuildWeek([], {
      date: WEDNESDAY,
      weekStartsOn: "sun",
    });
    expect(
      sundayFirst
        .filter((column) => column.day.isWeekend)
        .map((column) => column.day.date),
    ).toEqual(["2026-05-17", "2026-05-23"]);
  });
});

describe("foldBuildDay", () => {
  it("returns the day with the events covering it", () => {
    const day = foldBuildDay(
      [
        event("span", "2026-05-19", "2026-05-21"),
        event("elsewhere", "2026-05-25", "2026-05-25"),
      ],
      { date: WEDNESDAY },
    );
    expect(day.day.date).toBe(WEDNESDAY);
    expect(day.events.map((e) => e.id)).toEqual(["span"]);
    expect(day.day.eventCount).toBe(1);
  });

  it("marks today and belongs to its own month", () => {
    const day = foldBuildDay([], { date: WEDNESDAY, today: WEDNESDAY });
    expect(day.day.isToday).toBe(true);
    expect(day.day.inMonth).toBe(true);
    expect(day.day.dayOfMonth).toBe(20);
  });
});
