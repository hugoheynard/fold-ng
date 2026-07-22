import { Component, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { FoldRepeatPressDirective } from "./repeat-press.directive";

@Component({
  standalone: true,
  imports: [FoldRepeatPressDirective],
  template: `<button
    foldRepeatPress
    [foldRepeatPressDisabled]="disabled()"
    [foldRepeatPressDelay]="delay()"
    [foldRepeatPressPeriod]="period()"
    (foldRepeatPress)="onRepeat()"
  >
    hold
  </button>`,
})
class HostComponent {
  readonly disabled = signal(false);
  readonly delay = signal(350);
  readonly period = signal(60);
  count = 0;
  onRepeat(): void {
    this.count += 1;
  }
}

function render() {
  const fixture = TestBed.createComponent(HostComponent);
  fixture.detectChanges();
  const button = fixture.nativeElement.querySelector("button") as HTMLElement;
  const press = (): void => button.dispatchEvent(new Event("pointerdown"));
  const release = (type: string): void => button.dispatchEvent(new Event(type));
  const count = (): number => fixture.componentInstance.count;
  return { fixture, button, press, release, count };
}

describe("FoldRepeatPressDirective", () => {
  beforeEach(() => vi.useFakeTimers());
  afterEach(() => vi.useRealTimers());

  it("fires once immediately on press, before any timer", () => {
    const { press, count } = render();
    press();
    expect(count()).toBe(1);
  });

  it("does not repeat until the hold delay elapses", () => {
    const { press, count } = render();
    press();
    vi.advanceTimersByTime(349);
    expect(count()).toBe(1); // still only the immediate fire
  });

  it("repeats on the period cadence once the delay passes", () => {
    const { press, count } = render();
    press();
    vi.advanceTimersByTime(350 + 60 * 3);
    expect(count()).toBe(4); // 1 immediate + 3 ticks
  });

  it("stops on pointerup", () => {
    const { press, release, count } = render();
    press();
    vi.advanceTimersByTime(350 + 60 * 2); // 3 so far
    release("pointerup");
    vi.advanceTimersByTime(60 * 5);
    expect(count()).toBe(3);
  });

  it("stops on pointerleave", () => {
    const { press, release, count } = render();
    press();
    vi.advanceTimersByTime(350 + 60);
    release("pointerleave");
    vi.advanceTimersByTime(60 * 5);
    expect(count()).toBe(2);
  });

  it("stops on pointercancel", () => {
    const { press, release, count } = render();
    press();
    vi.advanceTimersByTime(350);
    release("pointercancel");
    vi.advanceTimersByTime(60 * 5);
    expect(count()).toBe(1);
  });

  it("does nothing when disabled at press time", () => {
    const { fixture, press, count } = render();
    fixture.componentInstance.disabled.set(true);
    fixture.detectChanges();
    press();
    vi.advanceTimersByTime(350 + 60 * 5);
    expect(count()).toBe(0);
  });

  it("stops mid-hold the instant it becomes disabled", () => {
    const { fixture, press, count } = render();
    press();
    vi.advanceTimersByTime(350 + 60); // 2 so far, interval running
    fixture.componentInstance.disabled.set(true);
    fixture.detectChanges(); // flush the stop effect
    vi.advanceTimersByTime(60 * 5);
    expect(count()).toBe(2);
  });

  it("can be pressed again after a stop", () => {
    const { press, release, count } = render();
    press();
    release("pointerup");
    expect(count()).toBe(1);
    press();
    expect(count()).toBe(2); // fresh immediate fire
  });

  it("does not stack intervals when pressed twice without release", () => {
    const { press, count } = render();
    press(); // 1
    press(); // 2 (immediate), previous cycle cleared
    vi.advanceTimersByTime(350 + 60 * 2);
    expect(count()).toBe(2 + 2); // one interval running → 2 ticks by t=470
  });

  it("honours a custom delay and period", () => {
    const { fixture, press, count } = render();
    fixture.componentInstance.delay.set(100);
    fixture.componentInstance.period.set(20);
    fixture.detectChanges();
    press();
    vi.advanceTimersByTime(100 + 20 * 4);
    expect(count()).toBe(5); // 1 immediate + 4 ticks
  });

  it("stops repeating once destroyed", () => {
    const { fixture, press, count } = render();
    press();
    vi.advanceTimersByTime(350 + 60);
    fixture.destroy();
    vi.advanceTimersByTime(60 * 5);
    expect(count()).toBe(2);
  });
});
