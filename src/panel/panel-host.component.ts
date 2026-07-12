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
import { PanelComponentOutletDirective } from "./panel-component-outlet.directive";
import { PanelHostService } from "./panel-host.service";
import type { PanelDescriptor } from "./panel.types";

/**
 * `<sh3-panel-host>` — the single, layout-owned chrome for every side panel.
 *
 * Rendered **once** in the content region (typically inside the app shell). It
 * reads the {@link PanelHostService} panels and wraps each in a **glass**
 * slide-in `<aside>` (no dark scrim — the surface itself is frosted),
 * `z-index: 50` stacking, focus-trap and body scroll-lock.
 *
 * Two content shapes:
 * - **template** — a projected `<side-panel>` body; the host supplies the shared
 *   header (title/subtitle/close).
 * - **component** — an imperatively-opened component that owns its whole
 *   header/body/footer; the host supplies only the shell.
 *
 * @selector `sh3-panel-host`
 */
@Component({
  selector: "sh3-panel-host",
  standalone: true,
  imports: [
    NgTemplateOutlet,
    FocusTrapDirective,
    PanelComponentOutletDirective,
  ],
  template: `@for (panel of panels(); track panel.id) {
    <div
      class="panel-dock"
      [class.panel-dock--left]="panel.side === 'left'"
      (click)="onBackdrop($event, panel)"
    >
      <aside
        class="panel"
        [class.panel--left]="panel.side === 'left'"
        [style.--panel-width.px]="panel.width()"
        role="dialog"
        aria-modal="true"
        [attr.aria-label]="ariaLabel(panel)"
        tabindex="-1"
        [sh3FocusTrap]="true"
        (click)="$event.stopPropagation()"
      >
        @if (panel.kind === "template") {
          <header class="panel-header">
            <div class="panel-title-block">
              <h2 class="panel-title">{{ panel.title() }}</h2>
              @if (panel.subtitle()) {
                <p class="panel-subtitle">{{ panel.subtitle() }}</p>
              }
            </div>
            <button
              type="button"
              class="panel-close"
              aria-label="Fermer"
              (click)="panel.onClose()"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </header>

          <div class="panel-body">
            <ng-container [ngTemplateOutlet]="panel.templateRef" />
          </div>
        } @else {
          <ng-container [sh3PanelComponentOutlet]="panel" />
        }
      </aside>
    </div>
  }`,
  styles: `
    /* The host must not take layout — it's a sibling in the content flex row.
       display:contents removes its box so an opening panel can't nudge the
       main content; the absolute dock still anchors to the content region. */
    :host {
      display: contents;
    }
    /* Invisible, click-capturing dock — no dark scrim. position:absolute so it
       fills the content region (its positioned host), not the viewport: the
       panel floats over the page but stays below the header + rails. */
    .panel-dock {
      position: absolute;
      inset: 0;
      z-index: 50;
      display: flex;
      justify-content: flex-end;
    }
    .panel-dock--left {
      justify-content: flex-start;
    }

    .panel {
      --panel-width: 490px;
      display: flex;
      flex-direction: column;
      width: min(var(--panel-width), 100%);
      height: 100%;
      overflow: hidden;
      font-feature-settings: "tnum" on;

      /* Frosted glass surface. */
      background: var(--sh3-color-glass);
      backdrop-filter: blur(var(--sh3-blur-glass)) saturate(1.5);
      -webkit-backdrop-filter: blur(var(--sh3-blur-glass)) saturate(1.5);
      border-left: 1px solid var(--sh3-color-glass-border);
      box-shadow:
        -12px 0 40px rgba(0, 0, 0, 0.45),
        inset 1px 0 0 rgba(255, 255, 255, 0.04);
      animation: panel-slide-in-right 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .panel--left {
      border-left: none;
      border-right: 1px solid var(--sh3-color-glass-border);
      box-shadow:
        12px 0 40px rgba(0, 0, 0, 0.45),
        inset -1px 0 0 rgba(255, 255, 255, 0.04);
      animation-name: panel-slide-in-left;
    }
    @media (max-width: 768px) {
      .panel {
        width: 100vw;
      }
    }

    .panel-header {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      padding: 16px 16px 12px;
      border-bottom: 1px solid var(--sh3-color-glass-border);
    }
    .panel-title-block {
      flex: 1 1 auto;
      display: flex;
      flex-direction: column;
      gap: 2px;
      min-width: 0;
    }
    .panel-title {
      margin: 0;
      font-size: var(--sh3-text-lg);
      font-weight: 600;
      color: var(--sh3-color-text);
      letter-spacing: -0.005em;
      line-height: 1.2;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .panel-subtitle {
      margin: 0;
      font-size: var(--sh3-text-xs);
      color: var(--sh3-color-text-faded);
      font-variant-numeric: tabular-nums;
    }
    .panel-close {
      all: unset;
      box-sizing: border-box;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 28px;
      height: 28px;
      border-radius: var(--sh3-radius-xs);
      color: var(--sh3-color-text-secondary);
      cursor: pointer;
      transition:
        background-color 100ms ease,
        color 100ms ease;
    }
    .panel-close:hover {
      background: var(--sh3-color-surface-hover);
      color: var(--sh3-color-text);
    }
    .panel-body {
      flex: 1 1 auto;
      overflow-y: auto;
      padding: 16px;
    }

    @keyframes panel-slide-in-right {
      from {
        transform: translateX(100%);
      }
      to {
        transform: translateX(0);
      }
    }
    @keyframes panel-slide-in-left {
      from {
        transform: translateX(-100%);
      }
      to {
        transform: translateX(0);
      }
    }
  `,
})
export class PanelHostComponent {
  private readonly host = inject(PanelHostService);
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
  ariaLabel(panel: PanelDescriptor): string | null {
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

  onBackdrop(event: MouseEvent, panel: PanelDescriptor): void {
    if (event.target === event.currentTarget) {
      panel.onClose();
    }
  }
}
