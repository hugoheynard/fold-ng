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
import { TokenPanelComponent } from "../token-panel.component";
import { InspectPanelComponent } from "../inspect-panel.component";
import { closestSh3, inspect } from "../inspect";
import { GALLERY_NAV } from "./gallery-nav";

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
    TokenPanelComponent,
  ],
  host: {
    class: "gal-root",
    "[attr.data-theme]": "theme() === 'light' ? 'light' : null",
  },
  templateUrl: "./gallery-shell.component.html",
})
export class GalleryShellComponent {
  private readonly panelHost = inject(Sh3PanelHostService);

  protected readonly theme = signal<"dark" | "light">("dark");
  protected readonly navGroups = GALLERY_NAV;

  /** railPrimary: a stable static nav, decoupled from any page. */
  protected readonly railNav = [
    { id: "home", icon: "home", label: "Home" },
    { id: "contracts", icon: "contracts", label: "Contracts" },
    { id: "music", icon: "music", label: "Music" },
  ] as const;
  protected readonly railActive = signal<string>("home");

  protected toggleTheme(): void {
    this.theme.update((t) => (t === "dark" ? "light" : "dark"));
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
