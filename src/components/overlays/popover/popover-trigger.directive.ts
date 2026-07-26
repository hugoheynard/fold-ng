import { Directive, ElementRef, inject, input } from "@angular/core";

/**
 * Marks the element inside a `<fold-popover>` that opens it — apply to a real,
 * focusable control (a `foldButton`), or a wrapper whose first focusable child
 * is the control (a `fold-button-icon`). The popover anchors to this element,
 * and wires `aria-haspopup` / `aria-expanded` / `aria-controls` onto the
 * focusable control. The value picks the `aria-haspopup` token — it is reflected
 * to the marker attribute so both `foldPopoverTrigger="menu"` and
 * `[foldPopoverTrigger]="expr"` work.
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
  host: { "[attr.foldpopovertrigger]": "haspopup()" },
})
export class FoldPopoverTriggerDirective {
  /** The trigger's host element. */
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
