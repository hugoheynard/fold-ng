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
 * ```
 */
@Component({
  selector: "fold-meter",
  standalone: true,
  templateUrl: "./meter.component.html",
  styleUrl: "./meter.component.scss",
  host: {
    "[class]": "tone()",
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

  /** Current value, clamped into `[min, max]`. */
  readonly value = input.required({ transform: numberAttribute });

  /** Lower bound (default `0`). */
  readonly min = input(0, { transform: numberAttribute });

  /** Upper bound (default `100`). */
  readonly max = input(100, { transform: numberAttribute });

  /** Show `value / max` beside the bar. */
  readonly showValue = input(false, { transform: booleanAttribute });

  /** Tone of the fill. */
  readonly tone = input<FoldMeterTone>("accent");

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
}
