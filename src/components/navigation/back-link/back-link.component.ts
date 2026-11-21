import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
} from "@angular/core";
import { Location } from "@angular/common";
import {
  RouterLink,
  type Params,
  type QueryParamsHandling,
} from "@angular/router";
import { FoldIconComponent } from "../../foundations/icon/icon.component";
import type { FoldIconName } from "../../foundations/icon/builtin-icons";

/**
 * `<fold-back-link>` — the “← Back” affordance for a detail page. Three modes,
 * picked by which input is set:
 * - `routerLink` — an in-app `<a routerLink>` to a specific parent route.
 * - `href` — a plain `<a href>` (external, or a non-router app).
 * - neither — a `<button>` that goes **back in history** (`Location.back()`).
 *
 * Router-coupled but degradable: importing it never forces `@angular/router`
 * (`RouterLink` only instantiates on a `routerLink`), and the history-back mode
 * needs no router at all.
 *
 * ```html
 * <fold-back-link routerLink="/contrats" label="Tous les contrats" />
 * <fold-back-link href="/dashboard" />
 * <fold-back-link />            <!-- history back -->
 *
 * <!-- carry the query string along: where the page was opened from -->
 * <fold-back-link routerLink="/orders/new" queryParamsHandling="preserve" />
 * ```
 *
 * In router mode, `queryParams`, `queryParamsHandling` and `state` are passed
 * straight to `RouterLink`, with its semantics — so a multi-step flow can keep
 * a `?from=` (or any parameter) on its way back without a store.
 *
 * @selector `fold-back-link`
 */
@Component({
  selector: "fold-back-link",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, FoldIconComponent],
  templateUrl: "./back-link.component.html",
  styleUrl: "./back-link.component.scss",
})
export class FoldBackLinkComponent {
  private readonly location = inject(Location);

  /** The link text. @default 'Back' */
  readonly label = input("Back");
  /** Angular router target — takes precedence over {@link href}. When both this
   *  and `href` are unset, the control is a history-back button. */
  readonly routerLink = input<string | unknown[]>();
  /** Router mode only: query parameters of the target, as `RouterLink.queryParams`. */
  readonly queryParams = input<Params | null>();
  /**
   * Router mode only: how the current query string combines with
   * {@link queryParams} — `'preserve'` keeps it, `'merge'` adds to it. As
   * `RouterLink.queryParamsHandling`.
   */
  readonly queryParamsHandling = input<QueryParamsHandling | null>();
  /** Router mode only: navigation state, as `RouterLink.state`. */
  readonly state = input<Record<string, unknown>>();
  /** Plain URL target (external, or a non-router app). */
  readonly href = input<string>();
  /** Leading icon. @default 'chevron-left' */
  readonly icon = input<FoldIconName>("chevron-left");

  /** History-back navigation, for the button mode. */
  protected goBack(): void {
    this.location.back();
  }
}
