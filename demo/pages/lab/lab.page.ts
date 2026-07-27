import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import {
  FoldBadgeComponent,
  FoldCalloutComponent,
  FoldIconComponent,
  FoldPageLayoutComponent,
} from "../../../src/public-api";
import { GALLERY_DEV_ITEMS } from "../../shell/gallery-nav";
import { PUBLISHED_VERSION } from "../../shell/gallery-release";

/**
 * `/lab` — the "In dev" index: a dedicated menu of every component that lives on
 * this branch but is not on npm yet. Both the list and its "dev" flags are
 * derived (`GALLERY_DEV_ITEMS` ← each item's `since` vs `PUBLISHED_VERSION`), so
 * the page empties itself the moment those components are released.
 */
@Component({
  selector: "gal-lab-page",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterLink,
    FoldBadgeComponent,
    FoldCalloutComponent,
    FoldIconComponent,
    FoldPageLayoutComponent,
  ],
  templateUrl: "./lab.page.html",
  styleUrl: "./lab.page.scss",
})
export default class LabPage {
  protected readonly published = PUBLISHED_VERSION;
  protected readonly items = GALLERY_DEV_ITEMS;
  protected readonly next = GALLERY_DEV_ITEMS[0]?.since ?? "the next release";
}
