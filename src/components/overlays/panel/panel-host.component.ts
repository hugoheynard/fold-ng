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
import { ScrollRegionRegistry } from "../../../a11y/scroll-region-registry.service";
import { FoldPanelComponentOutletDirective } from "./panel-component-outlet.directive";
import { FoldPanelHeaderComponent } from "./panel-header.component";
import { FoldPanelHostService } from "./panel-host.service";
import { FOLD_PANEL_CLOSE_LABEL } from "./panel-labels";
import { foldPanelTitleId } from "./panel.types";
import type {
  FoldPanelDescriptor,
  FoldPanelSide,
  FoldPanelSurface,
} from "./panel.types";

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
  private readonly scrollRegions = inject(ScrollRegionRegistry);
  private readonly element = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly document = inject(DOCUMENT);

  readonly panels = this.host.panels;

  private locked = false;
  /** Elements this host made `inert`, so it removes exactly those on close. */
  private inerted: HTMLElement[] = [];

  constructor() {
    // Freeze page scroll + inert the background while a **modal** panel is open
    // — once, driven by whether any open panel is modal. A purely non-modal
    // panel leaves the page scrollable and interactive.
    effect(() => {
      const barrier = this.panels().some((p) => p.modal !== false);
      if (barrier && !this.locked) {
        this.scrollLock.lock();
        // Freeze the shell's own scroll box + every foldScrollRegion too: in a
        // shell the scroll owner is an inner box, not `body`, so the body lock
        // alone would leave the page scrolling behind the modal.
        this.scrollRegions.freeze();
        this.applyBackgroundBarrier();
        this.locked = true;
      } else if (!barrier && this.locked) {
        this.scrollLock.unlock();
        this.scrollRegions.unfreeze();
        this.removeBackgroundBarrier();
        this.locked = false;
      }
    });

    inject(DestroyRef).onDestroy(() => {
      if (this.locked) {
        this.scrollLock.unlock();
        this.scrollRegions.unfreeze();
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
    const top = panels[panels.length - 1];
    return top?.id === panel.id;
  }

  /** A panel is modal unless it explicitly opts out (`modal: false`). */
  isModal(panel: FoldPanelDescriptor): boolean {
    return panel.modal !== false;
  }

  /** Trap focus only for the top-most **modal** panel. */
  shouldTrap(panel: FoldPanelDescriptor): boolean {
    return this.isModal(panel) && this.isTopMost(panel);
  }

  /** Surface treatment for the panel shell; defaults to `glass`. */
  panelSurface(panel: FoldPanelDescriptor): FoldPanelSurface {
    return panel.surface ?? "glass";
  }

  /** The edge the panel docks to; defaults to `right`. `auto` is resolved to
   *  right/bottom by the CSS `@container` on the host's own width, not here. */
  panelSide(panel: FoldPanelDescriptor): FoldPanelSide {
    return panel.side ?? "right";
  }

  /** A bottom sheet (`bottom`, or `auto` which can become one on a narrow host)
   *  gets a top grabber. Hidden by CSS when `auto` resolves to a side sheet. */
  hasGrabber(panel: FoldPanelDescriptor): boolean {
    const side = this.panelSide(panel);
    return side === "bottom" || side === "auto";
  }

  /** Accessible label for the bottom-sheet grabber — the app-wide close label. */
  protected readonly dismissLabel = inject(FOLD_PANEL_CLOSE_LABEL);

  /** Tapping the grabber dismisses the sheet, unless it guards implicit close. */
  onGrabber(panel: FoldPanelDescriptor): void {
    if (this.allowsImplicitClose(panel)) {
      panel.onClose();
    }
  }

  /**
   * The implicit dismiss gestures (Escape, backdrop) are suppressed when a panel
   * sets `disableClose` — the header close button and `FoldPanelRef.close()`
   * bypass this, so the panel stays intentionally closeable.
   */
  private allowsImplicitClose(panel: FoldPanelDescriptor): boolean {
    return panel.disableClose !== true;
  }

  /** Escape closes the top-most (last-opened) panel, unless it guards close. */
  @HostListener("document:keydown.escape")
  onEscape(): void {
    const top = this.panels().at(-1);
    if (top && this.allowsImplicitClose(top)) {
      top.onClose();
    }
  }

  onBackdrop(event: MouseEvent, panel: FoldPanelDescriptor): void {
    if (
      event.target === event.currentTarget &&
      this.allowsImplicitClose(panel)
    ) {
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
