import { Component, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import {
  Sh3RangeSliderComponent,
  type Sh3RangeValue,
} from "./range-slider.component";

@Component({
  standalone: true,
  imports: [Sh3RangeSliderComponent],
  template: `<sh3-range-slider
    label="BPM"
    [min]="min()"
    [max]="max()"
    [step]="step()"
    [unit]="unit()"
    [value]="value()"
    (valueChange)="onChange($event)"
  />`,
})
class HostComponent {
  readonly min = signal(0);
  readonly max = signal(100);
  readonly step = signal(1);
  readonly unit = signal<"number" | "duration">("number");
  readonly value = signal<Sh3RangeValue | undefined>(undefined);
  readonly last = signal<Sh3RangeValue | undefined>(undefined);
  onChange(v: Sh3RangeValue): void {
    this.last.set(v);
  }
}

function render() {
  const fixture = TestBed.createComponent(HostComponent);
  fixture.detectChanges();
  const host = fixture.nativeElement.querySelector(
    "sh3-range-slider",
  ) as HTMLElement;
  const min = host.querySelector(".rs-thumb--min") as HTMLInputElement;
  const max = host.querySelector(".rs-thumb--max") as HTMLInputElement;
  return { fixture, host, min, max };
}

describe("Sh3RangeSliderComponent", () => {
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
});
