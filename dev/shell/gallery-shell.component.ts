import { Component, inject, signal } from "@angular/core";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";
import {
  Sh3AppShellComponent,
  Sh3IconComponent,
  Sh3MenuComponent,
  Sh3MenuItemComponent,
  Sh3MenuSectionComponent,
  Sh3PanelHostComponent,
  Sh3PanelHostService,
  Sh3ToastContainerComponent,
} from "../../src/index";
import { InspectPanelComponent } from "../inspect-panel.component";
import { closestSh3, inspect } from "../inspect";
import { GALLERY_NAV, GALLERY_NAV_ITEMS } from "./gallery-nav";

/** The themes the token layer ships — see `src/tokens/semantic.css`. */
type GalleryTheme = "umbra" | "lumen" | "bubbly" | "navi";

/**
 * The gallery shell — the fixed `sh3-app-shell` chrome (a stable static primary
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
    Sh3AppShellComponent,
    Sh3MenuComponent,
    Sh3MenuItemComponent,
    Sh3MenuSectionComponent,
    Sh3IconComponent,
    Sh3PanelHostComponent,
    Sh3ToastContainerComponent,
  ],
  host: {
    class: "gal-root",
    "[attr.data-theme]": "theme() === 'umbra' ? null : theme()",
  },
  templateUrl: "./gallery-shell.component.html",
})
export class GalleryShellComponent {
  private readonly panelHost = inject(Sh3PanelHostService);

  /** Every theme the token layer ships. `umbra` is the base (`:root`), so it
   *  sets no attribute; the rest are `[data-theme]` overrides. */
  protected readonly themes = ["umbra", "lumen", "bubbly", "navi"] as const;
  protected readonly theme = signal<GalleryTheme>("umbra");
  protected readonly navGroups = GALLERY_NAV;

  /** Where the primary rail's "Library" jumps in — the first library entry. */
  protected readonly firstComponent = GALLERY_NAV_ITEMS[0].id;

  protected setTheme(theme: GalleryTheme): void {
    this.theme.set(theme);
  }

  /** Double-click any DS element to open its token/props inspector. */
  protected onInspect(event: MouseEvent): void {
    if (!(event.target instanceof Element)) {
      return;
    }
    const el = closestSh3(event.target);
    const info = el ? inspect(el.tagName.toLowerCase()) : null;
    if (el && info) {
      this.panelHost.open(InspectPanelComponent, {
        data: { info, element: el },
        side: "right",
      });
    }
  }
}
