import { describe, expect, it } from "vitest";

import { foldBuildAgenda, foldCountActionable } from "./calendar-agenda";
import type { FoldCalendarEvent, FoldCalendarTone } from "./calendar.types";

const FROM = "2026-05-18";

function event(
  id: string,
  start: string,
  end: string,
  tone?: FoldCalendarTone,
): FoldCalendarEvent {
  return tone === undefined
    ? { id, start, end, label: id }
    : { id, start, end, label: id, tone };
}

function at<T>(list: readonly T[], index: number): T {
  const item = list[index];
  if (item === undefined) {
    throw new Error(`expected an item at index ${index}`);
  }
  return item;
}

describe("foldBuildAgenda", () => {
  it("drops what has already finished", () => {
    const groups = foldBuildAgenda(
      [
        event("past", "2026-05-10", "2026-05-12"),
        event("ahead", "2026-05-20", "2026-05-20"),
      ],
      { from: FROM },
    );
    expect(groups.flatMap((g) => g.events).map((e) => e.id)).toEqual(["ahead"]);
  });

  it("keeps an event ending exactly on the boundary", () => {
    const groups = foldBuildAgenda([event("edge", "2026-05-10", FROM)], {
      from: FROM,
    });
    expect(groups).toHaveLength(1);
  });

  it("files a running event under the boundary, not its real start", () => {
    // A three-week absence that began last week belongs at the top of what's
    // next, not in a past day the rail never shows.
    const groups = foldBuildAgenda(
      [event("running", "2026-05-04", "2026-05-25")],
      {
        from: FROM,
      },
    );
    expect(at(groups, 0).date).toBe(FROM);
  });

  it("groups by day, in date order", () => {
    const groups = foldBuildAgenda(
      [
        event("c", "2026-05-22", "2026-05-22"),
        event("a", "2026-05-19", "2026-05-19"),
        event("b", "2026-05-19", "2026-05-19"),
      ],
      { from: FROM },
    );
    expect(groups.map((g) => g.date)).toEqual(["2026-05-19", "2026-05-22"]);
    expect(at(groups, 0).events.map((e) => e.id)).toEqual(["a", "b"]);
  });

  it("keeps only what asks for attention in todo mode", () => {
    const events = [
      event("plain", "2026-05-19", "2026-05-19"),
      event("pending", "2026-05-20", "2026-05-20", "warning"),
      event("due", "2026-05-21", "2026-05-21", "alert"),
      event("done", "2026-05-22", "2026-05-22", "success"),
      event("dropped", "2026-05-23", "2026-05-23", "muted"),
    ];
    const todo = foldBuildAgenda(events, { from: FROM, mode: "todo" });
    expect(todo.flatMap((g) => g.events).map((e) => e.id)).toEqual([
      "pending",
      "due",
    ]);

    const all = foldBuildAgenda(events, { from: FROM, mode: "all" });
    expect(all.flatMap((g) => g.events)).toHaveLength(5);
  });

  it("caps the number of days it returns", () => {
    const events = Array.from({ length: 12 }, (_unused, index) =>
      event(`e${index}`, `2026-05-${19 + index}`, `2026-05-${19 + index}`),
    );
    expect(foldBuildAgenda(events, { from: FROM })).toHaveLength(8);
    expect(foldBuildAgenda(events, { from: FROM, limit: 3 })).toHaveLength(3);
  });

  it("returns nothing when everything is behind", () => {
    const groups = foldBuildAgenda(
      [event("past", "2026-05-01", "2026-05-02")],
      {
        from: FROM,
      },
    );
    expect(groups).toHaveLength(0);
  });
});

describe("foldCountActionable", () => {
  it("counts the attention tones still ahead, whatever the mode", () => {
    const events = [
      event("pending", "2026-05-20", "2026-05-20", "warning"),
      event("due", "2026-05-21", "2026-05-21", "alert"),
      event("done", "2026-05-22", "2026-05-22", "success"),
      event("oldPending", "2026-05-01", "2026-05-02", "warning"),
    ];
    expect(foldCountActionable(events, FROM)).toBe(2);
  });

  it("is zero on an empty feed", () => {
    expect(foldCountActionable([], FROM)).toBe(0);
  });
});
