import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative, resolve } from "node:path";
import { argv } from "node:process";
import { fileURLToPath } from "node:url";

/**
 * Typography-token guard for fold-ng — twin of `check-spacing.ts`.
 *
 * Flags raw literals on the four typographic axes of component styles, where a
 * token should carry the value:
 *
 * - `font-size` → `--fold-text-*` (2xs 10 · xs 11 · sm 12 · md 13 · base 14 ·
 *   lg 16 · xl 20 · 2xl 24)
 * - `font-weight` → `--fold-weight-*` (regular · medium · semibold · bold)
 * - `line-height` → `--fold-leading-*` (none · tight · snug · normal · relaxed)
 * - `letter-spacing` → `--fold-tracking-*` (tighter · tight · normal · wide · caps)
 *
 * Hard gate: the burn-down is drained, so any bare literal reintroduced on
 * these axes **fails** (exit 1). Three carve-outs, each for a reason, not for
 * convenience:
 *
 * - A component's public theming default — a value inside a
 *   `var(--fold-<c>-*, …)` fallback — is that component's typographic API, not
 *   a bare literal, so it is stripped before the check.
 * - Keywords (`inherit`, `normal`, `0`) are resets, not scale steps, and a value
 *   carrying no number at all is an indirection (`map.get(…)`, a Sass variable)
 *   whose real value lives elsewhere. Known blind spot: a Sass map entry that
 *   holds a bare px would not be seen here — today every entry in `$sizes`
 *   (`forms/_field-box.scss`) names a `--fold-text-*` token.
 * - `EXEMPT` below lists the font-sizes that are **component geometry**, not
 *   type: an avatar's initials or a slider's bubble label size is a function of
 *   the component's own diameter, and snapping it to a type step would couple
 *   two unrelated scales. Each entry carries its reason.
 */

const PKG_ROOT = resolve(import.meta.dirname, "..");
const COMPONENTS = resolve(PKG_ROOT, "src/components");

/** The four typographic axes a token owns. */
const TYPE_PROP =
  /^\s*(font-size|font-weight|line-height|letter-spacing)\s*:\s*([^;]+);/;

/** Resets and inherited values — not scale steps, so never a finding. */
const KEYWORDS = new Set(["inherit", "initial", "unset", "normal", "0"]);

/** A bare number — what makes a value a literal rather than an indirection. */
const HAS_NUMBER = /\d/;

/**
 * Font-sizes that are component geometry rather than type. Keyed
 * `<path-under-src/components>:<line>`; the value is why it stays a literal.
 */
const EXEMPT = new Map<string, string>([
  [
    "content/avatar/avatar.component.scss:14",
    "avatar initials scale with the avatar's diameter, not the type scale",
  ],
  ["content/avatar/avatar.component.scss:19", "idem — avatar md"],
  ["content/avatar/avatar.component.scss:24", "idem — avatar lg"],
  [
    "content/avatar-list/avatar-list.component.scss:58",
    "the stack's overflow counter tracks its avatar size",
  ],
  ["content/avatar-list/avatar-list.component.scss:63", "idem — stack md"],
  ["content/avatar-list/avatar-list.component.scss:68", "idem — stack lg"],
  [
    "forms/slider/range-slider.component.scss:17",
    "the value bubble is sized by the thumb it sits on",
  ],
  ["forms/slider/range-slider.component.scss:72", "idem — the tick label"],
]);

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

/** Every raw typographic literal under `src/components`. */
export function findRawTypography(): Finding[] {
  const findings: Finding[] = [];
  for (const file of scssFiles(COMPONENTS)) {
    const key = relative(COMPONENTS, file);
    const lines = readFileSync(file, "utf8").split("\n");
    lines.forEach((raw, i) => {
      const m = TYPE_PROP.exec(raw);
      if (!m) {
        return;
      }
      if (EXEMPT.has(`${key}:${i + 1}`)) {
        return;
      }
      // Strip `var(...)` first: a value inside a component-token fallback is
      // that component's public theming default, not a bare literal.
      const value = (m[2] ?? "").replace(/var\([^)]*\)/g, "").trim();
      if (value === "" || KEYWORDS.has(value) || !HAS_NUMBER.test(value)) {
        return;
      }
      findings.push({
        file: relative(PKG_ROOT, file),
        line: i + 1,
        text: raw.trim(),
      });
    });
  }
  return findings;
}

function main(): void {
  const findings = findRawTypography();
  if (findings.length === 0) {
    console.log(
      "✓ typography: no raw size/weight/leading/tracking — all tokenised.",
    );
    return;
  }
  console.warn(
    `⚠ typography: ${findings.length} raw typographic value(s) — name a --fold-text-* / --fold-weight-* / --fold-leading-* / --fold-tracking-* step.\n`,
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
    "\n  Snap each to the nearest scale step. A themeable default belongs in a\n  var(--fold-<component>-*, …) fallback; component geometry that is genuinely\n  not type goes in EXEMPT, with its reason.",
  );
  process.exitCode = 1;
}

// Run only when invoked directly, not when a spec imports findRawTypography.
if (argv[1] && resolve(fileURLToPath(import.meta.url)) === resolve(argv[1])) {
  main();
}
