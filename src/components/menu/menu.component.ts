import { Component, booleanAttribute, input, model } from "@angular/core";
import { Sh3IconComponent } from "../icon/icon.component";

/**
 * `<sh3-menu>` — a vertical icon navigation rail (the app's primary menu shell).
 *
 * Structural + presentational: it owns the rail column, its top/body/bottom
 * bands and the tooltip escape (`overflow: visible`); the app fills the slots
 * and keeps all routing, auth and data. Sits inside the shell's `railPrimary`.
 *
 * ## Options
 * - `collapsible` — render a chevron toggle that flips `expanded`.
 * - `expanded` (two-way) — `false` (default) is the icon rail: items are
 *   icon-only with hover tooltips. `true` widens the rail and items + separators
 *   show their labels inline. Drive it yourself (`[expanded]`) or let the toggle.
 *
 * ## Slots
 * | Attribute   | Band                                                        |
 * |-------------|-------------------------------------------------------------|
 * | `header`    | Top — brand, workspace launcher, dividers.                  |
 * | *(default)* | The nav items — `[sh3-menu-item]` + `<sh3-menu-separator>`. |
 * | `footer`    | Bottom (pinned) — secondary actions, account. Hidden when empty. |
 *
 * @selector `sh3-menu`
 *
 * @example
 * ```html
 * <sh3-menu collapsible [(expanded)]="open()">
 *   <div header>…brand…</div>
 *   <sh3-menu-separator label="Workspace" color="#7c5bbf" />
 *   <a sh3-menu-item [icon]="i.icon" [label]="i.label"
 *      [routerLink]="i.route" routerLinkActive #r="routerLinkActive"
 *      [active]="r.isActive"></a>
 *   <div footer>…account…</div>
 * </sh3-menu>
 * ```
 */
@Component({
  selector: "sh3-menu",
  standalone: true,
  imports: [Sh3IconComponent],
  templateUrl: "./menu.component.html",
  styleUrl: "./menu.component.scss",
  host: { "[class.expanded]": "expanded()" },
})
export class Sh3MenuComponent {
  /** Show a chevron toggle that flips `expanded`. */
  readonly collapsible = input(false, { transform: booleanAttribute });
  /** Two-way: `true` widens the rail and reveals inline labels. */
  readonly expanded = model(false);

  protected toggle(): void {
    this.expanded.update((v) => !v);
  }
}
