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
    [description]="description()"
    [wide]="wide()"
    [fluid]="fluid()"
  >
    <button pageActions class="act">Export</button>
    <div class="body-item">Body</div>
  </sh3-page-layout>`,
})
class HostComponent {
  readonly title = signal<string | undefined>("Facturation");
  readonly icon = signal<"grid" | undefined>(undefined);
  readonly description = signal<string | undefined>("Abonnement");
  readonly wide = signal(false);
  readonly fluid = signal(false);
}

function render() {
  const fixture = TestBed.createComponent(HostComponent);
  fixture.detectChanges();
  return { fixture, root: fixture.nativeElement as HTMLElement };
}

describe("Sh3PageLayoutComponent", () => {
  it("renders the title + description", () => {
    const { root } = render();
    expect(root.querySelector(".page-title")?.textContent?.trim()).toBe(
      "Facturation",
    );
    expect(root.querySelector(".page-desc")?.textContent?.trim()).toBe(
      "Abonnement",
    );
  });

  it("projects default content into the body and actions into the header", () => {
    const { root } = render();
    expect(root.querySelector(".page-body .body-item")).not.toBeNull();
    expect(root.querySelector(".page-head .page-actions .act")).not.toBeNull();
  });

  it("omits the header when there is no title or description", () => {
    const { fixture, root } = render();
    fixture.componentInstance.title.set(undefined);
    fixture.componentInstance.description.set(undefined);
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
