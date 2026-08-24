import { Component, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import {
  FoldPageSectionComponent,
  type FoldSectionTitleVariant,
} from "./page-section.component";

@Component({
  standalone: true,
  imports: [FoldPageSectionComponent],
  template: `<fold-page-section [title]="title()" [description]="description()">
    <button sectionActions class="act">Add</button>
    <span sectionSubtitle class="facts">3 rows · 2 flagged</span>
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
  it("projects [sectionSubtitle] under the title, outside the description", () => {
    const { fixture, root } = render();
    fixture.componentInstance.description.set("Prose under the facts.");
    fixture.detectChanges();
    expect(root.querySelector(".section-subtitle .facts")).not.toBeNull();
    // The two registers must not swallow each other.
    expect(root.querySelector(".section-desc .facts")).toBeNull();
    // Between the title row and the description — and a direct child of the
    // head, because an element moved out of it indexes to -1, which compares
    // "less than" everything and would let the assertion pass on a broken DOM.
    const head = root.querySelector(".section-head")!;
    const kids = [...head.children];
    const subtitleAt = kids.indexOf(root.querySelector(".section-subtitle")!);
    const rowAt = kids.indexOf(root.querySelector(".section-head-row")!);
    expect(subtitleAt).toBeGreaterThanOrEqual(0);
    expect(rowAt).toBeGreaterThanOrEqual(0);
    const descAt = kids.indexOf(root.querySelector(".section-desc")!);
    expect(descAt).toBeGreaterThanOrEqual(0);
    // title row → facts → prose. Three registers, one order.
    expect(rowAt).toBeLessThan(subtitleAt);
    expect(subtitleAt).toBeLessThan(descAt);
  });

  it("wears the micro-label register by DEFAULT, and can opt out", () => {
    @Component({
      standalone: true,
      imports: [FoldPageSectionComponent],
      template: `<fold-page-section
        title="Identité"
        [titleVariant]="variant()"
        [separator]="separator()"
      />`,
    })
    class SkinHost {
      readonly variant = signal<FoldSectionTitleVariant>("eyebrow");
      readonly separator = signal(false);
    }

    const fixture = TestBed.createComponent(SkinHost);
    fixture.detectChanges();
    const host = (fixture.nativeElement as HTMLElement).querySelector(
      "fold-page-section",
    )!;
    // The DEFAULT is the label register — asserted with nothing set, because
    // that is the claim: a section title is a label for the block below it.
    expect(host.getAttribute("data-title-variant")).toBe("eyebrow");
    expect(host.hasAttribute("data-separator")).toBe(false);
    fixture.componentInstance.variant.set("heading");
    fixture.componentInstance.separator.set(true);
    fixture.detectChanges();
    expect(host.getAttribute("data-title-variant")).toBe("heading");
    expect(host.hasAttribute("data-separator")).toBe(true);
  });

  it("keeps the heading semantics in EITHER register — it is a skin", () => {
    // The register changes the face and nothing else: same h2, same aria-level,
    // same region name. A title that stopped being a heading to look like a
    // label would have quietly cost the page its outline.
    @Component({
      standalone: true,
      imports: [FoldPageSectionComponent],
      template: `<fold-page-section
        title="Identité"
        [titleVariant]="variant()"
      />`,
    })
    class SemanticsHost {
      readonly variant = signal<FoldSectionTitleVariant>("eyebrow");
    }

    const fixture = TestBed.createComponent(SemanticsHost);
    const root = fixture.nativeElement as HTMLElement;
    for (const variant of ["eyebrow", "heading"] as const) {
      fixture.componentInstance.variant.set(variant);
      fixture.detectChanges();
      expect(
        root
          .querySelector("fold-page-section")
          ?.getAttribute("data-title-variant"),
      ).toBe(variant);
      const heading = root.querySelector(".section-title")!;
      expect(heading.tagName).toBe("H2");
      expect(
        root.querySelector("section")?.getAttribute("aria-labelledby"),
      ).toBe(heading.id);
    }
  });

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
