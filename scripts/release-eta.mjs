// `pnpm eta` — a read-only preview of the next release. Reads [Unreleased] from
// CHANGELOG.md, derives the bump level (0.x-aware: breaking → minor) and prints
// what `pnpm release` would cut. Zero side effects — never touches git or npm.
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { parseChangelog, deriveBump, nextVersion } from "./lib/changelog.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const current = JSON.parse(
  readFileSync(join(root, "package.json"), "utf8"),
).version;
const releases = parseChangelog(
  readFileSync(join(root, "CHANGELOG.md"), "utf8"),
);
const unreleased = releases.find((r) => r.unreleased);

if (!unreleased || unreleased.groups.every((g) => g.items.length === 0)) {
  console.log(`\n  Nothing unreleased. Current: ${current}. Nothing to cut.\n`);
  process.exit(0);
}

const { level, reasons } = deriveBump(unreleased, current);
const next = nextVersion(current, level);
const lead = (item) => item.lead.map((r) => r.value).join("");

console.log(`
  Release ETA — preview only, nothing changed
  ───────────────────────────────────────────
  current   ${current}
  next      ${next}   (${level}${
    level === "minor" && unreleased.breaking > 0 ? ", 0.x breaking" : ""
  })
  because   ${reasons.join(" · ")}
`);

for (const group of unreleased.groups) {
  if (group.items.length === 0) {
    continue;
  }
  console.log(`  ${group.kind}`);
  for (const item of group.items) {
    const flag = item.breaking ? "⚠ " : "· ";
    console.log(`    ${flag}${lead(item)}`);
  }
  console.log("");
}

console.log(
  `  To cut it:  pnpm release   (bumps → ${next}, tags, publishes)\n`,
);
