import {
  booleanAttribute,
  Component,
  computed,
  inject,
  input,
  model,
  numberAttribute,
} from "@angular/core";
import type { FormValueControl, ValidationError } from "@angular/forms/signals";
import { FoldIdService } from "../../../a11y/id.service";
import { FoldInputBaseComponent } from "./input-base.component";
import { readInputValue } from "./input-value";

/**
 * `<fold-textarea>` — the multiline sibling of {@link FoldInputComponent}
 * (`value: string`): a note / description field. It shares the exact box chrome
 * (tokens, sizes, `panel` variant, focus/disabled) as `fold-input` via
 * `input-shell.scss`, and the label / required / hint / error chrome via {@link
 * FoldInputBaseComponent} — so a multiline field is no longer a hand-rolled native
 * `<textarea>` + duplicated box CSS.
 *
 * **No resize handle by design** — the box has a fixed row count and **wraps +
 * scrolls** its overflow (`resize: none; overflow-y: auto`), so it never breaks a
 * panel/form layout the way a user-draggable corner does. Height is driven by
 * `rows` (the box shares the control font / padding / radius but not a fixed
 * height).
 *
 * Integrates with signal forms via the `FormValueControl` contract (bind with
 * `[formField]`), or drive it standalone with `[(value)]` / `(valueChange)`.
 *
 * @selector `fold-textarea`
 *
 * @example
 * ```html
 * <!-- Signal-forms field -->
 * <fold-textarea label="Note" [rows]="3" [formField]="form.note" />
 *
 * <!-- Standalone two-way -->
 * <fold-textarea placeholder="Consigne…" [(value)]="note" />
 * ```
 */
@Component({
  selector: "fold-textarea",
  standalone: true,
  imports: [FoldInputBaseComponent],
  templateUrl: "./textarea.component.html",
  styleUrl: "./textarea.component.scss",
  host: {
    "[class]": 'size() + " " + variant()',
  },
})
export class FoldTextareaComponent implements FormValueControl<string> {
  /** The bound value — a `model()` so signal forms' `FormField` and `[(value)]`
   *  both keep it in sync. */
  readonly value = model<string>("");
  /** Disabled state — bound automatically by `FormField` from the field. */
  readonly disabled = input<boolean>(false);
  /** Two-way touched state — set on blur, kept in sync with the field. */
  readonly touched = model<boolean>(false);
  /** Validation errors — bound by `FormField` from the field. */
  readonly errors = input<readonly ValidationError.WithOptionalFieldTree[]>([]);

  /** Visible row count — the initial (and, with no resize, effective) height.
   *  Overflow beyond it wraps and scrolls. @default 3 */
  readonly rows = input(3, { transform: numberAttribute });

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
  /** Placeholder text. */
  readonly placeholder = input("");
  /** Render as read-only. Named `readOnly` (not `readonly`) to avoid the
   *  signal-forms `FormField` reserved `readonly` field-state binding. */
  readonly readOnly = input(false);

  /** Unique, SSR-safe id for label association (see {@link FoldIdService}). */
  readonly inputId = inject(FoldIdService).next("fold-textarea");

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

  /** Handles native input event. `value.set()` also fires the model's auto
   *  `valueChange` output for standalone `(valueChange)` consumers. */
  onInputChange(event: Event): void {
    this.value.set(readInputValue(event));
  }

  /** Mark the field touched on blur, so errors can surface. */
  protected onBlur(): void {
    this.touched.set(true);
  }
}
