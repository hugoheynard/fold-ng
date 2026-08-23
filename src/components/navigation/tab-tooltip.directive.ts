import {
  afterNextRender,
  DestroyRef,
  Directive,
  ElementRef,
  effect,
  inject,
  input,
  signal,
} from "@angular/core";
import { autoUpdate } from "../overlays/popover/auto-update";
import {
  computePlacement,
  type FoldPopoverSide,
} from "../overlays/popover/placement";

/** Distance between the icon and its tooltip, in px. */
const OFFSET = 6;
/** Keep-inside-the-viewport padding, in px. */
const PADDING = 8;

/**
 * Turns a collapsed tab's label into a **top-layer** tooltip.
 *
 * The label used to be `position: absolute` inside the bar, which worked only
 * as long as the bar never clipped. It does now: a busy collapsed horizontal
 * bar scrolls, and a scroller clips — that is what it is. Absolute positioning
 * and a scroll container cannot both be satisfied.
 *
 * The top layer settles it. The element stays exactly where it is in the DOM —
 * so the accessible name of the item is unchanged — but a shown `popover`
 * renders above everything, escaping every ancestor's overflow, with no
 * ancestor `overflow: visible` to arrange and nothing to reserve room for.
 *
 * Positioning reuses the popover family's own primitives rather than a second
 * implementation: `computePlacement` (flip + shift, so a tooltip near the
 * viewport edge moves to the other side instead of spilling) and `autoUpdate`
 * (so it follows while the bar scrolls under the pointer).
 */
@Directive({
  selector: "[foldTabTooltip]",
  standalone: true,
  host: { "[attr.popover]": "enabled() ? 'manual' : null" },
})
export class FoldTabTooltipDirective {
  /** True while this label acts as a tooltip rather than inline text. */
  readonly foldTabTooltip = input(false);

  /** Which side of the item it sits on — `right` on a rail, `bottom` on a bar. */
  readonly tooltipSide = input<FoldPopoverSide>("right");

  private readonly host =
    inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly enabledState = signal(false);
  private stopFollowing: (() => void) | null = null;
  /* Tracked, not read back off the element: `hidePopover()` throws when it is
     not open, and `:popover-open` is a selector happy-dom rejects outright — a
     DOMException on every teardown in the unit suite. */
  private open = false;

  /** Mirrors {@link foldTabTooltip}, but never leaves a popover open behind it. */
  protected readonly enabled = this.enabledState.asReadonly();

  constructor() {
    effect(() => {
      const on = this.foldTabTooltip();
      if (!on) {
        this.hide();
      }
      this.enabledState.set(on);
    });

    const destroyRef = inject(DestroyRef);
    destroyRef.onDestroy(() => this.hide());

    // Resolved after render, not in the constructor: an item built from an
    // `ng-template` is created detached, so `closest()` finds nothing yet — the
    // listeners would bind to null and the tooltip would never open.
    afterNextRender(() => {
      const item = this.host.closest<HTMLElement>(".tab-bar-item");
      if (item === null) {
        return;
      }
      const show = (): void => this.show(item);
      const hide = (): void => this.hide();
      item.addEventListener("pointerenter", show);
      item.addEventListener("pointerleave", hide);
      item.addEventListener("focus", show);
      item.addEventListener("blur", hide);
      destroyRef.onDestroy(() => {
        item.removeEventListener("pointerenter", show);
        item.removeEventListener("pointerleave", hide);
        item.removeEventListener("focus", show);
        item.removeEventListener("blur", hide);
      });
    });
  }

  private show(item: HTMLElement | null): void {
    if (!this.enabledState() || item === null) {
      return;
    }
    if (typeof this.host.showPopover !== "function") {
      return; // SSR, or a browser without the top layer — no tooltip, no crash.
    }
    this.host.showPopover();
    this.open = true;
    const place = (): void => this.place(item);
    place();
    this.stopFollowing = autoUpdate(item, this.host, place);
  }

  private place(item: HTMLElement): void {
    const anchor = item.getBoundingClientRect();
    const floating = this.host.getBoundingClientRect();
    const { x, y } = computePlacement({
      anchor,
      floating: { width: floating.width, height: floating.height },
      placement: this.tooltipSide(),
      offset: OFFSET,
      viewport: { width: window.innerWidth, height: window.innerHeight },
      padding: PADDING,
    });
    this.host.style.left = `${x}px`;
    this.host.style.top = `${y}px`;
  }

  private hide(): void {
    this.stopFollowing?.();
    this.stopFollowing = null;
    if (!this.open) {
      return;
    }
    this.open = false;
    this.host.hidePopover();
  }
}
