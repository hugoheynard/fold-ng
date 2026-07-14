import { Component, computed, input } from "@angular/core";
import { Sh3AvatarComponent } from "../avatar/avatar.component";

/**
 * `<sh3-avatar-detail>` — an avatar next to one or two lines of text: the
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
 *
 * @selector `sh3-avatar-detail`
 */
@Component({
  selector: "sh3-avatar-detail",
  standalone: true,
  imports: [Sh3AvatarComponent],
  templateUrl: "./avatar-detail.component.html",
  styleUrl: "./avatar-detail.component.scss",
})
export class Sh3AvatarDetailComponent {
  readonly primary = input.required<string>();
  readonly secondary = input<string>("");
  readonly avatarName = input<string>("");
  readonly size = input<"sm" | "md" | "lg">("md");
  readonly variant = input<"solid" | "ghost">("solid");
  readonly square = input(false);
  readonly imageUrl = input<string | undefined>(undefined);

  /** Falls back to the primary line when no explicit avatar name is given. */
  readonly resolvedAvatarName = computed(
    () => this.avatarName().trim() || this.primary(),
  );

  readonly hasSecondary = computed(() => this.secondary().trim().length > 0);
}
