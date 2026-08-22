import { readFileSync } from "node:fs";
import { join } from "node:path";
import { Component, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import { FoldDangerZoneComponent } from "./danger-zone.component";

@Component({
  standalone: true,
  imports: [FoldDangerZoneComponent],
  template: `<fold-danger-zone
    [title]="title()"
    [appearance]="appearance()"
    [actionLabel]="actionLabel()"
    [confirmPhrase]="phrase()"
    (confirmed)="onConfirmed($event)"
  >
    <p>Deletes everything. Cannot be undone.</p>
  </fold-danger-zone>`,
})
class HostComponent {
  readonly title = signal("Delete workspace");
  readonly appearance = signal<"filled" | "section">("filled");
  readonly actionLabel = signal<string | undefined>("Delete workspace");
  readonly phrase = signal<string | undefined>("my-workspace");
  readonly confirmedWith = signal<string | null>(null);
  onConfirmed(value: string): void {
    this.confirmedWith.set(value);
  }
}

function render() {
  const fixture = TestBed.createComponent(HostComponent);
  fixture.detectChanges();
  const host = fixture.nativeElement as HTMLElement;
  return {
    fixture,
    cmp: fixture.componentInstance,
    zone: () => host.querySelector<HTMLElement>("fold-danger-zone")!,
    trigger: () => host.querySelector<HTMLButtonElement>(".fic-trigger button"),
    input: () => host.querySelector<HTMLInputElement>("input"),
    confirmBtn: () =>
      host.querySelector<HTMLButtonElement>(".fic-actions button"),
    type(text: string) {
      const el = this.input()!;
      el.value = text;
      el.dispatchEvent(new Event("input"));
      fixture.detectChanges();
    },
  };
}

describe("FoldDangerZoneComponent", () => {
  it("is a group labelled by its title, reflecting the appearance", () => {
    const r = render();
    const labelledby = r.zone().getAttribute("aria-labelledby");
    expect(r.zone().getAttribute("role")).toBe("group");
    expect(r.zone().querySelector(`#${labelledby}`)?.textContent).toBe(
      "Delete workspace",
    );
    expect(r.zone().getAttribute("data-appearance")).toBe("filled");
    r.cmp.appearance.set("section");
    r.fixture.detectChanges();
    expect(r.zone().getAttribute("data-appearance")).toBe("section");
  });

  it("renders no action when actionLabel is unset (a framed danger section)", () => {
    const r = render();
    r.cmp.actionLabel.set(undefined);
    r.fixture.detectChanges();
    expect(r.trigger()).toBeNull();
    expect(
      r.fixture.nativeElement.querySelector("fold-inline-confirm"),
    ).toBeNull();
  });

  it("reveals the confirm input only after the button is clicked", () => {
    const r = render();
    // idle: the trigger shows, no confirm input
    expect(r.trigger()).not.toBeNull();
    expect(r.input()).toBeNull();
    // click reveals the type-to-confirm field
    r.trigger()!.click();
    r.fixture.detectChanges();
    expect(r.input()).not.toBeNull();
  });

  it("arms the confirm only on an exact phrase match, then emits it", () => {
    const r = render();
    r.trigger()!.click();
    r.fixture.detectChanges();

    r.type("nope");
    expect(r.confirmBtn()!.disabled).toBe(true);

    r.type("my-workspace");
    expect(r.confirmBtn()!.disabled).toBe(false);
    r.confirmBtn()!.click();
    r.fixture.detectChanges();
    expect(r.cmp.confirmedWith()).toBe("my-workspace");
  });

  it("with no confirmPhrase it is a plain reveal-on-click confirm", () => {
    const r = render();
    r.cmp.phrase.set(undefined);
    r.fixture.detectChanges();
    r.trigger()!.click();
    r.fixture.detectChanges();
    // simple family: no input, confirm enabled immediately
    expect(r.input()).toBeNull();
    expect(r.confirmBtn()!.disabled).toBe(false);
    r.confirmBtn()!.click();
    r.fixture.detectChanges();
    expect(r.cmp.confirmedWith()).toBe("");
  });

  /**
   * The SCSS is not compiled in the unit-test env, so a computed-style
   * assertion would pass against an empty stylesheet. Lock the SOURCE, as
   * elsewhere in the package.
   */
  it("keeps a content-based minimum, so a tight column cannot crush it", () => {
    // `overflow: hidden` (rounded corners) drops this box's automatic minimum
    // size to ZERO as a flex or grid item. In a full panel it was measured at
    // 2px — its two borders — which erases a destructive action from the page
    // without so much as a scrollbar to hint at it.
    const raw = readFileSync(
      join(
        process.cwd(),
        "src/components/actions/danger-zone/danger-zone.component.scss",
      ),
      "utf-8",
    );
    const source = raw
      .replace(/\/\*[\s\S]*?\*\//g, "")
      .replace(/\/\/.*$/gm, "");
    expect(source).toMatch(/min-height:\s*min-content/);
  });
});
