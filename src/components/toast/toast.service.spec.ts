import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { ToastService } from "./toast.service";

describe("ToastService", () => {
  let service: ToastService;

  beforeEach(() => {
    vi.useFakeTimers();
    service = new ToastService();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("queues a toast with the given message + variant", () => {
    service.show("Saved", "success");
    const [toast] = service.toasts();
    expect(toast.message).toBe("Saved");
    expect(toast.variant).toBe("success");
    expect(service.toasts().length).toBe(1);
  });

  it("defaults to the info variant and a 3s duration", () => {
    service.show("Heads up");
    const [toast] = service.toasts();
    expect(toast.variant).toBe("info");
    expect(toast.durationMs).toBe(3000);
  });

  it("auto-dismisses after its duration", () => {
    service.show("Bye", "info", 1000);
    expect(service.toasts().length).toBe(1);
    vi.advanceTimersByTime(1000);
    expect(service.toasts().length).toBe(0);
  });

  it("dismiss removes only the targeted toast", () => {
    service.show("A", "info", 9999);
    service.show("B", "info", 9999);
    const [first] = service.toasts();
    service.dismiss(first.id);
    expect(service.toasts().map((t) => t.message)).toEqual(["B"]);
  });

  it("keeps insertion order, oldest first", () => {
    service.show("one", "info", 9999);
    service.show("two", "info", 9999);
    expect(service.toasts().map((t) => t.message)).toEqual(["one", "two"]);
  });
});
