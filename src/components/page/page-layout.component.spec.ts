import { Component, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import { Sh3PageLayoutComponent } from "./page-layout.component";

@Component({
  standalone: true,
  imports: [Sh3PageLayoutComponent],
  template: `<sh3-page-layout
    [title]="title()"
    [icon]="icon()"
    [wide]="wide()"
    [fluid]="fluid()"
  >
    <p description class="desc">Abonnement <code>pro</code></p>
    <button pageActions class="act">Export</button>
    <span titleBadge class="kind">Directive</span>
    <div class="body-item">Body</div>
  </sh3-page-layout>`,
})
class HostComponent {
  readonly title = signal<string | undefined>("Facturation");
  readonly icon = signal<"grid" | undefined>(undefined);
  readonly wide = signal(false);
  readonly fluid = signal(false);
}

function render() {
  const fixture = TestBed.createComponent(HostComponent);
  fixture.detectChanges();
  return { fixture, root: fixture.nativeElement as HTMLElement };
}

describe("Sh3PageLayoutComponent", () => {
  it("renders the title, and projects the description with its markup intact", () => {
    const { root } = render();
    expect(
      root
        .querySelector(".page-title > span:not(.page-title-badge)")
        ?.textContent?.trim(),
    ).toBe("Facturation");
    // A slot, so rich content survives — that is the whole point of the change.
    expect(root.querySelector(".page-desc .desc code")?.textContent).toBe(
      "pro",
    );
  });

  it("projects default content into the body and actions into the header", () => {
    const { root } = render();
    expect(root.querySelector(".page-body .body-item")).not.toBeNull();
    expect(root.querySelector(".page-head .page-actions .act")).not.toBeNull();
  });

  it("projects [titleBadge] inline beside the title", () => {
    const { root } = render();
    expect(
      root.querySelector(".page-title .page-title-badge .kind"),
    ).not.toBeNull();
  });

  it("omits the header when there is no title — the body takes over", () => {
    const { fixture, root } = render();
    fixture.componentInstance.title.set(undefined);
    fixture.detectChanges();
    expect(root.querySelector(".page-head")).toBeNull();
    // Body still renders.
    expect(root.querySelector(".page-body .body-item")).not.toBeNull();
  });

  it("renders a leading icon beside the title when [icon] is set", () => {
    const { fixture, root } = render();
    expect(root.querySelector(".page-title .page-icon")).toBeNull();
    fixture.componentInstance.icon.set("grid");
    fixture.detectChanges();
    expect(root.querySelector(".page-title .page-icon")).not.toBeNull();
  });

  it("drops the width cap with [fluid] (is-fluid)", () => {
    const { fixture, root } = render();
    const host = root.querySelector("sh3-page-layout");
    expect(host?.classList.contains("is-fluid")).toBe(false);
    fixture.componentInstance.fluid.set(true);
    fixture.detectChanges();
    expect(host?.classList.contains("is-fluid")).toBe(true);
  });

  it("adds the wide modifier when [wide] is set", () => {
    const { fixture, root } = render();
    const host = root.querySelector("sh3-page-layout");
    expect(host?.classList.contains("is-wide")).toBe(false);
    fixture.componentInstance.wide.set(true);
    fixture.detectChanges();
    expect(host?.classList.contains("is-wide")).toBe(true);
  });
});
