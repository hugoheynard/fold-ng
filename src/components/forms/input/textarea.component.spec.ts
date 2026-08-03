import { Component, signal } from "@angular/core";
import type { ValidationError } from "@angular/forms/signals";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import { FoldTextareaComponent } from "./textarea.component";

@Component({
  standalone: true,
  imports: [FoldTextareaComponent],
  template: `<fold-textarea
    [label]="label()"
    [required]="required()"
    [hint]="hint()"
    [placeholder]="placeholder()"
    [rows]="rows()"
    [disabled]="disabled()"
    [errors]="errors()"
    [(touched)]="touched"
    [(value)]="value"
  />`,
})
class HostComponent {
  readonly label = signal<string | undefined>(undefined);
  readonly required = signal(false);
  readonly hint = signal<string | undefined>(undefined);
  readonly placeholder = signal<string | undefined>(undefined);
  readonly rows = signal(3);
  readonly disabled = signal(false);
  readonly errors = signal<readonly ValidationError.WithOptionalFieldTree[]>(
    [],
  );
  readonly touched = signal(false);
  readonly value = signal<string>("");
}

function render() {
  const fixture = TestBed.createComponent(HostComponent);
  fixture.detectChanges();
  const host = fixture.nativeElement.querySelector(
    "fold-textarea",
  ) as HTMLElement;
  const textarea = host.querySelector("textarea") as HTMLTextAreaElement;
  return { fixture, host, textarea };
}

describe("FoldTextareaComponent", () => {
  it("wraps a native textarea", () => {
    const { textarea } = render();
    expect(textarea).not.toBeNull();
    expect(textarea.tagName).toBe("TEXTAREA");
  });

  it("writes typed text back through the model on input", () => {
    const { fixture, textarea } = render();
    textarea.value = "hello\nworld";
    textarea.dispatchEvent(new Event("input"));
    expect(fixture.componentInstance.value()).toBe("hello\nworld");
  });

  it("reflects the bound value onto the native textarea", () => {
    const { fixture, textarea } = render();
    fixture.componentInstance.value.set("note");
    fixture.detectChanges();
    expect(textarea.value).toBe("note");
  });

  it("passes rows through to the native element", () => {
    const { fixture, textarea } = render();
    expect(textarea.getAttribute("rows")).toBe("3");
    fixture.componentInstance.rows.set(6);
    fixture.detectChanges();
    expect(textarea.getAttribute("rows")).toBe("6");
  });

  it("associates the label with the textarea by id", () => {
    const { fixture, host, textarea } = render();
    fixture.componentInstance.label.set("Note");
    fixture.detectChanges();
    const label = host.querySelector("label");
    expect(label?.getAttribute("for")).toBe(textarea.id);
  });

  it("disables the native textarea", () => {
    const { fixture, textarea } = render();
    fixture.componentInstance.disabled.set(true);
    fixture.detectChanges();
    expect(textarea.hasAttribute("disabled")).toBe(true);
  });

  it("links the hint to the textarea via aria-describedby", () => {
    const { fixture, textarea } = render();
    expect(textarea.getAttribute("aria-describedby")).toBeNull();
    fixture.componentInstance.hint.set("Keep it short.");
    fixture.detectChanges();
    const describedBy = textarea.getAttribute("aria-describedby");
    expect(describedBy).toMatch(/-hint$/);
    expect(
      document.getElementById(describedBy as string)?.textContent,
    ).toContain("Keep it short.");
  });

  it("surfaces the error and aria-invalid only once touched", () => {
    const { fixture, host, textarea } = render();
    fixture.componentInstance.errors.set([
      { kind: "required", message: "Required" },
    ]);
    fixture.detectChanges();
    expect(textarea.getAttribute("aria-invalid")).toBeNull();
    expect(host.querySelector(".ib-error")).toBeNull();

    textarea.dispatchEvent(new Event("blur"));
    fixture.detectChanges();
    expect(textarea.getAttribute("aria-invalid")).toBe("true");
    expect(host.querySelector(".ib-error")?.textContent?.trim()).toBe(
      "Required",
    );
  });
});
