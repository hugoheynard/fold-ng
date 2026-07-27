import angular from "@analogjs/vite-plugin-angular";
import { defineConfig } from "vitest/config";

/**
 * Vitest config for @sh3pherd/ui.
 *
 * Plain-TS token tests need nothing special, but the component specs render
 * real Angular components, so we compile them with @analogjs/vite-plugin-angular
 * and boot a zoneless TestBed in src/test-setup.ts — mirroring the app's own
 * IDE Vitest config so the package is tested exactly like the app.
 */
export default defineConfig({
  plugins: [angular()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["src/test-setup.ts"],
    include: ["src/**/*.spec.ts", "demo/**/*.spec.ts", "scripts/**/*.spec.mjs"],
  },
});
