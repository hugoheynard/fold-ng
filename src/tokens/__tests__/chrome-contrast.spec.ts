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
 * navi contrast contract — the definition of "navi is correct".
 *
 * navi is the one theme with two polarities: a light page under dark chrome.
 * Every pair below was a measured failure before "Graphite & Signal", and the
 * reason they could fail at all is that the chrome sub-block declared 17 of the
 * 45 roles and silently inherited the other 28 from the page — the page's white
 * frost on the dark rail rendered a 1.9:1 tooltip.
 *
 * Alphas are composited over the ground they actually land on: the page for the
 * page block, rail 1 for the chrome. Measuring `color-mix(… , transparent)`
 * against nothing is how a translucent surface passes a test it should fail.
 */

const AA_BODY = 4.5;
const UI = 3.0;

const refs = primitiveHexes();
const semantic = readTokenCss("semantic.css");
const page = cssBlock(semantic, '[data-theme="navi"]');
const chrome = cssBlock(
  semantic,
  '[data-theme="navi"] [data-surface="chrome"]',
);

/** A region: its block, plus the opaque ground its translucent roles sit on. */
interface Region {
  readonly name: string;
  readonly block: string;
  readonly groundRole: string;
}

const PAGE: Region = { name: "page", block: page, groundRole: "bg-page" };
const CHROME: Region = {
  name: "chrome",
  block: chrome,
  groundRole: "bg-rail-primary",
};

const BLACK: Rgb = { r: 0, g: 0, b: 0 };

/** A role's value in a region, falling back to the theme it sits inside. */
function value(region: Region, role: string): string {
  const own = roleValue(region.block, role);
  return own === "" ? roleValue(page, role) : own;
}

function colour(region: Region, role: string, ground: Rgb): Rgb {
  return resolve(value(region, role), refs, ground);
}

/** The opaque ground of a region — itself never translucent. */
function groundOf(region: Region): Rgb {
  return colour(region, region.groundRole, BLACK);
}

function ratio(region: Region, ink: string, bg: string): number {
  const ground = groundOf(region);
  const behind = colour(region, bg, ground);
  return contrast(colour(region, ink, behind), behind);
}

/** Every pair the redesign had to fix, with the floor its role must clear. */
const PAIRS = [
  { region: CHROME, ink: "text", bg: "glass", floor: AA_BODY },
  { region: CHROME, ink: "text-faded", bg: "bg-header", floor: AA_BODY },
  { region: CHROME, ink: "on-primary", bg: "primary", floor: AA_BODY },
  { region: CHROME, ink: "on-alert", bg: "alert", floor: AA_BODY },
  { region: CHROME, ink: "alert-text", bg: "bg-rail-primary", floor: AA_BODY },
  {
    region: CHROME,
    ink: "primary-text",
    bg: "primary-surface",
    floor: AA_BODY,
  },
  { region: CHROME, ink: "text-faded", bg: "surface-hover", floor: UI },
  { region: CHROME, ink: "primary", bg: "bg-header", floor: UI },
  { region: PAGE, ink: "warning-text", bg: "bg-page", floor: AA_BODY },
  { region: PAGE, ink: "success-text", bg: "bg-page", floor: AA_BODY },
  { region: PAGE, ink: "text-muted", bg: "surface-raised", floor: AA_BODY },
  { region: PAGE, ink: "text-faded", bg: "bg-page", floor: UI },
] as const;

describe("navi contrast contract", () => {
  for (const p of PAIRS) {
    it(`${p.region.name}: ${p.ink} on ${p.bg} clears ${p.floor}:1`, () => {
      expect(ratio(p.region, p.ink, p.bg)).toBeGreaterThanOrEqual(p.floor);
    });
  }

  it("the chrome declares its own text ramp AND its own brand, in four steps", () => {
    // The sub-block used to borrow whatever it had not redeclared. Anything
    // absent here is inherited from the OTHER polarity, which is the bug class.
    for (const role of [
      "text",
      "text-secondary",
      "text-muted",
      "text-faded",
      "primary",
      "on-primary",
      "glass",
      "scrim",
    ]) {
      expect(
        roleValue(chrome, role),
        `chrome does not declare ${role}`,
      ).not.toBe("");
    }
  });

  it("page depth is three distinct steps, not one white repeated", () => {
    // card === sunken === page was the old navi: a table nested in a card had
    // no edge at all, because every layer was the same white.
    const steps = ["surface-card", "surface-sunken", "bg-page"].map((r) =>
      JSON.stringify(colour(PAGE, r, BLACK)),
    );
    expect(new Set(steps).size).toBe(3);
  });
});
