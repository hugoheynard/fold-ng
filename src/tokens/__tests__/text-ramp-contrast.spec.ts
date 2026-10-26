import { describe, it, expect } from "vitest";
import {
  contrast,
  cssBlock,
  primitiveHexes,
  readTokenCss,
  resolve,
  roleValue,
  type Rgb,
} from "./color-math";

/**
 * Text-ramp contract (WCAG 1.4.3, RGAA 3.2).
 *
 * `text-muted` is the lowest tier allowed to carry information — placeholders,
 * breadcrumb, page counts, empty-state lines — so it must clear 4.5:1 on the
 * page and on a card in every region. `text-faded` is held to 3:1 (large text,
 * graphics) and stays out of information. And the ramp keeps its order,
 * secondary > muted > faded, each step at least STEP apart, so darkening the
 * greys did not flatten the hierarchy the three tiers exist for.
 */

const TEXT = 4.5;
const FADED = 3.0;
/** Smallest ratio between two neighbouring tiers — the chrome of navi is the
 *  tightest (≈ 1.14 between muted and faded, measured 2026-10-26). */
const STEP = 1.1;

const refs = primitiveHexes();
const semantic = readTokenCss("semantic.css");
const root = cssBlock(semantic, ":root");
const navi = cssBlock(semantic, '[data-theme="navi"]');

interface Region {
  readonly name: string;
  /** Own block first, then the blocks it inherits from. */
  readonly blocks: readonly string[];
}

const theme = (name: string): Region => ({
  name,
  blocks: [cssBlock(semantic, `[data-theme="${name}"]`), root],
});

const REGIONS: readonly Region[] = [
  { name: "umbra", blocks: [root] },
  theme("lumen"),
  theme("bubbly"),
  theme("navi"),
  theme("titan"),
  {
    name: "navi chrome",
    blocks: [
      cssBlock(semantic, '[data-theme="navi"] [data-surface="chrome"]'),
      navi,
      root,
    ],
  },
];

const BLACK: Rgb = { r: 0, g: 0, b: 0 };

function value(region: Region, role: string): string {
  for (const block of region.blocks) {
    const own = roleValue(block, role);
    if (own !== "") {
      return own;
    }
  }
  throw new Error(`${region.name}: no value for ${role}`);
}

function ratio(region: Region, ink: string, bg: string): number {
  const page = resolve(value(region, "bg-page"), refs, BLACK);
  const behind = resolve(value(region, bg), refs, page);
  return contrast(resolve(value(region, ink), refs, behind), behind);
}

const GROUNDS = ["bg-page", "surface-card"] as const;

describe("text ramp contrast", () => {
  for (const region of REGIONS) {
    for (const ground of GROUNDS) {
      it(`${region.name}: text-muted clears 4.5:1 on ${ground}`, () => {
        const r = ratio(region, "text-muted", ground);
        expect(r, `${r.toFixed(2)}:1`).toBeGreaterThanOrEqual(TEXT);
      });
      it(`${region.name}: text-faded clears 3:1 on ${ground}`, () => {
        const r = ratio(region, "text-faded", ground);
        expect(r, `${r.toFixed(2)}:1`).toBeGreaterThanOrEqual(FADED);
      });
      it(`${region.name}: secondary > muted > faded on ${ground}`, () => {
        const sec = ratio(region, "text-secondary", ground);
        const muted = ratio(region, "text-muted", ground);
        const faded = ratio(region, "text-faded", ground);
        expect(sec / muted, "secondary / muted").toBeGreaterThanOrEqual(STEP);
        expect(muted / faded, "muted / faded").toBeGreaterThanOrEqual(STEP);
      });
    }
  }
});
