import {
  afterRenderEffect,
  booleanAttribute,
  Component,
  effect,
  ElementRef,
  inject,
  input,
  model,
  Renderer2,
  viewChild,
} from "@angular/core";
import { FoldIdService } from "../../../a11y/id.service";
import { computePlacement, type FoldPopoverPlacement } from "./placement";
import { autoUpdate } from "./auto-update";

/**
 * `<fold-popover>` — an anchored floating layer. Project a trigger
 * (`[foldPopoverTrigger]`) and any content; the content renders in the native
 * **top layer** (via the `popover` attribute, so it escapes `overflow: hidden`
 * and every `z-index`) and is positioned against the trigger with a
 * dependency-free flip/shift engine ({@link computePlacement}).
 *
 * Controlled or uncontrolled through `[(open)]`. Dismissal is owned here
 * (outside-click + `Escape`) rather than the browser's light-dismiss, so
 * re-clicking the trigger toggles cleanly instead of reopening. Opening moves
 * focus into the panel; closing returns it to the trigger. The trigger gets
 * `aria-haspopup` / `aria-expanded` / `aria-controls` wired automatically.
 *
 * For an actions menu with `role="menu"` + keyboard, use `fold-dropdown`, which
 * is built on this.
 *
 * @selector `fold-popover`
 *
 * The trigger carries `[foldPopoverTrigger]`; the floating content is marked
 * `foldPopoverPanel`.
 *
 * @example
 * ```html
 * <fold-popover placement="bottom-end">
 *   <button foldButton foldPopoverTrigger>Filters</button>
 *   <div foldPopoverPanel class="my-panel">…</div>
 * </fold-popover>
 * ```
 */
@Component({
  selector: "fold-popover",
  standalone: true,
  templateUrl: "./popover.component.html",
  styleUrl: "./popover.component.scss",
  host: {
    class: "fold-popover",
    "(click)": "onHostClick($event)",
    "(keydown.arrowdown)": "onArrowDown($event)",
  },
})
export class FoldPopoverComponent {
  private readonly renderer = inject(Renderer2);
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);

  /** Preferred placement before collision handling. @default "bottom-start" */
  readonly placement = input<FoldPopoverPlacement>("bottom-start");
  /** Ordered placements to try when the preferred can't fit (default: the
   *  opposite side). The first that fits wins, else the roomiest. */
  readonly fallbackPlacements = input<readonly FoldPopoverPlacement[]>();
  /** Gap between the trigger and the panel, in px. @default 8 */
  readonly offset = input(8);
  /** Minimum gap kept from the viewport edge, in px. @default 8 */
  readonly padding = input(8);
  /** Move focus into the panel on open. @default true (a dropdown sets false to
   *  focus its first item instead). */
  readonly autoFocus = input(true);
  /** Show a small arrow pointing at the trigger. @default false */
  readonly arrow = input(false, { transform: booleanAttribute });
  /** Two-way open state — drive it, or let the trigger toggle it. */
  readonly open = model(false);

  /** SSR-safe id linking the trigger's `aria-controls` to the panel. */
  readonly panelId = inject(FoldIdService).next("fold-popover");

  private readonly panel = viewChild<ElementRef<HTMLElement>>("panel");
  private readonly inner = viewChild<ElementRef<HTMLElement>>("inner");
  private readonly arrowEl = viewChild<ElementRef<HTMLElement>>("arrow");

  /**
   * The marked trigger — the projected `[foldPopoverTrigger]`. Found by DOM
   * query on the host (projected content is a DOM descendant of the host), so it
   * resolves regardless of how deeply it is re-projected (e.g. through
   * `fold-dropdown`) — a content query would not survive the re-projection. Used
   * to anchor against and to detect trigger clicks.
   */
  private markedTrigger(): HTMLElement | null {
    return this.host.nativeElement.querySelector<HTMLElement>(
      "[foldPopoverTrigger]",
    );
  }

  private static readonly FOCUSABLE =
    "button, a[href], input, select, textarea, [tabindex]";

  /**
   * The focusable trigger — the marked element itself if it's focusable, else
   * the first focusable inside it (e.g. `fold-button-icon`'s inner `<button>`).
   * This is what receives focus + the aria wiring, so a wrapper trigger is still
   * fully keyboard-accessible.
   */
  private focusableTrigger(): HTMLElement | null {
    const marked = this.markedTrigger();
    if (!marked) {
      return null;
    }
    if (marked.matches(FoldPopoverComponent.FOCUSABLE)) {
      return marked;
    }
    return marked.querySelector<HTMLElement>(FoldPopoverComponent.FOCUSABLE);
  }

  constructor() {
    // Keep the trigger's aria in sync — all on the focusable element, so a
    // screen reader announces haspopup/expanded/controls on the control it lands
    // on. `haspopup` comes from the marked element's attribute value.
    effect(() => {
      const open = this.open();
      const focusable = this.focusableTrigger();
      const marked = this.markedTrigger();
      if (!focusable || !marked) {
        return;
      }
      const hp = marked.getAttribute("foldpopovertrigger");
      const haspopup =
        hp === "menu" || hp === "listbox" || hp === "true" ? hp : "dialog";
      this.renderer.setAttribute(focusable, "aria-haspopup", haspopup);
      this.renderer.setAttribute(focusable, "aria-controls", this.panelId);
      this.renderer.setAttribute(focusable, "aria-expanded", String(open));
    });

    // Open/close the native popover + own the dismissal and positioning.
    afterRenderEffect((onCleanup) => {
      const el = this.panel()?.nativeElement;
      if (!el || typeof document === "undefined") {
        return;
      }
      const supported = typeof el.showPopover === "function";
      if (this.open()) {
        if (supported && !el.matches(":popover-open")) {
          el.showPopover();
        }
        this.reposition();
        if (this.autoFocus()) {
          el.focus({ preventScroll: true });
        }

        const onDown = (event: Event): void => {
          const target = event.target;
          if (!(target instanceof Node)) {
            return;
          }
          const inPanel = el.contains(target);
          const inTrigger = this.markedTrigger()?.contains(target) ?? false;
          if (!inPanel && !inTrigger) {
            this.open.set(false);
          }
        };
        const onKey = (event: KeyboardEvent): void => {
          if (event.key === "Escape") {
            this.open.set(false);
          }
        };
        document.addEventListener("pointerdown", onDown, true);
        document.addEventListener("keydown", onKey, true);
        // Keep pinned while open: scroll / resize / element-resize.
        const stopAutoUpdate = autoUpdate(this.markedTrigger(), el, () =>
          this.reposition(),
        );
        onCleanup(() => {
          document.removeEventListener("pointerdown", onDown, true);
          document.removeEventListener("keydown", onKey, true);
          stopAutoUpdate();
        });
      } else if (supported && el.matches(":popover-open")) {
        el.hidePopover();
        this.focusableTrigger()?.focus({ preventScroll: true });
      }
    });
  }

  /** Position the panel against the trigger: flip → size (cap + scroll) → shift,
   *  then place the arrow. */
  private reposition(): void {
    const panel = this.panel()?.nativeElement;
    const anchorEl = this.markedTrigger();
    if (!panel || !anchorEl) {
      return;
    }
    const anchor = anchorEl.getBoundingClientRect();
    const result = computePlacement({
      anchor,
      floating: { width: panel.offsetWidth, height: panel.offsetHeight },
      placement: this.placement(),
      fallbackPlacements: this.fallbackPlacements(),
      offset: this.offset(),
      viewport: { width: window.innerWidth, height: window.innerHeight },
      padding: this.padding(),
    });
    this.renderer.setStyle(panel, "position", "fixed");
    this.renderer.setStyle(panel, "left", `${result.x}px`);
    this.renderer.setStyle(panel, "top", `${result.y}px`);
    this.renderer.setStyle(panel, "margin", "0");
    this.renderer.setAttribute(panel, "data-placement", result.placement);
    // Apply the size caps only when positive — a degenerate 0-size viewport
    // (SSR / detached) must not collapse the panel to nothing.
    this.applyCap(panel, "max-width", result.maxWidth);
    this.applyCap(this.inner()?.nativeElement, "max-height", result.maxHeight);
    this.positionArrow(result.placement, anchor, result.x, result.y);
  }

  /** Set a `max-*` cap in px, but only when positive (skip a degenerate 0). */
  private applyCap(
    el: HTMLElement | undefined,
    prop: string,
    value: number,
  ): void {
    if (!el) {
      return;
    }
    if (value > 0) {
      this.renderer.setStyle(el, prop, `${value}px`);
    } else {
      this.renderer.removeStyle(el, prop);
    }
  }

  /** Center the arrow on the anchor along the cross axis, clamped to the panel. */
  private positionArrow(
    placement: FoldPopoverPlacement,
    anchor: DOMRect,
    x: number,
    y: number,
  ): void {
    const arrow = this.arrowEl()?.nativeElement;
    const panel = this.panel()?.nativeElement;
    if (!arrow || !panel) {
      return;
    }
    const side = placement.split("-")[0];
    const s = 11; // arrow box, px (matches .fpop-arrow)
    const inset = 6; // keep clear of the rounded corner
    const set = (prop: string, value: string): void =>
      this.renderer.setStyle(arrow, prop, value);
    for (const p of ["top", "bottom", "left", "right"]) {
      this.renderer.removeStyle(arrow, p);
    }
    if (side === "top" || side === "bottom") {
      const raw = anchor.x + anchor.width / 2 - x - s / 2;
      set(
        "left",
        `${Math.max(inset, Math.min(raw, panel.offsetWidth - s - inset))}px`,
      );
      set(side === "bottom" ? "top" : "bottom", `${-s / 2}px`);
    } else {
      const raw = anchor.y + anchor.height / 2 - y - s / 2;
      set(
        "top",
        `${Math.max(inset, Math.min(raw, panel.offsetHeight - s - inset))}px`,
      );
      set(side === "right" ? "left" : "right", `${-s / 2}px`);
    }
  }

  protected onHostClick(event: MouseEvent): void {
    const target = event.target;
    if (
      target instanceof Node &&
      (this.markedTrigger()?.contains(target) ?? false)
    ) {
      this.open.update((v) => !v);
    }
  }

  protected onArrowDown(event: Event): void {
    const target = event.target;
    if (
      target instanceof Node &&
      (this.markedTrigger()?.contains(target) ?? false)
    ) {
      event.preventDefault();
      this.open.set(true);
    }
  }
}
