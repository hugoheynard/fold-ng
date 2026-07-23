import angular from "@analogjs/vite-plugin-angular";
import { defineConfig } from "vite";
import { env } from "node:process";

/**
 * Dev server for the component gallery — `pnpm --filter fold-ng dev`.
 *
 * The neutral workbench: it boots the design system in isolation (its own
 * tokens, zero app dependency) so graphical work happens on the components
 * themselves. `dev/` + this config are dev-only — never part of the published
 * package surface (`exports` in package.json controls that).
 *
 * `base` is the asset URL prefix. Root (`/`) for the dev server; the GitHub
 * Pages deploy (from `main`) overrides it via `PAGES_BASE` to `/fold-ng/`.
 * Hash-routing means the routes need no server rewrite; only the asset prefix
 * has to match.
 */
export default defineConfig({
  base: env.PAGES_BASE ?? "/",
  plugins: [angular()],
});
