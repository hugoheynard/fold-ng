import angular from "@analogjs/vite-plugin-angular";
import { defineConfig } from "vitest/config";
import { fileURLToPath } from "node:url";

/**
 * Vitest config for @sh3pherd/ui.
 *
 * Plain-TS token tests need nothing special, but the component specs render
 * real Angular components, so we compile them with @analogjs/vite-plugin-angular
 * and boot a zoneless TestBed in src/test-setup.ts — mirroring the app's own
 * IDE Vitest config so the package is tested exactly like the app.
 *
 * The `fold-ng` self-alias resolves the package name to the primary barrel:
 * `fold-ng/devtools` is a separate ng-packagr entry that imports the primary
 * `fold-ng` by name (its own rootDir forbids relative cross-entry imports), and
 * source-consumed builds have no installed `node_modules/fold-ng` to resolve it.
 */
export default defineConfig({
  plugins: [angular()],
  resolve: {
    alias: {
      "fold-ng": fileURLToPath(new URL("./src/public-api.ts", import.meta.url)),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["src/test-setup.ts"],
    include: ["src/**/*.spec.ts", "demo/**/*.spec.ts", "scripts/**/*.spec.mjs"],
  },
});
