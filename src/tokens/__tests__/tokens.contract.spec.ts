import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, it, expect } from "vitest";
import {
  SH3_SEMANTIC_COLOR_TOKENS,
  SH3_RADIUS_TOKENS,
  SH3_TEXT_TOKENS,
  SH3_SPACE_TOKENS,
  SH3_MOTION_TOKENS,
  SH3_BLUR_TOKENS,
  SH3_SHADOW_TOKENS,
} from "../tokens.catalog";
import { readdirSync } from "node:fs";

/**
 * The token contract. These tests are the "lock" on the design system: they
 * fail the build if the two theme blocks fall out of parity, if a semantic
 * token points at a primitive that does not exist, if a semantic value hard-
 * codes a colour, or if the CSS drifts from the typed catalogue. Cheap parsing
 * on purpose — the CSS blocks are flat (no nested braces), so a couple of
 * regexes are enough and stay readable.
 */

const tokensDir = join(dirname(fileURLToPath(import.meta.url)), "..");

function readCss(file: string): string {
  return readFileSync(join(tokensDir, file), "utf8");
}

/** The declaration body inside a top-level `selector { … }` block. */
function block(css: string, selector: string): string {
  const escaped = selector.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = css.match(new RegExp(`${escaped}\\s*\\{([^}]*)\\}`));
  return match?.[1] ?? "";
}

/** Custom properties DECLARED (`--x:`) in a chunk of CSS. */
function declaredVars(css: string): string[] {
  return [...css.matchAll(/(--[\w-]+)\s*:/g)].map((m) => m[1] as string);
}

/** Custom properties REFERENCED (`var(--x)`) in a chunk of CSS. Tolerates the
 *  whitespace Prettier may insert inside `var( … )` when it wraps long lines. */
function referencedVars(css: string): string[] {
  return [...css.matchAll(/var\(\s*(--[\w-]+)\s*\)/g)].map(
    (m) => m[1] as string,
  );
}

function stripComments(css: string): string {
  return css.replace(/\/\*[\s\S]*?\*\//g, "");
}

const primitives = readCss("primitives.css");
const semantic = readCss("semantic.css");
const scales = readCss("scales.css");
const expectedSemantic = SH3_SEMANTIC_COLOR_TOKENS.map(
  (t) => `--sh3-color-${t}`,
);

describe("token contract · catalogue ↔ CSS", () => {
  it("the DARK base (:root) declares exactly the catalogue colours", () => {
    const declared = declaredVars(block(semantic, ":root")).filter((v) =>
      v.startsWith("--sh3-color-"),
    );
    expect(new Set(declared)).toEqual(new Set(expectedSemantic));
  });

  it("the LIGHT override declares exactly the catalogue colours (theme parity)", () => {
    // Normalise quotes first — Prettier may write [data-theme="light"] or '…'.
    const normalised = semantic.replace(/['"]/g, '"');
    const declared = declaredVars(block(normalised, '[data-theme="light"]'));
    expect(new Set(declared)).toEqual(new Set(expectedSemantic));
  });

  it("scales.css declares exactly the radius + type + space + motion + shadow catalogue", () => {
    const declared = declaredVars(block(scales, ":root"));
    const expected = [
      ...SH3_RADIUS_TOKENS.map((t) => `--sh3-radius-${t}`),
      ...SH3_TEXT_TOKENS.map((t) => `--sh3-text-${t}`),
      ...SH3_SPACE_TOKENS.map((t) => `--sh3-space-${t}`),
      ...SH3_MOTION_TOKENS.map((t) => `--sh3-motion-${t}`),
      ...SH3_BLUR_TOKENS.map((t) => `--sh3-blur-${t}`),
      ...SH3_SHADOW_TOKENS.map((t) => `--sh3-shadow-${t}`),
    ];
    expect(new Set(declared)).toEqual(new Set(expected));
  });
});

describe("token contract · layering integrity", () => {
  it("every primitive a semantic token points at is defined", () => {
    const defined = new Set(declaredVars(block(primitives, ":root")));
    const dangling = referencedVars(semantic).filter((v) => !defined.has(v));
    expect(dangling).toEqual([]);
  });

  it("semantic colours reference primitives only, never a raw hex", () => {
    const values = [
      ...stripComments(semantic).matchAll(/--sh3-color-[\w-]+\s*:\s*([^;]+);/g),
    ].map((m) => (m[1] as string).trim());
    // Values may be `var(...)` or `color-mix(... var(...) ...)` — never a hex.
    const withRawHex = values.filter((v) => /#[0-9a-fA-F]{3,}/.test(v));
    expect(withRawHex).toEqual([]);
  });

  it("every primitive is used at least once (no dead palette entries)", () => {
    const referenced = new Set(referencedVars(semantic));
    const unused = declaredVars(block(primitives, ":root")).filter(
      (v) => !referenced.has(v),
    );
    expect(unused).toEqual([]);
  });
});

describe("token contract · theme invariance", () => {
  it("primitives.css carries no theme-specific block", () => {
    expect(primitives).not.toContain("data-theme");
  });

  it("scales.css carries no theme-specific block (sizes never theme)", () => {
    expect(scales).not.toContain("data-theme");
  });
});

/* -------------------------------------------------------------------------- */

/** Recursively collect files with one of `exts` under `dir`. */
function walk(dir: string, exts: string[]): string[] {
  const out: string[] = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...walk(full, exts));
    } else if (exts.some((e) => entry.name.endsWith(e))) {
      out.push(full);
    }
  }
  return out;
}

/** The CSS a component ships: every `styles: \`…\`` block + its `.css` files. */
function componentStyles(): { file: string; css: string }[] {
  const srcDir = join(tokensDir, "..");
  const out: { file: string; css: string }[] = [];
  for (const file of walk(srcDir, [".css"])) {
    if (file.includes(`${"tokens"}/`) || file.endsWith("index.css")) {
      continue; // token layer is the ONE place colours live
    }
    out.push({ file, css: readFileSync(file, "utf8") });
  }
  for (const file of walk(srcDir, [".component.ts"])) {
    for (const m of readFileSync(file, "utf8").matchAll(
      /styles:\s*\[?\s*`([\s\S]*?)`/g,
    )) {
      out.push({ file, css: m[1] as string });
    }
  }
  return out;
}

describe("token contract · components consume tokens only", () => {
  // A component style must not spell a raw colour or shadow — it names a token.
  // Colours come from `var(--sh3-color-*)` / `color-mix(… var …)`; depth from
  // `var(--sh3-shadow-*)`. `currentColor` / `transparent` are colour-free.
  const RAW_COLOUR = /#[0-9a-fA-F]{3,8}\b|(?<![\w-])rgba?\(|hsla?\(/;

  it("no component style hard-codes a colour or shadow (rgba / hsl / hex)", () => {
    const offenders = componentStyles()
      .filter(({ css }) => RAW_COLOUR.test(stripComments(css)))
      .map(({ file }) => file.slice(file.indexOf("/src/") + 1));
    expect([...new Set(offenders)]).toEqual([]);
  });
});
