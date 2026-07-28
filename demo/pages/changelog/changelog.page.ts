import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from "@angular/core";
import {
  FoldBadgeComponent,
  FoldButtonComponent,
  FoldCalloutComponent,
  FoldCardComponent,
  FoldIconComponent,
  FoldPageLayoutComponent,
  FoldTimelineComponent,
  type FoldBadgeVariant,
  type FoldTimelineNode,
} from "../../../src/public-api";
import {
  CHANGELOG,
  PUBLISHED_VERSION,
  type ChangelogGroup,
  type ChangelogRelease,
} from "../../shell/changelog.generated";
import { ChangelogRunsComponent } from "./changelog-runs.component";

/** The published package — powers the per-version npm + tarball links. */
const NPM_PKG = "fold-ng";

/** Badge tint per changelog section — Added reads as the "new" accent, etc. */
const KIND_TONE: Readonly<Record<string, FoldBadgeVariant>> = {
  Added: "accent",
  Changed: "info",
  Fixed: "success",
  Removed: "alert",
  Deprecated: "warning",
  Docs: "neutral",
  Security: "alert",
};

/** Canonical section order — the same order CHANGELOG.md writes them in. */
const KIND_ORDER = [
  "Added",
  "Changed",
  "Fixed",
  "Removed",
  "Deprecated",
  "Docs",
  "Security",
] as const;

/** A release with its groups narrowed to the active filter. */
interface ShownRelease extends ChangelogRelease {
  readonly shownGroups: readonly ChangelogGroup[];
}

/** One filter chip: a section kind (or the synthetic `Breaking` flag). */
interface FilterChip {
  readonly key: string;
  readonly total: number;
}

/**
 * `/changelog` — the CHANGELOG rendered as a designed vertical timeline. The
 * data is build-time structured (`changelog.generated.ts`), so this page is pure
 * presentation. A filter bar narrows every release at once to a chosen section
 * (Added / Changed / Fixed …) or to breaking changes, hiding releases that end
 * up with nothing to show.
 */
@Component({
  selector: "gal-changelog-page",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FoldBadgeComponent,
    FoldButtonComponent,
    FoldCalloutComponent,
    FoldCardComponent,
    FoldIconComponent,
    FoldPageLayoutComponent,
    FoldTimelineComponent,
    ChangelogRunsComponent,
  ],
  templateUrl: "./changelog.page.html",
  styleUrl: "./changelog.page.scss",
})
export default class ChangelogPage {
  protected readonly published = PUBLISHED_VERSION;
  protected readonly pkg = NPM_PKG;

  /** `Breaking` and `Unreleased` are orthogonal flags; the rest are section
   *  kinds. All start **off** — the page opens on the full history. */
  protected readonly breakingActive = signal(false);
  protected readonly unreleasedActive = signal(false);
  protected readonly activeKinds = signal<ReadonlySet<string>>(new Set());

  protected readonly anyFilter = computed(
    () =>
      this.breakingActive() ||
      this.unreleasedActive() ||
      this.activeKinds().size > 0,
  );

  /** Total bullets sitting under `[Unreleased]` — the `Unreleased` chip count. */
  protected readonly unreleasedTotal = CHANGELOG.filter(
    (r) => r.unreleased,
  ).reduce((n, r) => n + r.groups.reduce((m, g) => m + g.items.length, 0), 0);

  /** Section chips actually present in the log, in canonical order + totals. */
  protected readonly kindChips: readonly FilterChip[] = KIND_ORDER.map(
    (kind) => ({
      key: kind,
      total: CHANGELOG.reduce(
        (n, r) =>
          n + (r.groups.find((g) => g.kind === kind)?.items.length ?? 0),
        0,
      ),
    }),
  ).filter((c) => c.total > 0);

  /** Total breaking bullets across the whole log — the `Breaking` chip count. */
  protected readonly breakingTotal = CHANGELOG.reduce(
    (n, r) => n + r.breaking,
    0,
  );

  /** Every release with its groups narrowed to the filter; empties dropped. */
  protected readonly shown = computed<readonly ShownRelease[]>(() => {
    const kinds = this.activeKinds();
    const breakingOnly = this.breakingActive();
    const unreleasedOnly = this.unreleasedActive();
    return CHANGELOG.filter((r) => !unreleasedOnly || r.unreleased)
      .map((release) => {
        const shownGroups = release.groups
          .filter((g) => g.items.length > 0)
          .filter((g) => kinds.size === 0 || kinds.has(g.kind))
          .map((g) => ({
            kind: g.kind,
            items: breakingOnly ? g.items.filter((i) => i.breaking) : g.items,
          }))
          .filter((g) => g.items.length > 0);
        return { ...release, shownGroups };
      })
      .filter((r) => r.shownGroups.length > 0);
  });

  protected readonly isEmpty = computed(() => this.shown().length === 0);

  /** One timeline node per shown release — hollow ring for the unreleased head. */
  protected readonly nodes = computed<readonly FoldTimelineNode[]>(() =>
    this.shown().map((r) => ({
      key: r.version,
      id: null,
      label: r.unreleased ? "Unreleased" : r.version,
      icon: r.unreleased ? "lightning" : "check",
      variant: r.unreleased ? "hollow" : "plain",
      done: !r.unreleased,
    })),
  );

  /** The shown release behind a timeline node (looked up by its version key). */
  protected releaseFor(key: string): ShownRelease | undefined {
    return this.shown().find((r) => r.version === key);
  }

  /** Versions expanded to their full descriptions — the rest read collapsed.
   *  The latest published version opens expanded; every other card is compact. */
  protected readonly expanded = signal<ReadonlySet<string>>(
    new Set([PUBLISHED_VERSION]),
  );

  /** The current npm `latest` — signified and expanded on load. */
  protected isLatest(release: ShownRelease): boolean {
    return !release.unreleased && release.version === this.published;
  }

  protected isExpanded(version: string): boolean {
    return this.expanded().has(version);
  }

  protected toggleExpanded(version: string): void {
    const next = new Set(this.expanded());
    if (next.has(version)) {
      next.delete(version);
    } else {
      next.add(version);
    }
    this.expanded.set(next);
  }

  /** Any collapsible prose to reveal? No description anywhere → no See-more. */
  protected hasDetails(groups: readonly ChangelogGroup[]): boolean {
    return groups.some((g) => g.items.some((i) => i.rest.length > 0));
  }

  /** npm page for a published version (`…/package/fold-ng/v/0.6.0`). */
  protected npmUrl(version: string): string {
    return `https://www.npmjs.com/package/${NPM_PKG}/v/${version}`;
  }

  /** Direct tarball download for a published version, from the registry. */
  protected tarballUrl(version: string): string {
    return `https://registry.npmjs.org/${NPM_PKG}/-/${NPM_PKG}-${version}.tgz`;
  }

  protected toggleKind(kind: string): void {
    const next = new Set(this.activeKinds());
    if (next.has(kind)) {
      next.delete(kind);
    } else {
      next.add(kind);
    }
    this.activeKinds.set(next);
  }

  protected isKindActive(kind: string): boolean {
    return this.activeKinds().has(kind);
  }

  protected toggleBreaking(): void {
    this.breakingActive.update((v) => !v);
  }

  protected toggleUnreleased(): void {
    this.unreleasedActive.update((v) => !v);
  }

  protected clear(): void {
    this.activeKinds.set(new Set());
    this.breakingActive.set(false);
    this.unreleasedActive.set(false);
  }

  /** Category-count badges for a release header, over the *shown* groups. */
  protected countsOf(
    groups: readonly ChangelogGroup[],
  ): readonly { kind: string; count: number; tone: FoldBadgeVariant }[] {
    return groups.map((g) => ({
      kind: g.kind,
      count: g.items.length,
      tone: KIND_TONE[g.kind] ?? "neutral",
    }));
  }

  /** Breaking bullets among the shown groups (header badge). */
  protected breakingShown(groups: readonly ChangelogGroup[]): number {
    return groups.reduce(
      (n, g) => n + g.items.filter((i) => i.breaking).length,
      0,
    );
  }

  protected toneFor(kind: string): FoldBadgeVariant {
    return KIND_TONE[kind] ?? "neutral";
  }
}
