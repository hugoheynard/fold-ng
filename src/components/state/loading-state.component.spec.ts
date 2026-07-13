import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import { LoadingStateComponent } from "./loading-state.component";

describe("LoadingStateComponent", () => {
  it("shows the default message", () => {
    const fixture = TestBed.createComponent(LoadingStateComponent);
    fixture.detectChanges();
    expect((fixture.nativeElement as HTMLElement).textContent).toContain(
      "Loading...",
    );
  });

  it("shows a custom message", () => {
    const fixture = TestBed.createComponent(LoadingStateComponent);
    fixture.componentRef.setInput("message", "Chargement…");
    fixture.detectChanges();
    expect((fixture.nativeElement as HTMLElement).textContent).toContain(
      "Chargement…",
    );
  });
});
