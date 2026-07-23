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
  FoldElevatedDirective,
  FoldHeroSectionComponent,
  FoldIconComponent,
  type FoldIconName,
  FoldPageLayoutComponent,
  FoldPageSectionComponent,
} from "../../../src/index";
import pkg from "../../../package.json";

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
    FoldIconComponent,
    FoldButtonComponent,
    FoldBadgeComponent,
    FoldCardComponent,
    FoldCalloutComponent,
    FoldHeroSectionComponent,
    FoldPageLayoutComponent,
    FoldPageSectionComponent,
    FoldElevatedDirective,
  ],
  templateUrl: "./home.page.html",
  styleUrl: "./home.page.scss",
  encapsulation: ViewEncapsulation.None,
})
export default class HomePage {
  /** The package version, straight from package.json — never drifts. */
  protected readonly version = pkg.version;

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
    encodeURIComponent("https://github.com/hugoheynard/fold");

  protected readonly stats: readonly Stat[] = [
    { value: "26", label: "components" },
    { value: "4", label: "themes" },
    { value: "400", label: "tests" },
    { value: "0", label: "runtime theming cost" },
  ];

  protected readonly features: readonly Feature[] = [
    {
      icon: "grid",
      title: "Themeable to the bone",
      body: "Four themes, and not one touches a component. A theme re-points semantic roles at different primitives — the swatch, not the widget. Add a fifth in one CSS block.",
    },
    {
      icon: "lightning",
      title: "Signals-first, zoneless",
      body: "Angular 22, standalone, no zone.js. Inputs and state are signals; forms are Signal Forms. Nothing subscribes, nothing leaks.",
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
    {
      icon: "org-chart",
      title: "Layouts that fold",
      body: "app-shell, tab-layout, aside-layout, sticky-column — the structural pieces every app hand-rolls, responsive on their own width, yours in one binding.",
    },
    {
      icon: "completed",
      title: "Accessible by default",
      body: "Roles resolve from intent, focus is trapped where it should be, and a callout only interrupts a screen reader when it actually appears. Not an afterthought.",
    },
  ];
}
