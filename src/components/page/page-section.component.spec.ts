import { Component, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import { Sh3PageSectionComponent } from "./page-section.component";

@Component({
  standalone: true,
  imports: [Sh3PageSectionComponent],
  template: `<sh3-page-section [title]="title()" [description]="description()">
    <button sectionActions class="act">Add</button>
    <div class="body-item">Rows</div>
  </sh3-page-section>`,
})
class HostComponent {
  readonly title = signal<string | undefined>("Moyens de paiement");
  readonly description = signal<string | undefined>(undefined);
}

function render() {
  const fixture = TestBed.createComponent(HostComponent);
  fixture.detectChanges();
  return { fixture, root: fixture.nativeElement as HTMLElement };
}

describe("Sh3PageSectionComponent", () => {
  it("renders the title and projects content + actions", () => {
    const { root } = render();
    expect(root.querySelector(".section-title")?.textContent?.trim()).toBe(
      "Moyens de paiement",
    );
    expect(root.querySelector(".body-item")).not.toBeNull();
    expect(root.querySelector(".section-actions .act")).not.toBeNull();
  });

  it("omits the description when not provided", () => {
    const { root } = render();
    expect(root.querySelector(".section-desc")).toBeNull();
  });

  it("omits the head entirely when there is no title or description", () => {
    const { fixture, root } = render();
    fixture.componentInstance.title.set(undefined);
    fixture.detectChanges();
    expect(root.querySelector(".section-head")).toBeNull();
    expect(root.querySelector(".body-item")).not.toBeNull();
  });
});
