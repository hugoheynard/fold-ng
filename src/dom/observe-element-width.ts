import {
  DestroyRef,
  ElementRef,
  type Signal,
  inject,
  signal,
} from "@angular/core";

/**
 * A signal of an element's content-box **width** in px, kept live by a
 * `ResizeObserver`. Call it in an **injection context** (a component/directive
 * constructor or field initialiser); it wires the observer to the current
 * `ElementRef` — or an element you pass — and tears it down on destroy.
 *
 * This is the reusable half of container-responsiveness: the `ResizeObserver`
 * wiring, the SSR guard and the teardown, in one place. Each caller derives
 * whatever breakpoint policy it needs on top — a plain `computed(() => w() <=
 * 768)`, or a hysteretic state machine — instead of re-writing the observer.
 *
 * SSR / no-DOM safe: where `ResizeObserver` is undefined the signal stays at
 * its initial `0`, which every caller reads as "not yet measured" — and, for a
 * breakpoint, as the wide/default branch, the SSR-correct first paint. The
 * observer also ignores a `0` reading, so a detached or hidden element keeps
 * its last real width rather than flipping.
 *
 * @param element the element to observe; defaults to the injected host.
 * @returns a read-only signal of the current width in px (`0` until measured).
 */
export function observeElementWidth(
  element?: ElementRef<HTMLElement> | HTMLElement,
): Signal<number> {
  const host =
    element instanceof ElementRef
      ? element.nativeElement
      : (element ?? inject<ElementRef<HTMLElement>>(ElementRef).nativeElement);
  const width = signal(0);
  if (typeof ResizeObserver !== "undefined") {
    const observer = new ResizeObserver((entries) => {
      const measured = entries[0]?.contentRect.width ?? 0;
      if (measured > 0) {
        width.set(measured);
      }
    });
    observer.observe(host);
    inject(DestroyRef).onDestroy(() => observer.disconnect());
  }
  return width.asReadonly();
}
