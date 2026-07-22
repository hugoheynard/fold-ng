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

  it("every theme override declares exactly the catalogue colours (theme parity)", () => {
    // Normalise quotes first — Prettier may write [data-theme="light"] or '…'.
    const normalised = semantic.replace(/['"]/g, '"');
    // A theme may also carry scoped sub-blocks (navi re-declares chrome roles
    // on the shell's regions), so dedupe — `block()` finds the top-level one.
    const themes = [
      ...new Set(
        [...normalised.matchAll(/\[data-theme="([\w-]+)"\]/g)].map(
          (m) => m[1] as string,
        ),
      ),
    ];

    // Guards the guard: a typo'd selector would otherwise test nothing.
    expect(themes.length).toBeGreaterThanOrEqual(1);

    for (const theme of themes) {
      const declared = declaredVars(
        block(normalised, `[data-theme="${theme}"]`),
      );
      expect(
        new Set(declared),
        `theme "${theme}" is missing or has extra tokens`,
      ).toEqual(new Set(expectedSemantic));
    }
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
    // Only primitive references must resolve here; a semantic token may also
    // read another semantic role (e.g. a surface resolving `--sh3-color-text`).
    const dangling = referencedVars(semantic).filter(
      (v) => v.startsWith("--sh3-ref-") && !defined.has(v),
    );
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

  it("the theme layer names no component internals (surfaces by contract)", () => {
    // A theme must not reach into a component's markup: a per-region override
    // targets [data-surface] (the `[sh3Surface]` contract), never a class name
    // — a renamed rail would otherwise break a theme silently and untested.
    const css = stripComments(semantic);
    expect(css).not.toContain("sh3-app-shell");
    expect(css).not.toMatch(/\.rail-(primary|secondary)\b/);
    expect(css).not.toMatch(/\.(header|content)\s*[,{]/);
  });
});

describe("token contract · theme invariance", () => {
  it("primitives.css carries no theme-specific block", () => {
    expect(primitives).not.toContain("data-theme");
  });

  it("only RADIUS may vary by theme in scales.css (type/space/motion/shadow never)", () => {
    // Corner softness is a brand axis; every other scale is a measurement, and
    // retheming must never re-flow a page.
    const normalised = scales.replace(/['"]/g, '"');
    const themes = [
      ...new Set(
        [...normalised.matchAll(/\[data-theme="([\w-]+)"\]/g)].map(
          (m) => m[1] as string,
        ),
      ),
    ];
    for (const theme of themes) {
      const declared = declaredVars(
        block(normalised, `[data-theme="${theme}"]`),
      );
      const offenders = declared.filter((v) => !v.startsWith("--sh3-radius-"));
      expect(offenders, `theme "${theme}" re-scales more than radius`).toEqual(
        [],
      );
      // And every step it does declare must be a real catalogue step.
      const unknown = declared.filter(
        (v) => !SH3_RADIUS_TOKENS.some((t) => v === `--sh3-radius-${t}`),
      );
      expect(unknown, `theme "${theme}" declares an unknown radius`).toEqual(
        [],
      );
    }
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

/** The CSS a component ships: its external `.scss`/`.css` files plus any inline
 *  `styles: \`…\`` block still left in a `.component.ts`. Components externalise
 *  their styles to a sibling `.scss` (Angular convention), but the inline scan
 *  stays so the guard never goes blind if one is re-inlined. */
function componentStyles(): { file: string; css: string }[] {
  const srcDir = join(tokensDir, "..");
  const out: { file: string; css: string }[] = [];
  for (const file of walk(srcDir, [".css", ".scss"])) {
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

  // A typo like `--sh3-color-text-primary` (the token is `--sh3-color-text`)
  // resolves to an invalid value and the element silently inherits its colour.
  // The parity/no-hex checks miss it — this closes that gap.
  it("every --sh3-color-* a component references is a declared semantic token", () => {
    const declared = new Set(expectedSemantic);
    const offenders = componentStyles().flatMap(({ file, css }) =>
      referencedVars(css)
        .filter((v) => v.startsWith("--sh3-color-") && !declared.has(v))
        .map((v) => `${v} in ${file.slice(file.indexOf("/src/") + 1)}`),
    );
    expect([...new Set(offenders)]).toEqual([]);
  });
});
