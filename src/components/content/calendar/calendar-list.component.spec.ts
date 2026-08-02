import { Component, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, expect, it } from "vitest";

import { FoldCalendarListComponent } from "./calendar-list.component";
import type { FoldCalendarEvent } from "./calendar.types";

@Component({
  standalone: true,
  imports: [FoldCalendarListComponent],
  template: `
    <fold-calendar-list
      [events]="events()"
      [from]="from()"
      [to]="to()"
      locale="en-GB"
      (eventClick)="clicked.set($event)"
    />
  `,
})
class HostComponent {
  readonly events = signal<readonly FoldCalendarEvent[]>([]);
  readonly from = signal<string | undefined>(undefined);
  readonly to = signal<string | undefined>(undefined);
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

describe("FoldCalendarListComponent", () => {
  it("shows the empty message with nothing to list", () => {
    const { el } = setup();
    expect(el.querySelector(".foldcall-empty")?.textContent).toContain(
      "Nothing in this range",
    );
  });

  it("orders rows by start date regardless of input order", () => {
    const { fixture, host, el } = setup();
    host.events.set([
      { id: "late", start: "2026-05-25", end: "2026-05-25", label: "Late" },
      { id: "early", start: "2026-05-11", end: "2026-05-11", label: "Early" },
      { id: "mid", start: "2026-05-18", end: "2026-05-18", label: "Mid" },
    ]);
    fixture.detectChanges();

    const labels = [...el.querySelectorAll(".foldcall-label")].map((n) =>
      n.textContent?.trim(),
    );
    expect(labels).toEqual(["Early", "Mid", "Late"]);
  });

  it("collapses a single-day span to one date and keeps a real range", () => {
    const { fixture, host, el } = setup();
    host.events.set([
      { id: "one", start: "2026-05-18", end: "2026-05-18", label: "One day" },
      {
        id: "many",
        start: "2026-05-20",
        end: "2026-05-22",
        label: "Three days",
      },
    ]);
    fixture.detectChanges();

    const spans = [...el.querySelectorAll(".foldcall-when")].map((n) =>
      n.textContent?.trim(),
    );
    expect(spans[0]).toBe("18 May");
    // Intl factors out the shared month rather than repeating it: "20 – 22 May".
    expect(spans[1]).toContain("20");
    expect(spans[1]).toContain("22 May");
    expect(spans[1]).not.toBe(spans[0]);
  });

  it("keeps only what overlaps the range when one is given", () => {
    const { fixture, host, el } = setup();
    host.events.set([
      { id: "before", start: "2026-05-01", end: "2026-05-05", label: "Before" },
      { id: "inside", start: "2026-05-18", end: "2026-05-19", label: "Inside" },
    ]);
    host.from.set("2026-05-10");
    host.to.set("2026-05-31");
    fixture.detectChanges();

    const labels = [...el.querySelectorAll(".foldcall-label")].map((n) =>
      n.textContent?.trim(),
    );
    expect(labels).toEqual(["Inside"]);
  });

  it("carries the tone and emits the activated row", () => {
    const { fixture, host, el } = setup();
    host.events.set([
      {
        id: "e1",
        start: "2026-05-18",
        end: "2026-05-18",
        label: "Deadline",
        tone: "alert",
      },
    ]);
    fixture.detectChanges();

    const row = el.querySelector<HTMLElement>(".foldcall-row");
    expect(row?.getAttribute("data-tone")).toBe("alert");
    row?.click();
    expect(host.clicked()?.id).toBe("e1");
  });
});
