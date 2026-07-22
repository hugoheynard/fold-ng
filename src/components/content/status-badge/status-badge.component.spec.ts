import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import { FoldStatusBadgeComponent } from "./status-badge.component";

function mount(status: string, label?: string) {
  const fixture = TestBed.createComponent(FoldStatusBadgeComponent);
  fixture.componentRef.setInput("status", status);
  if (label !== undefined) {
    fixture.componentRef.setInput("label", label);
  }
  fixture.detectChanges();
  const badge = fixture.nativeElement.querySelector(".badge") as HTMLElement;
  return badge;
}

describe("FoldStatusBadgeComponent", () => {
  it("shows the label when set, else the raw status", () => {
    expect(mount("active").textContent?.trim()).toBe("active");
    expect(mount("active", "Actif").textContent?.trim()).toBe("Actif");
  });

  it("renders the status key as the data-status attribute", () => {
    expect(mount("pending").getAttribute("data-status")).toBe("pending");
  });

  it("normalises synonym keys onto canonical colour states", () => {
    expect(mount("connected").getAttribute("data-status")).toBe("active");
    expect(mount("error").getAttribute("data-status")).toBe("suspended");
    expect(mount("not_connected").getAttribute("data-status")).toBe(
      "coming-soon",
    );
  });

  it("passes unknown statuses through (they read as neutral via the fallback)", () => {
    expect(mount("draft").getAttribute("data-status")).toBe("draft");
  });
});
