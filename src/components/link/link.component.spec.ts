import { Component, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import { Sh3LinkComponent } from "./link.component";
import type { Sh3IconName } from "../icon/icon.registry";

@Component({
  standalone: true,
  imports: [Sh3LinkComponent],
  template: `<sh3-link
    [icon]="icon()"
    [trailingIcon]="trailingIcon()"
    [tone]="tone()"
    [href]="href()"
    [disabled]="disabled()"
    (clicked)="onClick()"
  >
    Voir l'organigramme
  </sh3-link>`,
})
class HostComponent {
  readonly icon = signal<Sh3IconName | undefined>(undefined);
  readonly trailingIcon = signal<Sh3IconName | undefined>(undefined);
  readonly tone = signal<"accent" | "muted">("accent");
  readonly href = signal<string | undefined>(undefined);
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

describe("Sh3LinkComponent", () => {
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

  it("projects leading + trailing icons", () => {
    const { fixture, host } = render();
    expect(host.querySelectorAll("sh3-icon").length).toBe(0);
    fixture.componentInstance.icon.set("company");
    fixture.componentInstance.trailingIcon.set("chevron-right");
    fixture.detectChanges();
    expect(host.querySelectorAll("sh3-icon").length).toBe(2);
  });

  it("maps the muted tone to a host class", () => {
    const { fixture, host } = render();
    const link = host.querySelector("sh3-link") as HTMLElement;
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
