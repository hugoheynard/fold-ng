import { Component, type TemplateRef, ViewChild, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";

import { FoldPanelHostService } from "../panel-host.service";
import { provideFoldPanelDefaults } from "../panel-defaults";
import type {
  FoldPanelDefaults,
  FoldTemplatePanelDescriptor,
} from "../panel.types";

@Component({ template: `<ng-template #t>x</ng-template>` })
class TplHostComponent {
  @ViewChild("t", { static: true }) tpl!: TemplateRef<unknown>;
}

@Component({ standalone: true, template: `<p>panel body</p>` })
class DummyPanelComponent {}

/** Declares its intrinsic shape on the class — a cart *is* non-modal + solid. */
@Component({ standalone: true, template: `<p>cart</p>` })
class CartLikePanelComponent {
  static readonly foldPanel: FoldPanelDefaults = {
    modal: false,
    surface: "solid",
  };
}

/** Declares layout intent (edge + width) but not modality/surface. */
@Component({ standalone: true, template: `<p>left</p>` })
class LeftWidePanelComponent {
  static readonly foldPanel: FoldPanelDefaults = { side: "left", width: 360 };
}

describe("FoldPanelHostService", () => {
  let service: FoldPanelHostService;
  let tpl: TemplateRef<unknown>;

  function descriptor(
    title = "Panel",
    onClose: () => void = () => undefined,
  ): Omit<FoldTemplatePanelDescriptor, "id" | "kind"> {
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
    TestBed.configureTestingModule({ providers: [FoldPanelHostService] });
    service = TestBed.inject(FoldPanelHostService);
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

  it("open() defaults a component panel to modal + glass", () => {
    service.open(DummyPanelComponent);
    const panel = service.panels()[0];
    expect(panel?.modal).toBe(true);
    expect(panel?.surface).toBe("glass");
  });

  it("open() carries modal:false and surface:'solid' from config", () => {
    service.open(DummyPanelComponent, { modal: false, surface: "solid" });
    const panel = service.panels()[0];
    expect(panel?.modal).toBe(false);
    expect(panel?.surface).toBe("solid");
  });

  describe("config cascade", () => {
    it("reads the component's static foldPanel shape", () => {
      service.open(CartLikePanelComponent);
      const panel = service.panels()[0];
      expect(panel?.modal).toBe(false);
      expect(panel?.surface).toBe("solid");
    });

    it("cascades side + width from the component static", () => {
      service.open(LeftWidePanelComponent);
      const panel = service.panels()[0];
      expect(panel?.side).toBe("left");
      expect(panel?.width()).toBe(360);
    });

    it("a per-call option wins over the component static", () => {
      service.open(CartLikePanelComponent, { modal: true });
      const panel = service.panels()[0];
      expect(panel?.modal).toBe(true); // call-site wins
      expect(panel?.surface).toBe("solid"); // component static still applies
    });

    it("falls back to the literal defaults when nothing declares them", () => {
      service.open(DummyPanelComponent);
      const panel = service.panels()[0];
      expect(panel?.side).toBe("right");
      expect(panel?.width()).toBe(490);
      expect(panel?.modal).toBe(true);
      expect(panel?.surface).toBe("glass");
      expect(panel?.disableClose).toBe(false);
    });
  });

  describe("width presets", () => {
    it("resolves a named size to pixels", () => {
      service.open(DummyPanelComponent, { width: "lg" });
      expect(service.panels()[0]?.width()).toBe(640);
    });

    it("keeps a raw pixel number", () => {
      service.open(DummyPanelComponent, { width: 512 });
      expect(service.panels()[0]?.width()).toBe(512);
    });

    it("defaults to md (490) when unset", () => {
      service.open(DummyPanelComponent);
      expect(service.panels()[0]?.width()).toBe(490);
    });
  });

  describe("disableClose", () => {
    it("defaults to false", () => {
      service.open(DummyPanelComponent);
      expect(service.panels()[0]?.disableClose).toBe(false);
    });

    it("carries disableClose:true from config", () => {
      service.open(DummyPanelComponent, { disableClose: true });
      expect(service.panels()[0]?.disableClose).toBe(true);
    });
  });

  describe("with FOLD_PANEL_DEFAULTS", () => {
    beforeEach(() => {
      TestBed.resetTestingModule();
      TestBed.configureTestingModule({
        providers: [
          FoldPanelHostService,
          provideFoldPanelDefaults({ surface: "solid", side: "left" }),
        ],
      });
      service = TestBed.inject(FoldPanelHostService);
    });

    it("applies the host token as the base layer", () => {
      service.open(DummyPanelComponent);
      const panel = service.panels()[0];
      expect(panel?.surface).toBe("solid");
      expect(panel?.side).toBe("left");
    });

    it("the component static overrides the host token", () => {
      service.open(CartLikePanelComponent);
      const panel = service.panels()[0];
      // component sets surface:'solid' (same), and doesn't set side → host 'left'
      expect(panel?.surface).toBe("solid");
      expect(panel?.side).toBe("left");
      expect(panel?.modal).toBe(false);
    });

    it("a per-call option wins over both host token and component static", () => {
      service.open(CartLikePanelComponent, { side: "right", surface: "glass" });
      const panel = service.panels()[0];
      expect(panel?.side).toBe("right"); // call over host 'left'
      expect(panel?.surface).toBe("glass"); // call over component 'solid'
    });
  });
});
