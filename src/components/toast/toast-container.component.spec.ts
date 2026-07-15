import { TestBed } from "@angular/core/testing";
import { describe, it, expect, beforeEach } from "vitest";
import { Sh3ToastContainerComponent } from "./toast-container.component";
import { Sh3ToastService } from "./toast.service";

describe("Sh3ToastContainerComponent", () => {
  let service: Sh3ToastService;

  function render() {
    const fixture = TestBed.createComponent(Sh3ToastContainerComponent);
    fixture.detectChanges();
    return { fixture, root: fixture.nativeElement as HTMLElement };
  }

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [Sh3ToastService] });
    service = TestBed.inject(Sh3ToastService);
  });

  it("renders nothing when the queue is empty", () => {
    const { root } = render();
    expect(root.querySelector("sh3-toast")).toBeNull();
  });

  it("renders one sh3-toast per queued toast, carrying its variant + message", () => {
    service.show("Saved", "success", 9999);
    service.show("Boom", "error", 9999);
    const { root } = render();

    const toasts = root.querySelectorAll("sh3-toast");
    expect(toasts.length).toBe(2);
    expect(toasts[0].getAttribute("data-variant")).toBe("success");
    expect(toasts[1].getAttribute("data-variant")).toBe("error");
    expect(toasts[0].querySelector(".toast-message")?.textContent?.trim()).toBe(
      "Saved",
    );
  });

  it("dismissing a toast (its close button) removes it from the queue", () => {
    service.show("Tap me", "info", 9999);
    const { fixture, root } = render();

    root.querySelector<HTMLElement>("sh3-toast .toast-close")?.click();
    fixture.detectChanges();

    expect(root.querySelector("sh3-toast")).toBeNull();
    expect(service.toasts().length).toBe(0);
  });
});
