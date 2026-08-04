import { Component, signal } from "@angular/core";
import { Location } from "@angular/common";
import { TestBed } from "@angular/core/testing";
import { provideRouter } from "@angular/router";
import { describe, it, expect, beforeEach, vi } from "vitest";
import { FoldBackLinkComponent } from "./back-link.component";

@Component({
  standalone: true,
  imports: [FoldBackLinkComponent],
  template: `<fold-back-link
    [label]="label()"
    [routerLink]="routerLink()"
    [href]="href()"
  />`,
})
class HostComponent {
  readonly label = signal("Back");
  readonly routerLink = signal<string | unknown[] | undefined>(undefined);
  readonly href = signal<string | undefined>(undefined);
}

function render() {
  const fixture = TestBed.createComponent(HostComponent);
  fixture.detectChanges();
  const host = fixture.nativeElement as HTMLElement;
  return {
    fixture,
    cmp: fixture.componentInstance,
    anchor: () => host.querySelector<HTMLAnchorElement>("a.bl"),
    button: () => host.querySelector<HTMLButtonElement>("button.bl"),
    text: () => host.querySelector(".bl")?.textContent?.trim(),
  };
}

describe("FoldBackLinkComponent", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [provideRouter([])] });
  });

  it("is a history-back button when neither routerLink nor href is set", () => {
    const back = vi.spyOn(TestBed.inject(Location), "back");
    const r = render();
    expect(r.button()).not.toBeNull();
    expect(r.anchor()).toBeNull();
    r.button()!.click();
    expect(back).toHaveBeenCalledOnce();
  });

  it("is a router link when routerLink is set", () => {
    const r = render();
    r.cmp.routerLink.set("/contrats");
    r.fixture.detectChanges();
    expect(r.button()).toBeNull();
    expect(r.anchor()?.getAttribute("href")).toBe("/contrats");
  });

  it("is a plain anchor when href is set", () => {
    const r = render();
    r.cmp.href.set("https://example.com/dash");
    r.fixture.detectChanges();
    expect(r.anchor()?.getAttribute("href")).toBe("https://example.com/dash");
  });

  it("renders the label (default 'Back', overridable)", () => {
    const r = render();
    expect(r.text()).toBe("Back");
    r.cmp.label.set("Tous les contrats");
    r.fixture.detectChanges();
    expect(r.text()).toBe("Tous les contrats");
  });
});
