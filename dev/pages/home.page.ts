import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import {
  Sh3AsideLayoutComponent,
  Sh3BadgeComponent,
  Sh3ButtonComponent,
  Sh3CalloutComponent,
  Sh3CardComponent,
  Sh3IconComponent,
  type Sh3IconName,
} from "../../src/index";

/** A headline number on the landing hero. */
interface Stat {
  readonly value: string;
  readonly label: string;
}

/** A capability card. */
interface Feature {
  readonly icon: Sh3IconName;
  readonly title: string;
  readonly body: string;
}

/** `/` — the Fold landing page: what the design system is, in one screen. */
@Component({
  selector: "gal-home-page",
  standalone: true,
  imports: [
    RouterLink,
    Sh3AsideLayoutComponent,
    Sh3IconComponent,
    Sh3ButtonComponent,
    Sh3BadgeComponent,
    Sh3CardComponent,
    Sh3CalloutComponent,
  ],
  templateUrl: "./home.page.html",
})
export default class HomePage {
  protected readonly stats: readonly Stat[] = [
    { value: "26", label: "components" },
    { value: "5", label: "themes" },
    { value: "396", label: "tests" },
    { value: "0", label: "runtime theming cost" },
  ];

  protected readonly features: readonly Feature[] = [
    {
      icon: "grid",
      title: "Themeable to the bone",
      body: "Five themes, and not one touches a component. A theme re-points semantic roles at different primitives — the swatch, not the widget. Add a sixth in one CSS block.",
    },
    {
      icon: "lightning",
      title: "Signals-first, zoneless",
      body: "Angular 22, standalone, no zone.js. Inputs and state are signals; forms are Signal Forms. Nothing subscribes, nothing leaks.",
    },
    {
      icon: "shield",
      title: "Tested to a contract",
      body: "396 specs, and a token contract that fails the build if a theme drops a role, a colour goes literal, or a primitive dies. The design system cannot rot quietly.",
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
