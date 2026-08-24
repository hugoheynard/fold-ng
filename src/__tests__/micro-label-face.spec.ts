import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, it, expect } from "vitest";

/** Repo-relative read — Vite rewrites `new URL('….css', import.meta.url)` into
 *  an asset URL, so paths are resolved from the project root instead. */
const read = (relative: string): string =>
  readFileSync(join(process.cwd(), relative), "utf8");

/**
 * The micro-label register is ONE role wearing ONE face.
 *
 * Three components render it — a section title in `eyebrow` skin, a data-table
 * column head, a `fold-element-title` eyebrow — at the same size, weight and
 * tracking. `--fold-font-label` is what lets a host retune all three with one
 * declaration; the day one of them stops naming the token, the host's mono face
 * silently drops off that one component and nothing else says so. The drift is
 * invisible in every other gate: the CSS still parses, the types still check,
 * and the component still renders — just in the wrong face.
 */
const CONSUMERS = [
  "src/components/content/element-title/element-title.component.scss",
  "src/components/content/data-table/data-table.component.scss",
  "src/components/layout/page-section/page-section.component.scss",
];

describe("--fold-font-label", () => {
  it("is named by every component that renders the micro-label register", () => {
    for (const relative of CONSUMERS) {
      expect(
        read(relative),
        `${relative} no longer names --fold-font-label`,
      ).toContain("font-family: var(--fold-font-label)");
    }
  });

  it("defaults to `inherit`, so it changes nothing until a host opts in", () => {
    expect(read("src/tokens/scales.css")).toContain(
      "--fold-font-label: inherit;",
    );
  });
});
