import {
  Component,
  DestroyRef,
  HostListener,
  Injector,
  afterNextRender,
  booleanAttribute,
  computed,
  contentChildren,
  effect,
  inject,
  input,
  model,
  signal,
} from "@angular/core";
import { FocusTrapDirective } from "../../../a11y/focus-trap.directive";
import { FoldSurfaceDirective } from "../../../directives/surface.directive";
import { ScrollLockService } from "../../../a11y/scroll-lock.service";
import { FoldIconComponent } from "../../foundations/icon/icon.component";
import { FoldNavGroupComponent } from "./nav-group.component";
import { FoldNavTileComponent } from "./nav-tile.component";
import { FOLD_NAV_LAUNCHER } from "./nav-launcher.tokens";
import {
  inDomOrder,
  stageRows,
  stageWave,
  type FoldNavPhase,
} from "./nav-wave";

/** How long the descent runs before level 2 takes over (ms). */
const DRILL_MS = 260;
/** How long the climb back runs (ms). */
const BACK_MS = 200;
/** When the entrance cascade is over and `:active` gets the transform back (ms). */
const SETTLE_MS = 760;
/** Horizontal travel that counts as a "swipe right" (px). */
const SWIPE_PX = 56;

/**
 * `<fold-nav-launcher>` — the full-screen mobile navigation, in **two levels**.
 *
 * A grid of large tiles; a tile that contains tiles (a {@link FoldNavGroupComponent})
 * opens a second level instead of going somewhere. It owns the whole overlay
 * contract: scrim, `Escape` / close-button dismissal, focus-trap, body
 * scroll-lock — and, from v2, the descent itself.
 *
 * ## The transition is the wayfinding
 * There is no breadcrumb. **The tile you touch becomes the header of the level
 * it opens** — it is the only element that survives the transition, so it is
 * the only landmark the eye needs. Its sisters leave in a **wave that starts
 * under your finger** (26 ms per step of distance, not per position in the
 * list), rising as they blur — upward, where the finger is not going. The way
 * back is the exact inverse: same curve, same cascade, opposite direction.
 *
 * ## What it owes assistive tech
 * Motion tells a sighted user where they went and nothing at all to anyone
 * else, so none of this is left to the animation:
 * - **Focus follows the level** — down to the sheet's first entry, and back to
 *   the tile it came from.
 * - **`Escape` is contextual** — at level 2 it climbs, at level 1 it closes.
 *   Two gestures, one key, in that order.
 * - **The level is announced** — a polite live region says "PIM, 7 entries".
 * - **The swipe is a bonus, not the path.** It doubles the back button.
 *
 * ```html
 * <fold-app-shell mobileNav="none" [(mobileNavOpen)]="navOpen">…</fold-app-shell>
 *
 * <fold-nav-launcher [(open)]="navOpen" eyebrow="LFC B2B" heading="Admin">
 *   <a fold-nav-tile icon="home" label="Home" routerLink="/"></a>
 *   <fold-nav-group icon="catalog" label="PIM">
 *     <a fold-nav-tile icon="product" label="Products" routerLink="/pim/products"></a>
 *   </fold-nav-group>
 *   <div footer>…account, sign-out…</div>
 * </fold-nav-launcher>
 * ```
 *
 * @selector `fold-nav-launcher`
 */
@Component({
  selector: "fold-nav-launcher",
  standalone: true,
  imports: [FocusTrapDirective, FoldIconComponent, FoldSurfaceDirective],
  templateUrl: "./nav-launcher.component.html",
  styleUrl: "./nav-launcher.component.scss",
  providers: [
    { provide: FOLD_NAV_LAUNCHER, useExisting: FoldNavLauncherComponent },
  ],
})
export class FoldNavLauncherComponent {
  /** Two-way open state — bind to the shell's `mobileNavOpen`. */
  readonly open = model(false);
  /** Accessible name for the launcher dialog. */
  readonly label = input("Navigation");
  /** Small uppercase line above the heading — the tenant, the environment. */
  readonly eyebrow = input<string>();
  /** The level-1 heading. Level 2 replaces it with the group's own name. */
  readonly heading = input<string>();
  /** Close-button label, for a non-English app. */
  readonly closeLabel = input("Close navigation");
  /** Back-button label, for a non-English app. */
  readonly backLabel = input("Back");
  /**
   * The translucent treatment. Off by default and that is the position, not an
   * oversight: glass costs a compositing layer per plane, and text contrast
   * drops about a step on a 50 % plane. The launcher stays dark either way —
   * glass brightens the light that crosses a surface, never the surface.
   */
  readonly glass = input(false, { transform: booleanAttribute });
  /**
   * Grid column count. `"auto"` (default) scales to the number of level-1
   * items: ≤4 → 2 columns, more → 3.
   */
  readonly columns = input<number | "auto">("auto");

  /** Level-1 tiles — those written straight into the launcher. */
  private readonly tiles = contentChildren(FoldNavTileComponent);
  /** The groups — each one a tile that opens a level. */
  private readonly groups = contentChildren(FoldNavGroupComponent);

  /** Which group's sheet is on screen, or `null` at level 1. */
  private readonly openGroup = signal<FoldNavGroupComponent | null>(null);
  /** The group being descended into, while the wave plays. */
  private readonly pending = signal<FoldNavGroupComponent | null>(null);
  /** `down` / `up` while a transition runs — a second tap must be ignored. */
  private readonly phase = signal<FoldNavPhase>("idle");
  /** Has the entrance cascade finished? Then `:active` gets the transform back. */
  private readonly settled = signal(false);

  readonly openGroupId = computed(() => this.openGroup()?.groupId ?? null);
  readonly busy = computed(() => this.phase() !== "idle");

  /** `1` or `2` — what the dialog paints and what the dots say. */
  protected readonly level = computed(() => (this.openGroup() ? 2 : 1));

  /** The group whose tile is the anchor: the open one, or the one being opened. */
  protected readonly anchor = computed(
    () => this.openGroup() ?? this.pending(),
  );

  /** The resolved column count (always a number for the grid var). */
  protected readonly resolvedCols = computed(() => {
    const cols = this.columns();
    if (cols !== "auto") {
      return cols;
    }
    return this.tiles().length + this.groups().length <= 4 ? 2 : 3;
  });

  /** The sheet's subtitle — derived from the group's own children, never passed. */
  protected readonly entryCountText = computed(() => {
    const group = this.openGroup();
    return group ? group.entryCountLabel()(group.entryCount()) : "";
  });

  /**
   * What the live region says. Empty at level 1 on purpose: closing a sheet is
   * already announced by the focus landing back on its tile, and a second
   * message on top of that is noise.
   */
  protected readonly announcement = computed(() => {
    const group = this.openGroup();
    return group ? `${group.label()}, ${this.entryCountText()}` : "";
  });

  private readonly injector = inject(Injector);
  private readonly scrollLock = inject(ScrollLockService);
  private locked = false;
  private settleTimer: ReturnType<typeof setTimeout> | undefined;
  private phaseTimer: ReturnType<typeof setTimeout> | undefined;
  private swipeFrom: number | null = null;

  constructor() {
    // Freeze the page scroll behind the full-screen launcher while it is open.
    effect(() => {
      const shouldLock = this.open();
      if (shouldLock && !this.locked) {
        this.scrollLock.lock();
        this.locked = true;
      } else if (!shouldLock && this.locked) {
        this.scrollLock.unlock();
        this.locked = false;
      }
    });

    // Closing resets the depth. Re-opening onto a sheet from a previous visit
    // would drop you somewhere you never asked to be.
    effect(() => {
      if (this.open()) {
        this.restage();
      } else {
        this.openGroup.set(null);
        this.pending.set(null);
        this.phase.set("idle");
      }
    });

    // The wave's origin is the touched tile, so its delays can only be written
    // once that tile is known — and re-written every time the level changes.
    effect(() => this.stage(this.pending() ?? this.openGroup(), this.phase()));

    inject(DestroyRef).onDestroy(() => {
      clearTimeout(this.settleTimer);
      clearTimeout(this.phaseTimer);
      if (this.locked) {
        this.scrollLock.unlock();
        this.locked = false;
      }
    });
  }

  /** Descend into a group. Ignored mid-transition, and on an unknown id. */
  drill(groupId: string): void {
    const group = this.groups().find((g) => g.groupId === groupId);
    if (!group || this.busy() || this.openGroup()) {
      return;
    }
    this.pending.set(group);
    this.phase.set("down");
    this.settled.set(false);
    clearTimeout(this.phaseTimer);
    this.phaseTimer = setTimeout(() => {
      this.openGroup.set(group);
      this.pending.set(null);
      this.phase.set("idle");
      this.restage();
      // Focus follows the level. Without this the trap keeps the caret on a
      // tile that is no longer on screen, and the next Tab starts from nowhere.
      this.focusAfterRender(() => group.focusFirstEntry());
    }, DRILL_MS);
  }

  /** Climb back to level 1, returning focus to the tile we came from. */
  back(): void {
    const group = this.openGroup();
    if (!group || this.busy()) {
      return;
    }
    this.phase.set("up");
    this.settled.set(false);
    clearTimeout(this.phaseTimer);
    this.phaseTimer = setTimeout(() => {
      this.openGroup.set(null);
      this.phase.set("idle");
      this.restage();
      this.focusAfterRender(() => group.focusTile());
    }, BACK_MS);
  }

  /**
   * `Escape` is contextual: at level 2 it climbs, at level 1 it closes. Two
   * gestures, one key, in that order — the same order the back button and the
   * close button sit in on screen.
   */
  @HostListener("document:keydown.escape")
  protected onEscape(): void {
    if (!this.open()) {
      return;
    }
    if (this.openGroup()) {
      this.back();
      return;
    }
    this.close();
  }

  /** Dismiss — the close-button target. */
  protected close(): void {
    this.open.set(false);
  }

  /** A swipe to the right climbs a level — a bonus on top of the back button. */
  protected onPointerDown(event: PointerEvent): void {
    this.swipeFrom = event.clientX;
  }

  protected onPointerUp(event: PointerEvent): void {
    const from = this.swipeFrom;
    this.swipeFrom = null;
    if (from !== null && event.clientX - from > SWIPE_PX) {
      this.back();
    }
  }

  /**
   * A click on the launcher's empty surface dismisses it — anywhere that is not
   * a tile, the sheet, or a control.
   *
   * The scrim carried this handler and could never fire it: `.nl-dialog` is
   * `position: fixed; inset: 0` at a higher z-index, so it covers the scrim
   * whole. The gesture people expect from a full-screen overlay simply did not
   * exist, while the markup claimed it did.
   */
  protected onSurfaceClick(event: Event): void {
    const target = event.target;
    // The launcher's OWN surfaces only — never an allow-list of what may be
    // projected into it. Anything a consumer puts in the grid keeps its own
    // clicks, without this component having to know what it is.
    if (!(target instanceof Element)) {
      return;
    }
    if (
      target.classList.contains("nl-dialog") ||
      target.classList.contains("nl-body") ||
      target.classList.contains("nl-grid")
    ) {
      this.close();
    }
  }

  /** Replay the entrance cascade, then hand the transform back to `:active`. */
  private restage(): void {
    this.settled.set(false);
    clearTimeout(this.settleTimer);
    this.settleTimer = setTimeout(() => {
      this.settled.set(true);
      this.stage(this.openGroup(), "idle");
    }, SETTLE_MS);
  }

  /**
   * Move focus once the new level is actually on screen.
   *
   * Setting the level is a signal write; the sheet is still `inert` and its
   * rows still unrendered until change detection has run. Focusing there and
   * then silently failed, and the trap fell back to the first control in the
   * dialog — the close button. So the caret landed on "dismiss" every time
   * someone opened a section.
   */
  private focusAfterRender(move: () => void): void {
    afterNextRender(move, { injector: this.injector });
  }

  /** Re-write the wave for the current origin and phase. */
  private stage(
    origin: FoldNavGroupComponent | null,
    phase: FoldNavPhase,
  ): void {
    const items = inDomOrder([[...this.tiles()], [...this.groups()]]);
    stageWave(items, origin?.hostEl ?? null, phase, this.settled());

    const sheet = this.openGroup()?.hostEl;
    const rows = sheet
      ? [...sheet.querySelectorAll<HTMLElement>(".fold-nav-tile")]
      : [];
    stageRows(rows, phase, this.settled());
  }
}
