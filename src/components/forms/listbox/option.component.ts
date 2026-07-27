import {
  booleanAttribute,
  Component,
  computed,
  ElementRef,
  inject,
  input,
} from "@angular/core";
import { FoldIdService } from "../../../a11y/id.service";
import { FOLD_LISTBOX_OWNER } from "./listbox-owner";

/**
 * `<fold-option>` — a single choice inside a {@link FoldListboxComponent}. Project
 * as many as you need; the label is whatever you put inside (plain text, or richer
 * content — an icon, a description). It reads the parent for its own `is-selected`
 * / `is-active` state (computed, so nothing is pushed in during change detection —
 * which would read this required `value` before it is set), and exposes a stable
 * id the listbox points `aria-activedescendant` at.
 *
 * ```html
 * <fold-listbox [(value)]="currency">
 *   <fold-option value="EUR">Euro</fold-option>
 *   <fold-option value="USD" [disabled]="!usdAllowed">US Dollar</fold-option>
 * </fold-listbox>
 * ```
 *
 * @selector `fold-option`
 */
@Component({
  selector: "fold-option",
  standalone: true,
  template: "<ng-content />",
  styleUrl: "./option.component.scss",
  host: {
    role: "option",
    "[id]": "id",
    "[attr.aria-selected]": "selected()",
    "[attr.aria-disabled]": "disabled() || null",
    "[class.is-active]": "active()",
    "[class.is-selected]": "selected()",
    "[class.is-disabled]": "disabled()",
  },
})
export class FoldOptionComponent<T> {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly owner = inject(FOLD_LISTBOX_OWNER);

  /** The value written back to the listbox when this option is chosen. */
  readonly value = input.required<T>();
  /** Disabled options are skipped by keyboard nav and can't be selected. */
  readonly disabled = input(false, { transform: booleanAttribute });

  /** Stable, SSR-safe id — the listbox points `aria-activedescendant` at it. */
  readonly id = inject(FoldIdService).next("fold-option");

  /** Derived from the parent — evaluated lazily during this option's own render,
   *  so the required `value` is always set by the time it's read. */
  readonly selected = computed(() => this.owner.isSelected(this.value()));
  readonly active = computed(() => this.owner.activeId() === this.id);

  /** The option's visible text — used for the trigger label and type-ahead. */
  get label(): string {
    return this.host.nativeElement.textContent?.trim() ?? "";
  }

  /** Bring the option into view when it becomes keyboard-active. Optional-chained
   *  so it's a no-op where `scrollIntoView` is absent (jsdom, non-DOM SSR). */
  scrollIntoView(): void {
    this.host.nativeElement.scrollIntoView?.({ block: "nearest" });
  }
}
