import { Component, inject, model } from "@angular/core";
import { Sh3IdService } from "../../a11y/id.service";
import { Sh3IconComponent } from "../icon/icon.component";

/**
 * `<sh3-disclosure>` — one summary that toggles one collapsible panel. The
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
 * "sh3Disclosure"`) flips it from a template.
 *
 * Colour is CSS custom properties so a plain disclosure and a loud call-to-open
 * are the same component: `--sh3-disclosure-summary-bg` (transparent) and
 * `--sh3-disclosure-summary-color` (text) tint the summary bar — set them to a
 * primary fill for a CTA.
 *
 * @selector `sh3-disclosure`
 *
 * @example
 * ```html
 * <sh3-disclosure>
 *   <span summary>How it works</span>
 *   <p>The panel, revealed on click.</p>
 * </sh3-disclosure>
 * ```
 */
@Component({
  selector: "sh3-disclosure",
  standalone: true,
  imports: [Sh3IconComponent],
  exportAs: "sh3Disclosure",
  host: { "[class.is-open]": "open()" },
  templateUrl: "./disclosure.component.html",
  styleUrl: "./disclosure.component.scss",
})
export class Sh3DisclosureComponent {
  /** Whether the panel is expanded. Two-way: `[(open)]`. */
  readonly open = model(false);

  /** Panel id, so the summary button can point `aria-controls` at it. */
  protected readonly panelId = inject(Sh3IdService).next("sh3-disclosure");

  toggle(): void {
    this.open.update((v) => !v);
  }
}
