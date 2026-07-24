import { execFileSync, execSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { argv, exit, stdin, stdout } from "node:process";
import { createInterface } from "node:readline/promises";

/**
 * Deprecate (or un-deprecate) a published version.
 *
 *   pnpm run deprecate <version> ["message"]   mark a version deprecated
 *   pnpm run deprecate <version> --undo         lift the deprecation
 *
 *   e.g.  pnpm run deprecate 0.0.0 "placeholder — use latest"
 *
 * A published version is immutable, but deprecating it shows a warning on
 * install and tidies the version list (zero discoverability penalty). npm will
 * prompt for your 2FA OTP interactively (tokens are disallowed on this package).
 */

const pkg = JSON.parse(readFileSync("package.json", "utf8")).name;

const args = argv.slice(2);
const undo = args.includes("--undo");
const rest = args.filter((a) => a !== "--undo");
const target = rest[0];
const message = rest.slice(1).join(" ");

if (!target) {
  console.error(`
usage:
  pnpm run deprecate <version> ["message"]   deprecate a version
  pnpm run deprecate <version> --undo          lift the deprecation

  e.g.  pnpm run deprecate 0.0.0 "placeholder — use latest"
`);
  exit(1);
}

// The version has to actually exist on the registry.
try {
  execSync(`npm view ${pkg}@${target} version`, { stdio: "pipe" });
} catch {
  console.error(`\n✗ ${pkg}@${target} is not a published version.\n`);
  exit(1);
}

const msg = undo ? "" : message || "deprecated — please use the latest version";

const rl = createInterface({ input: stdin, output: stdout });
console.log(
  `\n  ${undo ? "UN-deprecate" : "deprecate"} ${pkg}@${target}` +
    (undo ? "" : `\n  message: "${msg}"`) +
    "\n",
);
const go = (await rl.question("Proceed? (y/N) ")).trim().toLowerCase();
rl.close();
if (go !== "y" && go !== "yes") {
  console.error("aborted.");
  exit(1);
}

// Warn early if this machine isn't logged in — deprecate needs write auth, and
// npm reports that as a cryptic 404. (0.1.0 was published by CI via OIDC, not
// from here, so the laptop may never have logged in.)
try {
  execSync("npm whoami", { stdio: "pipe" });
} catch {
  console.error(
    "\n✗ not logged in to npm on this machine — run `npm login` first" +
      "\n  (a 404/401 on deprecate means missing write auth, not a missing version).\n",
  );
  exit(1);
}

// stdio: inherit so npm's interactive OTP prompt works.
try {
  execFileSync("npm", ["deprecate", `${pkg}@${target}`, msg], {
    stdio: "inherit",
  });
} catch {
  exit(1);
}
console.log(`\n✓ ${undo ? "un-deprecated" : "deprecated"} ${pkg}@${target}\n`);
