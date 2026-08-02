import { defineConfig, devices } from "@playwright/test";

/**
 * Interaction tests for behaviour jsdom can't exercise — the native `popover`
 * top layer, real positioning (flip/size/shift), and keyboard/focus. Runs the
 * gallery (Vite) in a real Chromium. Unit tests stay on Vitest; this is the
 * browser tier (`pnpm test:e2e`), meant for CI, not the pre-push hook.
 */
/**
 * Point the suite at a gallery that is already running (a dev server someone
 * else started, a deployed preview) instead of spawning one: `E2E_BASE_URL`.
 * Without it, the config starts its own on 5199, which is the CI path.
 */
const RUNNING = process.env.E2E_BASE_URL;

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: "list",
  use: {
    baseURL: RUNNING ?? "http://localhost:5199",
    trace: "on-first-retry",
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
  ...(RUNNING === undefined
    ? {
        webServer: {
          command: "pnpm exec vite --port 5199 --strictPort",
          url: "http://localhost:5199",
          reuseExistingServer: !process.env.CI,
          timeout: 60_000,
        },
      }
    : {}),
});
