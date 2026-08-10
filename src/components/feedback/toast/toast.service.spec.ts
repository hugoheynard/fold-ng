import type { Provider } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, expect, it } from "vitest";
import { provideFoldToasts } from "./toast.config";
import { FoldToastService } from "./toast.service";

function service(providers: Provider[] = []): FoldToastService {
  TestBed.resetTestingModule();
  TestBed.configureTestingModule({ providers });
  return TestBed.inject(FoldToastService);
}

describe("FoldToastService", () => {
  it("queues a toast with the given message + variant", () => {
    const svc = service();
    svc.show("Saved", "success");
    const [toast] = svc.toasts();
    expect(toast.message).toBe("Saved");
    expect(toast.variant).toBe("success");
    expect(svc.toasts().length).toBe(1);
  });

  it("defaults to the info variant", () => {
    const svc = service();
    svc.show("Heads up");
    expect(svc.toasts()[0].variant).toBe("info");
  });

  it("stamps the baked severity-scaled duration (error is sticky)", () => {
    const svc = service();
    svc.show("a", "success");
    svc.show("b", "info");
    svc.show("c", "warning");
    svc.show("d", "error");
    expect(svc.toasts().map((t) => t.durationMs)).toEqual([
      3000, 4000, 6000, 0,
    ]);
  });

  it("an explicit duration argument wins (including 0 = sticky)", () => {
    const svc = service();
    svc.show("x", "info", 99);
    svc.show("y", "success", 0);
    expect(svc.toasts().map((t) => t.durationMs)).toEqual([99, 0]);
  });

  it("resolves durationByVariant, then defaultDurationMs, then baked", () => {
    const svc = service([
      provideFoldToasts({
        defaultDurationMs: 1000,
        durationByVariant: { error: 500 },
      }),
    ]);
    svc.show("e", "error"); // per-variant → 500
    svc.show("s", "success"); // no per-variant → defaultDurationMs 1000
    expect(svc.toasts().map((t) => t.durationMs)).toEqual([500, 1000]);
  });

  it("keeps a configured 0 as sticky (not overridden by the default)", () => {
    const svc = service([
      provideFoldToasts({
        defaultDurationMs: 5000,
        durationByVariant: { error: 0 },
      }),
    ]);
    svc.show("e", "error");
    expect(svc.toasts()[0].durationMs).toBe(0);
  });

  it("dismiss removes only the targeted toast", () => {
    const svc = service();
    svc.show("A", "info", 9999);
    svc.show("B", "info", 9999);
    const [first] = svc.toasts();
    svc.dismiss(first.id);
    expect(svc.toasts().map((t) => t.message)).toEqual(["B"]);
  });

  it("keeps insertion order, oldest first", () => {
    const svc = service();
    svc.show("one", "info", 9999);
    svc.show("two", "info", 9999);
    expect(svc.toasts().map((t) => t.message)).toEqual(["one", "two"]);
  });

  it("returns the id, so a sticky toast can be closed by its caller", () => {
    const svc = service();
    const id = svc.show("Uploading…", "info", 0);
    expect(svc.toasts().map((t) => t.id)).toEqual([id]);
    svc.dismiss(id);
    expect(svc.toasts()).toEqual([]);
  });

  it("issues counter ids, never crypto.randomUUID", () => {
    const svc = service();
    const first = svc.show("a", "info", 9999);
    const second = svc.show("b", "info", 9999);
    // `randomUUID` throws outright in a non-secure context, and its randomness
    // buys nothing for an id that only has to be unique within this queue.
    expect(first).toMatch(/^fold-toast-\d+$/);
    expect(second).not.toBe(first);
  });

  describe("dedupe", () => {
    it("collapses an identical live message into a ×N tally", () => {
      const svc = service();
      const first = svc.show("Network unreachable", "error");
      const again = svc.show("Network unreachable", "error");
      expect(again).toBe(first);
      expect(svc.toasts().length).toBe(1);
      expect(svc.toasts()[0].repeats).toBe(2);
    });

    it("treats the same sentence in another tone as another message", () => {
      const svc = service();
      svc.show("Sync finished", "success", 9999);
      svc.show("Sync finished", "warning", 9999);
      expect(svc.toasts().length).toBe(2);
    });

    it("re-queues once the first occurrence is gone", () => {
      const svc = service();
      const id = svc.show("Retry", "warning", 9999);
      svc.dismiss(id);
      svc.show("Retry", "warning", 9999);
      expect(svc.toasts().length).toBe(1);
      expect(svc.toasts()[0].repeats).toBe(1);
    });

    it("can be turned off", () => {
      const svc = service([provideFoldToasts({ dedupe: false })]);
      svc.show("Same", "info", 9999);
      svc.show("Same", "info", 9999);
      expect(svc.toasts().length).toBe(2);
    });
  });

  describe("maxVisible", () => {
    it("evicts the oldest beyond the cap", () => {
      const svc = service([provideFoldToasts({ maxVisible: 2 })]);
      svc.show("one", "info", 9999);
      svc.show("two", "info", 9999);
      svc.show("three", "info", 9999);
      // The oldest goes: it has been on screen longest, so it is the one
      // already read. Eviction, not a waiting queue — a backlog would sit
      // forever behind a sticky error.
      expect(svc.toasts().map((t) => t.message)).toEqual(["two", "three"]);
    });

    it("is unbounded when unset", () => {
      const svc = service();
      for (let i = 0; i < 12; i += 1) {
        svc.show(`msg ${i}`, "info", 9999);
      }
      expect(svc.toasts().length).toBe(12);
    });
  });
});
