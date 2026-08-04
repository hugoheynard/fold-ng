import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, it, expect } from "vitest";

/**
 * The house-scrollbar CSS ships in `tokens.css` (so a freeze/scrollbar works in
 * production, where only the tokens are imported). Lock the two halves:
 * - the `--fold-scrollbar-*` knobs are declared (out of the colour catalogue on
 *   purpose — they're component knobs, like the page-scaffold vars);
 * - the `::-webkit-scrollbar` layer targets BOTH the shell box (`.fold-shell-scroll`)
 *   and the directive (`.fold-scroll-region`), behind a `@supports selector()`.
 */
const tokensDir = join(dirname(fileURLToPath(import.meta.url)), "..");
const semantic = readFileSync(join(tokensDir, "semantic.css"), "utf8");

describe("house scrollbar (tokens.css)", () => {
  it("declares the --fold-scrollbar-* knobs", () => {
    for (const token of [
      "--fold-scrollbar-size",
      "--fold-scrollbar-radius",
      "--fold-scrollbar-thumb",
      "--fold-scrollbar-track",
    ]) {
      expect(semantic).toContain(`${token}:`);
    }
  });

  it("gates the WebKit pseudo behind @supports selector(::-webkit-scrollbar)", () => {
    expect(semantic).toContain("@supports selector(::-webkit-scrollbar)");
  });

  it("styles the scrollbar for both the shell box and the directive", () => {
    expect(semantic).toContain(".fold-shell-scroll::-webkit-scrollbar-thumb");
    expect(semantic).toContain(".fold-scroll-region::-webkit-scrollbar-thumb");
  });

  it("freezes a region with a class, never an inline overflow write", () => {
    expect(semantic).toMatch(
      /\.fold-scroll-frozen\s*\{\s*overflow:\s*hidden\s*!important/,
    );
  });
});
