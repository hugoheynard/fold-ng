import {
  booleanAttribute,
  Component,
  computed,
  inject,
  input,
  model,
} from "@angular/core";
import type { FormValueControl, ValidationError } from "@angular/forms/signals";
import { Sh3IdService } from "../../a11y/id.service";
import { Sh3InputBaseComponent } from "./input-base.component";
import { readInputValue } from "./input-value";

/**
 * `<sh3-input>` — the text-input control (`value: string`): the *edit* half of a
 * record, where {@link Sh3FieldComponent} is the *read* half. It renders an
 * optional label + a native `<input>` styled to the tokens, plus the field
 * chrome from {@link Sh3InputBaseComponent} (label / required / hint / error).
 * When bound via `[formField]`, it surfaces the field's first validation error
 * under the input once touched. For numeric fields use {@link
 * Sh3NumberInputComponent} — a separate control so each keeps its true value
 * type instead of a `string | number` union.
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
 * <sh3-input size="sm" placeholder="Filter…" [(value)]="term" />
 *
 * <!-- Read-only display -->
 * <sh3-input [value]="title" [readOnly]="true" />
 * ```
 */
@Component({
  selector: "sh3-input",
  standalone: true,
  imports: [Sh3InputBaseComponent],
  templateUrl: "./input.component.html",
  styleUrl: "./input.component.scss",
  host: {
    "[class]": 'size() + " " + align() + " " + variant()',
  },
})
export class Sh3InputComponent implements FormValueControl<string> {
  /** The bound value — a `model()` so signal forms' `FormField` and `[(value)]`
   *  both keep it in sync. */
  readonly value = model<string>("");
  /** Disabled state — bound automatically by `FormField` from the field. */
  readonly disabled = input<boolean>(false);
  /** Two-way touched state — set on blur (so `FormField` marks the field
   *  touched), and kept in sync with the field's touched state. */
  readonly touched = model<boolean>(false);
  /** Validation errors — bound by `FormField` from the field. */
  readonly errors = input<readonly ValidationError.WithOptionalFieldTree[]>([]);
  /**
   * Native input type (text-like only; use {@link Sh3NumberInputComponent} for numbers).
   * @default 'text'
   */
  readonly type = input<"text" | "email" | "password" | "tel" | "url">("text");

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

  /** Show a required marker on the label (and set the native `required`). */
  readonly required = input(false, { transform: booleanAttribute });

  /** Optional helper text shown under the input. */
  readonly hint = input<string>();

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

  /** Unique, SSR-safe id for label association (see {@link Sh3IdService}). */
  readonly inputId = inject(Sh3IdService).next("sh3-input");

  /** The message to show under the field: the first error, once touched. */
  protected readonly errorMessage = computed<string | undefined>(() => {
    if (!this.touched()) {
      return undefined;
    }
    const first = this.errors()[0];
    return first ? (first.message ?? first.kind) : undefined;
  });

  /** Handles native input event. `value.set()` also fires the model's
   *  auto `valueChange` output for standalone `(valueChange)` consumers. */
  onInputChange(event: Event): void {
    this.value.set(readInputValue(event));
  }

  /** Mark the field touched on blur, so errors can surface. */
  protected onBlur(): void {
    this.touched.set(true);
  }
}
