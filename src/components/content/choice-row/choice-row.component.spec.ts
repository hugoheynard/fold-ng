import { Component } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import {
  FoldChoiceRowComponent,
  type FoldChoiceOption,
} from "./choice-row.component";

@Component({
  standalone: true,
  imports: [FoldChoiceRowComponent],
  template: `<fold-choice-row
    [options]="options"
    [activeKey]="activeKey"
    [layout]="layout"
    [ariaLabel]="ariaLabel"
    (selected)="picked = $event"
  />`,
})
class HostComponent {
  options: readonly FoldChoiceOption[] = [
    { key: "a", label: "Alpha" },
    { key: "b", label: "Beta" },
  ];
  activeKey = "a";
  layout: "segmented" | "chips" = "segmented";
  ariaLabel = "";
  picked: string | undefined;
}

function setup(patch: Partial<HostComponent> = {}) {
  const fixture = TestBed.createComponent(HostComponent);
  Object.assign(fixture.componentInstance, patch);
  fixture.detectChanges();
  const host = fixture.nativeElement as HTMLElement;
  return {
    fixture,
    instance: fixture.componentInstance,
    buttons: [...host.querySelectorAll("button")] as HTMLButtonElement[],
    row: host.querySelector(".choice-row") as HTMLElement,
  };
}

describe("FoldChoiceRowComponent", () => {
  it("renders one button per option with its label", () => {
    const { buttons } = setup();
    expect(buttons.map((b) => b.textContent?.trim())).toEqual([
      "Alpha",
      "Beta",
    ]);
  });

  it("marks the active option", () => {
    const { buttons } = setup({ activeKey: "b" });
    expect(buttons[0].classList.contains("is-active")).toBe(false);
    expect(buttons[1].classList.contains("is-active")).toBe(true);
    expect(buttons[1].getAttribute("aria-pressed")).toBe("true");
  });

  it("emits the clicked key", () => {
    const { buttons, instance } = setup();
    buttons[1].click();
    expect(instance.picked).toBe("b");
  });

  it("defaults to the segmented layout", () => {
    const { row } = setup();
    expect(row.classList.contains("segmented")).toBe(true);
    expect(row.classList.contains("chips")).toBe(false);
  });

  it("renders the chips layout when asked, with the aria-label", () => {
    const { row } = setup({ layout: "chips", ariaLabel: "Filter by status" });
    expect(row.classList.contains("chips")).toBe(true);
    expect(row.getAttribute("aria-label")).toBe("Filter by status");
  });

  it("shows a count badge only for options that carry one", () => {
    const { buttons } = setup({
      options: [
        { key: "a", label: "Alpha", count: 12 },
        { key: "b", label: "Beta" },
      ],
    });
    expect(buttons[0].querySelector(".choice-count")?.textContent?.trim()).toBe(
      "12",
    );
    expect(buttons[1].querySelector(".choice-count")).toBeNull();
  });
});
