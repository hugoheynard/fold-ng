import { Component, computed, input, output } from "@angular/core";
import { readInputValue } from "../input/input-value";

/** A min↔max pair emitted by {@link Sh3RangeSliderComponent}. */
export type Sh3RangeValue = { min: number; max: number };

/**
 * `<sh3-range-slider>` — a dual-thumb range slider selecting a `{ min, max }`
 * window over `[min, max]`. Shares the design-system track / fill / thumb with
 * {@link Sh3SliderComponent}. For a single value, use `sh3-slider`.
 *
 * @selector `sh3-range-slider`
 *
 * @example
 * ```html
 * <sh3-range-slider label="BPM" [min]="60" [max]="220" [step]="5"
 *   [value]="bpm()" (valueChange)="onBpm($event)" />
 * ```
 */
@Component({
  selector: "sh3-range-slider",
  standalone: true,
  templateUrl: "./range-slider.component.html",
  styleUrl: "./range-slider.component.scss",
})
export class Sh3RangeSliderComponent {
  /** Label shown above the track. */
  readonly label = input.required<string>();
  /** Lower bound of the selectable range. @default 0 */
  readonly min = input<number>(0);
  /** Upper bound of the selectable range. @default 100 */
  readonly max = input<number>(100);
  /** Increment granularity. @default 1 */
  readonly step = input<number>(1);
  /** The current `{ min, max }` window; falls back to the full range when unset. */
  readonly value = input<Sh3RangeValue | undefined>(undefined);
  /** How the values are formatted for display. @default 'number' */
  readonly unit = input<"number" | "duration">("number");

  /** Emits the new window whenever either thumb moves. */
  readonly valueChange = output<Sh3RangeValue>();

  protected readonly currentMin = computed(
    () => this.value()?.min ?? this.min(),
  );
  protected readonly currentMax = computed(
    () => this.value()?.max ?? this.max(),
  );

  protected readonly fillLeft = computed(() => {
    const range = this.max() - this.min();
    return range === 0 ? 0 : ((this.currentMin() - this.min()) / range) * 100;
  });

  protected readonly fillWidth = computed(() => {
    const range = this.max() - this.min();
    if (range === 0) {
      return 100;
    }
    return ((this.currentMax() - this.currentMin()) / range) * 100;
  });

  protected formatValue(val: number): string {
    if (this.unit() === "duration") {
      const m = Math.floor(val / 60);
      const s = val % 60;
      return `${m}:${s.toString().padStart(2, "0")}`;
    }
    return String(val);
  }

  protected onMinChange(event: Event): void {
    const val = Number(readInputValue(event));
    this.valueChange.emit({
      min: Math.min(val, this.currentMax()),
      max: this.currentMax(),
    });
  }

  protected onMaxChange(event: Event): void {
    const val = Number(readInputValue(event));
    this.valueChange.emit({
      min: this.currentMin(),
      max: Math.max(val, this.currentMin()),
    });
  }
}
