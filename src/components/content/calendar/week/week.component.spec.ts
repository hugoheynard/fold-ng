import { Component, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, expect, it } from "vitest";

import { FoldCalendarWeekComponent } from "./week.component";
import type { FoldCalendarEvent } from "../core/types";

/** 2026-05-20 is a Wednesday; its week runs Mon 18 → Sun 24. */
const WEDNESDAY = "2026-05-20";

@Component({
  standalone: true,
  imports: [FoldCalendarWeekComponent],
  template: `
    <fold-calendar-week
      [(date)]="date"
      [events]="events()"
      [today]="today()"
      locale="en-GB"
      (dayClick)="clickedDay.set($event)"
      (eventClick)="clickedEvent.set($event)"
    />
  `,
})
class HostComponent {
  readonly date = signal(WEDNESDAY);
  readonly events = signal<readonly FoldCalendarEvent[]>([]);
  readonly today = signal<string | undefined>(undefined);
  readonly clickedDay = signal<string | null>(null);
  readonly clickedEvent = signal<FoldCalendarEvent | null>(null);
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

describe("FoldCalendarWeekComponent", () => {
  it("renders seven columns anchored on the week start", () => {
    const { el } = setup();
    const columns = el.querySelectorAll(".foldcalw-col");
    expect(columns).toHaveLength(7);

    const numbers = [...el.querySelectorAll(".foldcalw-daynum")].map((n) =>
      n.textContent?.trim(),
    );
    expect(numbers).toEqual(["18", "19", "20", "21", "22", "23", "24"]);
  });

  it("names each column by its full date", () => {
    const { el } = setup();
    const first = el.querySelector(".foldcalw-col");
    expect(first?.getAttribute("aria-label")).toContain("18 May 2026");
  });

  it("lists a multi-day event under every day it covers", () => {
    const { fixture, host, el } = setup();
    host.events.set([
      { id: "e1", start: "2026-05-19", end: "2026-05-21", label: "Tour" },
    ]);
    fixture.detectChanges();

    // No packing here: the chip repeats under each covered day.
    expect(el.querySelectorAll(".foldcal-chip")).toHaveLength(3);
    const columns = [...el.querySelectorAll(".foldcalw-col")];
    expect(columns[0]?.querySelectorAll(".foldcal-chip")).toHaveLength(0);
    expect(columns[1]?.querySelectorAll(".foldcal-chip")).toHaveLength(1);
    expect(columns[3]?.querySelectorAll(".foldcal-chip")).toHaveLength(1);
    expect(columns[4]?.querySelectorAll(".foldcal-chip")).toHaveLength(0);
  });

  it("renders the subline and the tone", () => {
    const { fixture, host, el } = setup();
    host.events.set([
      {
        id: "e1",
        start: WEDNESDAY,
        end: WEDNESDAY,
        label: "Review",
        subline: "Pending · 2d",
        tone: "warning",
      },
    ]);
    fixture.detectChanges();

    const chip = el.querySelector(".foldcal-chip");
    expect(chip?.getAttribute("data-tone")).toBe("warning");
    expect(el.querySelector(".foldcal-chip-sub")?.textContent?.trim()).toBe(
      "Pending · 2d",
    );
  });

  it("marks today and counts its events in the column name", () => {
    const { fixture, host, el } = setup();
    host.today.set(WEDNESDAY);
    host.events.set([
      { id: "e1", start: WEDNESDAY, end: WEDNESDAY, label: "One" },
    ]);
    fixture.detectChanges();

    const columns = [...el.querySelectorAll(".foldcalw-col")];
    expect(columns[2]?.classList).toContain("is-today");
    expect(columns[2]?.getAttribute("aria-label")).toContain("today");
    expect(columns[2]?.getAttribute("aria-label")).toContain("1 event");
  });

  it("emits the day and the event", () => {
    const { fixture, host, el } = setup();
    host.events.set([
      { id: "e1", start: WEDNESDAY, end: WEDNESDAY, label: "Kickoff" },
    ]);
    fixture.detectChanges();

    el.querySelector<HTMLElement>(".foldcalw-head")?.click();
    expect(host.clickedDay()).toBe("2026-05-18");

    el.querySelector<HTMLElement>(".foldcal-chip")?.click();
    expect(host.clickedEvent()?.id).toBe("e1");
  });

  it("keeps every chip in the natural tab order", () => {
    const { fixture, host, el } = setup();
    host.events.set([
      { id: "e1", start: WEDNESDAY, end: WEDNESDAY, label: "One" },
    ]);
    fixture.detectChanges();

    // Nothing is aria-hidden or tabindex=-1 here: chips nest inside their day.
    const chip = el.querySelector(".foldcal-chip");
    expect(chip?.getAttribute("aria-hidden")).toBeNull();
    expect(chip?.getAttribute("tabindex")).toBeNull();
  });
});
