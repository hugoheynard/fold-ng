import { Component, signal } from "@angular/core";
import {
  FoldButtonComponent,
  FoldCalloutComponent,
  FoldCardComponent,
  FoldPageLayoutComponent,
  FoldPageSectionComponent,
} from "../../../src/index";
import { KindBadgeComponent } from "../../kind-badge.component";
import { THEME_SMELLS, THEME_STEPS } from "./theme-recipe";

/** One theme, as the page documents it. */
interface ThemeEntry {
  /** `data-theme` value — `null` for the base, which needs no attribute. */
  readonly attr: string | null;
  readonly name: string;
  /** What it is for, and what makes it different from the others. */
  readonly summary: string;
  /** The primitive families it re-points, in plain words. */
  readonly palette: string;
  /** Anything a consumer would trip on. */
  readonly note?: string;
}

/** A semantic role shown as a swatch. Grouped the way the tokens file is. */
interface RoleGroup {
  readonly label: string;
  readonly roles: readonly string[];
}

/** `/themes` — the theme + token-override reference page. */
@Component({
  selector: "gal-themes-page",
  standalone: true,
  imports: [
    KindBadgeComponent,
    FoldPageLayoutComponent,
    FoldPageSectionComponent,
    FoldCardComponent,
    FoldCalloutComponent,
    FoldButtonComponent,
  ],
  templateUrl: "./themes.page.html",
})
export default class ThemesPage {
  protected readonly themes: readonly ThemeEntry[] = [
    {
      attr: null,
      name: "umbra",
      summary:
        "The base. It lives on :root, so an app that sets no attribute renders umbra — deep blue-black chrome, teal brand, the product's default skin.",
      palette: "ink (chrome) · teal (brand) · slate (text)",
    },
    {
      attr: "lumen",
      name: "lumen",
      summary:
        "The daylight counterpart to umbra: cloud-grey surfaces, the same teal muted so it holds up on white, and the text ramp inverted.",
      palette: "cloud + white (chrome) · teal (brand) · slate (text)",
    },
    {
      attr: "bubbly",
      name: "bubbly",
      summary:
        "Festive light: soft lavender chrome, a joyful violet brand, corners rounded right up. White cards float on the lavender page. Info moves to cyan so it never blurs into the violet brand.",
      palette: "bubble (chrome) · grape (brand) · slate (text) · azure (info)",
    },
    {
      attr: "navi",
      name: "navi",
      summary:
        "Dark chrome, light page — the back-office frame. One navy family serves both the brand on the page and the rails behind it, and the corners square off: radius is themeable, because corner softness is a brand axis that moves no box.",
      palette: "navy (chrome + brand) · ivory (page) · slate (text)",
      note: 'Mixing chrome and page needs text/surface/brand to differ per region, which one set of roles cannot express — so navi re-declares them on [data-surface="chrome"], a contract the shell (and any element) opts into via the foldSurface directive. Variables only, no reaching into a component.',
    },
  ];

  /** The roles each theme block declares — the swatch grid below every theme. */
  protected readonly roleGroups: readonly RoleGroup[] = [
    {
      label: "surfaces",
      roles: [
        "bg-page",
        "bg-header",
        "bg-rail-primary",
        "bg-rail-secondary",
        "surface-card",
        "surface-sunken",
      ],
    },
    {
      label: "brand",
      roles: ["primary", "primary-strong", "primary-text", "primary-surface"],
    },
    {
      label: "text",
      roles: ["text", "text-secondary", "text-muted", "text-faded"],
    },
    {
      label: "status",
      roles: ["info", "success", "warning", "alert"],
    },
  ];

  /** The authoring guide — steps + the checks to run once it renders. */
  protected readonly steps = THEME_STEPS;
  protected readonly smells = THEME_SMELLS;

  /** Swatches are heavy; a theme opens on demand (navi first — the odd one). */
  protected readonly open = signal<string>("navi");
  protected toggle(name: string): void {
    this.open.update((current) => (current === name ? "" : name));
  }

  protected readonly overrideCode = `/* 1 · One role, everywhere. Any ancestor will do — :root themes the app. */
:root {
  --fold-color-primary: var(--fold-ref-teal-400);
}

/* 2 · A whole theme: re-point the roles, never edit a hex. Every theme block
      must declare the FULL catalogue — the contract test fails on a gap. */
[data-theme="brandx"] {
  --fold-color-bg-page: var(--fold-ref-cloud-100);
  --fold-color-primary: var(--fold-ref-teal-550);
  /* …the other 38 roles… */
}

/* 3 · A subtree. Themes are just custom properties, so any element can carry
      one — a dark hero on a light page, a preview pane in another theme. */
<section data-theme="navi">…</section>

/* 4 · Shape. Radius is the one scale a theme may re-declare. */
[data-theme="brandx"] {
  --fold-radius-md: 3px;
}`;

  protected readonly consumeCode = `<!-- The app picks a theme; umbra needs no attribute. -->
<html data-theme="navi">

<!-- Components never name a colour — they read roles, so they follow. -->
<div class="panel">…</div>`;

  protected readonly consumeCss = `.panel {
  background: var(--fold-color-surface-card);
  border: 1px solid var(--fold-color-border);
  color: var(--fold-color-text);
}`;
}
