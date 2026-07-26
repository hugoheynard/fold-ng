import { Directive, ElementRef, inject, input } from "@angular/core";

/**
 * Marks the element inside a `<fold-popover>` that opens it — apply to a real,
 * focusable control (a `foldButton`, a `fold-button-icon`). The popover reads
 * this element to anchor against and wires `aria-haspopup` / `aria-expanded` /
 * `aria-controls` onto it; the value picks the `aria-haspopup` token.
 *
 * ```html
 * <fold-popover>
 *   <button foldButton foldPopoverTrigger="menu">Actions</button>
 *   …panel…
 * </fold-popover>
 * ```
 *
 * @selector `[foldPopoverTrigger]`
 */
@Directive({
  selector: "[foldPopoverTrigger]",
  standalone: true,
  host: { "[attr.aria-haspopup]": "haspopup()" },
})
export class FoldPopoverTriggerDirective {
  /** The trigger's host element — the popover anchors and wires aria on it. */
  readonly el = inject<ElementRef<HTMLElement>>(ElementRef);
  /**
   * `aria-haspopup` value. @default "dialog" (use "menu" for a dropdown). Bare
   * `foldPopoverTrigger` (no value) keeps the default.
   */
  readonly haspopup = input<FoldTriggerHaspopup, string>("dialog", {
    alias: "foldPopoverTrigger",
    transform: (value) =>
      value === "menu" || value === "listbox" || value === "true"
        ? value
        : "dialog",
  });
}

type FoldTriggerHaspopup = "menu" | "dialog" | "listbox" | "true";
