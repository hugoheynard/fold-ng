import {
  booleanAttribute,
  Component,
  computed,
  inject,
  input,
  model,
  signal,
} from "@angular/core";
import type { FormValueControl, ValidationError } from "@angular/forms/signals";
import { FoldIdService } from "../../../a11y/id.service";
import { FoldIconComponent } from "../../foundations/icon/icon.component";
import { FoldInputBaseComponent } from "./input-base.component";
import { readInputValue } from "./input-value";

/**
 * `<fold-input>` — the text-input control (`value: string`): the *edit* half of a
 * record, where {@link FoldFieldComponent} is the *read* half. It renders an
 * optional label + a native `<input>` styled to the tokens, plus the field
 * chrome from {@link FoldInputBaseComponent} (label / required / hint / error).
 * When bound via `[formField]`, it surfaces the field's first validation error
 * under the input once touched. For numeric fields use {@link
 * FoldNumberInputComponent} — a separate control so each keeps its true value
 * type instead of a `string | number` union.
 *
 * Integrates with signal forms via the `FormValueControl` contract (bind with
 * `[formField]`), or drive it standalone with `[(value)]` / `(valueChange)`.
 * Variant, size and alignment are applied as host classes (`:host(.sm.center)`).
 *
 * @selector `fold-input`
 *
 * @example
 * ```html
 * <!-- Signal-forms field -->
 * <fold-input placeholder="Version name…" [formField]="form.label" />
 *
 * <!-- Standalone two-way -->
 * <fold-input size="sm" placeholder="Filter…" [(value)]="term" />
 *
 * <!-- Read-only display -->
 * <fold-input [value]="title" [readOnly]="true" />
 * ```
 */
@Component({
  selector: "fold-input",
  standalone: true,
  imports: [FoldInputBaseComponent, FoldIconComponent],
  templateUrl: "./input.component.html",
  styleUrl: "./input.component.scss",
  host: {
    "[class]": 'size() + " " + align() + " " + variant()',
  },
})
export class FoldInputComponent implements FormValueControl<string> {
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
   * Native input type (text-like only; use {@link FoldNumberInputComponent} for numbers).
   * @default 'text'
   */
  readonly type = input<"text" | "email" | "password" | "tel" | "url">("text");
  /** On a `password` input, offer a reveal (eye) toggle to show/hide the value. */
  readonly revealable = input(false, { transform: booleanAttribute });
  /** Accessible name of the reveal control while hidden. @default 'Show password' */
  readonly revealLabel = input("Show password");
  /** Accessible name of the reveal control while shown. @default 'Hide password' */
  readonly hideLabel = input("Hide password");

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
   * - `default` — solid `--fold-color-surface-card` fill + focus glow ring;
   *   standalone forms (auth, profile, dialogs).
   * - `panel` — flatter `--fold-color-surface-raised` fill, no focus glow, roomier
   *   box (own padding / `radius-sm` / content-height, so `size` only drives the
   *   font); reproduces the legacy side-panel `.field-input`.
   * @default 'default'
   */
  readonly variant = input<"default" | "panel">("default");

  /** Optional label displayed above the input. */
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

  /**
   * Accessible name for the control itself, when there is **no visible
   * `label`** — a filter in a toolbar, a control whose meaning the surrounding
   * text already carries. Without it such a control reaches assistive tech named
   * only by its current value ("Week"), which says nothing about what it sets.
   *
   * Prefer a visible `label`: it names the control for *everyone*. Set this only
   * where the design genuinely has no room — and never both, since `aria-label`
   * would override the visible one and leave the two out of sync.
   */
  readonly ariaLabel = input<string | undefined>(undefined);
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

  /** Unique, SSR-safe id for label association (see {@link FoldIdService}). */
  readonly inputId = inject(FoldIdService).next("fold-input");

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

  /** Is the password currently revealed (shown as plain text)? */
  protected readonly revealed = signal(false);
  /** Whether to render the reveal toggle — a `revealable` password input. */
  protected readonly showReveal = computed(
    () => this.revealable() && this.type() === "password",
  );
  /** The native `type` to render — `text` while a password is revealed. */
  protected readonly effectiveType = computed(() =>
    this.showReveal() && this.revealed() ? "text" : this.type(),
  );
  /** The reveal control's accessible name, tracking its state. */
  protected readonly revealAria = computed(() =>
    this.revealed() ? this.hideLabel() : this.revealLabel(),
  );

  protected toggleReveal(): void {
    this.revealed.update((shown) => !shown);
  }

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
