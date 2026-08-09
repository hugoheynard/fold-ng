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
import { FoldInputBaseComponent } from "./input-base.component";
import { readInputValue } from "./input-value";

/**
 * `<fold-time>` — the time-of-day sibling of {@link FoldDateComponent}: a thin
 * wrapper around a **native `<input type="time">`**, like `fold-select` wraps the
 * native `<select>`. It honours the project's Signal-Forms convention (native
 * `[value]` / `(input)`) and gives back a **typed `[(value)]`** (the native value
 * string, `HH:mm`, or `HH:mm:ss` when a sub-minute `step` is set) — so consumers
 * stop hand-writing an `inputValue($event)` reader on a bare `<input type="time">`.
 *
 * A separate control from `fold-date` (rather than a `type="time"` on it) so each
 * reads for what it is at the call site — the same "one control, one job" split as
 * {@link FoldInputComponent} vs {@link FoldNumberInputComponent}. Shares the exact
 * box chrome (tokens, sizes, `panel` variant) via `input-shell.scss` and the label
 * / required / hint / error chrome via {@link FoldInputBaseComponent}.
 *
 * @selector `fold-time`
 *
 * @example
 * ```html
 * <!-- Signal-forms bound -->
 * <fold-time label="Heure de retrait" [formField]="form.time" />
 *
 * <!-- Standalone two-way, whole-minute steps -->
 * <fold-time [step]="60" [(value)]="pickupTime" />
 * ```
 */
@Component({
  selector: "fold-time",
  standalone: true,
  imports: [FoldInputBaseComponent],
  templateUrl: "./time.component.html",
  styleUrl: "./date.component.scss",
  host: {
    "[class]": 'size() + " " + variant()',
  },
})
export class FoldTimeComponent implements FormValueControl<string> {
  /** The bound value — the native input string (`HH:mm` / `HH:mm:ss`). A
   *  `model()` so `FormField` and `[(value)]` both stay in sync. */
  readonly value = model<string>("");
  /** Disabled state — bound automatically by `FormField` from the field. */
  readonly disabled = input<boolean>(false);
  /** Two-way touched state — set on blur, kept in sync with the field. */
  readonly touched = model<boolean>(false);
  /** Validation errors — bound by `FormField` from the field. */
  readonly errors = input<readonly ValidationError.WithOptionalFieldTree[]>([]);

  /** Native `min` bound (e.g. `09:00`) — passes through to the input. Typed
   *  `string | undefined` (not `| null`) to stay assignable to the signal-forms
   *  `FormValueControl` reserved `min` field-state binding. */
  readonly min = input<string | undefined>(undefined);
  /** Native `max` bound (e.g. `18:00`) — passes through (see {@link min}). */
  readonly max = input<string | undefined>(undefined);
  /** Native `step` in seconds (e.g. `60` whole-minute, `1` seconds field). */
  readonly step = input<string | number | undefined>(undefined);

  /** Size preset — see {@link FoldInputComponent.size}. @default 'md' */
  readonly size = input<"sm" | "md" | "lg">("md");
  /** Visual variant — see {@link FoldInputComponent.variant}. @default 'default' */
  readonly variant = input<"default" | "panel">("default");

  /** Optional label displayed above the control. */
  readonly label = input<string>();
  /** Show a required marker on the label (and set the native `required`). */
  readonly required = input(false, { transform: booleanAttribute });
  /** Show a lighter `(optional)` marker on the label (ignored when required). */
  readonly optional = input(false, { transform: booleanAttribute });
  /** The word inside the optional marker. @default 'optional' */
  readonly optionalLabel = input("optional");
  /**
   * Longer explanation behind an `i` at the end of the label line — for the
   * sentence or two a {@link hint} can't carry. Forwarded to `fold-input-base`.
   */
  readonly info = input<string>();
  /** Accessible name of the info button. @default 'More information' */
  readonly infoLabel = input("More information");
  /** Optional helper text shown under the control. */
  readonly hint = input<string>();
  /** Render as read-only. Named `readOnly` (not `readonly`) to avoid the
   *  signal-forms `FormField` reserved `readonly` field-state binding. */
  readonly readOnly = input(false);

  /** Unique, SSR-safe id for label association (see {@link FoldIdService}). */
  readonly inputId = inject(FoldIdService).next("fold-time");

  /** The message to show under the field: the first error, once touched. */
  protected readonly errorMessage = computed<string | undefined>(() => {
    if (!this.touched()) {
      return undefined;
    }
    const first = this.errors()[0];
    return first ? (first.message ?? first.kind) : undefined;
  });

  /** `aria-describedby` target: the error when shown, else the hint, else none. */
  protected readonly describedBy = computed<string | null>(() => {
    if (this.errorMessage()) {
      return `${this.inputId}-error`;
    }
    return this.hint() ? `${this.inputId}-hint` : null;
  });

  /** Write the chosen native value back through the model. */
  onInputChange(event: Event): void {
    this.value.set(readInputValue(event));
  }

  /** Mark the field touched on blur, so errors can surface. */
  protected onBlur(): void {
    this.touched.set(true);
  }
}
