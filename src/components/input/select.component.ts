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
import { Sh3IconComponent } from "../icon/icon.component";
import { Sh3InputBaseComponent } from "./input-base.component";
import { readInputValue } from "./input-value";

/**
 * `<sh3-select>` — the dropdown sibling of {@link Sh3InputComponent} and
 * `sh3-number-input`. A thin wrapper around a **native `<select>`** (like
 * `sh3-slider` wraps the native range), so it honours the project's Signal-Forms
 * convention (native `[value]` / `(change)`) rather than a bespoke ARIA listbox.
 *
 * Options are **projected** as real `<option>` elements, matching how the app
 * already writes them, so migrating a raw `<select>` is a mechanical wrap:
 *
 * ```html
 * <sh3-select label="Devise" [(value)]="currency" placeholder="Choisir…">
 *   @for (c of currencies; track c) {
 *     <option [value]="c">{{ c }}</option>
 *   }
 * </sh3-select>
 * ```
 *
 * Shares the exact box chrome (tokens, sizes, `panel` variant) as `sh3-input`
 * via `input-shell.scss`, and the label / required / hint / error chrome via
 * {@link Sh3InputBaseComponent}. The value is the native string; parse to a
 * number/id in the consumer (as with a raw `<select>`).
 *
 * @selector `sh3-select`
 */
@Component({
  selector: "sh3-select",
  standalone: true,
  imports: [Sh3InputBaseComponent, Sh3IconComponent],
  templateUrl: "./select.component.html",
  styleUrl: "./select.component.scss",
  host: {
    "[class]": 'size() + " " + variant()',
  },
})
export class Sh3SelectComponent implements FormValueControl<string> {
  /** The selected value (the native option string). A `model()` so `FormField`
   *  and `[(value)]` both stay in sync. */
  readonly value = model<string>("");
  /** Disabled state — bound automatically by `FormField`. */
  readonly disabled = input<boolean>(false);
  /** Two-way touched state — set on blur, kept in sync with the field. */
  readonly touched = model<boolean>(false);
  /** Validation errors — bound by `FormField`. */
  readonly errors = input<readonly ValidationError.WithOptionalFieldTree[]>([]);

  /** Size preset — see {@link Sh3InputComponent.size}. @default 'md' */
  readonly size = input<"sm" | "md" | "lg">("md");
  /** Visual variant — see {@link Sh3InputComponent.variant}. @default 'default' */
  readonly variant = input<"default" | "panel">("default");

  /** Optional label displayed above the control. */
  readonly label = input<string>();
  /** Show a required marker on the label (and set the native `required`). */
  readonly required = input(false, { transform: booleanAttribute });
  /** Optional helper text shown under the control. */
  readonly hint = input<string>();
  /** Optional placeholder — a leading, disabled option shown while empty. */
  readonly placeholder = input<string>();

  /** Unique, SSR-safe id for label association (see {@link Sh3IdService}). */
  readonly inputId = inject(Sh3IdService).next("sh3-select");

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
  onChange(event: Event): void {
    this.value.set(readInputValue(event));
  }

  /** Mark the field touched on blur, so errors can surface. */
  protected onBlur(): void {
    this.touched.set(true);
  }
}
