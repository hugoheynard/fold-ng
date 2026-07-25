import { booleanAttribute, Component, computed, input } from "@angular/core";
import {
  FoldAvatarComponent,
  type FoldAvatarRing,
  type FoldAvatarRingStyle,
} from "../../content/avatar/avatar.component";

/**
 * `<fold-avatar-detail>` — an avatar next to one or two lines of text: the
 * canonical "identity cell". A bold `primary` line and an optional faded
 * `secondary` line (name + email, entity + subtitle, …). One line centres
 * against the avatar; two lines stack and centre as a block.
 *
 * The avatar's initials/colour derive from `avatarName` when set, else from
 * `primary` — so the common "same text" case needs no extra input.
 *
 * ## Inputs
 *
 * | Input        | Type                   | Default   | Description                                  |
 * |--------------|------------------------|-----------|----------------------------------------------|
 * | `primary`    | `string` (required)    | —         | Bold first line; default avatar name.        |
 * | `secondary`  | `string`               | `''`      | Faded second line; empty → single line.      |
 * | `avatarName` | `string`               | `primary` | Overrides the name used for initials/colour. |
 * | `size`       | `'sm' \| 'md' \| 'lg'` | `'md'`    | Avatar size.                                 |
 * | `variant`    | `'solid' \| 'ghost'`   | `'solid'` | `'ghost'` dashes the avatar (guests).        |
 * | `square`     | `boolean`              | `false`   | Square avatar (orgs).                        |
 * | `imageUrl`   | `string`               | —         | Avatar image; replaces initials when set.    |
 * | `muted`      | `boolean`              | `false`   | Dim the avatar (absence / inactive).         |
 * | `ring`       | `FoldAvatarRing`        | `'none'`  | Status outline on the avatar.                |
 * | `ringStyle`  | `'solid' \| 'dotted'`  | `'solid'` | Ring line style (`dotted` = scheduled).      |
 *
 * @selector `fold-avatar-detail`
 *
 * @example
 * ```html
 * <fold-avatar-detail primary="Alex Rivers" secondary="alex@sh3pherd.dev" />
 * <fold-avatar-detail primary="Acme Corp" secondary="Organisation" square />
 * ```
 */
@Component({
  selector: "fold-avatar-detail",
  standalone: true,
  imports: [FoldAvatarComponent],
  templateUrl: "./avatar-detail.component.html",
  styleUrl: "./avatar-detail.component.scss",
})
export class FoldAvatarDetailComponent {
  readonly primary = input.required<string>();
  readonly secondary = input<string>("");
  readonly avatarName = input<string>("");
  readonly size = input<"sm" | "md" | "lg">("md");
  readonly variant = input<"solid" | "ghost">("solid");
  readonly square = input(false, { transform: booleanAttribute });
  readonly imageUrl = input<string | undefined>(undefined);
  /** Dim the avatar — absence / inactive (forwarded to `fold-avatar`). */
  readonly muted = input(false, { transform: booleanAttribute });
  /** Status outline colour (forwarded to `fold-avatar`). */
  readonly ring = input<FoldAvatarRing>("none");
  /** Ring line style (forwarded to `fold-avatar`). */
  readonly ringStyle = input<FoldAvatarRingStyle>("solid");

  /** Falls back to the primary line when no explicit avatar name is given. */
  readonly resolvedAvatarName = computed(
    () => this.avatarName().trim() || this.primary(),
  );

  readonly hasSecondary = computed(() => this.secondary().trim().length > 0);
}
