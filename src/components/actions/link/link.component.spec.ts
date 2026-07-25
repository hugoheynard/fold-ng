import { Component, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import { FoldLinkComponent } from "./link.component";
import type { FoldIconName } from "../../foundations/icon/builtin-icons";

@Component({
  standalone: true,
  imports: [FoldLinkComponent],
  template: `<fold-link
    [icon]="icon()"
    [trailingIcon]="trailingIcon()"
    [tone]="tone()"
    [href]="href()"
    [target]="target()"
    [rel]="rel()"
    [disabled]="disabled()"
    (clicked)="onClick()"
  >
    Voir l'organigramme
  </fold-link>`,
})
class HostComponent {
  readonly icon = signal<FoldIconName | undefined>(undefined);
  readonly trailingIcon = signal<FoldIconName | undefined>(undefined);
  readonly tone = signal<"accent" | "muted">("accent");
  readonly href = signal<string | undefined>(undefined);
  readonly target = signal<string | undefined>(undefined);
  readonly rel = signal<string | undefined>(undefined);
  readonly disabled = signal(false);
  clicks = 0;
  onClick() {
    this.clicks += 1;
  }
}

function render() {
  const fixture = TestBed.createComponent(HostComponent);
  fixture.detectChanges();
  const host = fixture.nativeElement as HTMLElement;
  return { fixture, host };
}

describe("FoldLinkComponent", () => {
  it("renders a button that emits (clicked) when no href", () => {
    const { fixture, host } = render();
    const btn = host.querySelector("button.lnk");
    expect(btn).not.toBeNull();
    expect(host.querySelector("a.lnk")).toBeNull();
    expect(host.querySelector(".lnk-label")?.textContent?.trim()).toBe(
      "Voir l'organigramme",
    );

    btn?.dispatchEvent(new MouseEvent("click"));
    expect(fixture.componentInstance.clicks).toBe(1);
  });

  it("renders an anchor with the href when given one", () => {
    const { fixture, host } = render();
    fixture.componentInstance.href.set("https://example.test");
    fixture.detectChanges();
    const a = host.querySelector("a.lnk");
    expect(a?.getAttribute("href")).toBe("https://example.test");
    expect(host.querySelector("button.lnk")).toBeNull();
  });

  it("auto-applies a safe rel for target=_blank, overridable", () => {
    const { fixture, host } = render();
    fixture.componentInstance.href.set("https://example.test");
    fixture.componentInstance.target.set("_blank");
    fixture.detectChanges();
    const a = host.querySelector("a.lnk");
    expect(a?.getAttribute("target")).toBe("_blank");
    expect(a?.getAttribute("rel")).toBe("noopener noreferrer");

    // an explicit rel overrides the safe default
    fixture.componentInstance.rel.set("nofollow");
    fixture.detectChanges();
    expect(a?.getAttribute("rel")).toBe("nofollow");
  });

  it("sets no rel for a same-tab anchor", () => {
    const { fixture, host } = render();
    fixture.componentInstance.href.set("https://example.test");
    fixture.detectChanges();
    const a = host.querySelector("a.lnk");
    expect(a?.getAttribute("target")).toBeNull();
    expect(a?.getAttribute("rel")).toBeNull();
  });

  it("projects leading + trailing icons", () => {
    const { fixture, host } = render();
    expect(host.querySelectorAll("fold-icon").length).toBe(0);
    fixture.componentInstance.icon.set("company");
    fixture.componentInstance.trailingIcon.set("chevron-right");
    fixture.detectChanges();
    expect(host.querySelectorAll("fold-icon").length).toBe(2);
  });

  it("maps the muted tone to a host class", () => {
    const { fixture, host } = render();
    const link = host.querySelector("fold-link") as HTMLElement;
    expect(link.classList.contains("tone-muted")).toBe(false);
    fixture.componentInstance.tone.set("muted");
    fixture.detectChanges();
    expect(link.classList.contains("tone-muted")).toBe(true);
  });

  it("disables the button form", () => {
    const { fixture, host } = render();
    fixture.componentInstance.disabled.set(true);
    fixture.detectChanges();
    const btn = host.querySelector<HTMLButtonElement>("button.lnk");
    expect(btn?.disabled).toBe(true);
  });
});
