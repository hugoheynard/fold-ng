import { NgTemplateOutlet } from "@angular/common";
import {
  Component,
  DestroyRef,
  HostListener,
  effect,
  inject,
} from "@angular/core";
import { FocusTrapDirective } from "../a11y/focus-trap.directive";
import { ScrollLockService } from "../a11y/scroll-lock.service";
import { FoldPanelComponentOutletDirective } from "./panel-component-outlet.directive";
import { FoldPanelHostService } from "./panel-host.service";
import type { FoldPanelDescriptor } from "./panel.types";

/**
 * `<fold-panel-host>` — the single, layout-owned chrome for every side panel.
 *
 * Rendered **once** in the content region (typically inside the app shell). It
 * reads the {@link FoldPanelHostService} panels and wraps each in a **glass**
 * slide-in `<aside>` (no dark scrim — the surface itself is frosted),
 * `z-index: 50` stacking, focus-trap and body scroll-lock.
 *
 * Two content shapes:
 * - **template** — a projected `<side-panel>` body; the host supplies the shared
 *   header (title/subtitle/close).
 * - **component** — an imperatively-opened component that owns its whole
 *   header/body/footer; the host supplies only the shell.
 *
 * @selector `fold-panel-host`
 */
@Component({
  selector: "fold-panel-host",
  standalone: true,
  imports: [
    NgTemplateOutlet,
    FocusTrapDirective,
    FoldPanelComponentOutletDirective,
  ],
  templateUrl: "./panel-host.component.html",
  styleUrl: "./panel-host.component.scss",
})
export class FoldPanelHostComponent {
  private readonly host = inject(FoldPanelHostService);
  private readonly scrollLock = inject(ScrollLockService);

  readonly panels = this.host.panels;

  private locked = false;

  constructor() {
    // Freeze page scroll while any panel is open — once, not per panel.
    effect(() => {
      const shouldLock = this.panels().length > 0;
      if (shouldLock && !this.locked) {
        this.scrollLock.lock();
        this.locked = true;
      } else if (!shouldLock && this.locked) {
        this.scrollLock.unlock();
        this.locked = false;
      }
    });

    inject(DestroyRef).onDestroy(() => {
      if (this.locked) {
        this.scrollLock.unlock();
        this.locked = false;
      }
    });
  }

  /** The accessible label — a template panel's title, else the component owns it. */
  ariaLabel(panel: FoldPanelDescriptor): string | null {
    return panel.kind === "template" ? panel.title() : null;
  }

  /** Escape closes the top-most (last-opened) panel. */
  @HostListener("document:keydown.escape")
  onEscape(): void {
    const panels = this.panels();
    if (panels.length > 0) {
      panels[panels.length - 1].onClose();
    }
  }

  onBackdrop(event: MouseEvent, panel: FoldPanelDescriptor): void {
    if (event.target === event.currentTarget) {
      panel.onClose();
    }
  }
}
