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

/**
 * A labelled group of options for the array API — the data-driven counterpart to
 * a projected `<fold-optgroup>`. Put groups (and/or plain options) in the
 * `[options]` array; the control renders each group's `options` under its
 * `label`, and keyboard nav still roves the flattened list in order.
 */
export interface FoldSelectOptionGroup<T> {
  /** The group heading — its accessible name; not selectable. */
  readonly label: string;
  /** The options under this heading. */
  readonly options: readonly FoldSelectOption<T>[];
}

/** One entry of the `[options]` array: a plain option or a labelled group. */
export type FoldSelectItem<T> = FoldSelectOption<T> | FoldSelectOptionGroup<T>;

/** True when an `[options]` entry is a group (has nested `options`), not a leaf. */
export function isFoldSelectOptionGroup<T>(
  item: FoldSelectItem<T>,
): item is FoldSelectOptionGroup<T> {
  return "options" in item;
}
