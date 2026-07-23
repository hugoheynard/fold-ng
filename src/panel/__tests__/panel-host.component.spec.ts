import { Component, type TemplateRef, ViewChild, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";

import { FoldPanelHostComponent } from "../panel-host.component";
import { FoldPanelHostService } from "../panel-host.service";
import type {
  FoldPanelSide,
  FoldTemplatePanelDescriptor,
} from "../panel.types";

@Component({ template: `<ng-template #t>x</ng-template>` })
class TplHostComponent {
  @ViewChild("t", { static: true }) tpl!: TemplateRef<unknown>;
}

@Component({ standalone: true, template: `<p>panel body</p>` })
class DummyPanelComponent {}

describe("FoldPanelHostComponent", () => {
  let host: FoldPanelHostService;
  let tpl: TemplateRef<unknown>;

  function present(
    title: string,
    side: FoldPanelSide,
    onClose: () => void = () => undefined,
  ): void {
    const descriptor: Omit<FoldTemplatePanelDescriptor, "id" | "kind"> = {
      templateRef: tpl,
      side,
      title: signal(title),
      subtitle: signal(""),
      width: signal(480),
      onClose,
    };
    host.present(descriptor);
  }

  function render() {
    const fixture = TestBed.createComponent(FoldPanelHostComponent);
    fixture.detectChanges();
    const root: HTMLElement = fixture.nativeElement;
    return { fixture, root };
  }

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [FoldPanelHostService] });
    host = TestBed.inject(FoldPanelHostService);
    const tplFixture = TestBed.createComponent(TplHostComponent);
    tplFixture.detectChanges();
    tpl = tplFixture.componentInstance.tpl;
  });

  it("renders one scrim per active panel", () => {
    present("A", "right");
    present("B", "right");
    const { root } = render();
    expect(root.querySelectorAll(".panel-dock").length).toBe(2);
  });

  it("marks left-side panels with the left modifier", () => {
    present("Left", "left");
    const { root } = render();
    const scrim = root.querySelector(".panel-dock");
    expect(scrim?.classList.contains("panel-dock--left")).toBe(true);
    expect(
      root.querySelector(".panel")?.classList.contains("panel--left"),
    ).toBe(true);
  });

  it("Escape closes the top-most (last-opened) panel only", () => {
    let closedA = 0;
    let closedB = 0;
    present("A", "right", () => (closedA += 1));
    present("B", "right", () => (closedB += 1));
    const { fixture } = render();

    document.dispatchEvent(
      new KeyboardEvent("keydown", { key: "Escape", bubbles: true }),
    );
    fixture.detectChanges();
    expect(closedB).toBe(1);
    expect(closedA).toBe(0);
  });

  it("renders nothing when there are no panels", () => {
    const { root } = render();
    expect(root.querySelector(".panel-dock")).toBeNull();
  });

  it("labels a template panel dialog with its title", () => {
    present("My Panel", "right");
    const { root } = render();
    const aside = root.querySelector(".panel")!;
    expect(aside.getAttribute("aria-label")).toBe("My Panel");
    expect(aside.getAttribute("aria-labelledby")).toBeNull();
  });

  it("names a component panel via aria-labelledby → its header title id", () => {
    host.open(DummyPanelComponent);
    const { root } = render();
    const aside = root.querySelector(".panel")!;
    expect(aside.getAttribute("aria-labelledby")).toMatch(
      /^fold-panel-title-\d+$/,
    );
    expect(aside.getAttribute("aria-label")).toBeNull();
  });

  it("uses an explicit aria-label when the config supplies one", () => {
    host.open(DummyPanelComponent, { ariaLabel: "Node settings" });
    const { root } = render();
    const aside = root.querySelector(".panel")!;
    expect(aside.getAttribute("aria-label")).toBe("Node settings");
    expect(aside.getAttribute("aria-labelledby")).toBeNull();
  });

  it("inerts background siblings while open, and restores them on close", () => {
    const { fixture } = render();
    document.body.appendChild(fixture.nativeElement);
    const sibling = document.createElement("div");
    document.body.appendChild(sibling);

    present("A", "right");
    fixture.detectChanges();
    expect(sibling.hasAttribute("inert")).toBe(true);

    host.dismissAll();
    fixture.detectChanges();
    expect(sibling.hasAttribute("inert")).toBe(false);

    fixture.nativeElement.remove();
    sibling.remove();
  });
});
