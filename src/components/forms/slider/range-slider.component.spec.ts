import { Component, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import {
  FoldRangeSliderComponent,
  type FoldRangeValue,
} from "./range-slider.component";

@Component({
  standalone: true,
  imports: [FoldRangeSliderComponent],
  template: `<fold-range-slider
    label="BPM"
    [min]="min()"
    [max]="max()"
    [step]="step()"
    [unit]="unit()"
    [disabled]="disabled()"
    [minLabel]="minLabel()"
    [maxLabel]="maxLabel()"
    [(value)]="value"
    (valueChange)="onChange($event)"
    (rangeChange)="lastPick.set($event)"
  />`,
})
class HostComponent {
  readonly min = signal(0);
  readonly max = signal(100);
  readonly step = signal(1);
  readonly unit = signal<"number" | "duration">("number");
  readonly disabled = signal(false);
  readonly minLabel = signal("minimum");
  readonly maxLabel = signal("maximum");
  readonly value = signal<FoldRangeValue | undefined>(undefined);
  readonly last = signal<FoldRangeValue | undefined>(undefined);
  readonly lastPick = signal<FoldRangeValue | undefined>(undefined);
  onChange(v: FoldRangeValue): void {
    this.last.set(v);
  }
}

function render() {
  const fixture = TestBed.createComponent(HostComponent);
  fixture.detectChanges();
  const host = fixture.nativeElement.querySelector(
    "fold-range-slider",
  ) as HTMLElement;
  const min = host.querySelector(".rs-thumb--min") as HTMLInputElement;
  const max = host.querySelector(".rs-thumb--max") as HTMLInputElement;
  return { fixture, host, min, max };
}

describe("FoldRangeSliderComponent", () => {
  it("renders two range thumbs", () => {
    const { min, max } = render();
    expect(min.getAttribute("type")).toBe("range");
    expect(max.getAttribute("type")).toBe("range");
  });

  it("falls back to the full range when no value is set", () => {
    const { fixture, min, max } = render();
    fixture.componentInstance.min.set(60);
    fixture.componentInstance.max.set(220);
    fixture.detectChanges();
    expect(min.value).toBe("60");
    expect(max.value).toBe("220");
  });

  it("emits an updated window when the min thumb moves", () => {
    const { fixture, min } = render();
    fixture.componentInstance.value.set({ min: 20, max: 80 });
    fixture.detectChanges();
    min.value = "40";
    min.dispatchEvent(new Event("input"));
    expect(fixture.componentInstance.last()).toEqual({ min: 40, max: 80 });
  });

  it("fires rangeChange with the resolved (never undefined) window on a drag", () => {
    const { fixture, max } = render();
    fixture.componentInstance.value.set({ min: 20, max: 80 });
    fixture.detectChanges();
    max.value = "60";
    max.dispatchEvent(new Event("input"));
    expect(fixture.componentInstance.lastPick()).toEqual({ min: 20, max: 60 });
  });

  it("never lets min exceed max", () => {
    const { fixture, min } = render();
    fixture.componentInstance.value.set({ min: 20, max: 50 });
    fixture.detectChanges();
    min.value = "90"; // clamped to the current max
    min.dispatchEvent(new Event("input"));
    expect(fixture.componentInstance.last()).toEqual({ min: 50, max: 50 });
  });

  it("formats values as mm:ss in duration mode", () => {
    const { fixture, host } = render();
    fixture.componentInstance.unit.set("duration");
    fixture.componentInstance.value.set({ min: 90, max: 200 });
    fixture.detectChanges();
    expect(host.querySelector(".rs-values")?.textContent?.trim()).toBe(
      "1:30 – 3:20",
    );
  });

  it("two-way binds the value via [(value)]", () => {
    const { fixture, max } = render();
    fixture.componentInstance.value.set({ min: 20, max: 80 });
    fixture.detectChanges();
    max.value = "60";
    max.dispatchEvent(new Event("input"));
    expect(fixture.componentInstance.value()).toEqual({ min: 20, max: 60 });
  });

  it("is a labelled group with per-thumb i18n aria + formatted aria-valuetext", () => {
    const { fixture, host, min, max } = render();
    const group = host.querySelector(".rs");
    expect(group?.getAttribute("role")).toBe("group");
    const labelId = host.querySelector(".rs-label")?.id;
    expect(group?.getAttribute("aria-labelledby")).toBe(labelId);
    expect(min.getAttribute("aria-label")).toBe("BPM minimum");
    expect(max.getAttribute("aria-label")).toBe("BPM maximum");

    fixture.componentInstance.minLabel.set("bas");
    fixture.componentInstance.maxLabel.set("haut");
    fixture.componentInstance.unit.set("duration");
    fixture.componentInstance.value.set({ min: 90, max: 200 });
    fixture.detectChanges();
    expect(min.getAttribute("aria-label")).toBe("BPM bas");
    expect(min.getAttribute("aria-valuetext")).toBe("1:30"); // formatted, not "90"
    expect(max.getAttribute("aria-valuetext")).toBe("3:20");
  });

  it("reflects disabled on both thumbs", () => {
    const { fixture, min, max } = render();
    fixture.componentInstance.disabled.set(true);
    fixture.detectChanges();
    expect(min.disabled).toBe(true);
    expect(max.disabled).toBe(true);
  });
});
