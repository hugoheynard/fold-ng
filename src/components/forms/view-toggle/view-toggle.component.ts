import {
  booleanAttribute,
  Component,
  computed,
  effect,
  ElementRef,
  inject,
  input,
  isDevMode,
  model,
} from "@angular/core";
import { FoldIconComponent } from "../../foundations/icon/icon.component";
import type { FoldIconName } from "../../foundations/icon/builtin-icons";

/**
 * A status marker on a segment — a small dot before its label, for a choice that
 * needs attention. `warning` (amber) is the common case: this option is
 * reachable and usable, but something behind it is incomplete.
 */
export type FoldViewToggleDot = "neutral" | "warning" | "alert" | "success";

/** One segment of a {@link FoldViewToggleComponent}. */
export interface FoldViewToggleOption {
  /** The value emitted when this segment is chosen. */
  readonly value: string;
  /** Optional leading icon. */
  readonly icon?: FoldIconName;
  /** Optional visible label. Omit for an icon-only segment (set `ariaLabel`). */
  readonly label?: string;
  /** Accessible name — required when there is no visible `label`. */
  readonly ariaLabel?: string;
  /** Disable this segment. */
  readonly disabled?: boolean;
  /**
   * A status dot before the label — see {@link FoldViewToggleDot}.
   *
   * It is **decorative on its own**: a dot says "look here", never *what*. Say
   * what, in words, beside the control — the toggle's job is the choice, not the
   * explanation. `dotLabel` names it for assistive tech when the words alone
   * would not reach a screen reader in time.
   */
  readonly dot?: FoldViewToggleDot;
  /** Accessible name for the {@link dot}, appended to the segment's name. */
  readonly dotLabel?: string;
}

/**
 * `<fold-view-toggle>` — a compact **segmented single-select** (Cards / Table, a
 * density switch, a chart mode…). Generic and zero-domain: pass `options` and
 * bind `[(value)]`. It's a proper `role="radiogroup"` of `role="radio"` segments
 * with roving tabindex and arrow-key selection (Home/End too), so it's a real
 * single-choice control, not two independent toggles.
 *
 * ```html
 * <fold-view-toggle
 *   ariaLabel="View"
 *   [options]="[
 *     { value: 'cards', icon: 'grid', ariaLabel: 'Cards' },
 *     { value: 'table', icon: 'list', ariaLabel: 'Table' },
 *   ]"
 *   [(value)]="view"
 * />
 * ```
 *
 * @selector `fold-view-toggle`
 */
@Component({
  selector: "fold-view-toggle",
  standalone: true,
  imports: [FoldIconComponent],
  templateUrl: "./view-toggle.component.html",
  styleUrl: "./view-toggle.component.scss",
  host: { "[class]": "size() + ' a-' + activeStyle()" },
})
export class FoldViewToggleComponent {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);

  /** The segments, in order. */
  readonly options = input.required<readonly FoldViewToggleOption[]>();
  /** The selected value. `[(value)]` / `FormField`-friendly. */
  readonly value = model.required<string>();
  /** Accessible name of the group. */
  readonly ariaLabel = input<string>();
  /** Size preset. @default 'md' */
  readonly size = input<"sm" | "md">("md");
  /**
   * How the selected segment reads: an `accent` brand tint (default) or a
   * neutral `raised` chip.
   *
   * The accent is the default for the same reason a button is solid by default:
   * a segmented control exists to show **which one is chosen**, and the chosen
   * one should be the loudest thing in the control. A neutral chip left that
   * distinction to a faint elevation — legible on a card, easy to lose on a
   * dense screen, and gone entirely under `forced-colors`. Reach for `raised`
   * when the toggle sits next to something more important than itself.
   */
  readonly activeStyle = input<"raised" | "accent">("accent");
  /** Hide visible labels, keeping icons only (labels stay as accessible names). */
  readonly iconOnly = input(false, { transform: booleanAttribute });

  constructor() {
    if (isDevMode()) {
      effect(() => {
        if (!this.ariaLabel()) {
          console.warn(
            "[fold-view-toggle] no `ariaLabel` — a radiogroup needs an accessible name.",
          );
        }
      });
    }
  }

  /** The segment holding the tab stop: the selected one when enabled, else the
   *  first enabled — never a disabled (unfocusable) segment, so Tab always
   *  reaches the group even if the selected value is disabled. */
  protected readonly rovingValue = computed<string | null>(() => {
    const options = this.options();
    const selected = options.find((o) => o.value === this.value());
    if (selected && !selected.disabled) {
      return selected.value;
    }
    return options.find((o) => !o.disabled)?.value ?? null;
  });

  /** Pick a segment (no-op if disabled or already selected). */
  protected select(option: FoldViewToggleOption): void {
    if (!option.disabled) {
      this.value.set(option.value);
    }
  }

  /** Arrow keys move the selection between enabled segments (radiogroup pattern). */
  protected onKeydown(event: KeyboardEvent): void {
    const enabled = this.options().filter((o) => !o.disabled);
    if (enabled.length === 0) {
      return;
    }
    const next = this.nextValue(event.key, enabled);
    if (next === null) {
      return;
    }
    event.preventDefault();
    this.value.set(next);
    this.focusValue(next);
  }

  /** The value to move to for a nav key, or null if the key isn't one. */
  private nextValue(
    key: string,
    enabled: readonly FoldViewToggleOption[],
  ): string | null {
    const current = Math.max(
      enabled.findIndex((o) => o.value === this.value()),
      0,
    );
    switch (key) {
      case "Home":
        return enabled[0]?.value ?? null;
      case "End":
        return enabled[enabled.length - 1]?.value ?? null;
      case "ArrowRight":
      case "ArrowDown":
        return enabled[(current + 1) % enabled.length]?.value ?? null;
      case "ArrowLeft":
      case "ArrowUp":
        return (
          enabled[(current - 1 + enabled.length) % enabled.length]?.value ??
          null
        );
      default:
        return null;
    }
  }

  private focusValue(value: string): void {
    const index = this.options().findIndex((o) => o.value === value);
    const buttons =
      this.host.nativeElement.querySelectorAll<HTMLButtonElement>(
        "[role='radio']",
      );
    buttons.item(index)?.focus();
  }

  /**
   * The segment's accessible name — its own, plus the dot's meaning when it
   * carries one. A dot is decorative in the DOM (`aria-hidden`), so without this
   * a screen-reader user hears "English" where a sighted user sees "English,
   * something is missing".
   */
  protected segmentName(option: FoldViewToggleOption): string | null {
    const base = option.ariaLabel ?? option.label ?? null;
    if (option.dotLabel === undefined) {
      return base;
    }
    return base === null ? option.dotLabel : `${base} — ${option.dotLabel}`;
  }
}
