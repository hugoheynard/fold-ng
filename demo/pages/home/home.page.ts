import { Component, signal, ViewEncapsulation } from "@angular/core";
import { RouterLink } from "@angular/router";
import {
  FoldAsideLayoutComponent,
  FoldAvatarDetailComponent,
  FoldBadgeComponent,
  FoldButtonComponent,
  FoldCalloutComponent,
  FoldCardComponent,
  FoldDisclosureComponent,
  FoldElementTitleComponent,
  FoldHeroSectionComponent,
  FoldIconComponent,
  type FoldIconName,
  FoldPageLayoutComponent,
  FoldPageSectionComponent,
} from "../../../src/public-api";
import pkg from "../../../package.json";
import {
  FOLD_COMPONENT_COUNT,
  FOLD_THEME_COUNT,
  FOLD_TEST_COUNT,
} from "../../shell/gallery-stats";

/** A headline number on the landing hero. */
interface Stat {
  readonly value: string;
  readonly label: string;
}

/** A capability card. */
interface Feature {
  readonly icon: FoldIconName;
  readonly title: string;
  readonly body: string;
}

/** `/` — the Fold landing page: what the design system is, in one screen. */
@Component({
  selector: "gal-home-page",
  standalone: true,
  imports: [
    RouterLink,
    FoldAsideLayoutComponent,
    FoldAvatarDetailComponent,
    FoldDisclosureComponent,
    FoldElementTitleComponent,
    FoldIconComponent,
    FoldButtonComponent,
    FoldBadgeComponent,
    FoldCardComponent,
    FoldCalloutComponent,
    FoldHeroSectionComponent,
    FoldPageLayoutComponent,
    FoldPageSectionComponent,
  ],
  templateUrl: "./home.page.html",
  styleUrl: "./home.page.scss",
  encapsulation: ViewEncapsulation.None,
})
export default class HomePage {
  /** The package version, straight from package.json — never drifts. */
  protected readonly version = pkg.version;

  /** Feature-card indices painted with the accent fill — a checkerboard across
   *  the two-column grid (1st, 4th, 5th cards). */
  protected readonly accentCards = new Set([0, 3, 4]);

  /** The "Start now" disclosure — reveals the terminal install. */
  protected readonly startNowOpen = signal(false);

  /** The "Support" disclosure — donate / star / share. */
  protected readonly supportOpen = signal(false);
  /** A pre-filled X (Twitter) share intent for Fold. */
  protected readonly shareUrl =
    "https://x.com/intent/post?text=" +
    encodeURIComponent(
      "Fold — a signals-first Angular design system, themeable to the bone.",
    ) +
    "&url=" +
    encodeURIComponent("https://github.com/hugoheynard/fold-ng");

  protected readonly stats: readonly Stat[] = [
    { value: `${FOLD_COMPONENT_COUNT}`, label: "components" },
    { value: `${FOLD_THEME_COUNT}`, label: "themes" },
    { value: `${FOLD_TEST_COUNT}`, label: "tests" },
    { value: "0", label: "runtime theming cost" },
  ];

  // Order tuned so the checkerboard accent (1st, 4th, 5th) lands on a good mix:
  // theme · zoneless · accessible · layouts · tested · self-contained.
  protected readonly features: readonly Feature[] = [
    {
      icon: "grid",
      title: "Themeable to the bone",
      body: `${FOLD_THEME_COUNT} themes, and not one touches a component. A theme re-points semantic roles at different primitives — the swatch, not the widget. Add the next in one CSS block.`,
    },
    {
      icon: "lightning",
      title: "Signals-first, zoneless",
      body: "Angular 22, standalone, no zone.js. Inputs and state are signals; forms are Signal Forms. Nothing subscribes, nothing leaks.",
    },
    {
      icon: "completed",
      title: "Accessible by default",
      body: "Roles resolve from intent, focus is trapped where it should be, and a callout only interrupts a screen reader when it actually appears. Not an afterthought.",
    },
    {
      icon: "org-chart",
      title: "Layouts that fold",
      body: "app-shell, nav-layout, aside-layout, sticky-column — the structural pieces every app hand-rolls, responsive on their own width, yours in one binding.",
    },
    {
      icon: "shield",
      title: "Tested to a contract",
      body: "400 specs, and a token contract that fails the build if a theme drops a role, a colour goes literal, or a primitive dies. The design system cannot rot quietly.",
    },
    {
      icon: "diamond",
      title: "Self-contained",
      body: "Icons inline as currentColor SVG, styles ship with the component, tokens are plain CSS variables. Drop it into any Angular app — no loader config, no asset pipeline.",
    },
  ];
}
