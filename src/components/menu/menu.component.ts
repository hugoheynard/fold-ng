import { NgTemplateOutlet } from "@angular/common";
import {
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  booleanAttribute,
  computed,
  effect,
  inject,
  input,
  model,
  signal,
  viewChild,
} from "@angular/core";
import { Sh3IconComponent } from "../icon/icon.component";

/**
 * How menu items colour on hover and when active:
 * - `follow` — take the enclosing section's colour (falls back to neutral for
 *   section-less items, e.g. the footer).
 * - `neutral` — a plain grey tint, no accent.
 * - `primary` — the app's primary accent.
 */
export type Sh3MenuTint = "follow" | "neutral" | "primary";

/**
 * Where the collapse toggle sits. `auto` follows band presence (first in the
 * footer, else last in the header, else last in the body); the others pin it to
 * a specific band.
 */
export type Sh3MenuTogglePlacement = "auto" | "footer" | "header" | "body";

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
  imports: [Sh3IconComponent, NgTemplateOutlet],
  templateUrl: "./menu.component.html",
  styleUrl: "./menu.component.scss",
  host: {
    "[class.expanded]": "effectiveExpanded()",
    "[attr.data-tint]": "tint()",
  },
})
export class Sh3MenuComponent {
  /** Show a chevron toggle that flips `expanded`. */
  readonly collapsible = input(false, { transform: booleanAttribute });
  /**
   * Two-way: `true` widens the rail and reveals inline labels. Only honoured
   * when `collapsible` — a non-collapsible menu is a fixed icon rail, so
   * `expanded` without `collapsible` is a no-op (and warns in dev).
   */
  readonly expanded = model(false);
  /** How items tint on hover / when active (`follow` = section colour). */
  readonly tint = input<Sh3MenuTint>("follow");
  /** Pin the collapse toggle to a band, or `auto` to follow band presence. */
  readonly togglePlacement = input<Sh3MenuTogglePlacement>("auto");

  private readonly headRef =
    viewChild.required<ElementRef<HTMLElement>>("head");
  private readonly footRef =
    viewChild.required<ElementRef<HTMLElement>>("foot");
  private readonly hasHeader = signal(false);
  private readonly hasFooter = signal(false);

  /** The applied expansion — inert unless the menu is collapsible. */
  protected readonly effectiveExpanded = computed(
    () => this.collapsible() && this.expanded(),
  );

  /**
   * The band the toggle renders into: the `togglePlacement` override when set,
   * else auto — first in the footer, else last in the header, else the body.
   */
  protected readonly resolvedPlacement = computed<"footer" | "header" | "body">(
    () => {
      const forced = this.togglePlacement();
      if (forced !== "auto") {
        return forced;
      }
      return this.hasFooter() ? "footer" : this.hasHeader() ? "header" : "body";
    },
  );

  constructor() {
    effect(() => {
      if (this.expanded() && !this.collapsible()) {
        console.warn(
          "[sh3-menu] `expanded` is ignored without `collapsible` — set `collapsible` to allow the rail to expand.",
        );
      }
    });

    const destroyRef = inject(DestroyRef);
    afterNextRender(() => {
      const head = this.headRef().nativeElement;
      const foot = this.footRef().nativeElement;
      const sync = (): void => {
        this.hasHeader.set(this.slotFilled(head));
        this.hasFooter.set(this.slotFilled(foot));
      };
      sync();
      const observer = new MutationObserver(sync);
      observer.observe(head, { childList: true });
      observer.observe(foot, { childList: true });
      destroyRef.onDestroy(() => observer.disconnect());
    });
  }

  /** True when a band holds projected content (ignoring the toggle itself). */
  private slotFilled(band: HTMLElement): boolean {
    for (const child of Array.from(band.children)) {
      if (!child.classList.contains("menu-toggle")) {
        return true;
      }
    }
    return false;
  }

  protected toggle(): void {
    this.expanded.update((v) => !v);
  }
}
