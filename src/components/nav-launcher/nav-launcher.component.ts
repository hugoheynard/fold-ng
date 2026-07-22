import {
  Component,
  DestroyRef,
  HostListener,
  computed,
  contentChildren,
  effect,
  inject,
  input,
  model,
} from "@angular/core";
import { FocusTrapDirective } from "../../a11y/focus-trap.directive";
import { ScrollLockService } from "../../a11y/scroll-lock.service";
import { FoldIconComponent } from "../icon/icon.component";
import { FoldNavTileComponent } from "./nav-tile.component";

/**
 * `<fold-nav-launcher>` — a full-screen mobile navigation launcher: a centred
 * grid of large {@link FoldNavTileComponent} tiles over a blurred scrim. The
 * "app-grid" alternative to a slide-in {@link FoldAppShellComponent} drawer — a
 * curated set of top-level destinations, deliberately distinct from the desktop
 * rail (you pick which handful of places matter on a phone).
 *
 * Project `fold-nav-tile`s (or any controls) into the default slot. It owns the
 * whole overlay contract itself: a blurred scrim, dismissal on `Escape` / scrim
 * / the close button, a focus-trap, and a body scroll-lock while open.
 *
 * `open` is two-way — pair it with the shell's `mobileNavOpen` (set on the shell
 * to `mobileNav="none"` so it renders no drawer) and a header hamburger:
 *
 * ```html
 * <fold-app-shell mobileNav="none" [(mobileNavOpen)]="navOpen">…</fold-app-shell>
 *
 * <fold-nav-launcher [(open)]="navOpen" label="Go to">
 *   <a fold-nav-tile icon="home" label="Home" routerLink="/"
 *      (click)="navOpen.set(false)"></a>
 *   <a fold-nav-tile icon="music" label="Music" routerLink="/music"
 *      (click)="navOpen.set(false)"></a>
 * </fold-nav-launcher>
 * ```
 *
 * @selector `fold-nav-launcher`
 */
@Component({
  selector: "fold-nav-launcher",
  standalone: true,
  imports: [FocusTrapDirective, FoldIconComponent],
  templateUrl: "./nav-launcher.component.html",
  styleUrl: "./nav-launcher.component.scss",
})
export class FoldNavLauncherComponent {
  /** Two-way open state — bind to the shell's `mobileNavOpen`. */
  readonly open = model(false);
  /** Accessible name for the launcher dialog. */
  readonly label = input("Navigation");
  /**
   * Grid column count. `"auto"` (default) scales to the number of tiles so a few
   * destinations read as large flat tiles and many stay compact: ≤4 → 2 columns,
   * more → 3. Pass a number to pin it.
   */
  readonly columns = input<number | "auto">("auto");

  /** The projected tiles — their count drives `auto` column sizing. */
  private readonly tiles = contentChildren(FoldNavTileComponent);

  /** The resolved column count (always a number for the grid var). */
  protected readonly resolvedCols = computed(() => {
    const cols = this.columns();
    if (cols !== "auto") {
      return Number(cols);
    }
    return this.tiles().length <= 4 ? 2 : 3;
  });

  private readonly scrollLock = inject(ScrollLockService);
  private locked = false;

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
    inject(DestroyRef).onDestroy(() => {
      if (this.locked) {
        this.scrollLock.unlock();
        this.locked = false;
      }
    });
  }

  /** `Escape` closes the launcher. */
  @HostListener("document:keydown.escape")
  protected onEscape(): void {
    if (this.open()) {
      this.open.set(false);
    }
  }

  /** Dismiss — the scrim + close-button target. */
  protected close(): void {
    this.open.set(false);
  }
}
