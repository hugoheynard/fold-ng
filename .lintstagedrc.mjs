// Package-local lint-staged for the extracted fold-ng repo.
// Inert inside the monorepo: when the root pre-commit runs lint-staged from the
// repo root, the ROOT .lintstagedrc.mjs is resolved first — this one only applies
// once fold-ng is its own repo.
export default {
  "{src,dev}/**/*.ts": ["pnpm exec eslint --config eslint.config.mjs --fix"],
  "**/*.{js,mjs,cjs,ts,json,md,yml,yaml,scss,css,html}": [
    "pnpm exec prettier --write",
  ],
};
