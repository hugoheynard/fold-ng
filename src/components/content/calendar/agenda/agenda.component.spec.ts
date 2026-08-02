import { Component, signal } from "@angular/core";
import { TestBed, type ComponentFixture } from "@angular/core/testing";
import { describe, expect, it } from "vitest";

import type { FoldCalendarAgendaMode } from "../core/agenda";
import { FoldCalendarAgendaComponent } from "./agenda.component";
import { FoldCalendarHeadingDirective } from "../core/slots.directive";
import type { FoldCalendarEvent } from "../core/types";

const FROM = "2026-05-18";

const EVENTS: readonly FoldCalendarEvent[] = [
  { id: "plain", start: "2026-05-19", end: "2026-05-19", label: "Standup" },
  {
    id: "pending",
    start: "2026-05-20",
    end: "2026-05-20",
    label: "Contract to sign",
    tone: "warning",
  },
  {
    id: "due",
    start: "2026-05-21",
    end: "2026-05-21",
    label: "Overdue",
    tone: "alert",
  },
];

@Component({
  standalone: true,
  imports: [FoldCalendarAgendaComponent],
  template: `
    <fold-calendar-agenda
      [from]="from"
      [events]="events()"
      [limit]="limit()"
      [(mode)]="mode"
      [(collapsed)]="collapsed"
      locale="en-GB"
      (dayClick)="clickedDay.set($event)"
      (eventClick)="clickedEvent.set($event)"
    />
  `,
})
class HostComponent {
  readonly from = FROM;
  readonly events = signal<readonly FoldCalendarEvent[]>(EVENTS);
  readonly limit = signal(8);
  readonly mode = signal<FoldCalendarAgendaMode>("todo");
  readonly collapsed = signal(false);
  readonly clickedDay = signal<string | null>(null);
  readonly clickedEvent = signal<FoldCalendarEvent | null>(null);
}

@Component({
  standalone: true,
  imports: [FoldCalendarAgendaComponent, FoldCalendarHeadingDirective],
  template: `
    <fold-calendar-agenda [from]="from" [events]="events" mode="all">
      <ng-template foldCalendarHeading let-date let-events="events">
        <span class="custom-heading">{{ date }}/{{ events.length }}</span>
      </ng-template>
    </fold-calendar-agenda>
  `,
})
class HeadingHostComponent {
  readonly from = FROM;
  readonly events = EVENTS;
}

function setup(): {
  fixture: ComponentFixture<HostComponent>;
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

function text(el: HTMLElement, selector: string): string {
  return el.querySelector(selector)?.textContent?.trim() ?? "";
}

describe("FoldCalendarAgendaComponent — slices", () => {
  it("opens on the todo slice, keeping only what asks for attention", () => {
    const { el } = setup();
    const labels = [...el.querySelectorAll(".foldcal-chip-label")].map((n) =>
      n.textContent?.trim(),
    );
    expect(labels).toEqual(["Contract to sign", "Overdue"]);
  });

  it("switches slice through the two-way model", () => {
    const { fixture, host, el } = setup();
    const buttons = [...el.querySelectorAll(".foldcala-modes button")];
    (buttons[1] as HTMLElement).click();
    fixture.detectChanges();

    expect(host.mode()).toBe("all");
    expect(el.querySelectorAll(".foldcal-chip")).toHaveLength(3);
  });

  it("badges the attention count in either slice", () => {
    const { fixture, host, el } = setup();
    expect(text(el, ".foldcala-count")).toBe("2");

    host.mode.set("all");
    fixture.detectChanges();
    expect(text(el, ".foldcala-count")).toBe("2");
  });

  it("names the empty state after the slice it is empty in", () => {
    const { fixture, host, el } = setup();
    host.events.set([]);
    fixture.detectChanges();
    expect(text(el, ".foldcala-empty")).toBe(
      "Nothing to handle — all up to date.",
    );

    host.mode.set("all");
    fixture.detectChanges();
    expect(text(el, ".foldcala-empty")).toBe("Nothing coming up.");
  });
});

describe("FoldCalendarAgendaComponent — collapsing", () => {
  it("collapses to a spine and back through the two-way model", () => {
    const { fixture, host, el } = setup();
    expect(el.querySelector(".foldcala-spine")).toBeNull();

    host.collapsed.set(true);
    fixture.detectChanges();
    const spine = el.querySelector(".foldcala-spine");
    expect(spine).not.toBeNull();
    expect(spine?.getAttribute("aria-expanded")).toBe("false");
    expect(spine?.getAttribute("aria-label")).toBe("Expand");

    (spine as HTMLElement).click();
    fixture.detectChanges();
    expect(host.collapsed()).toBe(false);
  });

  it("names on the spine what opening the rail will show", () => {
    const { fixture, host, el } = setup();
    host.collapsed.set(true);
    fixture.detectChanges();
    expect(text(el, ".foldcala-spine-label")).toBe("To handle");

    // It used to say "To handle" here even in the upcoming slice.
    host.mode.set("all");
    fixture.detectChanges();
    expect(text(el, ".foldcala-spine-label")).toBe("Upcoming");
  });

  it("keeps the badge on the collapsed spine", () => {
    const { fixture, host, el } = setup();
    host.collapsed.set(true);
    fixture.detectChanges();
    expect(text(el, ".foldcala-spine-count")).toBe("2");
  });
});

describe("FoldCalendarAgendaComponent — accessibility", () => {
  it("gives the slice switch its own name, not the rail's", () => {
    // Two nested regions sharing one accessible name is one region too few.
    const { el } = setup();
    expect(el.querySelector(".foldcala")?.getAttribute("aria-label")).toBe(
      "Agenda",
    );
    expect(
      el.querySelector(".foldcala-modes")?.getAttribute("aria-label"),
    ).toBe("Agenda slice");
  });

  it("carries the slice state as aria-pressed, not only as colour", () => {
    const { el } = setup();
    const buttons = [...el.querySelectorAll(".foldcala-modes button")];
    expect(buttons.map((b) => b.getAttribute("aria-pressed"))).toEqual([
      "true",
      "false",
    ]);
  });
});

describe("FoldCalendarAgendaComponent — truncation", () => {
  it("says there is more rather than looking like the end", () => {
    const { fixture, host, el } = setup();
    host.mode.set("all");
    host.limit.set(1);
    fixture.detectChanges();

    expect(el.querySelectorAll(".foldcala-group")).toHaveLength(1);
    expect(text(el, ".foldcala-more")).toBe("2 more days");
  });

  it("never renders an empty rail because the limit was zero", () => {
    const { fixture, host, el } = setup();
    host.limit.set(0);
    fixture.detectChanges();
    expect(el.querySelector(".foldcala-empty")).toBeNull();
    expect(el.querySelectorAll(".foldcala-group").length).toBeGreaterThan(0);
  });
});

describe("FoldCalendarAgendaComponent — outputs and naming", () => {
  it("emits the day from its heading and the event from its row", () => {
    const { fixture, host, el } = setup();
    (el.querySelector(".foldcala-date") as HTMLElement).click();
    fixture.detectChanges();
    expect(host.clickedDay()).toBe("2026-05-20");

    (el.querySelector(".foldcal-chip") as HTMLElement).click();
    fixture.detectChanges();
    expect(host.clickedEvent()?.id).toBe("pending");
  });

  it("names a near day relatively, because that reads faster than a date", () => {
    const { fixture, host, el } = setup();
    host.mode.set("all");
    host.events.set([
      { id: "now", start: FROM, end: FROM, label: "Today's" },
      { id: "next", start: "2026-05-19", end: "2026-05-19", label: "Tomorrow" },
      { id: "far", start: "2026-06-30", end: "2026-06-30", label: "Later" },
    ]);
    fixture.detectChanges();

    const names = [...el.querySelectorAll(".foldcala-dname")].map((n) =>
      n.textContent?.trim(),
    );
    expect(names).toEqual(["Today", "Tomorrow", "Tuesday"]);

    // The month only appears once the weekday alone stops locating the day.
    const months = [...el.querySelectorAll(".foldcala-dmonth")].map((n) =>
      n.textContent?.trim(),
    );
    expect(months).toEqual(["Jun"]);
  });
});

describe("FoldCalendarAgendaComponent — heading template", () => {
  it("replaces the day heading and hands it that day's events", () => {
    const fixture = TestBed.createComponent(HeadingHostComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector(".custom-heading")?.textContent).toBe(
      "2026-05-19/1",
    );
    expect(el.querySelector(".foldcala-daynum")).toBeNull();
  });
});
