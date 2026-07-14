import { Component, input } from "@angular/core";

/**
 * `<sh3-loading>` — centered loading indicator, a single muted line.
 *
 * @selector `sh3-loading`
 *
 * @example
 * ```html
 * <sh3-loading />
 * <sh3-loading message="Loading company…" />
 * ```
 */
@Component({
  selector: "sh3-loading",
  standalone: true,
  templateUrl: "./loading-state.component.html",
  // Inline + tokens only, so the component is fully self-contained.
  styleUrl: "./loading-state.component.scss",
})
export class Sh3LoadingStateComponent {
  /** Text to display. Defaults to "Loading...". */
  readonly message = input("Loading...");
}
