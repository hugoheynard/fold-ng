import {
  booleanAttribute,
  Component,
  computed,
  inject,
  input,
  numberAttribute,
} from "@angular/core";
import { FoldIdService } from "../../../a11y/id.service";

/** Tone of the filled portion — the meaning of the measurement, not its size. */
export type FoldMeterTone = "accent" | "success" | "warning" | "alert";

/**
 * Tone of one segment. The meter's own tones, plus `muted` — a step that has
 * not started yet, drawn pale so the eye skips it. `alert` also tints the
 * segment's track, so an overrun reads even where the fill is short.
 */
export type FoldMeterSegmentTone = FoldMeterTone | "muted";

/**
 * One step of a segmented meter — a tier, a slot, a quota bucket.
 *
 * `max` is the step's own size: it sets both the scale of its fill and its
 * share of the width, so a step of 240 is drawn twice as wide as one of 120.
 */
export interface FoldMeterSegment {
  /** How much of this step is done, clamped into `[0, max]`. */
  readonly value: number;
  /** Size of the step. A step of `0` or less is drawn empty, never removed. */
  readonly max: number;
  /** Tone of the fill (default `accent`). */
  readonly tone?: FoldMeterSegmentTone | undefined;
  /** The step in progress — drawn thicker. Meant for one segment at a time. */
  readonly current?: boolean | undefined;
  /**
   * Short caption under the segment, also used to describe the step to
   * assistive tech. Plain text on purpose: the meter announces it, so it must
   * mean the same thing read aloud as on screen.
   */
  readonly label?: string | undefined;
}

/**
 * A read-only measurement within a known range — a completeness bar, a quota, a
 * score.
 *
 * **Not a progress bar and not a slider.** `fold-slider` is an
 * `input type="range"`: focusable, draggable, and it announces itself as
 * something you can change. A meter announces a value already decided — you read
 * it and move on. Drawing one as a bare `div` (the usual shortcut) gives screen
 * readers nothing at all, which is why this exists.
 *
 * @selector `fold-meter`
 *
 * @example
 * ```html
 * <fold-meter label="Complétude" [value]="6" [max]="9" />
 * <fold-meter label="Quota" [value]="92" [max]="100" tone="warning" showValue />
 * <!-- segmented: one bar per step, width ∝ step size -->
 * <fold-meter label="Sorties" [value]="0" [segments]="steps" showValue />
 * ```
 */
@Component({
  selector: "fold-meter",
  standalone: true,
  templateUrl: "./meter.component.html",
  styleUrl: "./meter.component.scss",
  host: {
    "[class]": "tone()",
    "[class.segmented]": "segments() !== null",
  },
})
export class FoldMeterComponent {
  /**
   * Accessible name — what is being measured.
   *
   * Required, and deliberately so: a bar with no name is a coloured rectangle.
   * Pass the same words the surrounding heading uses.
   */
  readonly label = input.required<string>();

  /**
   * Current value, clamped into `[min, max]`. Ignored when `segments` is set:
   * the total is then the sum of the segments.
   */
  readonly value = input.required({ transform: numberAttribute });

  /** Lower bound (default `0`). */
  readonly min = input(0, { transform: numberAttribute });

  /** Upper bound (default `100`). */
  readonly max = input(100, { transform: numberAttribute });

  /** Show `value / max` beside the bar. */
  readonly showValue = input(false, { transform: booleanAttribute });

  /** Tone of the fill. */
  readonly tone = input<FoldMeterTone>("accent");

  /**
   * Segmented mode — one bar per step, side by side, each as wide as its share
   * of the total and filled to its own `value / max`.
   *
   * `null` (the default) keeps the single bar. When set, `value`, `min`, `max`
   * and `tone` are ignored: the meter reports the sum of the segments, and
   * describes each step in `aria-valuetext`. A segment never shrinks below
   * `--fold-meter-segment-min` (96px by default), so the meter may overflow a
   * container narrower than its steps — wrap it, don't squeeze it.
   */
  readonly segments = input<readonly FoldMeterSegment[] | null>(null);

  /** Unique, SSR-safe id for label association (see {@link FoldIdService}). */
  protected readonly labelId = inject(FoldIdService).next("fold-meter");

  /**
   * The fill, in percent.
   *
   * Clamped rather than trusted: a value past `max` would paint outside the
   * track, and an inverted range (`min > max`) would divide by a negative — the
   * two ways a caller's arithmetic goes wrong.
   */
  protected readonly percent = computed(() => {
    const min = this.min();
    const span = this.max() - min;
    if (span <= 0) {
      return 0;
    }
    const ratio = (this.clamped() - min) / span;
    return Math.round(ratio * 1000) / 10;
  });

  protected readonly clamped = computed(() =>
    Math.min(Math.max(this.value(), this.min()), this.max()),
  );

  /** Segments resolved for drawing — clamped, with their fill and flex share. */
  protected readonly bars = computed(() =>
    (this.segments() ?? []).map((segment) => {
      const max = Math.max(segment.max, 0);
      const value = Math.min(Math.max(segment.value, 0), max);
      return {
        value,
        max,
        tone: segment.tone ?? "accent",
        current: segment.current === true,
        label: segment.label ?? null,
        percent: max === 0 ? 0 : Math.round((value / max) * 1000) / 10,
      };
    }),
  );

  /** Lower bound announced to assistive tech, in either mode. */
  protected readonly shownMin = computed(() =>
    this.segments() === null ? this.min() : 0,
  );

  /** Upper bound shown and announced, in either mode. */
  protected readonly shownMax = computed(() =>
    this.segments() === null
      ? this.max()
      : this.bars().reduce((sum, bar) => sum + bar.max, 0),
  );

  /** Value shown and announced, in either mode. */
  protected readonly shownValue = computed(() =>
    this.segments() === null
      ? this.clamped()
      : this.bars().reduce((sum, bar) => sum + bar.value, 0),
  );

  /**
   * Per-step reading for screen readers, e.g. `120 / 120 (avant 7 h) ; 60 / 120`.
   * A meter's children are presentational, so the steps exist for assistive
   * tech only through this text.
   */
  protected readonly valueText = computed(() =>
    this.segments() === null
      ? null
      : this.bars()
          .map((bar) =>
            bar.label === null
              ? `${bar.value} / ${bar.max}`
              : `${bar.value} / ${bar.max} (${bar.label})`,
          )
          .join(" ; "),
  );
}
