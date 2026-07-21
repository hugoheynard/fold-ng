import { booleanAttribute, Component, computed, input } from "@angular/core";
import { Sh3IconComponent } from "../icon/icon.component";
import type { Sh3IconName } from "../icon/icon.registry";

/** Severity of a {@link Sh3CalloutComponent} — colour + default icon. */
export type Sh3CalloutVariant =
  | "neutral"
  | "info"
  | "success"
  | "warning"
  | "alert";

/** How the callout meets its container. */
export type Sh3CalloutAppearance = "inset" | "flat";

/** Default glyph per variant — overridable with the `icon` input. */
const DEFAULT_ICON: Record<Sh3CalloutVariant, Sh3IconName> = {
  neutral: "info",
  info: "info",
  success: "completed",
  warning: "warning",
  alert: "warning",
};

/**
 * `<sh3-callout>` — a tinted message row: a status colour, an icon, a short
 * message, and optional actions on the trailing edge.
 *
 * Two appearances, and the difference is where it sits rather than how loud it
 * is:
 * - `inset` (default) — a bordered, rounded row **in** the flow, like a card.
 * - `flat` — a full-bleed band: no radius, no side borders, hairlines top and
 *   bottom only, so it reads as a strip **of** its container (drop one into a
 *   `<sh3-card padding="none">` and it spans the card edge to edge).
 *
 * The message is projected, so it can carry `<strong>`, links or a second
 * sentence. Colour comes from the status token families, so every theme is
 * handled without the callout knowing any of them.
 *
 * ## Inputs
 * | Input        | Type                                                 | Default     |
 * |--------------|------------------------------------------------------|-------------|
 * | `variant`    | `neutral \| info \| success \| warning \| alert`      | `neutral`   |
 * | `appearance` | `inset \| flat`                                       | `inset`     |
 * | `icon`       | `Sh3IconName` — overrides the variant's glyph         | —           |
 * | `announce`   | `boolean` — see below                                 | `false`     |
 *
 * `announce` is for a callout that **appears in response to something** (a
 * failed save, a quota just crossed): it turns the host into a live region so
 * a screen reader reads it out — assertively for `alert`, politely otherwise.
 * A callout that is simply part of the page stays a passive `note`; announcing
 * static content is noise, not accessibility.
 *
 * ## Slots
 * - default → the message.
 * - `[actions]` → trailing controls (a button, a link).
 *
 * @selector `sh3-callout`
 *
 * @example
 * ```html
 * <sh3-callout variant="warning">
 *   This contract is <strong>locked</strong> — no more edits.
 * </sh3-callout>
 *
 * <sh3-card padding="none">
 *   <sh3-callout variant="alert" appearance="flat" announce>
 *     Quota exceeded.
 *     <sh3-button actions size="sm" variant="ghost">Upgrade</sh3-button>
 *   </sh3-callout>
 * </sh3-card>
 * ```
 */
@Component({
  selector: "sh3-callout",
  standalone: true,
  imports: [Sh3IconComponent],
  host: {
    "[attr.role]": "role()",
    "[attr.aria-live]": "ariaLive()",
    "[class.v-neutral]": "variant() === 'neutral'",
    "[class.v-info]": "variant() === 'info'",
    "[class.v-success]": "variant() === 'success'",
    "[class.v-warning]": "variant() === 'warning'",
    "[class.v-alert]": "variant() === 'alert'",
    "[class.is-flat]": "appearance() === 'flat'",
  },
  templateUrl: "./callout.component.html",
  styleUrl: "./callout.component.scss",
})
export class Sh3CalloutComponent {
  readonly variant = input<Sh3CalloutVariant>("neutral");
  readonly appearance = input<Sh3CalloutAppearance>("inset");
  /** Override the variant's default glyph. */
  readonly icon = input<Sh3IconName>();
  /** Announce this callout when it appears — see the class doc. */
  readonly announce = input(false, { transform: booleanAttribute });

  protected readonly iconName = computed<Sh3IconName>(
    () => this.icon() ?? DEFAULT_ICON[this.variant()],
  );

  /** `alert` interrupts; anything else announced is polite; else passive. */
  protected readonly role = computed(() => {
    if (!this.announce()) {
      return "note";
    }
    return this.variant() === "alert" ? "alert" : "status";
  });

  protected readonly ariaLive = computed(() => {
    if (!this.announce()) {
      return null;
    }
    return this.variant() === "alert" ? "assertive" : "polite";
  });
}
