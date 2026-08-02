import { Component, signal } from "@angular/core";
import { TestBed, type ComponentFixture } from "@angular/core/testing";
import { describe, expect, it } from "vitest";

import { FoldCalendarEventDirective } from "../core/event.directive";
import {
  FoldCalendarDayDirective,
  FoldCalendarOverflowDirective,
} from "../core/slots.directive";
import { FoldCalendarMonthComponent } from "./month.component";
import type { FoldCalendarDay, FoldCalendarEvent } from "../core/types";

/** May 2026: the 1st is a Friday, the 18th a Monday. */
const MAY = "2026-05-18";

@Component({
  standalone: true,
  imports: [FoldCalendarMonthComponent],
  template: `
    <fold-calendar-month
      [(month)]="month"
      [events]="events()"
      [today]="today()"
      [maxLanes]="maxLanes()"
      locale="en-GB"
      (dayClick)="clickedDay.set($event)"
      (eventClick)="clickedEvent.set($event)"
      (overflowClick)="overflowDay.set($event)"
    />
  `,
})
class HostComponent {
  readonly month = signal(MAY);
  readonly events = signal<readonly FoldCalendarEvent[]>([]);
  readonly today = signal<string | undefined>(undefined);
  readonly maxLanes = signal(3);
  readonly clickedDay = signal<string | null>(null);
  readonly clickedEvent = signal<FoldCalendarEvent | null>(null);
  readonly overflowDay = signal<string | null>(null);
}

@Component({
  standalone: true,
  imports: [FoldCalendarMonthComponent, FoldCalendarEventDirective],
  template: `
    <fold-calendar-month [(month)]="month" [events]="events()" locale="en-GB">
      <ng-template foldCalendarEvent let-event>
        <span class="custom-chip">custom:{{ event.label }}</span>
      </ng-template>
    </fold-calendar-month>
  `,
})
class ProjectedHostComponent {
  readonly month = signal(MAY);
  readonly events = signal<readonly FoldCalendarEvent[]>([
    { id: "e1", start: "2026-05-20", end: "2026-05-20", label: "Kickoff" },
  ]);
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

/** The day cell standing for `date`, or a failing expectation. */
function dayCell(el: HTMLElement, date: string): HTMLElement {
  const cell = el.querySelector(`[data-fold-day="${date}"]`);
  if (!(cell instanceof HTMLElement)) {
    throw new Error(`no day cell rendered for ${date}`);
  }
  return cell;
}

describe("FoldCalendarMonthComponent — structure", () => {
  it("renders a named grid of week rows", () => {
    const { el } = setup();
    const grid = el.querySelector('[role="grid"]');
    expect(grid).not.toBeNull();
    expect(grid?.getAttribute("aria-label")).toBe("Calendar");
    // One header row plus the month's week rows.
    expect(el.querySelectorAll('[role="row"]').length).toBeGreaterThan(1);
  });

  it("renders seven localised weekday headers", () => {
    const { el } = setup();
    const headers = [...el.querySelectorAll('[role="columnheader"]')].map(
      (node) => node.textContent?.trim(),
    );
    expect(headers).toHaveLength(7);
    expect(headers[0]).toBe("Mon");
    expect(headers[6]).toBe("Sun");
  });

  it("renders every day of the month plus its padding", () => {
    const { el } = setup();
    expect(el.querySelectorAll('[role="gridcell"]')).toHaveLength(7 * 5);
    expect(dayCell(el, "2026-05-01").textContent?.trim()).toBe("1");
    expect(dayCell(el, "2026-05-31")).toBeTruthy();
  });

  it("marks the padding days as outside the month", () => {
    const { el } = setup();
    expect(dayCell(el, "2026-04-27").classList).toContain("is-outside");
    expect(dayCell(el, "2026-05-01").classList).not.toContain("is-outside");
  });

  it("marks today and exposes it as the current date", () => {
    const { fixture, host, el } = setup();
    host.today.set("2026-05-18");
    fixture.detectChanges();

    const cell = dayCell(el, "2026-05-18");
    expect(cell.classList).toContain("is-today");
    expect(cell.getAttribute("aria-current")).toBe("date");
    expect(cell.getAttribute("aria-label")).toContain("today");
  });
});

describe("FoldCalendarMonthComponent — bands", () => {
  it("places a band across the columns its event covers", () => {
    const { fixture, host, el } = setup();
    host.events.set([
      { id: "e1", start: "2026-05-18", end: "2026-05-20", label: "Sprint" },
    ]);
    fixture.detectChanges();

    const bands = el.querySelectorAll(".foldcal-band");
    expect(bands).toHaveLength(1);
    const band = bands[0];
    expect(band?.textContent).toContain("Sprint");
    // Monday is column 1; Wednesday closes at column 4 (end + 2).
    expect(band?.getAttribute("style")).toContain("grid-column: 1 / 4");
  });

  it("splits a band crossing a week boundary and flags the open edges", () => {
    const { fixture, host, el } = setup();
    host.events.set([
      { id: "e1", start: "2026-05-22", end: "2026-05-26", label: "Tour" },
    ]);
    fixture.detectChanges();

    const bands = [...el.querySelectorAll(".foldcal-band")];
    expect(bands).toHaveLength(2);
    expect(bands[0]?.classList).toContain("continues-after");
    expect(bands[0]?.classList).not.toContain("continues-before");
    expect(bands[1]?.classList).toContain("continues-before");
    expect(bands[1]?.classList).not.toContain("continues-after");
  });

  it("carries the tone as a data attribute", () => {
    const { fixture, host, el } = setup();
    host.events.set([
      {
        id: "e1",
        start: "2026-05-18",
        end: "2026-05-18",
        label: "Done",
        tone: "success",
      },
      { id: "e2", start: "2026-05-20", end: "2026-05-20", label: "Plain" },
    ]);
    fixture.detectChanges();

    const bands = [...el.querySelectorAll(".foldcal-band")];
    expect(bands[0]?.getAttribute("data-tone")).toBe("success");
    expect(bands[1]?.getAttribute("data-tone")).toBe("neutral");
  });

  it("collapses a group into one band showing its size", () => {
    const { fixture, host, el } = setup();
    host.events.set([
      {
        id: "a",
        start: "2026-05-18",
        end: "2026-05-19",
        label: "Ana",
        groupId: "team",
        groupLabel: "Team off",
      },
      {
        id: "b",
        start: "2026-05-18",
        end: "2026-05-19",
        label: "Ben",
        groupId: "team",
      },
    ]);
    fixture.detectChanges();

    const bands = el.querySelectorAll(".foldcal-band");
    expect(bands).toHaveLength(1);
    expect(bands[0]?.textContent).toContain("Team off");
    expect(el.querySelector(".foldcal-band-count")?.textContent?.trim()).toBe(
      "2",
    );
  });

  it("keeps bands out of the accessibility tree and counts them on the day instead", () => {
    const { fixture, host, el } = setup();
    host.events.set([
      { id: "e1", start: "2026-05-20", end: "2026-05-20", label: "One" },
      { id: "e2", start: "2026-05-20", end: "2026-05-20", label: "Two" },
    ]);
    fixture.detectChanges();

    expect(el.querySelector(".foldcal-band")?.getAttribute("aria-hidden")).toBe(
      "true",
    );
    expect(dayCell(el, "2026-05-20").getAttribute("aria-label")).toContain(
      "2 events",
    );
    expect(dayCell(el, "2026-05-21").getAttribute("aria-label")).not.toContain(
      "event",
    );
  });

  it("tints the glyph with the band's tone rather than pinning a colour", () => {
    const { fixture, host, el } = setup();
    host.events.set([
      {
        id: "e1",
        start: "2026-05-18",
        end: "2026-05-18",
        label: "Due",
        tone: "alert",
        icon: "clock",
      },
    ]);
    fixture.detectChanges();

    // The icon must inherit, so it cannot carry a colour of its own.
    const icon = el.querySelector(".foldcal-band-icon");
    expect(icon).not.toBeNull();
    expect(icon?.getAttribute("style")).toBeNull();
  });

  it("shows an overflow chip once a week runs out of lanes", () => {
    const { fixture, host, el } = setup();
    host.events.set(
      Array.from({ length: 5 }, (_unused, index) => ({
        id: `e${index}`,
        start: "2026-05-18",
        end: "2026-05-22",
        label: `Event ${index}`,
      })),
    );
    fixture.detectChanges();

    expect(el.querySelectorAll(".foldcal-band")).toHaveLength(3);
    // One chip per crowded day — Mon to Fri — not one at the end of the row.
    const chips = [...el.querySelectorAll(".foldcal-overflow")];
    expect(chips).toHaveLength(5);
    for (const chip of chips) {
      expect(chip.textContent?.trim()).toBe("+2 more");
    }
  });

  it("puts each overflow chip in the column that lost something", () => {
    const { fixture, host, el } = setup();
    host.events.set([
      { id: "l1", start: "2026-05-18", end: "2026-05-24", label: "Long 1" },
      { id: "l2", start: "2026-05-18", end: "2026-05-24", label: "Long 2" },
      { id: "w1", start: "2026-05-20", end: "2026-05-20", label: "Wed 1" },
      { id: "w2", start: "2026-05-20", end: "2026-05-20", label: "Wed 2" },
    ]);
    fixture.detectChanges();

    const chips = [...el.querySelectorAll(".foldcal-overflow")];
    expect(chips).toHaveLength(1);
    expect(chips[0]?.textContent?.trim()).toBe("+1 more");
    // Wednesday is the third column.
    expect(chips[0]?.getAttribute("style")).toContain("grid-column: 3");
  });
});

describe("FoldCalendarMonthComponent — outputs", () => {
  it("emits the activated day", () => {
    const { host, el } = setup();
    dayCell(el, "2026-05-20").click();
    expect(host.clickedDay()).toBe("2026-05-20");
  });

  it("emits the clicked event, data included", () => {
    const { fixture, host, el } = setup();
    const source = {
      id: "e1",
      start: "2026-05-20",
      end: "2026-05-20",
      label: "Kickoff",
      data: { ref: 42 },
    };
    host.events.set([source]);
    fixture.detectChanges();

    el.querySelector<HTMLElement>(".foldcal-band")?.click();
    expect(host.clickedEvent()?.id).toBe("e1");
    expect(host.clickedEvent()?.data).toEqual({ ref: 42 });
  });

  it("emits the day whose events overflowed", () => {
    const { fixture, host, el } = setup();
    host.events.set(
      Array.from({ length: 5 }, (_unused, index) => ({
        id: `e${index}`,
        start: "2026-05-18",
        end: "2026-05-22",
        label: `Event ${index}`,
      })),
    );
    fixture.detectChanges();

    // The first chip belongs to Monday the 18th.
    el.querySelector<HTMLElement>(".foldcal-overflow")?.click();
    expect(host.overflowDay()).toBe("2026-05-18");
  });
});

describe("FoldCalendarMonthComponent — keyboard", () => {
  it("keeps exactly one tab stop", () => {
    const { el } = setup();
    const stops = [...el.querySelectorAll('[role="gridcell"]')].filter(
      (cell) => cell.getAttribute("tabindex") === "0",
    );
    expect(stops).toHaveLength(1);
  });

  it("puts the tab stop on today when it is on screen", () => {
    const { fixture, host, el } = setup();
    host.today.set("2026-05-18");
    fixture.detectChanges();
    expect(dayCell(el, "2026-05-18").getAttribute("tabindex")).toBe("0");
  });

  it("falls back to the first of the month when today is elsewhere", () => {
    const { el } = setup();
    expect(dayCell(el, "2026-05-01").getAttribute("tabindex")).toBe("0");
  });

  it("moves the tab stop with the arrow keys", () => {
    const { fixture, el } = setup();
    const cell = dayCell(el, "2026-05-20");
    cell.focus();
    cell.dispatchEvent(
      new KeyboardEvent("keydown", { key: "ArrowRight", bubbles: true }),
    );
    fixture.detectChanges();

    expect(dayCell(el, "2026-05-21").getAttribute("tabindex")).toBe("0");
    expect(dayCell(el, "2026-05-20").getAttribute("tabindex")).toBe("-1");
  });

  it("steps a whole week on the vertical arrows", () => {
    const { fixture, el } = setup();
    const cell = dayCell(el, "2026-05-20");
    cell.focus();
    cell.dispatchEvent(
      new KeyboardEvent("keydown", { key: "ArrowDown", bubbles: true }),
    );
    fixture.detectChanges();

    expect(dayCell(el, "2026-05-27").getAttribute("tabindex")).toBe("0");
  });

  it("pages the month when focus leaves the grid, writing back through the model", () => {
    const { fixture, host, el } = setup();
    const cell = dayCell(el, "2026-05-20");
    cell.focus();
    cell.dispatchEvent(
      new KeyboardEvent("keydown", { key: "PageDown", bubbles: true }),
    );
    fixture.detectChanges();

    expect(host.month()).toBe("2026-06-20");
    expect(dayCell(el, "2026-06-20").getAttribute("tabindex")).toBe("0");
  });

  it("leaves keys it does not own to the browser", () => {
    const { fixture, el } = setup();
    const cell = dayCell(el, "2026-05-20");
    cell.focus();
    const event = new KeyboardEvent("keydown", {
      key: "Tab",
      bubbles: true,
      cancelable: true,
    });
    cell.dispatchEvent(event);
    fixture.detectChanges();

    expect(event.defaultPrevented).toBe(false);
  });
});

describe("FoldCalendarMonthComponent — projection", () => {
  it("renders a projected chip template instead of the built-in row", () => {
    const fixture = TestBed.createComponent(ProjectedHostComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;

    expect(el.querySelector(".custom-chip")?.textContent).toBe(
      "custom:Kickoff",
    );
    expect(el.querySelector(".foldcal-band-bar")).toBeNull();
  });
});

@Component({
  standalone: true,
  imports: [FoldCalendarMonthComponent, FoldCalendarDayDirective],
  template: `
    <fold-calendar-month
      [(month)]="month"
      [events]="events()"
      [dayModifiers]="modifiers"
      locale="en-GB"
    >
      <ng-template foldCalendarDay let-day>
        <span class="custom-day"
          >{{ day.dayOfMonth }}·{{ day.eventCount }}</span
        >
      </ng-template>
    </fold-calendar-month>
  `,
})
class DayTemplateHostComponent {
  readonly month = signal(MAY);
  readonly events = signal<readonly FoldCalendarEvent[]>([
    { id: "e1", start: "2026-05-20", end: "2026-05-20", label: "Kickoff" },
  ]);
  readonly modifiers = (day: FoldCalendarDay): readonly string[] =>
    day.date === "2026-05-25" ? ["holiday", "closed"] : [];
}

@Component({
  standalone: true,
  imports: [FoldCalendarMonthComponent, FoldCalendarOverflowDirective],
  template: `
    <fold-calendar-month
      [(month)]="month"
      [events]="events()"
      [maxLanes]="1"
      locale="en-GB"
    >
      <ng-template foldCalendarOverflow let-count let-date="date">
        <span class="custom-more">{{ count }}@{{ date }}</span>
      </ng-template>
    </fold-calendar-month>
  `,
})
class OverflowTemplateHostComponent {
  readonly month = signal(MAY);
  readonly events = signal<readonly FoldCalendarEvent[]>([
    { id: "a", start: "2026-05-20", end: "2026-05-20", label: "A" },
    { id: "b", start: "2026-05-20", end: "2026-05-20", label: "B" },
  ]);
}

describe("FoldCalendarMonthComponent — the cell is the widget", () => {
  it("makes the day a gridcell rather than a button wearing the role", () => {
    // `role="gridcell"` on a <button> replaces its native role, so the cell is
    // the focusable widget instead — which is what the grid pattern asks for.
    const { el } = setup();
    const cell = dayCell(el, MAY);
    expect(cell.getAttribute("role")).toBe("gridcell");
    expect(cell.tagName).not.toBe("BUTTON");
  });

  it("activates on Enter and Space, as the button it replaced would have", () => {
    const { fixture, host, el } = setup();
    const cell = dayCell(el, MAY);

    cell.dispatchEvent(
      new KeyboardEvent("keydown", { key: "Enter", bubbles: true }),
    );
    fixture.detectChanges();
    expect(host.clickedDay()).toBe(MAY);

    host.clickedDay.set(null);
    cell.dispatchEvent(
      new KeyboardEvent("keydown", { key: " ", bubbles: true }),
    );
    fixture.detectChanges();
    expect(host.clickedDay()).toBe(MAY);
  });

  it("puts the grid role on the host, not on a wrapper", () => {
    const { el } = setup();
    const grid = el.querySelector("fold-calendar-month");
    expect(grid?.getAttribute("role")).toBe("grid");
    expect(grid?.getAttribute("aria-label")).toBe("Calendar");
  });
});

describe("FoldCalendarMonthComponent — accessible names", () => {
  it("says how many events a day holds", () => {
    const { fixture, host, el } = setup();
    host.events.set([
      { id: "a", start: "2026-05-20", end: "2026-05-20", label: "A" },
      { id: "b", start: "2026-05-18", end: "2026-05-22", label: "B" },
    ]);
    fixture.detectChanges();
    expect(dayCell(el, "2026-05-20").getAttribute("aria-label")).toContain(
      "2 events",
    );
  });

  it("says how many it is NOT showing, so the lane budget is not silent", () => {
    const { fixture, host, el } = setup();
    host.maxLanes.set(1);
    host.events.set([
      { id: "a", start: "2026-05-20", end: "2026-05-20", label: "A" },
      { id: "b", start: "2026-05-20", end: "2026-05-20", label: "B" },
      { id: "c", start: "2026-05-20", end: "2026-05-20", label: "C" },
    ]);
    fixture.detectChanges();
    const label = dayCell(el, "2026-05-20").getAttribute("aria-label") ?? "";
    expect(label).toContain("3 events");
    expect(label).toContain("2 not shown");
  });
});

describe("FoldCalendarMonthComponent — lane budget from an attribute", () => {
  it("coerces a string attribute instead of concatenating it", () => {
    // `maxLanes="2"` without a transform makes the overflow row `"22"`.
    @Component({
      standalone: true,
      imports: [FoldCalendarMonthComponent],
      template: `<fold-calendar-month month="2026-05-18" maxLanes="1" />`,
    })
    class AttrHost {}

    const fixture = TestBed.createComponent(AttrHost);
    fixture.detectChanges();
    const row = (fixture.nativeElement as HTMLElement).querySelector(
      ".foldcal-week",
    );
    expect(row?.getAttribute("style")).toContain("repeat(1,");
  });
});

describe("FoldCalendarMonthComponent — day cell template", () => {
  it("replaces the inside of the cell and hands it the resolved day", () => {
    const fixture = TestBed.createComponent(DayTemplateHostComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(dayCell(el, "2026-05-20").textContent?.trim()).toBe("20·1");
    expect(el.querySelector(".foldcal-daynum")).toBeNull();
  });

  it("emits the caller's modifiers as one matchable attribute", () => {
    const fixture = TestBed.createComponent(DayTemplateHostComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(
      dayCell(el, "2026-05-25").getAttribute("data-fold-day-modifiers"),
    ).toBe("holiday closed");
    expect(
      dayCell(el, "2026-05-20").getAttribute("data-fold-day-modifiers"),
    ).toBeNull();
    // `~=` is what makes one attribute enough for a consumer's own CSS.
    expect(
      el.querySelectorAll('[data-fold-day-modifiers~="holiday"]'),
    ).toHaveLength(1);
  });
});

describe("FoldCalendarMonthComponent — overflow template", () => {
  it("replaces the +N chip and hands it the count and the day", () => {
    const fixture = TestBed.createComponent(OverflowTemplateHostComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector(".custom-more")?.textContent).toBe("1@2026-05-20");
  });
});

describe("FoldCalendarMonthComponent — paging keeps the focus", () => {
  async function pageDownFrom(
    fixture: ComponentFixture<HostComponent>,
    el: HTMLElement,
    date: string,
  ): Promise<void> {
    const cell = dayCell(el, date);
    cell.focus();
    cell.dispatchEvent(
      new KeyboardEvent("keydown", { key: "PageDown", bubbles: true }),
    );
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
  }

  it("moves focus onto the same day of the next month", async () => {
    const { fixture, host, el } = setup();
    await pageDownFrom(fixture, el, MAY);

    expect(host.month()).toBe("2026-06-18");
    expect(document.activeElement?.getAttribute("data-fold-day")).toBe(
      "2026-06-18",
    );
  });

  it("does it again after the month is put back — the latch is consumed", async () => {
    // The deferred target used to be a signal that was never reset, so
    // repeating the *same* transition wrote the same value, the effect did not
    // re-run, and focus fell onto <body>.
    const { fixture, host, el } = setup();
    await pageDownFrom(fixture, el, MAY);

    host.month.set(MAY);
    fixture.detectChanges();
    await fixture.whenStable();

    await pageDownFrom(fixture, el, MAY);
    expect(document.activeElement?.getAttribute("data-fold-day")).toBe(
      "2026-06-18",
    );
  });
});

describe("FoldCalendarMonthComponent — week numbers", () => {
  @Component({
    standalone: true,
    imports: [FoldCalendarMonthComponent],
    template: `
      <fold-calendar-month month="2026-05-18" showWeekNumbers locale="en-GB" />
    `,
  })
  class WeekNumberHost {}

  it("adds an ISO week column that shifts every placed element with it", () => {
    const fixture = TestBed.createComponent(WeekNumberHost);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;

    const numbers = [...el.querySelectorAll(".foldcal-weeknum")].map((n) =>
      n.textContent?.trim(),
    );
    // May 2026's grid opens on Mon 27 Apr — ISO week 18 — and runs to week 22.
    expect(numbers).toEqual(["18", "19", "20", "21", "22"]);

    // The cells moved over by one: Monday is now the second grid column.
    expect(dayCell(el, "2026-04-27").style.gridColumn).toBe("2");
    // The host flags it so one grid-template definition serves header and rows.
    expect(
      el
        .querySelector("fold-calendar-month")
        ?.classList.contains("has-week-numbers"),
    ).toBe(true);
  });

  it("names the column for a screen reader, since the header is a glyph", () => {
    const fixture = TestBed.createComponent(WeekNumberHost);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(
      el.querySelector(".foldcal-weeknum")?.getAttribute("aria-label"),
    ).toBe("Week 18");
    expect(el.querySelector(".foldcal-weeknum-head")?.textContent?.trim()).toBe(
      "Wk",
    );
  });

  it("has no column at all when it is not asked for", () => {
    const { el } = setup();
    expect(el.querySelector(".foldcal-weeknum")).toBeNull();
    expect(dayCell(el, "2026-04-27").style.gridColumn).toBe("1");
  });
});

describe("FoldCalendarMonthComponent — the locale's own week", () => {
  @Component({
    standalone: true,
    imports: [FoldCalendarMonthComponent],
    template: `<fold-calendar-month month="2026-05-18" [locale]="locale()" />`,
  })
  class LocaleHost {
    readonly locale = signal("en-GB");
  }

  it("takes its anchor from the locale instead of hard-coding Monday", () => {
    const fixture = TestBed.createComponent(LocaleHost);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    const first = () =>
      el
        .querySelector(".foldcal-week [data-fold-day]")
        ?.getAttribute("data-fold-day");

    // en-GB opens on Monday, en-US on Sunday — the whole grid shifts a day.
    expect(first()).toBe("2026-04-27");

    fixture.componentInstance.locale.set("en-US");
    fixture.detectChanges();
    expect(first()).toBe("2026-04-26");
  });

  it("still lets the caller override it", () => {
    @Component({
      standalone: true,
      imports: [FoldCalendarMonthComponent],
      template: `
        <fold-calendar-month
          month="2026-05-18"
          locale="en-US"
          weekStartsOn="mon"
        />
      `,
    })
    class OverrideHost {}

    const fixture = TestBed.createComponent(OverrideHost);
    fixture.detectChanges();
    expect(
      (fixture.nativeElement as HTMLElement)
        .querySelector(".foldcal-week [data-fold-day]")
        ?.getAttribute("data-fold-day"),
    ).toBe("2026-04-27");
  });
});
