import { readFileSync } from "node:fs";
import { describe, it, expect } from "vitest";
import {
  buildApiSurface,
  API_SURFACE_PATH,
} from "../../scripts/gen-api-surface";

/**
 * Public-API surface guard (see scripts/gen-api-surface.ts).
 *
 * This is the producer-side counterpart to strict-templates-bite: it fails the
 * moment the exported surface — every symbol, and every `input`/`model`/`output`
 * of every exported class — drifts from the committed snapshot. Those binding
 * breaks are precisely the ones a consumer's plain `tsc` cannot see, so without
 * this they'd ship silently and only bite at the next version bump.
 */
describe("public API surface", () => {
  it("matches the committed API-SURFACE.md snapshot", () => {
    const committed = readFileSync(API_SURFACE_PATH, "utf8");
    // ⚠️ If this fails, the public surface moved. Run `pnpm run api:surface`,
    // review the diff, and if it is intended add a CHANGELOG entry — in 0.x a
    // removed / renamed / retyped input·model·output is breaking (minor bump).
    expect(buildApiSurface()).toBe(committed);
  });

  it("is deterministic across runs", () => {
    expect(buildApiSurface()).toBe(buildApiSurface());
  });
});
