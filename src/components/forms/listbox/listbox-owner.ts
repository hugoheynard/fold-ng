import {
  afterRenderEffect,
  InjectionToken,
  isDevMode,
  type Signal,
} from "@angular/core";

/**
 * The contract a `fold-option` needs from whatever owns it — the single-select
 * `fold-listbox` or the multi-select `fold-multiselect`. Injected through a token
 * (not the concrete class) so an option stays decoupled from either component and
 * there is no circular import. Generic over the option value type `T`; the token
 * itself is erased to `unknown` (the option↔owner value link is a runtime
 * contract — content projection can't carry `T` statically).
 */
export interface FoldListboxOwner<T> {
  /** Is this option's value currently selected? (equality vs. membership.) */
  isSelected(value: T): boolean;
  /** The keyboard-active option's id — the listbox's `aria-activedescendant`. */
  readonly activeId: Signal<string | null>;
}

export const FOLD_LISTBOX_OWNER = new InjectionToken<FoldListboxOwner<unknown>>(
  "FOLD_LISTBOX_OWNER",
);

/**
 * Dev-only guard: warn (once per value) when a control holds a value with no
 * matching `<fold-option>` — a silent "shows the placeholder" bug otherwise, and
 * the runtime safety net for the value/option type link projection can't check at
 * compile time. Runs in an `afterRenderEffect` so option `value`s are set before
 * they're read (an eager `effect` would hit `NG0950` reading a required input too
 * early). Call from a component constructor (an injection context).
 *
 * `selected` yields the currently-held values (single-select passes `[]` or a
 * one-element array; multi-select its array), and `eq` is the owner's
 * `compareWith`, so object values match by identity, not reference.
 */
export function warnOnOrphanValue<T>(
  selected: () => readonly T[],
  options: () => readonly { value(): T }[],
  eq: (a: T, b: T) => boolean,
  tag: string,
): void {
  if (!isDevMode()) {
    return;
  }
  const warned = new Set<T>();
  afterRenderEffect(() => {
    const opts = options();
    if (opts.length === 0) {
      return; // options may still be projecting — nothing to check against yet
    }
    for (const v of selected()) {
      if (!warned.has(v) && !opts.some((o) => eq(o.value(), v))) {
        warned.add(v);
        console.warn(
          `[${tag}] value ${String(v)} has no matching <fold-option>.`,
        );
      }
    }
  });
}
