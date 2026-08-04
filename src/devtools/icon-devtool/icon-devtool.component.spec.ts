import { Component, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect, beforeEach, vi } from "vitest";
import { FoldIconDevtoolComponent } from "./icon-devtool.component";
import { FoldIconRegistry } from "../../components/foundations/icon/icon-registry.service";

@Component({
  standalone: true,
  imports: [FoldIconDevtoolComponent],
  template: `@if (open()) {
    <fold-icon-devtool (closed)="open.set(false)" />
  }`,
})
class HostComponent {
  readonly open = signal(true);
}

function render() {
  const fixture = TestBed.createComponent(HostComponent);
  fixture.detectChanges();
  const host = fixture.nativeElement as HTMLElement;
  const panel = () => host.querySelector("fold-icon-devtool");
  return { fixture, host, panel };
}

describe("FoldIconDevtoolComponent", () => {
  beforeEach(() => {
    Object.assign(navigator, {
      clipboard: { writeText: vi.fn().mockResolvedValue(undefined) },
    });
  });

  it("lists every registered icon name from the registry", () => {
    const { host } = render();
    const registry = TestBed.inject(FoldIconRegistry);
    const cells = host.querySelectorAll(".dt-cell");
    expect(cells.length).toBe(registry.names().length);
    expect(cells.length).toBeGreaterThan(100); // the built-in catalogue
  });

  it("filters the grid by the search query", () => {
    const { fixture, host } = render();
    const input = host.querySelector(".dt-search-input") as HTMLInputElement;
    input.value = "truck";
    input.dispatchEvent(new Event("input"));
    fixture.detectChanges();
    const cells = host.querySelectorAll(".dt-cell");
    expect(cells.length).toBe(1);
    expect(cells[0].getAttribute("title")).toBe("truck");
  });

  it("groups icons into category sections whose counts sum to the total", () => {
    const { host } = render();
    const registry = TestBed.inject(FoldIconRegistry);
    const counts = [...host.querySelectorAll(".dt-cat-count")].map((n) =>
      Number(n.textContent),
    );
    expect(counts.length).toBeGreaterThan(1); // several categories
    const total = counts.reduce((sum, n) => sum + n, 0);
    expect(total).toBe(registry.names().length);
  });

  it("collapses a category to its header, hiding its cells", () => {
    const { fixture, host } = render();
    const before = host.querySelectorAll(".dt-cell").length;
    const head = host.querySelector(".dt-cat-head") as HTMLButtonElement;
    const count = Number(
      head.querySelector(".dt-cat-count")?.textContent ?? "0",
    );
    expect(count).toBeGreaterThan(0);
    head.click();
    fixture.detectChanges();
    expect(head.getAttribute("aria-expanded")).toBe("false");
    expect(host.querySelectorAll(".dt-cell").length).toBe(before - count);
  });

  it("shows an empty message when nothing matches", () => {
    const { fixture, host } = render();
    const input = host.querySelector(".dt-search-input") as HTMLInputElement;
    input.value = "zzz-no-such-icon";
    input.dispatchEvent(new Event("input"));
    fixture.detectChanges();
    expect(host.querySelector(".dt-cell")).toBeNull();
    expect(host.querySelector(".dt-empty")).not.toBeNull();
  });

  it("builds a snippet from the selected icon (size only when non-default)", () => {
    const { fixture, host } = render();
    (host.querySelector(".dt-cell") as HTMLButtonElement).click();
    fixture.detectChanges();
    const snippet = () => host.querySelector(".dt-snippet code")?.textContent;
    expect(snippet()).toMatch(/^<fold-icon name="[^"]+" \/>$/);

    // pick a non-default size → the size attribute appears
    const lg = [...host.querySelectorAll(".dt-size")].find(
      (b) => b.textContent?.trim() === "lg",
    ) as HTMLButtonElement;
    lg.click();
    fixture.detectChanges();
    expect(snippet()).toMatch(/size="lg"/);
  });

  it("copies the snippet to the clipboard", () => {
    const { fixture, host } = render();
    (host.querySelector(".dt-cell") as HTMLButtonElement).click();
    fixture.detectChanges();
    (host.querySelector(".dt-copy") as HTMLButtonElement).click();
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(
      expect.stringContaining("<fold-icon name="),
    );
  });

  it("minimises to a pill (hides the body) and restores", () => {
    const { fixture, host, panel } = render();
    expect(host.querySelector(".dt-body")).not.toBeNull();
    const minimise = host.querySelector(
      ".dt-actions button",
    ) as HTMLButtonElement;
    minimise.click();
    fixture.detectChanges();
    expect(panel()?.classList.contains("minimized")).toBe(true);
    expect(host.querySelector(".dt-body")).toBeNull();
  });

  it("emits closed → the host unmounts it", () => {
    const { fixture, host, panel } = render();
    const close = host.querySelectorAll(
      ".dt-actions button",
    )[1] as HTMLButtonElement;
    close.click();
    fixture.detectChanges();
    expect(panel()).toBeNull();
  });
});
