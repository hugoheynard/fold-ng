import { Component, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { describe, it, expect } from "vitest";
import { FoldButtonComponent } from "./button.component";
import type {
  FoldButtonEmphasis,
  FoldButtonIntent,
  FoldButtonSize,
} from "./button.types";

@Component({
  standalone: true,
  imports: [FoldButtonComponent],
  template: `
    <button
      foldButton
      [emphasis]="emphasis()"
      [intent]="intent()"
      [size]="size()"
      [shape]="shape()"
      [block]="block()"
      [disabled]="disabled()"
      [loading]="loading()"
      [type]="type()"
      [icon]="icon()"
      [iconTrailing]="iconTrailing()"
    >
      Hi
    </button>
  `,
})
class ButtonHost {
  readonly emphasis = signal<FoldButtonEmphasis>("soft");
  readonly intent = signal<FoldButtonIntent>("primary");
  readonly size = signal<FoldButtonSize>("md");
  readonly shape = signal<"rounded" | "pill">("rounded");
  readonly block = signal(false);
  readonly disabled = signal<boolean | "">(false);
  readonly loading = signal(false);
  readonly type = signal<"button" | "submit" | "reset">("button");
  readonly icon = signal<string | undefined>(undefined);
  readonly iconTrailing = signal<string | undefined>(undefined);
}

function mountButton() {
  const fixture = TestBed.createComponent(ButtonHost);
  fixture.detectChanges();
  const el = fixture.nativeElement.querySelector(
    "button[foldButton]",
  ) as HTMLButtonElement;
  const cmp = fixture.debugElement.query(By.directive(FoldButtonComponent))
    .componentInstance as FoldButtonComponent;
  return { fixture, host: fixture.componentInstance, el, cmp };
}

describe("foldButton", () => {
  it("keeps the host as a native <button>, type=button by default", () => {
    const { el } = mountButton();
    expect(el.tagName).toBe("BUTTON");
    expect(el.getAttribute("type")).toBe("button");
  });

  it("applies emphasis + intent + size + shape as host classes", () => {
    const { fixture, host, el } = mountButton();
    expect(el.classList.contains("fold-button")).toBe(true);
    expect(el.classList.contains("soft")).toBe(true);
    expect(el.classList.contains("primary")).toBe(true);
    expect(el.classList.contains("md")).toBe(true);
    expect(el.classList.contains("rounded")).toBe(true);

    host.emphasis.set("solid");
    host.intent.set("danger");
    host.size.set("sm");
    host.shape.set("pill");
    fixture.detectChanges();
    expect(el.classList.contains("solid")).toBe(true);
    expect(el.classList.contains("danger")).toBe(true);
    expect(el.classList.contains("sm")).toBe(true);
    expect(el.classList.contains("pill")).toBe(true);
    expect(el.classList.contains("soft")).toBe(false);
    expect(el.classList.contains("primary")).toBe(false);
    expect(el.classList.contains("rounded")).toBe(false);
  });

  it("toggles the block (full-width) class", () => {
    const { fixture, host, el } = mountButton();
    expect(el.classList.contains("block")).toBe(false);
    host.block.set(true);
    fixture.detectChanges();
    expect(el.classList.contains("block")).toBe(true);
  });

  it("renders a leading/trailing icon sized from the button", () => {
    const { fixture, host, el, cmp } = mountButton();
    expect(el.querySelector("fold-icon")).toBeNull();

    host.icon.set("check");
    host.iconTrailing.set("chevron-right");
    host.size.set("lg");
    fixture.detectChanges();
    expect(el.querySelectorAll("fold-icon").length).toBe(2);
    // lg → 18px, derived (not hand-passed) so it stays consistent.
    expect(cmp.iconSize()).toBe(18);
  });

  it("reflects disabled onto the native button and swallows the click", () => {
    const { fixture, host, el } = mountButton();
    let clicks = 0;
    el.addEventListener("click", () => (clicks += 1));

    el.click();
    expect(clicks).toBe(1);

    host.disabled.set(true);
    fixture.detectChanges();
    expect(el.disabled).toBe(true);
    el.click(); // native: a disabled button dispatches nothing
    expect(clicks).toBe(1);
  });

  it("goes busy while loading: spinner, aria-busy, blocked, but not dimmed", () => {
    const { fixture, host, el } = mountButton();
    let clicks = 0;
    el.addEventListener("click", () => (clicks += 1));

    host.loading.set(true);
    fixture.detectChanges();

    expect(el.querySelector("fold-spinner")).not.toBeNull();
    expect(el.getAttribute("aria-busy")).toBe("true");
    // Blocked like disabled (native attr), but the "dim" class is NOT applied.
    expect(el.disabled).toBe(true);
    expect(el.classList.contains("is-loading")).toBe(true);
    expect(el.classList.contains("is-disabled")).toBe(false);

    el.click();
    expect(clicks).toBe(0);
  });

  it("shows the spinner instead of the leading icon while loading", () => {
    const { fixture, host, el } = mountButton();
    host.icon.set("check");
    fixture.detectChanges();
    expect(el.querySelector("fold-icon")).not.toBeNull();

    host.loading.set(true);
    fixture.detectChanges();
    expect(el.querySelector("fold-spinner")).not.toBeNull();
    expect(el.querySelector("fold-icon")).toBeNull();
  });

  it("disables via the bare attribute form (booleanAttribute)", () => {
    const { fixture, host, el } = mountButton();
    host.disabled.set("");
    fixture.detectChanges();
    expect(el.disabled).toBe(true);
  });

  it("forwards type=submit to the native button", () => {
    const { fixture, host, el } = mountButton();
    host.type.set("submit");
    fixture.detectChanges();
    expect(el.getAttribute("type")).toBe("submit");
  });
});

// ── Anchor host — the "link that looks like a button" case ──
@Component({
  standalone: true,
  imports: [FoldButtonComponent],
  template: `<a
    foldButton
    emphasis="outline"
    intent="neutral"
    href="/next"
    [disabled]="disabled()"
    >Go</a
  >`,
})
class AnchorHost {
  readonly disabled = signal(false);
}

describe("foldButton on an <a>", () => {
  function mountAnchor() {
    const fixture = TestBed.createComponent(AnchorHost);
    fixture.detectChanges();
    const el = fixture.nativeElement.querySelector(
      "a[foldButton]",
    ) as HTMLAnchorElement;
    return { fixture, host: fixture.componentInstance, el };
  }

  it("styles a real anchor (keeps href, no type/disabled attribute)", () => {
    const { el } = mountAnchor();
    expect(el.tagName).toBe("A");
    expect(el.getAttribute("href")).toBe("/next");
    expect(el.hasAttribute("type")).toBe(false);
    expect(el.classList.contains("outline")).toBe(true);
    expect(el.classList.contains("neutral")).toBe(true);
  });

  it("expresses disabled through ARIA, not the missing native attribute", () => {
    const { fixture, host, el } = mountAnchor();
    expect(el.getAttribute("aria-disabled")).toBeNull();

    host.disabled.set(true);
    fixture.detectChanges();
    expect(el.getAttribute("aria-disabled")).toBe("true");
    expect(el.getAttribute("tabindex")).toBe("-1");
    expect(el.classList.contains("is-disabled")).toBe(true);
    expect(el.hasAttribute("disabled")).toBe(false);
  });
});

// ── Consumer classes coexist with the variant class ──
@Component({
  standalone: true,
  imports: [FoldButtonComponent],
  template: `<button foldButton class="consumer-class" emphasis="outline">
    Hi
  </button>`,
})
class HostWithClass {}

describe("foldButton class merging", () => {
  it("keeps a consumer's static class alongside the variant class", () => {
    const fixture = TestBed.createComponent(HostWithClass);
    fixture.detectChanges();
    const el = fixture.nativeElement.querySelector(
      "button[foldButton]",
    ) as HTMLButtonElement;
    expect(el.classList.contains("consumer-class")).toBe(true);
    expect(el.classList.contains("outline")).toBe(true);
  });
});
