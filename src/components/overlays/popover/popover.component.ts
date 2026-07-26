import {
  afterRenderEffect,
  Component,
  contentChild,
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
import { FoldPopoverTriggerDirective } from "./popover-trigger.directive";

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
 * @example
 * ```html
 * <fold-popover placement="bottom-end">
 *   <button foldButton foldPopoverTrigger>Filters</button>
 *   <div class="my-panel">…</div>
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

  /** Preferred placement before collision handling. @default "bottom-start" */
  readonly placement = input<FoldPopoverPlacement>("bottom-start");
  /** Gap between the trigger and the panel, in px. @default 8 */
  readonly offset = input(8);
  /** Minimum gap kept from the viewport edge, in px. @default 8 */
  readonly padding = input(8);
  /** Move focus into the panel on open. @default true (a dropdown sets false to
   *  focus its first item instead). */
  readonly autoFocus = input(true);
  /** Two-way open state — drive it, or let the trigger toggle it. */
  readonly open = model(false);

  /** SSR-safe id linking the trigger's `aria-controls` to the panel. */
  readonly panelId = inject(FoldIdService).next("fold-popover");

  private readonly panel = viewChild<ElementRef<HTMLElement>>("panel");
  protected readonly trigger = contentChild(FoldPopoverTriggerDirective);

  constructor() {
    // Keep the trigger's aria in sync with open state + wiring.
    effect(() => {
      const t = this.trigger();
      if (!t) {
        return;
      }
      const el = t.el.nativeElement;
      this.renderer.setAttribute(el, "aria-controls", this.panelId);
      this.renderer.setAttribute(el, "aria-expanded", String(this.open()));
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
          const inTrigger =
            this.trigger()?.el.nativeElement.contains(target) ?? false;
          if (!inPanel && !inTrigger) {
            this.open.set(false);
          }
        };
        const onKey = (event: KeyboardEvent): void => {
          if (event.key === "Escape") {
            this.open.set(false);
          }
        };
        const onScroll = (): void => this.reposition();
        document.addEventListener("pointerdown", onDown, true);
        document.addEventListener("keydown", onKey, true);
        window.addEventListener("scroll", onScroll, true);
        window.addEventListener("resize", onScroll);
        onCleanup(() => {
          document.removeEventListener("pointerdown", onDown, true);
          document.removeEventListener("keydown", onKey, true);
          window.removeEventListener("scroll", onScroll, true);
          window.removeEventListener("resize", onScroll);
        });
      } else if (supported && el.matches(":popover-open")) {
        el.hidePopover();
        this.trigger()?.el.nativeElement.focus({ preventScroll: true });
      }
    });
  }

  /** Position the panel against the trigger with flip + shift. */
  private reposition(): void {
    const panel = this.panel()?.nativeElement;
    const anchorEl = this.trigger()?.el.nativeElement;
    if (!panel || !anchorEl) {
      return;
    }
    const anchor = anchorEl.getBoundingClientRect();
    const result = computePlacement({
      anchor,
      floating: { width: panel.offsetWidth, height: panel.offsetHeight },
      placement: this.placement(),
      offset: this.offset(),
      viewport: { width: window.innerWidth, height: window.innerHeight },
      padding: this.padding(),
    });
    this.renderer.setStyle(panel, "position", "fixed");
    this.renderer.setStyle(panel, "left", `${result.x}px`);
    this.renderer.setStyle(panel, "top", `${result.y}px`);
    this.renderer.setStyle(panel, "margin", "0");
    this.renderer.setAttribute(panel, "data-placement", result.placement);
  }

  protected onHostClick(event: MouseEvent): void {
    const target = event.target;
    if (
      target instanceof Node &&
      (this.trigger()?.el.nativeElement.contains(target) ?? false)
    ) {
      this.open.update((v) => !v);
    }
  }

  protected onArrowDown(event: Event): void {
    const target = event.target;
    if (
      target instanceof Node &&
      (this.trigger()?.el.nativeElement.contains(target) ?? false)
    ) {
      event.preventDefault();
      this.open.set(true);
    }
  }
}
