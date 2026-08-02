import { Component, signal } from "@angular/core";
import { TestBed, type ComponentFixture } from "@angular/core/testing";
import { describe, expect, it } from "vitest";

import { FoldCalendarTimegridComponent } from "./calendar-timegrid.component";
import type { FoldCalendarEvent } from "./calendar.types";

const MONDAY = "2026-05-18";

const EVENTS: readonly FoldCalendarEvent[] = [
  {
    id: "standup",
    start: MONDAY,
    end: MONDAY,
    label: "Standup",
    startTime: "09:00",
    endTime: "09:30",
    icon: "users",
  },
  {
    id: "review",
    start: MONDAY,
    end: MONDAY,
    label: "Review",
    startTime: "09:15",
    endTime: "10:15",
    tone: "warning",
  },
  {
    id: "leave",
    start: "2026-05-19",
    end: "2026-05-20",
    label: "Léa — leave",
  },
];

@Component({
  standalone: true,
  imports: [FoldCalendarTimegridComponent],
  template: `
    <fold-calendar-timegrid
      [date]="date"
      [events]="events()"
      [today]="today()"
      [now]="now()"
      dayStart="08:00"
      dayEnd="18:00"
      weekStartsOn="mon"
      locale="en-GB"
      (dayClick)="clickedDay.set($event)"
      (eventClick)="clickedEvent.set($event)"
    />
  `,
})
class HostComponent {
  readonly date = MONDAY;
  readonly events = signal<readonly FoldCalendarEvent[]>(EVENTS);
  readonly today = signal<string | undefined>(undefined);
  readonly now = signal<string | undefined>(undefined);
  readonly clickedDay = signal<string | null>(null);
  readonly clickedEvent = signal<FoldCalendarEvent | null>(null);
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

describe("FoldCalendarTimegridComponent — structure", () => {
  it("renders a column per day and an hour per gutter mark", () => {
    const { el } = setup();
    expect(el.querySelectorAll(".foldcaltg-col")).toHaveLength(7);
    // 08:00 → 18:00 inclusive of the opening mark, exclusive of the closing one.
    expect(el.querySelectorAll(".foldcaltg-hour")).toHaveLength(10);
  });

  it("positions a block as a percentage, so CSS owns the height", () => {
    const { el } = setup();
    const block = el.querySelector<HTMLElement>(".foldcaltg-block");
    // 09:00 is one hour into a ten-hour window; the standup lasts half of one.
    expect(block?.style.top).toBe("10%");
    expect(block?.style.height).toBe("5%");
  });

  it("shares the width between two meetings that collide", () => {
    const { el } = setup();
    const widths = [
      ...el.querySelectorAll<HTMLElement>(".foldcaltg-block"),
    ].map((node) => node.style.width);
    expect(widths).toEqual(["50%", "50%"]);
  });

  it("puts an all-day event on the strip, not on the clock", () => {
    const { el } = setup();
    expect(el.querySelectorAll(".foldcaltg-band")).toHaveLength(1);
    expect(el.querySelector(".foldcaltg-band")?.textContent).toContain("Léa");
    expect(el.querySelectorAll(".foldcaltg-block")).toHaveLength(2);
  });

  it("hides the strip entirely when nothing spans", () => {
    const { fixture, host, el } = setup();
    host.events.set(EVENTS.filter((event) => event.id !== "leave"));
    fixture.detectChanges();
    expect(el.querySelector(".foldcaltg-allday")).toBeNull();
  });
});

describe("FoldCalendarTimegridComponent — the now line", () => {
  it("draws nothing without a `now`, since the package owns no clock", () => {
    const { fixture, host, el } = setup();
    host.today.set(MONDAY);
    fixture.detectChanges();
    expect(el.querySelector(".foldcaltg-now")).toBeNull();
  });

  it("draws it on today's column, at the fraction of the window", () => {
    const { fixture, host, el } = setup();
    host.today.set(MONDAY);
    host.now.set("13:00");
    fixture.detectChanges();

    const line = el.querySelector<HTMLElement>(".foldcaltg-now");
    expect(line?.style.top).toBe("50%"); // 13:00 in an 08:00–18:00 window
    expect(el.querySelectorAll(".foldcaltg-now")).toHaveLength(1);
  });

  it("draws nothing when now falls outside the visible window", () => {
    const { fixture, host, el } = setup();
    host.today.set(MONDAY);
    host.now.set("06:00");
    fixture.detectChanges();
    expect(el.querySelector(".foldcaltg-now")).toBeNull();
  });

  it("draws nothing when today is not on screen", () => {
    const { fixture, host, el } = setup();
    host.today.set("2026-07-01");
    host.now.set("13:00");
    fixture.detectChanges();
    expect(el.querySelector(".foldcaltg-now")).toBeNull();
  });
});

describe("FoldCalendarTimegridComponent — accessibility", () => {
  it("names a block with its times, which the clock only shows visually", () => {
    const { el } = setup();
    // The padding is the locale's business (`9:00` in en-GB, `9:00 AM` in
    // en-US) — asserting it would lock a CLDR detail. What must hold is that
    // both ends and the label are in the name.
    const label =
      el.querySelector(".foldcaltg-block")?.getAttribute("aria-label") ?? "";
    expect(label).toContain("9:00");
    expect(label).toContain("9:30");
    expect(label).toContain("Standup");
  });

  it("names a column with its date and its load", () => {
    const { fixture, host, el } = setup();
    host.today.set(MONDAY);
    fixture.detectChanges();
    const label =
      el.querySelector(".foldcaltg-dayhead")?.getAttribute("aria-label") ?? "";
    expect(label).toContain("18 May 2026");
    expect(label).toContain("today");
    expect(label).toContain("2 events");
  });

  it("marks today's column with aria-current, not only a colour", () => {
    const { fixture, host, el } = setup();
    host.today.set(MONDAY);
    fixture.detectChanges();
    expect(
      el.querySelector(".foldcaltg-dayhead")?.getAttribute("aria-current"),
    ).toBe("date");
  });

  it("keeps every block and band a real button in the tab order", () => {
    const { el } = setup();
    for (const node of el.querySelectorAll(
      ".foldcaltg-block, .foldcaltg-band",
    )) {
      expect(node.tagName).toBe("BUTTON");
      expect(node.getAttribute("aria-hidden")).toBeNull();
    }
  });
});

describe("FoldCalendarTimegridComponent — a block is one line tall", () => {
  it("puts the glyph beside the label, never above it", () => {
    // A half-hour block is one line: an icon stacked over the label pushes the
    // label out of the block, which is how it shipped the first time.
    const { el } = setup();
    const block = el.querySelector(".foldcaltg-block");
    const icon = block?.querySelector(".foldcaltg-block-icon");
    expect(icon).not.toBeNull();
    expect(icon?.parentElement).toBe(block);
    expect(
      block?.querySelector(".foldcaltg-block-body .foldcaltg-block-icon"),
    ).toBeNull();
  });
});

describe("FoldCalendarTimegridComponent — outputs", () => {
  it("emits the day from a header and the event from a block or a band", () => {
    const { fixture, host, el } = setup();
    el.querySelector<HTMLElement>(".foldcaltg-dayhead")?.click();
    fixture.detectChanges();
    expect(host.clickedDay()).toBe(MONDAY);

    el.querySelector<HTMLElement>(".foldcaltg-block")?.click();
    fixture.detectChanges();
    expect(host.clickedEvent()?.id).toBe("standup");

    el.querySelector<HTMLElement>(".foldcaltg-band")?.click();
    fixture.detectChanges();
    expect(host.clickedEvent()?.id).toBe("leave");
  });
});

describe("FoldCalendarTimegridComponent — a day view", () => {
  it("shows one column, anchored on the date itself", () => {
    @Component({
      standalone: true,
      imports: [FoldCalendarTimegridComponent],
      template: `
        <fold-calendar-timegrid date="2026-05-20" dayCount="1" locale="en-GB" />
      `,
    })
    class DayHost {}

    const fixture = TestBed.createComponent(DayHost);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelectorAll(".foldcaltg-col")).toHaveLength(1);
    expect(
      el.querySelector(".foldcaltg-dayhead")?.getAttribute("aria-label"),
    ).toContain("20 May 2026");
  });
});
