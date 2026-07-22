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
  it("renders the title and projects content + actions", () => {
    const { root } = render();
    expect(
      root.querySelector("fold-element-title .et-label")?.textContent?.trim(),
    ).toBe("Moyens de paiement");
    expect(root.querySelector(".body-item")).not.toBeNull();
    expect(
      root.querySelector("fold-element-title .et-action .act"),
    ).not.toBeNull();
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
    // the heading carries exactly that id — so the region is named by its title
    const heading = root.querySelector(".et-label") as HTMLElement;
    expect(heading.getAttribute("id")).toBe(labelledBy);
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
});
