import { Component, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import { FoldPanelFooterComponent } from "../panel-footer.component";

@Component({
  standalone: true,
  imports: [FoldPanelFooterComponent],
  template: `<fold-panel-footer [align]="align()">
    <button class="cancel">Annuler</button>
    <button class="save">Enregistrer</button>
  </fold-panel-footer>`,
})
class HostComponent {
  readonly align = signal<"end" | "between" | "start">("end");
}

function render() {
  const fixture = TestBed.createComponent(HostComponent);
  fixture.detectChanges();
  const host = fixture.nativeElement as HTMLElement;
  return {
    fixture,
    align: fixture.componentInstance.align,
    footer: () => host.querySelector<HTMLElement>("fold-panel-footer")!,
  };
}

describe("FoldPanelFooterComponent", () => {
  it("projects its children", () => {
    const r = render();
    expect(r.footer().querySelector(".cancel")).not.toBeNull();
    expect(r.footer().querySelector(".save")).not.toBeNull();
  });

  it("defaults to end alignment", () => {
    const r = render();
    expect(r.footer().getAttribute("data-align")).toBe("end");
  });

  it("reflects the align input as a data attribute (drives the CSS)", () => {
    const r = render();
    for (const value of ["between", "start", "end"] as const) {
      r.align.set(value);
      r.fixture.detectChanges();
      expect(r.footer().getAttribute("data-align")).toBe(value);
    }
  });
});
