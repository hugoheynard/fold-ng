import { booleanAttribute, Component, computed, input } from "@angular/core";
import { FoldIconComponent } from "../../foundations/icon/icon.component";
import type { FoldIconName } from "../../foundations/icon/icon.registry";

/** Severity of a {@link FoldCalloutComponent} — colour + default icon. */
export type FoldCalloutVariant =
  | "neutral"
  | "accent"
  | "info"
  | "success"
  | "warning"
  | "alert";

/** How the callout meets its container. */
export type FoldCalloutAppearance = "inset" | "flat";

/** Default glyph per variant — overridable with the `icon` input. */
const DEFAULT_ICON: Record<FoldCalloutVariant, FoldIconName> = {
  neutral: "info",
  accent: "lightning",
  info: "info",
  success: "completed",
  warning: "warning",
  alert: "warning",
};

/**
 * `<fold-callout>` — a tinted message row: a status colour, an icon, a short
 * message, and optional actions on the trailing edge.
 *
 * Two appearances, and the difference is where it sits rather than how loud it
 * is:
 * - `inset` (default) — a bordered, rounded row **in** the flow, like a card.
 * - `flat` — a full-bleed band: no radius, no side borders, hairlines top and
 *   bottom only, so it reads as a strip **of** its container (drop one into a
 *   `<fold-card padding="none">` and it spans the card edge to edge).
 *
 * The message is projected, so it can carry `<strong>`, links or a second
 * sentence. Colour comes from the status token families, so every theme is
 * handled without the callout knowing any of them. `accent` is the odd one:
 * it states no severity, it tints with the brand — for a callout that promotes
 * rather than warns (a new capability, a tip). Same name as `fold-badge`'s
 * brand tint, on purpose.
 *
 * ## Inputs
 * | Input        | Type                                                 | Default     |
 * |--------------|------------------------------------------------------|-------------|
 * | `variant`    | `neutral \| accent \| info \| success \| warning \| alert` | `neutral` |
 * | `appearance` | `inset \| flat`                                       | `inset`     |
 * | `icon`       | `FoldIconName` — overrides the variant's glyph         | —           |
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
 * - `[actions]` → trailing controls. Project a small control (`size="sm"`) —
 *   a callout is a line of text, and a full-size button turns it into a bar.
 *   The callout cannot enforce it: view encapsulation puts projected content
 *   out of its reach.
 *
 * The resolved {@link role} and {@link ariaLive} are exposed (`exportAs:
 * "foldCallout"`) because `announce` changes nothing on screen — reading them
 * back is the only way to see it work.
 *
 * @selector `fold-callout`
 *
 * @example
 * ```html
 * <fold-callout variant="warning">
 *   This contract is <strong>locked</strong> — no more edits.
 * </fold-callout>
 *
 * <fold-card padding="none">
 *   <fold-callout variant="alert" appearance="flat" announce>
 *     Quota exceeded.
 *     <fold-button actions size="sm" variant="ghost">Upgrade</fold-button>
 *   </fold-callout>
 * </fold-card>
 * ```
 */
@Component({
  selector: "fold-callout",
  standalone: true,
  exportAs: "foldCallout",
  imports: [FoldIconComponent],
  host: {
    "[attr.role]": "role()",
    "[attr.aria-live]": "ariaLive()",
    "[class.v-neutral]": "variant() === 'neutral'",
    "[class.v-accent]": "variant() === 'accent'",
    "[class.v-info]": "variant() === 'info'",
    "[class.v-success]": "variant() === 'success'",
    "[class.v-warning]": "variant() === 'warning'",
    "[class.v-alert]": "variant() === 'alert'",
    "[class.is-flat]": "appearance() === 'flat'",
  },
  templateUrl: "./callout.component.html",
  styleUrl: "./callout.component.scss",
})
export class FoldCalloutComponent {
  readonly variant = input<FoldCalloutVariant>("neutral");
  readonly appearance = input<FoldCalloutAppearance>("inset");
  /** Override the variant's default glyph. */
  readonly icon = input<FoldIconName>();
  /** Announce this callout when it appears — see the class doc. */
  readonly announce = input(false, { transform: booleanAttribute });

  protected readonly iconName = computed<FoldIconName>(
    () => this.icon() ?? DEFAULT_ICON[this.variant()],
  );

  /** The resolved ARIA role — public so a consumer (or the gallery) can show
   *  what `announce` actually did, since it changes nothing visually. */
  readonly role = computed(() => {
    if (!this.announce()) {
      return "note";
    }
    return this.variant() === "alert" ? "alert" : "status";
  });

  /** The resolved live-region politeness, or `null` when passive. */
  readonly ariaLive = computed(() => {
    if (!this.announce()) {
      return null;
    }
    return this.variant() === "alert" ? "assertive" : "polite";
  });
}
