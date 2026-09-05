import { type ComponentFixture, TestBed } from "@angular/core/testing";
import { describe, it, expect, vi } from "vitest";
import { FoldSearchComponent } from "./search.component";

function setup(delayMs?: number): {
  type: (v: string) => void;
  emitted: string[];
  fixture: ComponentFixture<FoldSearchComponent>;
  host: HTMLElement;
} {
  TestBed.configureTestingModule({ imports: [FoldSearchComponent] });
  const fixture = TestBed.createComponent(FoldSearchComponent);
  if (delayMs !== undefined) {
    fixture.componentRef.setInput("delayMs", delayMs);
  }
  fixture.detectChanges();

  const emitted: string[] = [];
  fixture.componentInstance.searchChange.subscribe((v) => emitted.push(v));

  const host = fixture.nativeElement as HTMLElement;
  const input = host.querySelector("input");
  if (input === null) {
    throw new Error("inner input not found");
  }
  const type = (v: string): void => {
    input.value = v;
    input.dispatchEvent(new Event("input"));
  };
  return { type, emitted, fixture, host };
}

describe("FoldSearchComponent", () => {
  it("emits once typing pauses for the delay", () => {
    vi.useFakeTimers();
    try {
      const { type, emitted } = setup();
      type("alice");
      expect(emitted).toEqual([]); // still within the quiet period
      vi.advanceTimersByTime(300);
      expect(emitted).toEqual(["alice"]);
    } finally {
      vi.useRealTimers();
    }
  });

  it("resets the timer on each keystroke — only the settled value emits", () => {
    vi.useFakeTimers();
    try {
      const { type, emitted } = setup();
      type("al");
      vi.advanceTimersByTime(150); // not long enough
      type("alice");
      vi.advanceTimersByTime(300);
      expect(emitted).toEqual(["alice"]); // 'al' never fired
    } finally {
      vi.useRealTimers();
    }
  });

  it("trims the emitted term", () => {
    vi.useFakeTimers();
    try {
      const { type, emitted } = setup();
      type("  bob  ");
      vi.advanceTimersByTime(300);
      expect(emitted).toEqual(["bob"]);
    } finally {
      vi.useRealTimers();
    }
  });

  it("does not re-emit an unchanged settled value", () => {
    vi.useFakeTimers();
    try {
      const { type, emitted } = setup();
      type("x");
      vi.advanceTimersByTime(300);
      type("x");
      vi.advanceTimersByTime(300);
      expect(emitted).toEqual(["x"]);
    } finally {
      vi.useRealTimers();
    }
  });

  it("honours a custom delay", () => {
    vi.useFakeTimers();
    try {
      const { type, emitted } = setup(500);
      type("z");
      vi.advanceTimersByTime(300);
      expect(emitted).toEqual([]);
      vi.advanceTimersByTime(200);
      expect(emitted).toEqual(["z"]);
    } finally {
      vi.useRealTimers();
    }
  });

  it("shows the typed term straight away, without waiting for the delay", () => {
    vi.useFakeTimers();
    try {
      const { type, fixture } = setup();
      type("ecl");

      // La valeur est l'ÉTAT : la différer ferait un champ qui n'écrit pas.
      expect(fixture.componentInstance.value()).toBe("ecl");
    } finally {
      vi.useRealTimers();
    }
  });

  it("is steerable from outside — a write empties the box", () => {
    const { fixture, host } = setup();
    fixture.componentRef.setInput("value", "pain");
    fixture.detectChanges();
    expect(host.querySelector("input")?.value).toBe("pain");

    fixture.componentRef.setInput("value", "");
    fixture.detectChanges();

    expect(host.querySelector("input")?.value).toBe("");
  });

  /**
   * Écrire `value` de l'extérieur n'émet PAS : celui qui écrit sait déjà. Sans
   * cette règle, un parent qui range la valeur dans son propre signal
   * rebouclerait sur lui-même.
   */
  it("does not emit when the value is written from outside", () => {
    vi.useFakeTimers();
    try {
      const { fixture, emitted } = setup();
      fixture.componentRef.setInput("value", "pain");
      fixture.detectChanges();
      vi.advanceTimersByTime(1000);

      expect(emitted).toEqual([]);
    } finally {
      vi.useRealTimers();
    }
  });

  it("clears from the × and gives the focus back to the field", () => {
    const { type, host, fixture } = setup();
    type("eclair");
    fixture.detectChanges();

    const clear = host.querySelector<HTMLButtonElement>("button[aria-label]");
    expect(clear).not.toBeNull();
    clear?.click();
    fixture.detectChanges();

    const input = host.querySelector("input");
    expect(input?.value).toBe("");
    expect(document.activeElement).toBe(input);
  });

  it("has no × to show while the box is empty", () => {
    const { host } = setup();

    expect(host.querySelector("button[aria-label]")).toBeNull();
  });

  it("draws no count until it is given one", () => {
    const { host } = setup();

    expect(host.querySelector(".se-count")).toBeNull();
  });

  /**
   * Le compte est la RÉPONSE de la recherche : il doit être annoncé, sinon un
   * utilisateur qui ne voit pas la grille n'apprend jamais que quatre cents
   * lignes sont devenues trois. C'est ce que chaque écran oubliait en l'écrivant
   * à la main.
   */
  it("announces the count politely, and reads « number label »", () => {
    const { fixture, host } = setup();
    fixture.componentRef.setInput("resultCount", 14);
    fixture.componentRef.setInput("resultLabel", "pièces");
    fixture.detectChanges();

    const count = host.querySelector(".se-count");
    expect(count?.textContent?.trim()).toBe("14 pièces");
    expect(count?.getAttribute("aria-live")).toBe("polite");
    expect(count?.getAttribute("role")).toBe("status");
  });

  it("shows a count of zero — « aucun résultat » is a result", () => {
    const { fixture, host } = setup();
    fixture.componentRef.setInput("resultCount", 0);
    fixture.detectChanges();

    expect(host.querySelector(".se-count")?.textContent?.trim()).toBe(
      "0 results",
    );
  });

  it("carries its placement as a host class, and defaults to `end`", () => {
    const { fixture, host } = setup();
    expect(host.className).toBe("end");

    fixture.componentRef.setInput("placement", "top");
    fixture.detectChanges();

    expect(host.className).toBe("top");
  });

  /** Au-dessus, le compte précède le champ dans l'ordre du DOM comme à l'œil. */
  it("puts the count before the field when placed on top", () => {
    const { fixture, host } = setup();
    fixture.componentRef.setInput("resultCount", 3);
    fixture.componentRef.setInput("placement", "top");
    fixture.detectChanges();

    const children = [...host.children].map((el) => el.tagName.toLowerCase());
    expect(children.indexOf("p")).toBeLessThan(children.indexOf("fold-input"));
  });
});
