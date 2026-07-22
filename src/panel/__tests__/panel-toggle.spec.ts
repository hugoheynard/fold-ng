import { Component, inject, input } from "@angular/core";
import { TestBed } from "@angular/core/testing";

import { FoldPanelHostComponent } from "../panel-host.component";
import { FoldPanelHostService } from "../panel-host.service";
import { FoldPanelRef } from "../panel-ref";
import { FoldPanelToggle } from "../panel-toggle";
import type { FoldPanelContent } from "../panel.types";

@Component({ selector: "test-toggle-panel", template: `{{ data().n }}` })
class TogglePanelComponent implements FoldPanelContent<{ n: number }> {
  readonly data = input.required<{ n: number }>();
  readonly ref = inject(FoldPanelRef);
}

@Component({
  imports: [FoldPanelHostComponent],
  template: `<fold-panel-host />`,
})
class HostComponent {}

describe("FoldPanelToggle", () => {
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

  it("opens on first toggle and closes on the second", async () => {
    const { fixture, root } = render();
    const toggle = new FoldPanelToggle(host, TogglePanelComponent);

    toggle.toggle({ n: 1 });
    fixture.detectChanges();
    expect(toggle.isOpen()).toBe(true);
    expect(root.querySelector(".panel")).not.toBeNull();

    toggle.toggle({ n: 1 });
    await Promise.resolve(); // let the ref.closed handler run
    fixture.detectChanges();
    expect(toggle.isOpen()).toBe(false);
    expect(root.querySelector(".panel")).toBeNull();
  });

  it("re-syncs isOpen when the panel closes from the inside (Escape)", async () => {
    const { fixture } = render();
    const toggle = new FoldPanelToggle(host, TogglePanelComponent);

    toggle.toggle({ n: 2 });
    fixture.detectChanges();
    expect(toggle.isOpen()).toBe(true);

    document.dispatchEvent(
      new KeyboardEvent("keydown", { key: "Escape", bubbles: true }),
    );
    await Promise.resolve();
    fixture.detectChanges();
    // Escape closed it — a fresh toggle must open, not be swallowed as "close".
    expect(toggle.isOpen()).toBe(false);

    toggle.toggle({ n: 3 });
    fixture.detectChanges();
    expect(toggle.isOpen()).toBe(true);
  });
});
