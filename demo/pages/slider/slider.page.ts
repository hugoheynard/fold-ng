import { Component, computed, signal } from "@angular/core";
import { KindBadgeComponent } from "../../components/kind-badge.component";
import { DevPlaygroundComponent } from "../../components/playground.component";
import {
  FoldCardComponent,
  FoldPageLayoutComponent,
  FoldRangeSliderComponent,
  type FoldRangeValue,
  FoldSliderComponent,
} from "../../../src/public-api";

/** `/slider` — the `fold-slider` + `fold-range-slider` gallery page. */
@Component({
  selector: "gal-slider-page",
  standalone: true,
  imports: [
    KindBadgeComponent,
    DevPlaygroundComponent,
    FoldPageLayoutComponent,
    FoldCardComponent,
    FoldSliderComponent,
    FoldRangeSliderComponent,
  ],
  templateUrl: "./slider.page.html",
})
export default class SliderPage {
  /* ── single ── */
  protected readonly volume = signal(60);
  protected readonly bound = signal(0);
  protected readonly boundText = computed(() =>
    this.bound() === 0 ? "off" : String(this.bound()),
  );

  /* ── range ── */
  protected readonly bpm = signal<FoldRangeValue>({ min: 90, max: 160 });
  protected readonly clip = signal<FoldRangeValue>({ min: 30, max: 210 });

  /* ── playground ── */
  protected readonly pgValue = signal(40);
  protected readonly pgMin = signal(0);
  protected readonly pgMax = signal(100);
  protected readonly pgStep = signal(5);
  protected readonly pgDisabled = signal(false);

  protected readonly playgroundCode = computed(() => {
    const lines = ['<fold-slider label="Volume"'];
    if (this.pgMin() !== 0) {
      lines.push(`  [min]="${this.pgMin()}"`);
    }
    lines.push(`  [max]="${this.pgMax()}"`);
    if (this.pgStep() !== 1) {
      lines.push(`  [step]="${this.pgStep()}"`);
    }
    if (this.pgDisabled()) {
      lines.push("  disabled");
    }
    lines.push('  [(value)]="value" />');
    return lines.join("\n");
  });
}
