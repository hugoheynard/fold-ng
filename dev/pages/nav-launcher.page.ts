import { Component, signal } from "@angular/core";
import {
  Sh3ButtonComponent,
  Sh3CalloutComponent,
  Sh3NavLauncherComponent,
  Sh3NavTileComponent,
  Sh3PageLayoutComponent,
  Sh3PageSectionComponent,
} from "../../src/index";
import type { Sh3IconName } from "../../src/index";
import { KindBadgeComponent } from "../kind-badge.component";

interface LauncherDest {
  readonly id: string;
  readonly icon: Sh3IconName;
  readonly label: string;
}

/** `/nav-launcher` — the `sh3-nav-launcher` gallery page (live full-screen demo). */
@Component({
  selector: "gal-nav-launcher-page",
  standalone: true,
  imports: [
    KindBadgeComponent,
    Sh3PageLayoutComponent,
    Sh3PageSectionComponent,
    Sh3ButtonComponent,
    Sh3CalloutComponent,
    Sh3NavLauncherComponent,
    Sh3NavTileComponent,
  ],
  templateUrl: "./nav-launcher.page.html",
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
<sh3-app-shell mobileNav="none" [(mobileNavOpen)]="navOpen">…</sh3-app-shell>

<!-- columns="auto" (default) scales tiles to the count; variant="filled" is the
     solid brand tile (navy + white glyph under navi). -->
<sh3-nav-launcher [(open)]="navOpen" label="Go to">
  <a sh3-nav-tile variant="filled" icon="home" label="Home" routerLink="/"
     (click)="navOpen.set(false)"></a>
  <a sh3-nav-tile variant="filled" icon="music" label="Music" routerLink="/music"
     (click)="navOpen.set(false)"></a>
  …
</sh3-nav-launcher>`;
}
