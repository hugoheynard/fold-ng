import { Component, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import { FoldDangerZoneComponent } from "./danger-zone.component";

@Component({
  standalone: true,
  imports: [FoldDangerZoneComponent],
  template: `<fold-danger-zone
    [title]="title()"
    [confirmPhrase]="phrase()"
    [(armed)]="armed"
  >
    <p>Deletes everything. Cannot be undone.</p>
    <button actions class="act" [disabled]="!armed()">Delete</button>
  </fold-danger-zone>`,
})
class HostComponent {
  readonly title = signal("Delete workspace");
  readonly phrase = signal<string | undefined>("my-workspace");
  readonly armed = signal(false);
}

function render() {
  const fixture = TestBed.createComponent(HostComponent);
  fixture.detectChanges();
  fixture.detectChanges();
  const host = fixture.nativeElement as HTMLElement;
  const input = () => host.querySelector<HTMLInputElement>("input")!;
  return {
    fixture,
    armed: fixture.componentInstance.armed,
    phrase: fixture.componentInstance.phrase,
    zone: () => host.querySelector<HTMLElement>("fold-danger-zone")!,
    action: () => host.querySelector<HTMLButtonElement>(".act")!,
    input,
    type(text: string) {
      const el = input();
      el.value = text;
      el.dispatchEvent(new Event("input"));
      fixture.detectChanges();
    },
  };
}

describe("FoldDangerZoneComponent", () => {
  it("is a group labelled by its title", () => {
    const r = render();
    const labelledby = r.zone().getAttribute("aria-labelledby");
    expect(r.zone().getAttribute("role")).toBe("group");
    expect(r.zone().querySelector(`#${labelledby}`)?.textContent).toBe(
      "Delete workspace",
    );
  });

  it("starts disarmed and arms only on an exact phrase match", () => {
    const r = render();
    expect(r.armed()).toBe(false);
    expect(r.action().disabled).toBe(true);

    r.type("my-workspac"); // close but not exact
    expect(r.armed()).toBe(false);

    r.type("my-workspace"); // exact
    expect(r.armed()).toBe(true);
    expect(r.action().disabled).toBe(false);
  });

  it("trims surrounding whitespace before matching", () => {
    const r = render();
    r.type("  my-workspace  ");
    expect(r.armed()).toBe(true);
  });

  it("disarms again when the text stops matching", () => {
    const r = render();
    r.type("my-workspace");
    expect(r.armed()).toBe(true);
    r.type("my-workspace!");
    expect(r.armed()).toBe(false);
  });

  it("with no confirmPhrase there is no field and it is armed immediately", () => {
    const r = render();
    r.phrase.set(undefined);
    r.fixture.detectChanges();
    expect(r.fixture.nativeElement.querySelector("input")).toBeNull();
    expect(r.armed()).toBe(true);
  });
});
