import { Component, input } from "@angular/core";

/**
 * `<fold-loading>` — centered loading indicator, a single muted line.
 *
 * @selector `fold-loading`
 *
 * @example
 * ```html
 * <fold-loading />
 * <fold-loading message="Loading company…" />
 * ```
 */
@Component({
  selector: "fold-loading",
  standalone: true,
  templateUrl: "./loading-state.component.html",
  // Inline + tokens only, so the component is fully self-contained.
  styleUrl: "./loading-state.component.scss",
})
export class FoldLoadingStateComponent {
  /** Text to display. Defaults to "Loading...". */
  readonly message = input("Loading...");
}
