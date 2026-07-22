import { Component, inject, model } from "@angular/core";
import { FoldIdService } from "../../a11y/id.service";
import { FoldIconComponent } from "../icon/icon.component";

/**
 * `<fold-disclosure>` — one summary that toggles one collapsible panel. The
 * single primitive; an accordion is a *set* of these (one open at a time is the
 * consumer's job — bind each `open` and clear the others), so the library ships
 * the piece, not the policy.
 *
 * Not `<details>`: native `<details>` display-none's its content when closed,
 * which cannot animate. This drives the panel with a `grid-template-rows`
 * `0fr → 1fr` transition (the content stays in flow, just clipped to zero
 * height), and wires the disclosure ARIA by hand — the summary is a `button`
 * with `aria-expanded` pointing at the panel via `aria-controls`.
 *
 * Content projection:
 * - `[summary]` → the always-visible trigger label (text, or a richer row).
 * - default slot → the collapsible panel.
 *
 * Two-way `open` (`[(open)]`) reflects and controls the state; a one-way
 * `[open]="true"` starts it expanded; `toggle()` on the host (`exportAs:
 * "foldDisclosure"`) flips it from a template.
 *
 * Colour is CSS custom properties so a plain disclosure and a loud call-to-open
 * are the same component: `--fold-disclosure-summary-bg` (transparent) and
 * `--fold-disclosure-summary-color` (text) tint the summary bar — set them to a
 * primary fill for a CTA.
 *
 * @selector `fold-disclosure`
 *
 * @example
 * ```html
 * <fold-disclosure>
 *   <span summary>How it works</span>
 *   <p>The panel, revealed on click.</p>
 * </fold-disclosure>
 * ```
 */
@Component({
  selector: "fold-disclosure",
  standalone: true,
  imports: [FoldIconComponent],
  exportAs: "foldDisclosure",
  host: { "[class.is-open]": "open()" },
  templateUrl: "./disclosure.component.html",
  styleUrl: "./disclosure.component.scss",
})
export class FoldDisclosureComponent {
  /** Whether the panel is expanded. Two-way: `[(open)]`. */
  readonly open = model(false);

  /** Panel id, so the summary button can point `aria-controls` at it. */
  protected readonly panelId = inject(FoldIdService).next("fold-disclosure");

  toggle(): void {
    this.open.update((v) => !v);
  }
}
