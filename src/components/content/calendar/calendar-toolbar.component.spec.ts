import { Component, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, expect, it } from "vitest";

import { FoldCalendarToolbarComponent } from "./calendar-toolbar.component";
import { FoldCalendarTitleDirective } from "./calendar-slots.directive";
import type { FoldCalendarView } from "./calendar-navigation";

@Component({
  standalone: true,
  imports: [FoldCalendarToolbarComponent],
  template: `
    <fold-calendar-toolbar
      [(date)]="date"
      [(view)]="view"
      [today]="today()"
      locale="en-GB"
    >
      <button actions type="button" class="cta">New event</button>
    </fold-calendar-toolbar>
  `,
})
class HostComponent {
  readonly date = signal("2026-05-20");
  readonly view = signal<FoldCalendarView>("month");
  readonly today = signal<string | undefined>("2026-08-02");
}

function setup(): {
  fixture: ReturnType<typeof TestBed.createComponent<HostComponent>>;
  host: HostComponent;
  el: HTMLElement;
} {
  const fixture = TestBed.createComponent(HostComponent);
  fixture.detectChanges();
  return {
    fixture,
    host: fixture.componentInstance,
    el: fixture.nativeElement as HTMLElement,
  };
}

function step(el: HTMLElement, index: number): HTMLElement {
  const buttons = el.querySelectorAll<HTMLElement>(".foldcalt-step");
  const button = buttons[index];
  if (button === undefined) {
    throw new Error(`no step button at ${index}`);
  }
  return button;
}

describe("FoldCalendarToolbarComponent", () => {
  it("names the period and announces changes politely", () => {
    const { el } = setup();
    const title = el.querySelector(".foldcalt-title");
    expect(title?.textContent?.trim()).toBe("May 2026");
    expect(title?.getAttribute("aria-live")).toBe("polite");
  });

  it("pages by month under the month view", () => {
    const { fixture, host, el } = setup();
    step(el, 1).click();
    fixture.detectChanges();
    expect(host.date()).toBe("2026-06-01");

    step(el, 0).click();
    fixture.detectChanges();
    expect(host.date()).toBe("2026-05-01");
  });

  it("pages in the units the current view reads in", () => {
    const { fixture, host, el } = setup();
    host.view.set("day");
    fixture.detectChanges();

    step(el, 1).click();
    fixture.detectChanges();
    expect(host.date()).toBe("2026-05-21");

    host.view.set("week");
    fixture.detectChanges();
    step(el, 1).click();
    fixture.detectChanges();
    expect(host.date()).toBe("2026-05-25");
  });

  it("retitles itself when the view changes", () => {
    const { fixture, host, el } = setup();
    host.view.set("day");
    fixture.detectChanges();
    expect(el.querySelector(".foldcalt-title")?.textContent).toContain(
      "20 May 2026",
    );
  });

  it("jumps to the given today", () => {
    const { fixture, host, el } = setup();
    el.querySelector<HTMLElement>(".foldcalt-today")?.click();
    fixture.detectChanges();
    expect(host.date()).toBe("2026-08-02");
  });

  it("offers a switch per view and writes the pick back", () => {
    const { fixture, host, el } = setup();
    const options = el.querySelectorAll('[role="radio"]');
    expect(options).toHaveLength(4);

    const week = [...options].find((o) => o.textContent?.trim() === "Week");
    if (!(week instanceof HTMLElement)) {
      throw new Error("no week option rendered");
    }
    week.click();
    fixture.detectChanges();
    expect(host.view()).toBe("week");
  });

  it("projects the caller's own actions", () => {
    const { el } = setup();
    expect(el.querySelector(".cta")?.textContent).toContain("New event");
  });
});

@Component({
  standalone: true,
  imports: [FoldCalendarToolbarComponent, FoldCalendarTitleDirective],
  template: `
    <fold-calendar-toolbar
      [(date)]="date"
      [(view)]="view"
      [views]="views"
      locale="en-GB"
    >
      <ng-template foldCalendarTitle let-title let-from="from">
        <h1 class="custom-title">{{ title }} — from {{ from }}</h1>
      </ng-template>
    </fold-calendar-toolbar>
  `,
})
class ExtendedHostComponent {
  readonly date = signal("2026-05-18");
  readonly view = signal("month");
  readonly views = ["month", { value: "rooms", label: "Rooms" }];
}

describe("FoldCalendarToolbarComponent — an app's own view", () => {
  it("offers it in the switch alongside the built-ins", () => {
    const fixture = TestBed.createComponent(ExtendedHostComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    const labels = [...el.querySelectorAll("fold-view-toggle button")].map(
      (n) => n.textContent?.trim(),
    );
    expect(labels).toEqual(["Month", "Rooms"]);
  });

  it("replaces the title, at the heading level the page needs", () => {
    const fixture = TestBed.createComponent(ExtendedHostComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector("h2")).toBeNull();
    expect(el.querySelector(".custom-title")?.textContent).toBe(
      "May 2026 — from 2026-04-27",
    );
  });
});
