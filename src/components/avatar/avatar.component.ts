import {
  booleanAttribute,
  Component,
  computed,
  inject,
  input,
} from "@angular/core";
import { Sh3PaletteRegistry } from "../../color/palette-registry.service";

/** Ink for text on a light vs dark categorical fill. */
const DARK_INK = "#1a202c";
const LIGHT_INK = "#ffffff";

/**
 * Pick a readable ink for text drawn on `fill`, from its relative luminance —
 * so a custom (dark) palette supplied via `provideSh3Palette` still gets legible
 * initials instead of the fixed dark ink. Non-hex fills fall back to dark ink.
 */
function readableInk(fill: string): string {
  const hex = fill.trim().replace(/^#/, "");
  const full =
    hex.length === 3
      ? hex
          .split("")
          .map((c) => c + c)
          .join("")
      : hex;
  if (!/^[0-9a-fA-F]{6}$/.test(full)) {
    return DARK_INK;
  }
  const channel = (i: number): number => {
    const c = parseInt(full.slice(i, i + 2), 16) / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  };
  const luminance =
    0.2126 * channel(0) + 0.7152 * channel(2) + 0.0722 * channel(4);
  return luminance > 0.4 ? DARK_INK : LIGHT_INK;
}

/** Status-ring colour — reuses the `sh3-badge` status vocabulary. */
export type Sh3AvatarRing =
  | "none"
  | "accent"
  | "info"
  | "warning"
  | "alert"
  | "success";
/** Status-ring line style — `dotted` reads as scheduled / tentative. */
export type Sh3AvatarRingStyle = "solid" | "dotted";

/**
 * `<sh3-avatar>` — a user/entity avatar with initials or an image.
 *
 * With `imageUrl` it shows the image; otherwise it shows initials on a
 * deterministic background colour taken from the app-wide {@link Sh3PaletteRegistry}
 * (so the same seed is the same colour everywhere, and one `registry.use(...)`
 * recolours every avatar).
 *
 * Three orthogonal state axes compose: `variant` (fill), `muted` (presence —
 * dim for an absence/inactive person), and `ring` + `ringStyle` (a status
 * outline). The component stays domain-agnostic: a screen maps its own states
 * (e.g. absent → `[muted]`, a scheduled arrival → `ring="accent"`
 * `ringStyle="dotted"`), the avatar just draws the primitives.
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
 * | `imageUrl`  | `string`               | —         | Image/logo URL. Replaces initials when set.     |
 * | `muted`     | `boolean`              | `false`   | Dim the avatar (same hue, less intense) — absence / inactive. |
 * | `ring`      | `Sh3AvatarRing`        | `'none'`  | A status outline (`accent`/`info`/`warning`/`alert`/`success`). |
 * | `ringStyle` | `'solid' \| 'dotted'`  | `'solid'` | Ring line style — `dotted` for scheduled/tentative states. |
 *
 * @selector `sh3-avatar`
 */
@Component({
  selector: "sh3-avatar",
  standalone: true,
  templateUrl: "./avatar.component.html",
  styleUrl: "./avatar.component.scss",
})
export class Sh3AvatarComponent {
  private readonly palette = inject(Sh3PaletteRegistry);

  readonly name = input.required<string>();
  readonly size = input<"sm" | "md" | "lg">("md");
  readonly colorSeed = input<string | undefined>(undefined);
  readonly variant = input<"solid" | "ghost">("solid");
  readonly square = input(false, { transform: booleanAttribute });
  readonly imageUrl = input<string | undefined>(undefined);
  /** Dim the avatar (same hue, less intense) — for an absent / inactive person. */
  readonly muted = input(false, { transform: booleanAttribute });
  /** A status outline; `'none'` draws nothing. */
  readonly ring = input<Sh3AvatarRing>("none");
  /** Ring line style — `'dotted'` for scheduled / tentative states. */
  readonly ringStyle = input<Sh3AvatarRingStyle>("solid");

  /** Readable ink for the initials, derived from the fill's luminance. */
  protected readonly onColor = computed(() => readableInk(this.color()));

  readonly initials = computed(() => {
    const n = this.name().trim();
    if (!n) {
      return "?";
    }
    const words = n.split(/\s+/);
    if (words.length >= 2) {
      return (words[0][0] + words[1][0]).toUpperCase();
    }
    return n.substring(0, 2).toUpperCase();
  });

  /** Deterministic fill from the active palette (via the shared registry). */
  readonly color = computed(() =>
    this.palette.colorFor(this.colorSeed() ?? this.name()),
  );
}
