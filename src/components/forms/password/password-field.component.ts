import {
  booleanAttribute,
  Component,
  computed,
  effect,
  input,
  model,
  output,
} from "@angular/core";
import type { FormValueControl, ValidationError } from "@angular/forms/signals";
import { FoldIconComponent } from "../../foundations/icon/icon.component";
import { FoldInputComponent } from "../input/input.component";
import {
  foldDefaultPasswordRules,
  type FoldPasswordRule,
} from "./password-rules";

/**
 * `<fold-password-field>` — a password input with a **live requirements
 * checklist**. Composes `fold-input[type=password][revealable]` (so it inherits
 * the tokened box, the label/hint/error chrome and the show/hide eye) and renders
 * a dot per {@link FoldPasswordRule} that turns on as the value satisfies it.
 *
 * The rules are **injected**, not hard-coded — a `RegExp` (via `foldRegexRule`),
 * a `zod` `safeParse`, a length check, anything (see {@link FoldPasswordRule}).
 * `rules` defaults to {@link foldDefaultPasswordRules}. `validChange` emits
 * whether every rule passes; Signal-Forms-native (`FormValueControl<string>`).
 *
 * ```html
 * <fold-password-field
 *   label="New password"
 *   [(value)]="password"
 *   (validChange)="ok.set($event)"
 * />
 * ```
 *
 * @selector `fold-password-field`
 */
@Component({
  selector: "fold-password-field",
  standalone: true,
  imports: [FoldInputComponent, FoldIconComponent],
  templateUrl: "./password-field.component.html",
  styleUrl: "./password-field.component.scss",
  exportAs: "foldPasswordField",
})
export class FoldPasswordFieldComponent implements FormValueControl<string> {
  /** The password value. A `model()` so `FormField` and `[(value)]` stay in sync. */
  readonly value = model<string>("");
  /** Disabled state — bound automatically by `FormField`. */
  readonly disabled = input<boolean>(false);
  /** Two-way touched state — forwarded to the inner input (set on blur). */
  readonly touched = model<boolean>(false);
  /** Validation errors — bound by `FormField`, shown under the input. */
  readonly errors = input<readonly ValidationError.WithOptionalFieldTree[]>([]);

  /** Label above the field. @default 'Password' */
  readonly label = input("Password");
  /** Placeholder text. */
  readonly placeholder = input("");
  /** Helper text under the input (above the rules). */
  readonly hint = input<string>();
  /** Show a required marker on the label. */
  readonly required = input(false, { transform: booleanAttribute });
  /** Size preset — see {@link FoldInputComponent.size}. @default 'md' */
  readonly size = input<"sm" | "md" | "lg">("md");
  /** Visual variant — see {@link FoldInputComponent.variant}. @default 'default' */
  readonly variant = input<"default" | "panel">("default");
  /** Native `autocomplete`. @default 'new-password' */
  readonly autocomplete = input<string | null>("new-password");
  /** Offer the reveal (eye) toggle. @default true */
  readonly revealable = input(true, { transform: booleanAttribute });

  /** The requirements to display and validate against. @default the built-ins. */
  readonly rules = input<readonly FoldPasswordRule[]>(
    foldDefaultPasswordRules(),
  );
  /** Built-in row marker: a filling `dot`, or a `check` tick on satisfied rows.
   *  @default 'dot' */
  readonly marker = input<"dot" | "check">("dot");
  /** Accessible name of the requirements list. @default 'Password requirements' */
  readonly rulesLabel = input("Password requirements");
  /** Word prefixed to a satisfied rule for screen readers. @default 'met' */
  readonly metLabel = input("met");
  /** Word prefixed to an unmet rule for screen readers. @default 'not met' */
  readonly unmetLabel = input("not met");

  /** Emits whether every rule passes, on each change. */
  readonly validChange = output<boolean>();

  /** Each rule paired with its live pass/fail state. Public + `exportAs`, so a
   *  custom `[rules]` projection can render its own list off the same state:
   *  `#pw="foldPasswordField"` then loop `pw.checklist()`. */
  readonly checklist = computed(() =>
    this.rules().map((r) => ({ label: r.label, met: r.test(this.value()) })),
  );
  /** True when every rule passes. */
  protected readonly allValid = computed(() =>
    this.checklist().every((r) => r.met),
  );

  constructor() {
    // Surface validity to the parent as it changes (initial state included).
    effect(() => this.validChange.emit(this.allValid()));
  }
}
