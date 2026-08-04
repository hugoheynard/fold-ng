import angular from "@analogjs/vite-plugin-angular";
import { defineConfig } from "vite";
import { env } from "node:process";
import { fileURLToPath } from "node:url";

/**
 * Dev server for the component gallery — `pnpm --filter fold-ng dev`.
 *
 * The neutral workbench: it boots the design system in isolation (its own
 * tokens, zero app dependency) so graphical work happens on the components
 * themselves. `demo/` holds the gallery; the entry `index.html` stays at the
 * repo root (the vite root), because the gallery reaches into `src/` — it
 * imports the components and globs their `.scss`/`.html` at build time — so the
 * root has to sit above both `demo/` and `src/`. `demo/` never ships (`exports`
 * in package.json controls the published surface).
 *
 * `base` is the asset URL prefix. Root (`/`) for the dev server; the GitHub
 * Pages deploy (from `main`) overrides it via `PAGES_BASE` to `/fold-ng/`.
 * Hash-routing means the routes need no server rewrite; only the asset prefix
 * has to match.
 */
export default defineConfig({
  base: env.PAGES_BASE ?? "/",
  plugins: [angular()],
  // `fold-ng/devtools` imports the primary `fold-ng` by name (it's a separate
  // ng-packagr entry point with its own rootDir). Source-consumed, there is no
  // installed `node_modules/fold-ng`, so alias the package name to the barrel.
  resolve: {
    alias: {
      "fold-ng": fileURLToPath(new URL("./src/public-api.ts", import.meta.url)),
    },
  },
});
