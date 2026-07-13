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
  template: `<div class="loading">
    <span>{{ message() }}</span>
  </div>`,
  // Inline + tokens only, so the component is fully self-contained.
  styles: `
    :host {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
    }
    .loading {
      color: var(--sh3-color-text-muted);
      font-size: var(--sh3-text-sm);
    }
  `,
})
export class Sh3LoadingStateComponent {
  /** Text to display. Defaults to "Loading...". */
  readonly message = input("Loading...");
}
