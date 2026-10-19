import {
  type FoldSelectItem,
  type FoldSelectOption,
  isFoldSelectOptionGroup,
} from "./select-option";

/**
 * How a searchable option list narrows its options against a typed term —
 * shared by `fold-combobox` and a `searchable` `fold-multiselect`, so the two
 * match the same way. A function receives each option and the trimmed,
 * lower-cased term.
 */
export type FoldOptionFilter<T> =
  | "contains"
  | "startsWith"
  | ((option: FoldSelectOption<T>, term: string) => boolean);

/**
 * Does `option` pass `filter` for `term`? `term` is expected trimmed and
 * lower-cased; an empty term lets everything through. Internal — the one
 * matcher both controls call, so `"contains"` can't drift between them.
 */
export function foldOptionMatches<T>(
  option: FoldSelectOption<T>,
  filter: FoldOptionFilter<T>,
  term: string,
): boolean {
  if (term === "") {
    return true;
  }
  if (typeof filter === "function") {
    return filter(option, term);
  }
  const label = option.label.toLowerCase();
  return filter === "startsWith"
    ? label.startsWith(term)
    : label.includes(term);
}

/**
 * Narrow an `[options]` array, **keeping its groups**: a group keeps the
 * options that match and disappears when none do; plain options pass or not.
 * Returns the same array when the term is empty, so an unfiltered list keeps
 * its identity (and its rendered rows).
 */
export function foldFilterSelectItems<T>(
  items: readonly FoldSelectItem<T>[],
  filter: FoldOptionFilter<T>,
  term: string,
): readonly FoldSelectItem<T>[] {
  if (term === "") {
    return items;
  }
  const out: FoldSelectItem<T>[] = [];
  for (const item of items) {
    if (isFoldSelectOptionGroup(item)) {
      const options = item.options.filter((o) =>
        foldOptionMatches(o, filter, term),
      );
      if (options.length > 0) {
        out.push({ ...item, options });
      }
    } else if (foldOptionMatches(item, filter, term)) {
      out.push(item);
    }
  }
  return out;
}

/** Every option of an `[options]` array, groups flattened, in order. */
export function foldFlattenSelectItems<T>(
  items: readonly FoldSelectItem<T>[],
): readonly FoldSelectOption<T>[] {
  return items.flatMap((item) =>
    isFoldSelectOptionGroup(item) ? item.options : [item],
  );
}
