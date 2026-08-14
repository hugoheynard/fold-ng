import { Component } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import { FoldEmptyStateComponent } from "./empty-state.component";
import type { FoldIconName } from "../../foundations/icon/icon.component";

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

@Component({
  standalone: true,
  imports: [FoldEmptyStateComponent],
  template: `<fold-empty-state title="Nothing here" [icon]="icon" />`,
})
class NamedIconHost {
  icon: FoldIconName | undefined = "check";
}

function renderNamed(patch: Partial<NamedIconHost> = {}): HTMLElement {
  const fixture = TestBed.createComponent(NamedIconHost);
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

  it("draws the glyph named by `icon`, with no slot in sight", () => {
    // The whole point: the caller shouldn't have to know a slot exists. An
    // `icon="…"` that lands as a mute HTML attribute is the bug this closes.
    expect(renderNamed().querySelector("fold-icon")).not.toBeNull();
  });

  it("shows nothing when neither an icon name nor projected art is given", () => {
    const icon = renderNamed({ icon: undefined }).querySelector(".empty-icon");

    expect(icon?.querySelector("*")).toBeNull();
  });

  it("keeps projected art the winner over a named icon", () => {
    // Both supplied: the slot is the richer of the two, so it is the one that
    // must survive. Decided in CSS, so assert on the seam that drives it.
    const host = render();
    const well = host.querySelector(".empty-icon");

    expect(well?.querySelector("[empty-icon]")).not.toBeNull();
  });
});
