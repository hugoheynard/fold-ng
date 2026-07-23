import {
  foldColorProperty,
  type FoldRadiusToken,
  type FoldSemanticColorToken,
} from "../src/public-api";

/**
 * Shared helpers for the gallery's "live token sandbox" pages (app-shell, menu,
 * tokens): a typed catalogue of overridable custom properties + the override
 * map plumbing (apply to a preview element, emit the CSS block). Kept in one
 * place so a renamed/removed token is a compile error, once.
 */

export type PageTokenKind = "color" | "radius";
export interface PageToken {
  readonly prop: string;
  readonly desc: string;
  readonly kind: PageTokenKind;
}
export interface PageTokenGroup {
  readonly label: string;
  readonly tokens: readonly PageToken[];
}

/** A semantic colour token → a page token (typed against the catalog). */
export function colorToken(
  token: FoldSemanticColorToken,
  desc: string,
): PageToken {
  return { prop: foldColorProperty(token), desc, kind: "color" };
}

/** A radius token → a page token (typed against the catalog). */
export function radiusToken(token: FoldRadiusToken, desc: string): PageToken {
  return { prop: `--fold-radius-${token}`, desc, kind: "radius" };
}

/** Set (or, for a blank value, clear) one override — returns a new map. */
export function withOverride(
  map: Record<string, string>,
  prop: string,
  value: string,
): Record<string, string> {
  const next = { ...map };
  const trimmed = value.trim();
  if (trimmed) {
    next[prop] = trimmed;
  } else {
    delete next[prop];
  }
  return next;
}

/** The CSS block a user would paste to apply their overrides. */
export function overrideCss(
  selector: string,
  overrides: Record<string, string>,
): string {
  const entries = Object.entries(overrides);
  if (entries.length === 0) {
    return "/* adjust a token on the left to see the CSS here */";
  }
  const lines = [`${selector} {`];
  for (const [prop, value] of entries) {
    lines.push(`  ${prop}: ${value};`);
  }
  lines.push("}");
  return lines.join("\n");
}

/** Write the current overrides onto `el` — cleared tokens are removed so the
 *  element falls back to the theme. A DOM write → call from an effect. */
export function applyOverrides(
  el: HTMLElement | undefined,
  groups: readonly PageTokenGroup[],
  overrides: Record<string, string>,
): void {
  if (!el) {
    return;
  }
  for (const group of groups) {
    for (const token of group.tokens) {
      const value = overrides[token.prop];
      if (value) {
        el.style.setProperty(token.prop, value);
      } else {
        el.style.removeProperty(token.prop);
      }
    }
  }
}
