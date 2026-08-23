import { describe, it, expect } from "vitest";
import {
  contrast,
  cssBlock,
  primitiveHexes,
  readTokenCss,
  resolve,
  roleValue,
} from "./color-math";

/**
 * Status-ink contract.
 *
 * A solid status fill (`emphasis="solid"` + `intent="warning"`, a counter
 * bubble, a filled callout) carries text. Until `on-info|warning|alert|success`
 * existed, every one of them borrowed `on-primary` — the ink for the BRAND
 * fill — and the two have no reason to agree. On umbra that put white on
 * `amber-500` at 2.4:1; on the other four themes, 3.3:1. The combination has
 * been expressible ever since emphasis and intent became independent, and
 * nothing looked at it.
 *
 * Each theme's own ink, on its own fill, at AA body. No eyeballing.
 */

const AA_BODY = 4.5;
const STATUSES = ["info", "warning", "alert", "success"] as const;

const THEMES = [
  { name: "umbra", selector: ":root" },
  { name: "lumen", selector: '[data-theme="lumen"]' },
  { name: "bubbly", selector: '[data-theme="bubbly"]' },
  { name: "navi", selector: '[data-theme="navi"]' },
  { name: "titan", selector: '[data-theme="titan"]' },
] as const;

const refs = primitiveHexes();
const semantic = readTokenCss("semantic.css");

describe("status-ink contrast contract", () => {
  for (const theme of THEMES) {
    const block = cssBlock(semantic, theme.selector);

    for (const status of STATUSES) {
      it(`${theme.name}: on-${status} is legible on ${status}`, () => {
        const page = resolve(roleValue(block, "bg-page"), refs, {
          r: 0,
          g: 0,
          b: 0,
        });
        const fill = resolve(roleValue(block, status), refs, page);
        const ink = resolve(roleValue(block, `on-${status}`), refs, fill);
        expect(contrast(ink, fill)).toBeGreaterThanOrEqual(AA_BODY);
      });
    }
  }

  it("no status ink is simply `on-primary` wearing a different name", () => {
    // The failure mode this contract exists for: a theme that "adds" the four
    // roles by pointing them all at the brand ink has changed nothing.
    for (const theme of THEMES) {
      const block = cssBlock(semantic, theme.selector);
      const brand = roleValue(block, "on-primary");
      const inks = STATUSES.map((s) => roleValue(block, `on-${s}`));
      expect(
        new Set(inks).size,
        `theme "${theme.name}" gives every status the same ink as ${brand}`,
      ).toBeGreaterThan(1);
    }
  });
});
