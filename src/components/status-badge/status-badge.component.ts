import { Component, computed, input } from "@angular/core";

/**
 * `<sh3-status-badge>` — a coloured badge indicating a status. Unlike the
 * generic {@link BadgeComponent}, this maps a **status key** to a colour, so
 * call sites pass a domain status rather than choosing a variant.
 *
 * **Supported statuses**
 * - `active` / `connected` — accent (teal)
 * - `pending` — warning (amber)
 * - `suspended` / `error` — alert (red)
 * - `coming-soon` / `not_connected` — muted grey
 * - any other value — neutral grey
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
  template: `<span class="badge" [attr.data-status]="normalizedStatus()">{{
    label() || status()
  }}</span>`,
  styles: `
    .badge {
      display: inline-flex;
      align-items: center;
      user-select: none;
      padding: 2px 10px;
      border-radius: var(--sh3-radius-pill);
      font-size: var(--sh3-text-xs);
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      white-space: nowrap;
    }
    .badge[data-status="active"] {
      background: var(--sh3-color-primary-surface);
      color: var(--sh3-color-primary);
      border: 1px solid var(--sh3-color-primary-border);
    }
    .badge[data-status="pending"] {
      background: var(--sh3-color-warning-surface);
      color: var(--sh3-color-warning-text);
      border: 1px solid var(--sh3-color-warning-border);
    }
    .badge[data-status="suspended"] {
      background: var(--sh3-color-alert-surface);
      color: var(--sh3-color-alert-text);
      border: 1px solid var(--sh3-color-alert-border);
    }
    .badge[data-status="coming-soon"] {
      background: var(--sh3-color-surface-raised);
      color: var(--sh3-color-text-muted);
      border: 1px solid var(--sh3-color-border);
    }
    /* Fallback — any unmapped status reads as neutral grey. */
    .badge:not([data-status="active"]):not([data-status="pending"]):not(
        [data-status="suspended"]
      ):not([data-status="coming-soon"]) {
      background: var(--sh3-color-surface-raised);
      color: var(--sh3-color-text-secondary);
      border: 1px solid var(--sh3-color-border);
    }
  `,
})
export class StatusBadgeComponent {
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
