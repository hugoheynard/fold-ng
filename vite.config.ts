import angular from "@analogjs/vite-plugin-angular";
import { defineConfig } from "vite";

/**
 * Dev server for the component gallery — `pnpm --filter fold-ng dev`.
 *
 * The neutral workbench: it boots the design system in isolation (its own
 * tokens, zero app dependency) so graphical work happens on the components
 * themselves. `dev/` + this config are dev-only — never part of the published
 * package surface (`exports` in package.json controls that).
 */
export default defineConfig({
  plugins: [angular()],
});
