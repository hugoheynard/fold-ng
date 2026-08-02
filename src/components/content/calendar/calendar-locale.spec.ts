import { describe, expect, it } from "vitest";

import { FOLD_FALLBACK_WEEK_INFO, foldLocaleWeekInfo } from "./calendar-locale";

/**
 * These assert the *shape* and the fallbacks, not a particular CLDR answer: the
 * data ships with the engine and a hard-coded "en-US starts on Sunday" would
 * fail the day ICU revises it. What must hold is that a locale which knows its
 * own week is believed, and one that cannot be parsed still renders.
 */
describe("foldLocaleWeekInfo", () => {
  it("answers with a real weekday and a non-empty weekend", () => {
    for (const tag of ["en-GB", "en-US", "fr-FR", "ar-EG", "he-IL"]) {
      const info = foldLocaleWeekInfo(tag);
      expect(["mon", "tue", "wed", "thu", "fri", "sat", "sun"]).toContain(
        info.weekStartsOn,
      );
      expect(info.weekendDays.length).toBeGreaterThan(0);
    }
  });

  it("falls back rather than throwing on a tag it cannot parse", () => {
    expect(foldLocaleWeekInfo("not a locale!!")).toEqual(
      FOLD_FALLBACK_WEEK_INFO,
    );
  });

  it("answers for the runtime's own locale when given none", () => {
    expect(foldLocaleWeekInfo().weekendDays.length).toBeGreaterThan(0);
  });

  it("is stable across calls — the cache returns the same answer", () => {
    expect(foldLocaleWeekInfo("fr-FR")).toEqual(foldLocaleWeekInfo("fr-FR"));
  });

  it("disagrees between at least two locales, or it is not reading anything", () => {
    // The point of the whole module: if every locale answered the same, the
    // hard-coded Monday it replaced would have been fine.
    const answers = new Set(
      ["en-GB", "en-US", "ar-EG"].map(
        (tag) =>
          `${foldLocaleWeekInfo(tag).weekStartsOn}|${foldLocaleWeekInfo(
            tag,
          ).weekendDays.join(",")}`,
      ),
    );
    expect(answers.size).toBeGreaterThan(1);
  });
});
