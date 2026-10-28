import { Component } from "@angular/core";
import { KindBadgeComponent } from "../../components/kind-badge.component";
import {
  FoldMeterComponent,
  FoldPageLayoutComponent,
  type FoldMeterSegment,
  type FoldMeterTone,
} from "../../../src/public-api";

/** `/meter` — the `fold-meter` gallery page. */
@Component({
  selector: "gal-meter-page",
  standalone: true,
  imports: [KindBadgeComponent, FoldPageLayoutComponent, FoldMeterComponent],
  templateUrl: "./meter.page.html",
})
export default class MeterPage {
  protected readonly tones: FoldMeterTone[] = [
    "accent",
    "success",
    "warning",
    "alert",
  ];

  /** A bake in tiers: first tier held, second under way, third to come. */
  protected readonly onTrack: readonly FoldMeterSegment[] = [
    { value: 120, max: 120, tone: "success", label: "✓ 120 avant 7 h 00" },
    { value: 60, max: 120, current: true, label: "120 avant 9 h 30" },
    { value: 0, max: 240, tone: "muted", label: "240 avant 12 h 00" },
  ];

  /** The same bake, late: the current tier's deadline has passed. */
  protected readonly late: readonly FoldMeterSegment[] = [
    { value: 120, max: 120, tone: "success", label: "✓ 120 avant 7 h 00" },
    {
      value: 84,
      max: 120,
      tone: "alert",
      current: true,
      label: "120 avant 9 h 30",
    },
    { value: 0, max: 240, tone: "muted", label: "240 avant 12 h 00" },
  ];
}
