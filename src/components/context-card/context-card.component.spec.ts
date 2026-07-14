import { Component, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import { Sh3ContextCardComponent } from "./context-card.component";
import type { Sh3IconName } from "../icon/icon.registry";

@Component({
  standalone: true,
  imports: [Sh3ContextCardComponent],
  template: `<sh3-context-card
    [icon]="icon()"
    [title]="title()"
    [subtitle]="subtitle()"
  >
    <div class="row">Body</div>
    @if (withFooter()) {
      <button footer class="foot-act">Voir</button>
    }
  </sh3-context-card>`,
})
class HostComponent {
  readonly icon = signal<Sh3IconName | undefined>(undefined);
  readonly title = signal("Contexte");
  readonly subtitle = signal<string | undefined>(undefined);
  readonly withFooter = signal(false);
}

function render() {
  const fixture = TestBed.createComponent(HostComponent);
  fixture.detectChanges();
  const host = fixture.nativeElement as HTMLElement;
  return { fixture, host };
}

describe("Sh3ContextCardComponent", () => {
  it("renders the title via sh3-element-title (heading) and projects the body", () => {
    const { host } = render();
    const title = host.querySelector(
      "sh3-element-title[variant='title'] .et-label",
    );
    expect(title?.textContent?.trim()).toBe("Contexte");
    expect(title?.getAttribute("role")).toBe("heading");
    expect(host.querySelector(".cc-body .row")?.textContent).toBe("Body");
  });

  it("omits the icon + subtitle until provided", () => {
    const { fixture, host } = render();
    expect(host.querySelector(".cc-icon")).toBeNull();
    expect(host.querySelector(".cc-sub")).toBeNull();

    fixture.componentInstance.icon.set("company");
    fixture.componentInstance.subtitle.set("Activité de l'espace");
    fixture.detectChanges();
    expect(host.querySelector(".cc-icon sh3-icon")).not.toBeNull();
    expect(host.querySelector(".cc-sub")?.textContent?.trim()).toBe(
      "Activité de l'espace",
    );
  });

  it("projects a footer action into the [footer] slot", () => {
    const { fixture, host } = render();
    expect(host.querySelector(".cc-foot .foot-act")).toBeNull();

    fixture.componentInstance.withFooter.set(true);
    fixture.detectChanges();
    expect(host.querySelector(".cc-foot .foot-act")).not.toBeNull();
  });

  it("composes sh3-card for its surface", () => {
    const { host } = render();
    expect(host.querySelector("sh3-card")).not.toBeNull();
  });
});
