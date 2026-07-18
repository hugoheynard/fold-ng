import {
  booleanAttribute,
  Component,
  computed,
  inject,
  input,
  model,
  output,
} from "@angular/core";
import type { FormValueControl } from "@angular/forms/signals";
import { Sh3IdService } from "../../a11y/id.service";
import { Sh3IconComponent } from "../icon/icon.component";
import { Sh3InputBaseComponent } from "./input-base.component";
import { readInputValue } from "./input-value";

/** How the increment/decrement affordance renders. */
export type Sh3NumberSpinner = "none" | "arrows" | "stepper";

/**
 * `<sh3-number-input>` — the numeric sibling of {@link Sh3InputComponent}. Split
 * out on purpose: a number field's value is a `number`, not a string, so keeping
 * it separate lets each control carry its true type (`FormValueControl<number |
 * null>` here, `FormValueControl<string>` for text) instead of the leaky
 * `string | number` union one shared control would force onto every Signal Forms
 * field. It also keeps the number-only knobs ({@link min} / {@link max} /
 * {@link step}) off the text input.
 *
 * Empty is a first-class value: clearing the field sets `null` (not `0`, not
 * `NaN`), so an optional number reads correctly. Shares the exact visual shell as
 * `sh3-input` (same tokens, sizes, variants) via `input-shell.scss`.
 *
 * @selector `sh3-number-input`
 *
 * @example
 * ```html
 * <!-- Signal-forms field (form.bpm: number) -->
 * <sh3-number-input placeholder="BPM" [min]="0" [formField]="form.bpm" />
 *
 * <!-- Standalone two-way -->
 * <sh3-number-input align="center" [step]="0.5" [(value)]="gain" />
 * ```
 */
@Component({
  selector: "sh3-number-input",
  standalone: true,
  imports: [Sh3InputBaseComponent, Sh3IconComponent],
  templateUrl: "./number-input.component.html",
  styleUrl: "./number-input.component.scss",
  host: {
    "[class]": 'size() + " " + align() + " " + variant()',
  },
})
export class Sh3NumberInputComponent implements FormValueControl<
  number | null
> {
  /** The bound value — `null` when the field is empty. A `model()` so signal
   *  forms' `FormField` and `[(value)]` both keep it in sync. */
  readonly value = model<number | null>(null);
  /** Disabled state — bound automatically by `FormField` from the field. */
  readonly disabled = input<boolean>(false);
  /** Emitted on blur so `FormField` can mark the field touched. */
  readonly touch = output<void>();

  /** Size preset — see {@link Sh3InputComponent.size}. @default 'md' */
  readonly size = input<"sm" | "md" | "lg">("md");
  /** Text alignment inside the box. @default 'start' */
  readonly align = input<"start" | "center">("start");
  /** Visual variant — see {@link Sh3InputComponent.variant}. @default 'default' */
  readonly variant = input<"default" | "panel">("default");

  /** Optional label displayed above the input. */
  readonly label = input<string>();
  /** Show a required marker on the label (and set the native `required`). */
  readonly required = input(false, { transform: booleanAttribute });
  /** Optional helper text shown under the input. */
  readonly hint = input<string>();
  /** Placeholder text. */
  readonly placeholder = input("");
  /** Render as read-only. Named `readOnly` to avoid the `FormField` reserved binding. */
  readonly readOnly = input(false);

  /** Minimum value — passthrough + bound by a field's `min` validator. */
  readonly min = input<number | undefined>(undefined);
  /** Maximum value — passthrough + bound by a field's `max` validator. */
  readonly max = input<number | undefined>(undefined);
  /** Increment applied by the spinner buttons / arrow keys. @default 1 */
  readonly step = input<number | undefined>(undefined);

  /**
   * The increment/decrement affordance.
   * - `arrows` — a stacked up/down chevron on the right (default).
   * - `stepper` — `−` / `+` buttons flanking the field.
   * - `none` — plain field, no buttons.
   * @default 'arrows'
   */
  readonly spinner = input<Sh3NumberSpinner>("arrows");

  /** Show the {@link step} as a small suffix, so the increment is visible. */
  readonly showStep = input(false, { transform: booleanAttribute });

  /** Unique, SSR-safe id for label association (see {@link Sh3IdService}). */
  readonly inputId = inject(Sh3IdService).next("sh3-number-input");

  /** The effective step (defaults to 1 when unset). */
  protected readonly effectiveStep = computed(() => this.step() ?? 1);

  /** At/below the min bound — the decrement button is disabled. */
  protected readonly atMin = computed(() => {
    const min = this.min();
    const v = this.value();
    return min !== undefined && v !== null && v <= min;
  });

  /** At/above the max bound — the increment button is disabled. */
  protected readonly atMax = computed(() => {
    const max = this.max();
    const v = this.value();
    return max !== undefined && v !== null && v >= max;
  });

  /** Parses the native value: empty → `null`, otherwise a `number`. */
  onInputChange(event: Event): void {
    const raw = readInputValue(event);
    this.value.set(raw === "" ? null : Number(raw));
  }

  /** Nudge the value by ±step, clamped to min/max. Fires `touch`. */
  protected stepBy(direction: 1 | -1): void {
    if (this.disabled() || this.readOnly()) {
      return;
    }
    const base = this.value() ?? 0;
    let next = base + direction * this.effectiveStep();
    const min = this.min();
    const max = this.max();
    if (min !== undefined) {
      next = Math.max(min, next);
    }
    if (max !== undefined) {
      next = Math.min(max, next);
    }
    this.value.set(next);
    this.touch.emit();
  }
}
