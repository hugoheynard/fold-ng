/**
 * Shared-sprite plumbing for `fold-icon`.
 *
 * Instead of injecting an icon's markup into every `<fold-icon>` (N copies of
 * the same paths for N instances), each unique icon is added **once** to a
 * hidden document-level sprite as a `<symbol>`, and every instance renders a
 * lightweight `<svg><use href="#…"/></svg>` that references it. The DOM holds
 * one copy of the paths no matter how many times the icon renders.
 */

/** The id prefix shared by every symbol in the sprite. */
export const FOLD_ICON_SYMBOL_PREFIX = "fold-icon-";

/** The id of the single hidden sprite `<svg>` appended to the document. */
export const FOLD_ICON_SPRITE_ID = "fold-icon-sprite";

/** The symbol id for an icon name — what a `<use href>` points at. */
export function foldIconSymbolId(name: string): string {
  return `${FOLD_ICON_SYMBOL_PREFIX}${name}`;
}

/**
 * Convert an authored `<svg>…</svg>` string into a `<symbol id=…>…</symbol>`
 * for the sprite. The root `<svg>`'s presentation attributes (`viewBox`,
 * `fill`, `stroke`, `stroke-*`) carry onto the symbol so a `<use>` renders it
 * identically; `xmlns` / `width` / `height` are dropped — the instance `<svg>`
 * owns the rendered size, and `xmlns` is redundant inside an HTML-parsed SVG.
 *
 * Runs on markup already vetted by the registry's trust guard, so the input is
 * a static, well-formed `<svg>`.
 */
export function foldIconToSymbol(name: string, svg: string): string {
  const open = /<svg\b([^>]*)>/i.exec(svg);
  const attrs = (open?.[1] ?? "")
    .replace(/\s+xmlns(:\w+)?\s*=\s*(["'])[\s\S]*?\2/gi, "")
    .replace(/\s+(width|height)\s*=\s*(["'])[\s\S]*?\2/gi, "")
    .trim();
  const inner = svg
    .replace(/^[\s\S]*?<svg\b[^>]*>/i, "")
    .replace(/<\/svg\s*>\s*$/i, "");
  return `<symbol id="${foldIconSymbolId(name)}"${attrs ? ` ${attrs}` : ""}>${inner}</symbol>`;
}
