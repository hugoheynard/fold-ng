import { Component, signal, ViewEncapsulation } from "@angular/core";
import {
  FoldButtonComponent,
  FoldCalloutComponent,
  FoldNavLauncherComponent,
  FoldNavTileComponent,
  FoldPageLayoutComponent,
  FoldPageSectionComponent,
} from "../../../src/public-api";
import type { FoldIconName } from "../../../src/public-api";
import { KindBadgeComponent } from "../../kind-badge.component";

interface LauncherDest {
  readonly id: string;
  readonly icon: FoldIconName;
  readonly label: string;
}

/** `/nav-launcher` — the `fold-nav-launcher` gallery page (live full-screen demo). */
@Component({
  selector: "gal-nav-launcher-page",
  standalone: true,
  imports: [
    KindBadgeComponent,
    FoldPageLayoutComponent,
    FoldPageSectionComponent,
    FoldButtonComponent,
    FoldCalloutComponent,
    FoldNavLauncherComponent,
    FoldNavTileComponent,
  ],
  templateUrl: "./nav-launcher.page.html",
  styleUrl: "./nav-launcher.page.scss",
  encapsulation: ViewEncapsulation.None,
})
export default class NavLauncherPage {
  /** The live launcher's open state (the button + the launcher share it). */
  protected readonly open = signal(false);

  /** The current destination — the tile that lights up as active. */
  protected readonly active = signal("home");

  /** A curated handful of top-level destinations — the point of a launcher. */
  protected readonly dests: readonly LauncherDest[] = [
    { id: "home", icon: "home", label: "Home" },
    { id: "library", icon: "library", label: "Library" },
    { id: "contracts", icon: "contracts", label: "Contracts" },
    { id: "music", icon: "music", label: "Music" },
    { id: "play", icon: "play", label: "Playlists" },
    { id: "settings", icon: "settings", label: "Settings" },
  ];

  /** Pick a destination and close — what a routed tile would do on navigation. */
  protected pick(id: string): void {
    this.active.set(id);
    this.open.set(false);
  }

  protected readonly usageCode = `<!-- The shell renders no built-in drawer; the launcher owns the mobile nav. -->
<fold-app-shell mobileNav="none" [(mobileNavOpen)]="navOpen">…</fold-app-shell>

<!-- columns="auto" (default) scales tiles to the count; variant="filled" is the
     solid brand tile (navy + white glyph under navi). -->
<fold-nav-launcher [(open)]="navOpen" label="Go to">
  <a fold-nav-tile variant="filled" icon="home" label="Home" routerLink="/"
     (click)="navOpen.set(false)"></a>
  <a fold-nav-tile variant="filled" icon="music" label="Music" routerLink="/music"
     (click)="navOpen.set(false)"></a>
  …
</fold-nav-launcher>`;
}
