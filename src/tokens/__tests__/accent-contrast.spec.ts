import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, it, expect } from "vitest";

/**
 * On-accent contrast contract.
 *
 * `[data-surface="accent"]` (semantic.css) inverts a card's content onto the
 * brand accent, deriving the on-accent text ramp as `color-mix` alphas of the
 * ink (`on-primary`) over the fill (`primary`). Whether that stays legible
 * depends on how light the accent is — which varies per theme. This locks it:
 * for every theme, the derived on-accent text steps must clear a WCAG floor, or
 * the theme must override the ramp (see surfaces.md). No eyeballing.
 *
 * The alphas below MIRROR the `[data-surface="accent"] *` block; keep them in
 * sync with the CSS (same contract shape as the token catalogue).
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

/** Composite `ink` at `alpha` over an opaque `bg` (what a color-mix with
 *  transparent renders to over the fill). */
function over(ink: Rgb, alpha: number, bg: Rgb): Rgb {
  return {
    r: ink.r * alpha + bg.r * (1 - alpha),
    g: ink.g * alpha + bg.g * (1 - alpha),
    b: ink.b * alpha + bg.b * (1 - alpha),
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

/** Resolve a theme's `primary` / `on-primary` (a single `var(--fold-ref-*)`) to
 *  an rgb, from its theme block in semantic.css. */
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

// Derived on-accent text alphas — MIRROR `[data-surface="accent"] *`. The floors
// treat an accent card as an EMPHASIS surface: prominent text clears AA-large
// (3:1) — a mid-bright accent caps white text near 3:1, so 4.5 body is physically
// out of reach without darkening the brand accent (a deliberate design choice,
// see surfaces.md). Muted is decorative → a lower bar.
const RAMP = [
  { role: "text", alpha: 1.0, min: 3.0 },
  { role: "text-secondary", alpha: 0.96, min: 2.9 },
  { role: "text-muted", alpha: 0.74, min: 2.2 },
] as const;

const THEMES = [
  { name: "umbra", selector: ":root" },
  { name: "lumen", selector: '[data-theme="lumen"]' },
  { name: "bubbly", selector: '[data-theme="bubbly"]' },
  { name: "navi", selector: '[data-theme="navi"]' },
  { name: "titan", selector: '[data-theme="titan"]' },
] as const;

describe("on-accent contrast contract", () => {
  const refs = primitiveHexes();
  const semantic = read("semantic.css");

  for (const theme of THEMES) {
    for (const step of RAMP) {
      it(`${theme.name}: on-accent \`${step.role}\` clears ${step.min}:1`, () => {
        const fill = themeColor(
          semantic,
          theme.selector,
          "--fold-color-primary",
          refs,
        );
        const ink = themeColor(
          semantic,
          theme.selector,
          "--fold-color-on-primary",
          refs,
        );
        const ratio = contrast(over(ink, step.alpha, fill), fill);
        expect(
          ratio,
          `${theme.name} ${step.role} = ${ratio.toFixed(2)}:1 (min ${step.min})`,
        ).toBeGreaterThanOrEqual(step.min);
      });
    }
  }
});
