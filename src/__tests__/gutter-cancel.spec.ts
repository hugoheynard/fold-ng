import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, it, expect } from "vitest";

/** Repo-relative read — Vite rewrites `new URL('….css', import.meta.url)` into
 *  an asset URL, so paths are resolved from the project root instead. */
const read = (relative: string): string =>
  readFileSync(join(process.cwd(), relative), "utf8");

const LAYOUT = "src/components/layout/page-layout/page-layout.component.scss";
/** Everything that breaks OUT of the page gutter by cancelling it. */
const CANCELLERS = [
  "src/components/layout/page-section/page-section.component.scss",
  "src/components/layout/aside-layout/aside-layout.component.scss",
];

/**
 * A bleed must cancel the gutter the page **pays**, never the one it was asked
 * for.
 *
 * They are not the same number: below 640px `fold-page-layout` halves its inset,
 * and a canceller pinned to the authored `--fold-page-gutter` hung half a gutter
 * off each edge — precisely where there was least room for it. The page
 * therefore publishes `--fold-page-gutter-effective` and every canceller reads
 * that one.
 *
 * This is a source-level check on purpose: the drift is a media query away from
 * the declaration that causes it, jsdom evaluates no media queries, and the
 * failure is a horizontal overflow that no unit test would ever see.
 */
describe("--fold-page-gutter-effective", () => {
  it("is what the page pays its inset with", () => {
    const layout = read(LAYOUT);
    expect(layout).toContain(
      "--fold-page-gutter-effective: var(--fold-page-gutter",
    );
    expect(layout).toContain(
      "padding-inline: var(--fold-page-gutter-effective)",
    );
  });

  it("is re-pointed — not merely halved — on a narrow viewport", () => {
    // Halving `padding-inline` alone is exactly the bug: the padding moves and
    // every canceller keeps cancelling the old number.
    const layout = read(LAYOUT);
    expect(layout).toContain(
      "--fold-page-gutter-effective: calc(var(--fold-page-gutter, 32px) / 2)",
    );
  });

  it("is the variable every bleed cancels", () => {
    for (const relative of CANCELLERS) {
      const css = read(relative);
      expect(css, `${relative} does not cancel the effective gutter`).toContain(
        "-1 * var(--fold-page-gutter-effective",
      );
    }
  });
});
