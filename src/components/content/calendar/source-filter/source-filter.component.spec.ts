import { Component, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, expect, it } from "vitest";

import { FoldCalendarSourceFilterComponent } from "./source-filter.component";
import type { FoldCalendarEvent, FoldCalendarSource } from "../core/types";

const SOURCES: readonly FoldCalendarSource[] = [
  { key: "programme", label: "Programme" },
  { key: "leave", label: "Leave", tone: "warning" },
  { key: "contracts", label: "Contracts", tone: "success" },
];

const EVENTS: readonly FoldCalendarEvent[] = [
  {
    id: "p1",
    start: "2026-05-18",
    end: "2026-05-18",
    label: "Show",
    sourceKey: "programme",
  },
  {
    id: "p2",
    start: "2026-05-19",
    end: "2026-05-19",
    label: "Rehearsal",
    sourceKey: "programme",
  },
  {
    id: "l1",
    start: "2026-05-20",
    end: "2026-05-20",
    label: "Léa",
    sourceKey: "leave",
  },
  { id: "x1", start: "2026-05-21", end: "2026-05-21", label: "Unsourced" },
];

@Component({
  standalone: true,
  imports: [FoldCalendarSourceFilterComponent],
  template: `
    <fold-calendar-source-filter
      [sources]="sources"
      [events]="events"
      [(active)]="active"
    />
  `,
})
class HostComponent {
  readonly sources = SOURCES;
  readonly events = EVENTS;
  readonly active = signal<ReadonlySet<string> | null>(null);
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

function chip(el: HTMLElement, index: number): HTMLElement {
  const chips = el.querySelectorAll<HTMLElement>(".foldcalsf-chip");
  const found = chips[index];
  if (found === undefined) {
    throw new Error(`no chip at ${index}`);
  }
  return found;
}

describe("FoldCalendarSourceFilterComponent", () => {
  it("renders one chip per source with its live count", () => {
    const { el } = setup();
    expect(el.querySelectorAll(".foldcalsf-chip")).toHaveLength(3);
    const counts = [...el.querySelectorAll(".foldcalsf-count")].map((n) =>
      n.textContent?.trim(),
    );
    expect(counts).toEqual(["2", "1", "0"]);
  });

  it("shows every source while the selection is unset", () => {
    const { el } = setup();
    for (const node of el.querySelectorAll(".foldcalsf-chip")) {
      expect(node.getAttribute("aria-pressed")).toBe("true");
    }
  });

  it("carries the state in the accessible name, not only the colour", () => {
    const { fixture, el } = setup();
    expect(chip(el, 0).getAttribute("aria-label")).toBe("Programme, shown");

    chip(el, 0).click();
    fixture.detectChanges();
    expect(chip(el, 0).getAttribute("aria-label")).toBe("Programme, hidden");
  });

  it("writes a new selection rather than mutating the set", () => {
    const { fixture, host, el } = setup();
    const before = host.active();

    chip(el, 1).click();
    fixture.detectChanges();

    const after = host.active();
    expect(after).not.toBe(before);
    expect(after?.has("leave")).toBe(false);
    expect(after?.has("programme")).toBe(true);
  });

  it("toggles back on", () => {
    const { fixture, host, el } = setup();
    chip(el, 1).click();
    fixture.detectChanges();
    chip(el, 1).click();
    fixture.detectChanges();
    expect(host.active()?.has("leave")).toBe(true);
  });
});

describe("FoldCalendarSourceFilterComponent — selectionChange", () => {
  it("emits a selection that is never null", () => {
    // `active` starts as null ("nothing off yet"); a handler on the model would
    // have to eliminate a case that toggling can never produce.
    @Component({
      standalone: true,
      imports: [FoldCalendarSourceFilterComponent],
      template: `
        <fold-calendar-source-filter
          [sources]="sources"
          [events]="events"
          (selectionChange)="seen.set($event)"
        />
      `,
    })
    class EmitHost {
      readonly sources = SOURCES;
      readonly events = EVENTS;
      readonly seen = signal<ReadonlySet<string> | null>(null);
    }

    const fixture = TestBed.createComponent(EmitHost);
    fixture.detectChanges();
    chip(fixture.nativeElement as HTMLElement, 1).click();
    fixture.detectChanges();

    const seen = fixture.componentInstance.seen();
    expect(seen?.has("leave")).toBe(false);
    expect(seen?.has("programme")).toBe(true);
  });
});
