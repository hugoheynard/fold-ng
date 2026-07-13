import { Component, computed, inject, input, output } from "@angular/core";
import { IconComponent } from "../components/icon/icon.component";
import type { Sh3IconName } from "../components/icon/icon.registry";
import { PanelRef } from "./panel-ref";

/**
 * Standard header for an **imperative** panel component (`panels.open()`), which
 * owns its own header/body/footer — the chrome renders no header for it. This
 * reproduces the chrome's declarative-panel header (title + optional subtitle +
 * close) so every component panel gets the same look without hand-rolling it.
 *
 * **Two variants.**
 * - `title` (default) — a large descriptive title for *editor* panels (a form,
 *   an entity's settings): `title` + optional `subtitle` + projected description.
 * - `eyebrow` — a compact, uppercased, muted *category label* for *viewer*
 *   panels (a page-like entity with cross-navigation): `icon` + short label,
 *   with header actions sitting inline before the close.
 *
 * **Icon.** Optional leading `icon` (an {@link IconComponent} name), shown in
 * both variants — muted in `eyebrow`.
 *
 * **Actions slot.** Project buttons into `[actions]` to sit left of the close
 * button (e.g. a cross-page-nav, an "open full page" button). The default,
 * unselected slot still feeds the description line (backwards compatible).
 *
 * **Self-closing.** The header injects its panel's {@link PanelRef} (optional,
 * so it stays a pure presentational component in tests/storybook) and dismisses
 * the panel itself on close — no `(closed)="ref.close()"` wiring needed. The
 * `(closed)` output still fires *before* the dismiss, for side-effects
 * (analytics, cleanup); it does **not** veto the close.
 *
 * **Layout.** Left-aligned. A title-only header (no subtitle, no projected
 * description) is *vertically* centred against the close button; add a subtitle
 * and/or project a description and the row switches to top-aligned. The
 * `eyebrow` variant is always vertically centred.
 *
 * Usage:
 * ```html
 * <!-- editor panel: title only → vertically centred, self-closes -->
 * <sh3-panel-header title="Titre" />
 *
 * <!-- editor panel: subtitle + a parent-filled description -->
 * <sh3-panel-header title="Titre" subtitle="Sous-titre">
 *   <span>Texte d'aide fourni par le parent…</span>
 * </sh3-panel-header>
 *
 * <!-- viewer panel: eyebrow label + icon + projected actions -->
 * <sh3-panel-header variant="eyebrow" icon="playlist-add" title="Playlist">
 *   <app-cross-page-nav actions … />
 * </sh3-panel-header>
 * ```
 */
@Component({
  selector: "sh3-panel-header",
  standalone: true,
  imports: [IconComponent],
  template: `
    <header class="ph" [class.ph--eyebrow]="variant() === 'eyebrow'">
      <div class="ph__titles">
        <div class="ph__titleRow">
          @if (icon(); as ic) {
            <sh3-icon class="ph__icon" [name]="ic" [size]="iconSize()" />
          }
          <h2 class="ph__title">{{ title() }}</h2>
        </div>
        @if (subtitle()) {
          <p class="ph__subtitle">{{ subtitle() }}</p>
        }
        <div class="ph__desc"><ng-content /></div>
      </div>
      <div class="ph__actions">
        <ng-content select="[actions]" />
        <button
          type="button"
          class="ph__close"
          aria-label="Fermer"
          (click)="onClose()"
        >
          <sh3-icon name="close" size="sm" />
        </button>
      </div>
    </header>
  `,
  styles: [
    `
      :host {
        display: block;
        flex: none;
      }
      .ph {
        display: flex;
        align-items: flex-start;
        gap: var(--sh3-space-md);
        padding: var(--sh3-space-lg) var(--sh3-space-lg) var(--sh3-space-md);
        border-bottom: 1px solid var(--sh3-color-glass-border);
      }
      /* Title-only header → vertically centre the title with the close button.
         With a subtitle/description the row stays top-aligned. */
      .ph:not(:has(.ph__subtitle)):not(:has(.ph__desc:not(:empty))) {
        align-items: center;
      }
      .ph__titles {
        flex: 1 1 auto;
        display: flex;
        flex-direction: column;
        gap: 3px;
        min-width: 0;
      }
      .ph__titleRow {
        display: flex;
        align-items: center;
        gap: var(--sh3-space-xs);
        min-width: 0;
      }
      .ph__icon {
        flex: none;
        color: var(--sh3-color-text-secondary);
      }
      .ph__title {
        margin: 0;
        font-size: var(--sh3-text-lg);
        font-weight: 600;
        color: var(--sh3-color-text);
        letter-spacing: -0.005em;
        line-height: 1.25;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .ph__subtitle {
        margin: 0;
        font-size: var(--sh3-text-xs);
        color: var(--sh3-color-text-faded);
        font-variant-numeric: tabular-nums;
      }
      .ph__desc {
        margin-top: 6px;
        font-size: var(--sh3-text-sm);
        color: var(--sh3-color-text-secondary);
        line-height: 1.5;
      }
      /* no projected content → collapse the slot so it costs no space */
      .ph__desc:empty {
        display: none;
      }
      .ph__actions {
        flex: none;
        display: inline-flex;
        align-items: center;
        gap: var(--sh3-space-xs);
      }
      .ph__close {
        all: unset;
        box-sizing: border-box;
        flex: none;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 28px;
        height: 28px;
        border-radius: var(--sh3-radius-xs);
        color: var(--sh3-color-text-secondary);
        cursor: pointer;
        transition:
          background-color var(--sh3-motion-fast),
          color var(--sh3-motion-fast);
      }
      .ph__close:hover {
        background: var(--sh3-color-surface-hover);
        color: var(--sh3-color-text);
      }

      /* ── Eyebrow variant: compact icon + uppercase category label ── */
      .ph--eyebrow {
        align-items: center;
        padding: var(--sh3-space-md) var(--sh3-space-lg);
      }
      .ph--eyebrow .ph__icon {
        opacity: 0.75;
      }
      .ph--eyebrow .ph__title {
        font-size: var(--sh3-text-xs);
        font-weight: 600;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        color: var(--sh3-color-text-muted);
      }
    `,
  ],
})
export class PanelHeaderComponent {
  readonly title = input.required<string>();
  readonly subtitle = input<string>("");
  /** Optional leading icon (an {@link IconComponent} name). */
  readonly icon = input<Sh3IconName | undefined>(undefined);
  /** `title` (large descriptive) or `eyebrow` (compact uppercased label). */
  readonly variant = input<"title" | "eyebrow">("title");
  /**
   * Fires just before the panel is dismissed — bind it for side-effects only
   * (the header self-closes regardless; it is not a veto hook).
   */
  readonly closed = output<void>();

  protected readonly iconSize = computed(() =>
    this.variant() === "eyebrow" ? 14 : 18,
  );

  /**
   * The panel this header lives in. Optional: outside a panel (tests,
   * storybook) it resolves to `null` and the header simply emits `(closed)`.
   */
  private readonly panelRef = inject(PanelRef, { optional: true });

  protected onClose(): void {
    this.closed.emit();
    this.panelRef?.close();
  }
}
