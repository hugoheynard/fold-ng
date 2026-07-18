import { Component, inject, input, model, output } from "@angular/core";
import type { FormValueControl } from "@angular/forms/signals";
import { Sh3IdService } from "../../a11y/id.service";
import { readInputValue } from "./input-value";

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
  /** Placeholder text. */
  readonly placeholder = input("");
  /** Render as read-only. Named `readOnly` to avoid the `FormField` reserved binding. */
  readonly readOnly = input(false);

  /** Minimum value — passthrough + bound by a field's `min` validator. */
  readonly min = input<number | undefined>(undefined);
  /** Maximum value — passthrough + bound by a field's `max` validator. */
  readonly max = input<number | undefined>(undefined);
  /** Step increment for the native spinner / arrow keys. */
  readonly step = input<number | undefined>(undefined);

  /** Unique, SSR-safe id for label association (see {@link Sh3IdService}). */
  readonly inputId = inject(Sh3IdService).next("sh3-number-input");

  /** Parses the native value: empty → `null`, otherwise a `number`. */
  onInputChange(event: Event): void {
    const raw = readInputValue(event);
    this.value.set(raw === "" ? null : Number(raw));
  }
}
