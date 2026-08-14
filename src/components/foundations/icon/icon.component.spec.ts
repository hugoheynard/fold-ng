import { TestBed } from "@angular/core/testing";
import { describe, it, expect, vi } from "vitest";
import { FoldIconComponent } from "./icon.component";
import { FoldIconRegistry, provideFoldIcons } from "./icon-registry.service";
import { FOLD_ICON_SPRITE_ID } from "./icon-sprite";

function mount(name: string, extra: Record<string, unknown> = {}) {
  const fixture = TestBed.createComponent(FoldIconComponent);
  fixture.componentRef.setInput("name", name);
  for (const [k, v] of Object.entries(extra)) {
    fixture.componentRef.setInput(k, v);
  }
  fixture.detectChanges();
  const root = fixture.nativeElement.querySelector(".icon-root") as SVGElement;
  return { fixture, root, cmp: fixture.componentInstance };
}

function sprite(): HTMLElement | null {
  return document.getElementById(FOLD_ICON_SPRITE_ID);
}

describe("FoldIconComponent", () => {
  it("renders a <use> referencing the icon's sprite symbol", () => {
    const use = mount("search").root.querySelector("use");
    expect(use?.getAttribute("href")).toBe("#fold-icon-search");
    // …and the symbol is mounted in the shared sprite.
    expect(sprite()?.querySelector("symbol#fold-icon-search")).toBeTruthy();
  });

  it("renders nothing for an unknown name (no <use>)", () => {
    const warn = vi.spyOn(console, "warn").mockImplementation(() => undefined);
    expect(mount("__nope__").root.querySelector("use")).toBeNull();
    warn.mockRestore();
  });

  it("sets aria-hidden when no title is given, aria-label when it is", () => {
    expect(mount("bin").root.getAttribute("aria-hidden")).toBe("true");
    const { root } = mount("edit", { title: "Edit entry" });
    expect(root.getAttribute("aria-label")).toBe("Edit entry");
    expect(root.getAttribute("aria-hidden")).toBeNull();
  });

  it("maps a preset to its icon-size token and a number to px", () => {
    expect(mount("search", { size: "lg" }).cmp.sizeVar()).toBe(
      "var(--fold-icon-size-lg, 24px)",
    );
    expect(mount("search", { size: 42 }).cmp.sizeVar()).toBe("42px");
  });

  it("warns on an unknown icon name", () => {
    const warn = vi.spyOn(console, "warn").mockImplementation(() => undefined);
    mount("__nope__");
    expect(warn).toHaveBeenCalled();
    warn.mockRestore();
  });

  it("paints a tone colour on the host, and inherits (no override) when unset", () => {
    const host = (name: string, extra = {}) =>
      mount(name, extra).fixture.nativeElement as HTMLElement;
    // unset → no inline colour, so it inherits its context
    expect(host("search").style.color).toBe("");
    // set → the tone's role token lands on the host (flows in via currentColor)
    expect(host("search", { tone: "primary" }).style.color).toBe(
      "var(--fold-color-primary-text)",
    );
  });
});

describe("FoldIconRegistry (consumer extensibility)", () => {
  it("resolves a runtime-registered custom icon reactively", () => {
    const reg = TestBed.inject(FoldIconRegistry);
    const { fixture, root } = mount("my-custom");
    expect(root.querySelector("use")).toBeNull(); // unknown at first
    reg.register("my-custom", '<svg viewBox="0 0 1 1"><path d="M0 0"/></svg>');
    fixture.detectChanges();
    expect(root.querySelector("use")?.getAttribute("href")).toBe(
      "#fold-icon-my-custom",
    );
    expect(sprite()?.querySelector("symbol#fold-icon-my-custom")).toBeTruthy();
  });

  it("registerMany merges a set; a custom key overrides a built-in", () => {
    const reg = TestBed.inject(FoldIconRegistry);
    expect(reg.has("search")).toBe(true);
    reg.registerMany({
      "brand-a": "<svg id='a'></svg>",
      search: "<svg id='s'></svg>",
    });
    expect(reg.resolve("brand-a")).toContain("id='a'");
    expect(reg.resolve("search")).toContain("id='s'");
  });

  it("provideFoldIcons merges consumer icons at bootstrap (over built-ins)", () => {
    TestBed.configureTestingModule({
      providers: [
        provideFoldIcons({
          "my-logo": "<svg id='logo'></svg>",
          search: "<svg id='override'></svg>",
        }),
      ],
    });
    const reg = TestBed.inject(FoldIconRegistry);
    expect(reg.resolve("my-logo")).toContain("id='logo'");
    expect(reg.resolve("search")).toContain("id='override'"); // built-in overridden
  });

  it("rejects unsafe markup through the register paths (trust guard)", () => {
    const reg = TestBed.inject(FoldIconRegistry);
    expect(() =>
      reg.register("xss", "<svg><script>alert(1)</script></svg>"),
    ).toThrow();
    expect(() => reg.registerMany({ bad: "<div>nope</div>" })).toThrow();
  });
});

describe("the icon catalogue is closed, and extensible", () => {
  it("names every icon the package's own components ask for", () => {
    // `fold-calendar-agenda` asked for "inbox" for months and drew nothing —
    // the escape-hatched type let it through, and only a console.warn said so.
    // This is the runtime half of the guard the type now provides.
    const registry = TestBed.inject(FoldIconRegistry);

    for (const name of ["inbox", "alert", "login", "hash", "phone"] as const) {
      expect(registry.has(name), `built-in "${name}" is missing`).toBe(true);
    }
  });

  it("lets a consumer override a built-in, keeping its name", () => {
    // The override case needs NO declaration: the name is already known, only
    // the art changes. This is what a host does to re-brand a glyph.
    const registry = TestBed.inject(FoldIconRegistry);
    const mine = '<svg xmlns="http://www.w3.org/2000/svg" data-mine="1"></svg>';

    registry.register("bin", mine);

    expect(registry.resolve("bin")).toBe(mine);
  });

  it("hands back names typed well enough to feed straight back in", () => {
    // What lets tooling browse the live catalogue without an assertion.
    const registry = TestBed.inject(FoldIconRegistry);
    const first = registry.names()[0];

    expect(first).toBeDefined();
    expect(registry.has(first ?? "bin")).toBe(true);
  });
});
