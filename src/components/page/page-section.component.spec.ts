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

@Component({
  standalone: true,
  imports: [Sh3PageSectionComponent],
  template: `<sh3-page-section
    [surface]="surface()"
    [divider]="divider()"
    title="X"
  />`,
})
class AppearanceHostComponent {
  readonly surface = signal<"none" | "card" | "sunken">("none");
  readonly divider = signal(false);
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

  it("wraps the body in .section-body", () => {
    const { root } = render();
    expect(root.querySelector(".section-body .body-item")).not.toBeNull();
  });

  it("is flat by default — no surface/divider host classes", () => {
    const fixture = TestBed.createComponent(AppearanceHostComponent);
    fixture.detectChanges();
    const section = fixture.nativeElement.querySelector(
      "sh3-page-section",
    ) as HTMLElement;
    expect(section.classList.contains("s-card")).toBe(false);
    expect(section.classList.contains("s-sunken")).toBe(false);
    expect(section.classList.contains("divider")).toBe(false);
  });

  it("maps surface + divider inputs to host classes", () => {
    const fixture = TestBed.createComponent(AppearanceHostComponent);
    fixture.detectChanges();
    const section = fixture.nativeElement.querySelector(
      "sh3-page-section",
    ) as HTMLElement;

    fixture.componentInstance.surface.set("card");
    fixture.detectChanges();
    expect(section.classList.contains("s-card")).toBe(true);

    fixture.componentInstance.surface.set("sunken");
    fixture.componentInstance.divider.set(true);
    fixture.detectChanges();
    expect(section.classList.contains("s-sunken")).toBe(true);
    expect(section.classList.contains("s-card")).toBe(false);
    expect(section.classList.contains("divider")).toBe(true);
  });
});
