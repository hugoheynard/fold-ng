import { Component } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect, vi } from "vitest";
import { FoldPanelHeaderComponent } from "./panel-header.component";
import { FoldPanelRef } from "./panel-ref";
import type { FoldIconName } from "../components/foundations/icon/icon.registry";

@Component({
  standalone: true,
  imports: [FoldPanelHeaderComponent],
  template: `
    <fold-panel-header
      [title]="title"
      [subtitle]="subtitle"
      [variant]="variant"
      [icon]="icon"
      (closed)="closedCount = closedCount + 1"
    >
      @if (withActions) {
        <button actions class="my-action" type="button">Nav</button>
      }
      @if (withDesc) {
        <span class="desc-probe">Description</span>
      }
    </fold-panel-header>
  `,
})
class HostComponent {
  title = "Titre";
  subtitle = "";
  variant: "title" | "eyebrow" = "title";
  icon: FoldIconName | undefined = undefined;
  withActions = false;
  withDesc = false;
  closedCount = 0;
}

function setup(
  patch: Partial<HostComponent> = {},
  panelRef?: FoldPanelRef,
): { cmp: HostComponent; host: HTMLElement } {
  TestBed.resetTestingModule(); // allow multiple setups within one test
  TestBed.configureTestingModule({
    imports: [HostComponent],
    providers: panelRef ? [{ provide: FoldPanelRef, useValue: panelRef }] : [],
  });
  const fixture = TestBed.createComponent(HostComponent);
  Object.assign(fixture.componentInstance, patch);
  fixture.detectChanges();
  return {
    cmp: fixture.componentInstance,
    host: fixture.nativeElement as HTMLElement,
  };
}

describe("FoldPanelHeaderComponent", () => {
  it("renders the title; hides the subtitle until set", () => {
    const { host } = setup();
    expect(host.querySelector(".ph__title")?.textContent?.trim()).toBe("Titre");
    expect(host.querySelector(".ph__subtitle")).toBeNull();
    expect(
      setup({ subtitle: "Sous-titre" })
        .host.querySelector(".ph__subtitle")
        ?.textContent?.trim(),
    ).toBe("Sous-titre");
  });

  it("applies the eyebrow variant class", () => {
    expect(
      setup().host.querySelector(".ph")?.classList.contains("ph--eyebrow"),
    ).toBe(false);
    expect(
      setup({ variant: "eyebrow" })
        .host.querySelector(".ph")
        ?.classList.contains("ph--eyebrow"),
    ).toBe(true);
  });

  it("shows the leading icon only when provided", () => {
    expect(setup().host.querySelector(".ph__icon")).toBeNull();
    expect(
      setup({ icon: "playlist-add" }).host.querySelector(".ph__icon"),
    ).not.toBeNull();
  });

  it("projects [actions] before the close button", () => {
    const actions = setup({ withActions: true }).host.querySelector(
      ".ph__actions",
    );
    const kids = Array.from(actions?.children ?? []);
    const a = kids.findIndex((c) => c.classList.contains("my-action"));
    const close = kids.findIndex((c) => c.classList.contains("ph__close"));
    expect(a).toBeGreaterThanOrEqual(0);
    expect(a).toBeLessThan(close);
  });

  it("projects a parent description into the ng-content slot", () => {
    const desc = setup({ withDesc: true }).host.querySelector(".ph__desc");
    expect(desc?.querySelector(".desc-probe")?.textContent?.trim()).toBe(
      "Description",
    );
  });

  it("self-closes via the injected FoldPanelRef and emits (closed) first", () => {
    const dismiss = vi.fn();
    const { cmp, host } = setup({}, new FoldPanelRef(dismiss));
    host.querySelector<HTMLButtonElement>(".ph__close")!.click();
    expect(cmp.closedCount).toBe(1);
    expect(dismiss).toHaveBeenCalledTimes(1);
  });

  it("emits (closed) without throwing when there is no panel", () => {
    const { cmp, host } = setup();
    expect(() =>
      host.querySelector<HTMLButtonElement>(".ph__close")!.click(),
    ).not.toThrow();
    expect(cmp.closedCount).toBe(1);
  });
});
