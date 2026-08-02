import { describe, expect, it } from "vitest";

import {
  foldLayOutOverlaps,
  foldOverlaps,
  type FoldOverlapInput,
} from "./calendar-overlap";

function at(start: number, end: number): FoldOverlapInput {
  return { startMinute: start, endMinute: end };
}

describe("foldOverlaps", () => {
  it("is exclusive at the boundary — back-to-back is not a collision", () => {
    // The difference between a time grid and the month grid: inclusive days
    // collide when they touch, exclusive minutes do not. Getting this wrong
    // halves the width of every event in a packed morning.
    expect(foldOverlaps(at(540, 600), at(600, 660))).toBe(false);
    expect(foldOverlaps(at(540, 601), at(600, 660))).toBe(true);
  });

  it("is symmetric, and false for a zero-length interval beside another", () => {
    expect(foldOverlaps(at(540, 600), at(500, 560))).toBe(true);
    expect(foldOverlaps(at(500, 560), at(540, 600))).toBe(true);
    expect(foldOverlaps(at(540, 540), at(540, 600))).toBe(false);
  });
});

describe("foldLayOutOverlaps", () => {
  it("gives a lone event the whole width", () => {
    expect(foldLayOutOverlaps([at(540, 600)])).toEqual([
      { column: 0, columns: 1 },
    ]);
  });

  it("splits two overlapping events down the middle", () => {
    expect(foldLayOutOverlaps([at(540, 660), at(600, 720)])).toEqual([
      { column: 0, columns: 2 },
      { column: 1, columns: 2 },
    ]);
  });

  it("keeps back-to-back events full width", () => {
    expect(foldLayOutOverlaps([at(540, 600), at(600, 660)])).toEqual([
      { column: 0, columns: 1 },
      { column: 0, columns: 1 },
    ]);
  });

  it("reuses a column once its occupant has finished", () => {
    // 9–10, 9–10, then 10–11: the third takes the first column back rather
    // than opening a third.
    expect(
      foldLayOutOverlaps([at(540, 600), at(540, 600), at(600, 660)]),
    ).toEqual([
      { column: 0, columns: 2 },
      { column: 1, columns: 2 },
      { column: 0, columns: 1 },
    ]);
  });

  it("widens only the cluster that needs it", () => {
    // A triple-booked morning must not narrow an unrelated afternoon meeting.
    const slots = foldLayOutOverlaps([
      at(540, 660),
      at(560, 680),
      at(580, 700),
      at(840, 900),
    ]);
    expect(slots.map((s) => s.columns)).toEqual([3, 3, 3, 1]);
    expect(slots[3]).toEqual({ column: 0, columns: 1 });
  });

  it("returns one slot per input, in input order", () => {
    // The caller zips these back onto its own events, so order is the contract.
    const slots = foldLayOutOverlaps([at(600, 720), at(540, 660), at(0, 1440)]);
    expect(slots).toHaveLength(3);
    expect(slots.every((s) => s.columns === 3)).toBe(true);
  });

  it("handles a day-long event beside short ones without collapsing them", () => {
    const slots = foldLayOutOverlaps([at(0, 1440), at(540, 600), at(600, 660)]);
    // Everything is inside the long one's cluster, so all three share a width.
    expect(slots.map((s) => s.columns)).toEqual([2, 2, 2]);
    expect(slots[1]?.column).not.toBe(slots[0]?.column);
  });

  it("is empty for an empty day", () => {
    expect(foldLayOutOverlaps([])).toEqual([]);
  });
});
