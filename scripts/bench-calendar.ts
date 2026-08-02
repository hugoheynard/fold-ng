/**
 * Month-layout benchmark — `pnpm bench:calendar`.
 *
 * Committed with a budget, because a performance claim nobody re-runs is a
 * performance claim that stops being true. Exits non-zero when a size blows its
 * budget, so it can be wired into CI the day that matters.
 *
 * The numbers in the README come from this script.
 */
import { foldAddDays } from "../src/components/content/calendar/calendar-date";
import { foldBuildMonthGrid } from "../src/components/content/calendar/calendar-month-grid";
import type { FoldCalendarEvent } from "../src/components/content/calendar/calendar.types";

/** Budgets in ms per layout, on the machine this was written on, ×3 headroom. */
const BUDGETS: readonly (readonly [size: number, budgetMs: number])[] = [
  [50, 1],
  [200, 1.5],
  [1_000, 4],
  [5_000, 20],
  [20_000, 90],
];

const RUNS = 20;
const MONTH = "2026-05-18";

/** A month's worth of overlapping spans — the shape that stresses the packing. */
function feed(size: number): readonly FoldCalendarEvent[] {
  return Array.from({ length: size }, (_unused, index) => {
    const start = foldAddDays("2026-05-01", index % 31);
    return {
      id: `e${index}`,
      start,
      end: foldAddDays(start, index % 5),
      label: `Event ${index}`,
    };
  });
}

function timeLayout(events: readonly FoldCalendarEvent[]): number {
  foldBuildMonthGrid(events, { month: MONTH }); // warm
  const started = performance.now();
  for (let run = 0; run < RUNS; run += 1) {
    foldBuildMonthGrid(events, { month: MONTH });
  }
  return (performance.now() - started) / RUNS;
}

let failed = false;
console.log("month layout, mean of 20 runs\n");
for (const [size, budget] of BUDGETS) {
  const ms = timeLayout(feed(size));
  const over = ms > budget;
  failed ||= over;
  console.log(
    `${String(size).padStart(6)} events → ${ms.toFixed(2).padStart(6)} ms  ` +
      `(budget ${budget} ms) ${over ? "✗ OVER" : "✓"}`,
  );
}

if (failed) {
  console.error("\n✗ calendar layout is over budget.");
  process.exitCode = 1;
} else {
  console.log("\n✓ calendar layout within budget.");
}
