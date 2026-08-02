import { Component, computed, inject, input, model } from "@angular/core";

import { FoldIconComponent } from "../../foundations/icon/icon.component";
import {
  FOLD_CALENDAR_LABELS,
  type FoldCalendarLabels,
} from "./calendar-labels";
import type { FoldCalendarEvent, FoldCalendarSource } from "./calendar.types";

/** A source, with what it currently contributes and whether it is showing. */
interface SourceChip {
  readonly source: FoldCalendarSource;
  readonly count: number;
  readonly shown: boolean;
}

/**
 * `<fold-calendar-source-filter>` — the chips that switch each feed of a
 * merged calendar on and off.
 *
 * A calendar usually shows several feeds at once (a programme, staff leave,
 * contracts). This owns the **selection** only: it counts what each feed
 * contributes and toggles it, and the caller runs `foldFilterBySource()` over
 * its own events. Keeping the two apart means the chips never need to know how
 * the events are fetched, and the filtering stays a pure function.
 *
 * ## Inputs
 * | Input     | Type                     | Default | Meaning |
 * |-----------|--------------------------|---------|---------|
 * | `sources` | `FoldCalendarSource[]`   | `[]`    | The feeds to offer. |
 * | `events`  | `FoldCalendarEvent<T>[]` | `[]`    | Counted per feed — pass the window on screen for live counts. |
 * | `active`  | `ReadonlySet<string>`    | all     | **Two-way.** The keys currently shown. |
 * | `labels`  | `Partial<FoldCalendarLabels>` | — | Per-instance label overrides. |
 *
 * ## Accessibility
 * Each chip is a **toggle**, so it carries `aria-pressed` in both states, and
 * its accessible name says which feed and whether it is showing — the tick and
 * the dot are colour, which cannot be the only carrier.
 *
 * @selector `fold-calendar-source-filter`
 *
 * @example
 * ```html
 * <fold-calendar-source-filter
 *   [sources]="sources"
 *   [events]="events()"
 *   [(active)]="activeSources"
 * />
 * <fold-calendar-month [events]="visibleEvents()" [(month)]="month" />
 * ```
 */
@Component({
  selector: "fold-calendar-source-filter",
  standalone: true,
  imports: [FoldIconComponent],
  templateUrl: "./calendar-source-filter.component.html",
  styleUrl: "./calendar-source-filter.component.scss",
})
export class FoldCalendarSourceFilterComponent<T> {
  /** The feeds to offer. */
  readonly sources = input<readonly FoldCalendarSource[]>([]);
  /** Events to count per feed; pass the window on screen for live counts. */
  readonly events = input<readonly FoldCalendarEvent<T>[]>([]);
  /**
   * The keys currently shown. Left unset every feed shows, so the filter is
   * useful before the caller has any selection state of its own.
   */
  readonly active = model<ReadonlySet<string> | null>(null);
  /** Per-instance label overrides (merged over the app-wide / English defaults). */
  readonly labels = input<Partial<FoldCalendarLabels>>();

  private readonly injectedLabels = inject(FOLD_CALENDAR_LABELS);

  protected readonly l = computed<FoldCalendarLabels>(() => ({
    ...this.injectedLabels,
    ...this.labels(),
  }));

  /** The effective selection — every key while `active` is unset. */
  private readonly shownKeys = computed<ReadonlySet<string>>(() => {
    const selected = this.active();
    if (selected !== null) {
      return selected;
    }
    return new Set(this.sources().map((source) => source.key));
  });

  protected readonly chips = computed<readonly SourceChip[]>(() => {
    const shown = this.shownKeys();
    const events = this.events();
    return this.sources().map((source) => ({
      source,
      count: events.filter((event) => event.sourceKey === source.key).length,
      shown: shown.has(source.key),
    }));
  });

  protected chipLabel(chip: SourceChip): string {
    return this.l().sourceState(chip.source.label, chip.shown);
  }

  /** Writes the next selection rather than mutating the set in place. */
  protected toggle(chip: SourceChip): void {
    const next = new Set(this.shownKeys());
    if (next.has(chip.source.key)) {
      next.delete(chip.source.key);
    } else {
      next.add(chip.source.key);
    }
    this.active.set(next);
  }
}
