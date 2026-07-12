import {
  Directive,
  ViewContainerRef,
  effect,
  inject,
  input,
} from "@angular/core";
import type { ComponentPanelDescriptor } from "./panel.types";

/**
 * Mounts an imperatively-opened panel component inside the host: creates it with
 * the descriptor's injector (which provides its `PanelRef`) and pushes the typed
 * `data` in via `setInput`. The component owns its own header/body/footer.
 */
@Directive({ selector: "[sh3PanelComponentOutlet]" })
export class PanelComponentOutletDirective {
  readonly descriptor = input.required<ComponentPanelDescriptor>({
    alias: "sh3PanelComponentOutlet",
  });

  private readonly viewContainer = inject(ViewContainerRef);

  constructor() {
    effect(() => {
      const descriptor = this.descriptor();
      this.viewContainer.clear();
      const ref = this.viewContainer.createComponent(descriptor.component, {
        injector: descriptor.injector,
      });
      if (descriptor.data !== undefined) {
        ref.setInput("data", descriptor.data);
      }
    });
  }
}
