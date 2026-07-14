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
  templateUrl: "./choice-row.component.html",
  // Inline + token-driven. Colours theme via @sh3pherd/ui; the layout constants
  // (gaps, motion) are literals for now — a spacing/motion scale lands when a
  // second component needs one.
  styleUrl: "./choice-row.component.scss",
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
