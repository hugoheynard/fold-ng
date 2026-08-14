import { Component } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect, beforeEach } from "vitest";
import { provideFoldCommonLabels } from "../common-labels";
import { FoldLabelComponent } from "../input/label.component";
import { FoldListboxComponent } from "../listbox/listbox.component";
import { FoldLoadingStateComponent } from "../../feedback/state/loading-state.component";
import { FoldInfoComponent } from "../../overlays/info/info.component";

/**
 * The four words the package says on its own, across four components. The point
 * of the token is that ONE provider translates all of them — the shape a
 * non-English app actually needs, instead of the same word repeated at every
 * call site (25 `optionalLabel` attributes in the app that prompted this).
 */
@Component({
  standalone: true,
  imports: [
    FoldLabelComponent,
    FoldListboxComponent,
    FoldLoadingStateComponent,
    FoldInfoComponent,
  ],
  template: `<fold-label text="Name" optional />
    <fold-listbox allowClear value="a" [options]="options" />
    <fold-loading />
    <fold-info text="Why this matters" />`,
})
class HostComponent {
  readonly options = [{ value: "a", label: "A" }];
}

/** The same host, but each control overriding the word for itself. */
@Component({
  standalone: true,
  imports: [FoldLabelComponent, FoldLoadingStateComponent],
  template: `<fold-label text="Name" optional optionalLabel="si vous voulez" />
    <fold-loading message="Crunching numbers…" />`,
})
class OverridingHost {}

function render<T>(type: new () => T): HTMLElement {
  const fixture = TestBed.createComponent(type);
  fixture.detectChanges();
  return fixture.nativeElement as HTMLElement;
}

describe("the package's shared labels", () => {
  it("speak English with no provider at all", () => {
    const host = render(HostComponent);

    expect(host.querySelector(".opt")?.textContent).toContain("optional");
    expect(host.querySelector("fold-loading")?.textContent).toContain(
      "Loading...",
    );
    expect(
      host.querySelector("fold-info button")?.getAttribute("aria-label"),
    ).toBe("More information");
  });

  describe("with one app-wide provider", () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
          provideFoldCommonLabels({
            optional: "facultatif",
            info: "En savoir plus",
            clear: "Effacer",
            loading: "Chargement…",
          }),
        ],
      });
    });

    it("translates every one of them, in every component", () => {
      const host = render(HostComponent);

      expect(host.querySelector(".opt")?.textContent).toContain("facultatif");
      expect(host.querySelector("fold-loading")?.textContent).toContain(
        "Chargement…",
      );
      expect(
        host.querySelector("fold-info button")?.getAttribute("aria-label"),
      ).toBe("En savoir plus");
    });

    it("still lets one instance say something else", () => {
      // The provider sets the house word; a field with its own reason to differ
      // keeps winning. Precedence: English ← provider ← instance.
      const host = render(OverridingHost);

      expect(host.querySelector(".opt")?.textContent).toContain(
        "si vous voulez",
      );
      expect(host.querySelector("fold-loading")?.textContent).toContain(
        "Crunching numbers…",
      );
    });
  });

  it("keeps a partial override English on the keys it omits", () => {
    TestBed.configureTestingModule({
      providers: [provideFoldCommonLabels({ optional: "facultatif" })],
    });
    const host = render(HostComponent);

    expect(host.querySelector(".opt")?.textContent).toContain("facultatif");
    expect(host.querySelector("fold-loading")?.textContent).toContain(
      "Loading...",
    );
  });
});
