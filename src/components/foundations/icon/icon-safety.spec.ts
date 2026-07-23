import { describe, it, expect } from "vitest";
import { assertSvgIcon, assertIconSet } from "./icon-safety";
import { FOLD_BUILTIN_ICONS } from "./builtin-icons";

describe("assertSvgIcon (trust guard)", () => {
  it("accepts a static <svg> string", () => {
    expect(() =>
      assertSvgIcon("ok", '<svg viewBox="0 0 24 24"><path d="M0 0h24"/></svg>'),
    ).not.toThrow();
  });

  it("rejects markup whose root is not <svg>", () => {
    expect(() => assertSvgIcon("bad", "<div>nope</div>")).toThrow(/literal/);
    expect(() => assertSvgIcon("bad", "hello")).toThrow();
  });

  it("rejects an embedded <script>", () => {
    expect(() =>
      assertSvgIcon("xss", "<svg><script>alert(1)</script></svg>"),
    ).toThrow(/script/);
  });

  it("rejects an inline event handler (on*=)", () => {
    expect(() =>
      assertSvgIcon("xss", '<svg onload="alert(1)"><path/></svg>'),
    ).toThrow(/event/);
  });

  it("passes the entire built-in catalogue (self-check on trusted markup)", () => {
    expect(() => assertIconSet(FOLD_BUILTIN_ICONS)).not.toThrow();
  });
});
