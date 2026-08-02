import { Component, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, expect, it } from "vitest";

import { FoldCalendarDayComponent } from "./calendar-day.component";
import type { FoldCalendarEvent } from "./calendar.types";

const DAY = "2026-05-20";

@Component({
  standalone: true,
  imports: [FoldCalendarDayComponent],
  template: `
    <fold-calendar-day
      [date]="date()"
      [events]="events()"
      [today]="today()"
      locale="en-GB"
      (eventClick)="clicked.set($event)"
    >
      <button empty type="button" class="cta">New request</button>
    </fold-calendar-day>
  `,
})
class HostComponent {
  readonly date = signal(DAY);
  readonly events = signal<readonly FoldCalendarEvent[]>([]);
  readonly today = signal<string | undefined>(undefined);
  readonly clicked = signal<FoldCalendarEvent | null>(null);
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

describe("FoldCalendarDayComponent", () => {
  it("heads the day with its number and localised weekday", () => {
    const { el } = setup();
    expect(el.querySelector(".foldcald-daynum")?.textContent?.trim()).toBe(
      "20",
    );
    expect(el.querySelector(".foldcald-weekday")?.textContent).toContain(
      "Wednesday",
    );
  });

  it("shows the empty state and its projected action when nothing sits on the day", () => {
    const { el } = setup();
    expect(el.querySelector(".foldcald-empty")?.textContent).toContain(
      "Nothing on this day",
    );
    expect(el.querySelector(".cta")).not.toBeNull();
    expect(el.querySelector(".foldcald-list")).toBeNull();
  });

  it("lists only the events covering the day, spans included", () => {
    const { fixture, host, el } = setup();
    host.events.set([
      { id: "covers", start: "2026-05-18", end: "2026-05-22", label: "Span" },
      { id: "same", start: DAY, end: DAY, label: "Single" },
      {
        id: "other",
        start: "2026-05-25",
        end: "2026-05-25",
        label: "Elsewhere",
      },
    ]);
    fixture.detectChanges();

    const labels = [...el.querySelectorAll(".foldcal-chip-label")].map((n) =>
      n.textContent?.trim(),
    );
    expect(labels).toEqual(["Span", "Single"]);
    expect(el.querySelector(".foldcald-empty")).toBeNull();
  });

  it("marks the header when the day is today", () => {
    const { fixture, host, el } = setup();
    host.today.set(DAY);
    fixture.detectChanges();

    const number = el.querySelector(".foldcald-daynum");
    expect(number?.classList).toContain("is-today");
    expect(number?.getAttribute("aria-current")).toBe("date");
  });

  it("emits the activated event", () => {
    const { fixture, host, el } = setup();
    host.events.set([{ id: "e1", start: DAY, end: DAY, label: "Kickoff" }]);
    fixture.detectChanges();

    el.querySelector<HTMLElement>(".foldcal-chip")?.click();
    expect(host.clicked()?.id).toBe("e1");
  });
});
