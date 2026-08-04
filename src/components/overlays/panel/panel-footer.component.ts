import { ChangeDetectionStrategy, Component, input } from "@angular/core";

/**
 * `<fold-panel-footer>` — the action bar that pairs with {@link
 * FoldPanelHeaderComponent} at the bottom of an imperative panel (or a future
 * `fold-dialog`). It carries the tokenised top border + padding and the button
 * alignment, so a panel no longer hand-rolls a `<footer class="foot">` with a
 * copied flex row. Project the buttons (and any leading content) as children.
 *
 * It sits at the panel's bottom edge with `flex: none`, so in the standard
 * flex-column panel — a scrolling body above it — it stays pinned there with no
 * `position: sticky` needed; the body scrolls, the footer doesn't.
 *
 * `align`:
 * - `end` (default) — buttons pushed to the trailing edge (the Annuler/Confirmer
 *   pair). Multiple children are separated by the token gap.
 * - `between` — space between the first and last child: a leading block (e.g. a
 *   running total) at the start, the actions at the end.
 * - `start` — everything at the leading edge.
 *
 * ```html
 * <fold-panel-footer>
 *   <button foldButton emphasis="outline" intent="neutral" (click)="cancel()">Annuler</button>
 *   <button foldButton (click)="save()">Enregistrer</button>
 * </fold-panel-footer>
 *
 * <!-- a running total on the left, actions on the right -->
 * <fold-panel-footer align="between">
 *   <span class="total">Total {{ total }}</span>
 *   <button foldButton (click)="checkout()">Commander</button>
 * </fold-panel-footer>
 * ```
 *
 * @selector `fold-panel-footer`
 */
@Component({
  selector: "fold-panel-footer",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<ng-content />",
  styleUrl: "./panel-footer.component.scss",
  host: { "[attr.data-align]": "align()" },
})
export class FoldPanelFooterComponent {
  /** Button alignment along the bar. @default 'end' */
  readonly align = input<"end" | "between" | "start">("end");
}
