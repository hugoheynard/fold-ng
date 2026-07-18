import { Component, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import { Sh3InputComponent } from "./input.component";

@Component({
  standalone: true,
  imports: [Sh3InputComponent],
  template: `<sh3-input
    [label]="label()"
    [type]="type()"
    [size]="size()"
    [align]="align()"
    [variant]="variant()"
    [readOnly]="readOnly()"
    [(value)]="value"
  />`,
})
class HostComponent {
  readonly label = signal<string | undefined>(undefined);
  readonly type = signal<"text" | "email" | "password">("text");
  readonly size = signal<"sm" | "md" | "lg">("md");
  readonly align = signal<"start" | "center">("start");
  readonly variant = signal<"default" | "panel">("default");
  readonly readOnly = signal(false);
  readonly value = signal<string>("");
}

function render() {
  const fixture = TestBed.createComponent(HostComponent);
  fixture.detectChanges();
  const host = fixture.nativeElement.querySelector("sh3-input") as HTMLElement;
  const input = host.querySelector("input") as HTMLInputElement;
  return { fixture, host, input };
}

describe("Sh3InputComponent", () => {
  it("renders a native input and no label until one is set", () => {
    const { fixture, host, input } = render();
    expect(input).not.toBeNull();
    expect(host.querySelector("label")).toBeNull();

    fixture.componentInstance.label.set("First name");
    fixture.detectChanges();
    const label = host.querySelector("label");
    expect(label?.textContent?.trim()).toBe("First name");
    // label is associated with the input by id
    expect(label?.getAttribute("for")).toBe(input.id);
  });

  it("reflects the bound value and writes typing back through the model", () => {
    const { fixture, input } = render();
    fixture.componentInstance.value.set("hello");
    fixture.detectChanges();
    expect(input.value).toBe("hello");

    input.value = "world";
    input.dispatchEvent(new Event("input"));
    fixture.detectChanges();
    expect(fixture.componentInstance.value()).toBe("world");
  });

  it("mirrors size / align / variant onto the host class", () => {
    const { fixture, host } = render();
    expect(host.className).toContain("md");
    expect(host.className).toContain("default");

    fixture.componentInstance.size.set("sm");
    fixture.componentInstance.align.set("center");
    fixture.componentInstance.variant.set("panel");
    fixture.detectChanges();
    expect(host.className).toContain("sm");
    expect(host.className).toContain("center");
    expect(host.className).toContain("panel");
  });

  it("passes readOnly through to the native input", () => {
    const { fixture, input } = render();
    expect(input.hasAttribute("readonly")).toBe(false);
    fixture.componentInstance.readOnly.set(true);
    fixture.detectChanges();
    expect(input.hasAttribute("readonly")).toBe(true);
  });
});
