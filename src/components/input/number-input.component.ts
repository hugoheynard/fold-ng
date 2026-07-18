import {
  booleanAttribute,
  Component,
  computed,
  DestroyRef,
  inject,
  input,
  model,
} from "@angular/core";
import type { FormValueControl, ValidationError } from "@angular/forms/signals";
import { Sh3IdService } from "../../a11y/id.service";
import { Sh3IconComponent } from "../icon/icon.component";
import { Sh3InputBaseComponent } from "./input-base.component";
import { readInputValue } from "./input-value";

/** The increment/decrement glyph: chevrons, `− / +`, or no buttons. */
export type Sh3NumberSpinner = "none" | "arrows" | "plusminus";
/** Where the spinner buttons sit: stacked inside the box, or flanking it. */
export type Sh3NumberControls = "inside" | "outside";

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
  /** Two-way touched state — set on blur (so `FormField` marks the field
   *  touched), and kept in sync with the field's touched state. */
  readonly touched = model<boolean>(false);
  /** Validation errors — bound by `FormField` from the field. */
  readonly errors = input<readonly ValidationError.WithOptionalFieldTree[]>([]);

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
   * The increment/decrement glyph.
   * - `arrows` — up/down chevrons (default).
   * - `plusminus` — `−` / `+` symbols.
   * - `none` — no buttons.
   * @default 'arrows'
   */
  readonly spinner = input<Sh3NumberSpinner>("arrows");

  /**
   * Where the buttons sit, independent of the {@link spinner} glyph.
   * - `inside` — stacked on the right edge, inside the box (default).
   * - `outside` — decrement left, increment right, flanking the box.
   * @default 'inside'
   */
  readonly controls = input<Sh3NumberControls>("inside");

  /** Show the {@link step} as a small suffix, so the increment is visible. */
  readonly showStep = input(false, { transform: booleanAttribute });

  /**
   * Keep the value on the step grid. When on, a manually typed value snaps to
   * the nearest valid `base + n·step` **on blur** (base is {@link min}, else 0),
   * then clamps to min/max — so free typing is allowed while editing, and the
   * settled value always respects the step. Off by default.
   */
  readonly snapToStep = input(false, { transform: booleanAttribute });

  /**
   * Cap the number of decimal places on the settled value: it is rounded to this
   * many decimals when stepping and on blur. `undefined` = unconstrained (any
   * decimals allowed). See {@link integer} for the `0` shorthand.
   */
  readonly decimals = input<number | undefined>(undefined);

  /** Shorthand for `decimals = 0` — integers only. Takes precedence over {@link decimals}. */
  readonly integer = input(false, { transform: booleanAttribute });

  /** Unique, SSR-safe id for label association (see {@link Sh3IdService}). */
  readonly inputId = inject(Sh3IdService).next("sh3-number-input");

  /** The effective step (defaults to 1 when unset). */
  protected readonly effectiveStep = computed(() => this.step() ?? 1);

  /** The resolved decimal cap: `0` when {@link integer}, else {@link decimals}. */
  private readonly maxDecimals = computed<number | undefined>(() =>
    this.integer() ? 0 : this.decimals(),
  );

  /** The native `step` attribute — `1` for integers with no explicit step. */
  protected readonly nativeStep = computed<number | undefined>(
    () => this.step() ?? (this.integer() ? 1 : undefined),
  );

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

  /** Whether any spinner button renders. */
  protected readonly hasControls = computed(() => this.spinner() !== "none");
  /** Non-interactive (disabled or read-only) → both buttons off. */
  private readonly frozen = computed(() => this.disabled() || this.readOnly());
  /** The increment button is disabled. */
  protected readonly incDisabled = computed(
    () => this.frozen() || this.atMax(),
  );
  /** The decrement button is disabled. */
  protected readonly decDisabled = computed(
    () => this.frozen() || this.atMin(),
  );

  /** The message to show under the field: the first error, once touched. */
  protected readonly errorMessage = computed<string | undefined>(() => {
    if (!this.touched()) {
      return undefined;
    }
    const first = this.errors()[0];
    return first ? (first.message ?? first.kind) : undefined;
  });

  /** Parses the native value: empty → `null`, otherwise a `number`. */
  onInputChange(event: Event): void {
    const raw = readInputValue(event);
    this.value.set(raw === "" ? null : Number(raw));
  }

  /** On blur: mark touched, snap onto the grid if enabled, else round to the decimal cap. */
  protected onBlur(): void {
    this.touched.set(true);
    const v = this.value();
    if (v === null || !Number.isFinite(v)) {
      return;
    }
    if (this.snapToStep()) {
      this.value.set(this.snap(v));
    } else if (this.maxDecimals() !== undefined) {
      this.value.set(Number(v.toFixed(this.roundPlaces())));
    }
  }

  private holdTimer: ReturnType<typeof setTimeout> | null = null;
  private holdInterval: ReturnType<typeof setInterval> | null = null;

  constructor() {
    inject(DestroyRef).onDestroy(() => this.holdStop());
  }

  /** Keyboard-only click (Enter/Space have `detail === 0`); pointer presses are
   *  driven by {@link holdStart} so they don't double-step. */
  protected onButtonClick(direction: 1 | -1, event: MouseEvent): void {
    if (event.detail === 0) {
      this.stepBy(direction);
    }
  }

  /** Pointer press: step once, then repeat after a hold, until release/bound. */
  protected holdStart(direction: 1 | -1): void {
    if (this.disabled() || this.readOnly()) {
      return;
    }
    this.stepBy(direction);
    this.holdTimer = setTimeout(() => {
      this.holdInterval = setInterval(() => {
        const before = this.value();
        this.stepBy(direction);
        if (this.value() === before) {
          this.holdStop(); // hit a bound — nothing more to do
        }
      }, 60);
    }, 350);
  }

  /** Stop any running hold-repeat (pointer released / left / component destroyed). */
  protected holdStop(): void {
    if (this.holdTimer !== null) {
      clearTimeout(this.holdTimer);
      this.holdTimer = null;
    }
    if (this.holdInterval !== null) {
      clearInterval(this.holdInterval);
      this.holdInterval = null;
    }
  }

  /** Nudge the value by ±step, clamped (and grid-snapped when enabled). */
  protected stepBy(direction: 1 | -1): void {
    if (this.disabled() || this.readOnly()) {
      return;
    }
    const raw = (this.value() ?? 0) + direction * this.effectiveStep();
    this.value.set(this.snapToStep() ? this.snap(raw) : this.clamp(raw));
    this.touched.set(true);
  }

  /** Decimal places implied by the step, so arithmetic doesn't drift (0.1+0.2). */
  private stepDecimals(): number {
    const s = String(this.effectiveStep());
    const dot = s.indexOf(".");
    return dot === -1 ? 0 : s.length - dot - 1;
  }

  /** Rounding precision for a settled value: the decimal cap when set, else the step's own. */
  private roundPlaces(): number {
    return this.maxDecimals() ?? this.stepDecimals();
  }

  /** Clamp to min/max and round to the effective precision. */
  private clamp(n: number): number {
    let out = Number(n.toFixed(this.roundPlaces()));
    const min = this.min();
    const max = this.max();
    if (min !== undefined) {
      out = Math.max(min, out);
    }
    if (max !== undefined) {
      out = Math.min(max, out);
    }
    return out;
  }

  /** Snap to the nearest `base + n·step` (base = min ?? 0), then clamp. */
  private snap(n: number): number {
    const step = this.effectiveStep();
    const base = this.min() ?? 0;
    return this.clamp(base + Math.round((n - base) / step) * step);
  }
}
