import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import { Sh3LoadingStateComponent } from "./loading-state.component";

describe("Sh3LoadingStateComponent", () => {
  it("shows the default message", () => {
    const fixture = TestBed.createComponent(Sh3LoadingStateComponent);
    fixture.detectChanges();
    expect((fixture.nativeElement as HTMLElement).textContent).toContain(
      "Loading...",
    );
  });

  it("shows a custom message", () => {
    const fixture = TestBed.createComponent(Sh3LoadingStateComponent);
    fixture.componentRef.setInput("message", "Chargement…");
    fixture.detectChanges();
    expect((fixture.nativeElement as HTMLElement).textContent).toContain(
      "Chargement…",
    );
  });
});
