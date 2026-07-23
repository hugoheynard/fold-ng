import { TestBed } from "@angular/core/testing";
import { describe, it, expect, vi } from "vitest";
import { FoldIconComponent } from "./icon.component";
import { FoldIconRegistry, provideFoldIcons } from "./icon-registry.service";

function mount(name: string, extra: Record<string, unknown> = {}) {
  const fixture = TestBed.createComponent(FoldIconComponent);
  fixture.componentRef.setInput("name", name);
  for (const [k, v] of Object.entries(extra)) {
    fixture.componentRef.setInput(k, v);
  }
  fixture.detectChanges();
  const root = fixture.nativeElement.querySelector(".icon-root") as HTMLElement;
  return { fixture, root, cmp: fixture.componentInstance };
}

describe("FoldIconComponent", () => {
  it("renders the SVG markup for a built-in icon", () => {
    expect(mount("search").root.innerHTML).toContain("<svg");
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
});

describe("FoldIconRegistry (consumer extensibility)", () => {
  it("resolves a runtime-registered custom icon reactively", () => {
    const reg = TestBed.inject(FoldIconRegistry);
    const { fixture, root } = mount("my-custom");
    expect(root.innerHTML).not.toContain("<svg"); // unknown at first
    reg.register("my-custom", "<svg data-custom></svg>");
    fixture.detectChanges();
    expect(root.innerHTML).toContain("data-custom");
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
