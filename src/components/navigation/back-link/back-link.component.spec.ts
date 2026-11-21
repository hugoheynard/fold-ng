import { Component, signal } from "@angular/core";
import { Location } from "@angular/common";
import { TestBed } from "@angular/core/testing";
import {
  provideRouter,
  Router,
  type Params,
  type QueryParamsHandling,
} from "@angular/router";
import { describe, it, expect, beforeEach, vi } from "vitest";
import { FoldBackLinkComponent } from "./back-link.component";

@Component({
  standalone: true,
  imports: [FoldBackLinkComponent],
  template: `<fold-back-link
    [label]="label()"
    [routerLink]="routerLink()"
    [href]="href()"
    [queryParams]="queryParams()"
    [queryParamsHandling]="handling()"
    [state]="state()"
  />`,
})
class HostComponent {
  readonly label = signal("Back");
  readonly routerLink = signal<string | unknown[] | undefined>(undefined);
  readonly href = signal<string | undefined>(undefined);
  readonly queryParams = signal<Params | null | undefined>(undefined);
  readonly handling = signal<QueryParamsHandling | null | undefined>(undefined);
  readonly state = signal<Record<string, unknown> | undefined>(undefined);
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

  it("puts its queryParams on the router link", () => {
    const r = render();
    r.cmp.routerLink.set("/contrats");
    r.cmp.queryParams.set({ from: "/orders" });
    r.fixture.detectChanges();
    expect(r.anchor()?.getAttribute("href")).toBe("/contrats?from=%2Forders");
  });

  it("keeps the current query string with queryParamsHandling='preserve'", async () => {
    await TestBed.inject(Router).navigateByUrl("/?from=%2Forders&point=p1");
    const r = render();
    r.cmp.routerLink.set("/contrats");
    r.cmp.handling.set("preserve");
    r.fixture.detectChanges();
    expect(r.anchor()?.getAttribute("href")).toBe(
      "/contrats?from=%2Forders&point=p1",
    );
  });

  it("navigates with its state", async () => {
    const router = TestBed.inject(Router);
    // Mocked: the test reads the call, not the navigation it would start.
    const navigate = vi.spyOn(router, "navigateByUrl").mockResolvedValue(true);
    const r = render();
    r.cmp.routerLink.set("/contrats");
    r.cmp.state.set({ fromList: true });
    r.fixture.detectChanges();
    r.anchor()!.click();
    expect(navigate.mock.calls[0]?.[1]).toMatchObject({
      state: { fromList: true },
    });
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
