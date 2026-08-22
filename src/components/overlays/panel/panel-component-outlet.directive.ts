import {
  Directive,
  Renderer2,
  ViewContainerRef,
  effect,
  inject,
  input,
} from "@angular/core";
import type { FoldComponentPanelDescriptor } from "./panel.types";

/**
 * Mounts an imperatively-opened panel component inside the host: creates it with
 * the descriptor's injector (which provides its `FoldPanelRef`) and pushes the typed
 * `data` in via `setInput`. The component owns its own header/body/footer.
 *
 * ## The mounted host takes `display: contents`
 *
 * Without it the component's host element is a **single** flex child of the
 * panel column, so a projected `fold-panel-footer` is a grandchild — and its
 * `flex: none` ("stays pinned while the body scrolls") applied to nothing. The
 * footer scrolled away with the body and the panel's `overflow: hidden` clipped
 * it. Every consumer had to rediscover that its component must itself be a
 * full-height flex column; in one app, eleven panels out of twenty had, and the
 * nine that had not were quietly broken.
 *
 * `display: contents` removes that intermediate box, so the component's header,
 * body and footer become the panel column's **real** children and the chrome's
 * layout applies to them as documented.
 *
 * ⚠️ A box that isn't there paints nothing: a panel component that draws on its
 * own `:host` (background, border, padding) must move that onto an element
 * inside its template. Layout-only `:host` rules — the common case — simply
 * become redundant.
 */
@Directive({ selector: "[foldPanelComponentOutlet]" })
export class FoldPanelComponentOutletDirective {
  readonly descriptor = input.required<FoldComponentPanelDescriptor>({
    alias: "foldPanelComponentOutlet",
  });

  private readonly viewContainer = inject(ViewContainerRef);
  private readonly renderer = inject(Renderer2);

  constructor() {
    effect(() => {
      const descriptor = this.descriptor();
      this.viewContainer.clear();
      const ref = this.viewContainer.createComponent(descriptor.component, {
        injector: descriptor.injector,
      });
      // Via Renderer2 rather than `nativeElement.style` so this also runs where
      // there is no DOM (SSR): the panel is rendered server-side like anything
      // else, and a direct style write would throw there.
      this.renderer.setStyle(ref.location.nativeElement, "display", "contents");
      if (descriptor.data !== undefined) {
        ref.setInput("data", descriptor.data);
      }
    });
  }
}
