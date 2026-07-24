import { Component, computed, inject, signal } from "@angular/core";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";
import {
  FoldAppShellComponent,
  FoldElevatedDirective,
  FoldIconComponent,
  FoldMenuComponent,
  FoldMenuItemComponent,
  FoldMenuSectionComponent,
  FoldNavLauncherComponent,
  FoldNavTileComponent,
  FoldPanelHostComponent,
  FoldPanelHostService,
  FoldToastContainerComponent,
} from "../../src/public-api";
import { InspectPanelComponent } from "./inspect-panel.component";
import { closestFold, inspect } from "./inspect";
import { GALLERY_NAV, GALLERY_NAV_ITEMS } from "./gallery-nav";
import {
  GALLERY_THEME_CONFIG,
  GALLERY_THEMES,
  type GalleryTheme,
} from "./gallery-theme";
import pkg from "../../package.json";

/**
 * The gallery shell — the fixed `fold-app-shell` chrome (a stable static primary
 * rail, the Library nav as `routerLink`s, the header + theme toggle) with a
 * `<router-outlet>` for the routed component page. Cross-cutting dev tooling
 * (the docked token editor, double-click-to-inspect) lives here, above the
 * per-page content. Selector `gallery-shell` (see `index.html`).
 */
@Component({
  selector: "gallery-shell",
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    FoldAppShellComponent,
    FoldMenuComponent,
    FoldMenuItemComponent,
    FoldMenuSectionComponent,
    FoldNavLauncherComponent,
    FoldNavTileComponent,
    FoldElevatedDirective,
    FoldIconComponent,
    FoldPanelHostComponent,
    FoldToastContainerComponent,
  ],
  host: {
    class: "gal-root",
    "[attr.data-theme]": "cfg().dataTheme",
  },
  templateUrl: "./gallery-shell.component.html",
})
export class GalleryShellComponent {
  private readonly panelHost = inject(FoldPanelHostService);

  /** Every theme the token layer ships, in switcher order. */
  protected readonly themes = GALLERY_THEMES;
  protected readonly theme = signal<GalleryTheme>("umbra");
  protected readonly navGroups = GALLERY_NAV;

  /** The active theme's chrome config — the single source the template reads
   *  every theme-varying binding from (elevated, mobileNav, data-theme…), so
   *  the switch lives here, not as a ternary per binding. */
  protected readonly cfg = computed(() => GALLERY_THEME_CONFIG[this.theme()]);

  /** The mobile nav open state, two-way bound to the shell (and, in tile mode,
   *  to the launcher). The header hamburger (mobile-only) toggles it. */
  protected readonly mobileNavOpen = signal(false);

  /** Where the primary rail's "Library" jumps in — the first library entry. */
  protected readonly firstComponent = GALLERY_NAV_ITEMS[0]?.id ?? "";

  /** Footer chrome — version straight from package.json, year at render time. */
  protected readonly version = pkg.version;
  protected readonly year = new Date().getFullYear();

  protected setTheme(theme: GalleryTheme): void {
    this.theme.set(theme);
  }

  /** Double-click any DS element to open its token/props inspector. */
  protected onInspect(event: MouseEvent): void {
    if (!(event.target instanceof Element)) {
      return;
    }
    const el = closestFold(event.target);
    const info = el ? inspect(el.tagName.toLowerCase()) : null;
    if (el && info) {
      this.panelHost.open(InspectPanelComponent, {
        data: { info, element: el },
        side: "right",
      });
    }
  }
}
