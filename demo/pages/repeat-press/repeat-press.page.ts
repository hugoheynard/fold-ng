import { Component, computed, signal, ViewEncapsulation } from "@angular/core";
import { KindBadgeComponent } from "../../kind-badge.component";
import {
  FoldCalloutComponent,
  FoldCardComponent,
  FoldIconComponent,
  FoldPageLayoutComponent,
  FoldPageSectionComponent,
  FoldRepeatPressDirective,
  FoldSliderComponent,
} from "../../../src/public-api";

const MIN = 0;
const MAX = 50;

/** `/repeat-press` — the `[foldRepeatPress]` directive gallery page. */
@Component({
  selector: "gal-repeat-press-page",
  standalone: true,
  imports: [
    KindBadgeComponent,
    FoldPageLayoutComponent,
    FoldPageSectionComponent,
    FoldCardComponent,
    FoldCalloutComponent,
    FoldSliderComponent,
    FoldIconComponent,
    FoldRepeatPressDirective,
  ],
  templateUrl: "./repeat-press.page.html",
  styleUrl: "./repeat-press.page.scss",
  encapsulation: ViewEncapsulation.None,
})
export default class RepeatPressPage {
  protected readonly min = MIN;
  protected readonly max = MAX;

  protected readonly count = signal(8);
  protected readonly delay = signal(350);
  protected readonly period = signal(60);

  protected readonly atMin = computed(() => this.count() <= MIN);
  protected readonly atMax = computed(() => this.count() >= MAX);

  protected step(by: number): void {
    this.count.update((v) => Math.min(MAX, Math.max(MIN, v + by)));
  }

  protected readonly usageCode = computed(
    () =>
      `<button
  foldRepeatPress
  [foldRepeatPressDisabled]="atMax()"
  [foldRepeatPressDelay]="${this.delay()}"
  [foldRepeatPressPeriod]="${this.period()}"
  (foldRepeatPress)="step(1)"
>+</button>`,
  );
}
