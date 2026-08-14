import { Component, computed, inject, input } from "@angular/core";
import { FOLD_COMMON_LABELS } from "../../forms/common-labels";
import { FoldSpinnerComponent } from "../../foundations/spinner/spinner.component";
import type { FoldSpinnerSize } from "../../foundations/spinner/spinner.component";

/**
 * `<fold-loading>` — a centered loading placeholder: a spinner over a muted
 * message. The host is a `role="status"` / `aria-live="polite"` region, so the
 * message is announced to assistive tech; the spinner is decorative. Drop it
 * anywhere a section is waiting on data — it stretches to fill (`flex: 1`).
 *
 * @selector `fold-loading`
 *
 * @example
 * ```html
 * <fold-loading />
 * <fold-loading message="Loading company…" />
 * <fold-loading size="lg" message="Crunching numbers…" />
 * ```
 */
@Component({
  selector: "fold-loading",
  standalone: true,
  imports: [FoldSpinnerComponent],
  templateUrl: "./loading-state.component.html",
  // Inline + tokens only, so the component is fully self-contained.
  styleUrl: "./loading-state.component.scss",
  host: {
    role: "status",
    "aria-live": "polite",
  },
})
export class FoldLoadingStateComponent {
  /** Text to display. Defaults to "Loading...". */
  readonly message = input<string | undefined>();

  /** Spinner size — an icon-size token (`xs…xl`, default `md`) or a pixel number. */
  readonly size = input<FoldSpinnerSize>("md");

  private readonly common = inject(FOLD_COMMON_LABELS);

  /** English default ← app-wide provider ← this instance's own input. */
  protected readonly text = computed(
    () => this.message() ?? this.common.loading,
  );
}
