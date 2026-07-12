import { Component, computed, input } from "@angular/core";
import { AvatarComponent } from "../avatar/avatar.component";

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
  imports: [AvatarComponent],
  template: `<sh3-avatar
      [name]="resolvedAvatarName()"
      [size]="size()"
      [variant]="variant()"
      [square]="square()"
      [imageUrl]="imageUrl()"
    />
    <span class="lines">
      <span class="primary">{{ primary() }}</span>
      @if (hasSecondary()) {
        <span class="secondary">{{ secondary() }}</span>
      }
    </span>`,
  styles: `
    :host {
      display: flex;
      align-items: center;
      gap: 8px;
      min-width: 0;
    }
    .lines {
      display: flex;
      flex-direction: column;
      justify-content: center;
      min-width: 0;
    }
    .primary {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-weight: 500;
      color: var(--sh3-color-text);
    }
    .secondary {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: var(--sh3-text-sm);
      color: var(--sh3-color-text-faded);
    }
  `,
})
export class AvatarDetailComponent {
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
