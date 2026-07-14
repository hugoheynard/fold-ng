import { Component, signal } from "@angular/core";
import {
  Sh3BadgeComponent,
  Sh3CardComponent,
  Sh3ContextCardComponent,
  Sh3ElementTitleComponent,
  Sh3HeroComponent,
  Sh3IconComponent,
  Sh3LinkComponent,
  Sh3PageSectionComponent,
  Sh3StatusBadgeComponent,
} from "../src/index";
import { TokenPanelComponent } from "./token-panel.component";

/**
 * The gallery: every `@sh3pherd/ui` component with its variant matrix + a
 * dark/light theme toggle that flips the token layer for the whole subtree.
 */
@Component({
  selector: "app-gallery",
  standalone: true,
  imports: [
    Sh3CardComponent,
    Sh3HeroComponent,
    Sh3PageSectionComponent,
    Sh3ElementTitleComponent,
    Sh3ContextCardComponent,
    Sh3LinkComponent,
    Sh3BadgeComponent,
    Sh3StatusBadgeComponent,
    Sh3IconComponent,
    TokenPanelComponent,
  ],
  host: { "[attr.data-theme]": "theme() === 'light' ? 'light' : null" },
  templateUrl: "./gallery.component.html",
  styleUrl: "./gallery.component.css",
})
export class GalleryComponent {
  protected readonly theme = signal<"dark" | "light">("dark");

  // `as const` so each loop variable keeps its literal union type — required
  // for strictTemplates to accept it as a component input.
  protected readonly iconTones = ["primary", "neutral", "faded"] as const;
  protected readonly heroSurfaces = ["card", "sunken"] as const;
  protected readonly heroAccents = ["none", "subtle", "gradient"] as const;
  protected readonly badgeVariants = [
    "accent",
    "info",
    "warning",
    "alert",
    "success",
  ] as const;
  protected readonly iconNames = [
    "company",
    "home",
    "contracts",
    "edit",
    "bell",
    "music",
  ] as const;

  protected toggleTheme(): void {
    this.theme.update((t) => (t === "dark" ? "light" : "dark"));
  }
}
