import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, it, expect } from "vitest";

/**
 * Status-ring perceivability contract (`fold-avatar` `ring`).
 *
 * The avatar's `ring` draws a 2px status outline in one of the shared status
 * colours (`primary`/`info`/`warning`/`alert`/`success`) over the page. WCAG
 * 1.4.11 (non-text contrast) asks a graphical indicator to clear 3:1 against
 * the adjacent colour — but amber, green and cyan are intrinsically LIGHT hues:
 * as a thin line on a light page they physically cannot reach 3:1 without
 * darkening the whole status system (which the badges/buttons share). Same
 * shape as the accent-surface decision (see surfaces.md): certify what holds,
 * document the rest, no eyeballing.
 *
 * So the ring is a TIERED, redundant cue:
 *  - the two decision-carrying rings — `accent` (arrival/highlight) and `alert`
 *    (problem) — clear the full 3:1 in EVERY theme;
 *  - the softer statuses hold a documented emphasis floor (they are never the
 *    sole carrier: `ringStyle="dotted"` and `muted` encode the state too).
 *
 * Both floors also lock the current palette against a regression that would
 * lighten a status hue further.
 */

const tokensDir = join(dirname(fileURLToPath(import.meta.url)), "..");
const read = (f: string): string =>
  readFileSync(join(tokensDir, f), "utf8").replace(/\/\*[^]*?\*\//g, "");

interface Rgb {
  readonly r: number;
  readonly g: number;
  readonly b: number;
}

/** `--fold-ref-*: #hex` map from primitives.css. */
function primitiveHexes(): Map<string, string> {
  const css = read("primitives.css");
  const map = new Map<string, string>();
  for (const m of css.matchAll(/(--fold-ref-[\w-]+):\s*(#[0-9a-fA-F]{3,8})/g)) {
    map.set(m[1] ?? "", m[2] ?? "");
  }
  return map;
}

function parseHex(hex: string): Rgb {
  const h = hex.replace("#", "");
  const full =
    h.length === 3
      ? h
          .split("")
          .map((c) => c + c)
          .join("")
      : h;
  return {
    r: parseInt(full.slice(0, 2), 16),
    g: parseInt(full.slice(2, 4), 16),
    b: parseInt(full.slice(4, 6), 16),
  };
}

function luminance({ r, g, b }: Rgb): number {
  const lin = (c: number): number => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
}

function contrast(a: Rgb, b: Rgb): number {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return ((hi ?? 0) + 0.05) / ((lo ?? 0) + 0.05);
}

/** Resolve a theme role that points at a single `var(--fold-ref-*)`. */
function themeColor(
  semantic: string,
  selector: string,
  role: string,
  refs: Map<string, string>,
): Rgb {
  const block = semantic.match(
    new RegExp(`${selector.replace(/[[\]"=]/g, "\\$&")}\\s*\\{([^}]*)\\}`),
  )?.[1];
  const value = block?.match(new RegExp(`${role}:\\s*([^;]+);`))?.[1] ?? "";
  const ref = value.match(/--fold-ref-[\w-]+/)?.[0] ?? "";
  const hex = refs.get(ref);
  if (!hex) {
    throw new Error(
      `could not resolve ${role} for ${selector} (got "${value}")`,
    );
  }
  return parseHex(hex);
}

const THEMES = [
  { name: "umbra", selector: ":root" },
  { name: "lumen", selector: '[data-theme="lumen"]' },
  { name: "bubbly", selector: '[data-theme="bubbly"]' },
  { name: "navi", selector: '[data-theme="navi"]' },
  { name: "titan", selector: '[data-theme="titan"]' },
] as const;

// Decision-carrying rings must clear the full WCAG 1.4.11 non-text bar (3:1).
const STRONG_RINGS = [
  { ring: "accent", role: "--fold-color-primary" },
  { ring: "alert", role: "--fold-color-alert" },
] as const;
// Softer statuses (light hues) — an emphasis floor, redundantly cued. The floor
// locks the current palette: it sits just under the measured minimum (titan
// warning ≈ 2.31), so a change that lightens a status hue further trips it.
const SOFT_RINGS = [
  { ring: "info", role: "--fold-color-info" },
  { ring: "warning", role: "--fold-color-warning" },
  { ring: "success", role: "--fold-color-success" },
] as const;
const STRONG_MIN = 3.0;
const SOFT_MIN = 2.2;

describe("status-ring perceivability contract", () => {
  const refs = primitiveHexes();
  const semantic = read("semantic.css");
  const page = (selector: string): Rgb =>
    themeColor(semantic, selector, "--fold-color-bg-page", refs);

  for (const theme of THEMES) {
    for (const { ring, role } of STRONG_RINGS) {
      it(`${theme.name}: \`${ring}\` ring clears WCAG 3:1 on the page`, () => {
        const c = themeColor(semantic, theme.selector, role, refs);
        const ratio = contrast(c, page(theme.selector));
        expect(
          ratio,
          `${theme.name} ${ring} = ${ratio.toFixed(2)}:1 (min ${STRONG_MIN})`,
        ).toBeGreaterThanOrEqual(STRONG_MIN);
      });
    }
    for (const { ring, role } of SOFT_RINGS) {
      it(`${theme.name}: \`${ring}\` ring clears the emphasis floor`, () => {
        const c = themeColor(semantic, theme.selector, role, refs);
        const ratio = contrast(c, page(theme.selector));
        expect(
          ratio,
          `${theme.name} ${ring} = ${ratio.toFixed(2)}:1 (min ${SOFT_MIN})`,
        ).toBeGreaterThanOrEqual(SOFT_MIN);
      });
    }
  }
});
