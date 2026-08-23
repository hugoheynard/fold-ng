import { Component, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import { FoldMeterComponent } from "./meter.component";

@Component({
  standalone: true,
  imports: [FoldMeterComponent],
  template: `<fold-meter
    label="Complétude"
    [value]="value()"
    [min]="min()"
    [max]="max()"
  />`,
})
class HostComponent {
  readonly value = signal(6);
  readonly min = signal(0);
  readonly max = signal(9);
}

function render() {
  const fixture = TestBed.createComponent(HostComponent);
  fixture.detectChanges();
  const root = fixture.nativeElement as HTMLElement;
  const track = (): HTMLElement => {
    const el = root.querySelector(".m-track");
    expect(el).toBeInstanceOf(HTMLElement);
    return el as HTMLElement;
  };
  const fillPercent = (): string =>
    (root.querySelector(".m-fill") as HTMLElement).style.inlineSize;
  return { fixture, host: fixture.componentInstance, root, track, fillPercent };
}

describe("FoldMeterComponent", () => {
  it("announces itself as a meter, with its bounds and its name", () => {
    const { root, track } = render();
    expect(track().getAttribute("role")).toBe("meter");
    expect(track().getAttribute("aria-valuenow")).toBe("6");
    expect(track().getAttribute("aria-valuemin")).toBe("0");
    expect(track().getAttribute("aria-valuemax")).toBe("9");
    // The name comes from the label, by id — not from an aria-label the caller
    // has to remember to repeat.
    const labelId = track().getAttribute("aria-labelledby");
    expect(root.querySelector(`#${labelId}`)?.textContent?.trim()).toBe(
      "Complétude",
    );
  });

  it("fills in proportion to the range, not to the raw value", () => {
    const { fixture, host, fillPercent } = render();
    expect(fillPercent()).toBe("66.7%");

    // Same value, wider range → a shorter bar. A percentage read off `value`
    // alone would not move.
    host.max.set(12);
    fixture.detectChanges();
    expect(fillPercent()).toBe("50%");
  });

  it("clamps a value past its bounds instead of painting outside the track", () => {
    const { fixture, host, fillPercent, track } = render();
    host.value.set(99);
    fixture.detectChanges();
    expect(fillPercent()).toBe("100%");
    expect(track().getAttribute("aria-valuenow")).toBe("9");

    host.value.set(-4);
    fixture.detectChanges();
    expect(fillPercent()).toBe("0%");
    expect(track().getAttribute("aria-valuenow")).toBe("0");
  });

  it("survives an inverted range rather than dividing by a negative", () => {
    // `min > max` is a caller's arithmetic gone wrong; it must not render a
    // negative-width bar.
    const { fixture, host, fillPercent } = render();
    host.min.set(10);
    host.max.set(0);
    fixture.detectChanges();
    expect(fillPercent()).toBe("0%");
  });
});
