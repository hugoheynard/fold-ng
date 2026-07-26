import {
  booleanAttribute,
  Component,
  computed,
  effect,
  inject,
  input,
  isDevMode,
  model,
} from "@angular/core";
import type {
  FormCheckboxControl,
  ValidationError,
} from "@angular/forms/signals";
import { FoldIdService } from "../../../a11y/id.service";

/**
 * `<fold-checkbox>` — the boolean form control. A **native** `<input
 * type="checkbox">` (so keyboard, focus, the `checkbox` role, form submission
 * and `indeterminate` all come for free) is visually replaced by a tokenised
 * box + check/dash mark: best-in-class semantics with full visual control.
 *
 * Drive it standalone with `[(checked)]` / `(checkedChange)`, or bind a signal
 * form field with `[formField]` (it implements `FormValueControl<boolean>`, so
 * the field's value **is** the checked state — `disabled`, `touched` and
 * `errors` are wired by `FormField`). `indeterminate` renders the mixed state
 * (e.g. a "select all" over a partial selection); it is a visual cue only —
 * clicking a mixed box checks it, as natively.
 *
 * Accessible by construction: the box is decorative, the native input carries
 * the semantics; a visible `label` wraps the input (click-to-toggle) and names
 * it, otherwise pass `ariaLabel`. Focus-visible ring, `prefers-reduced-motion`
 * and `forced-colors` are all handled.
 *
 * @selector `fold-checkbox`
 *
 * @example
 * ```html
 * <fold-checkbox label="Remember me" [(checked)]="remember" />
 * <fold-checkbox ariaLabel="Select row" [checked]="selected" (checkedChange)="toggle()" />
 * <fold-checkbox label="I accept the terms" required [formField]="form.consent" />
 * ```
 */
@Component({
  selector: "fold-checkbox",
  standalone: true,
  templateUrl: "./checkbox.component.html",
  styleUrl: "./checkbox.component.scss",
  host: { "[class]": "size()" },
})
export class FoldCheckboxComponent implements FormCheckboxControl {
  /** Checked state — the signal-forms field value. Bind with `[(checked)]`,
   *  `(checkedChange)`, or `[formField]`. */
  readonly checked = model<boolean>(false);

  /** Disabled state — bound automatically by `FormField`. */
  readonly disabled = input<boolean>(false);
  /** Two-way touched state — set on blur so `FormField` can surface errors. */
  readonly touched = model<boolean>(false);
  /** Validation errors — bound by `FormField` from the field. */
  readonly errors = input<readonly ValidationError.WithOptionalFieldTree[]>([]);

  /** Mixed / tri-state visual (native `indeterminate`, a property not attribute). */
  readonly indeterminate = input(false, { transform: booleanAttribute });

  /** Optional visible label — wraps the box, so clicking it toggles. */
  readonly label = input<string>();
  /** Accessible name when there is no visible `label`. */
  readonly ariaLabel = input<string>();
  /** Optional helper text shown under the control. */
  readonly hint = input<string>();
  /** Show a required marker on the label (and set the native `required`). */
  readonly required = input(false, { transform: booleanAttribute });
  /** Size preset — `sm` for dense rows/tables, `md` (default) for forms. */
  readonly size = input<"sm" | "md">("md");

  /** Unique, SSR-safe id for label + message association. */
  readonly inputId = inject(FoldIdService).next("fold-checkbox");

  /** The message under the control: the first error once touched, else the hint. */
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

  /** `aria-describedby` target: the error when shown, else the hint, else none. */
  protected readonly describedBy = computed<string | null>(() => {
    if (this.errorMessage()) {
      return `${this.inputId}-error`;
    }
    return this.hint() ? `${this.inputId}-hint` : null;
  });

  constructor() {
    // Dev guard: a checkbox with no visible label and no ariaLabel has no
    // accessible name — a hard a11y failure that is easy to miss.
    effect(() => {
      if (!isDevMode()) {
        return;
      }
      if (!this.label() && !this.ariaLabel()) {
        console.warn(
          "[fold-checkbox] has no accessible name: set `label` or `ariaLabel`.",
        );
      }
    });
  }

  /** Native change → sync the model (also fires the auto `checkedChange`). */
  onChange(event: Event): void {
    const target = event.target;
    if (target instanceof HTMLInputElement) {
      this.checked.set(target.checked);
    }
  }

  protected onBlur(): void {
    this.touched.set(true);
  }
}
