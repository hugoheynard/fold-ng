import { Component, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";

import { FocusTrapDirective } from "../focus-trap.directive";

@Component({
  imports: [FocusTrapDirective],
  template: `
    <button id="outside" type="button">outside</button>
    <div [foldFocusTrap]="trapped()" tabindex="-1">
      <button id="first" type="button">first</button>
      <button id="mid" type="button">mid</button>
      <button id="last" type="button">last</button>
    </div>
  `,
})
class HostComponent {
  readonly trapped = signal(false);
}

describe("FocusTrapDirective", () => {
  function setup() {
    const fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();
    const root: HTMLElement = fixture.nativeElement;
    const el = (id: string): HTMLElement => {
      const found = root.querySelector<HTMLElement>(`#${id}`);
      if (found === null) {
        throw new Error(`missing #${id}`);
      }
      return found;
    };
    const trap = root.querySelector<HTMLElement>('[tabindex="-1"]');
    if (trap === null) {
      throw new Error("missing focus-trap container");
    }
    const tab = (shift: boolean): boolean =>
      trap.dispatchEvent(
        new KeyboardEvent("keydown", {
          key: "Tab",
          shiftKey: shift,
          bubbles: true,
          cancelable: true,
        }),
      );
    return { fixture, el, tab };
  }

  it("moves focus to the first focusable when enabled", () => {
    const { fixture, el } = setup();
    el("outside").focus();
    fixture.componentInstance.trapped.set(true);
    fixture.detectChanges();
    expect(document.activeElement).toBe(el("first"));
  });

  it("wraps forward Tab from the last element back to the first", () => {
    const { fixture, el, tab } = setup();
    fixture.componentInstance.trapped.set(true);
    fixture.detectChanges();

    el("last").focus();
    const notPrevented = tab(false);
    expect(notPrevented).toBe(false); // preventDefault() was called
    expect(document.activeElement).toBe(el("first"));
  });

  it("wraps backward Shift+Tab from the first element to the last", () => {
    const { fixture, el, tab } = setup();
    fixture.componentInstance.trapped.set(true);
    fixture.detectChanges();

    el("first").focus();
    tab(true);
    expect(document.activeElement).toBe(el("last"));
  });

  it("does not intercept Tab in the middle of the range", () => {
    const { fixture, el, tab } = setup();
    fixture.componentInstance.trapped.set(true);
    fixture.detectChanges();

    el("mid").focus();
    const notPrevented = tab(false);
    expect(notPrevented).toBe(true); // left for the browser to move naturally
    expect(document.activeElement).toBe(el("mid"));
  });

  it("restores focus to the pre-trap element when disabled", () => {
    const { fixture, el } = setup();
    el("outside").focus();
    fixture.componentInstance.trapped.set(true);
    fixture.detectChanges();
    expect(document.activeElement).toBe(el("first"));

    fixture.componentInstance.trapped.set(false);
    fixture.detectChanges();
    expect(document.activeElement).toBe(el("outside"));
  });

  it("is inert while disabled — Tab passes through untouched", () => {
    const { el, tab } = setup();
    el("last").focus();
    const notPrevented = tab(false);
    expect(notPrevented).toBe(true);
    expect(document.activeElement).toBe(el("last"));
  });
});
