import { isDevMode } from "@angular/core";

import { foldToEpochDay, type FoldCalendarDate } from "./date";
import type { FoldCalendarEvent, FoldCalendarTone } from "./types";

/**
 * What the month grid actually places: not events, but **spans** — an event
 * reduced to the range it occupies, with a group collapsed into one.
 *
 * Separate from the geometry because "which events are one chip, and what does
 * that chip stand for" is a question about the feed, while lane packing is a
 * question about the row. Answering them in one file made both harder to read.
 */

/** An event (or a collapsed group of them) reduced to what layout cares about. */
export interface FoldLogicalSpan<T> {
  readonly key: string;
  readonly event: FoldCalendarEvent<T>;
  readonly start: FoldCalendarDate;
  readonly end: FoldCalendarDate;
  /** {@link start} as an epoch day — what the grid sorts and clips on. */
  readonly startDay: number;
  /** {@link end} as an epoch day, inclusive. */
  readonly endDay: number;
  readonly groupSize: number;
  readonly openStart: boolean;
  readonly openEnd: boolean;
}

/**
 * How loudly a tone asks to be looked at. A collapsed group shows its most
 * severe member, so an alert inside a group is never hidden behind a member
 * that happens to come first.
 */
const TONE_SEVERITY = {
  alert: 4,
  warning: 3,
  success: 2,
  neutral: 1,
  muted: 0,
} as const satisfies Record<FoldCalendarTone, number>;

/** Severity of an event's tone, `neutral` when it declares none. */
function severityOf<T>(event: FoldCalendarEvent<T>): number {
  return TONE_SEVERITY[event.tone ?? "neutral"];
}

/**
 * The span a single event occupies, with a reversed range put back in order.
 *
 * `end < start` is a caller bug, and left alone it renders **twice, wrongly**:
 * the grid's `grid-column: 5 / 2` is silently swapped by CSS so a band covers
 * days it does not cover, while every other view — which asks
 * `start <= day && end >= day` — reports the event as absent. Swapping makes
 * the two agree, and the dev warning names the event rather than leaving the
 * contradiction to be discovered in a screenshot.
 */
function spanOf<T>(
  event: FoldCalendarEvent<T>,
  key: string,
): FoldLogicalSpan<T> {
  const reversed = event.end < event.start;
  if (reversed && isDevMode()) {
    console.warn(
      `[fold-calendar] event "${event.id}" ends (${event.end}) before it starts (${event.start}); treating the range as reversed.`,
    );
  }
  const start = reversed ? event.end : event.start;
  const end = reversed ? event.start : event.end;
  return {
    key,
    event,
    start,
    end,
    startDay: foldToEpochDay(start),
    endDay: foldToEpochDay(end),
    groupSize: 1,
    openStart: event.openStart === true,
    openEnd: event.openEnd === true,
  };
}

/** Warns once per render when two events share an id. */
function warnDuplicateIds<T>(events: readonly FoldCalendarEvent<T>[]): void {
  const seen = new Set<string>();
  for (const event of events) {
    if (seen.has(event.id)) {
      console.warn(
        `[fold-calendar] two events share the id "${event.id}". Ids must be unique per render — use \`groupId\` to collapse events on purpose.`,
      );
      return;
    }
    seen.add(event.id);
  }
}

/**
 * Merges a member into the span standing for its group: the **union** of the
 * ranges (a group chip stopping short of a member it stands for would be a
 * lie), open on either side if **any** member is, and represented by the most
 * severe member so tone, icon, label and source all come from one event that
 * really exists.
 */
function mergeMember<T>(
  span: FoldLogicalSpan<T>,
  member: FoldLogicalSpan<T>,
): FoldLogicalSpan<T> {
  const takeover = severityOf(member.event) > severityOf(span.event);
  const opensFirst = span.startDay <= member.startDay;
  const endsLast = span.endDay >= member.endDay;
  return {
    key: span.key,
    event: takeover ? member.event : span.event,
    start: opensFirst ? span.start : member.start,
    end: endsLast ? span.end : member.end,
    startDay: opensFirst ? span.startDay : member.startDay,
    endDay: endsLast ? span.endDay : member.endDay,
    groupSize: span.groupSize + 1,
    openStart: span.openStart || member.openStart,
    openEnd: span.openEnd || member.openEnd,
  };
}

/**
 * One span per event, except where `groupId` asks for a collapsed chip.
 *
 * Identity keys carry the event's position, so two events that share an id stay
 * two spans: merging them would drop one silently, which is not something a
 * duplicated key should be able to do. Insertion order is preserved, so the
 * caller's ordering still decides ties.
 */
export function foldCollapseGroups<T>(
  events: readonly FoldCalendarEvent<T>[],
): readonly FoldLogicalSpan<T>[] {
  if (isDevMode()) {
    warnDuplicateIds(events);
  }
  const spans = new Map<string, FoldLogicalSpan<T>>();
  events.forEach((event, index) => {
    const key =
      event.groupId === undefined
        ? `event:${index}:${event.id}`
        : `group:${event.groupId}`;
    const incoming = spanOf(event, key);
    const existing = spans.get(key);
    spans.set(
      key,
      existing === undefined ? incoming : mergeMember(existing, incoming),
    );
  });
  return [...spans.values()];
}
