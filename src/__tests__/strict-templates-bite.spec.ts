import { execFileSync } from "node:child_process";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

/**
 * Proves the strictTemplates gate BITES. It runs the real gate (a tsx
 * subprocess, exactly as pre-push/CI do) over a fixture whose template binds a
 * nonexistent property — the gate must exit non-zero. If this ever passes
 * without biting, the gate has been silently defanged.
 *
 * A subprocess (not a direct `checkTemplates()` import) because ngtsc loads
 * `@angular/compiler-cli` via `createRequire`, which does not survive Vitest's
 * module transform — the gate has to run in a plain node/tsx process.
 */
describe("strictTemplates gate (fixture-bite)", () => {
  it("exits non-zero on a dead binding", () => {
    const repo = resolve(dirname(fileURLToPath(import.meta.url)), "../..");
    const tsx = resolve(repo, "node_modules/.bin/tsx");
    const fixture = resolve(
      repo,
      "scripts/__fixtures__/tsconfig.dead-binding.json",
    );

    let bit = false;
    try {
      execFileSync(tsx, ["scripts/check-templates.ts", fixture], {
        cwd: repo,
        stdio: "pipe",
      });
    } catch {
      bit = true; // non-zero exit = the gate reported the dead binding
    }

    expect(bit).toBe(true);
  });
});
