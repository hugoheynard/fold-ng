import { Component, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import { Sh3MenuSeparatorComponent } from "./menu-separator.component";

@Component({
  standalone: true,
  imports: [Sh3MenuSeparatorComponent],
  template: `<sh3-menu-separator [label]="label()" [color]="color()" />`,
})
class HostComponent {
  readonly label = signal<string | undefined>(undefined);
  readonly color = signal<string | undefined>(undefined);
}

function render() {
  const fixture = TestBed.createComponent(HostComponent);
  fixture.detectChanges();
  const sep = fixture.nativeElement.querySelector(
    "sh3-menu-separator",
  ) as HTMLElement;
  return { fixture, sep };
}

describe("Sh3MenuSeparatorComponent", () => {
  it("renders the mark; the label only when set", () => {
    const { fixture, sep } = render();
    expect(sep.querySelector(".sep-mark")).not.toBeNull();
    expect(sep.querySelector(".sep-label")).toBeNull();
    fixture.componentInstance.label.set("Workspace");
    fixture.detectChanges();
    expect(sep.querySelector(".sep-label")?.textContent).toBe("Workspace");
  });

  it("tints the mark with the `color` input", () => {
    const { fixture, sep } = render();
    fixture.componentInstance.color.set("rgb(124, 91, 191)");
    fixture.detectChanges();
    const mark = sep.querySelector<HTMLElement>(".sep-mark");
    expect(mark?.style.background).toBe("rgb(124, 91, 191)");
  });
});
