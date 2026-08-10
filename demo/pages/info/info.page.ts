import { Component } from "@angular/core";
import { KindBadgeComponent } from "../../components/kind-badge.component";
import { ComposedOfComponent } from "../../components/composed-of.component";
import {
  FoldCardComponent,
  FoldInfoComponent,
  FoldInputComponent,
  FoldNumberInputComponent,
  FoldPageLayoutComponent,
  FoldPageSectionComponent,
  type FoldPopoverPlacement,
} from "../../../src/public-api";

/** `/info` — the `fold-info` help bubble: the `i` that answers "what is this?". */
@Component({
  selector: "gal-info-page",
  standalone: true,
  imports: [
    KindBadgeComponent,
    ComposedOfComponent,
    FoldCardComponent,
    FoldInfoComponent,
    FoldInputComponent,
    FoldNumberInputComponent,
    FoldPageLayoutComponent,
    FoldPageSectionComponent,
  ],
  templateUrl: "./info.page.html",
  styleUrl: "./info.page.scss",
})
export default class InfoPage {
  protected readonly placements = [
    "bottom-end",
    "bottom-start",
    "top-end",
    "right-start",
  ] as const satisfies readonly FoldPopoverPlacement[];

  protected readonly standaloneCode = `<!-- anywhere: a card corner, a table header, a metric label -->
<fold-info
  label="More information about monthly recurring revenue"
  text="What the active subscriptions bill in a month, at today's prices." />`;

  protected readonly fieldCode = `<!-- on a labelled field: the same primitive, via the info input -->
<fold-input
  label="Lead time (hours)"
  hint="In hours"
  info="The time you need to get organised: nothing is bookable before it."
  infoLabel="More information about the lead time" />`;
}
