import { NgTemplateOutlet } from "@angular/common";
import {
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  booleanAttribute,
  computed,
  inject,
  input,
  model,
  signal,
  viewChild,
} from "@angular/core";
import { FoldIconComponent } from "../../foundations/icon/icon.component";

/**
 * How menu items colour on hover and when active:
 * - `follow` — take the enclosing section's colour (falls back to neutral for
 *   section-less items, e.g. the footer).
 * - `neutral` — a plain grey tint, no accent.
 * - `primary` — the app's primary accent.
 */
export type FoldMenuTint = "follow" | "neutral" | "primary";

/**
 * The rail's depth in the shell hierarchy — picks its background tint so a
 * primary rail and a secondary (e.g. workspace) rail read as different layers:
 * `primary` (default) · `secondary` · `tertiary`.
 */
export type FoldMenuLevel = "primary" | "secondary" | "tertiary";

/**
 * Where the collapse toggle sits. `auto` follows band presence (first in the
 * footer, else last in the header, else last in the body); the others pin it to
 * a specific band.
 */
export type FoldMenuTogglePlacement = "auto" | "footer" | "header" | "body";

/**
 * `<fold-menu>` — a vertical icon navigation rail (the app's primary menu shell).
 *
 * Structural + presentational: it owns the rail column, its top/body/bottom
 * bands and the tooltip escape (`overflow: visible`); the app fills the slots
 * and keeps all routing, auth and data. Sits inside the shell's `railPrimary`.
 *
 * ## Options
 * - `collapsible` — render a chevron toggle that flips `expanded`.
 * - `expanded` (two-way) — `true` widens the rail and reveals inline labels;
 *   `false` is the icon rail (icon-only, hover tooltips). **Left unbound it
 *   follows `collapsible`:** `<fold-menu collapsible>` boots **expanded** (you
 *   added a way to collapse, so open is the natural start), a bare `<fold-menu>`
 *   boots the icon rail. Bind it (`[expanded]` / `[(expanded)]`) to be
 *   authoritative — an explicit value always wins.
 *
 * ## Slots
 * | Attribute   | Band                                                        |
 * |-------------|-------------------------------------------------------------|
 * | `header`    | Top — brand, workspace launcher, dividers.                  |
 * | *(default)* | The nav items — `[fold-menu-item]` + `<fold-menu-separator>`. |
 * | `footer`    | Bottom (pinned) — secondary actions, account. Hidden when empty. |
 *
 * @selector `fold-menu`
 *
 * @example
 * ```html
 * <fold-menu collapsible [(expanded)]="open()">
 *   <div header>…brand…</div>
 *   <fold-menu-separator label="Workspace" color="#7c5bbf" />
 *   <a fold-menu-item [icon]="i.icon" [label]="i.label"
 *      [routerLink]="i.route" routerLinkActive #r="routerLinkActive"
 *      [active]="r.isActive"></a>
 *   <div footer>…account…</div>
 * </fold-menu>
 * ```
 */
@Component({
  selector: "fold-menu",
  standalone: true,
  imports: [FoldIconComponent, NgTemplateOutlet],
  templateUrl: "./menu.component.html",
  styleUrl: "./menu.component.scss",
  host: {
    "[class.expanded]": "isExpanded()",
    "[attr.data-tint]": "tint()",
    "[attr.data-level]": "level()",
  },
})
export class FoldMenuComponent {
  /** Show a chevron toggle that flips `expanded`. */
  readonly collapsible = input(false, { transform: booleanAttribute });
  /**
   * Two-way. `true` widens the rail and reveals inline labels; `false` is the
   * icon rail. **`undefined` (the default) means "unset"** — the effective state
   * then follows `collapsible` (see {@link isExpanded}), so a bare `collapsible`
   * menu opens without the consumer having to bind it. A bound value is always
   * authoritative.
   */
  readonly expanded = model<boolean | undefined>(undefined);
  /** How items tint on hover / when active (`follow` = section colour). */
  readonly tint = input<FoldMenuTint>("follow");
  /** Rail depth → background tint (`primary` default / `secondary` / `tertiary`). */
  readonly level = input<FoldMenuLevel>("primary");
  /** Pin the collapse toggle to a band, or `auto` to follow band presence. */
  readonly togglePlacement = input<FoldMenuTogglePlacement>("auto");
  /**
   * The rail's accessible name, set on its `<nav>` landmark.
   *
   * Optional for a lone rail — the page's only `<nav>` needs no name. It stops
   * being optional the moment the shell carries **two** rails: an app rail and
   * a workspace rail both announce as "navigation", and nothing tells them
   * apart. Name both, or neither.
   */
  readonly navLabel = input<string>();

  private readonly headRef =
    viewChild.required<ElementRef<HTMLElement>>("head");
  private readonly footRef =
    viewChild.required<ElementRef<HTMLElement>>("foot");
  private readonly hasHeader = signal(false);
  private readonly hasFooter = signal(false);

  /**
   * The effective expanded state everything renders from: the bound `expanded`
   * when set, else it follows `collapsible` (a collapsible rail boots open, a
   * plain one boots as the icon rail). Encodes the sensible default without a
   * warning — the short `<fold-menu collapsible>` Just Works.
   */
  protected readonly isExpanded = computed<boolean>(
    () => this.expanded() ?? this.collapsible(),
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
    this.expanded.set(!this.isExpanded());
  }
}
