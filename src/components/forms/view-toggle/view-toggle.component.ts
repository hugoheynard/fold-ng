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
  /** How the selected segment reads: a neutral `raised` chip, or an `accent`
   *  brand tint. @default 'raised' */
  readonly activeStyle = input<"raised" | "accent">("raised");
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
}
