import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative, resolve } from "node:path";
import { argv } from "node:process";
import { fileURLToPath } from "node:url";

/**
 * Typography-token guard for fold-ng — twin of `check-spacing.ts`.
 *
 * Flags raw literals on the four typographic axes of the library's components
 * **and of the gallery** — the gallery is the system's first consumer, so a
 * literal there is the same drift, only more visible:
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
 * - A `clamp(…)` font-size is **fluid type** — an expression that sweeps across
 *   the scale rather than a step on it. The gallery's hero headings are the
 *   only ones, and a token could not express them.
 *
 * Generated files are skipped: `changelog.generated.ts` mirrors past releases
 * verbatim, and an entry that quoted `line-height: 1` in 0.11 must keep saying
 * so. Rewriting it would make the changelog lie about what shipped.
 */

const PKG_ROOT = resolve(import.meta.dirname, "..");
/** The two trees the system's own styles live in. */
const ROOTS = [resolve(PKG_ROOT, "src/components"), resolve(PKG_ROOT, "demo")];

/** Extensions that can carry a style declaration (inline `style=""` included). */
const STYLED = [".scss", ".css", ".html", ".ts"];

/** The four typographic axes a token owns, anywhere a declaration can sit. */
const TYPE_PROP =
  /\b(font-size|font-weight|line-height|letter-spacing)\s*:\s*([^;"'}\n]+)/;

/** Resets and inherited values — not scale steps, so never a finding. */
const KEYWORDS = new Set(["inherit", "initial", "unset", "normal", "0"]);

/** A bare number — what makes a value a literal rather than an indirection. */
const HAS_NUMBER = /\d/;

/** Fluid type: an expression across the scale, not a step on it. */
const FLUID = /^clamp\(/;

/**
 * Blank out comments, keeping every newline so line numbers still line up. A
 * prose comment may well quote a declaration — `_tab-bar.scss` explains why it
 * sets `line-height` — and prose is not code. `//` counts as a comment only
 * when it does not follow a `:`, so a `url(https://…)` survives.
 */
function withoutComments(source: string): string {
  const blank = (m: string): string => m.replace(/[^\n]/g, " ");
  return source
    .replace(/\/\*[\s\S]*?\*\//g, blank)
    .replace(/<!--[\s\S]*?-->/g, blank)
    .replace(
      /(^|[^:])\/\/[^\n]*/g,
      (m, lead: string) => lead + blank(m.slice(lead.length)),
    );
}

/**
 * Font-sizes that are component geometry rather than type. Keyed
 * `<path-from-package-root>:<line>`; the value is why it stays a literal.
 */
const EXEMPT = new Map<string, string>([
  [
    "src/components/content/avatar/avatar.component.scss:14",
    "avatar initials scale with the avatar's diameter, not the type scale",
  ],
  [
    "src/components/content/avatar/avatar.component.scss:19",
    "idem — avatar md",
  ],
  [
    "src/components/content/avatar/avatar.component.scss:24",
    "idem — avatar lg",
  ],
  [
    "src/components/content/avatar-list/avatar-list.component.scss:58",
    "the stack's overflow counter tracks its avatar size",
  ],
  [
    "src/components/content/avatar-list/avatar-list.component.scss:63",
    "idem — stack md",
  ],
  [
    "src/components/content/avatar-list/avatar-list.component.scss:68",
    "idem — stack lg",
  ],
  [
    "src/components/forms/slider/range-slider.component.scss:17",
    "the value bubble is sized by the thumb it sits on",
  ],
  [
    "src/components/forms/slider/range-slider.component.scss:72",
    "idem — the tick label",
  ],
]);

interface Finding {
  readonly file: string;
  readonly line: number;
  readonly text: string;
}

function styledFiles(dir: string): string[] {
  const out: string[] = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      out.push(...styledFiles(full));
    } else if (
      STYLED.some((e) => entry.endsWith(e)) &&
      !entry.endsWith(".generated.ts")
    ) {
      out.push(full);
    }
  }
  return out;
}

/** Every raw typographic literal under the styled roots. */
export function findRawTypography(): Finding[] {
  const findings: Finding[] = [];
  for (const file of ROOTS.flatMap(styledFiles)) {
    const key = relative(PKG_ROOT, file);
    const lines = withoutComments(readFileSync(file, "utf8")).split("\n");
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
      if (
        value === "" ||
        KEYWORDS.has(value) ||
        !HAS_NUMBER.test(value) ||
        FLUID.test(value)
      ) {
        return;
      }
      findings.push({
        file: key,
        line: i + 1,
        text: `${m[1] ?? ""}: ${value}`,
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
