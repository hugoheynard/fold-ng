import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative, resolve } from "node:path";
import { argv } from "node:process";
import { fileURLToPath } from "node:url";

/**
 * Spacing-token guard for fold-ng — **advisory**.
 *
 * Flags raw px in the spacing *rhythm* (`padding` / `margin` / `gap`) of
 * component styles, where a `--fold-space-*` token should carry the value. The
 * spacing scale is a 4px grid (`xs 4 · sm 8 · md 12 · lg 16 · xl 20 · 2xl 24 ·
 * 3xl 32 · 4xl 40 · 5xl 48`); a raw px there is either an exact match to snap to
 * a token, or off-grid drift to snap to the nearest step.
 *
 * Advisory by design: unlike colour (a finite, fully-migrated set), spacing has
 * a long tail of legitimate one-offs, so this **warns and exits 0** — a burn-down
 * list, not a blocker. Pass `--strict` to exit non-zero (for a future CI gate,
 * once the list is drained). Positioning offsets (`top`/`left`/`inset`…) and
 * hairlines (≤2px) are intentionally out of scope.
 */

const PKG_ROOT = resolve(import.meta.dirname, "..");
const COMPONENTS = resolve(PKG_ROOT, "src/components");

/** `padding` / `margin` / `gap` (+ logical/physical sides) — the spacing rhythm. */
const SPACING_PROP =
  /^\s*(padding|margin|gap|row-gap|column-gap)(-(top|right|bottom|left|inline|block|inline-start|inline-end|block-start|block-end))?\s*:\s*([^;]+);/;

/** A px length whose magnitude is ≥ 3 (0/1/2px are hairlines, not spacing). */
const RAW_PX = /\b([3-9]|[1-9]\d+)px\b/;

interface Finding {
  readonly file: string;
  readonly line: number;
  readonly text: string;
}

function scssFiles(dir: string): string[] {
  const out: string[] = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      out.push(...scssFiles(full));
    } else if (entry.endsWith(".scss")) {
      out.push(full);
    }
  }
  return out;
}

/** Every raw-px spacing declaration under `src/components`. */
export function findRawSpacing(): Finding[] {
  const findings: Finding[] = [];
  for (const file of scssFiles(COMPONENTS)) {
    const lines = readFileSync(file, "utf8").split("\n");
    lines.forEach((raw, i) => {
      const m = SPACING_PROP.exec(raw);
      if (!m) {
        return;
      }
      const value = m[4] ?? "";
      // A value fully delegated to a token is fine, even mixed with a hairline.
      if (RAW_PX.test(value)) {
        findings.push({
          file: relative(PKG_ROOT, file),
          line: i + 1,
          text: raw.trim(),
        });
      }
    });
  }
  return findings;
}

function main(): void {
  const findings = findRawSpacing();
  if (findings.length === 0) {
    console.log("✓ spacing: no raw px in padding/margin/gap — all tokenised.");
    return;
  }
  console.warn(
    `⚠ spacing: ${findings.length} raw-px spacing value(s) — snap to a --fold-space-* token (4px grid).\n`,
  );
  let last = "";
  for (const f of findings) {
    if (f.file !== last) {
      console.warn(`  ${f.file}`);
      last = f.file;
    }
    console.warn(`    ${f.line}: ${f.text}`);
  }
  console.warn(
    "\n  Advisory (a burn-down list, not a blocker). Off-grid values (6/10/14…) snap to the nearest step; a genuine one-off stays an explicit literal.",
  );
  if (argv.includes("--strict")) {
    process.exitCode = 1;
  }
}

// Run only when invoked directly, not when a spec imports findRawSpacing.
if (argv[1] && resolve(fileURLToPath(import.meta.url)) === resolve(argv[1])) {
  main();
}
