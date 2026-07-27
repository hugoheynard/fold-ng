import { describe, it, expect } from "vitest";
import {
  parseChangelog,
  deriveBump,
  nextVersion,
  parseSemver,
  tokenize,
} from "./changelog.mjs";

const SAMPLE = `# Changelog

## [Unreleased]

### Added

- **\`fold-thing\` — a thing.** Some prose \`code\` and **bold**.

### Changed

- **BREAKING — renamed a thing.** Migration note.

## [0.4.0] - 2026-07-25

### Fixed

- A fix.
`;

describe("parseChangelog", () => {
  const releases = parseChangelog(SAMPLE);

  it("parses releases newest-first with dates + the unreleased flag", () => {
    expect(releases.map((r) => r.version)).toEqual(["Unreleased", "0.4.0"]);
    expect(releases[0].unreleased).toBe(true);
    expect(releases[0].date).toBeNull();
    expect(releases[1].date).toBe("2026-07-25");
  });

  it("counts items per section and flags breaking", () => {
    expect(releases[0].counts).toEqual({ Added: 1, Changed: 1 });
    expect(releases[0].breaking).toBe(1);
    expect(releases[1].breaking).toBe(0);
  });

  it("splits the bold lead from the rest", () => {
    const entry = releases[0].groups[0].items[0];
    expect(entry.lead.map((r) => r.value).join("")).toBe(
      "fold-thing — a thing.",
    );
  });
});

describe("tokenize", () => {
  it("splits code / strong / text runs", () => {
    expect(tokenize("a `b` **c**")).toEqual([
      { kind: "text", value: "a " },
      { kind: "code", value: "b" },
      { kind: "text", value: " " },
      { kind: "strong", value: "c" },
    ]);
  });
});

describe("deriveBump (0.x-aware)", () => {
  const bump = (release, current) => deriveBump(release, current).level;
  const withGroups = (groups) => {
    const r = {
      counts: {},
      breaking: 0,
      groups: groups.map((g) => ({ kind: g.kind, items: g.items })),
    };
    for (const g of r.groups) {
      r.counts[g.kind] = g.items.length;
      r.breaking += g.items.filter((i) => i.breaking).length;
    }
    return r;
  };

  it("breaking → minor while pre-1.0, major once >= 1.0", () => {
    const r = withGroups([{ kind: "Changed", items: [{ breaking: true }] }]);
    expect(bump(r, "0.4.0")).toBe("minor");
    expect(bump(r, "1.2.0")).toBe("major");
  });

  it("features → minor, fixes-only → patch", () => {
    expect(bump(withGroups([{ kind: "Added", items: [{}] }]), "0.4.0")).toBe(
      "minor",
    );
    expect(bump(withGroups([{ kind: "Fixed", items: [{}] }]), "0.4.0")).toBe(
      "patch",
    );
  });
});

describe("nextVersion + parseSemver", () => {
  it("bumps per level, honouring 0.x", () => {
    expect(nextVersion("0.4.0", "minor")).toBe("0.5.0");
    expect(nextVersion("0.4.2", "patch")).toBe("0.4.3");
    expect(nextVersion("0.4.0", "major")).toBe("1.0.0");
  });

  it("parses a core version, ignoring any prerelease suffix", () => {
    expect(parseSemver("0.5.0-beta.1")).toEqual({
      major: 0,
      minor: 5,
      patch: 0,
    });
  });
});
