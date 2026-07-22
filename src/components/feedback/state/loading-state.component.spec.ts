import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import { FoldLoadingStateComponent } from "./loading-state.component";

describe("FoldLoadingStateComponent", () => {
  it("shows the default message", () => {
    const fixture = TestBed.createComponent(FoldLoadingStateComponent);
    fixture.detectChanges();
    expect((fixture.nativeElement as HTMLElement).textContent).toContain(
      "Loading...",
    );
  });

  it("shows a custom message", () => {
    const fixture = TestBed.createComponent(FoldLoadingStateComponent);
    fixture.componentRef.setInput("message", "Chargement…");
    fixture.detectChanges();
    expect((fixture.nativeElement as HTMLElement).textContent).toContain(
      "Chargement…",
    );
  });
});
