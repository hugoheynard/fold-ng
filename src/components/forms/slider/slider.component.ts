import {
  booleanAttribute,
  Component,
  computed,
  inject,
  input,
  model,
} from "@angular/core";
import type { FormValueControl, ValidationError } from "@angular/forms/signals";
import { FoldIdService } from "../../../a11y/id.service";
import { readInputValue } from "../../forms/input/input-value";

/**
 * `<fold-slider>` — a single-value range slider with the design-system track,
 * fill and thumb (a styled native `<input type="range">`, so keyboard, focus and
 * the `slider` role are all native). The fill is a `--sl-pct` custom property, so
 * there is no overlay markup. For a min↔max pair, use {@link FoldRangeSliderComponent}.
 *
 * Integrates with signal forms via `FormValueControl<number>` (bind
 * `[formField]`), or drive it standalone with `[(value)]` / `(valueChange)`. A
 * visible `label` is a real `<label for>`; a `valueText` override is announced
 * to assistive tech through `aria-valuetext` (so a value that _means_ something —
 * `"off"`, `"12:30"` — reads as that, not the raw number).
 *
 * @selector `fold-slider`
 *
 * @example
 * ```html
 * <fold-slider label="Rail width" [min]="48" [max]="120" [(value)]="width" />
 * <fold-slider label="Volume" [formField]="form.volume" />
 * <fold-slider label="Min" [max]="10" [valueText]="min() || 'off'" [(value)]="min" />
 * ```
 */
@Component({
  selector: "fold-slider",
  standalone: true,
  templateUrl: "./slider.component.html",
  styleUrl: "./slider.component.scss",
})
export class FoldSliderComponent implements FormValueControl<number> {
  /** The bound value — a `model()`, so `[(value)]` and signal forms both sync. */
  readonly value = model<number>(0);
  /** Minimum value (also the field's min validator via `FormField`). @default 0 */
  readonly min = input<number | undefined>(0);
  /** Maximum value (also the field's max validator via `FormField`). @default 100 */
  readonly max = input<number | undefined>(100);
  /** Increment granularity. @default 1 */
  readonly step = input<number | undefined>(1);
  /** Optional visible label (a real `<label for>`), also the accessible name. */
  readonly label = input<string>();
  /** Accessible name when there is no visible `label`. */
  readonly ariaLabel = input<string>();
  /** Override the displayed + announced value text — e.g. `'off'` for "no bound". */
  readonly valueText = input<string>();
  /** Show the current value next to the label. @default true */
  readonly showValue = input(true, { transform: booleanAttribute });
  /** Optional helper text shown under the track. */
  readonly hint = input<string>();
  /** Disable interaction. */
  readonly disabled = input(false, { transform: booleanAttribute });
  /** Two-way touched state — set on blur so `FormField` can surface errors. */
  readonly touched = model<boolean>(false);
  /** Validation errors — bound by `FormField` from the field. */
  readonly errors = input<readonly ValidationError.WithOptionalFieldTree[]>([]);

  /** Unique, SSR-safe id for label + message association. */
  readonly inputId = inject(FoldIdService).next("fold-slider");

  /** Resolved bounds — the interface types min/max/step as `number | undefined`
   *  (a `FormField` may leave a bound unset); fall back to the standalone defaults. */
  protected readonly rMin = computed(() => this.min() ?? 0);
  protected readonly rMax = computed(() => this.max() ?? 100);
  protected readonly rStep = computed(() => this.step() ?? 1);

  /** Fill percentage (0–100) of the track, from the value within [min, max]. */
  protected readonly percent = computed<number>(() => {
    const range = this.rMax() - this.rMin();
    if (range <= 0) {
      return 0;
    }
    const pct = ((this.value() - this.rMin()) / range) * 100;
    return Math.max(0, Math.min(100, pct));
  });

  /** The value text to display: the explicit {@link valueText} override, else the number. */
  protected readonly display = computed<string>(
    () => this.valueText() ?? String(this.value()),
  );

  /** The message under the track: the first error once touched, else the hint. */
  protected readonly errorMessage = computed<string | undefined>(() => {
    if (!this.touched()) {
      return undefined;
    }
    const first = this.errors()[0];
    return first ? (first.message ?? first.kind) : undefined;
  });
  protected readonly message = computed<string | null>(
    () => this.errorMessage() ?? this.hint() ?? null,
  );
  protected readonly describedBy = computed<string | null>(() => {
    if (this.errorMessage()) {
      return `${this.inputId}-error`;
    }
    return this.hint() ? `${this.inputId}-hint` : null;
  });

  protected onInput(event: Event): void {
    this.value.set(Number(readInputValue(event)));
  }

  protected onBlur(): void {
    this.touched.set(true);
  }
}
