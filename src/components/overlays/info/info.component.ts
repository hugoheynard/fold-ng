import { ChangeDetectionStrategy, Component, input } from "@angular/core";
import type { FoldPopoverPlacement } from "../popover/placement";
import { FoldPopoverComponent } from "../popover/popover.component";
import { FoldPopoverTriggerDirective } from "../popover/popover-trigger.directive";

/**
 * `<fold-info>` — the small `i` that answers "what is this?".
 *
 * A round, quiet trigger at the end of a label line or in a card's corner; on
 * click it reveals a sentence or two in a popover. It is the affordance for
 * explanation that is **worth reading once and not worth taking permanent
 * space**: a hint under a field is read every time and must stay to one line,
 * while the *why* behind a setting takes a paragraph and would push the next
 * control down for a reader who already knows it.
 *
 * Built on {@link FoldPopoverComponent}, not a hand-positioned bubble: the panel
 * rides the native top layer, so it escapes any `overflow: hidden` (a chart
 * card, a scroll region) and every `z-index`, and `Escape` / outside-click /
 * `aria-haspopup` + `aria-expanded` + `aria-controls` come with it.
 *
 * A click, not a hover: hover-only help is unreachable on a touch screen and
 * hostile to anyone whose pointer isn't steady. The cursor still reads `help`.
 *
 * @selector `fold-info`
 *
 * @example
 * ```html
 * <fold-info text="Everything after this delay is bookable — before it, nothing." />
 * ```
 */
@Component({
  selector: "fold-info",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FoldPopoverComponent, FoldPopoverTriggerDirective],
  templateUrl: "./info.component.html",
  styleUrl: "./info.component.scss",
})
export class FoldInfoComponent {
  /** The explanation. One or two sentences — past that, it wants a page. */
  readonly text = input.required<string>();
  /**
   * Accessible name of the trigger. English by default; a consumer localises it
   * — and should say what it explains ("More information about the lead time")
   * when several sit on the same screen.
   * @default 'More information'
   */
  readonly label = input("More information");
  /**
   * Where the panel opens. `bottom-end` by default because the trigger usually
   * sits at the **end** of a label line or a card header, where a panel growing
   * further outward would leave the viewport.
   */
  readonly placement = input<FoldPopoverPlacement>("bottom-end");
}
