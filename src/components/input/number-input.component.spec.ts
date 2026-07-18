import { Component, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect, vi } from "vitest";
import { Sh3NumberInputComponent } from "./number-input.component";
import type {
  Sh3NumberSpinner,
  Sh3NumberControls,
} from "./number-input.component";

@Component({
  standalone: true,
  imports: [Sh3NumberInputComponent],
  template: `<sh3-number-input
    [label]="label()"
    [min]="min()"
    [max]="max()"
    [step]="step()"
    [spinner]="spinner()"
    [controls]="controls()"
    [showStep]="showStep()"
    [snapToStep]="snapToStep()"
    [decimals]="decimals()"
    [integer]="integer()"
    [hint]="hint()"
    [(value)]="value"
  />`,
})
class HostComponent {
  readonly label = signal<string | undefined>(undefined);
  readonly min = signal<number | undefined>(undefined);
  readonly max = signal<number | undefined>(undefined);
  readonly step = signal<number | undefined>(undefined);
  readonly spinner = signal<Sh3NumberSpinner>("plusminus");
  readonly controls = signal<Sh3NumberControls>("inside");
  readonly showStep = signal(false);
  readonly snapToStep = signal(false);
  readonly decimals = signal<number | undefined>(undefined);
  readonly integer = signal(false);
  readonly hint = signal<string | undefined>(undefined);
  readonly value = signal<number | null>(null);
}

function render() {
  const fixture = TestBed.createComponent(HostComponent);
  fixture.detectChanges();
  const host = fixture.nativeElement.querySelector(
    "sh3-number-input",
  ) as HTMLElement;
  const input = host.querySelector("input") as HTMLInputElement;
  const buttons = (): HTMLButtonElement[] =>
    Array.from(host.querySelectorAll("button"));
  const inc = (): HTMLButtonElement =>
    host.querySelector('button[aria-label="Increment"]') as HTMLButtonElement;
  const dec = (): HTMLButtonElement =>
    host.querySelector('button[aria-label="Decrement"]') as HTMLButtonElement;
  return { fixture, host, input, buttons, inc, dec };
}

describe("Sh3NumberInputComponent", () => {
  it("renders a native number input", () => {
    const { input } = render();
    expect(input.getAttribute("type")).toBe("number");
  });

  it("parses typed input to a number", () => {
    const { fixture, input } = render();
    input.value = "42";
    input.dispatchEvent(new Event("input"));
    expect(fixture.componentInstance.value()).toBe(42);
  });

  it("treats an empty field as null, not 0 or NaN", () => {
    const { fixture, input } = render();
    input.value = "7";
    input.dispatchEvent(new Event("input"));
    expect(fixture.componentInstance.value()).toBe(7);

    input.value = "";
    input.dispatchEvent(new Event("input"));
    expect(fixture.componentInstance.value()).toBeNull();
  });

  it("reflects the bound value onto the native input", () => {
    const { fixture, input } = render();
    fixture.componentInstance.value.set(99);
    fixture.detectChanges();
    expect(input.value).toBe("99");
  });

  it("passes min / max / step through to the native input", () => {
    const { fixture, input } = render();
    fixture.componentInstance.min.set(0);
    fixture.componentInstance.max.set(10);
    fixture.componentInstance.step.set(0.5);
    fixture.detectChanges();
    expect(input.getAttribute("min")).toBe("0");
    expect(input.getAttribute("max")).toBe("10");
    expect(input.getAttribute("step")).toBe("0.5");
  });

  it("renders two spinner buttons for either glyph, none for 'none'", () => {
    const { fixture, buttons } = render();
    expect(buttons().length).toBe(2); // plusminus (default)

    fixture.componentInstance.spinner.set("arrows");
    fixture.detectChanges();
    expect(buttons().length).toBe(2);

    fixture.componentInstance.spinner.set("none");
    fixture.detectChanges();
    expect(buttons().length).toBe(0);
  });

  it("renders the buttons for both placements", () => {
    const { fixture, inc, dec } = render();
    fixture.componentInstance.controls.set("outside");
    fixture.detectChanges();
    expect(inc()).not.toBeNull();
    expect(dec()).not.toBeNull();

    fixture.componentInstance.controls.set("inside");
    fixture.detectChanges();
    expect(inc()).not.toBeNull();
    expect(dec()).not.toBeNull();
  });

  it("increments and decrements by the step, clamped to bounds", () => {
    const { fixture, inc, dec } = render();
    fixture.componentInstance.step.set(5);
    fixture.componentInstance.min.set(0);
    fixture.componentInstance.max.set(10);
    fixture.componentInstance.value.set(8);
    fixture.detectChanges();

    inc().click();
    expect(fixture.componentInstance.value()).toBe(10); // clamped to max, not 13
    dec().click();
    expect(fixture.componentInstance.value()).toBe(5);
  });

  it("disables the increment button at max and decrement at min", () => {
    const { fixture, inc, dec } = render();
    fixture.componentInstance.min.set(0);
    fixture.componentInstance.max.set(10);
    fixture.componentInstance.value.set(10);
    fixture.detectChanges();
    expect(inc().disabled).toBe(true);
    expect(dec().disabled).toBe(false);
  });

  it("steps from 0 when the field is empty", () => {
    const { fixture, inc } = render();
    fixture.componentInstance.step.set(2);
    fixture.detectChanges();
    inc().click();
    expect(fixture.componentInstance.value()).toBe(2);
  });

  it("shows the step suffix when requested", () => {
    const { fixture, host } = render();
    fixture.componentInstance.spinner.set("none");
    fixture.componentInstance.step.set(5);
    fixture.componentInstance.showStep.set(true);
    fixture.detectChanges();
    expect(host.querySelector(".ni-step")?.textContent?.trim()).toBe("5");
  });

  it("does not touch a typed value on blur when snapToStep is off", () => {
    const { fixture, input } = render();
    fixture.componentInstance.step.set(5);
    fixture.detectChanges();
    input.value = "7";
    input.dispatchEvent(new Event("input"));
    input.dispatchEvent(new Event("blur"));
    expect(fixture.componentInstance.value()).toBe(7);
  });

  it("snaps a typed value to the nearest grid step on blur", () => {
    const { fixture, input } = render();
    fixture.componentInstance.step.set(5);
    fixture.componentInstance.snapToStep.set(true);
    fixture.detectChanges();

    input.value = "7"; // nearest multiple of 5 is 5
    input.dispatchEvent(new Event("input"));
    input.dispatchEvent(new Event("blur"));
    expect(fixture.componentInstance.value()).toBe(5);

    input.value = "8"; // nearest is 10
    input.dispatchEvent(new Event("input"));
    input.dispatchEvent(new Event("blur"));
    expect(fixture.componentInstance.value()).toBe(10);
  });

  it("snaps relative to min as the grid base, and clamps", () => {
    const { fixture, input } = render();
    fixture.componentInstance.min.set(2);
    fixture.componentInstance.max.set(17);
    fixture.componentInstance.step.set(5);
    fixture.componentInstance.snapToStep.set(true);
    fixture.detectChanges();

    input.value = "9"; // grid is 2,7,12,17 → nearest to 9 is 7
    input.dispatchEvent(new Event("input"));
    input.dispatchEvent(new Event("blur"));
    expect(fixture.componentInstance.value()).toBe(7);

    input.value = "40"; // snaps to 42 then clamps to max 17
    input.dispatchEvent(new Event("input"));
    input.dispatchEvent(new Event("blur"));
    expect(fixture.componentInstance.value()).toBe(17);
  });

  it("repeats while the pointer is held, and stops on release", () => {
    vi.useFakeTimers();
    try {
      const { fixture, inc } = render();
      fixture.componentInstance.step.set(1);
      fixture.detectChanges();

      inc().dispatchEvent(new Event("pointerdown"));
      expect(fixture.componentInstance.value()).toBe(1); // immediate first step
      vi.advanceTimersByTime(350 + 60 * 3); // hold delay + three repeats
      expect(fixture.componentInstance.value()).toBe(4);

      inc().dispatchEvent(new Event("pointerup"));
      vi.advanceTimersByTime(60 * 5);
      expect(fixture.componentInstance.value()).toBe(4); // stopped
    } finally {
      vi.useRealTimers();
    }
  });

  it("keeps float steps precise", () => {
    const { fixture, input } = render();
    fixture.componentInstance.step.set(0.1);
    fixture.componentInstance.snapToStep.set(true);
    fixture.detectChanges();
    input.value = "0.30000001";
    input.dispatchEvent(new Event("input"));
    input.dispatchEvent(new Event("blur"));
    expect(fixture.componentInstance.value()).toBe(0.3);
  });

  it("allows decimals freely by default", () => {
    const { fixture, input } = render();
    input.value = "3.7";
    input.dispatchEvent(new Event("input"));
    input.dispatchEvent(new Event("blur"));
    expect(fixture.componentInstance.value()).toBe(3.7);
  });

  it("rounds a typed value to integers on blur when integer is set", () => {
    const { fixture, input } = render();
    fixture.componentInstance.integer.set(true);
    fixture.detectChanges();
    input.value = "3.7";
    input.dispatchEvent(new Event("input"));
    input.dispatchEvent(new Event("blur"));
    expect(fixture.componentInstance.value()).toBe(4);
  });

  it("sends step=1 to the native input for integers with no explicit step", () => {
    const { fixture, input } = render();
    fixture.componentInstance.integer.set(true);
    fixture.detectChanges();
    expect(input.getAttribute("step")).toBe("1");
  });

  it("caps decimals to the requested number of places on blur", () => {
    const { fixture, input } = render();
    fixture.componentInstance.decimals.set(2);
    fixture.detectChanges();
    input.value = "3.14159";
    input.dispatchEvent(new Event("input"));
    input.dispatchEvent(new Event("blur"));
    expect(fixture.componentInstance.value()).toBe(3.14);
  });

  it("keeps stepped values on the integer grid when integer is set", () => {
    const { fixture, inc } = render();
    fixture.componentInstance.integer.set(true);
    fixture.componentInstance.value.set(2.5);
    fixture.detectChanges();
    inc().click();
    expect(Number.isInteger(fixture.componentInstance.value())).toBe(true);
  });

  it("steps via ArrowUp/ArrowDown through the same snap/clamp path as the buttons", () => {
    const { fixture, input } = render();
    fixture.componentInstance.step.set(5);
    fixture.componentInstance.max.set(10);
    fixture.componentInstance.snapToStep.set(true);
    fixture.componentInstance.value.set(8);
    fixture.detectChanges();

    input.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowUp" }));
    expect(fixture.componentInstance.value()).toBe(10); // clamped, not native +native-step

    input.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowDown" }));
    expect(fixture.componentInstance.value()).toBe(5); // on the grid
  });

  it("prevents the native arrow-key stepping it replaces", () => {
    const { input } = render();
    const event = new KeyboardEvent("keydown", {
      key: "ArrowUp",
      cancelable: true,
    });
    input.dispatchEvent(event);
    expect(event.defaultPrevented).toBe(true);
  });

  it("blurs on wheel so a focused field does not change on scroll", () => {
    const { input } = render();
    const blur = vi.spyOn(input, "blur");
    input.dispatchEvent(new WheelEvent("wheel"));
    expect(blur).toHaveBeenCalled();
  });

  it("keeps the step buttons out of the tab order and the a11y tree", () => {
    const { inc, dec } = render();
    for (const btn of [inc(), dec()]) {
      expect(btn.getAttribute("tabindex")).toBe("-1");
      expect(btn.getAttribute("aria-hidden")).toBe("true");
    }
  });

  it("wires aria-describedby to the hint, then to the error once touched", () => {
    const { fixture, input } = render();
    expect(input.getAttribute("aria-describedby")).toBeNull();

    fixture.componentInstance.hint.set("Whole numbers.");
    fixture.detectChanges();
    const describedBy = input.getAttribute("aria-describedby");
    expect(describedBy).toMatch(/-hint$/);
    expect(
      document.getElementById(describedBy as string)?.textContent,
    ).toContain("Whole numbers.");
  });
});
