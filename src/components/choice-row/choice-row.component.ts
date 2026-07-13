import { Component, input, output } from "@angular/core";

export type Sh3ChoiceOption = {
  key: string;
  label: string;
  /** Optional trailing count badge (e.g. how many rows match this filter). */
  count?: number;
};

/**
 * `<sh3-choice-row>` — a horizontal single-select control.
 *
 * One row, one active option, emits the chosen `key`; the parent owns the
 * state and feeds it back via `activeKey`. Two layouts:
 *
 * - `segmented` (default) — equal-width buttons that fill the row, no wrap.
 *   The right shape for a small mode/segment toggle (2–4 options).
 * - `chips` — auto-width rounded chips that wrap. The right shape for a
 *   status/category filter above a table or list.
 *
 * @selector `sh3-choice-row`
 *
 * @example
 * ```html
 * <sh3-choice-row
 *   [options]="[{ key: 'manager', label: 'Manager' }, { key: 'member', label: 'Member' }]"
 *   [activeKey]="role()"
 *   (selected)="role.set($event)"
 * />
 *
 * <sh3-choice-row
 *   layout="chips"
 *   [options]="statuses"
 *   [activeKey]="status()"
 *   ariaLabel="Filter by status"
 *   (selected)="setStatus($event)"
 * />
 * ```
 */
@Component({
  selector: "sh3-choice-row",
  standalone: true,
  template: `<div
    class="choice-row"
    role="group"
    [class.segmented]="layout() === 'segmented'"
    [class.chips]="layout() === 'chips'"
    [attr.aria-label]="ariaLabel() || null"
  >
    @for (opt of options(); track opt.key) {
      <button
        type="button"
        class="choice"
        [class.is-active]="activeKey() === opt.key"
        [attr.aria-pressed]="activeKey() === opt.key"
        (click)="selected.emit(opt.key)"
      >
        <span>{{ opt.label }}</span>
        @if (opt.count !== undefined) {
          <span class="choice-count">{{ opt.count }}</span>
        }
      </button>
    }
  </div>`,
  // Inline + token-driven. Colours theme via @sh3pherd/ui; the layout constants
  // (gaps, motion) are literals for now — a spacing/motion scale lands when a
  // second component needs one.
  styles: `
    :host {
      display: block;
    }
    .choice-row {
      display: flex;
      gap: 4px;
      user-select: none;
    }
    .choice-row.chips {
      flex-wrap: wrap;
    }
    .choice {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 7px;
      cursor: pointer;
      border: 1px solid var(--sh3-color-border);
      color: var(--sh3-color-text-muted);
      transition:
        color 0.1s ease,
        background 0.1s ease,
        border-color 0.1s ease;
    }
    .choice-count {
      color: var(--sh3-color-text-faded);
      font-variant-numeric: tabular-nums;
    }
    .choice.is-active .choice-count {
      color: var(--sh3-color-primary-text);
    }

    /* Segmented — equal-width rounded rectangles. */
    .choice-row.segmented .choice {
      flex: 1;
      padding: 5px 0;
      text-align: center;
      text-transform: capitalize;
      background: var(--sh3-color-surface-subtle);
      border-radius: var(--sh3-radius-sm);
      font-size: var(--sh3-text-xs);
      font-weight: 600;
    }
    .choice-row.segmented .choice:hover:not(.is-active) {
      background: var(--sh3-color-surface-raised);
    }
    .choice-row.segmented .choice.is-active {
      background: var(--sh3-color-primary-surface);
      border-color: var(--sh3-color-primary-border);
      color: var(--sh3-color-primary);
    }

    /* Chips — auto-width pills that wrap. */
    .choice-row.chips .choice {
      padding: 4px 12px;
      background: transparent;
      border-radius: var(--sh3-radius-pill);
      color: var(--sh3-color-text-secondary);
      font-size: var(--sh3-text-sm);
    }
    .choice-row.chips .choice:hover:not(.is-active) {
      color: var(--sh3-color-text);
      border-color: var(--sh3-color-primary-border);
    }
    .choice-row.chips .choice.is-active {
      background: var(--sh3-color-primary-surface);
      border-color: var(--sh3-color-primary-border);
      color: var(--sh3-color-primary-text);
      font-weight: 600;
    }
  `,
})
export class Sh3ChoiceRowComponent {
  /** The selectable options, in display order. */
  readonly options = input.required<readonly Sh3ChoiceOption[]>();

  /** The `key` of the currently selected option. */
  readonly activeKey = input.required<string>();

  /** `segmented` (equal-width, default) or `chips` (auto-width, wraps). */
  readonly layout = input<"segmented" | "chips">("segmented");

  /** Accessible label for the group. */
  readonly ariaLabel = input<string>("");

  /** Emits the `key` of the clicked option. */
  readonly selected = output<string>();
}
