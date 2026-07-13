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
    expect(root.querySelector(".toast")).toBeNull();
  });

  it("renders one row per queued toast, with its variant class", () => {
    service.show("Saved", "success", 9999);
    service.show("Boom", "error", 9999);
    const { root } = render();

    const toasts = root.querySelectorAll(".toast");
    expect(toasts.length).toBe(2);
    expect(toasts[0].classList.contains("success")).toBe(true);
    expect(toasts[1].classList.contains("error")).toBe(true);
    expect(toasts[0].querySelector(".toast-message")?.textContent?.trim()).toBe(
      "Saved",
    );
  });

  it("clicking a toast dismisses it", () => {
    service.show("Tap me", "info", 9999);
    const { fixture, root } = render();

    root.querySelector<HTMLElement>(".toast")?.click();
    fixture.detectChanges();

    expect(root.querySelector(".toast")).toBeNull();
    expect(service.toasts().length).toBe(0);
  });
});
