import { Component, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import { FoldContextCardComponent } from "./context-card.component";
import type { FoldIconName } from "../../foundations/icon/builtin-icons";

@Component({
  standalone: true,
  imports: [FoldContextCardComponent],
  template: `<fold-context-card
    [icon]="icon()"
    [title]="title()"
    [subtitle]="subtitle()"
  >
    <div class="row">Body</div>
    @if (withFooter()) {
      <button footer class="foot-act">Voir</button>
    }
  </fold-context-card>`,
})
class HostComponent {
  readonly icon = signal<FoldIconName | undefined>(undefined);
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

describe("FoldContextCardComponent", () => {
  it("renders the title via fold-element-title (heading) and projects the body", () => {
    const { host } = render();
    const title = host.querySelector(
      "fold-element-title[variant='title'] .et-label",
    );
    expect(title?.textContent?.trim()).toBe("Contexte");
    expect(title?.getAttribute("role")).toBe("heading");
    expect(host.querySelector(".cc-body .row")?.textContent).toBe("Body");
  });

  it("omits the icon + subtitle until provided (via element-title)", () => {
    const { fixture, host } = render();
    expect(host.querySelector(".et-icon")).toBeNull();
    expect(host.querySelector(".et-sub")).toBeNull();

    fixture.componentInstance.icon.set("company");
    fixture.componentInstance.subtitle.set("Activité de l'espace");
    fixture.detectChanges();
    expect(host.querySelector(".et-icon fold-icon")).not.toBeNull();
    expect(host.querySelector(".et-sub")?.textContent?.trim()).toBe(
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

  it("composes fold-card for its surface", () => {
    const { host } = render();
    expect(host.querySelector("fold-card")).not.toBeNull();
  });
});
