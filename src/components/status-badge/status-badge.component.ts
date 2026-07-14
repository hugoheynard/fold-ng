import { Component, computed, input } from "@angular/core";

/**
 * `<sh3-status-badge>` — a coloured badge indicating a status. Unlike the
 * generic {@link Sh3BadgeComponent}, this maps a **status key** to a colour, so
 * call sites pass a domain status rather than choosing a variant.
 *
 * **Supported statuses**
 * - `active` / `connected` — success (green)
 * - `draft` / `pending` — warning (amber)
 * - `suspended` / `error` — alert (red)
 * - `coming-soon` / `not_connected` — muted grey
 * - any other value (e.g. `terminated`) — neutral grey
 *
 * ```html
 * <sh3-status-badge status="active" />
 * <sh3-status-badge status="pending" label="En attente" />
 * ```
 *
 * @selector `sh3-status-badge`
 */
@Component({
  selector: "sh3-status-badge",
  standalone: true,
  templateUrl: "./status-badge.component.html",
  styleUrl: "./status-badge.component.scss",
})
export class Sh3StatusBadgeComponent {
  /** The status key that determines the colour. */
  readonly status = input.required<string>();
  /** Display text — defaults to the raw `status` value. */
  readonly label = input<string>("");

  /** Collapses synonym keys onto the canonical colour states. */
  readonly normalizedStatus = computed(() => {
    const s = this.status();
    if (s === "connected") {
      return "active";
    }
    if (s === "error") {
      return "suspended";
    }
    if (s === "not_connected") {
      return "coming-soon";
    }
    return s;
  });
}
