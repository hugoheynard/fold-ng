import { Component, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import {
  Sh3TimelineComponent,
  type Sh3TimelineNode,
} from "./timeline.component";

@Component({
  standalone: true,
  imports: [Sh3TimelineComponent],
  template: `<sh3-timeline
    [ariaLabel]="ariaLabel()"
    [nodeTitle]="nodeTitle()"
    [orientation]="orientation()"
    [progress]="progress()"
    [square]="square()"
    [datePlacement]="datePlacement()"
    [nodes]="nodes()"
    (nodeClick)="clicked.set($event)"
  />`,
})
class HostComponent {
  readonly ariaLabel = signal<string | undefined>(undefined);
  readonly nodeTitle = signal("");
  readonly orientation = signal<"vertical" | "horizontal">("vertical");
  readonly progress = signal<number | null>(null);
  readonly square = signal(false);
  readonly datePlacement = signal<"above" | "below">("above");
  readonly nodes = signal<readonly Sh3TimelineNode[]>([
    { key: "start", id: null, label: "Start", icon: "contracts" },
    { key: "a1", id: "add_1", label: "Avenant 1", date: null, icon: "edit" },
  ]);
  readonly clicked = signal<string | null>(null);
}

function render() {
  const fixture = TestBed.createComponent(HostComponent);
  fixture.detectChanges();
  const host = fixture.nativeElement.querySelector(
    "sh3-timeline",
  ) as HTMLElement;
  /** Every node element (buttons + presentational divs). */
  const nodeEls = (): HTMLElement[] =>
    Array.from(host.querySelectorAll(".node"));
  /** Only the navigable nodes (rendered as buttons). */
  const buttons = (): HTMLButtonElement[] =>
    Array.from(host.querySelectorAll("button.node"));
  return { fixture, host, nodeEls, buttons };
}

describe("Sh3TimelineComponent", () => {
  it("renders one node per entry; only clickable ones are <button>", () => {
    const { nodeEls, buttons } = render();
    expect(nodeEls()).toHaveLength(2);
    expect(buttons()).toHaveLength(1); // only the addendum is navigable
    expect(buttons()[0].textContent).toContain("Avenant 1");
  });

  it("renders an inert (id === null) node as presentational, not a button", () => {
    const { nodeEls, buttons } = render();
    expect(nodeEls()[0].tagName).toBe("DIV"); // the anchor
    expect(nodeEls()[0].classList.contains("inert")).toBe(true);
    expect(buttons()[0].tagName).toBe("BUTTON"); // the addendum
    expect(buttons()[0].classList.contains("inert")).toBe(false);
  });

  it("emits the id on click of a navigable node", () => {
    const { fixture, buttons } = render();
    buttons()[0].click();
    expect(fixture.componentInstance.clicked()).toBe("add_1");
  });

  it("is surface-agnostic (no card) and labels its nav for AT", () => {
    const { fixture, host } = render();
    const nav = host.querySelector("nav.tlv");
    expect(nav).not.toBeNull();
    expect(host.querySelector("sh3-card")).toBeNull(); // no baked-in surface
    expect(nav?.getAttribute("aria-label")).toBeNull();

    fixture.componentInstance.ariaLabel.set("Chronologie");
    fixture.detectChanges();
    expect(nav?.getAttribute("aria-label")).toBe("Chronologie");
  });

  it("puts the nodeTitle on clickable nodes only", () => {
    const { fixture, nodeEls, buttons } = render();
    fixture.componentInstance.nodeTitle.set("Aller à l’avenant");
    fixture.detectChanges();
    expect(nodeEls()[0].getAttribute("title")).toBeNull(); // inert div
    expect(buttons()[0].getAttribute("title")).toBe("Aller à l’avenant");
  });

  it("fills the inert anchor by default (done ?? id === null)", () => {
    const { nodeEls, buttons } = render();
    expect(nodeEls()[0].classList.contains("filled")).toBe(true); // anchor
    expect(buttons()[0].classList.contains("filled")).toBe(false); // clickable
  });

  it("presentational timeline (no navigable node) is a role=group, not a nav, with no buttons", () => {
    const { fixture, host, nodeEls, buttons } = render();
    fixture.componentInstance.orientation.set("horizontal");
    fixture.componentInstance.progress.set(50);
    fixture.componentInstance.nodes.set([
      { key: "s1", id: null, label: "Créé", done: true },
      { key: "s2", id: null, label: "Actif", done: false },
    ]);
    fixture.detectChanges();

    // Not a navigation landmark — a labelled group of status items.
    expect(host.querySelector("nav")).toBeNull();
    const group = host.querySelector('[role="group"].tlv.h');
    expect(group).not.toBeNull();
    expect(buttons()).toHaveLength(0); // pure status, no button semantics

    const fill = host.querySelector<HTMLElement>(".rail-fill");
    expect(fill?.style.width).toBe("50%");
    // `done` overrides the inert-anchor rule: done → filled, not-done → not.
    expect(nodeEls()[0].classList.contains("filled")).toBe(true);
    expect(nodeEls()[1].classList.contains("filled")).toBe(false);
  });

  it("renders no progress line when progress is null", () => {
    const { fixture, host } = render();
    fixture.componentInstance.orientation.set("horizontal");
    fixture.detectChanges();
    expect(host.querySelector(".rail")).toBeNull();
  });

  it("prefers a node's displayDate over its Date, formatting Date otherwise", () => {
    const { fixture, host } = render();
    fixture.componentInstance.nodes.set([
      { key: "a", id: null, label: "A", displayDate: "Q1 2024" },
      { key: "b", id: "b", label: "B", date: new Date("2024-06-01T00:00:00Z") },
    ]);
    fixture.detectChanges();
    const dates = Array.from(host.querySelectorAll(".date")).map((d) =>
      d.textContent?.trim(),
    );
    expect(dates[0]).toBe("Q1 2024"); // displayDate wins
    expect(dates[1]).toContain("2024"); // Date formatted by the pipe
  });

  it("toggles square dots and date placement via the container classes", () => {
    const { fixture, host } = render();
    const root = host.querySelector(".tlv")!;
    expect(root.classList.contains("square")).toBe(false);
    expect(root.classList.contains("date-below")).toBe(false);

    fixture.componentInstance.square.set(true);
    fixture.componentInstance.datePlacement.set("below");
    fixture.detectChanges();
    expect(root.classList.contains("square")).toBe(true);
    expect(root.classList.contains("date-below")).toBe(true);
  });
});
