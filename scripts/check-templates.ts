import { createRequire } from "node:module";
import { resolve } from "node:path";
import { argv } from "node:process";
import { fileURLToPath } from "node:url";

/**
 * Dead-binding gate for fold-ng — runs Angular's real template type-checker
 * (`strictTemplates`) over the library **and its dev gallery**. Standalone
 * version of the monorepo's `dev-toolbox/scripts/check-ui-templates.ts`, vendored
 * for the extracted repo.
 *
 * Why: plain `tsc --noEmit` does NOT type-check Angular templates, and Vite
 * builds the gallery with esbuild (also no template check) — so a binding to a
 * removed input or a missing property ships silently. `ngtsc` with
 * `strictTemplates` is the only thing that catches BOTH.
 *
 * ⚠️ Requires `@angular/compiler-cli` (devDep) + **TypeScript 6.0.x** — the
 * Angular compiler hard-refuses TS < 6.0. In the monorepo the package is pinned
 * to TS 5.9.3, so this script only runs once the lib is on TS6 (the same gate as
 * `ng-packagr`, §4). Until then the monorepo uses the root `lint:ui-templates`.
 *
 * Wire as `"lint:templates": "tsx scripts/check-templates.ts"` and run it in
 * pre-push + CI.
 */

const PKG_ROOT = resolve(import.meta.dirname, "..");
const TSCONFIG = resolve(PKG_ROOT, "tsconfig.app.json");

interface NgDiagnostic {
  readonly category: number;
  readonly messageText: unknown;
}
interface CompilerCli {
  readConfiguration(
    project: string,
    existingOptions?: Record<string, unknown>,
  ): { rootNames: readonly string[]; options: Record<string, unknown> };
  performCompilation(config: {
    rootNames: readonly string[];
    options: Record<string, unknown>;
  }): { diagnostics: readonly NgDiagnostic[] };
  formatDiagnostics(diagnostics: readonly NgDiagnostic[]): string;
}

/** TS `DiagnosticCategory.Error` — errors only; warnings don't fail the gate. */
const ERROR_CATEGORY = 1;

/** Resolve `@angular/compiler-cli` from this package's own node_modules. */
function loadCompilerCli(): CompilerCli {
  const req = createRequire(import.meta.url);
  return req("@angular/compiler-cli") as CompilerCli;
}

/**
 * Runs `strictTemplates` over a tsconfig, returning the ERROR diagnostics (empty
 * = clean). Parameterised so a fixture test can point it at a deliberately-broken
 * component and prove the gate BITES.
 */
export function checkTemplates(tsconfigPath: string): readonly NgDiagnostic[] {
  const cli = loadCompilerCli();
  const config = cli.readConfiguration(tsconfigPath, {
    strictTemplates: true,
    noEmit: true,
  });
  const { diagnostics } = cli.performCompilation({
    rootNames: config.rootNames,
    options: { ...config.options, noEmit: true },
  });
  return diagnostics.filter((d) => d.category === ERROR_CATEGORY);
}

function main(): void {
  const errors = checkTemplates(TSCONFIG);
  if (errors.length === 0) {
    console.log(
      "✓ templates: strictTemplates clean (no dead bindings) — src + gallery",
    );
    return;
  }
  console.error(loadCompilerCli().formatDiagnostics(errors));
  console.error(
    `\n✗ templates: ${errors.length} template error(s). A dead binding or a missing property slipped past tsc/vite — fix it above.`,
  );
  process.exit(1);
}

// Run only when invoked directly (`tsx scripts/check-templates.ts`), not when a
// fixture test imports `checkTemplates`.
if (argv[1] && resolve(fileURLToPath(import.meta.url)) === resolve(argv[1])) {
  main();
}
