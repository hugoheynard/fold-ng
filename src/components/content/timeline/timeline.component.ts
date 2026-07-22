import {
  booleanAttribute,
  Component,
  computed,
  contentChild,
  input,
  output,
  type TemplateRef,
} from "@angular/core";
import { DatePipe, NgTemplateOutlet } from "@angular/common";
import { FoldIconComponent } from "../../foundations/icon/icon.component";
import type { FoldIconName } from "../../foundations/icon/icon.registry";

/** Where a node's date renders relative to its label. */
export type FoldTimelineDatePlacement = "above" | "below" | "inline" | "hidden";

/** One node of a {@link FoldTimelineComponent}. */
export interface FoldTimelineNode {
  /** Stable track key. Also the click payload when {@link id} is `null`. */
  readonly key: string;
  /** Click payload; `null` means no id (see {@link clickable}). */
  readonly id: string | null;
  /**
   * Force the node interactive (a `<button>`) or not, in either orientation.
   * When omitted it defaults to `id !== null`. A clickable node emits `id ?? key`
   * on click. Lets a horizontal step be clickable without a routing id, or an
   * id-bearing node stay presentational.
   */
  readonly clickable?: boolean;
  /** Primary label. */
  readonly label: string;
  /** Optional date, formatted with the `date` pipe (`mediumDate`). */
  readonly date?: Date | null;
  /** Pre-formatted date text — takes precedence over {@link date} when set. */
  readonly displayDate?: string;
  /** Optional dot icon. */
  readonly icon?: FoldIconName;
  /**
   * Completion state (progress steppers). When set, it drives the accent
   * ("filled") dot; when omitted, a non-clickable (`id === null`) node fills as
   * an origin/anchor. So `done` and the inert-anchor rule are the same accent.
   */
  readonly done?: boolean;
  /**
   * Per-node dot style — **overrides** the timeline's {@link
   * FoldTimelineComponent.variant}. `plain` fills the accent dot solid; `hollow`
   * shows it as a ring (the outlined look of the vertical rail's clickable dots).
   */
  readonly variant?: "plain" | "hollow";
  /**
   * Opaque per-node metadata for a custom node template (see the projected
   * `#node` template). The component never reads it — it's yours to branch on,
   * e.g. `state: 'pending'` → render an "en attente" badge.
   */
  readonly state?: string;
}

/**
 * `<fold-timeline>` — a connected rail of nodes (dot + optional date + label),
 * in two orientations that share one primitive:
 *
 * - `orientation="vertical"` (default) — a **navigable history**: a dot rail on
 *   the left; clickable nodes emit their id, a `null`-id node is an inert
 *   accented anchor.
 * - `orientation="horizontal"` — a **progress stepper**: an optional `progress`
 *   fill line under the dots; each node's `done` drives its accent. Collapses to
 *   a vertical list on narrow viewports.
 *
 * Interactivity is per node, not per component, and works the same in both
 * orientations: a node renders as a `<button>` when it is clickable — by default
 * that means `id !== null`, but each node can force it via `clickable`. A
 * non-clickable node renders as a plain presentational element (never a disabled
 * button — so a purely-presentational timeline, e.g. a signature stepper, carries
 * no button semantics). The container is a `<nav>` landmark only when at least one
 * node is clickable; otherwise a labelled `role="group"`.
 *
 * The accent ("filled") dot is `done ?? (id === null)`, so the inert anchor and a
 * `done` step are the same rule. Dots are round by default (`square` for
 * rounded-square), and each node's `icon` names its glyph. A node's date can be a
 * `Date` (formatted with the `date` pipe) or a pre-formatted `displayDate`, placed
 * above or below the label via `datePlacement`.
 *
 * **Surface-agnostic** — it renders content only (a labelled `<nav>` of nodes),
 * no card of its own, so the consumer places it inside whatever surface fits.
 * Presentational + generic: the consumer maps its domain data to
 * {@link FoldTimelineNode}s and owns the click meaning.
 *
 * **Custom node content** — project an `<ng-template #node let-n>` to replace a
 * node's label with arbitrary content (a badge, a status line, an action). The
 * timeline keeps ownership of the dot, date, layout and the derived progressbar;
 * the template only styles the label region. This is the escape hatch for
 * heterogeneous nodes without exploding the node interface into props.
 *
 * @selector `fold-timeline`
 *
 * @example
 * ```html
 * <fold-card surface="sunken">
 *   <fold-timeline ariaLabel="History" [nodes]="nodes()" (nodeClick)="scrollTo($event)" />
 * </fold-card>
 * <fold-timeline
 *   orientation="horizontal"
 *   ariaLabel="Signature progress"
 *   [progress]="pct()"
 *   [nodes]="steps()"
 * />
 * ```
 */
@Component({
  selector: "fold-timeline",
  standalone: true,
  imports: [DatePipe, NgTemplateOutlet, FoldIconComponent],
  templateUrl: "./timeline.component.html",
  styleUrl: "./timeline.component.scss",
})
export class FoldTimelineComponent {
  /** The ordered nodes to render. */
  readonly nodes = input.required<readonly FoldTimelineNode[]>();
  /** Rail direction — vertical history rail vs horizontal progress stepper. */
  readonly orientation = input<"vertical" | "horizontal">("vertical");
  /**
   * Progress-fill width (%) for the horizontal rail — an **override**. When
   * `null` (default) the fill is derived from the ratio of `done` nodes, so the
   * bar and the completed dots can never disagree. Ignored in vertical mode.
   */
  readonly progress = input<number | null>(null);
  /** Accessible name for the timeline's `<nav>` landmark (screen-reader only). */
  readonly ariaLabel = input<string>();
  /** Tooltip (`title`) on the clickable nodes. */
  readonly nodeTitle = input<string>("");
  /** Render the dots as rounded squares instead of circles. */
  readonly square = input(false, { transform: booleanAttribute });
  /** Default dot style for every node — a node's own `variant` overrides it. */
  readonly variant = input<"plain" | "hollow">("plain");
  /**
   * Where a node's date renders relative to its label — `above`/`below`
   * (stacked), `inline` (on the same row), or `hidden` (not shown). Default
   * `below`.
   */
  readonly datePlacement = input<FoldTimelineDatePlacement>("below");

  /** Emits a clicked node's `id ?? key` (never fires for non-clickable nodes). */
  readonly nodeClick = output<string>();

  /** Optional consumer template that renders a node's label region. */
  protected readonly nodeTemplate =
    contentChild<TemplateRef<{ $implicit: FoldTimelineNode }>>("node");

  /** Resolved interactivity: explicit `clickable`, else `id !== null`. */
  protected isClickable(node: FoldTimelineNode): boolean {
    return node.clickable ?? node.id !== null;
  }

  /** True when any node is clickable — the container is a `<nav>` only then. */
  protected readonly interactive = computed(() =>
    this.nodes().some((n) => this.isClickable(n)),
  );

  /** Count of completed nodes (drives the derived fill + the progressbar text). */
  protected readonly doneCount = computed(
    () => this.nodes().filter((n) => n.done).length,
  );

  /**
   * Horizontal fill width (%): the explicit `progress` override when given, else
   * derived so the fill reaches the last completed dot.
   */
  protected readonly fillPct = computed(() => {
    const override = this.progress();
    if (override !== null) {
      return override;
    }
    const total = this.nodes().length;
    const done = this.doneCount();
    return total > 1 && done > 0 ? ((done - 1) / (total - 1)) * 100 : 0;
  });

  /** `aria-valuenow` for the progressbar — a clean integer. */
  protected readonly fillNow = computed(() => Math.round(this.fillPct()));

  /** `aria-valuetext` ("2 / 4") when completion is tracked via `done`. */
  protected readonly stepText = computed(() => {
    const done = this.doneCount();
    return done > 0 ? `${done} / ${this.nodes().length}` : null;
  });

  /** Accent ("filled") dot: an explicit `done`, else the inert-anchor rule. */
  protected isFilled(node: FoldTimelineNode): boolean {
    return node.done ?? node.id === null;
  }

  /** Resolved dot style: the node's `variant` overrides the timeline default. */
  protected isHollow(node: FoldTimelineNode): boolean {
    return (node.variant ?? this.variant()) === "hollow";
  }

  protected onNode(node: FoldTimelineNode): void {
    if (this.isClickable(node)) {
      this.nodeClick.emit(node.id ?? node.key);
    }
  }
}
