import type { FoldIconSet } from "./icon-registry.service";

/**
 * The trust contract for icon markup.
 *
 * `fold-icon` renders every resolved icon through `bypassSecurityTrustHtml` +
 * `[innerHTML]` — Angular's sanitiser is deliberately bypassed so authored SVG
 * (its `stroke` / `fill` / `viewBox` attributes) survives intact. That trust is
 * only sound for **static, authored** markup: never register a string derived
 * from user input.
 *
 * This guard is the backstop, not the sanitiser it cannot be. It rejects the
 * two shapes that have no place in a static icon — a non-`<svg>` root, and
 * `<script>` / inline `on*=` event handlers — so an obvious mistake fails loud
 * at registration instead of silently shipping a stored-XSS sink. It runs on
 * consumer input only; the built-in catalogue is authored in-package.
 */
const SVG_ROOT = /^\s*<svg[\s>]/i;
const UNSAFE = /<script[\s/>]|\son\w+\s*=/i;

/** Assert a single icon's markup is a static, trusted `<svg>` string. */
export function assertSvgIcon(name: string, svg: string): void {
  if (!SVG_ROOT.test(svg)) {
    throw new Error(
      `[fold-icon] icon "${name}" must be a literal <svg …> string — ` +
        `icon markup is rendered unsanitised, so it must be static and trusted.`,
    );
  }
  if (UNSAFE.test(svg)) {
    throw new Error(
      `[fold-icon] icon "${name}" must not contain <script> or inline event ` +
        `handlers (on*=) — icon markup must be static and trusted.`,
    );
  }
}

/** Assert every entry of a consumer-supplied icon set passes {@link assertSvgIcon}. */
export function assertIconSet(icons: FoldIconSet): void {
  for (const [name, svg] of Object.entries(icons)) {
    assertSvgIcon(name, svg);
  }
}
