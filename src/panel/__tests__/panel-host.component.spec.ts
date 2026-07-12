import { Component, type TemplateRef, ViewChild, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";

import { PanelHostComponent } from "../panel-host.component";
import { PanelHostService } from "../panel-host.service";
import type { PanelSide, TemplatePanelDescriptor } from "../panel.types";

@Component({ template: `<ng-template #t>x</ng-template>` })
class TplHostComponent {
  @ViewChild("t", { static: true }) tpl!: TemplateRef<unknown>;
}

describe("PanelHostComponent", () => {
  let host: PanelHostService;
  let tpl: TemplateRef<unknown>;

  function present(
    title: string,
    side: PanelSide,
    onClose: () => void = () => undefined,
  ): void {
    const descriptor: Omit<TemplatePanelDescriptor, "id" | "kind"> = {
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
    const fixture = TestBed.createComponent(PanelHostComponent);
    fixture.detectChanges();
    const root: HTMLElement = fixture.nativeElement;
    return { fixture, root };
  }

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [PanelHostService] });
    host = TestBed.inject(PanelHostService);
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
});
