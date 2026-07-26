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
 * there is no circular import.
 */
export interface FoldListboxOwner {
  /** Is this option's value currently selected? (equality vs. membership.) */
  isSelected(value: string): boolean;
  /** The keyboard-active option's id — the listbox's `aria-activedescendant`. */
  readonly activeId: Signal<string | null>;
}

export const FOLD_LISTBOX_OWNER = new InjectionToken<FoldListboxOwner>(
  "FOLD_LISTBOX_OWNER",
);

/**
 * Dev-only guard: warn (once per value) when a control holds a value with no
 * matching `<fold-option>` — a silent "shows the placeholder" bug otherwise. Runs
 * in an `afterRenderEffect` so option `value`s are set before they're read (an
 * eager `effect` would hit `NG0950` reading a required input too early). Call from
 * a component constructor (an injection context).
 */
export function warnOnOrphanValue(
  value: () => string | readonly string[],
  options: () => readonly { value(): string }[],
  tag: string,
): void {
  if (!isDevMode()) {
    return;
  }
  const warned = new Set<string>();
  afterRenderEffect(() => {
    const opts = options();
    if (opts.length === 0) {
      return; // options may still be projecting — nothing to check against yet
    }
    const current = value();
    const values = typeof current === "string" ? [current] : current;
    for (const v of values) {
      if (v && !warned.has(v) && !opts.some((o) => o.value() === v)) {
        warned.add(v);
        console.warn(`[${tag}] value "${v}" has no matching <fold-option>.`);
      }
    }
  });
}
