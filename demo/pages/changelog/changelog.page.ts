import { ChangeDetectionStrategy, Component } from "@angular/core";
import {
  FoldBadgeComponent,
  FoldCalloutComponent,
  FoldCardComponent,
  FoldPageLayoutComponent,
  FoldTimelineComponent,
  type FoldBadgeVariant,
  type FoldTimelineNode,
} from "../../../src/public-api";
import {
  CHANGELOG,
  PUBLISHED_VERSION,
  type ChangelogRelease,
} from "../../shell/changelog.generated";
import { ChangelogRunsComponent } from "./changelog-runs.component";

/** Badge tint per changelog section — Added reads as the "new" accent, etc. */
const KIND_TONE: Readonly<Record<string, FoldBadgeVariant>> = {
  Added: "success",
  Changed: "info",
  Fixed: "accent",
  Removed: "alert",
  Deprecated: "warning",
  Docs: "neutral",
  Security: "alert",
};

/**
 * `/changelog` — the CHANGELOG rendered as a designed vertical timeline. The
 * data is build-time structured (`changelog.generated.ts`), so this page is pure
 * presentation: one `fold-timeline` node per release, each expanded into a card.
 */
@Component({
  selector: "gal-changelog-page",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FoldBadgeComponent,
    FoldCalloutComponent,
    FoldCardComponent,
    FoldPageLayoutComponent,
    FoldTimelineComponent,
    ChangelogRunsComponent,
  ],
  templateUrl: "./changelog.page.html",
  styleUrl: "./changelog.page.scss",
})
export default class ChangelogPage {
  protected readonly published = PUBLISHED_VERSION;
  protected readonly releases = CHANGELOG;

  /** One timeline node per release — hollow ring for the unreleased head. */
  protected readonly nodes: readonly FoldTimelineNode[] = CHANGELOG.map(
    (r) => ({
      key: r.version,
      id: null,
      label: r.unreleased ? "Unreleased" : r.version,
      icon: r.unreleased ? "lightning" : "check",
      variant: r.unreleased ? "hollow" : "plain",
      done: !r.unreleased,
    }),
  );

  /** The release behind a timeline node (looked up by its version key). */
  protected releaseFor(key: string): ChangelogRelease | undefined {
    return this.releases.find((r) => r.version === key);
  }

  /** The category-count badges for a release header, in changelog order. */
  protected countsOf(
    release: ChangelogRelease,
  ): readonly { kind: string; count: number; tone: FoldBadgeVariant }[] {
    return release.groups
      .filter((g) => g.items.length > 0)
      .map((g) => ({
        kind: g.kind,
        count: g.items.length,
        tone: KIND_TONE[g.kind] ?? "neutral",
      }));
  }

  protected toneFor(kind: string): FoldBadgeVariant {
    return KIND_TONE[kind] ?? "neutral";
  }
}
