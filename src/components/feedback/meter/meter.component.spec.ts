import { Component, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import { FoldMeterComponent, type FoldMeterSegment } from "./meter.component";

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

  describe("segmented", () => {
    @Component({
      standalone: true,
      imports: [FoldMeterComponent],
      template: `<fold-meter
        label="Sorties"
        [value]="0"
        [segments]="segments()"
        showValue
      />`,
    })
    class SegmentedHost {
      readonly segments = signal<readonly FoldMeterSegment[] | null>([
        { value: 120, max: 120, tone: "success", label: "avant 7 h" },
        { value: 60, max: 120, current: true, label: "avant 9 h 30" },
        { value: 0, max: 240, tone: "muted" },
      ]);
    }

    function renderSegmented() {
      const fixture = TestBed.createComponent(SegmentedHost);
      fixture.detectChanges();
      const root = fixture.nativeElement as HTMLElement;
      const segs = (): HTMLElement[] =>
        Array.from(root.querySelectorAll<HTMLElement>(".m-seg"));
      const track = (): HTMLElement =>
        root.querySelector(".m-track") as HTMLElement;
      return { fixture, host: fixture.componentInstance, root, segs, track };
    }

    it("draws one segment per step, as wide as its share of the total", () => {
      const { segs } = renderSegmented();
      expect(segs().map((s) => s.style.flexGrow)).toEqual([
        "120",
        "120",
        "240",
      ]);
    });

    it("fills each segment to its own value / max", () => {
      const { segs } = renderSegmented();
      const fills = segs().map(
        (s) => (s.querySelector(".m-fill") as HTMLElement).style.inlineSize,
      );
      expect(fills).toEqual(["100%", "50%", "0%"]);
    });

    it("reports the sum of the steps, and ignores the single-bar value", () => {
      const { root, track } = renderSegmented();
      expect(track().getAttribute("role")).toBe("meter");
      expect(track().getAttribute("aria-valuenow")).toBe("180");
      expect(track().getAttribute("aria-valuemin")).toBe("0");
      expect(track().getAttribute("aria-valuemax")).toBe("480");
      expect(root.querySelector(".m-value")?.textContent?.trim()).toBe(
        "180 / 480",
      );
    });

    it("describes every step to assistive tech, labels included", () => {
      const { track } = renderSegmented();
      expect(track().getAttribute("aria-valuetext")).toBe(
        "120 / 120 (avant 7 h) ; 60 / 120 (avant 9 h 30) ; 0 / 240",
      );
    });

    it("carries tone, current and caption per segment", () => {
      const { segs } = renderSegmented();
      const [done, current, next] = segs();
      expect(done?.classList).toContain("success");
      expect(current?.classList).toContain("accent");
      expect(current?.classList).toContain("is-current");
      expect(next?.classList).toContain("muted");
      expect(next?.classList).not.toContain("is-current");
      expect(done?.querySelector(".m-seg-label")?.textContent?.trim()).toBe(
        "avant 7 h",
      );
      expect(next?.querySelector(".m-seg-label")).toBeNull();
    });

    it("clamps an overrun and survives a step of size zero", () => {
      const { fixture, host, segs, track } = renderSegmented();
      host.segments.set([
        { value: 130, max: 120, tone: "alert" },
        { value: 5, max: 0 },
      ]);
      fixture.detectChanges();
      const fills = segs().map(
        (s) => (s.querySelector(".m-fill") as HTMLElement).style.inlineSize,
      );
      expect(fills).toEqual(["100%", "0%"]);
      expect(track().getAttribute("aria-valuenow")).toBe("120");
    });

    it("returns to the single bar when segments go back to null", () => {
      const { fixture, host, root, track } = renderSegmented();
      host.segments.set(null);
      fixture.detectChanges();
      expect(root.querySelectorAll(".m-seg")).toHaveLength(0);
      expect(root.querySelector(".m-fill")).not.toBeNull();
      expect(track().getAttribute("aria-valuetext")).toBeNull();
      expect(root.firstElementChild?.classList).not.toContain("segmented");
    });
  });
});
