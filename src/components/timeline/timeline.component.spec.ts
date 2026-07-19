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
    [nodes]="nodes()"
    (nodeClick)="clicked.set($event)"
  />`,
})
class HostComponent {
  readonly ariaLabel = signal<string | undefined>(undefined);
  readonly nodeTitle = signal("");
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
  const nodes = (): HTMLButtonElement[] =>
    Array.from(host.querySelectorAll("button.node"));
  return { fixture, host, nodes };
}

describe("Sh3TimelineComponent", () => {
  it("renders one node button per node", () => {
    const { nodes } = render();
    expect(nodes()).toHaveLength(2);
    expect(nodes()[1].textContent).toContain("Avenant 1");
  });

  it("renders inert (id === null) nodes as disabled, the rest enabled", () => {
    const { nodes } = render();
    expect(nodes()[0].disabled).toBe(true); // start
    expect(nodes()[0].classList.contains("inert")).toBe(true);
    expect(nodes()[1].disabled).toBe(false);
  });

  it("emits the id on click, never for an inert node", () => {
    const { fixture, nodes } = render();
    nodes()[0].click(); // inert
    expect(fixture.componentInstance.clicked()).toBeNull();
    nodes()[1].click();
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
    const { fixture, nodes } = render();
    fixture.componentInstance.nodeTitle.set("Aller à l’avenant");
    fixture.detectChanges();
    expect(nodes()[0].getAttribute("title")).toBe(""); // inert
    expect(nodes()[1].getAttribute("title")).toBe("Aller à l’avenant");
  });
});
