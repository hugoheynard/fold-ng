import {
  booleanAttribute,
  Component,
  computed,
  input,
  numberAttribute,
} from "@angular/core";
import {
  Sh3AvatarComponent,
  type Sh3AvatarRing,
  type Sh3AvatarRingStyle,
} from "../avatar/avatar.component";

/** One face in an {@link Sh3AvatarListComponent} — the minimum an avatar needs,
 *  plus optional per-face state (absence / status ring). */
export interface Sh3AvatarListItem {
  /** Full name — initials + deterministic colour derive from it. */
  readonly name: string;
  /** Image/logo URL. Replaces the initials when set. */
  readonly imageUrl?: string;
  /** Overrides the string used to pick the deterministic colour (else `name`). */
  readonly colorSeed?: string;
  /** Dim this face — absence / inactive. */
  readonly muted?: boolean;
  /** A status outline on this face. */
  readonly ring?: Sh3AvatarRing;
  /** Ring line style for this face (`dotted` = scheduled / tentative). */
  readonly ringStyle?: Sh3AvatarRingStyle;
}

/**
 * `<sh3-avatar-list>` — a row of slightly-overlapping avatars (the org-chart
 * "who sits on this node" cluster). Past `limit`, the remainder collapses into a
 * trailing `+N` chip (N = total − shown).
 *
 * Each face wears a ring in the surface colour so the overlap reads cleanly;
 * override `--sh3-avatar-list-ring` when the list sits on a non-card surface.
 *
 * ## Inputs
 *
 * | Input     | Type                    | Default   | Description                                              |
 * |-----------|-------------------------|-----------|----------------------------------------------------------|
 * | `avatars` | `Sh3AvatarListItem[]` (required) | — | The faces, in order.                                     |
 * | `limit`   | `number`                | `0`       | Max faces on the line (`0` = all). Extra → a `+N` chip.  |
 * | `top`     | `'first' \| 'last'`     | `'first'` | Which end stacks on top — the overlap direction.         |
 * | `size`    | `'sm' \| 'md' \| 'lg'`  | `'md'`    | Avatar size (shared by every face + the chip).           |
 * | `variant` | `'solid' \| 'ghost'`    | `'solid'` | Passed to each avatar (`ghost` dashes guests).           |
 * | `square`  | `boolean`               | `false`   | Square faces (orgs).                                     |
 *
 * @selector `sh3-avatar-list`
 *
 * @example
 * ```html
 * <sh3-avatar-list [avatars]="occupants" [limit]="4" top="first" />
 * ```
 */
@Component({
  selector: "sh3-avatar-list",
  standalone: true,
  imports: [Sh3AvatarComponent],
  host: {
    "[class.size-sm]": "size() === 'sm'",
    "[class.size-md]": "size() === 'md'",
    "[class.size-lg]": "size() === 'lg'",
    "[class.is-square]": "square()",
  },
  templateUrl: "./avatar-list.component.html",
  styleUrl: "./avatar-list.component.scss",
})
export class Sh3AvatarListComponent {
  readonly avatars = input.required<readonly Sh3AvatarListItem[]>();
  /** Max faces shown; `0` shows them all. Past it, a `+N` chip closes the row. */
  readonly limit = input(0, { transform: numberAttribute });
  /** `'first'` = the leading face sits on top; `'last'` = the trailing one does. */
  readonly top = input<"first" | "last">("first");
  readonly size = input<"sm" | "md" | "lg">("md");
  readonly variant = input<"solid" | "ghost">("solid");
  readonly square = input(false, { transform: booleanAttribute });

  /** The faces actually rendered (capped at `limit` when it bites). */
  readonly visible = computed(() => {
    const limit = this.limit();
    const all = this.avatars();
    return limit > 0 && all.length > limit ? all.slice(0, limit) : all;
  });

  /** How many faces the `+N` chip stands in for (`0` → no chip). */
  readonly overflow = computed(
    () => this.avatars().length - this.visible().length,
  );

  /** Paint order: the "top" end gets the highest z-index. */
  protected z(index: number): number {
    const count = this.visible().length;
    return this.top() === "first" ? count - index : index + 1;
  }

  /** The chip always sits on top so its count stays readable. */
  protected moreZ(): number {
    return this.visible().length + 1;
  }
}
