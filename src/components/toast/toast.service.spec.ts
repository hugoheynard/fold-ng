import { beforeEach, describe, expect, it } from "vitest";
import { Sh3ToastService } from "./toast.service";

describe("Sh3ToastService", () => {
  let service: Sh3ToastService;

  beforeEach(() => {
    service = new Sh3ToastService();
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

  it("carries a caller-set duration on the toast (the sh3-toast times it)", () => {
    service.show("Bye", "info", 1000);
    expect(service.toasts()[0].durationMs).toBe(1000);
    // The service itself no longer removes the toast on a timer — the rendered
    // sh3-toast owns expiry and emits back into dismiss().
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
