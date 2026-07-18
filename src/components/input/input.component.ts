import { Component, inject, input, model, output } from "@angular/core";
import type { FormValueControl } from "@angular/forms/signals";
import { Sh3IdService } from "../../a11y/id.service";
import { readInputValue } from "./input-value";

/**
 * `<sh3-input>` — the text-input control: the *edit* half of a record, where
 * {@link Sh3FieldComponent} is the *read* half. It renders an optional label +
 * a native `<input>` styled to the tokens, and nothing more — validation chrome
 * (error / hint / required) is intentionally out of scope until a real form
 * needs it.
 *
 * Integrates with signal forms via the `FormValueControl` contract (bind with
 * `[formField]`), or drive it standalone with `[(value)]` / `(valueChange)`.
 * Variant, size and alignment are applied as host classes (`:host(.sm.center)`).
 *
 * @selector `sh3-input`
 *
 * @example
 * ```html
 * <!-- Signal-forms field -->
 * <sh3-input placeholder="Version name…" [formField]="form.label" />
 *
 * <!-- Standalone two-way -->
 * <sh3-input type="number" size="sm" align="center" placeholder="BPM" [(value)]="bpm" />
 *
 * <!-- Read-only display -->
 * <sh3-input [value]="title" [readOnly]="true" />
 * ```
 */
@Component({
  selector: "sh3-input",
  standalone: true,
  templateUrl: "./input.component.html",
  styleUrl: "./input.component.scss",
  host: {
    "[class]": 'size() + " " + align() + " " + variant()',
  },
})
export class Sh3InputComponent implements FormValueControl<string | number> {
  /** The bound value — a `model()` so signal forms' `FormField` and `[(value)]`
   *  both keep it in sync. */
  readonly value = model<string | number>("");
  /** Disabled state — bound automatically by `FormField` from the field. */
  readonly disabled = input<boolean>(false);
  /** Emitted on blur so `FormField` can mark the field touched. */
  readonly touch = output<void>();
  /**
   * Native input type.
   * @default 'text'
   */
  readonly type = input<
    "text" | "number" | "email" | "password" | "tel" | "url"
  >("text");

  /**
   * Size preset controlling height, font-size, padding and border-radius.
   * - `sm` — compact (text-sm, tight padding) — inline table edits, compact forms
   * - `md` — standard (text-md) — default form fields
   * - `lg` — large (text-lg, generous padding) — prominent inputs
   * @default 'md'
   */
  readonly size = input<"sm" | "md" | "lg">("md");

  /**
   * Text alignment inside the input.
   * - `start` — left-aligned (default for text)
   * - `center` — centered (useful for short number fields like BPM, duration)
   * @default 'start'
   */
  readonly align = input<"start" | "center">("start");

  /**
   * Visual variant.
   * - `default` — solid `--sh3-color-surface-card` fill + focus glow ring;
   *   standalone forms (auth, profile, dialogs).
   * - `panel` — flatter `--sh3-color-surface-raised` fill, no focus glow, roomier
   *   box (own padding / `radius-sm` / content-height, so `size` only drives the
   *   font); reproduces the legacy side-panel `.field-input`.
   * @default 'default'
   */
  readonly variant = input<"default" | "panel">("default");

  /** Optional label displayed above the input. */
  readonly label = input<string>();

  /** Placeholder text. */
  readonly placeholder = input("");

  /** Render as read-only. Named `readOnly` (not `readonly`) to avoid the
   *  signal-forms `FormField` reserved `readonly` field-state binding. */
  readonly readOnly = input(false);

  /** Whether to autofocus on mount. */
  readonly autofocus = input(false);

  /**
   * Native `autocomplete` attribute — passes through to the `<input>`.
   *
   * Recommended values for auth forms:
   * - login email → `email` (or `username`)
   * - login password → `current-password`
   * - register email → `email`
   * - register password → `new-password`
   * - given / family names → `given-name` / `family-name`
   *
   * Browsers and password managers (Dashlane, 1Password, etc.) rely on
   * this to fill credentials correctly and silence DOM warnings.
   */
  readonly autocomplete = input<string | null>(null);

  /** Minimum value (number inputs). Also bound by the signal-forms `FormField`
   *  directive from a field's `min` validator. Typed to the control's value type
   *  (`string | number`) — not just `number` — because `@angular/forms/signals`
   *  22 requires the `min`/`max` field-state bindings on a `FormValueControl<T>`
   *  to accept `NonNullable<T> | undefined`; `undefined` is the unset sentinel. */
  readonly min = input<string | number | undefined>(undefined);

  /** Maximum value (number inputs). See {@link min} for the type rationale. */
  readonly max = input<string | number | undefined>(undefined);

  /** Unique, SSR-safe id for label association (see {@link Sh3IdService}). */
  readonly inputId = inject(Sh3IdService).next("sh3-input");

  /** Handles native input event. `value.set()` also fires the model's
   *  auto `valueChange` output for standalone `(valueChange)` consumers. */
  onInputChange(event: Event): void {
    const val = readInputValue(event);
    const parsed = this.type() === "number" && val !== "" ? Number(val) : val;
    this.value.set(parsed);
  }
}
