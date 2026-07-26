import {
  booleanAttribute,
  Component,
  ElementRef,
  input,
  output,
  viewChild,
} from "@angular/core";
import { FoldIconComponent } from "../../foundations/icon/icon.component";
import type { FoldIconName } from "../../foundations/icon/builtin-icons";

/**
 * `<fold-dropdown-item>` — one actionable row inside a {@link FoldDropdownComponent}.
 * Renders a `role="menuitem"` button; emits `selected` on activation (click,
 * `Enter` or `Space`) and the parent closes the menu. Roving focus + arrow-key
 * navigation are owned by the dropdown.
 *
 * @selector `fold-dropdown-item`
 *
 * @example
 * ```html
 * <fold-dropdown-item icon="edit" (selected)="rename()">Rename</fold-dropdown-item>
 * <fold-dropdown-item tone="danger" (selected)="remove()">Delete</fold-dropdown-item>
 * ```
 */
@Component({
  selector: "fold-dropdown-item",
  standalone: true,
  imports: [FoldIconComponent],
  template: `
    <button
      #btn
      type="button"
      role="menuitem"
      class="fdrop-item"
      [class.is-danger]="tone() === 'danger'"
      tabindex="-1"
      [disabled]="disabled()"
      (click)="onClick()"
    >
      @if (icon(); as ic) {
        <fold-icon [name]="ic" size="sm" class="fdrop-item-icon" />
      }
      <span class="fdrop-item-label"><ng-content /></span>
    </button>
  `,
  styleUrl: "./dropdown-item.component.scss",
})
export class FoldDropdownItemComponent {
  /** Disable the row — skipped by keyboard navigation, inert to clicks. */
  readonly disabled = input(false, { transform: booleanAttribute });
  /** Visual tone. @default "default" */
  readonly tone = input<"default" | "danger">("default");
  /** Optional leading icon. */
  readonly icon = input<FoldIconName>();
  /** Emitted on activation (click / Enter / Space). */
  readonly selected = output();

  private readonly btn = viewChild<ElementRef<HTMLButtonElement>>("btn");

  /** The native button — the dropdown reads it for roving focus + typeahead. */
  get button(): HTMLButtonElement | undefined {
    return this.btn()?.nativeElement;
  }

  focus(): void {
    this.btn()?.nativeElement.focus();
  }

  protected onClick(): void {
    if (!this.disabled()) {
      this.selected.emit();
    }
  }
}
