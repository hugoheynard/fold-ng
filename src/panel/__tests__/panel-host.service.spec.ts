import { Component, type TemplateRef, ViewChild, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";

import { Sh3PanelHostService } from "../panel-host.service";
import type { Sh3TemplatePanelDescriptor } from "../panel.types";

@Component({ template: `<ng-template #t>x</ng-template>` })
class TplHostComponent {
  @ViewChild("t", { static: true }) tpl!: TemplateRef<unknown>;
}

describe("Sh3PanelHostService", () => {
  let service: Sh3PanelHostService;
  let tpl: TemplateRef<unknown>;

  function descriptor(
    title = "Panel",
    onClose: () => void = () => undefined,
  ): Omit<Sh3TemplatePanelDescriptor, "id" | "kind"> {
    return {
      templateRef: tpl,
      side: "right",
      title: signal(title),
      subtitle: signal(""),
      width: signal(480),
      onClose,
    };
  }

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [Sh3PanelHostService] });
    service = TestBed.inject(Sh3PanelHostService);
    const fixture = TestBed.createComponent(TplHostComponent);
    fixture.detectChanges();
    tpl = fixture.componentInstance.tpl;
  });

  it("starts empty", () => {
    expect(service.panels()).toEqual([]);
  });

  it("present() appends a panel with an auto-incrementing id and returns a handle", () => {
    const a = service.present(descriptor("A"));
    const b = service.present(descriptor("B"));

    expect(a.id).toBe(1);
    expect(b.id).toBe(2);
    expect(service.panels().map((p) => p.id)).toEqual([1, 2]);
    expect(
      service.panels().map((p) => (p.kind === "template" ? p.title() : "")),
    ).toEqual(["A", "B"]);
  });

  it("handle.dismiss() removes only that panel", () => {
    const a = service.present(descriptor("A"));
    service.present(descriptor("B"));

    a.dismiss();
    expect(
      service.panels().map((p) => (p.kind === "template" ? p.title() : "")),
    ).toEqual(["B"]);
  });

  it("dismiss() is idempotent", () => {
    const a = service.present(descriptor("A"));
    a.dismiss();
    a.dismiss();
    expect(service.panels()).toEqual([]);
  });

  it("ids keep incrementing after dismissals (no reuse)", () => {
    const a = service.present(descriptor("A"));
    a.dismiss();
    const b = service.present(descriptor("B"));
    expect(b.id).toBe(2);
  });

  it("dismissAll() clears everything", () => {
    service.present(descriptor("A"));
    service.present(descriptor("B"));
    service.dismissAll();
    expect(service.panels()).toEqual([]);
  });
});
