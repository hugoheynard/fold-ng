import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

/**
 * Colour maths for the token contrast specs — the WCAG arithmetic plus enough
 * CSS resolution to follow a token to a rendered pixel.
 *
 * Extracted on its third consumer (`accent-contrast`, `status-ring-contrast`,
 * then the status-ink and chrome specs): two copies were a coincidence, three
 * is a shared fact. It also carries what the copies could not do — resolving a
 * `color-mix(… , transparent)` over the surface it actually lands on, which is
 * how most of the theme layer is written.
 */

const tokensDir = join(dirname(fileURLToPath(import.meta.url)), "..");

export interface Rgb {
  readonly r: number;
  readonly g: number;
  readonly b: number;
}

export function readTokenCss(file: string): string {
  return readFileSync(join(tokensDir, file), "utf8");
}

/** `--fold-ref-*: #hex` from primitives.css. */
export function primitiveHexes(): Map<string, string> {
  const map = new Map<string, string>();
  const css = readTokenCss("primitives.css");
  for (const m of css.matchAll(/(--fold-ref-[\w-]+):\s*(#[0-9a-fA-F]{3,8})/g)) {
    map.set(m[1] ?? "", m[2] ?? "");
  }
  return map;
}

export function parseHex(hex: string): Rgb {
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

/** Composite `ink` at `alpha` over an opaque `bg`. */
export function over(ink: Rgb, alpha: number, bg: Rgb): Rgb {
  return {
    r: ink.r * alpha + bg.r * (1 - alpha),
    g: ink.g * alpha + bg.g * (1 - alpha),
    b: ink.b * alpha + bg.b * (1 - alpha),
  };
}

export function luminance({ r, g, b }: Rgb): number {
  const lin = (c: number): number => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
}

export function contrast(a: Rgb, b: Rgb): number {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return ((hi ?? 0) + 0.05) / ((lo ?? 0) + 0.05);
}

/** The declaration body of a top-level `selector { … }` block. */
export function cssBlock(css: string, selector: string): string {
  const escaped = selector.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return (
    css.match(new RegExp(`${escaped}\\s*\\{([^}]*)\\}`))?.[1] ?? ""
  ).replace(/\/\*[\s\S]*?\*\//g, "");
}

/** The raw value a block gives a `--fold-color-*` role, comments stripped. */
export function roleValue(block: string, role: string): string {
  return (
    block
      .match(new RegExp(`--fold-color-${role}:\\s*([^;]+);`))?.[1]
      ?.replace(/\s+/g, " ")
      .trim() ?? ""
  );
}

const MIX = /^color-mix\(\s*in srgb\s*,\s*(.+?)\s+([\d.]+)%\s*,\s*(.+?)\s*\)$/;

/**
 * Resolve a theme value to the pixel it renders as, compositing any
 * `transparent` against `ground`. Handles `#hex`, `var(--fold-ref-*)` and a
 * one-level `color-mix(in srgb, A n%, B)`.
 */
export function resolve(
  value: string,
  refs: Map<string, string>,
  ground: Rgb,
): Rgb {
  const mix = MIX.exec(value.trim());
  if (mix) {
    const alpha = Number(mix[2] ?? "0") / 100;
    const front = resolve(mix[1] ?? "", refs, ground);
    const back = (mix[3] ?? "").trim();
    const bg = back === "transparent" ? ground : resolve(back, refs, ground);
    return over(front, alpha, bg);
  }
  if (value.trim().startsWith("#")) {
    return parseHex(value.trim());
  }
  const ref = value.match(/--fold-ref-[\w-]+/)?.[0] ?? "";
  const hex = refs.get(ref);
  if (hex === undefined) {
    throw new Error(`cannot resolve colour "${value}"`);
  }
  return parseHex(hex);
}
