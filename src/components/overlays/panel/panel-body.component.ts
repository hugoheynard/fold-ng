import { ChangeDetectionStrategy, Component } from "@angular/core";

/**
 * `<fold-panel-body>` — the **scrolling middle** of an imperative panel, between
 * {@link FoldPanelHeaderComponent} and {@link FoldPanelFooterComponent}.
 *
 * ## Why this exists
 *
 * The chrome renders a `.panel-body` for a **template** panel, but a
 * **component** panel is mounted bare: its host element becomes a single flex
 * child of the panel column, and the component owns its own header/body/footer.
 * That left every consumer to rediscover the same two rules — and the footer's
 * documented `flex: none` promise ("it stays pinned while the body scrolls") to
 * be silently false until they did. In one consuming app, eleven panels out of
 * twenty had copied the block; the nine that had not scrolled their footer out
 * of view, where the panel's `overflow: hidden` then clipped it.
 *
 * ## What it does, and the part that is easy to get wrong
 *
 * `flex: 1 1 auto` takes the space the header and footer leave; `overflow-y:
 * auto` scrolls what does not fit. The third rule is the one hand-rolled copies
 * miss: **`min-height: 0`**. A flex item's default minimum height is
 * `min-content`, so without it a tall child *grows the box* instead of
 * scrolling, pushing the footer past the panel's bottom edge — the exact
 * failure this component prevents.
 *
 * It also lays its children out in a column with the standard gap, so a panel
 * stops setting a margin on every field.
 *
 * ```html
 * <fold-panel-header title="Réglage" />
 * <fold-panel-body>
 *   <fold-input label="Nom" />
 *   <fold-danger-zone title="Supprimer" actionLabel="Supprimer" />
 * </fold-panel-body>
 * <fold-panel-footer>
 *   <button foldButton emphasis="outline" intent="neutral">Annuler</button>
 *   <button foldButton>Enregistrer</button>
 * </fold-panel-footer>
 * ```
 *
 * @selector `fold-panel-body`
 */
@Component({
  selector: "fold-panel-body",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<ng-content />",
  styleUrl: "./panel-body.component.scss",
})
export class FoldPanelBodyComponent {}
