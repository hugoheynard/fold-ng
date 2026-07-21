import {
  computed,
  Directive,
  effect,
  ElementRef,
  inject,
  input,
  numberAttribute,
  signal,
} from "@angular/core";

/**
 * `[galNarrow]` — reports whether the host element is at or below a width
 * threshold, so a gallery page can flip a layout at the same point the host's
 * container query folds (the default matches `sh3-aside-layout`'s 1040px fold).
 *
 * ```html
 * <sh3-aside-layout galNarrow #nav="galNarrow" stackLeftFirst>
 *   <sh3-tab-nav asideLeft [direction]="nav.narrow() ? 'horizontal' : 'vertical'" />
 * </sh3-aside-layout>
 * ```
 */
@Directive({
  selector: "[galNarrow]",
  standalone: true,
  exportAs: "galNarrow",
})
export class GalNarrowDirective {
  /** Width (px) at or below which the host counts as narrow. */
  readonly narrowAt = input(1040, { transform: numberAttribute });

  private readonly width = signal(0);
  /** True once measured and the host is at or below {@link narrowAt}. */
  readonly narrow = computed(
    () => this.width() > 0 && this.width() <= this.narrowAt(),
  );

  constructor() {
    const host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
    effect((onCleanup) => {
      if (typeof ResizeObserver === "undefined") {
        return;
      }
      const ro = new ResizeObserver((entries) => {
        this.width.set(entries[0].contentRect.width);
      });
      ro.observe(host);
      onCleanup(() => ro.disconnect());
    });
  }
}
