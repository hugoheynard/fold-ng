import { TestBed } from "@angular/core/testing";
import { describe, it, expect, beforeEach } from "vitest";
import { FoldToastContainerComponent } from "./toast-container.component";
import { FoldToastService } from "./toast.service";

describe("FoldToastContainerComponent", () => {
  let service: FoldToastService;

  function render() {
    const fixture = TestBed.createComponent(FoldToastContainerComponent);
    fixture.detectChanges();
    return { fixture, root: fixture.nativeElement as HTMLElement };
  }

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [FoldToastService] });
    service = TestBed.inject(FoldToastService);
  });

  it("renders nothing when the queue is empty", () => {
    const { root } = render();
    expect(root.querySelector("fold-toast")).toBeNull();
  });

  it("renders one fold-toast per queued toast, carrying its variant + message", () => {
    service.show("Saved", "success", 9999);
    service.show("Boom", "error", 9999);
    const { root } = render();

    const toasts = root.querySelectorAll("fold-toast");
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

    root.querySelector<HTMLElement>("fold-toast .toast-close")?.click();
    fixture.detectChanges();

    expect(root.querySelector("fold-toast")).toBeNull();
    expect(service.toasts().length).toBe(0);
  });
});
