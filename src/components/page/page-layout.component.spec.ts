import { Component, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import { PageLayoutComponent } from "./page-layout.component";

@Component({
  standalone: true,
  imports: [PageLayoutComponent],
  template: `<sh3-page-layout
    [title]="title()"
    [description]="description()"
    [wide]="wide()"
  >
    <button pageActions class="act">Export</button>
    <div class="body-item">Body</div>
  </sh3-page-layout>`,
})
class HostComponent {
  readonly title = signal<string | undefined>("Facturation");
  readonly description = signal<string | undefined>("Abonnement");
  readonly wide = signal(false);
}

function render() {
  const fixture = TestBed.createComponent(HostComponent);
  fixture.detectChanges();
  return { fixture, root: fixture.nativeElement as HTMLElement };
}

describe("PageLayoutComponent", () => {
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

  it("adds the wide modifier when [wide] is set", () => {
    const { fixture, root } = render();
    const host = root.querySelector("sh3-page-layout");
    expect(host?.classList.contains("is-wide")).toBe(false);
    fixture.componentInstance.wide.set(true);
    fixture.detectChanges();
    expect(host?.classList.contains("is-wide")).toBe(true);
  });
});
