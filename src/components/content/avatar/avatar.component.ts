import {
  booleanAttribute,
  Component,
  computed,
  inject,
  input,
  linkedSignal,
} from "@angular/core";
import { FoldPaletteRegistry } from "../../../color/palette-registry.service";
import { foldReadableInk } from "../../../color/contrast";

/** Ink for text on a light vs dark categorical fill. */
const DARK_INK = "#1a202c";
const LIGHT_INK = "#ffffff";

/** Fill style — `ghost` dashes the outline (guests). */
export type FoldAvatarVariant = "solid" | "ghost";
/** Status-ring colour — reuses the `fold-badge` status vocabulary. */
export type FoldAvatarRing =
  "none" | "accent" | "info" | "warning" | "alert" | "success";
/** Status-ring line style — `dotted` reads as scheduled / tentative. */
export type FoldAvatarRingStyle = "solid" | "dotted";

/**
 * `<fold-avatar>` — a user/entity avatar with initials or an image.
 *
 * With `imageUrl` it shows the image; otherwise it shows initials on a
 * deterministic background colour taken from the app-wide {@link FoldPaletteRegistry}
 * (so the same seed is the same colour everywhere, and one `registry.use(...)`
 * recolours every avatar).
 *
 * A broken `imageUrl` falls back to the initials rather than the browser's
 * broken-image glyph (and retries when the URL changes).
 *
 * Three orthogonal state axes compose: `variant` (fill), `muted` (presence —
 * dim for an absence/inactive person), and `ring` + `ringStyle` (a status
 * outline). The component stays domain-agnostic: a screen maps its own states
 * (e.g. absent → `[muted]`, a scheduled arrival → `ring="accent"`
 * `ringStyle="dotted"`), the avatar just draws the primitives. The ring is a
 * redundant emphasis cue — never the sole carrier of a state — because on a
 * light page a soft status hue (amber/green) can't clear WCAG 3:1 as a thin
 * line (status-ring-contrast.spec.ts).
 *
 * ## Inputs
 *
 * | Input       | Type                   | Default   | Description                                     |
 * |-------------|------------------------|-----------|-------------------------------------------------|
 * | `name`      | `string` (required)    | —         | Full name — initials are derived automatically. |
 * | `size`      | `'sm' \| 'md' \| 'lg'` | `'md'`    | Avatar size (20px / 32px / 44px).               |
 * | `colorSeed` | `string`               | `name`    | String used to pick the deterministic colour.   |
 * | `variant`   | `'solid' \| 'ghost'`   | `'solid'` | `'ghost'` renders a dashed border (for guests). |
 * | `square`    | `boolean`              | `false`   | Square shape with a small radius (for orgs).    |
 * | `imageUrl`  | `string`               | —         | Image/logo URL. Replaces initials when set; falls back to initials if it fails to load. |
 * | `muted`     | `boolean`              | `false`   | Dim the avatar (same hue, less intense) — absence / inactive. |
 * | `ring`      | `FoldAvatarRing`        | `'none'`  | A status outline (`accent`/`info`/`warning`/`alert`/`success`). |
 * | `ringStyle` | `'solid' \| 'dotted'`  | `'solid'` | Ring line style — `dotted` for scheduled/tentative states. |
 *
 * @selector `fold-avatar`
 *
 * @example
 * ```html
 * <fold-avatar name="Clément Aubry" size="lg" />
 * <fold-avatar name="Léa Petit" ring="accent" ringStyle="dotted" />
 * <fold-avatar name="Acme Corp" square imageUrl="/logo.svg" />
 * ```
 */
@Component({
  selector: "fold-avatar",
  standalone: true,
  templateUrl: "./avatar.component.html",
  styleUrl: "./avatar.component.scss",
})
export class FoldAvatarComponent {
  private readonly palette = inject(FoldPaletteRegistry);

  readonly name = input.required<string>();
  readonly size = input<"sm" | "md" | "lg">("md");
  readonly colorSeed = input<string | undefined>(undefined);
  readonly variant = input<FoldAvatarVariant>("solid");
  readonly square = input(false, { transform: booleanAttribute });
  readonly imageUrl = input<string | undefined>(undefined);
  /** Dim the avatar (same hue, less intense) — for an absent / inactive person. */
  readonly muted = input(false, { transform: booleanAttribute });
  /** A status outline; `'none'` draws nothing. */
  readonly ring = input<FoldAvatarRing>("none");
  /** Ring line style — `'dotted'` for scheduled / tentative states. */
  readonly ringStyle = input<FoldAvatarRingStyle>("solid");

  /** True once the `<img>` fails to load. Resets whenever `imageUrl` changes,
   *  so a corrected URL is retried rather than staying on the fallback. */
  protected readonly imageFailed = linkedSignal(() => {
    this.imageUrl();
    return false;
  });
  /** Show the image only when a URL is set AND it has not failed — a broken URL
   *  falls back to the initials instead of the browser's broken-image glyph. */
  protected readonly showImage = computed(
    () => Boolean(this.imageUrl()) && !this.imageFailed(),
  );

  /** Readable ink for the initials — the higher-contrast of dark/light ink on
   *  the fill, so a custom palette stays legible. */
  protected readonly onColor = computed(() =>
    foldReadableInk(this.color(), DARK_INK, LIGHT_INK),
  );

  readonly initials = computed(() => {
    const n = this.name().trim();
    if (!n) {
      return "?";
    }
    const [first = "", second = ""] = n.split(/\s+/);
    if (second) {
      return (first.charAt(0) + second.charAt(0)).toUpperCase();
    }
    return n.substring(0, 2).toUpperCase();
  });

  /** Deterministic fill from the active palette (via the shared registry). */
  readonly color = computed(() =>
    this.palette.colorFor(this.colorSeed() ?? this.name()),
  );
}
