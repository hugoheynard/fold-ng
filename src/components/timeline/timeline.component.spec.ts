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
  readonly datePlacement = signal<"above" | "below" | "inline" | "hidden">(
    "below",
  );
  readonly nodes = signal<readonly Sh3TimelineNode[]>([
    { key: "start", id: null, label: "Start", icon: "contracts" },
    { key: "a1", id: "add_1", label: "Avenant 1", date: null, icon: "edit" },
  ]);
  readonly clicked = signal<string | null>(null);
}

@Component({
  standalone: true,
  imports: [Sh3TimelineComponent],
  template: `<sh3-timeline [nodes]="nodes()">
    <ng-template #node let-n>
      <span class="custom">C:{{ n.label }}:{{ n.state }}</span>
    </ng-template>
  </sh3-timeline>`,
})
class TemplateHostComponent {
  readonly nodes = signal<readonly Sh3TimelineNode[]>([
    { key: "b", id: "b", label: "B", state: "pending" },
  ]);
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

  it("`clickable` forces button-ness in both directions, decoupled from id", () => {
    const { fixture, host, buttons } = render();
    fixture.componentInstance.orientation.set("horizontal");
    fixture.componentInstance.nodes.set([
      // clickable step with no id → a button that emits its key
      { key: "step_a", id: null, label: "A", clickable: true },
      // id-bearing node forced presentational
      { key: "b", id: "b", label: "B", clickable: false },
    ]);
    fixture.detectChanges();

    expect(buttons()).toHaveLength(1);
    expect(buttons()[0].textContent).toContain("A");
    // The id-bearing node is a plain element, not a button.
    const nodeEls = Array.from(host.querySelectorAll<HTMLElement>(".node"));
    expect(nodeEls[1].tagName).toBe("DIV");
    // Clicking the id-less clickable node emits its key.
    buttons()[0].click();
    expect(fixture.componentInstance.clicked()).toBe("step_a");
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

  it("horizontal rail is a progressbar; fill derives from done when progress omitted", () => {
    const { fixture, host } = render();
    fixture.componentInstance.orientation.set("horizontal");
    fixture.componentInstance.nodes.set([
      { key: "1", id: null, label: "A", done: true },
      { key: "2", id: null, label: "B", done: true },
      { key: "3", id: null, label: "C", done: false },
      { key: "4", id: null, label: "D", done: false },
    ]);
    fixture.detectChanges();
    const bar = host.querySelector(".rail")!;
    expect(bar.getAttribute("role")).toBe("progressbar");
    // (2 - 1) / (4 - 1) = 33% — the fill reaches the last completed dot.
    expect(bar.getAttribute("aria-valuenow")).toBe("33");
    expect(bar.getAttribute("aria-valuetext")).toBe("2 / 4");
  });

  it("explicit progress overrides the derived fill", () => {
    const { fixture, host } = render();
    fixture.componentInstance.orientation.set("horizontal");
    fixture.componentInstance.progress.set(80);
    fixture.componentInstance.nodes.set([
      { key: "1", id: null, label: "A", done: true },
      { key: "2", id: null, label: "B", done: false },
    ]);
    fixture.detectChanges();
    expect(host.querySelector<HTMLElement>(".rail-fill")?.style.width).toBe(
      "80%",
    );
    expect(host.querySelector(".rail")!.getAttribute("aria-valuenow")).toBe(
      "80",
    );
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

  it("toggles square dots; date sits below by default, `above` opts out", () => {
    const { fixture, host } = render();
    const root = host.querySelector(".tlv")!;
    expect(root.classList.contains("square")).toBe(false);
    // Default placement is 'below' → no opt-out class.
    expect(root.classList.contains("date-above")).toBe(false);

    fixture.componentInstance.square.set(true);
    fixture.componentInstance.datePlacement.set("above");
    fixture.detectChanges();
    expect(root.classList.contains("square")).toBe(true);
    expect(root.classList.contains("date-above")).toBe(true);
  });

  it("hides every date when datePlacement is 'hidden'", () => {
    const { fixture, host } = render();
    fixture.componentInstance.nodes.set([
      { key: "a", id: null, label: "A", displayDate: "Q1 2024" },
      { key: "b", id: "b", label: "B", date: new Date("2024-06-01T00:00:00Z") },
    ]);
    fixture.componentInstance.datePlacement.set("hidden");
    fixture.detectChanges();
    expect(host.querySelectorAll(".date")).toHaveLength(0);
    // Labels still render.
    expect(host.textContent).toContain("A");
    expect(host.textContent).toContain("B");
  });

  it("puts the date on the same row via the 'inline' class", () => {
    const { fixture, host } = render();
    fixture.componentInstance.datePlacement.set("inline");
    fixture.detectChanges();
    expect(host.querySelector(".tlv")!.classList.contains("date-inline")).toBe(
      true,
    );
  });

  it("marks a node's dot hollow via `variant`", () => {
    const { fixture, host } = render();
    fixture.componentInstance.nodes.set([
      { key: "a", id: null, label: "A", done: true, variant: "hollow" },
      { key: "b", id: null, label: "B", done: true },
    ]);
    fixture.detectChanges();
    const nodes = Array.from(host.querySelectorAll(".node"));
    expect(nodes[0].classList.contains("hollow")).toBe(true);
    expect(nodes[1].classList.contains("hollow")).toBe(false);
  });

  it("renders a projected #node template (with node.state) in place of the label", () => {
    const fixture = TestBed.createComponent(TemplateHostComponent);
    fixture.detectChanges();
    const host = fixture.nativeElement as HTMLElement;
    expect(host.querySelector(".custom")?.textContent).toBe("C:B:pending");
    // The default label span is replaced by the custom content.
    expect(host.querySelector(".nlabel")).toBeNull();
  });
});
