import {
  booleanAttribute,
  Component,
  computed,
  inject,
  input,
  model,
  output,
} from "@angular/core";
import { FoldIdService } from "../../../a11y/id.service";
import { readInputValue } from "../../forms/input/input-value";

/** A min↔max pair held by {@link FoldRangeSliderComponent}. */
export type FoldRangeValue = { min: number; max: number };

/**
 * `<fold-range-slider>` — a dual-thumb range slider selecting a `{ min, max }`
 * window over `[min, max]`. Shares the design-system track / fill / thumb with
 * {@link FoldSliderComponent}. For a single value, use `fold-slider`.
 *
 * Two-way bound via `[(value)]` (a `model()`), or one-way `[value]` +
 * `(valueChange)`. The thumbs never cross (each clamps against the other). The
 * pair is a labelled `role="group"`; each thumb announces its formatted value
 * through `aria-valuetext`, and the thumb names (`minLabel` / `maxLabel`) are
 * inputs so a non-English app can localise them.
 *
 * @selector `fold-range-slider`
 *
 * @example
 * ```html
 * <fold-range-slider label="BPM" [min]="60" [max]="220" [step]="5" [(value)]="bpm" />
 * ```
 */
@Component({
  selector: "fold-range-slider",
  standalone: true,
  templateUrl: "./range-slider.component.html",
  styleUrl: "./range-slider.component.scss",
})
export class FoldRangeSliderComponent {
  /** Label shown above the track (names the `role="group"`). */
  readonly label = input.required<string>();
  /** Lower bound of the selectable range. @default 0 */
  readonly min = input<number>(0);
  /** Upper bound of the selectable range. @default 100 */
  readonly max = input<number>(100);
  /** Increment granularity. @default 1 */
  readonly step = input<number>(1);
  /** The current `{ min, max }` window; falls back to the full range when unset.
   *  A `model()`, so `[(value)]` and `(valueChange)` both work. */
  readonly value = model<FoldRangeValue | undefined>(undefined);
  /** Fires when the **user drags a thumb** — carries the resolved `{ min, max }`,
   *  never `undefined`. Use it for the common "filter on change" case to skip the
   *  `FoldRangeValue | undefined` narrowing that `[(value)]` / `valueChange`
   *  require. */
  readonly rangeChange = output<FoldRangeValue>();
  /** How the values are formatted for display + `aria-valuetext`. @default 'number' */
  readonly unit = input<"number" | "duration">("number");
  /** Disable both thumbs. */
  readonly disabled = input(false, { transform: booleanAttribute });
  /** Accessible name suffix for the lower thumb. @default 'minimum' */
  readonly minLabel = input("minimum");
  /** Accessible name suffix for the upper thumb. @default 'maximum' */
  readonly maxLabel = input("maximum");

  /** Id of the visible label, so the group can point at it. */
  readonly labelId = inject(FoldIdService).next("fold-range");

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
    this.commit({
      min: Math.min(val, this.currentMax()),
      max: this.currentMax(),
    });
  }

  protected onMaxChange(event: Event): void {
    const val = Number(readInputValue(event));
    this.commit({
      min: this.currentMin(),
      max: Math.max(val, this.currentMin()),
    });
  }

  private commit(next: FoldRangeValue): void {
    this.value.set(next);
    this.rangeChange.emit(next);
  }
}
