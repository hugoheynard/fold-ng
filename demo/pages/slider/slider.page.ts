import { Component, computed, effect, signal, untracked } from "@angular/core";
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

  /* ── playground — switch between the single and range siblings ── */
  protected readonly pgMode = signal<"single" | "range">("single");
  protected readonly pgValue = signal(40);
  protected readonly pgRange = signal<FoldRangeValue>({ min: 25, max: 75 });
  protected readonly pgMin = signal(0);
  protected readonly pgMax = signal(100);
  protected readonly pgStep = signal(5);
  protected readonly pgDisabled = signal(false);

  constructor() {
    // Keep the demo values inside the track when min/max change, so the thumbs
    // never sit pinned outside the range.
    effect(() => {
      const lo = this.pgMin();
      const hi = this.pgMax();
      const clamp = (v: number): number => Math.min(Math.max(v, lo), hi);
      untracked(() => {
        this.pgValue.set(clamp(this.pgValue()));
        const r = this.pgRange();
        const min = clamp(r.min);
        const max = clamp(r.max);
        if (min !== r.min || max !== r.max) {
          this.pgRange.set({
            min: Math.min(min, max),
            max: Math.max(min, max),
          });
        }
      });
    });
  }

  protected readonly playgroundCode = computed(() => {
    const tag = this.pgMode() === "range" ? "fold-range-slider" : "fold-slider";
    const lines = [`<${tag} label="Volume"`];
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
