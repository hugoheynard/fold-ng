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
    <nav pageEyebrow class="crumbs">Produits / Tartes</nav>
    <span pageSubtitle class="facts">REF-001 · Pro</span>
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

  it("projects [pageEyebrow] above the title, inside the header text column", () => {
    const { root } = render();
    const eyebrow = root.querySelector(".page-head-text .page-eyebrow .crumbs");
    expect(eyebrow).not.toBeNull();
    // ABOVE the title — the order is the whole point of the slot, so assert it
    // rather than trust the template's reading order.
    const column = root.querySelector(".page-head-text")!;
    const kids = [...column.children];
    expect(kids.indexOf(root.querySelector(".page-eyebrow")!)).toBeLessThan(
      kids.indexOf(root.querySelector(".page-title")!),
    );
  });

  it("does not switch the header on for an eyebrow alone", () => {
    // An eyebrow is a label; with no title there is nothing to label, and a
    // lone trail floating where a header should be is worse than no header.
    @Component({
      standalone: true,
      imports: [FoldPageLayoutComponent],
      template: `<fold-page-layout>
        <nav pageEyebrow class="lone">Produits</nav>
        <div class="body-item">Body</div>
      </fold-page-layout>`,
    })
    class EyebrowOnlyHost {}

    const fixture = TestBed.createComponent(EyebrowOnlyHost);
    fixture.detectChanges();
    const root = fixture.nativeElement as HTMLElement;
    expect(root.querySelector(".page-head")).toBeNull();
    expect(root.querySelector(".lone")).toBeNull();
    expect(root.querySelector(".page-body .body-item")).not.toBeNull();
  });

  it("projects [pageSubtitle] between the title and the description", () => {
    const { root } = render();
    const column = root.querySelector(".page-head-text")!;
    const kids = [...column.children];
    const at = (sel: string) => kids.indexOf(root.querySelector(sel)!);
    expect(root.querySelector(".page-subtitle .facts")).not.toBeNull();
    // The order IS the contract: facts sit tight under the title, prose below.
    expect(at(".page-title")).toBeLessThan(at(".page-subtitle"));
    expect(at(".page-subtitle")).toBeLessThan(at(".page-desc"));
  });

  it("keeps [pageSubtitle] and p[description] in their own slots", () => {
    // The two registers must not swallow each other: a facts line pushed into
    // the description slot would read with a paragraph's spacing.
    const { root } = render();
    expect(root.querySelector(".page-desc .facts")).toBeNull();
    expect(root.querySelector(".page-subtitle .desc")).toBeNull();
  });

  it("flags the header rule only on [separator]", () => {
    @Component({
      standalone: true,
      imports: [FoldPageLayoutComponent],
      template: `<fold-page-layout title="Facturation" [separator]="on()"
        >Body</fold-page-layout
      >`,
    })
    class SeparatorHost {
      readonly on = signal(false);
    }

    const fixture = TestBed.createComponent(SeparatorHost);
    fixture.detectChanges();
    const host = (fixture.nativeElement as HTMLElement).querySelector(
      "fold-page-layout",
    );
    // `data-separator` is the contract the CSS keys off — jsdom computes no
    // border, so assert the attribute rather than a style that isn't there.
    expect(host?.hasAttribute("data-separator")).toBe(false);
    fixture.componentInstance.on.set(true);
    fixture.detectChanges();
    expect(host?.hasAttribute("data-separator")).toBe(true);
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
