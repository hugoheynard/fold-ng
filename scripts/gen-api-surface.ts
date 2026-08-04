import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { argv } from "node:process";
import { fileURLToPath } from "node:url";
import ts from "typescript";

/**
 * Public-API surface guard for fold-ng.
 *
 * Why: the breaking changes that hurt consumers most are **template bindings** —
 * a removed / renamed / retyped `input`, `model` or `output`. Plain
 * `tsc --noEmit` does NOT type-check Angular templates (see check-templates.ts),
 * so a consumer app can `tsc` clean and still break at AOT — or worse, only
 * notice on the next version bump. And nothing warns the *maintainer* at author
 * time that they just moved the surface.
 *
 * This script snapshots the whole public surface — every exported symbol, and
 * for each exported class its `input` / `model` / `output` members with their
 * resolved type + required-ness — into `API-SURFACE.md`. A committed snapshot +
 * the `--check` mode (wired into the vitest suite via api-surface.spec.ts) makes
 * ANY surface change fail loudly, forcing an intentional CHANGELOG entry and the
 * right semver bump (in 0.x a removed / renamed / retyped member is breaking →
 * minor). The diff *is* the review artefact.
 *
 * Usage:
 *   tsx scripts/gen-api-surface.ts           # regenerate API-SURFACE.md
 *   tsx scripts/gen-api-surface.ts --check   # fail if the snapshot is stale
 */

const PKG_ROOT = resolve(import.meta.dirname, "..");
const TSCONFIG = resolve(PKG_ROOT, "tsconfig.lib.json");
export const API_SURFACE_PATH = resolve(PKG_ROOT, "API-SURFACE.md");

/** Every published entry point the guard snapshots — the `exports` map's code
 *  entries. `fold-ng/devtools` is opt-in but still public surface, so a change
 *  to it is just as breaking to a consumer that imports it. */
const ENTRIES: readonly { readonly label: string; readonly path: string }[] = [
  { label: "fold-ng", path: resolve(PKG_ROOT, "src/public-api.ts") },
  {
    label: "fold-ng/devtools",
    path: resolve(PKG_ROOT, "src/devtools/public-api.ts"),
  },
];

/** A binding member of a component/directive — the part a template consumer wires. */
interface BindingMember {
  readonly name: string;
  /** Resolved type, e.g. `InputSignal<string>`, `ModelSignal<T>`, `OutputEmitterRef<string>`. */
  readonly type: string;
  readonly required: boolean;
}

/** One exported symbol from the public barrel. */
interface ApiExport {
  readonly name: string;
  readonly flavor:
    "class" | "interface" | "type" | "function" | "enum" | "value";
  /** Populated for classes only — its template binding contract. */
  readonly bindings: readonly BindingMember[];
}

const BINDING_FACTORIES = new Set(["input", "model", "output"]);

/** Strip `import("…/module").` prefixes so the snapshot reads by bare type name
 *  and never churns when a type's source path moves. */
function normalizeType(type: string): string {
  return type.replace(/import\("[^"]*"\)\./g, "");
}

/** Classify a property initializer as an `input` / `model` / `output` binding. */
function readBinding(
  member: ts.PropertyDeclaration,
  checker: ts.TypeChecker,
): BindingMember | null {
  const init = member.initializer;
  if (!init || !ts.isCallExpression(init)) {
    return null;
  }
  const callee = init.expression;
  let base: string;
  let required = false;
  if (ts.isPropertyAccessExpression(callee)) {
    base = callee.expression.getText();
    required = callee.name.getText() === "required";
  } else if (ts.isIdentifier(callee)) {
    base = callee.text;
  } else {
    return null;
  }
  if (!BINDING_FACTORIES.has(base)) {
    return null;
  }
  const symbol = checker.getSymbolAtLocation(member.name);
  const type = symbol
    ? normalizeType(
        checker.typeToString(
          checker.getTypeOfSymbolAtLocation(symbol, member),
          member,
          ts.TypeFormatFlags.NoTruncation,
        ),
      )
    : "unknown";
  return { name: member.name.getText(), type, required };
}

/** True for a member the public template contract exposes (public, not private/protected). */
function isPublic(member: ts.Declaration): boolean {
  const mod = ts.getCombinedModifierFlags(member);
  return (mod & (ts.ModifierFlags.Private | ts.ModifierFlags.Protected)) === 0;
}

function collectBindings(
  decl: ts.ClassDeclaration,
  checker: ts.TypeChecker,
): BindingMember[] {
  const out: BindingMember[] = [];
  for (const member of decl.members) {
    if (!ts.isPropertyDeclaration(member) || !isPublic(member)) {
      continue;
    }
    const binding = readBinding(member, checker);
    if (binding) {
      out.push(binding);
    }
  }
  return out.sort((a, b) => a.name.localeCompare(b.name, "en"));
}

function flavorOf(decl: ts.Declaration): ApiExport["flavor"] {
  if (ts.isClassDeclaration(decl)) {
    return "class";
  }
  if (ts.isInterfaceDeclaration(decl)) {
    return "interface";
  }
  if (ts.isTypeAliasDeclaration(decl)) {
    return "type";
  }
  if (ts.isFunctionDeclaration(decl)) {
    return "function";
  }
  if (ts.isEnumDeclaration(decl)) {
    return "enum";
  }
  return "value";
}

/** Resolve the aliased target of a re-exported symbol. */
function target(symbol: ts.Symbol, checker: ts.TypeChecker): ts.Symbol {
  return symbol.flags & ts.SymbolFlags.Alias
    ? checker.getAliasedSymbol(symbol)
    : symbol;
}

function readExports(program: ts.Program, entryPath: string): ApiExport[] {
  const checker = program.getTypeChecker();
  const entry = program.getSourceFile(entryPath);
  if (!entry) {
    throw new Error(`Cannot find entry point ${entryPath} in the program.`);
  }
  const moduleSymbol = checker.getSymbolAtLocation(entry);
  if (!moduleSymbol) {
    throw new Error("Entry point has no module symbol (no exports?).");
  }

  const exports: ApiExport[] = [];
  for (const sym of checker.getExportsOfModule(moduleSymbol)) {
    const resolved = target(sym, checker);
    const decls = resolved.getDeclarations() ?? [];
    const classDecl = decls.find(ts.isClassDeclaration);
    if (classDecl) {
      exports.push({
        name: sym.getName(),
        flavor: "class",
        bindings: collectBindings(classDecl, checker),
      });
      continue;
    }
    const decl = decls[0];
    exports.push({
      name: sym.getName(),
      flavor: decl ? flavorOf(decl) : "value",
      bindings: [],
    });
  }
  return exports.sort((a, b) => a.name.localeCompare(b.name, "en"));
}

/** Build the deterministic Markdown snapshot of the public surface. */
export function buildApiSurface(): string {
  const parsed = ts.getParsedCommandLineOfConfigFile(
    TSCONFIG,
    {},
    {
      ...ts.sys,
      onUnRecoverableConfigFileDiagnostic: (d) => {
        throw new Error(ts.flattenDiagnosticMessageText(d.messageText, "\n"));
      },
    },
  );
  if (!parsed) {
    throw new Error(`Cannot read ${TSCONFIG}`);
  }
  const program = ts.createProgram(parsed.fileNames, parsed.options);

  const lines: string[] = [
    "# fold-ng — public API surface",
    "",
    "<!-- GENERATED by scripts/gen-api-surface.ts — do NOT edit by hand.",
    "     Regenerate: `pnpm run api:surface`. Any diff here is an API change:",
    "     update this snapshot in the SAME commit and add a CHANGELOG entry.",
    "     In 0.x a removed / renamed / retyped input·model·output is BREAKING",
    "     (→ minor bump). This guard catches the binding breaks that a plain",
    "     consumer `tsc` cannot see (Angular templates aren't type-checked by tsc).",
    "     Every published entry point below is snapshotted — the opt-in",
    "     `fold-ng/devtools` entry is public surface too. -->",
  ];

  for (const { label, path } of ENTRIES) {
    const exports = readExports(program, path);
    const classes = exports.filter((e) => e.flavor === "class");
    const rest = exports.filter((e) => e.flavor !== "class");

    lines.push("", `## Entry \`${label}\``, "");

    lines.push("### Components & classes", "");
    for (const cls of classes) {
      lines.push(`#### ${cls.name}`);
      if (cls.bindings.length === 0) {
        lines.push("- (no input·model·output bindings)");
      }
      for (const b of cls.bindings) {
        lines.push(`- ${b.name}: ${b.type}${b.required ? " — required" : ""}`);
      }
      lines.push("");
    }

    lines.push("### Types & values", "");
    for (const e of rest) {
      lines.push(`- ${e.name} (${e.flavor})`);
    }
  }
  lines.push("");

  return lines.join("\n");
}

function main(): void {
  const surface = buildApiSurface();
  if (argv.includes("--check")) {
    const current = readFileSync(API_SURFACE_PATH, "utf8");
    if (current === surface) {
      console.log("✓ api-surface: public API matches the committed snapshot.");
      return;
    }
    console.error(
      "✗ api-surface: the public API changed but API-SURFACE.md is stale.\n" +
        "  Run `pnpm run api:surface`, review the diff, and if it is intended\n" +
        "  add a CHANGELOG entry (0.x binding break → minor bump).",
    );
    process.exitCode = 1;
    return;
  }
  writeFileSync(API_SURFACE_PATH, surface);
  console.log(`✓ api-surface: wrote ${API_SURFACE_PATH}`);
}

// Run only when invoked directly, not when a spec imports buildApiSurface.
if (argv[1] && resolve(fileURLToPath(import.meta.url)) === resolve(argv[1])) {
  main();
}
