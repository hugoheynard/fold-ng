import { describe, expect, it } from "vitest";

import {
  foldBuildMonthGrid,
  foldEventsInRange,
  foldEventsOnDay,
} from "./calendar-layout";
import type { FoldCalendarEvent } from "./calendar.types";

/** May 2026 starts on a Friday and ends on a Sunday — a 6-row natural grid. */
const MAY = "2026-05-18";

function event(
  id: string,
  start: string,
  end: string,
  extra: Partial<FoldCalendarEvent> = {},
): FoldCalendarEvent {
  return { id, start, end, label: id, ...extra };
}

/** Indexed access that fails the test rather than widening to `undefined`. */
function at<T>(list: readonly T[], index: number): T {
  const item = list[index];
  if (item === undefined) {
    throw new Error(`expected an item at index ${index}, got none`);
  }
  return item;
}

describe("foldBuildMonthGrid — grid shape", () => {
  it("covers whole weeks from the first to the last day of the month", () => {
    const weeks = foldBuildMonthGrid([], { month: MAY });
    // 1 May 2026 is a Friday → the grid opens on Monday 27 April.
    expect(at(weeks, 0).start).toBe("2026-04-27");
    expect(at(at(weeks, 0).days, 0).date).toBe("2026-04-27");
    expect(at(weeks, weeks.length - 1).days.at(-1)?.date).toBe("2026-05-31");
  });

  it("gives every week seven days", () => {
    const weeks = foldBuildMonthGrid([], { month: MAY });
    for (const week of weeks) {
      expect(week.days).toHaveLength(7);
    }
  });

  it("marks the padding days as out of month", () => {
    const weeks = foldBuildMonthGrid([], { month: MAY });
    const firstWeek = at(weeks, 0);
    expect(at(firstWeek.days, 0).inMonth).toBe(false); // 27 April
    expect(at(firstWeek.days, 4).inMonth).toBe(true); // 1 May
    expect(at(firstWeek.days, 4).dayOfMonth).toBe(1);
  });

  it("flags today only when it is given", () => {
    const withToday = foldBuildMonthGrid([], {
      month: MAY,
      today: "2026-05-18",
    });
    const flagged = withToday
      .flatMap((week) => week.days)
      .filter((day) => day.isToday);
    expect(flagged).toHaveLength(1);
    expect(at(flagged, 0).date).toBe("2026-05-18");

    const withoutToday = foldBuildMonthGrid([], { month: MAY });
    expect(
      withoutToday.flatMap((week) => week.days).some((day) => day.isToday),
    ).toBe(false);
  });

  it("derives the closing weekend from the anchor", () => {
    const monday = foldBuildMonthGrid([], { month: MAY });
    const weekEnds = at(monday, 0)
      .days.filter((day) => day.isWeekEnd)
      .map((day) => day.date);
    expect(weekEnds).toEqual(["2026-05-02", "2026-05-03"]); // Sat + Sun

    const sunday = foldBuildMonthGrid([], { month: MAY, weekStartsOn: "sun" });
    expect(at(at(sunday, 0).days, 0).date).toBe("2026-04-26");
  });

  it("pads to six rows only when asked", () => {
    // February 2027 starts on a Monday and needs just four rows.
    const natural = foldBuildMonthGrid([], { month: "2027-02-10" });
    expect(natural).toHaveLength(4);

    const fixed = foldBuildMonthGrid([], {
      month: "2027-02-10",
      fixedWeeks: true,
    });
    expect(fixed).toHaveLength(6);
    expect(at(fixed, 0).start).toBe(at(natural, 0).start);
  });
});

describe("foldBuildMonthGrid — band placement", () => {
  it("places a single-day event on one column with closed edges", () => {
    const weeks = foldBuildMonthGrid(
      [event("e1", "2026-05-20", "2026-05-20")],
      {
        month: MAY,
      },
    );
    const bands = weeks.flatMap((week) => week.bands);
    expect(bands).toHaveLength(1);
    const band = at(bands, 0);
    expect(band.startColumn).toBe(2); // Wednesday
    expect(band.endColumn).toBe(2);
    expect(band.continuesBefore).toBe(false);
    expect(band.continuesAfter).toBe(false);
    expect(band.groupSize).toBe(1);
  });

  it("spans columns within a single week", () => {
    const weeks = foldBuildMonthGrid(
      [event("e1", "2026-05-18", "2026-05-22")],
      {
        month: MAY,
      },
    );
    const band = at(
      weeks.flatMap((week) => week.bands),
      0,
    );
    expect(band.startColumn).toBe(0);
    expect(band.endColumn).toBe(4);
    expect(band.continuesBefore).toBe(false);
    expect(band.continuesAfter).toBe(false);
  });

  it("splits an event crossing a week boundary into two flagged segments", () => {
    const weeks = foldBuildMonthGrid(
      [event("e1", "2026-05-22", "2026-05-26")],
      {
        month: MAY,
      },
    );
    const bands = weeks.flatMap((week) => week.bands);
    expect(bands).toHaveLength(2);

    const [first, second] = [at(bands, 0), at(bands, 1)];
    expect(first.endColumn).toBe(6);
    expect(first.continuesBefore).toBe(false);
    expect(first.continuesAfter).toBe(true);

    expect(second.startColumn).toBe(0);
    expect(second.continuesBefore).toBe(true);
    expect(second.continuesAfter).toBe(false);
    expect(second.key).not.toBe(first.key);
    expect(second.event.id).toBe("e1");
  });

  it("clips an event overflowing the grid on both ends", () => {
    const weeks = foldBuildMonthGrid(
      [event("e1", "2026-01-01", "2026-12-31")],
      {
        month: MAY,
      },
    );
    const bands = weeks.flatMap((week) => week.bands);
    expect(bands).toHaveLength(weeks.length);
    for (const band of bands) {
      expect(band.startColumn).toBe(0);
      expect(band.endColumn).toBe(6);
      expect(band.continuesBefore).toBe(true);
      expect(band.continuesAfter).toBe(true);
    }
  });

  it("drops events that miss the grid entirely", () => {
    const weeks = foldBuildMonthGrid(
      [event("e1", "2026-08-01", "2026-08-05")],
      {
        month: MAY,
      },
    );
    expect(weeks.flatMap((week) => week.bands)).toHaveLength(0);
  });

  it("treats an open range as continuing past the edge it is open on", () => {
    const weeks = foldBuildMonthGrid(
      [event("e1", "2026-05-18", "2026-05-20", { openEnd: true })],
      { month: MAY },
    );
    const band = at(
      weeks.flatMap((week) => week.bands),
      0,
    );
    expect(band.continuesBefore).toBe(false);
    expect(band.continuesAfter).toBe(true);
  });
});

describe("foldBuildMonthGrid — lane packing", () => {
  it("reuses a lane for spans that do not overlap", () => {
    const weeks = foldBuildMonthGrid(
      [
        event("a", "2026-05-18", "2026-05-19"),
        event("b", "2026-05-21", "2026-05-22"),
      ],
      { month: MAY },
    );
    const bands = weeks.flatMap((week) => week.bands);
    expect(bands.map((band) => band.lane)).toEqual([0, 0]);
  });

  it("stacks overlapping spans onto separate lanes", () => {
    const weeks = foldBuildMonthGrid(
      [
        event("a", "2026-05-18", "2026-05-22"),
        event("b", "2026-05-19", "2026-05-21"),
      ],
      { month: MAY },
    );
    const lanes = weeks.flatMap((week) => week.bands).map((band) => band.lane);
    expect(lanes).toEqual([0, 1]);
  });

  it("stacks spans that merely touch on the same column", () => {
    const weeks = foldBuildMonthGrid(
      [
        event("a", "2026-05-18", "2026-05-20"),
        event("b", "2026-05-20", "2026-05-22"),
      ],
      { month: MAY },
    );
    expect(
      weeks.flatMap((week) => week.bands).map((band) => band.lane),
    ).toEqual([0, 1]);
  });

  it("orders by earliest start, then longest span", () => {
    const weeks = foldBuildMonthGrid(
      [
        event("short", "2026-05-18", "2026-05-18"),
        event("long", "2026-05-18", "2026-05-22"),
      ],
      { month: MAY },
    );
    const bands = weeks.flatMap((week) => week.bands);
    expect(bands.map((band) => band.event.id)).toEqual(["long", "short"]);
    expect(at(bands, 0).lane).toBe(0);
    expect(at(bands, 1).lane).toBe(1);
  });

  it("counts what will not fit instead of dropping it silently", () => {
    const overlapping = [
      event("a", "2026-05-18", "2026-05-22"),
      event("b", "2026-05-18", "2026-05-22"),
      event("c", "2026-05-18", "2026-05-22"),
      event("d", "2026-05-18", "2026-05-22"),
      event("e", "2026-05-18", "2026-05-22"),
    ];
    const weeks = foldBuildMonthGrid(overlapping, { month: MAY, maxLanes: 3 });
    const week = at(
      weeks.filter((candidate) => candidate.bands.length > 0),
      0,
    );
    expect(week.bands).toHaveLength(3);
    expect(week.hiddenCount).toBe(2);
  });

  it("honours a raised lane budget", () => {
    const overlapping = Array.from({ length: 5 }, (_unused, index) =>
      event(`e${index}`, "2026-05-18", "2026-05-22"),
    );
    const weeks = foldBuildMonthGrid(overlapping, { month: MAY, maxLanes: 5 });
    const week = at(
      weeks.filter((candidate) => candidate.bands.length > 0),
      0,
    );
    expect(week.bands).toHaveLength(5);
    expect(week.hiddenCount).toBe(0);
  });

  it("counts every candidate as hidden when no lane is allowed", () => {
    const weeks = foldBuildMonthGrid([event("a", "2026-05-18", "2026-05-19")], {
      month: MAY,
      maxLanes: 0,
    });
    const week = at(
      weeks.filter((candidate) => candidate.hiddenCount > 0),
      0,
    );
    expect(week.bands).toHaveLength(0);
    expect(week.hiddenCount).toBe(1);
  });

  it("packs each week row independently", () => {
    const weeks = foldBuildMonthGrid(
      [
        event("a", "2026-05-18", "2026-05-19"),
        event("b", "2026-05-26", "2026-05-27"),
      ],
      { month: MAY },
    );
    const withBands = weeks.filter((week) => week.bands.length > 0);
    expect(withBands).toHaveLength(2);
    for (const week of withBands) {
      expect(at(week.bands, 0).lane).toBe(0);
    }
  });
});

describe("foldBuildMonthGrid — grouping", () => {
  it("collapses a group into one band carrying the count", () => {
    const weeks = foldBuildMonthGrid(
      [
        event("a", "2026-05-18", "2026-05-19", {
          groupId: "team",
          groupLabel: "Team off",
        }),
        event("b", "2026-05-18", "2026-05-19", { groupId: "team" }),
        event("c", "2026-05-18", "2026-05-19", { groupId: "team" }),
      ],
      { month: MAY },
    );
    const bands = weeks.flatMap((week) => week.bands);
    expect(bands).toHaveLength(1);
    expect(at(bands, 0).groupSize).toBe(3);
    expect(at(bands, 0).event.id).toBe("a");
  });

  it("covers the union of the group's ranges", () => {
    const weeks = foldBuildMonthGrid(
      [
        event("a", "2026-05-19", "2026-05-20", { groupId: "team" }),
        event("b", "2026-05-18", "2026-05-22", { groupId: "team" }),
      ],
      { month: MAY },
    );
    const band = at(
      weeks.flatMap((week) => week.bands),
      0,
    );
    expect(band.startColumn).toBe(0);
    expect(band.endColumn).toBe(4);
  });

  it("keeps separate groups and ungrouped events apart", () => {
    const weeks = foldBuildMonthGrid(
      [
        event("a", "2026-05-18", "2026-05-18", { groupId: "x" }),
        event("b", "2026-05-18", "2026-05-18", { groupId: "y" }),
        event("c", "2026-05-18", "2026-05-18"),
      ],
      { month: MAY },
    );
    expect(weeks.flatMap((week) => week.bands)).toHaveLength(3);
  });
});

describe("foldBuildMonthGrid — half days", () => {
  it("keeps a half-day edge on the segment holding the real edge", () => {
    const weeks = foldBuildMonthGrid(
      [
        event("e1", "2026-05-22", "2026-05-26", {
          startHalfDay: "afternoon",
          endHalfDay: "morning",
        }),
      ],
      { month: MAY },
    );
    const bands = weeks.flatMap((week) => week.bands);
    const [first, second] = [at(bands, 0), at(bands, 1)];

    expect(first.startHalfDay).toBe("afternoon");
    expect(first.endHalfDay).toBeUndefined(); // continues — no real end here
    expect(second.startHalfDay).toBeUndefined();
    expect(second.endHalfDay).toBe("morning");
  });

  it("drops a half-day edge that an open range makes meaningless", () => {
    const weeks = foldBuildMonthGrid(
      [
        event("e1", "2026-05-18", "2026-05-20", {
          endHalfDay: "morning",
          openEnd: true,
        }),
      ],
      { month: MAY },
    );
    expect(
      at(
        weeks.flatMap((week) => week.bands),
        0,
      ).endHalfDay,
    ).toBeUndefined();
  });
});

describe("foldEventsOnDay", () => {
  const events = [
    event("single", "2026-05-20", "2026-05-20"),
    event("span", "2026-05-18", "2026-05-22"),
    event("other", "2026-06-01", "2026-06-02"),
  ];

  it("returns events covering the day, edges included", () => {
    expect(foldEventsOnDay(events, "2026-05-20").map((e) => e.id)).toEqual([
      "single",
      "span",
    ]);
    expect(foldEventsOnDay(events, "2026-05-18").map((e) => e.id)).toEqual([
      "span",
    ]);
    expect(foldEventsOnDay(events, "2026-05-22").map((e) => e.id)).toEqual([
      "span",
    ]);
  });

  it("returns nothing outside every range", () => {
    expect(foldEventsOnDay(events, "2026-05-23")).toHaveLength(0);
  });
});

describe("foldEventsInRange", () => {
  const events = [
    event("before", "2026-05-01", "2026-05-05"),
    event("overlapping", "2026-05-05", "2026-05-12"),
    event("after", "2026-05-20", "2026-05-25"),
  ];

  it("keeps anything touching the window", () => {
    expect(
      foldEventsInRange(events, "2026-05-06", "2026-05-19").map((e) => e.id),
    ).toEqual(["overlapping"]);
    expect(
      foldEventsInRange(events, "2026-05-05", "2026-05-05").map((e) => e.id),
    ).toEqual(["before", "overlapping"]);
  });

  it("drops anything strictly outside", () => {
    expect(foldEventsInRange(events, "2026-05-13", "2026-05-19")).toHaveLength(
      0,
    );
  });
});
