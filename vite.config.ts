import angular from "@analogjs/vite-plugin-angular";
import { defineConfig } from "vite";
import { env } from "node:process";

/**
 * Dev server for the component gallery — `pnpm --filter fold-ng dev`.
 *
 * The neutral workbench: it boots the design system in isolation (its own
 * tokens, zero app dependency) so graphical work happens on the components
 * themselves. The whole gallery lives under `demo/` (its own root here) and is
 * dev-only — never part of the published package surface (`exports` in
 * package.json controls that). The build output still lands at the repo's
 * `dist/` so the Pages workflow publishes `./dist`.
 *
 * `base` is the asset URL prefix. Root (`/`) for the dev server; the GitHub
 * Pages deploy (from `main`) overrides it via `PAGES_BASE` to `/fold-ng/`.
 * Hash-routing means the routes need no server rewrite; only the asset prefix
 * has to match.
 */
export default defineConfig({
  root: "demo",
  base: env.PAGES_BASE ?? "/",
  build: { outDir: "../dist", emptyOutDir: true },
  plugins: [angular()],
});
