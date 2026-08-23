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
 * Depth contract — how far apart two SURFACES have to be.
 *
 * A separate contract from the text ones on purpose: **4.5:1 is meaningless
 * between two surfaces.** Nothing is being read; a contour or a band only has
 * to be perceptible. Applying a text floor here would force a design nobody
 * wants, and applying no floor at all is what let a `sunken` card sit at 1.05:1
 * against the page it was supposed to sink into.
 *
 * Two floors instead, by the job the separation does:
 *
 * - **structure** — a card's outline, a panel's frame: what tells you where one
 *   box ends. 1.25:1.
 * - **subdivision** — a band, a separator, a row divider: what tells you a box
 *   has parts. 1.15:1.
 *
 * On a LIGHT ground the depth has to come from the contour, not the fill: there
 * is under 10% of luminance between white and a light page, and three levels do
 * not fit in it. On a dark ground the reverse holds — which is exactly why
 * `surface-band` is a role and not a direction a component picks.
 */

const STRUCTURE = 1.25;
const SUBDIVISION = 1.15;

const refs = primitiveHexes();
const semantic = readTokenCss("semantic.css");
const BLACK: Rgb = { r: 0, g: 0, b: 0 };

const naviPage = cssBlock(semantic, '[data-theme="navi"]');

interface Region {
  readonly name: string;
  readonly block: string;
}

const REGIONS: readonly Region[] = [
  { name: "umbra", block: cssBlock(semantic, ":root") },
  { name: "lumen", block: cssBlock(semantic, '[data-theme="lumen"]') },
  { name: "bubbly", block: cssBlock(semantic, '[data-theme="bubbly"]') },
  { name: "titan", block: cssBlock(semantic, '[data-theme="titan"]') },
  { name: "navi", block: naviPage },
  {
    name: "navi/chrome",
    block: cssBlock(semantic, '[data-theme="navi"] [data-surface="chrome"]'),
  },
];

/** A role's value in a region, falling back to the theme it sits inside. */
function value(region: Region, role: string): string {
  const own = roleValue(region.block, role);
  return own === "" ? roleValue(naviPage, role) : own;
}

function against(region: Region, role: string, groundRole: string): number {
  const page = resolve(value(region, "bg-page"), refs, BLACK);
  const ground = resolve(value(region, groundRole), refs, page);
  return contrast(resolve(value(region, role), refs, ground), ground);
}

const NAVI = REGIONS.filter((r) => r.name.startsWith("navi"));

describe("depth contract · navi, the theme this was measured on", () => {
  for (const region of NAVI) {
    it(`${region.name}: the card outline holds its box`, () => {
      expect(against(region, "border", "surface-card")).toBeGreaterThanOrEqual(
        STRUCTURE,
      );
    });

    it(`${region.name}: a card's edge reads against the page`, () => {
      expect(against(region, "border", "bg-page")).toBeGreaterThanOrEqual(
        STRUCTURE,
      );
    });

    it(`${region.name}: a raised band detaches from the card body`, () => {
      expect(
        against(region, "surface-band", "surface-card"),
      ).toBeGreaterThanOrEqual(SUBDIVISION);
    });

    it(`${region.name}: a hairline separator is visible on a card`, () => {
      expect(
        against(region, "border-subtle", "surface-card"),
      ).toBeGreaterThanOrEqual(SUBDIVISION);
    });
  }
});

describe("depth contract · a zebra stripe has to be seen", () => {
  /**
   * A stripe is a subdivision: it says a row is a row. `surface-subtle` on the
   * table body is what draws it, and on navi that was 22% of an already-pale
   * grey laid on a near-white body — 1.07:1, invisible.
   *
   * Only navi is asserted, because only navi was retuned. The other four are
   * PINNED below rather than left unmeasured: every one of them is under the
   * floor too, which is a decision waiting to be made, not a fact to discover
   * again later.
   */
  const navi = REGIONS.filter((r) => r.name === "navi")[0] as Region;

  it("navi: the stripe reads against the table body", () => {
    expect(
      against(navi, "surface-subtle", "surface-sunken"),
    ).toBeGreaterThanOrEqual(SUBDIVISION);
  });

  it("the other regions are all still under the floor — pinned, not forgotten", () => {
    const under = REGIONS.filter((r) => r.name !== "navi").filter(
      (r) => against(r, "surface-subtle", "surface-sunken") < SUBDIVISION,
    );
    // Raising them means changing how an existing theme renders — a decision of
    // its own. When one is raised, this list shrinks and the test says so.
    expect(under.map((r) => r.name)).toEqual([
      "umbra",
      "lumen",
      "bubbly",
      "titan",
      "navi/chrome",
    ]);
  });
});

describe("depth contract · the role only NAMES what the other themes had", () => {
  /**
   * `lumen` is the one exception, and it is a pre-existing one: its band is
   * `cloud-150`, 1.13:1 on a white card — the same ailment navi had, on a theme
   * this change does not touch. Fixing it means changing how an existing theme
   * renders, which is a decision of its own and not a side effect of naming a
   * role. Aligning it with navi (a `paper-200` equivalent, ~`#e9eaee`) is the
   * right end state; it belongs in its own commit.
   */
  const EXEMPT = new Set(["lumen"]);

  for (const region of REGIONS.filter((r) => !r.name.startsWith("navi"))) {
    const check = EXEMPT.has(region.name) ? it.skip : it;
    check(`${region.name}: its band still separates, untouched`, () => {
      expect(
        against(region, "surface-band", "surface-card"),
      ).toBeGreaterThanOrEqual(SUBDIVISION);
    });
  }

  it("lumen's band is the known gap, and is still measured", () => {
    const measured = against(
      REGIONS.filter((r) => r.name === "lumen")[0] as Region,
      "surface-band",
      "surface-card",
    );
    // Pinned, so the day someone raises it this test says so instead of
    // staying quietly green on a number nobody looked at.
    expect(measured).toBeLessThan(SUBDIVISION);
    expect(measured).toBeGreaterThan(1.1);
  });
});
