import { Component, input, output } from "@angular/core";

export type Sh3TabNavItem = {
  /** Unique key — identifies the tab and is emitted on click. */
  key: string;
  /** Display label. */
  label: string;
  /**
   * Optional leading icon: the `d` of a single Material-style `<path>`
   * (`viewBox="0 0 24 24"`), rendered 14×14 with `fill="currentColor"`.
   */
  icon?: string;
  /** Optional trailing badge (e.g. a count). `undefined`/`null` hides it. */
  badge?: string | number | null;
};

/**
 * `<sh3-tab-nav>` — a tab navigation bar (buttons only; the parent renders the
 * content for the active key).
 *
 * - `activeStyle` — `underline` (accent border on the active tab) or `fill`
 *   (accent background pill, good for sidebars).
 * - `direction` — `horizontal` (row, equal-width) or `vertical` (stacked
 *   sidebar; auto-collapses to a horizontal icon-accordion at ≤768px).
 *
 * @selector `sh3-tab-nav`
 *
 * @example
 * ```html
 * <sh3-tab-nav
 *   [tabs]="[{ key: 'members', label: 'Members', badge: 3 }, { key: 'settings', label: 'Settings' }]"
 *   [activeKey]="tab()"
 *   activeStyle="underline"
 *   direction="horizontal"
 *   (tabChange)="tab.set($event)"
 * />
 * ```
 */
@Component({
  selector: "sh3-tab-nav",
  standalone: true,
  template: `<nav
    class="tab-nav"
    [class.style-underline]="activeStyle() === 'underline'"
    [class.style-fill]="activeStyle() === 'fill'"
    [class.dir-vertical]="direction() === 'vertical'"
    [class.size-comfortable]="size() === 'comfortable'"
    [class.bg-surface]="background() === 'surface'"
  >
    @for (tab of tabs(); track tab.key) {
      <button
        type="button"
        class="tab-nav-item"
        [class.is-active]="activeKey() === tab.key"
        (click)="tabChange.emit(tab.key)"
      >
        @if (tab.icon) {
          <svg
            class="tab-nav-icon"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path [attr.d]="tab.icon" />
          </svg>
        }
        <span class="tab-nav-label">{{ tab.label }}</span>
        @if (tab.badge !== undefined && tab.badge !== null) {
          <span class="tab-nav-badge">{{ tab.badge }}</span>
        }
      </button>
    }
  </nav>`,
  // Inline + token-driven. Neutral 1px lines use --sh3-color-border /
  // -surface-raised so they flip correctly in light mode (the app original
  // hard-coded white-alpha, which would vanish on a light background).
  styles: `
    :host {
      display: flex;
      width: 100%;
      max-width: 100%;
      overflow: hidden;
    }
    /* flex: 1 so the bar fills the host box in both axes — the surface
       background then covers the whole container, not just the tab content
       (e.g. a full-height vertical sidebar). */
    .tab-nav {
      flex: 1;
      display: flex;
      max-width: 100%;
      gap: 2px;
      user-select: none;
    }

    /* Filled bar — the tab-nav carries its own surface instead of blending
       with the app background. Uses the tertiary rail role: a tab sidebar is,
       semantically, the third navigation rail (app menu · workspace · section). */
    .bg-surface {
      background: var(--sh3-color-bg-rail-tertiary);
      padding: 4px 8px 0;
    }
    .bg-surface.dir-vertical {
      padding: 12px 8px;
    }
    .tab-nav-item {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
      padding: 6px 4px;
      background: none;
      border: none;
      color: var(--sh3-color-text-muted);
      font-size: 10px;
      font-weight: 600;
      cursor: pointer;
      text-align: center;
      transition:
        color 0.1s ease,
        background 0.1s ease,
        border-color 0.1s ease;
      white-space: nowrap;
    }
    .tab-nav-item:hover {
      color: var(--sh3-color-text-secondary);
    }

    /* Comfortable — a prominent, page-level bar (vs the compact default). */
    .size-comfortable .tab-nav-item {
      flex: 0 1 auto;
      gap: 7px;
      padding: 11px 16px;
      font-size: var(--sh3-text-sm);
    }

    /* Underline */
    .style-underline {
      border-bottom: 1px solid var(--sh3-color-border);
    }
    .style-underline .tab-nav-item {
      border-bottom: 2px solid transparent;
      margin-bottom: -1px;
    }
    .style-underline .tab-nav-item.is-active {
      color: var(--sh3-color-text);
      border-bottom-color: var(--sh3-color-primary);
    }

    /* Fill */
    .style-fill .tab-nav-item {
      border-radius: var(--sh3-radius-sm);
      border: 1px solid transparent;
    }
    .style-fill .tab-nav-item.is-active {
      background: var(--sh3-color-primary-surface);
      color: var(--sh3-color-primary-text);
      font-weight: 600;
    }
    .style-fill .tab-nav-item:hover:not(.is-active) {
      background: var(--sh3-color-surface-hover);
      color: var(--sh3-color-text);
    }

    /* Vertical */
    .dir-vertical {
      flex-direction: column;
    }
    .dir-vertical .tab-nav-item {
      flex: none;
      justify-content: flex-start;
      text-align: left;
      padding: 9px 12px;
      gap: 10px;
      border-radius: var(--sh3-radius-sm);
      font-size: var(--sh3-text-sm);
      font-weight: 500;
    }
    .dir-vertical.style-underline {
      border-bottom: none;
      border-right: 1px solid var(--sh3-color-border);
    }
    .dir-vertical.style-underline .tab-nav-item {
      border-bottom: none;
      border-left: 2px solid transparent;
      margin-bottom: 0;
      margin-right: -1px;
    }
    .dir-vertical.style-underline .tab-nav-item.is-active {
      border-left-color: var(--sh3-color-primary);
    }
    .dir-vertical.style-fill .tab-nav-item.is-active {
      background: var(--sh3-color-primary-surface);
      color: var(--sh3-color-primary-text);
      font-weight: 600;
    }

    /* Vertical collapses to a horizontal icon-accordion on mobile. */
    @media (max-width: 768px) {
      .dir-vertical {
        flex-direction: row;
        align-items: center;
      }
      .dir-vertical .tab-nav-item {
        flex: 0 0 auto;
        justify-content: center;
        text-align: center;
        padding: 8px;
        gap: 0;
        font-size: var(--sh3-text-xs);
        font-weight: 600;
      }
      .dir-vertical .tab-nav-item .tab-nav-label {
        display: none;
      }
      .dir-vertical .tab-nav-item.is-active {
        flex: 1 1 auto;
        min-width: 0;
        gap: 6px;
        padding: 8px 12px;
      }
      .dir-vertical .tab-nav-item.is-active .tab-nav-label {
        display: inline;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .dir-vertical .tab-nav-badge {
        display: none;
      }
      .dir-vertical.style-underline {
        border-right: none;
        border-bottom: 1px solid var(--sh3-color-border);
      }
      .dir-vertical.style-underline .tab-nav-item {
        border-left: none;
        border-bottom: 2px solid transparent;
        margin-right: 0;
        margin-bottom: -1px;
      }
      .dir-vertical.style-underline .tab-nav-item.is-active {
        border-bottom-color: var(--sh3-color-primary);
      }
      .dir-vertical.style-fill {
        border-right: none;
      }
    }

    .tab-nav-icon {
      flex-shrink: 0;
    }

    /* Count pill — dim on idle, accent-tinted on the active tab. */
    .tab-nav-badge {
      min-width: 16px;
      padding: 0 6px;
      border-radius: var(--sh3-radius-pill);
      background: var(--sh3-color-surface-subtle);
      color: var(--sh3-color-text-faded);
      font-size: 9px;
      font-weight: 700;
      text-align: center;
      font-variant-numeric: tabular-nums;
    }
    .tab-nav-item.is-active .tab-nav-badge {
      background: var(--sh3-color-primary-surface);
      color: var(--sh3-color-primary-text);
    }
    .size-comfortable .tab-nav-badge {
      min-width: 20px;
      padding: 0 7px;
      font-size: 11px;
      font-weight: 600;
    }
  `,
})
export class Sh3TabNavComponent {
  /** The tabs to render, in order. */
  readonly tabs = input.required<Sh3TabNavItem[]>();

  /** The `key` of the currently active tab. */
  readonly activeKey = input.required<string>();

  /** How the active tab reads: accent underline, or accent fill. */
  readonly activeStyle = input<"underline" | "fill">("underline");

  /** Bar orientation (vertical auto-collapses to horizontal on mobile). */
  readonly direction = input<"horizontal" | "vertical">("horizontal");

  /** `compact` (inline/popover, default) or `comfortable` (page-level bar). */
  readonly size = input<"compact" | "comfortable">("compact");

  /** `surface` (filled bar, default) or `transparent` (blends with the app). */
  readonly background = input<"transparent" | "surface">("surface");

  /** Emits the `key` of the clicked tab. */
  readonly tabChange = output<string>();
}
