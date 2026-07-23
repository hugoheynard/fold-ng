import { Component, input } from "@angular/core";

/**
 * `<fold-empty-state>` — centered empty state with an optional icon, a title, an
 * optional subtitle and an optional action.
 *
 * Content projection carries the icon and the action:
 * - `[empty-icon]` — projected above the title (typically an SVG)
 * - default `ng-content` — projected below the subtitle (typically a button)
 *
 * `tone="alert"` turns it into an error state (red title + icon); the default
 * `neutral` tone is the plain empty state.
 *
 * @selector `fold-empty-state`
 *
 * @example
 * ```html
 * <fold-empty-state
 *   title="No company yet"
 *   subtitle="Create your company space to manage artists, teams and contracts."
 * >
 *   <svg empty-icon width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
 *     <path d="M19,3H5C3.346…" />
 *   </svg>
 *   <button foldButton (click)="create()">+ Create</button>
 * </fold-empty-state>
 *
 * <fold-empty-state tone="alert" title="Failed to load" />
 * ```
 */
@Component({
  selector: "fold-empty-state",
  standalone: true,
  host: { "[class.alert]": "tone() === 'alert'" },
  templateUrl: "./empty-state.component.html",
  styleUrl: "./empty-state.component.scss",
})
export class FoldEmptyStateComponent {
  /** The bold primary line. */
  readonly title = input.required<string>();
  /** Optional muted secondary line. */
  readonly subtitle = input("");
  /** `alert` renders an error state (red title + icon); `neutral` is default. */
  readonly tone = input<"neutral" | "alert">("neutral");
}
