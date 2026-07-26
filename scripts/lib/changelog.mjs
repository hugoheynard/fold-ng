// Shared CHANGELOG parser + bump derivation. One source of truth for both the
// release flow (scripts/release.mjs, scripts/release-eta.mjs) and the gallery's
// designed changelog page (scripts/gen-changelog.mjs). Keep-a-Changelog format:
//   ## [Unreleased] | ## [x.y.z] - YYYY-MM-DD
//   ### Added | Changed | Fixed | Docs | …
//   - **bold lead.** rest…            (continuations indented, BREAKING inline)

/** @typedef {{ kind: "text" | "code" | "strong", value: string }} Run */
/** @typedef {{ lead: Run[], rest: Run[], breaking: boolean }} Entry */
/** @typedef {{ kind: string, items: Entry[] }} Group */
/**
 * @typedef {{ version: string, date: string | null, unreleased: boolean,
 *   counts: Record<string, number>, breaking: number, groups: Group[] }} Release
 */

const HEADING = /^## \[([^\]]+)\](?:\s*-\s*(\d{4}-\d{2}-\d{2}))?/;
const SUBHEADING = /^### (.+)$/;
const INLINE = /`([^`]+)`|\*\*([^*]+)\*\*/g;

/** Split inline markdown (`code`, **strong**) into safe render runs. */
export function tokenize(md) {
  /** @type {Run[]} */
  const runs = [];
  let last = 0;
  let m;
  INLINE.lastIndex = 0;
  while ((m = INLINE.exec(md)) !== null) {
    if (m.index > last) {
      runs.push({ kind: "text", value: md.slice(last, m.index) });
    }
    if (m[1] !== undefined) {
      runs.push({ kind: "code", value: m[1] });
    } else {
      runs.push({ kind: "strong", value: m[2] });
    }
    last = INLINE.lastIndex;
  }
  if (last < md.length) {
    runs.push({ kind: "text", value: md.slice(last) });
  }
  return runs;
}

/** One raw bullet → a structured entry (bold lead split from the rest). */
function toEntry(raw) {
  const text = raw.replace(/\s+/g, " ").trim();
  const breaking = /\bBREAKING\b/.test(text);
  const lead = text.match(/^\*\*(.+?)\*\*\s*(.*)$/s);
  if (lead) {
    return { lead: tokenize(lead[1]), rest: tokenize(lead[2]), breaking };
  }
  return { lead: tokenize(text), rest: [], breaking };
}

/** Collect the `- ` bullets of a section body (continuations folded in). */
function collectItems(lines) {
  /** @type {string[]} */
  const bullets = [];
  for (const line of lines) {
    if (line.startsWith("- ")) {
      bullets.push(line.slice(2));
    } else if (bullets.length > 0 && line.trim().length > 0) {
      bullets[bullets.length - 1] += ` ${line.trim()}`;
    }
  }
  return bullets.map(toEntry);
}

/** Parse the whole CHANGELOG.md into ordered releases (newest first). */
export function parseChangelog(md) {
  const lines = md.split("\n");
  /** @type {Release[]} */
  const releases = [];
  /** @type {Release | null} */
  let release = null;
  /** @type {Group | null} */
  let group = null;
  /** @type {string[]} */
  let buffer = [];

  const flush = () => {
    if (release && group) {
      group.items = collectItems(buffer);
      release.groups.push(group);
    }
    buffer = [];
  };

  for (const line of lines) {
    const head = line.match(HEADING);
    if (head) {
      flush();
      group = null;
      release = {
        version: head[1],
        date: head[2] ?? null,
        unreleased: head[1].toLowerCase() === "unreleased",
        counts: {},
        breaking: 0,
        groups: [],
      };
      releases.push(release);
      continue;
    }
    const sub = line.match(SUBHEADING);
    if (sub && release) {
      flush();
      group = { kind: sub[1].trim(), items: [] };
      continue;
    }
    if (group) {
      buffer.push(line);
    }
  }
  flush();

  for (const r of releases) {
    for (const g of r.groups) {
      r.counts[g.kind] = g.items.length;
      r.breaking += g.items.filter((i) => i.breaking).length;
    }
  }
  return releases;
}

/** The bump a release body warrants, plus human-readable reasons. */
export function deriveBump(release, current) {
  const preMajor = parseSemver(current).major === 0;
  const added = release.counts["Added"] ?? 0;
  const reasons = [];
  let level;
  if (release.breaking > 0) {
    level = preMajor ? "minor" : "major";
    reasons.push(`${release.breaking} breaking`);
  } else if (added > 0) {
    level = "minor";
  } else {
    level = "patch";
  }
  for (const [kind, n] of Object.entries(release.counts)) {
    if (n > 0) {
      reasons.push(`${n} ${kind.toLowerCase()}`);
    }
  }
  return { level, reasons, preMajor };
}

/** Parse `x.y.z` (ignores any prerelease suffix) into numbers. */
export function parseSemver(v) {
  const [core] = v.split("-");
  const [major, minor, patch] = core.split(".").map((n) => Number(n));
  return { major, minor, patch };
}

/** Apply a bump level to a version, honouring 0.x (breaking → minor). */
export function nextVersion(current, level) {
  const { major, minor, patch } = parseSemver(current);
  if (level === "major") {
    return `${major + 1}.0.0`;
  }
  if (level === "minor") {
    return `${major}.${minor + 1}.0`;
  }
  return `${major}.${minor}.${patch + 1}`;
}
