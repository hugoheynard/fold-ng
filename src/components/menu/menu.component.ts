import { Component } from "@angular/core";

/**
 * `<sh3-menu>` — a vertical icon navigation rail (the app's primary menu shell).
 *
 * Structural + presentational: it owns the rail column, its top/body/bottom
 * bands and the tooltip escape (`overflow: visible`); the app fills the slots
 * and keeps all routing, auth and data. Sits inside the shell's `railPrimary`.
 *
 * ## Slots
 * | Attribute   | Band                                                        |
 * |-------------|-------------------------------------------------------------|
 * | `header`    | Top — brand, workspace launcher, dividers.                  |
 * | *(default)* | The nav items — `[sh3-menu-item]` anchors/buttons.          |
 * | `footer`    | Bottom (pinned) — secondary actions, account. A border-top separates it; hidden when empty. |
 *
 * @selector `sh3-menu`
 *
 * @example
 * ```html
 * <sh3-menu>
 *   <div header>…brand + launcher…</div>
 *   @for (item of items(); track item.id) {
 *     <a sh3-menu-item [icon]="item.icon" [label]="item.label"
 *        [routerLink]="item.route" routerLinkActive #r="routerLinkActive"
 *        [active]="r.isActive"></a>
 *   }
 *   <div footer>…account…</div>
 * </sh3-menu>
 * ```
 */
@Component({
  selector: "sh3-menu",
  standalone: true,
  templateUrl: "./menu.component.html",
  styleUrl: "./menu.component.scss",
})
export class Sh3MenuComponent {}
