import {
  afterRenderEffect,
  Component,
  contentChildren,
  inject,
  input,
  model,
  Renderer2,
  signal,
} from "@angular/core";
import { FoldPopoverComponent } from "./popover.component";
import { FoldDropdownItemComponent } from "./dropdown-item.component";
import type { FoldPopoverPlacement } from "./placement";

/**
 * `<fold-dropdown>` — an actions menu built on {@link FoldPopoverComponent}.
 * Project a trigger (`[foldPopoverTrigger]`) and a list of
 * `<fold-dropdown-item>`s; the menu is a `role="menu"` with full keyboard
 * support (↑/↓ roving, `Home`/`End`, type-ahead), opens focused on its first
 * enabled item, and closes — returning focus to the trigger — when an item is
 * chosen or on `Escape` / outside-click. Give the trigger `foldPopoverTrigger="menu"`
 * so its `aria-haspopup` reads as a menu.
 *
 * @selector `fold-dropdown`
 *
 * @example
 * ```html
 * <fold-dropdown ariaLabel="Row actions">
 *   <fold-button-icon icon="more-vertical" tooltip="Actions" foldPopoverTrigger="menu" />
 *   <fold-dropdown-item icon="edit" (selected)="rename(row)">Rename</fold-dropdown-item>
 *   <fold-dropdown-item tone="danger" (selected)="remove(row)">Delete</fold-dropdown-item>
 * </fold-dropdown>
 * ```
 */
@Component({
  selector: "fold-dropdown",
  standalone: true,
  imports: [FoldPopoverComponent],
  templateUrl: "./dropdown.component.html",
  styleUrl: "./dropdown.component.scss",
})
export class FoldDropdownComponent {
  private readonly renderer = inject(Renderer2);

  /** Preferred placement. @default "bottom-start" */
  readonly placement = input<FoldPopoverPlacement>("bottom-start");
  /** Gap between trigger and menu, in px. @default 8 */
  readonly offset = input(8);
  /** Accessible name of the menu. */
  readonly ariaLabel = input<string>();
  /** Two-way open state. */
  readonly open = model(false);

  private readonly items = contentChildren(FoldDropdownItemComponent);
  /** Active row = index into {@link enabled}. Roving state lives here (not read
   *  from `document.activeElement`), so it stays correct regardless of focus. */
  private readonly active = signal(0);

  constructor() {
    // On open, arm + focus the first enabled item (popover auto-focus is off).
    afterRenderEffect(() => {
      if (this.open()) {
        this.focusIndex(0);
      }
    });
  }

  /** Enabled items only — keyboard nav + focus skip disabled rows. */
  private enabled(): FoldDropdownItemComponent[] {
    return this.items().filter((i) => !i.disabled());
  }

  private focusIndex(index: number): void {
    const items = this.enabled();
    if (items.length === 0) {
      return;
    }
    const idx = ((index % items.length) + items.length) % items.length;
    this.active.set(idx);
    for (const it of this.items()) {
      if (it.button) {
        this.renderer.setAttribute(it.button, "tabindex", "-1");
      }
    }
    const target = items[idx];
    if (target?.button) {
      this.renderer.setAttribute(target.button, "tabindex", "0");
    }
    target?.focus();
  }

  protected onMenuKeydown(event: KeyboardEvent): void {
    const items = this.enabled();
    if (items.length === 0) {
      return;
    }
    const current = this.active();
    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        this.focusIndex(current + 1);
        return;
      case "ArrowUp":
        event.preventDefault();
        this.focusIndex(current - 1);
        return;
      case "Home":
        event.preventDefault();
        this.focusIndex(0);
        return;
      case "End":
        event.preventDefault();
        this.focusIndex(items.length - 1);
        return;
      case "Tab":
        this.open.set(false);
        return;
      default:
        this.typeahead(event, items, current);
    }
  }

  private typeahead(
    event: KeyboardEvent,
    items: FoldDropdownItemComponent[],
    current: number,
  ): void {
    if (event.key.length !== 1 || event.ctrlKey || event.metaKey) {
      return;
    }
    const char = event.key.toLowerCase();
    for (let step = 1; step <= items.length; step += 1) {
      const idx = (current + step) % items.length;
      const label = items[idx]?.button?.textContent?.trim().toLowerCase() ?? "";
      if (label.startsWith(char)) {
        this.focusIndex(idx);
        return;
      }
    }
  }

  /** A menuitem was activated (click / Enter / Space bubbles here) → close. */
  protected onMenuActivate(event: MouseEvent): void {
    const target = event.target;
    if (!(target instanceof Element)) {
      return;
    }
    const btn = target.closest<HTMLButtonElement>("button[role='menuitem']");
    if (btn && !btn.disabled) {
      this.open.set(false);
    }
  }
}
