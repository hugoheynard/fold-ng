import { Component, inject, input } from "@angular/core";
import { TestBed } from "@angular/core/testing";

import { FoldPanelHostComponent } from "../panel-host.component";
import { FoldPanelHostService } from "../panel-host.service";
import { FoldPanelRef } from "../panel-ref";
import type { FoldPanelContent } from "../panel.types";

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
class DemoPanelComponent implements FoldPanelContent<DemoData> {
  readonly data = input.required<DemoData>();
  readonly ref = inject<FoldPanelRef<string>>(FoldPanelRef);
}

@Component({
  imports: [FoldPanelHostComponent],
  template: `<fold-panel-host />`,
})
class HostComponent {}

describe("Panel open() — imperative component path", () => {
  let host: FoldPanelHostService;

  function render() {
    const fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();
    const root: HTMLElement = fixture.nativeElement;
    return { fixture, root };
  }

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [FoldPanelHostService] });
    host = TestBed.inject(FoldPanelHostService);
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

  it("the component can close itself via injected FoldPanelRef, returning a result", async () => {
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

  it("replaces the open panel by default — one at a time", async () => {
    const { fixture, root } = render();
    const first = host.open<DemoData, string>(DemoPanelComponent, {
      data: { label: "A" },
    });
    fixture.detectChanges();
    host.open<DemoData, string>(DemoPanelComponent, { data: { label: "B" } });
    fixture.detectChanges();

    expect(root.querySelectorAll(".panel").length).toBe(1);
    await expect(first.closed).resolves.toBeUndefined();
  });

  it("keeps the prior panel open with stack: true", () => {
    const { fixture, root } = render();
    host.open<DemoData, string>(DemoPanelComponent, { data: { label: "A" } });
    fixture.detectChanges();
    host.open<DemoData, string>(DemoPanelComponent, {
      data: { label: "B" },
      stack: true,
    });
    fixture.detectChanges();

    expect(root.querySelectorAll(".panel").length).toBe(2);
  });
});
