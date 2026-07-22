import { Component } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { afterEach, describe, it, expect, vi } from "vitest";
import { FoldToastComponent } from "./toast.component";
import type { FoldToastVariant } from "./toast.types";

@Component({
  standalone: true,
  imports: [FoldToastComponent],
  template: `<fold-toast
    [variant]="variant"
    [dismissible]="dismissible"
    [duration]="duration"
    (dismiss)="dismissed = dismissed + 1"
    >Hello</fold-toast
  >`,
})
class HostComponent {
  variant: FoldToastVariant = "info";
  dismissible = true;
  duration = 0;
  dismissed = 0;
}

function render(setup?: (h: HostComponent) => void) {
  const fixture = TestBed.createComponent(HostComponent);
  if (setup) {
    setup(fixture.componentInstance);
  }
  fixture.detectChanges();
  const toast = fixture.nativeElement.querySelector(
    "fold-toast",
  ) as HTMLElement;
  return { fixture, host: fixture.componentInstance, toast };
}

describe("FoldToastComponent", () => {
  it("projects its message", () => {
    const { toast } = render();
    expect(toast.querySelector(".toast-message")?.textContent?.trim()).toBe(
      "Hello",
    );
  });

  it("reflects the variant to a data attribute and a status role", () => {
    const { toast } = render((h) => (h.variant = "success"));
    expect(toast.getAttribute("data-variant")).toBe("success");
    expect(toast.getAttribute("role")).toBe("status");
    expect(toast.getAttribute("aria-live")).toBe("polite");
  });

  it("is an assertive alert for the error variant", () => {
    const { toast } = render((h) => (h.variant = "error"));
    expect(toast.getAttribute("role")).toBe("alert");
    expect(toast.getAttribute("aria-live")).toBe("assertive");
  });

  it("maps each variant to its status icon", () => {
    const cases: [FoldToastVariant, string][] = [
      ["success", "check-circle"],
      ["info", "info"],
      ["warning", "warning"],
      ["error", "x-circle"],
    ];
    for (const [variant, icon] of cases) {
      const fixture = TestBed.createComponent(HostComponent);
      fixture.componentInstance.variant = variant;
      fixture.detectChanges();
      const toast = fixture.debugElement.query(By.directive(FoldToastComponent))
        .componentInstance as FoldToastComponent;
      expect(toast.icon()).toBe(icon);
    }
  });

  it("emits dismiss when the close button is pressed", () => {
    const { host, toast } = render();
    toast.querySelector<HTMLButtonElement>(".toast-close")?.click();
    expect(host.dismissed).toBe(1);
  });

  it("hides the close button when not dismissible", () => {
    const { toast } = render((h) => (h.dismissible = false));
    expect(toast.querySelector(".toast-close")).toBeNull();
  });

  describe("duration", () => {
    afterEach(() => vi.useRealTimers());

    it("auto-emits dismiss after `duration` elapses", () => {
      vi.useFakeTimers();
      const { host } = render((h) => (h.duration = 1000));
      expect(host.dismissed).toBe(0);
      vi.advanceTimersByTime(999);
      expect(host.dismissed).toBe(0);
      vi.advanceTimersByTime(1);
      expect(host.dismissed).toBe(1);
    });

    it("is sticky at duration = 0 (no timer)", () => {
      vi.useFakeTimers();
      const { host } = render((h) => (h.duration = 0));
      vi.advanceTimersByTime(100_000);
      expect(host.dismissed).toBe(0);
    });
  });
});
