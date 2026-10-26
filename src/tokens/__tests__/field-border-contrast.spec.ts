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
 * Field-outline and focus-ring contract (WCAG 1.4.11, RGAA 3.3 / 10.7).
 *
 * A form control is identified by its outline: `border-field` must clear 3:1
 * against every ground a field lands on — the page, a card, a band. The
 * hairlines (`border`, `border-subtle`, ~1.2:1) are decoration and are NOT held
 * to it; that is why the role is separate. A focus ring is drawn in `primary`,
 * held to the same 3:1. The text ramp is text-ramp-contrast.spec.ts.
 */

const UI = 3.0;

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

const GROUNDS = ["bg-page", "surface-card", "surface-band"] as const;

describe("field outline + focus ring contrast", () => {
  for (const region of REGIONS) {
    for (const ground of GROUNDS) {
      it(`${region.name}: border-field clears 3:1 on ${ground}`, () => {
        const r = ratio(region, "border-field", ground);
        expect(r, `${r.toFixed(2)}:1`).toBeGreaterThanOrEqual(UI);
      });
    }
    for (const ground of ["bg-page", "surface-card"] as const) {
      it(`${region.name}: the focus ring (primary) clears 3:1 on ${ground}`, () => {
        const r = ratio(region, "primary", ground);
        expect(r, `${r.toFixed(2)}:1`).toBeGreaterThanOrEqual(UI);
      });
    }
  }
});
