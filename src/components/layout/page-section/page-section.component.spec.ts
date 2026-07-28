import { Component, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import { FoldPageSectionComponent } from "./page-section.component";

@Component({
  standalone: true,
  imports: [FoldPageSectionComponent],
  template: `<fold-page-section [title]="title()" [description]="description()">
    <button sectionActions class="act">Add</button>
    <div class="body-item">Rows</div>
  </fold-page-section>`,
})
class HostComponent {
  readonly title = signal<string | undefined>("Moyens de paiement");
  readonly description = signal<string | undefined>(undefined);
}

@Component({
  standalone: true,
  imports: [FoldPageSectionComponent],
  template: `<fold-page-section
    [stack]="stack()"
    [bleed]="bleed()"
    title="X"
  />`,
})
class ModifierHostComponent {
  readonly stack = signal(false);
  readonly bleed = signal(false);
}

function render() {
  const fixture = TestBed.createComponent(HostComponent);
  fixture.detectChanges();
  return { fixture, root: fixture.nativeElement as HTMLElement };
}

describe("FoldPageSectionComponent", () => {
  it("renders the title as a real <h2> and projects content + actions", () => {
    const { root } = render();
    const h2 = root.querySelector("h2.section-title");
    expect(h2?.textContent?.trim()).toBe("Moyens de paiement");
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

  it("wraps the body in .section-body inside the <section>", () => {
    const { root } = render();
    expect(
      root.querySelector("section.ps-root .section-body .body-item"),
    ).not.toBeNull();
  });

  it("renders a semantic <section> named by its heading (aria-labelledby → id)", () => {
    const { root } = render();
    const section = root.querySelector("section.ps-root") as HTMLElement;
    expect(section).not.toBeNull();
    const labelledBy = section.getAttribute("aria-labelledby");
    expect(labelledBy).toBeTruthy();
    // the h2 carries exactly that id — so the region is named by its title
    const heading = root.querySelector("h2.section-title") as HTMLElement;
    expect(heading.getAttribute("id")).toBe(labelledBy);
  });

  it("overrides aria-level only when headingLevel differs from 2 (native h2)", () => {
    const fixture = TestBed.createComponent(ModifierHostComponent);
    fixture.detectChanges();
    const h2 = fixture.nativeElement.querySelector(
      "h2.section-title",
    ) as HTMLElement;
    // default level 2 = a native <h2>, so no aria-level override
    expect(h2.getAttribute("aria-level")).toBeNull();
  });

  it("drops aria-labelledby when untitled — no anonymously-named region", () => {
    const { fixture, root } = render();
    fixture.componentInstance.title.set(undefined);
    fixture.detectChanges();
    const section = root.querySelector("section.ps-root") as HTMLElement;
    expect(section.getAttribute("aria-labelledby")).toBeNull();
  });

  it("toggles the stack host class", () => {
    const fixture = TestBed.createComponent(ModifierHostComponent);
    fixture.detectChanges();
    const section = fixture.nativeElement.querySelector(
      "fold-page-section",
    ) as HTMLElement;
    expect(section.classList.contains("stack")).toBe(false);

    fixture.componentInstance.stack.set(true);
    fixture.detectChanges();
    expect(section.classList.contains("stack")).toBe(true);
  });

  it("toggles the is-bleed host class from the bleed input", () => {
    const fixture = TestBed.createComponent(ModifierHostComponent);
    fixture.detectChanges();
    const section = fixture.nativeElement.querySelector(
      "fold-page-section",
    ) as HTMLElement;
    expect(section.classList.contains("is-bleed")).toBe(false);

    fixture.componentInstance.bleed.set(true);
    fixture.detectChanges();
    expect(section.classList.contains("is-bleed")).toBe(true);
  });

  it("projects a bespoke [sectionHeader] instead of the default h2", () => {
    @Component({
      standalone: true,
      imports: [FoldPageSectionComponent],
      // No `title` → the default h2 is suppressed; the custom header stands.
      template: `<fold-page-section>
        <h3 sectionHeader class="custom-head">Bespoke</h3>
        <div class="body-item">Rows</div>
      </fold-page-section>`,
    })
    class ProjectedHost {}

    const fixture = TestBed.createComponent(ProjectedHost);
    fixture.detectChanges();
    const root = fixture.nativeElement as HTMLElement;
    expect(root.querySelector(".custom-head")?.textContent).toBe("Bespoke");
    expect(root.querySelector("h2.section-title")).toBeNull();
    expect(root.querySelector(".body-item")).not.toBeNull();
  });
});
