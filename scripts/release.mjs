import { execSync } from "node:child_process";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { argv, exit, stdin, stdout } from "node:process";
import { createInterface } from "node:readline/promises";
import { parseChangelog, deriveBump } from "./lib/changelog.mjs";

/**
 * One-command release. `node scripts/release.mjs [patch|minor|major|beta]`:
 * bump package.json + stamp the changelog + commit + tag + push — which fires
 * release.yml (gates → build → npm publish via OIDC). Use the npm scripts:
 * `pnpm release` (derived) · `release:minor` · `release:major` · `release:beta`.
 *
 * The level is **derived from the CHANGELOG's [Unreleased] section** when no
 * argument is given (breaking → minor in 0.x; features → minor; else patch) —
 * so the changelog you already curate defines the bump. Pass an explicit level
 * to override. Preview the derivation without side effects with `pnpm eta`.
 *
 *   patch  0.1.0 → 0.1.1   (a fix)
 *   minor  0.1.0 → 0.2.0   (a feature, back-compatible)
 *   major  0.1.0 → 1.0.0   (a breaking change)
 *   beta   0.1.0 → 0.1.1-beta.0  (WIP cut → the `beta` dist-tag, not `latest`)
 */

const REPO = "hugoheynard/fold-ng";
const TYPES = {
  patch: "patch",
  minor: "minor",
  major: "major",
  beta: "prerelease --preid beta",
};

const sh = (cmd) => execSync(cmd, { encoding: "utf8" }).trim();
const run = (cmd) => execSync(cmd, { stdio: "inherit" });
const die = (msg) => {
  console.error(`\n✗ ${msg}\n`);
  exit(1);
};
const version = () => JSON.parse(readFileSync("package.json", "utf8")).version;

// ── Resolve the bump level: explicit arg, else derived from [Unreleased]. ──
let type = argv[2];
if (!type) {
  const releases = parseChangelog(readFileSync("CHANGELOG.md", "utf8"));
  const unreleased = releases.find((r) => r.unreleased);
  if (!unreleased || unreleased.groups.every((g) => g.items.length === 0)) {
    die("nothing unreleased in CHANGELOG.md — nothing to release.");
  }
  const derived = deriveBump(unreleased, version());
  type = derived.level;
  console.log(
    `\n  Bump derived from CHANGELOG: ${type}  (${derived.reasons.join(" · ")})`,
  );
}
if (!TYPES[type]) {
  die(
    "usage: node scripts/release.mjs [patch|minor|major|beta]  (omit → derived from CHANGELOG)",
  );
}

// ── Preconditions: main, clean, in sync — the release must come from main. ──
const branch = sh("git rev-parse --abbrev-ref HEAD");
if (branch !== "main") {
  die(
    `release only from main — you are on "${branch}". Land your work on main first.`,
  );
}
if (sh("git status --porcelain")) {
  die("working tree is not clean — commit or stash first.");
}
sh("git fetch --quiet origin main");
if (sh("git rev-parse HEAD") !== sh("git rev-parse origin/main")) {
  die("local main is out of sync with origin/main — pull/push first.");
}

// ── Bump the version (package.json only; we tag ourselves). ──
const before = version();
run(`npm version ${TYPES[type]} --no-git-tag-version`);
const next = version();
const tag = `v${next}`;
const channel = next.includes("-") ? "beta" : "latest";

const rl = createInterface({ input: stdin, output: stdout });
const revert = () => sh("git checkout -- package.json CHANGELOG.md");

// ── Stamp the changelog: [Unreleased] → [next] - today. ──
let changelogLine =
  "changelog: unchanged (couldn't find the [Unreleased] marker)";
const CL = "CHANGELOG.md";
if (existsSync(CL)) {
  let cl = readFileSync(CL, "utf8");
  const match = cl.match(/## \[Unreleased\]\n\n([\s\S]*?)\n\n## \[/);
  if (match) {
    let body = match[1].trim();
    if (!body || body === "_Nothing yet._") {
      const answer = (
        await rl.question(
          `\nOne-line summary for ${next} (blank → link to the GitHub release): `,
        )
      ).trim();
      body =
        answer ||
        `See the [release notes](https://github.com/${REPO}/releases/tag/${tag}).`;
    }
    const today = new Date().toISOString().slice(0, 10);
    cl = cl.replace(
      /## \[Unreleased\]\n\n[\s\S]*?\n\n## \[/,
      `## [Unreleased]\n\n_Nothing yet._\n\n## [${next}] - ${today}\n\n${body}\n\n## [`,
    );
    cl = cl.replace(
      /^\[unreleased\]:.*HEAD$/im,
      `[unreleased]: https://github.com/${REPO}/compare/${tag}...HEAD\n[${next}]: https://github.com/${REPO}/releases/tag/${tag}`,
    );
    writeFileSync(CL, cl);
    changelogLine = `changelog: [Unreleased] → [${next}] - ${today}`;
  }
}

sh("npx prettier --write package.json CHANGELOG.md");

// ── Preview + confirm (irreversible: a published version can't be replaced). ──
console.log(`
  Release preview
  ───────────────
  version   ${before} → ${next}
  tag       ${tag}
  npm tag   ${channel}${channel === "latest" ? "" : "   (opt-in — never touches latest)"}
  ${changelogLine}

  On confirm: commit + tag + push origin main ${tag}
              → release.yml runs the gates, builds, and npm-publishes via OIDC.
`);
const go = (await rl.question("Proceed? (y/N) ")).trim().toLowerCase();
rl.close();
if (go !== "y" && go !== "yes") {
  revert();
  die("aborted — package.json and CHANGELOG reverted, nothing pushed.");
}

// ── Ship it. One push for both refs → pre-push gate runs once. ──
run("git add -A");
run(`git commit -m "release: ${next}"`);
run(`git tag ${tag}`);
run(`git push origin main ${tag}`);

console.log(`
✓ ${tag} pushed. Watch the publish:
  https://github.com/${REPO}/actions/workflows/release.yml
`);
