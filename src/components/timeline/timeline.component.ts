import { Component, input, output } from "@angular/core";
import { DatePipe } from "@angular/common";
import { Sh3IconComponent } from "../icon/icon.component";
import type { Sh3IconName } from "../icon/icon.registry";

/** One node of a {@link Sh3TimelineComponent}. */
export interface Sh3TimelineNode {
  /** Stable track key. */
  readonly key: string;
  /** Emitted on click; `null` marks an **inert** (non-clickable, accented) node. */
  readonly id: string | null;
  /** Primary label. */
  readonly label: string;
  /** Optional date, formatted with the `date` pipe (`mediumDate`). */
  readonly date?: Date | null;
  /** Optional dot icon. */
  readonly icon?: Sh3IconName;
}

/**
 * `<sh3-timeline>` — a vertical, connected timeline: a dot rail on the left, each
 * node showing an optional date + a label. Nodes with a `null`
 * {@link Sh3TimelineNode.id} render inert and accented (an origin/anchor point);
 * the rest are buttons that emit their id on click.
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
  /** Accessible name for the timeline's `<nav>` landmark (screen-reader only). */
  readonly ariaLabel = input<string>();
  /** Tooltip (`title`) on the clickable nodes. */
  readonly nodeTitle = input<string>("");

  /** Emits the clicked node's id (never fires for inert `id === null` nodes). */
  readonly nodeClick = output<string>();

  protected onNode(id: string | null): void {
    if (id !== null) {
      this.nodeClick.emit(id);
    }
  }
}
