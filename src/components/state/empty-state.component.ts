import { Component, input } from "@angular/core";

/**
 * `<sh3-empty-state>` — centered empty state with an optional icon, a title, an
 * optional subtitle and an optional action.
 *
 * Content projection carries the icon and the action:
 * - `[empty-icon]` — projected above the title (typically an SVG)
 * - default `ng-content` — projected below the subtitle (typically a button)
 *
 * `tone="alert"` turns it into an error state (red title + icon); the default
 * `neutral` tone is the plain empty state.
 *
 * @selector `sh3-empty-state`
 *
 * @example
 * ```html
 * <sh3-empty-state
 *   title="No company yet"
 *   subtitle="Create your company space to manage artists, teams and contracts."
 * >
 *   <svg empty-icon width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
 *     <path d="M19,3H5C3.346…" />
 *   </svg>
 *   <sh3-button variant="primary" (clicked)="create()">+ Create</sh3-button>
 * </sh3-empty-state>
 *
 * <sh3-empty-state tone="alert" title="Failed to load" />
 * ```
 */
@Component({
  selector: "sh3-empty-state",
  standalone: true,
  host: { "[class.alert]": "tone() === 'alert'" },
  template: `
    <div class="empty">
      <div class="empty-icon">
        <ng-content select="[empty-icon]" />
      </div>
      <p class="empty-title">{{ title() }}</p>
      @if (subtitle()) {
        <p class="empty-sub">{{ subtitle() }}</p>
      }
      <div class="empty-action">
        <ng-content />
      </div>
    </div>
  `,
  styles: `
    :host {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
    }
    .empty {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      padding: 40px 24px;
    }
    .empty-icon {
      color: var(--sh3-color-text-faded);
      margin-bottom: 4px;
    }
    .empty-icon:empty {
      display: none;
    }
    .empty-title {
      font-size: var(--sh3-text-sm);
      font-weight: 600;
      color: var(--sh3-color-text);
      margin: 0;
    }
    .empty-sub {
      font-size: var(--sh3-text-xs);
      color: var(--sh3-color-text-muted);
      margin: 0;
      text-align: center;
      max-width: 320px;
      line-height: 1.6;
    }
    .empty-action {
      margin-top: 4px;
    }
    .empty-action:empty {
      display: none;
    }
    :host(.alert) .empty-icon,
    :host(.alert) .empty-title {
      color: var(--sh3-color-alert-text);
    }
  `,
})
export class EmptyStateComponent {
  /** The bold primary line. */
  readonly title = input.required<string>();
  /** Optional muted secondary line. */
  readonly subtitle = input("");
  /** `alert` renders an error state (red title + icon); `neutral` is default. */
  readonly tone = input<"neutral" | "alert">("neutral");
}
