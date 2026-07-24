// @ts-check
import eslint from "@eslint/js";
import tslint from "typescript-eslint";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import eslintComments from "@eslint-community/eslint-plugin-eslint-comments";
import globals from "globals";
import {
  noUnlimitedDisable,
  typeEscapeHatches,
  stringifySafety,
  correctnessRules,
} from "./eslint.rules.mjs";

/**
 * Lint for `@sh3pherd/ui` — the design-system package, previously unlinted.
 * Enforces the project's load-bearing bans (`any`, `as` casts, naked
 * `eslint-disable`) on the component source and the demo gallery; the
 * type-checked string-safety rules are scoped to `src/`. TS-only, mirroring
 * the other package configs — templates (.html) are not linted here.
 *
 * Components run in the browser (DOM globals); `.spec.ts` relax the `as`-cast
 * ban (test fixtures narrow with assertions). `as const` stays exempt.
 */
export default tslint.config(
  {
    ignores: [
      "dist",
      "out-tsc",
      "node_modules",
      "eslint.config.mjs",
      "eslint.rules.mjs",
      "vite.config.ts",
      "**/*.js",
    ],
  },
  eslint.configs.recommended,
  ...tslint.configs.recommended,
  eslintPluginPrettierRecommended,
  // ── No naked `eslint-disable` (CLAUDE.md: no `eslint-disable`) ──
  {
    plugins: { "eslint-comments": eslintComments },
    rules: { ...noUnlimitedDisable },
  },
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      sourceType: "module",
    },
    rules: { ...typeEscapeHatches },
  },
  // ── Type-checked lint — production `src/` only (the dev gallery under
  //    `demo/` stays on the base recommended set, matching its dev-artifact
  //    status). Adopts strictTypeChecked + stylisticTypeChecked, then tunes a
  //    handful of rules to fit an Angular design system. ──
  {
    files: ["src/**/*.ts"],
    ignores: ["**/*.spec.ts", "**/__tests__/**"],
    extends: [
      ...tslint.configs.strictTypeChecked,
      ...tslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      // Re-assert our load-bearing bans AFTER the presets: stylisticTypeChecked
      // would otherwise re-allow `as` casts (assertionStyle) on src.
      ...typeEscapeHatches,
      ...stringifySafety,
      ...correctnessRules,
      // ── Preset tuned for an Angular component library ──
      // Idiomatic void arrow handlers (`() => this.close()`) aren't "confusing".
      "@typescript-eslint/no-confusing-void-expression": [
        "error",
        { ignoreArrowShorthand: true },
      ],
      // A template-only `@Component` with an empty class body is legitimate.
      "@typescript-eslint/no-extraneous-class": [
        "error",
        { allowWithDecorator: true },
      ],
      // Would strip real SSR guards: lib.dom types `document.body` non-null, but
      // it IS null before the DOM exists — those null-checks must stay.
      "@typescript-eslint/no-unnecessary-condition": "off",
      // interface vs `type` is intentionally mixed: public option/descriptor
      // types stay `type` to block consumer declaration-merging.
      "@typescript-eslint/consistent-type-definitions": "off",
    },
  },
  {
    files: ["**/*.spec.ts"],
    rules: {
      "@typescript-eslint/consistent-type-assertions": "off",
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
);
