import { Component, computed, inject, input } from "@angular/core";
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

/**
 * `<sh3-avatar>` — a user/entity avatar with initials or an image.
 *
 * With `imageUrl` it shows the image; otherwise it shows initials on a
 * deterministic background colour taken from the app-wide {@link Sh3PaletteRegistry}
 * (so the same seed is the same colour everywhere, and one `registry.use(...)`
 * recolours every avatar).
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
 *
 * @selector `sh3-avatar`
 */
@Component({
  selector: "sh3-avatar",
  standalone: true,
  template: `@if (imageUrl()) {
      <div
        class="avatar has-image"
        [class.size-sm]="size() === 'sm'"
        [class.size-md]="size() === 'md'"
        [class.size-lg]="size() === 'lg'"
        [class.shape-square]="square()"
        [attr.title]="name()"
      >
        <img [src]="imageUrl()" [alt]="name()" class="avatar-img" />
      </div>
    } @else {
      <div
        class="avatar"
        [class.size-sm]="size() === 'sm'"
        [class.size-md]="size() === 'md'"
        [class.size-lg]="size() === 'lg'"
        [class.variant-ghost]="variant() === 'ghost'"
        [class.shape-square]="square()"
        [style.background]="variant() === 'solid' ? color() : ''"
        [style.color]="variant() === 'solid' ? onColor() : ''"
        [attr.title]="name()"
      >
        {{ initials() }}
      </div>
    }`,
  styles: `
    .avatar {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      font-weight: 700;
      letter-spacing: 0.02em;
      user-select: none;
      border-radius: var(--sh3-radius-round);
    }
    .avatar.size-sm {
      width: 20px;
      height: 20px;
      font-size: 7px;
    }
    .avatar.size-md {
      width: 32px;
      height: 32px;
      font-size: 11px;
    }
    .avatar.size-lg {
      width: 44px;
      height: 44px;
      font-size: 15px;
    }
    /* Guests — dashed outline instead of a solid fill. */
    .avatar.variant-ghost {
      background: var(--sh3-color-surface-raised);
      color: var(--sh3-color-text-secondary);
      border: 1px dashed var(--sh3-color-border);
    }
    /* Orgs — square with a small radius. */
    .avatar.shape-square {
      border-radius: var(--sh3-radius-sm);
    }
    .avatar.has-image {
      overflow: hidden;
      background: var(--sh3-color-surface-raised);
      border: 1px solid var(--sh3-color-border);
    }
    .avatar-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `,
})
export class Sh3AvatarComponent {
  private readonly palette = inject(Sh3PaletteRegistry);

  readonly name = input.required<string>();
  readonly size = input<"sm" | "md" | "lg">("md");
  readonly colorSeed = input<string | undefined>(undefined);
  readonly variant = input<"solid" | "ghost">("solid");
  readonly square = input(false);
  readonly imageUrl = input<string | undefined>(undefined);

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
