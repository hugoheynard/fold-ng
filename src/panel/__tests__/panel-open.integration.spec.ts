import { Component, inject, input } from "@angular/core";
import { TestBed } from "@angular/core/testing";

import { PanelHostComponent } from "../panel-host.component";
import { PanelHostService } from "../panel-host.service";
import { PanelRef } from "../panel-ref";
import type { PanelContent } from "../panel.types";

type DemoData = {
  readonly label: string;
};

@Component({
  selector: "test-demo-panel",
  template: `
    <header class="own-header">{{ data().label }}</header>
    <button type="button" class="own-close" (click)="ref.close('saved')">
      close
    </button>
  `,
})
class DemoPanelComponent implements PanelContent<DemoData> {
  readonly data = input.required<DemoData>();
  readonly ref = inject<PanelRef<string>>(PanelRef);
}

@Component({
  imports: [PanelHostComponent],
  template: `<sh3-panel-host />`,
})
class HostComponent {}

describe("Panel open() — imperative component path", () => {
  let host: PanelHostService;

  function render() {
    const fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();
    const root: HTMLElement = fixture.nativeElement;
    return { fixture, root };
  }

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [PanelHostService] });
    host = TestBed.inject(PanelHostService);
  });

  it("mounts the component and sets its typed data input", () => {
    const { fixture, root } = render();
    host.open<DemoData, string>(DemoPanelComponent, {
      data: { label: "Hello panel" },
    });
    fixture.detectChanges();

    expect(root.querySelector(".own-header")?.textContent?.trim()).toBe(
      "Hello panel",
    );
    // Component owns its chrome — no shared header injected for it.
    expect(root.querySelector(".panel-header")).toBeNull();
  });

  it("the component can close itself via injected PanelRef, returning a result", async () => {
    const { fixture, root } = render();
    const ref = host.open<DemoData, string>(DemoPanelComponent, {
      data: { label: "x" },
    });
    fixture.detectChanges();
    expect(root.querySelector(".panel")).not.toBeNull();

    root.querySelector<HTMLButtonElement>(".own-close")?.click();
    fixture.detectChanges();

    await expect(ref.closed).resolves.toBe("saved");
    expect(root.querySelector(".panel")).toBeNull();
  });

  it("Escape closes an imperative panel and resolves the ref", async () => {
    const { fixture, root } = render();
    const ref = host.open<DemoData, string>(DemoPanelComponent, {
      data: { label: "x" },
    });
    fixture.detectChanges();

    document.dispatchEvent(
      new KeyboardEvent("keydown", { key: "Escape", bubbles: true }),
    );
    fixture.detectChanges();

    await expect(ref.closed).resolves.toBeUndefined();
    expect(root.querySelector(".panel")).toBeNull();
  });
});
