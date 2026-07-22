import {
  booleanAttribute,
  Component,
  computed,
  inject,
  input,
  model,
} from "@angular/core";
import { FoldIdService } from "../../../a11y/id.service";
import { readInputValue } from "../../forms/input/input-value";

/**
 * `<fold-slider>` — a single-value range slider with the design-system track,
 * fill and thumb (a styled native `<input type="range">`). Two-way bound via
 * `[(value)]`.
 *
 * The fill is driven by a `--sl-pct` custom property computed from the value, so
 * there is no overlay markup. For a min↔max pair, use {@link FoldRangeSliderComponent}.
 *
 * @selector `fold-slider`
 *
 * @example
 * ```html
 * <fold-slider label="railWidth" [min]="48" [max]="120" [(value)]="width" />
 * <fold-slider label="min" [max]="10" [valueText]="min() || 'off'" [(value)]="min" />
 * ```
 */
@Component({
  selector: "fold-slider",
  standalone: true,
  templateUrl: "./slider.component.html",
  styleUrl: "./slider.component.scss",
})
export class FoldSliderComponent {
  /** The bound value. A `model()` so `[(value)]` keeps it in sync. */
  readonly value = model<number>(0);
  /** Minimum value. @default 0 */
  readonly min = input<number>(0);
  /** Maximum value. @default 100 */
  readonly max = input<number>(100);
  /** Increment granularity. @default 1 */
  readonly step = input<number>(1);
  /** Optional label shown above the track (also the `aria-label`). */
  readonly label = input<string>();
  /** Override the displayed value text — e.g. `'off'` when the value means "no bound". */
  readonly valueText = input<string>();
  /** Show the current value next to the label. @default true */
  readonly showValue = input(true, { transform: booleanAttribute });
  /** Disable interaction. */
  readonly disabled = input(false, { transform: booleanAttribute });

  /** Unique, SSR-safe id for label association (see {@link FoldIdService}). */
  readonly inputId = inject(FoldIdService).next("fold-slider");

  /** Fill percentage (0–100) of the track, from the value within [min, max]. */
  protected readonly percent = computed<number>(() => {
    const range = this.max() - this.min();
    if (range <= 0) {
      return 0;
    }
    const pct = ((this.value() - this.min()) / range) * 100;
    return Math.max(0, Math.min(100, pct));
  });

  /** The value text to display: the explicit {@link valueText} override, else the number. */
  protected readonly display = computed<string>(
    () => this.valueText() ?? String(this.value()),
  );

  protected onInput(event: Event): void {
    this.value.set(Number(readInputValue(event)));
  }
}
