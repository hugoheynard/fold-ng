import { Component, input, output } from "@angular/core";
import { DatePipe } from "@angular/common";
import { Sh3IconComponent } from "../icon/icon.component";
import type { Sh3IconName } from "../icon/icon.registry";

/** One node of a {@link Sh3TimelineComponent}. */
export interface Sh3TimelineNode {
  /** Stable track key. */
  readonly key: string;
  /** Emitted on click; `null` marks a **non-clickable** node. */
  readonly id: string | null;
  /** Primary label. */
  readonly label: string;
  /** Optional date, formatted with the `date` pipe (`mediumDate`). */
  readonly date?: Date | null;
  /** Optional dot icon. */
  readonly icon?: Sh3IconName;
  /**
   * Completion state (progress steppers). When set, it drives the accent
   * ("filled") dot; when omitted, a non-clickable (`id === null`) node fills as
   * an origin/anchor. So `done` and the inert-anchor rule are the same accent.
   */
  readonly done?: boolean;
}

/**
 * `<sh3-timeline>` — a connected rail of nodes (dot + optional date + label),
 * in two orientations that share one primitive:
 *
 * - `orientation="vertical"` (default) — a **navigable history**: a dot rail on
 *   the left; clickable nodes emit their id, a `null`-id node is an inert
 *   accented anchor.
 * - `orientation="horizontal"` — a **progress stepper**: an optional `progress`
 *   fill line under the dots; each node's `done` drives its accent. Collapses to
 *   a vertical list on narrow viewports.
 *
 * The accent ("filled") dot is `done ?? (id === null)`, so the inert anchor and a
 * `done` step are the same rule.
 *
 * **Surface-agnostic** — it renders content only (a labelled `<nav>` of nodes),
 * no card of its own, so the consumer places it inside whatever surface fits.
 * Presentational + generic: the consumer maps its domain data to
 * {@link Sh3TimelineNode}s and owns the click meaning.
 *
 * @selector `sh3-timeline`
 *
 * @example
 * ```html
 * <sh3-card surface="sunken">
 *   <sh3-timeline ariaLabel="History" [nodes]="nodes()" (nodeClick)="scrollTo($event)" />
 * </sh3-card>
 * <sh3-timeline
 *   orientation="horizontal"
 *   ariaLabel="Signature progress"
 *   [progress]="pct()"
 *   [nodes]="steps()"
 * />
 * ```
 */
@Component({
  selector: "sh3-timeline",
  standalone: true,
  imports: [DatePipe, Sh3IconComponent],
  templateUrl: "./timeline.component.html",
  styleUrl: "./timeline.component.scss",
})
export class Sh3TimelineComponent {
  /** The ordered nodes to render. */
  readonly nodes = input.required<readonly Sh3TimelineNode[]>();
  /** Rail direction — vertical history rail vs horizontal progress stepper. */
  readonly orientation = input<"vertical" | "horizontal">("vertical");
  /**
   * Progress-fill width (%) for the horizontal rail. `null` (default) renders no
   * fill line; ignored in vertical mode.
   */
  readonly progress = input<number | null>(null);
  /** Accessible name for the timeline's `<nav>` landmark (screen-reader only). */
  readonly ariaLabel = input<string>();
  /** Tooltip (`title`) on the clickable nodes. */
  readonly nodeTitle = input<string>("");

  /** Emits the clicked node's id (never fires for `id === null` nodes). */
  readonly nodeClick = output<string>();

  /** Accent ("filled") dot: an explicit `done`, else the inert-anchor rule. */
  protected isFilled(node: Sh3TimelineNode): boolean {
    return node.done ?? node.id === null;
  }

  protected onNode(id: string | null): void {
    if (id !== null) {
      this.nodeClick.emit(id);
    }
  }
}
