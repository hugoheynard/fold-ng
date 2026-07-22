import { Component, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import { FoldMenuItemComponent } from "./menu-item.component";

@Component({
  standalone: true,
  imports: [FoldMenuItemComponent],
  template: `<a
    fold-menu-item
    [icon]="'home'"
    [label]="label()"
    [active]="active()"
    [badge]="badge()"
    [badgeTone]="tone()"
  ></a>`,
})
class HostComponent {
  readonly label = signal("Home");
  readonly active = signal(false);
  readonly badge = signal<string | number | undefined>(undefined);
  readonly tone = signal<"follow" | "info" | "alert">("follow");
}

function render() {
  const fixture = TestBed.createComponent(HostComponent);
  fixture.detectChanges();
  const item = fixture.nativeElement.querySelector("a") as HTMLElement;
  return { fixture, item };
}

describe("FoldMenuItemComponent", () => {
  it("renders the icon and the tooltip label", () => {
    const { item } = render();
    expect(item.querySelector("fold-icon")).not.toBeNull();
    expect(item.querySelector(".mi-tip")?.textContent).toBe("Home");
  });

  it("toggles the active indicator via the `active` input", () => {
    const { fixture, item } = render();
    expect(item.classList.contains("is-active")).toBe(false);
    fixture.componentInstance.active.set(true);
    fixture.detectChanges();
    expect(item.classList.contains("is-active")).toBe(true);
  });

  it("renders no badge by default", () => {
    const { item } = render();
    expect(item.querySelector(".mi-dot")).toBeNull();
    expect(item.querySelector(".mi-badge")).toBeNull();
  });

  it("renders a plain corner dot + pill for a text badge", () => {
    const { fixture, item } = render();
    fixture.componentInstance.badge.set("new");
    fixture.detectChanges();
    const dot = item.querySelector(".mi-dot");
    expect(dot).not.toBeNull();
    expect(dot?.classList.contains("mi-dot-count")).toBe(false);
    expect(dot?.textContent).toBe("");
    expect(item.querySelector(".mi-badge")).not.toBeNull();
    expect(item.getAttribute("aria-label")).toBe("Home, new");
  });

  it("renders a count bubble for a numeric badge, capped at 99+", () => {
    const { fixture, item } = render();
    fixture.componentInstance.badge.set(3);
    fixture.detectChanges();
    const dot = item.querySelector(".mi-dot");
    expect(dot?.classList.contains("mi-dot-count")).toBe(true);
    expect(dot?.textContent?.trim()).toBe("3");

    fixture.componentInstance.badge.set(150);
    fixture.detectChanges();
    expect(item.querySelector(".mi-dot")?.textContent?.trim()).toBe("99+");
  });

  it("uses a follow pill (not fold-badge) by default", () => {
    const { fixture, item } = render();
    fixture.componentInstance.badge.set("new");
    fixture.detectChanges();
    expect(item.querySelector(".mi-badge-follow")).not.toBeNull();
    expect(item.querySelector("fold-badge")).toBeNull();
    expect(item.style.getPropertyValue("--mi-badge-accent")).toBe(
      "var(--mi-accent)",
    );
  });

  it("uses fold-badge + the tone's accent for a semantic tone", () => {
    const { fixture, item } = render();
    fixture.componentInstance.badge.set("new");
    fixture.componentInstance.tone.set("alert");
    fixture.detectChanges();
    expect(item.querySelector(".mi-badge-follow")).toBeNull();
    const pill = item.querySelector("fold-badge");
    expect(pill).not.toBeNull();
    expect(pill?.classList.contains("alert")).toBe(true);
    expect(item.style.getPropertyValue("--mi-badge-accent")).toBe(
      "var(--fold-color-alert)",
    );
  });

  it("treats a zero count and empty string as no badge", () => {
    const { fixture, item } = render();
    fixture.componentInstance.badge.set(0);
    fixture.detectChanges();
    expect(item.querySelector(".mi-dot")).toBeNull();
    expect(item.getAttribute("aria-label")).toBeNull();

    fixture.componentInstance.badge.set("");
    fixture.detectChanges();
    expect(item.querySelector(".mi-dot")).toBeNull();
  });
});
