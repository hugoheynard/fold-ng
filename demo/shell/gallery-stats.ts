/// <reference types="vite/client" />
import { GALLERY_THEMES } from "./gallery-theme";
import { FOLD_TEST_COUNT } from "./gallery-stats.generated";

/**
 * The gallery's headline stats, derived — never hand-maintained.
 *
 * Themes + components are counted LIVE in the browser from their real sources
 * (a Vite glob for components; the switcher's own array for themes), so they
 * track every add with zero upkeep. The test total can't be counted live
 * without shipping every spec's source, so it's a build-time constant
 * (`gallery-stats.generated.ts`, refreshed by `scripts/gen-stats.mjs`).
 */

/** Every library component file (`*.component.ts`, specs excluded by suffix).
 *  Glob keys only — the loaders are never called, so nothing is eagerly bundled. */
const componentModules = import.meta.glob(
  "../../src/components/**/*.component.ts",
);

export const FOLD_COMPONENT_COUNT = Object.keys(componentModules).length;
export const FOLD_THEME_COUNT = GALLERY_THEMES.length;
export { FOLD_TEST_COUNT };
