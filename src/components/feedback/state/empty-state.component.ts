import { Component, input } from "@angular/core";
import { FoldIconComponent } from "../../foundations/icon/icon.component";
import type { FoldIconSize } from "../../foundations/icon/icon.component";
import type { FoldIconName } from "../../foundations/icon/builtin-icons";

/**
 * `<fold-empty-state>` — centered empty state with an optional icon, a title, an
 * optional subtitle and an optional action.
 *
 * The glyph comes from `icon` — a registered icon name, the common case:
 *
 * ```html
 * <fold-empty-state icon="inbox" title="Nothing here" />
 * ```
 *
 * Content projection carries a custom illustration and the action:
 * - `[empty-icon]` — projected above the title, for art the registry can't hold
 *   (a bespoke SVG, an image). It **wins** over `icon` when both are given.
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
  imports: [FoldIconComponent],
  // `[attr.title]: null` strips the native attribute a static `title="…"`
  // leaves behind, so the heading input never doubles as a browser tooltip.
  host: { "[class.alert]": "tone() === 'alert'", "[attr.title]": "null" },
  templateUrl: "./empty-state.component.html",
  styleUrl: "./empty-state.component.scss",
})
export class FoldEmptyStateComponent {
  /** The bold primary line. */
  readonly title = input.required<string>();
  /** Optional muted secondary line. */
  readonly subtitle = input("");
  /**
   * The glyph above the title, by registered name — the common case, so the
   * caller doesn't have to know a slot exists.
   *
   * A **projected** `[empty-icon]` wins: the slot stays the way to supply art
   * the registry can't hold (rule 4.7's illustration exception).
   */
  readonly icon = input<FoldIconName>();

  /** Size of the `icon` glyph. Projected art sizes itself. @default 'xl' */
  readonly iconSize = input<FoldIconSize>("xl");

  /** `alert` renders an error state (red title + icon); `neutral` is default. */
  readonly tone = input<"neutral" | "alert">("neutral");
}
