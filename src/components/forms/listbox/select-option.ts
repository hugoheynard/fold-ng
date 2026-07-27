/**
 * A data-driven option for the array API of `fold-listbox` / `fold-multiselect`
 * (`[options]`). Use it — instead of projecting `<fold-option>` — when the list
 * is data, not markup: the value type is linked to the control's value at compile
 * time (no projection seam). For rich per-row content, project an
 * `<ng-template #option let-o>` alongside `[options]`; otherwise `label` renders.
 */
export interface FoldSelectOption<T> {
  /** The value written back to the control when the row is chosen. */
  readonly value: T;
  /** The row's visible text (also the type-ahead + trigger label). */
  readonly label: string;
  /** Skip in keyboard nav and block selection. @default false */
  readonly disabled?: boolean;
}
