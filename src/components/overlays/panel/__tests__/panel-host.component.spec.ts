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
    opts: {
      modal?: boolean;
      surface?: "glass" | "solid";
      disableClose?: boolean;
    } = {},
  ): void {
    const descriptor: Omit<FoldTemplatePanelDescriptor, "id" | "kind"> = {
      templateRef: tpl,
      side,
      title: signal(title),
      subtitle: signal(""),
      width: signal(480),
      onClose,
      ...(opts.modal !== undefined ? { modal: opts.modal } : {}),
      ...(opts.surface !== undefined ? { surface: opts.surface } : {}),
      ...(opts.disableClose !== undefined
        ? { disableClose: opts.disableClose }
        : {}),
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

  it("Escape does NOT close a panel that guards close (disableClose)", () => {
    let closed = 0;
    present("Guarded", "right", () => (closed += 1), { disableClose: true });
    const { fixture } = render();

    document.dispatchEvent(
      new KeyboardEvent("keydown", { key: "Escape", bubbles: true }),
    );
    fixture.detectChanges();
    expect(closed).toBe(0);
  });

  it("a backdrop click does NOT close a disableClose panel", () => {
    let closed = 0;
    present("Guarded", "right", () => (closed += 1), { disableClose: true });
    const { root } = render();

    const dock = root.querySelector<HTMLElement>(".panel-dock")!;
    dock.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    expect(closed).toBe(0);
  });

  it("a backdrop click DOES close an ordinary modal panel", () => {
    let closed = 0;
    present("Plain", "right", () => (closed += 1));
    const { root } = render();

    const dock = root.querySelector<HTMLElement>(".panel-dock")!;
    dock.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    expect(closed).toBe(1);
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

  it("does NOT inert the background for a non-modal panel", () => {
    const { fixture } = render();
    document.body.appendChild(fixture.nativeElement);
    const sibling = document.createElement("div");
    document.body.appendChild(sibling);

    present("A", "right", () => undefined, { modal: false });
    fixture.detectChanges();
    expect(sibling.hasAttribute("inert")).toBe(false);

    fixture.nativeElement.remove();
    sibling.remove();
  });

  it("still inerts when a modal panel is open alongside a non-modal one", () => {
    const { fixture } = render();
    document.body.appendChild(fixture.nativeElement);
    const sibling = document.createElement("div");
    document.body.appendChild(sibling);

    present("non-modal", "right", () => undefined, { modal: false });
    present("modal", "right");
    fixture.detectChanges();
    expect(sibling.hasAttribute("inert")).toBe(true);

    fixture.nativeElement.remove();
    sibling.remove();
  });

  it("locks body scroll for a modal panel and releases it on close", () => {
    present("A", "right");
    const { fixture } = render();
    expect(document.body.style.overflow).toBe("hidden");

    host.dismissAll();
    fixture.detectChanges();
    expect(document.body.style.overflow).toBe("");
  });

  it("does NOT lock body scroll for a non-modal panel", () => {
    present("A", "right", () => undefined, { modal: false });
    const { fixture } = render();
    fixture.detectChanges();
    expect(document.body.style.overflow).not.toBe("hidden");
  });

  it("adds the pass-through modifier to a non-modal dock only", () => {
    present("A", "right", () => undefined, { modal: false });
    const { root } = render();
    expect(
      root
        .querySelector(".panel-dock")
        ?.classList.contains("panel-dock--passthrough"),
    ).toBe(true);
  });

  it("a modal dock keeps capturing clicks (no pass-through modifier)", () => {
    present("A", "right");
    const { root } = render();
    expect(
      root
        .querySelector(".panel-dock")
        ?.classList.contains("panel-dock--passthrough"),
    ).toBe(false);
  });

  it("reflects the surface on the panel (solid vs default glass)", () => {
    present("Solid", "right", () => undefined, { surface: "solid" });
    present("Default", "right");
    const { root } = render();
    const asides = root.querySelectorAll(".panel");
    expect(asides[0]?.getAttribute("data-surface")).toBe("solid");
    expect(asides[1]?.getAttribute("data-surface")).toBe("glass");
  });

  it("reflects modality on aria-modal", () => {
    present("Modal", "right");
    present("NonModal", "right", () => undefined, { modal: false });
    const { root } = render();
    const asides = root.querySelectorAll(".panel");
    expect(asides[0]?.getAttribute("aria-modal")).toBe("true");
    expect(asides[1]?.getAttribute("aria-modal")).toBe("false");
  });

  it("traps focus only for the top-most modal panel", () => {
    present("A", "right", () => undefined, { modal: false });
    const { fixture } = render();
    const cmp = fixture.componentInstance;
    const panel = host.panels()[0]!;
    expect(cmp.isModal(panel)).toBe(false);
    expect(cmp.shouldTrap(panel)).toBe(false);
  });

  it("traps focus for a modal top-most panel", () => {
    present("A", "right");
    const { fixture } = render();
    const cmp = fixture.componentInstance;
    const panel = host.panels()[0]!;
    expect(cmp.shouldTrap(panel)).toBe(true);
  });
});
