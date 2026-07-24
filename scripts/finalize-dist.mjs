import {
  cpSync,
  readFileSync,
  writeFileSync,
  existsSync,
  readdirSync,
  rmSync,
} from "node:fs";
import { resolve } from "node:path";

/**
 * Post-`ng-packagr` step. ng-packagr compiles the TS API
 * into `dist/` and writes a `dist/package.json` pointing at the FESM bundle +
 * types — but it knows nothing about our **CSS token exports**. This script
 * finishes the publishable artifact:
 *
 *   1. Copies `src/tokens/*.css` into `dist/tokens/` (the `@import` chain in
 *      index.css stays valid — siblings keep their relative paths).
 *   2. Re-injects the `./tokens.css` + `./tokens/*.css` subpath exports into the
 *      generated `dist/package.json`, and pins `sideEffects` to the CSS so a
 *      bundler never tree-shakes an imported stylesheet away.
 *   3. Carries CHANGELOG.md + llms.txt into `dist/` (README + LICENSE are copied
 *      by ng-packagr itself).
 *
 * Publish happens from `dist/` — so `dist/package.json` is the real manifest.
 */

const ROOT = resolve(import.meta.dirname, "..");
const DIST = resolve(ROOT, "dist");

if (!existsSync(DIST)) {
  throw new Error("dist/ not found — run ng-packagr before finalize-dist.");
}

// 1 · Token stylesheets → dist/tokens/ (preserve the dir so @imports resolve).
cpSync(resolve(ROOT, "src/tokens"), resolve(DIST, "tokens"), {
  recursive: true,
  filter: (src) => !src.endsWith(".ts") && !src.includes("__tests__"),
});

// 2 · Fix up the generated manifest.
const pkgPath = resolve(DIST, "package.json");
const pkg = JSON.parse(readFileSync(pkgPath, "utf8"));

const withDot = (p) => (p.startsWith(".") ? p : `./${p}`);

// The `.` entry point: ng-packagr MERGES the source `exports["."]`, so our
// source `import: ./src/index.ts` (there for monorepo source-consumption)
// leaks into the tarball and would resolve BEFORE the FESM — shipping raw TS.
// Overwrite it with the compiled conditions only (types + FESM).
pkg.exports = {
  ...pkg.exports,
  ".": {
    types: withDot(pkg.typings ?? "./types/fold-ng.d.ts"),
    default: withDot(pkg.module ?? "./fesm2022/fold-ng.mjs"),
  },
  "./tokens.css": "./tokens/index.css",
  "./tokens/primitives.css": "./tokens/primitives.css",
  "./tokens/scales.css": "./tokens/scales.css",
  "./tokens/semantic.css": "./tokens/semantic.css",
};
pkg.sideEffects = ["**/*.css"];

// `files` leaked from source and lists `src` (absent in dist) — it would ship
// README/LICENSE and EXCLUDE fesm2022/ + types/. Drop it: publish is from
// dist/, so the whole compiled tree ships (npm respects .npmignore/defaults).
delete pkg.files;

writeFileSync(pkgPath, `${JSON.stringify(pkg, null, 2)}\n`);

// 3 · Docs that travel with the tarball.
for (const doc of ["CHANGELOG.md", "llms.txt"]) {
  const from = resolve(ROOT, doc);
  if (existsSync(from)) {
    cpSync(from, resolve(DIST, doc));
  }
}

// 4 · Drop TS build artefacts ng-packagr leaves in dist/. A `.tsbuildinfo` is an
//     incremental-compile cache (~100 kB) — pure cruft in a published package.
for (const f of readdirSync(DIST)) {
  if (f.endsWith(".tsbuildinfo")) {
    rmSync(resolve(DIST, f));
  }
}

console.log(
  "✓ finalize-dist: tokens CSS copied, exports re-injected, docs carried into dist/, tsbuildinfo pruned",
);
