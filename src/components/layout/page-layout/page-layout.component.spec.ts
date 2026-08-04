import { Component, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import {
  FoldPageLayoutComponent,
  FoldPageTitleDirective,
} from "./page-layout.component";

@Component({
  standalone: true,
  imports: [FoldPageLayoutComponent],
  template: `<fold-page-layout [title]="title()" [icon]="icon()">
    <p description class="desc">Abonnement <code>pro</code></p>
    <button pageActions class="act">Export</button>
    <span titleBadge class="kind">Directive</span>
    <div class="body-item">Body</div>
    <section description="Section intro" class="body-desc">Section</section>
  </fold-page-layout>`,
})
class HostComponent {
  readonly title = signal<string | undefined>("Facturation");
  readonly icon = signal<"grid" | undefined>(undefined);
}

function render() {
  const fixture = TestBed.createComponent(HostComponent);
  fixture.detectChanges();
  return { fixture, root: fixture.nativeElement as HTMLElement };
}

describe("FoldPageLayoutComponent", () => {
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

  it("does not swallow a body child that carries its own [description] input", () => {
    // The description slot is `p[description]`, tag-qualified: a body element
    // with a `description` attribute (e.g. fold-page-section) must stay in the
    // body, not get projected into the header.
    const { root } = render();
    expect(root.querySelector(".page-body .body-desc")).not.toBeNull();
    expect(root.querySelector(".page-desc .body-desc")).toBeNull();
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

  it('flows by default (scroll="flow") and owns its scroll only on scroll="own"', () => {
    // The default flips to "flow": the page no longer owns a scroll box — it
    // flows inside the shell's scroll. `data-scroll` is the contract the CSS
    // keys off, so assert it directly (jsdom can't compute the overflow itself).
    @Component({
      standalone: true,
      imports: [FoldPageLayoutComponent],
      template: `<fold-page-layout [scroll]="mode()">Body</fold-page-layout>`,
    })
    class ScrollHost {
      readonly mode = signal<"flow" | "own">("flow");
    }

    const fixture = TestBed.createComponent(ScrollHost);
    fixture.detectChanges();
    const host = (fixture.nativeElement as HTMLElement).querySelector(
      "fold-page-layout",
    );
    expect(host?.getAttribute("data-scroll")).toBe("flow");

    fixture.componentInstance.mode.set("own");
    fixture.detectChanges();
    expect(host?.getAttribute("data-scroll")).toBe("own");
  });

  it("shows the header from a projected [pageTitle] with no title input", () => {
    @Component({
      standalone: true,
      imports: [FoldPageLayoutComponent, FoldPageTitleDirective],
      template: `<fold-page-layout>
        <span pageTitle class="custom">Acme Records</span>
      </fold-page-layout>`,
    })
    class CustomTitleHost {}

    const fixture = TestBed.createComponent(CustomTitleHost);
    fixture.detectChanges();
    const root = fixture.nativeElement as HTMLElement;
    // Header renders on the strength of the projected title alone, inside the h1.
    expect(root.querySelector(".page-head")).not.toBeNull();
    expect(root.querySelector(".page-title .custom")?.textContent?.trim()).toBe(
      "Acme Records",
    );
  });
});
