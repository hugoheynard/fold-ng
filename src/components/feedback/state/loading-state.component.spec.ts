import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import { FoldLoadingStateComponent } from "./loading-state.component";

function mount() {
  const fixture = TestBed.createComponent(FoldLoadingStateComponent);
  fixture.detectChanges();
  return { fixture, host: fixture.nativeElement as HTMLElement };
}

describe("FoldLoadingStateComponent", () => {
  it("shows the default message", () => {
    const { host } = mount();
    expect(host.textContent).toContain("Loading...");
  });

  it("shows a custom message", () => {
    const { fixture, host } = mount();
    fixture.componentRef.setInput("message", "Chargement…");
    fixture.detectChanges();
    expect(host.textContent).toContain("Chargement…");
  });

  it("renders a spinner and announces as a polite status region", () => {
    const { host } = mount();
    expect(host.querySelector("fold-spinner")).toBeTruthy();
    expect(host.getAttribute("role")).toBe("status");
    expect(host.getAttribute("aria-live")).toBe("polite");
  });

  it("drops the message line when message is empty (spinner only)", () => {
    const { fixture, host } = mount();
    fixture.componentRef.setInput("message", "");
    fixture.detectChanges();
    expect(host.querySelector("span")).toBeNull();
    expect(host.querySelector("fold-spinner")).toBeTruthy();
  });
});
