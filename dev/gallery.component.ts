import { Component, afterNextRender, signal } from "@angular/core";
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
import { TocPanelComponent, type TocItem } from "./toc-panel.component";

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
    TocPanelComponent,
  ],
  host: { "[attr.data-theme]": "theme() === 'light' ? 'light' : null" },
  templateUrl: "./gallery.component.html",
  styleUrl: "./gallery.component.css",
})
export class GalleryComponent {
  protected readonly theme = signal<"dark" | "light">("dark");

  /** The table of contents — ids match the `<section>` ids in the template. */
  protected readonly toc: readonly TocItem[] = [
    { id: "element-title", label: "element-title" },
    { id: "context-card", label: "context-card" },
    { id: "page-section", label: "page-section" },
    { id: "hero", label: "hero" },
    { id: "card", label: "card" },
    { id: "link", label: "link" },
    { id: "badges", label: "badge · status · icon" },
  ];
  /** The section currently in view — drives the TOC highlight (scroll-spy). */
  protected readonly activeSection = signal<string>("");

  constructor() {
    afterNextRender(() => this.observeSections());
  }

  private observeSections(): void {
    const sections = this.toc
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.activeSection.set(entry.target.id);
          }
        }
      },
      { rootMargin: "0px 0px -70% 0px", threshold: 0 },
    );
    for (const el of sections) {
      observer.observe(el);
    }
  }

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
