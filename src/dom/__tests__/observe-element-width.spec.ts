import { Component, type Signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect, afterEach } from "vitest";
import { observeElementWidth } from "../observe-element-width";

/** Captures the observer callback so a test can feed it widths directly. */
let emitWidth: ((width: number) => void) | undefined;
let disconnected = false;
const realResizeObserver = globalThis.ResizeObserver;

function stubResizeObserver(): void {
  class FakeResizeObserver {
    constructor(callback: ResizeObserverCallback) {
      emitWidth = (width) =>
        callback(
          [{ contentRect: { width } } as ResizeObserverEntry],
          this as unknown as ResizeObserver,
        );
    }
    observe(): void {}
    disconnect(): void {
      disconnected = true;
    }
    unobserve(): void {}
  }
  globalThis.ResizeObserver =
    FakeResizeObserver as unknown as typeof ResizeObserver;
}

@Component({ standalone: true, template: `` })
class HostComponent {
  readonly width: Signal<number> = observeElementWidth();
}

afterEach(() => {
  globalThis.ResizeObserver = realResizeObserver;
  emitWidth = undefined;
  disconnected = false;
});

describe("observeElementWidth", () => {
  it("starts at 0 (unmeasured / SSR-safe) and tracks the observed width", () => {
    stubResizeObserver();
    const fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();
    expect(fixture.componentInstance.width()).toBe(0);

    emitWidth?.(640);
    expect(fixture.componentInstance.width()).toBe(640);
  });

  it("ignores a 0 reading (detached / hidden) — keeps the last real width", () => {
    stubResizeObserver();
    const fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();

    emitWidth?.(900);
    emitWidth?.(0);
    expect(fixture.componentInstance.width()).toBe(900);
  });

  it("disconnects the observer on destroy", () => {
    stubResizeObserver();
    const fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();
    fixture.destroy();
    expect(disconnected).toBe(true);
  });

  it("is a no-op (stays 0) when ResizeObserver is unavailable", () => {
    // Simulate SSR / a runtime without ResizeObserver.
    globalThis.ResizeObserver = undefined as unknown as typeof ResizeObserver;
    const fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();
    expect(fixture.componentInstance.width()).toBe(0);
  });
});
