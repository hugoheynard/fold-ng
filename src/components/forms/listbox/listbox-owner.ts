import { InjectionToken, type Signal } from "@angular/core";

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
