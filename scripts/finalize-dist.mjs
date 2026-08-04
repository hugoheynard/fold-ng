import {
  cpSync,
  readFileSync,
  writeFileSync,
  existsSync,
  readdirSync,
  rmSync,
  mkdirSync,
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

// The `./devtools` secondary entry. ng-packagr flattens its module id — the
// path from the package root, `src/devtools` — into the compiled export key
// `./src/devtools` (and the on-disk `fold-ng-src-devtools.*` bundle names). It
// also MERGES the source `./devtools` export, which points at raw `.ts`. Rename
// the compiled entry to the public `./devtools` subpath (the flattened on-disk
// filename stays an internal detail, resolved through this map), and drop both
// the raw-TS leak and the now-redundant `dist/src/devtools/` manifest dir.
const compiledDevtools = pkg.exports["./src/devtools"];
if (compiledDevtools) {
  pkg.exports["./devtools"] = compiledDevtools;
  delete pkg.exports["./src/devtools"];
  // node10 (classic) resolution ignores `exports` and walks directories, so it
  // needs a physical `dist/devtools/` manifest — the primary entry supports
  // node10, keep the secondary consistent. Move ng-packagr's `dist/src/devtools`
  // manifest up to `dist/devtools`, re-pointing its now-one-level-shallower refs
  // (`../../` → `../`). The compiled bundles keep their flattened on-disk names.
  const upOneLevel = (p) => withDot(p).replace(/^\.\//, "../");
  mkdirSync(resolve(DIST, "devtools"), { recursive: true });
  writeFileSync(
    resolve(DIST, "devtools/package.json"),
    `${JSON.stringify(
      {
        module: upOneLevel(compiledDevtools.default),
        typings: upOneLevel(compiledDevtools.types),
      },
      null,
      2,
    )}\n`,
  );
  rmSync(resolve(DIST, "src"), { recursive: true, force: true });
} else {
  throw new Error(
    "finalize-dist: expected a compiled './src/devtools' export from ng-packagr — " +
      "did the secondary entry point (src/devtools/ng-package.json) build?",
  );
}

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
