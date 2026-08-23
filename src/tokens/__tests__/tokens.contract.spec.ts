import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, it, expect } from "vitest";
import {
  FOLD_SEMANTIC_COLOR_TOKENS,
  FOLD_RADIUS_TOKENS,
  FOLD_FONT_TOKENS,
  FOLD_TEXT_TOKENS,
  FOLD_WEIGHT_TOKENS,
  FOLD_LEADING_TOKENS,
  FOLD_TRACKING_TOKENS,
  FOLD_ICON_SIZE_TOKENS,
  FOLD_SPACE_TOKENS,
  FOLD_RAIL_TOKENS,
  FOLD_MOTION_TOKENS,
  FOLD_BLUR_TOKENS,
  FOLD_SHADOW_TOKENS,
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

/**
 * A colour role never travels alone. Redeclaring the fill without its ink, or a
 * status base without its tint, leaves the missing half inherited from the
 * other polarity — the exact shape of every contrast failure navi shipped.
 * Each list is closed: declare one member, declare them all.
 */
const COLOUR_FAMILIES: readonly (readonly string[])[] = [
  [
    "primary",
    "primary-strong",
    "on-primary",
    "primary-text",
    "primary-surface",
    "primary-border",
  ],
  ["text", "text-secondary", "text-muted", "text-faded"],
  ["info", "on-info", "info-text", "info-surface", "info-border"],
  [
    "warning",
    "on-warning",
    "warning-text",
    "warning-surface",
    "warning-border",
  ],
  ["alert", "on-alert", "alert-text", "alert-surface", "alert-border"],
  [
    "success",
    "on-success",
    "success-text",
    "success-surface",
    "success-border",
  ],
];

interface ThemeBlock {
  readonly selector: string;
  /** True when the selector narrows the theme to a region (navi's chrome). */
  readonly scoped: boolean;
  readonly body: string;
}

/**
 * EVERY `[data-theme=…]` block, top-level and scoped alike. The previous parity
 * test deduped by theme name and kept only the first block, so a scoped
 * sub-block was tested by nothing at all.
 */
function themeBlocks(css: string): ThemeBlock[] {
  const normalised = css.replace(/['"]/g, '"');
  const out: ThemeBlock[] = [];
  for (const m of normalised.matchAll(
    /(\[data-theme="[\w-]+"\][^{}]*)\{([^}]*)\}/g,
  )) {
    const selector = (m[1] ?? "").trim();
    out.push({
      selector,
      scoped:
        selector !== (selector.match(/^\[data-theme="[\w-]+"\]$/)?.[0] ?? ""),
      body: (m[2] ?? "").replace(/\/\*[\s\S]*?\*\//g, ""),
    });
  }
  return out;
}

const primitives = readCss("primitives.css");
const semantic = readCss("semantic.css");
const scales = readCss("scales.css");
const expectedSemantic = FOLD_SEMANTIC_COLOR_TOKENS.map(
  (t) => `--fold-color-${t}`,
);

describe("token contract · catalogue ↔ CSS", () => {
  it("the DARK base (:root) declares exactly the catalogue colours", () => {
    const declared = declaredVars(block(semantic, ":root")).filter((v) =>
      v.startsWith("--fold-color-"),
    );
    expect(new Set(declared)).toEqual(new Set(expectedSemantic));
  });

  it("every theme's TOP-LEVEL block declares exactly the catalogue colours", () => {
    const blocks = themeBlocks(semantic).filter((b) => !b.scoped);
    // Guards the guard: a typo'd selector would otherwise test nothing.
    expect(blocks.length).toBeGreaterThanOrEqual(1);

    for (const b of blocks) {
      expect(
        new Set(declaredVars(b.body)),
        `theme "${b.selector}" is missing or has extra tokens`,
      ).toEqual(new Set(expectedSemantic));
    }
  });

  it("every SCOPED sub-block is closed: a role it redeclares brings its family", () => {
    // A sub-block re-inks one region (navi's dark chrome), so it is not held to
    // full parity — it may leave a role to the theme it sits inside. What it
    // may NOT do is take half a family: `primary` without `on-primary` renders
    // ink meant for the other polarity straight onto the new fill, which is how
    // the chrome shipped 3.9:1 buttons that no test could see.
    const blocks = themeBlocks(semantic).filter((b) => b.scoped);
    expect(blocks.length).toBeGreaterThanOrEqual(1);

    for (const b of blocks) {
      const declared = new Set(declaredVars(b.body));
      for (const family of COLOUR_FAMILIES) {
        const props = family.map((t) => `--fold-color-${t}`);
        const present = props.filter((p) => declared.has(p));
        if (present.length === 0) {
          continue;
        }
        expect(
          present,
          `"${b.selector}" redeclares part of the "${family[0] ?? ""}" family but not all of it`,
        ).toEqual(props);
      }
    }
  });

  it("scales.css declares exactly the radius + font + type + weight + leading + tracking + icon-size + space + rail + motion + shadow catalogue", () => {
    const declared = declaredVars(block(scales, ":root"));
    const expected = [
      ...FOLD_RADIUS_TOKENS.map((t) => `--fold-radius-${t}`),
      ...FOLD_FONT_TOKENS.map((t) => `--fold-font-${t}`),
      ...FOLD_TEXT_TOKENS.map((t) => `--fold-text-${t}`),
      ...FOLD_WEIGHT_TOKENS.map((t) => `--fold-weight-${t}`),
      ...FOLD_LEADING_TOKENS.map((t) => `--fold-leading-${t}`),
      ...FOLD_TRACKING_TOKENS.map((t) => `--fold-tracking-${t}`),
      ...FOLD_ICON_SIZE_TOKENS.map((t) => `--fold-icon-size-${t}`),
      ...FOLD_SPACE_TOKENS.map((t) => `--fold-space-${t}`),
      ...FOLD_RAIL_TOKENS.map((t) => `--fold-rail-${t}`),
      ...FOLD_MOTION_TOKENS.map((t) => `--fold-motion-${t}`),
      ...FOLD_BLUR_TOKENS.map((t) => `--fold-blur-${t}`),
      ...FOLD_SHADOW_TOKENS.map((t) => `--fold-shadow-${t}`),
    ];
    expect(new Set(declared)).toEqual(new Set(expected));
  });
});

describe("token contract · layering integrity", () => {
  it("every primitive a semantic token points at is defined", () => {
    const defined = new Set(declaredVars(block(primitives, ":root")));
    // Only primitive references must resolve here; a semantic token may also
    // read another semantic role (e.g. a surface resolving `--fold-color-text`).
    const dangling = referencedVars(semantic).filter(
      (v) => v.startsWith("--fold-ref-") && !defined.has(v),
    );
    expect(dangling).toEqual([]);
  });

  it("semantic colours reference primitives only, never a raw hex", () => {
    const values = [
      ...stripComments(semantic).matchAll(
        /--fold-color-[\w-]+\s*:\s*([^;]+);/g,
      ),
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
    // targets [data-surface] (the `[foldSurface]` contract), never a class name
    // — a renamed rail would otherwise break a theme silently and untested.
    const css = stripComments(semantic);
    expect(css).not.toContain("fold-app-shell");
    expect(css).not.toMatch(/\.rail-(primary|secondary)\b/);
    expect(css).not.toMatch(/\.(header|content)\s*[,{]/);
  });
});

describe("token contract · theme invariance", () => {
  it("primitives.css carries no theme-specific block", () => {
    expect(primitives).not.toContain("data-theme");
  });

  it("only RADIUS and SHADOW may vary by theme (type/space/motion never)", () => {
    // The invariant is not "one scale is special", it is: a theme may change
    // what a surface LOOKS like, never where it SITS. Corner softness and
    // depth both qualify — neither moves a box by one pixel, and a shadow
    // calibrated for a near-black ground is a grey smear on a light page.
    // Type, space and motion stay invariant: those re-flow or re-time a page.
    const normalised = scales.replace(/['"]/g, '"');
    const themes = [
      ...new Set(
        [...normalised.matchAll(/\[data-theme="([\w-]+)"\]/g)].map(
          (m) => m[1] as string,
        ),
      ),
    ];
    const steps = [
      ...FOLD_RADIUS_TOKENS.map((t) => `--fold-radius-${t}`),
      ...FOLD_SHADOW_TOKENS.map((t) => `--fold-shadow-${t}`),
    ];
    for (const theme of themes) {
      const declared = declaredVars(
        block(normalised, `[data-theme="${theme}"]`),
      );
      const offenders = declared.filter(
        (v) =>
          !v.startsWith("--fold-radius-") && !v.startsWith("--fold-shadow-"),
      );
      expect(
        offenders,
        `theme "${theme}" re-scales something that moves boxes`,
      ).toEqual([]);
      // And every step it does declare must be a real catalogue step.
      const unknown = declared.filter((v) => !steps.includes(v));
      expect(unknown, `theme "${theme}" declares an unknown step`).toEqual([]);
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
  // Colours come from `var(--fold-color-*)` / `color-mix(… var …)`; depth from
  // `var(--fold-shadow-*)`. `currentColor` / `transparent` are colour-free.
  const RAW_COLOUR = /#[0-9a-fA-F]{3,8}\b|(?<![\w-])rgba?\(|hsla?\(/;

  it("no component style hard-codes a colour or shadow (rgba / hsl / hex)", () => {
    const offenders = componentStyles()
      .filter(({ css }) => RAW_COLOUR.test(stripComments(css)))
      .map(({ file }) => file.slice(file.indexOf("/src/") + 1));
    expect([...new Set(offenders)]).toEqual([]);
  });

  // A typo like `--fold-color-text-primary` (the token is `--fold-color-text`)
  // resolves to an invalid value and the element silently inherits its colour.
  // The parity/no-hex checks miss it — this closes that gap.
  it("every --fold-color-* a component references is a declared semantic token", () => {
    const declared = new Set(expectedSemantic);
    const offenders = componentStyles().flatMap(({ file, css }) =>
      referencedVars(css)
        .filter((v) => v.startsWith("--fold-color-") && !declared.has(v))
        .map((v) => `${v} in ${file.slice(file.indexOf("/src/") + 1)}`),
    );
    expect([...new Set(offenders)]).toEqual([]);
  });
});
