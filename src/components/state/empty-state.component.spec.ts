import { Component } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import { FoldEmptyStateComponent } from "./empty-state.component";

@Component({
  standalone: true,
  imports: [FoldEmptyStateComponent],
  template: `<fold-empty-state
    [title]="title"
    [subtitle]="subtitle"
    [tone]="tone"
  >
    <svg empty-icon></svg>
    @if (withAction) {
      <button>Act</button>
    }
  </fold-empty-state>`,
})
class HostComponent {
  title = "No company yet";
  subtitle = "";
  tone: "neutral" | "alert" = "neutral";
  withAction = false;
}

function render(patch: Partial<HostComponent> = {}): HTMLElement {
  const fixture = TestBed.createComponent(HostComponent);
  Object.assign(fixture.componentInstance, patch);
  fixture.detectChanges();
  return fixture.nativeElement.querySelector("fold-empty-state") as HTMLElement;
}

describe("FoldEmptyStateComponent", () => {
  it("renders the title", () => {
    expect(render().querySelector(".empty-title")?.textContent).toContain(
      "No company yet",
    );
  });

  it("omits the subtitle when empty", () => {
    expect(render().querySelector(".empty-sub")).toBeNull();
    expect(
      render({ subtitle: "Add one" }).querySelector(".empty-sub"),
    ).not.toBeNull();
  });

  it("projects the icon and the action", () => {
    const el = render({ withAction: true });
    expect(el.querySelector("[empty-icon]")).not.toBeNull();
    expect(el.querySelector(".empty-action button")).not.toBeNull();
  });

  it("flags the alert tone on the host", () => {
    expect(render().classList.contains("alert")).toBe(false);
    expect(render({ tone: "alert" }).classList.contains("alert")).toBe(true);
  });
});
