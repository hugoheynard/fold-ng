import { Component, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import { FoldInlineConfirmComponent } from "./inline-confirm.component";
import { provideFoldInlineConfirmLabels } from "./inline-confirm-labels";

@Component({
  standalone: true,
  imports: [FoldInlineConfirmComponent],
  template: `<fold-inline-confirm
    [match]="match()"
    [password]="password()"
    [message]="message()"
    [loading]="loading()"
    [cancelIcon]="cancelIcon()"
    (confirmed)="onConfirmed($event)"
    (cancelled)="onCancelled()"
  >
    <button type="button" class="trigger">Delete</button>
  </fold-inline-confirm>`,
})
class HostComponent {
  readonly match = signal("");
  readonly password = signal(false);
  readonly message = signal<string | undefined>(undefined);
  readonly loading = signal(false);
  readonly cancelIcon = signal(false);
  readonly confirmedWith: string[] = [];
  cancelledCount = 0;
  onConfirmed(value: string): void {
    this.confirmedWith.push(value);
  }
  onCancelled(): void {
    this.cancelledCount += 1;
  }
}

function render() {
  const fixture = TestBed.createComponent(HostComponent);
  fixture.detectChanges();
  const host = fixture.nativeElement as HTMLElement;
  const el = host.querySelector("fold-inline-confirm") as HTMLElement;
  const q = (sel: string) => el.querySelector(sel) as HTMLElement | null;
  const trigger = () => q(".trigger");
  const confirmBtn = () =>
    Array.from(el.querySelectorAll("button")).find((b) =>
      /confirm|working|delete/i.test(b.textContent ?? ""),
    ) as HTMLButtonElement | undefined;
  const buttons = () => Array.from(el.querySelectorAll("button"));
  const input = () => q("input") as HTMLInputElement | null;
  return { fixture, host, el, q, trigger, confirmBtn, buttons, input };
}

function activate(r: ReturnType<typeof render>): void {
  r.trigger()!.click();
  r.fixture.detectChanges();
}

describe("FoldInlineConfirmComponent", () => {
  it("shows the projected trigger and hides the confirm row when idle", () => {
    const r = render();
    expect(r.trigger()).not.toBeNull();
    expect(r.el.querySelector(".fic-confirm")).toBeNull();
  });

  it("swaps to a confirm/cancel row on activate", () => {
    const r = render();
    activate(r);
    expect(r.trigger()).toBeNull();
    expect(r.el.querySelector(".fic-confirm")).not.toBeNull();
  });

  it("emits confirmed with an empty string in the simple family", () => {
    const r = render();
    activate(r);
    const confirm = r
      .buttons()
      .find((b) => /confirm/i.test(b.textContent ?? ""))!;
    confirm.click();
    r.fixture.detectChanges();
    expect(r.host.querySelector("fold-inline-confirm")).not.toBeNull();
    const comp = r.fixture.componentInstance;
    expect(comp.confirmedWith).toEqual([""]);
    // returns to idle → trigger visible again
    expect(r.trigger()).not.toBeNull();
  });

  it("cancels back to idle and emits cancelled", () => {
    const r = render();
    activate(r);
    const cancel = r
      .buttons()
      .find((b) => /cancel/i.test(b.textContent ?? ""))!;
    cancel.click();
    r.fixture.detectChanges();
    expect(r.fixture.componentInstance.cancelledCount).toBe(1);
    expect(r.trigger()).not.toBeNull();
  });

  it("cancels on Escape", () => {
    const r = render();
    activate(r);
    r.el
      .querySelector(".fic-confirm")!
      .dispatchEvent(
        new KeyboardEvent("keydown", { key: "Escape", bubbles: true }),
      );
    r.fixture.detectChanges();
    expect(r.fixture.componentInstance.cancelledCount).toBe(1);
    expect(r.trigger()).not.toBeNull();
  });

  it("renders a masked field prompt in the type-to-confirm family", () => {
    const r = render();
    r.fixture.componentInstance.match.set("prod");
    r.fixture.detectChanges();
    activate(r);
    expect(r.input()).not.toBeNull();
    expect(r.el.querySelector(".fic-prompt")?.textContent).toContain("prod");
  });

  it("keeps confirm disabled until the typed value matches", () => {
    const r = render();
    r.fixture.componentInstance.match.set("prod");
    r.fixture.detectChanges();
    activate(r);
    const confirm = r
      .buttons()
      .find((b) => /confirm/i.test(b.textContent ?? ""));
    expect(confirm?.disabled).toBe(true);

    const field = r.input()!;
    field.value = "PROD"; // case-insensitive + trimmed
    field.dispatchEvent(new Event("input"));
    r.fixture.detectChanges();
    expect(
      r.buttons().find((b) => /confirm/i.test(b.textContent ?? ""))?.disabled,
    ).toBe(false);
  });

  it("emits the typed value on confirm (type family)", () => {
    const r = render();
    r.fixture.componentInstance.match.set("prod");
    r.fixture.detectChanges();
    activate(r);
    const field = r.input()!;
    field.value = "prod";
    field.dispatchEvent(new Event("input"));
    r.fixture.detectChanges();
    r.buttons()
      .find((b) => /confirm/i.test(b.textContent ?? ""))!
      .click();
    r.fixture.detectChanges();
    expect(r.fixture.componentInstance.confirmedWith).toEqual(["prod"]);
  });

  it("masks the field and confirms on any non-empty secret (password family)", () => {
    const r = render();
    r.fixture.componentInstance.password.set(true);
    r.fixture.detectChanges();
    activate(r);
    const field = r.input()!;
    expect(field.getAttribute("type")).toBe("password");
    expect(
      r.buttons().find((b) => /confirm/i.test(b.textContent ?? ""))?.disabled,
    ).toBe(true);
    field.value = "hunter2";
    field.dispatchEvent(new Event("input"));
    r.fixture.detectChanges();
    r.buttons()
      .find((b) => /confirm/i.test(b.textContent ?? ""))!
      .click();
    r.fixture.detectChanges();
    expect(r.fixture.componentInstance.confirmedWith).toEqual(["hunter2"]);
  });

  it("wires the message to the group via aria-describedby", () => {
    const r = render();
    r.fixture.componentInstance.message.set("This cannot be undone.");
    r.fixture.detectChanges();
    activate(r);
    const group = r.el.querySelector(".fic-confirm")!;
    const msg = r.el.querySelector(".fic-message")!;
    expect(group.getAttribute("aria-describedby")).toBe(msg.id);
    expect(msg.id).toBeTruthy();
  });

  it("shows the busy label and blocks confirm while loading", () => {
    const r = render();
    r.fixture.componentInstance.loading.set(true);
    r.fixture.detectChanges();
    activate(r);
    const confirm = r.buttons()[0];
    expect(confirm.disabled).toBe(true);
    expect(confirm.textContent?.toLowerCase()).toContain("working");
  });

  it("uses an icon-only cancel when cancelIcon is set", () => {
    const r = render();
    r.fixture.componentInstance.cancelIcon.set(true);
    r.fixture.detectChanges();
    activate(r);
    expect(r.el.querySelector("fold-button-icon")).not.toBeNull();
  });

  it("respects per-instance label overrides via the provider", () => {
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({
      providers: [provideFoldInlineConfirmLabels({ confirm: "Supprimer" })],
    });
    const fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement.querySelector(
      "fold-inline-confirm",
    ) as HTMLElement;
    (el.querySelector(".trigger") as HTMLElement).click();
    fixture.detectChanges();
    const labels = Array.from(el.querySelectorAll("button")).map((b) =>
      b.textContent?.trim(),
    );
    expect(labels.some((t) => t === "Supprimer")).toBe(true);
  });
});
