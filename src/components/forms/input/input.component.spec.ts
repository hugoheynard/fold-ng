import { Component, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { form, required, FormField } from "@angular/forms/signals";
import { describe, it, expect } from "vitest";
import { FoldInputComponent } from "./input.component";

@Component({
  standalone: true,
  imports: [FoldInputComponent],
  template: `<fold-input
    [label]="label()"
    [type]="type()"
    [size]="size()"
    [align]="align()"
    [variant]="variant()"
    [readOnly]="readOnly()"
    [hint]="hint()"
    [leadingIcon]="leadingIcon()"
    [clearable]="clearable()"
    [revealable]="revealable()"
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
  readonly hint = signal<string | undefined>(undefined);
  readonly leadingIcon = signal<string | undefined>(undefined);
  readonly clearable = signal(false);
  readonly revealable = signal(false);
  readonly value = signal<string>("");
}

function render() {
  const fixture = TestBed.createComponent(HostComponent);
  fixture.detectChanges();
  const host = fixture.nativeElement.querySelector("fold-input") as HTMLElement;
  const input = host.querySelector("input") as HTMLInputElement;
  return { fixture, host, input };
}

describe("FoldInputComponent", () => {
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

  it("links the hint to the input via aria-describedby", () => {
    const { fixture, input } = render();
    expect(input.getAttribute("aria-describedby")).toBeNull();

    fixture.componentInstance.hint.set("We never share it.");
    fixture.detectChanges();
    const describedBy = input.getAttribute("aria-describedby");
    expect(describedBy).toMatch(/-hint$/);
    expect(
      document.getElementById(describedBy as string)?.textContent,
    ).toContain("We never share it.");
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

@Component({
  standalone: true,
  imports: [FoldInputComponent, FormField],
  template: `<fold-input [formField]="nameForm" />`,
})
class FormHostComponent {
  readonly name = signal("");
  readonly nameForm = form(this.name, (p) => {
    required(p, { message: "Name is required" });
  });
}

describe("FoldInputComponent + Signal Forms", () => {
  function renderForm() {
    const fixture = TestBed.createComponent(FormHostComponent);
    fixture.detectChanges();
    const host = fixture.nativeElement.querySelector(
      "fold-input",
    ) as HTMLElement;
    return { fixture, host, input: host.querySelector("input") as HTMLElement };
  }

  it("shows the field error only after the field is touched", () => {
    const { fixture, host, input } = renderForm();
    // invalid from the start (empty + required) but untouched → no message
    expect(host.querySelector(".ib-error")).toBeNull();

    input.dispatchEvent(new Event("blur"));
    fixture.detectChanges();

    const err = host.querySelector(".ib-error");
    expect(err?.textContent?.trim()).toBe("Name is required");
    expect(input.getAttribute("aria-invalid")).toBe("true");
  });

  it("clears the error once the field becomes valid", () => {
    const { fixture, host, input } = renderForm();
    input.dispatchEvent(new Event("blur"));
    fixture.detectChanges();
    expect(host.querySelector(".ib-error")).not.toBeNull();

    fixture.componentInstance.name.set("Ada");
    fixture.detectChanges();
    expect(host.querySelector(".ib-error")).toBeNull();
    expect(input.getAttribute("aria-invalid")).toBeNull();
  });

  /**
   * Le glyphe de tête est DÉCORATIF : il ne nomme pas le champ, et il ne doit
   * pas intercepter le clic — un clic sur la loupe doit poser le curseur dans
   * le champ, comme un clic sur n'importe quelle marge intérieure.
   */
  it("draws a decorative leading glyph, and reserves the room for it", () => {
    const { fixture, host, input } = render();
    expect(host.querySelector(".in-lead")).toBeNull();
    expect(input.classList.contains("has-lead")).toBe(false);

    fixture.componentInstance.leadingIcon.set("search");
    fixture.detectChanges();

    const lead = host.querySelector(".in-lead");
    expect(lead?.getAttribute("aria-hidden")).toBe("true");
    expect(input.classList.contains("has-lead")).toBe(true);
  });

  it("offers no × until there is something to clear", () => {
    const { fixture, host } = render();
    fixture.componentInstance.clearable.set(true);
    fixture.detectChanges();

    expect(host.querySelector("button")).toBeNull();
  });

  it("empties the value from the ×, and hands the focus back", () => {
    const { fixture, host, input } = render();
    fixture.componentInstance.clearable.set(true);
    fixture.componentInstance.value.set("eclair");
    fixture.detectChanges();

    host.querySelector("button")?.click();
    fixture.detectChanges();

    expect(fixture.componentInstance.value()).toBe("");
    expect(document.activeElement).toBe(input);
  });

  /**
   * Un `×` au-dessus d'une valeur en lecture seule promettrait un geste que le
   * contrôle refuse. Même raison pour un champ désactivé.
   */
  it("hides the × on a read-only field", () => {
    const { fixture, host } = render();
    fixture.componentInstance.clearable.set(true);
    fixture.componentInstance.value.set("eclair");
    fixture.componentInstance.readOnly.set(true);
    fixture.detectChanges();

    expect(host.querySelector("button")).toBeNull();
  });

  /**
   * Les deux affixes de fin ne cohabitent pas, et c'est le révélateur qui
   * gagne : une saisie de mot de passe qui perd son œil est cassée, une
   * recherche qui perd sa croix est seulement moins commode.
   */
  it("gives the trailing slot to the reveal, never to both", () => {
    const { fixture, host } = render();
    fixture.componentInstance.type.set("password");
    fixture.componentInstance.revealable.set(true);
    fixture.componentInstance.clearable.set(true);
    fixture.componentInstance.value.set("hunter2");
    fixture.detectChanges();

    const buttons = host.querySelectorAll("button");
    expect(buttons.length).toBe(1);
    // Celui qui reste est bien le révélateur : lui seul porte un état pressé.
    expect(buttons[0]?.getAttribute("aria-pressed")).toBe("false");
  });
});
