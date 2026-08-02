/**
 * Where overlapping timed events sit side by side — the time grid's only
 * genuinely algorithmic part, and the same shape as the month's lane packing
 * turned ninety degrees: intervals over **minutes** instead of days, laid out
 * across the column's width instead of down its height.
 *
 * Pure, so the rule can be exercised exhaustively without a grid.
 */

/** An interval to place, in minutes since midnight. */
export interface FoldOverlapInput {
  readonly startMinute: number;
  /** Exclusive: an event ending at 10:00 does not overlap one starting there. */
  readonly endMinute: number;
}

/** Where one interval landed across the width. */
export interface FoldOverlapSlot {
  /** Its column index inside the cluster, `0`-based. */
  readonly column: number;
  /** How many columns its cluster needed — the denominator of its width. */
  readonly columns: number;
}

/**
 * The narrowest an event is allowed to get. Past this, three overlapping
 * meetings are three unreadable slivers, and a reader is better served by a
 * `+N` than by a column two pixels wide — which is the caller's call to make,
 * so this only reports the number.
 */
const MIN_VISIBLE_COLUMNS = 1;

/** Whether two intervals actually share a minute. */
function overlaps(a: FoldOverlapInput, b: FoldOverlapInput): boolean {
  return a.startMinute < b.endMinute && b.startMinute < a.endMinute;
}

/**
 * Lays intervals out across the width, one slot per input, in input order.
 *
 * Two events that merely touch — one ends at 10:00, the next starts at 10:00 —
 * do **not** overlap and each keep the full width. That is the difference
 * between the month grid (inclusive days: touching means colliding) and a time
 * grid (exclusive minutes: touching means back-to-back), and getting it wrong
 * halves the width of every event in a packed morning.
 *
 * Events are grouped into **clusters** — runs connected by overlap — and each
 * cluster is widened only as far as it needs, so one triple-booked hour does
 * not narrow the rest of the day.
 */
export function foldLayOutOverlaps(
  intervals: readonly FoldOverlapInput[],
): readonly FoldOverlapSlot[] {
  const order = intervals
    .map((interval, index) => ({ interval, index }))
    .sort((a, b) =>
      a.interval.startMinute !== b.interval.startMinute
        ? a.interval.startMinute - b.interval.startMinute
        : b.interval.endMinute -
          b.interval.startMinute -
          (a.interval.endMinute - a.interval.startMinute),
    );

  const slots: FoldOverlapSlot[] = intervals.map(() => ({
    column: 0,
    columns: MIN_VISIBLE_COLUMNS,
  }));

  /** The cluster being filled: its members' indices and its lane end times. */
  let cluster: number[] = [];
  let laneEnds: number[] = [];

  const closeCluster = (): void => {
    for (const index of cluster) {
      slots[index] = {
        column: slots[index]?.column ?? 0,
        columns: laneEnds.length,
      };
    }
    cluster = [];
    laneEnds = [];
  };

  for (const { interval, index } of order) {
    // A cluster ends where nothing it holds is still running.
    const stillRunning = laneEnds.some((end) => end > interval.startMinute);
    if (!stillRunning && cluster.length > 0) {
      closeCluster();
    }

    const reusable = laneEnds.findIndex((end) => end <= interval.startMinute);
    const column = reusable === -1 ? laneEnds.length : reusable;
    laneEnds[column] = interval.endMinute;
    slots[index] = { column, columns: laneEnds.length };
    cluster.push(index);
  }
  if (cluster.length > 0) {
    closeCluster();
  }

  return slots;
}

/** Whether `a` and `b` would need separate columns — exported for tests. */
export function foldOverlaps(
  a: FoldOverlapInput,
  b: FoldOverlapInput,
): boolean {
  return overlaps(a, b);
}
