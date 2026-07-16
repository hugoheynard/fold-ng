import type { Provider } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, expect, it } from "vitest";
import { provideSh3Toasts } from "./toast.config";
import { Sh3ToastService } from "./toast.service";

function service(providers: Provider[] = []): Sh3ToastService {
  TestBed.resetTestingModule();
  TestBed.configureTestingModule({ providers });
  return TestBed.inject(Sh3ToastService);
}

describe("Sh3ToastService", () => {
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
      provideSh3Toasts({
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
      provideSh3Toasts({
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
});
