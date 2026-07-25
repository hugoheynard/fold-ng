import { Component, ViewEncapsulation } from "@angular/core";
import { KindBadgeComponent } from "../../components/kind-badge.component";
import {
  FoldBadgeComponent,
  FoldButtonComponent,
  FoldCalloutComponent,
  FoldCardComponent,
  FoldElementTitleComponent,
  FoldLinkComponent,
  FoldPageLayoutComponent,
  FoldPageSectionComponent,
  type FoldIconName,
} from "../../../src/public-api";

/** A live demo card, shown once plain and once on the accent surface. */
interface DemoCard {
  readonly icon: FoldIconName;
  readonly title: string;
  readonly body: string;
}

/** `/surfaces` — documents named surfaces + the accent auto-inversion. */
@Component({
  selector: "gal-surfaces-page",
  standalone: true,
  imports: [
    KindBadgeComponent,
    FoldPageLayoutComponent,
    FoldPageSectionComponent,
    FoldCalloutComponent,
    FoldCardComponent,
    FoldElementTitleComponent,
    FoldBadgeComponent,
    FoldLinkComponent,
    FoldButtonComponent,
  ],
  templateUrl: "./surfaces.page.html",
  styleUrl: "./surfaces.page.scss",
  encapsulation: ViewEncapsulation.None,
})
export default class SurfacesPage {
  /** The same content, rendered on `card` and on `accent` side by side. */
  protected readonly demo: DemoCard = {
    icon: "company",
    title: "Studio plan",
    body: "Everything in Pro, plus shared workspaces and priority rendering.",
  };

  protected readonly captureCode = `[data-surface="accent"] {
  color: var(--fold-color-on-primary);
  --_accent-ink: var(--fold-color-on-primary);   /* captured here… */
  --_accent-fill: var(--fold-color-primary);
}
[data-surface="accent"] * {
  --fold-color-text: var(--_accent-ink);          /* …consumed on descendants */
  --fold-color-primary: var(--_accent-ink);       /* fill  → light ink */
  --fold-color-on-primary: var(--_accent-fill);   /* on-fill → the accent */
  /* …surfaces / borders as color-mix of the captured pair… */
}`;

  protected readonly overrideCode = `/* a light accent (titan) wants dark ink, not the derived light ramp */
[data-theme="titan"] [data-surface="accent"] {
  --_accent-ink: var(--fold-ref-steel-900);       /* re-point the capture… */
}
[data-theme="titan"] [data-surface="accent"] * {
  --fold-color-text: var(--fold-ref-steel-900);   /* …or a single role directly */
}`;
}
