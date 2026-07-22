import { TestBed } from "@angular/core/testing";
import { describe, it, expect, vi } from "vitest";
import { FoldSearchComponent } from "./search.component";

function setup(delayMs?: number): {
  type: (v: string) => void;
  emitted: string[];
} {
  TestBed.configureTestingModule({ imports: [FoldSearchComponent] });
  const fixture = TestBed.createComponent(FoldSearchComponent);
  if (delayMs !== undefined) {
    fixture.componentRef.setInput("delayMs", delayMs);
  }
  fixture.detectChanges();

  const emitted: string[] = [];
  fixture.componentInstance.searchChange.subscribe((v) => emitted.push(v));

  const input = (fixture.nativeElement as HTMLElement).querySelector("input");
  if (input === null) {
    throw new Error("inner input not found");
  }
  const type = (v: string): void => {
    input.value = v;
    input.dispatchEvent(new Event("input"));
  };
  return { type, emitted };
}

describe("FoldSearchComponent", () => {
  it("emits once typing pauses for the delay", () => {
    vi.useFakeTimers();
    try {
      const { type, emitted } = setup();
      type("alice");
      expect(emitted).toEqual([]); // still within the quiet period
      vi.advanceTimersByTime(300);
      expect(emitted).toEqual(["alice"]);
    } finally {
      vi.useRealTimers();
    }
  });

  it("resets the timer on each keystroke — only the settled value emits", () => {
    vi.useFakeTimers();
    try {
      const { type, emitted } = setup();
      type("al");
      vi.advanceTimersByTime(150); // not long enough
      type("alice");
      vi.advanceTimersByTime(300);
      expect(emitted).toEqual(["alice"]); // 'al' never fired
    } finally {
      vi.useRealTimers();
    }
  });

  it("trims the emitted term", () => {
    vi.useFakeTimers();
    try {
      const { type, emitted } = setup();
      type("  bob  ");
      vi.advanceTimersByTime(300);
      expect(emitted).toEqual(["bob"]);
    } finally {
      vi.useRealTimers();
    }
  });

  it("does not re-emit an unchanged settled value", () => {
    vi.useFakeTimers();
    try {
      const { type, emitted } = setup();
      type("x");
      vi.advanceTimersByTime(300);
      type("x");
      vi.advanceTimersByTime(300);
      expect(emitted).toEqual(["x"]);
    } finally {
      vi.useRealTimers();
    }
  });

  it("honours a custom delay", () => {
    vi.useFakeTimers();
    try {
      const { type, emitted } = setup(500);
      type("z");
      vi.advanceTimersByTime(300);
      expect(emitted).toEqual([]);
      vi.advanceTimersByTime(200);
      expect(emitted).toEqual(["z"]);
    } finally {
      vi.useRealTimers();
    }
  });
});
