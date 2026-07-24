import { Component, computed, inject, input, output } from "@angular/core";
import { FoldIconComponent } from "../../foundations/icon/icon.component";
import type { FoldIconName } from "../../foundations/icon/builtin-icons";
import { FoldPanelRef } from "./panel-ref";
import { FOLD_PANEL_CLOSE_LABEL } from "./panel-labels";
import { foldPanelTitleId } from "./panel.types";

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
 * **Icon.** Optional leading `icon` (an {@link FoldIconComponent} name), shown in
 * both variants — muted in `eyebrow`.
 *
 * **Actions slot.** Project buttons into `[actions]` to sit left of the close
 * button (e.g. a cross-page-nav, an "open full page" button). The default,
 * unselected slot still feeds the description line (backwards compatible).
 *
 * **Self-closing.** The header injects its panel's {@link FoldPanelRef} (optional,
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
 * <fold-panel-header title="Titre" />
 *
 * <!-- editor panel: subtitle + a parent-filled description -->
 * <fold-panel-header title="Titre" subtitle="Sous-titre">
 *   <span>Texte d'aide fourni par le parent…</span>
 * </fold-panel-header>
 *
 * <!-- viewer panel: eyebrow label + icon + projected actions -->
 * <fold-panel-header variant="eyebrow" icon="playlist-add" title="Playlist">
 *   <app-cross-page-nav actions … />
 * </fold-panel-header>
 * ```
 */
@Component({
  selector: "fold-panel-header",
  standalone: true,
  imports: [FoldIconComponent],
  templateUrl: "./panel-header.component.html",
  styleUrl: "./panel-header.component.scss",
})
export class FoldPanelHeaderComponent {
  readonly title = input.required<string>();
  readonly subtitle = input<string>("");
  /** Optional leading icon (an {@link FoldIconComponent} name). */
  readonly icon = input<FoldIconName | undefined>(undefined);
  /** `title` (large descriptive) or `eyebrow` (compact uppercased label). */
  readonly variant = input<"title" | "eyebrow">("title");
  /**
   * Accessible label for the close button. Falls back to the app-wide
   * {@link FOLD_PANEL_CLOSE_LABEL} (default `"Close"`) when unset — so a
   * non-English app sets it once via `provideFoldPanelLabels`.
   */
  readonly closeLabel = input<string>();

  private readonly defaultCloseLabel = inject(FOLD_PANEL_CLOSE_LABEL);

  /** The label actually rendered — the input if given, else the app default. */
  protected readonly effectiveCloseLabel = computed(
    () => this.closeLabel() ?? this.defaultCloseLabel,
  );
  /**
   * Fires just before the panel is dismissed — bind it for side-effects only
   * (the header self-closes regardless; it is not a veto hook).
   */
  readonly closed = output();

  protected readonly iconSize = computed(() =>
    this.variant() === "eyebrow" ? 14 : 18,
  );

  /**
   * The panel this header lives in. Optional: outside a panel (tests,
   * storybook) it resolves to `null` and the header simply emits `(closed)`.
   */
  private readonly panelRef = inject(FoldPanelRef, { optional: true });

  /**
   * The title's DOM `id`, so the dialog's `aria-labelledby` can point at it —
   * this is what gives a component panel its accessible name. `null` outside a
   * panel (no ref to key the id on).
   */
  protected readonly titleId = computed<string | null>(() =>
    this.panelRef ? foldPanelTitleId(this.panelRef.id) : null,
  );

  protected onClose(): void {
    this.closed.emit();
    this.panelRef?.close();
  }
}
