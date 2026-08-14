import { Component, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import { FoldTabsComponent, type FoldTabItem } from "./tabs.component";
import { FoldTabPanelComponent } from "./tab-panel.component";

/** A closed union of section keys — the shape a real caller has. */
type Section = "a" | "b" | "c";

@Component({
  standalone: true,
  imports: [FoldTabsComponent, FoldTabPanelComponent],
  template: `<fold-tabs
      #t="foldTabs"
      [tabs]="tabs"
      [(activeKey)]="active"
      [direction]="dir()"
    />
    <fold-tab-panel [tabs]="t" key="a" data-p="a">Panel A</fold-tab-panel>
    <fold-tab-panel [tabs]="t" key="b" data-p="b">Panel B</fold-tab-panel>
    <fold-tab-panel [tabs]="t" key="c" data-p="c">Panel C</fold-tab-panel>`,
})
class HostComponent {
  readonly tabs: readonly FoldTabItem<Section>[] = [
    { key: "a", label: "A" },
    { key: "b", label: "B" },
    { key: "c", label: "C" },
  ];
  // Typed as the union, NOT `string`. If the bar ever widens its key back to
  // `string`, the writeback stops being assignable and this file fails to
  // compile — which is the point: the narrowing is the feature.
  readonly active = signal<Section>("a");
  readonly dir = signal<"horizontal" | "vertical">("horizontal");
}

function render(attach = false) {
  const fixture = TestBed.createComponent(HostComponent);
  fixture.detectChanges();
  const host = fixture.nativeElement as HTMLElement;
  if (attach) {
    document.body.appendChild(host);
  }
  const tablist = host.querySelector('[role="tablist"]') as HTMLElement;
  const tabs = () =>
    Array.from(host.querySelectorAll<HTMLElement>('[role="tab"]'));
  const panel = (k: string) =>
    host.querySelector<HTMLElement>(`[data-p="${k}"]`) as HTMLElement;
  const press = (key: string) => {
    tablist.dispatchEvent(new KeyboardEvent("keydown", { key, bubbles: true }));
    fixture.detectChanges();
  };
  return { fixture, host, tablist, tabs, panel, press };
}

describe("FoldTabsComponent", () => {
  it("renders a tablist of tabs with the selected + roving state", () => {
    const { tablist, tabs } = render();
    expect(tablist).not.toBeNull();
    expect(tablist.getAttribute("aria-orientation")).toBe("horizontal");
    const [a, b, c] = tabs();
    expect(tabs()).toHaveLength(3);
    // Active tab: selected + tabbable; the rest: not selected + out of Tab order.
    expect(a.getAttribute("aria-selected")).toBe("true");
    expect(a.getAttribute("tabindex")).toBe("0");
    expect(b.getAttribute("aria-selected")).toBe("false");
    expect(b.getAttribute("tabindex")).toBe("-1");
    expect(c.getAttribute("tabindex")).toBe("-1");
  });

  it("wires each tab to its panel (aria-controls ↔ aria-labelledby)", () => {
    const { tabs, panel } = render();
    const tabA = tabs()[0];
    const panelA = panel("a");
    expect(tabA.getAttribute("aria-controls")).toBe(panelA.id);
    expect(panelA.getAttribute("aria-labelledby")).toBe(tabA.id);
    expect(panelA.getAttribute("role")).toBe("tabpanel");
  });

  it("shows only the active panel (others hidden, active focusable)", () => {
    const { panel } = render();
    expect(panel("a").hasAttribute("hidden")).toBe(false);
    expect(panel("a").getAttribute("tabindex")).toBe("0");
    expect(panel("b").hasAttribute("hidden")).toBe(true);
    expect(panel("c").hasAttribute("hidden")).toBe(true);
  });

  it("selects a tab on click", () => {
    const { fixture, tabs, panel } = render();
    tabs()[1].click();
    fixture.detectChanges();
    expect(fixture.componentInstance.active()).toBe("b");
    expect(panel("b").hasAttribute("hidden")).toBe(false);
    expect(panel("a").hasAttribute("hidden")).toBe(true);
  });

  it("moves + selects with arrow keys, Home/End, wrapping (roving)", () => {
    const { fixture, tabs, press } = render(true);
    try {
      press("ArrowRight");
      expect(fixture.componentInstance.active()).toBe("b");
      expect(document.activeElement).toBe(tabs()[1]);

      press("ArrowRight");
      expect(fixture.componentInstance.active()).toBe("c");
      press("ArrowRight"); // wraps
      expect(fixture.componentInstance.active()).toBe("a");
      press("ArrowLeft"); // wraps back
      expect(fixture.componentInstance.active()).toBe("c");

      press("Home");
      expect(fixture.componentInstance.active()).toBe("a");
      press("End");
      expect(fixture.componentInstance.active()).toBe("c");
    } finally {
      fixture.nativeElement.remove();
    }
  });

  it("reflects a vertical bar in aria-orientation", () => {
    const { fixture, tablist } = render();
    fixture.componentInstance.dir.set("vertical");
    fixture.detectChanges();
    expect(tablist.getAttribute("aria-orientation")).toBe("vertical");
  });
});

describe("FoldTabsComponent — sticky", () => {
  @Component({
    standalone: true,
    imports: [FoldTabsComponent],
    template: `<fold-tabs [tabs]="tabs" activeKey="a" [sticky]="on()" />`,
  })
  class StickyHost {
    readonly tabs = [{ key: "a", label: "A" }];
    readonly on = signal(false);
  }

  it("marks the host only when asked", () => {
    // The class is the whole feature — the sticking itself is CSS, which JSDOM
    // does not lay out. Assert the seam, not the paint.
    const fixture = TestBed.createComponent(StickyHost);
    fixture.detectChanges();
    const bar = fixture.nativeElement.querySelector("fold-tabs") as HTMLElement;

    expect(bar.classList.contains("is-sticky")).toBe(false);

    fixture.componentInstance.on.set(true);
    fixture.detectChanges();
    expect(bar.classList.contains("is-sticky")).toBe(true);
  });
});
