import { describe, expect, it } from "vitest";

import {
  foldEventsInRange,
  foldEventsOnDay,
  foldFilterBySource,
} from "./filters";
import type { FoldCalendarEvent } from "./types";

function event(
  id: string,
  start: string,
  end: string,
  extra: Partial<FoldCalendarEvent> = {},
): FoldCalendarEvent {
  return { id, start, end, label: id, ...extra };
}

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

describe("foldFilterBySource", () => {
  const events = [
    event("p1", "2026-05-18", "2026-05-18", { sourceKey: "programme" }),
    event("p2", "2026-05-19", "2026-05-19", { sourceKey: "programme" }),
    event("l1", "2026-05-20", "2026-05-20", { sourceKey: "leave" }),
    event("x1", "2026-05-21", "2026-05-21"),
  ];

  it("keeps only the active feeds", () => {
    expect(
      foldFilterBySource(events, new Set(["programme"])).map((e) => e.id),
    ).toEqual(["p1", "p2", "x1"]);
  });

  it("always passes an event that belongs to no feed", () => {
    // No chip can hide it, so hiding everything must still leave it through.
    expect(foldFilterBySource(events, new Set()).map((e) => e.id)).toEqual([
      "x1",
    ]);
  });

  it("accepts the chips' own initial value, which means nothing is off yet", () => {
    // `null` is what `[(active)]` starts as. Refusing it would force every
    // caller to write the same ternary — the gallery used to.
    expect(foldFilterBySource(events, null)).toBe(events);
  });
});
