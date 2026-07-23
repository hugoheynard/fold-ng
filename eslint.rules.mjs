// @ts-check
/**
 * Vendored ESLint rule fragments — the monorepo's load-bearing bans, copied here
 * so fold-ng lints identically once extracted (docs/INDEPENDENCE.md §3.2). These were
 * `@sh3pherd/eslint-config` (`workspace:*`); that dependency does not resolve
 * outside the monorepo, so the fragments live locally now.
 *
 * ⚠️ Keep in lockstep with `@sh3pherd/eslint-config` / `documentation/sh3-lint.md`
 * until the package is extracted — do not silently weaken a ban. Pure data
 * objects, spread into `eslint.config.mjs`; the consumer registers the plugins.
 */

/** No naked `eslint-disable` — every inline disable names its rule + a reason. */
export const noUnlimitedDisable = {
  "eslint-comments/no-unlimited-disable": "error",
  "eslint-comments/require-description": ["error", { ignore: [] }],
};

/**
 * The load-bearing type-escape bans (CLAUDE.md): no `any`, no `@ts-ignore`/
 * `@ts-nocheck` (`@ts-expect-error` only with a description), no `as` casts
 * (`as const` exempt; tests relax it). Not type-checked — apply everywhere.
 */
export const typeEscapeHatches = {
  "@typescript-eslint/no-explicit-any": "error",
  "@typescript-eslint/ban-ts-comment": [
    "error",
    {
      "ts-expect-error": "allow-with-description",
      "ts-ignore": true,
      "ts-nocheck": true,
      "ts-check": false,
      minimumDescriptionLength: 3,
    },
  ],
  "@typescript-eslint/consistent-type-assertions": [
    "error",
    { assertionStyle: "never" },
  ],
};

/**
 * No `[object Object]` / stray nullish in strings & logs. TYPE-CHECKED — apply
 * where a TS program is available (scoped to a `projectService` block over `src/`).
 */
export const stringifySafety = {
  "@typescript-eslint/no-base-to-string": "error",
  "@typescript-eslint/restrict-template-expressions": [
    "error",
    { allowNumber: true, allowBoolean: false, allowNullish: false },
  ],
};
