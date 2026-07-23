import { DOCUMENT, NgTemplateOutlet } from "@angular/common";
import {
  Component,
  DestroyRef,
  ElementRef,
  HostListener,
  effect,
  inject,
} from "@angular/core";
import { FocusTrapDirective } from "../../../a11y/focus-trap.directive";
import { ScrollLockService } from "../../../a11y/scroll-lock.service";
import { FoldPanelComponentOutletDirective } from "./panel-component-outlet.directive";
import { FoldPanelHeaderComponent } from "./panel-header.component";
import { FoldPanelHostService } from "./panel-host.service";
import { foldPanelTitleId } from "./panel.types";
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
 * **Modal barrier.** While any panel is open, everything outside the panel is
 * marked `inert` (a `hideOthers` walk from the host up to `<body>`), so the
 * background is unreachable by pointer, Tab **and** the screen-reader virtual
 * cursor — the completion of the `aria-modal="true"` promise. Only the
 * top-most panel traps focus; the page scroll is frozen once, not per panel.
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
    FoldPanelHeaderComponent,
  ],
  templateUrl: "./panel-host.component.html",
  styleUrl: "./panel-host.component.scss",
})
export class FoldPanelHostComponent {
  private readonly host = inject(FoldPanelHostService);
  private readonly scrollLock = inject(ScrollLockService);
  private readonly element = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly document = inject(DOCUMENT);

  readonly panels = this.host.panels;

  private locked = false;
  /** Elements this host made `inert`, so it removes exactly those on close. */
  private inerted: HTMLElement[] = [];

  constructor() {
    // Freeze page scroll + inert the background while any panel is open — once,
    // driven by whether the panel list is non-empty.
    effect(() => {
      const open = this.panels().length > 0;
      if (open && !this.locked) {
        this.scrollLock.lock();
        this.applyBackgroundBarrier();
        this.locked = true;
      } else if (!open && this.locked) {
        this.scrollLock.unlock();
        this.removeBackgroundBarrier();
        this.locked = false;
      }
    });

    inject(DestroyRef).onDestroy(() => {
      if (this.locked) {
        this.scrollLock.unlock();
        this.removeBackgroundBarrier();
        this.locked = false;
      }
    });
  }

  /** Explicit `aria-label`, or null when the name comes from `aria-labelledby`. */
  ariaLabel(panel: FoldPanelDescriptor): string | null {
    if (panel.kind === "template") {
      return panel.title();
    }
    return panel.ariaLabel ?? null;
  }

  /**
   * `aria-labelledby` id for a component panel with no explicit label — points
   * at the `fold-panel-header` title. Null for template panels (they use
   * `aria-label`) and for component panels given an explicit `ariaLabel`.
   */
  ariaLabelledby(panel: FoldPanelDescriptor): string | null {
    if (panel.kind === "component" && !panel.ariaLabel) {
      return foldPanelTitleId(panel.id);
    }
    return null;
  }

  /** Only the last-opened panel traps focus, so stacked panels don't fight. */
  isTopMost(panel: FoldPanelDescriptor): boolean {
    const panels = this.panels();
    return panels.length > 0 && panels[panels.length - 1].id === panel.id;
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

  /**
   * Mark every branch of the DOM that doesn't contain this host as `inert`, from
   * the host up to `<body>`. Skips elements already inert (so a nested overlay's
   * barrier isn't torn down here). The panels live inside this host, so they
   * stay interactive.
   */
  private applyBackgroundBarrier(): void {
    let node: HTMLElement | null = this.element.nativeElement;
    const body = this.document.body;
    while (node && node !== body && node.parentElement) {
      for (const sibling of Array.from(node.parentElement.children)) {
        if (
          sibling !== node &&
          sibling instanceof HTMLElement &&
          !sibling.hasAttribute("inert")
        ) {
          sibling.setAttribute("inert", "");
          this.inerted.push(sibling);
        }
      }
      node = node.parentElement;
    }
  }

  private removeBackgroundBarrier(): void {
    for (const el of this.inerted) {
      el.removeAttribute("inert");
    }
    this.inerted = [];
  }
}
