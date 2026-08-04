import type {
  Injector,
  Provider,
  Signal,
  TemplateRef,
  Type,
} from "@angular/core";

/**
 * Which layout edge the panel slides in from.
 * - `right` (default) / `left` — a vertical side sheet, full height.
 * - `bottom` — a bottom sheet: full width, height driven by content up to a
 *   max-height with internal scroll; slides up. The mobile-native shape, with a
 *   top grabber that taps to dismiss.
 * - `auto` — **right on a wide container, bottom on a narrow one**. The switch is
 *   container-driven (keyed off the panel host's own width via `@container`, not
 *   the viewport), honouring fold's "responsive on its own width" contract.
 */
export type FoldPanelSide = "left" | "right" | "bottom" | "auto";

/**
 * Panel surface treatment.
 * - `glass` (default) — frosted, translucent; the page shows through.
 * - `solid` — opaque surface (`--fold-color-surface-card`), no `backdrop-filter`.
 *   Prefer it for content that must stay legible over any background (a cart,
 *   a long form) or when a design wants a plain white sheet.
 */
export type FoldPanelSurface = "glass" | "solid";

/**
 * Named panel widths — a token scale instead of a magic pixel number.
 * `sm` 360 · `md` 490 (the default) · `lg` 640 · `xl` 820. `width` still accepts
 * a raw `number` for the rare bespoke case.
 */
export type FoldPanelSize = "sm" | "md" | "lg" | "xl";

/**
 * The defaultable slice of a panel's configuration — the options that describe
 * *how a panel behaves and looks* (not *what* it carries). Every field is
 * resolved through a three-layer cascade, highest priority first:
 *
 * 1. the per-call `open()` config — an explicit one-off,
 * 2. the component's own {@link FoldPanelDefaultsProvider.foldPanel} static —
 *    the panel's **intrinsic** shape (a cart *is* non-modal + solid),
 * 3. the app-wide `FOLD_PANEL_DEFAULTS` token — the product's **identity**
 *    (e.g. "every panel here is solid").
 *
 * `data`, `providers`, `stack` and `ariaLabel` are deliberately absent: they are
 * per-call concerns, never a default.
 */
export interface FoldPanelDefaults {
  readonly side?: FoldPanelSide;
  /** A `number` (px) or a named {@link FoldPanelSize}. */
  readonly width?: number | FoldPanelSize;
  readonly modal?: boolean;
  readonly surface?: FoldPanelSurface;
  /**
   * Suppress the host's *implicit* dismiss gestures — `Escape` and a backdrop
   * click. The header close button and `FoldPanelRef.close()` still work, so a
   * panel with unsaved edits can guard the casual close yet stay closeable on
   * purpose. Default `false`.
   */
  readonly disableClose?: boolean;
}

/**
 * The static-side contract a panel component may implement to declare its
 * intrinsic shape once, on the class, instead of at every call site. `open()`
 * reads it automatically.
 *
 * @example
 * ```ts
 * export class CartPanel implements FoldPanelContent<CartData> {
 *   static readonly foldPanel: FoldPanelDefaults = { modal: false, surface: "solid" };
 * }
 * // call site is now just the *what*:
 * host.open(CartPanel, { data });
 * ```
 */
export interface FoldPanelDefaultsProvider {
  readonly foldPanel: FoldPanelDefaults;
}

/** Fields common to every panel the host renders. */
interface PanelBase {
  readonly id: number;
  readonly side: FoldPanelSide;
  readonly width: Signal<number>;
  /** Invoked on Escape, backdrop click, or the header close button. */
  readonly onClose: () => void;
  /**
   * Modal (default `true`): the host freezes page scroll, marks the background
   * `inert`, traps focus, and a backdrop click dismisses the panel. `false` for
   * a **non-modal** panel — the page keeps scrolling and stays interactive
   * behind it, focus is not trapped, and clicking outside does **not** close it
   * (only the header/`Escape`/`close()` do). `undefined` is treated as modal.
   */
  readonly modal?: boolean;
  /** Surface treatment; defaults to `glass`. See {@link FoldPanelSurface}. */
  readonly surface?: FoldPanelSurface;
  /** Suppress Escape + backdrop dismissal. See {@link FoldPanelDefaults.disableClose}. */
  readonly disableClose?: boolean;
}

/**
 * Declarative panel: a projected `TemplateRef` plus reactive header metadata.
 * Title/subtitle are `Signal`s so the shared header stays in sync with the
 * caller's `title()`/`subtitle()` inputs with zero manual wiring.
 */
export interface FoldTemplatePanelDescriptor extends PanelBase {
  readonly kind: "template";
  readonly templateRef: TemplateRef<unknown>;
  readonly title: Signal<string>;
  readonly subtitle: Signal<string>;
}

/**
 * Imperative panel: a component the host mounts. The component owns its own
 * header/body/footer (so rich panels like the org-chart node settings keep
 * their exact design); the host provides only the shell + a {@link FoldPanelRef}.
 */
export interface FoldComponentPanelDescriptor extends PanelBase {
  readonly kind: "component";
  readonly component: Type<unknown>;
  /** Typed at the `open()` boundary; set via `setInput` when present. */
  readonly data?: unknown;
  /** Injector that provides the panel's `FoldPanelRef` (+ any config providers). */
  readonly injector: Injector;
  /**
   * Explicit accessible name. Optional: a panel that renders `fold-panel-header`
   * is named automatically (the dialog's `aria-labelledby` points at the
   * header's title). Set this only for a component panel that has no
   * `fold-panel-header` to label it. (Carried straight from `config.ariaLabel`,
   * hence the explicit `| undefined`.)
   */
  readonly ariaLabel?: string | undefined;
}

export type FoldPanelDescriptor =
  FoldTemplatePanelDescriptor | FoldComponentPanelDescriptor;

/**
 * A component opened imperatively. Data-carrying panels declare a typed `data`
 * input; data-less panels (e.g. a help panel) simply omit it.
 *
 * `data` is typed as the **read** side (`Signal`), covariant, not the invariant
 * `InputSignal` — so a panel whose data input is *optional* (`data = input<T>()`
 * → `InputSignal<T | undefined>`) satisfies `FoldPanelContent<T>` just as a
 * required one (`input.required<T>()`) does. That's what lets `open(Cmp, { data })`
 * infer `T` from the value without the caller widening to `<T | undefined>`.
 */
export interface FoldPanelContent<TData> {
  readonly data?: Signal<TData | undefined>;
}

/** Options for `FoldPanelHostService.open()`. */
export interface FoldPanelConfig<TData> {
  /** Type-checked against the component's `data` input; omit for data-less panels. */
  readonly data?: TData;
  readonly side?: FoldPanelSide;
  /** A `number` (px) or a named {@link FoldPanelSize}; defaults to `md` (490). */
  readonly width?: number | FoldPanelSize;
  /** Extra providers added to the panel's injector (panel-scoped data bus, etc.). */
  readonly providers?: Provider[];
  /**
   * Keep any already-open panels instead of replacing them. Default `false`:
   * one panel at a time — opening a new panel closes the current one.
   */
  readonly stack?: boolean;
  /**
   * Explicit accessible name for the dialog. Only needed when the panel does
   * **not** render `fold-panel-header` (which names the dialog automatically).
   */
  readonly ariaLabel?: string;
  /**
   * Modal barrier. Default `true` (scroll-lock + `inert` background + focus-trap
   * + backdrop-click dismiss). Set `false` for a non-modal panel: the page keeps
   * scrolling and stays interactive, focus isn't trapped, and an outside click
   * does not dismiss it.
   */
  readonly modal?: boolean;
  /** Surface treatment ({@link FoldPanelSurface}); defaults to `glass`. */
  readonly surface?: FoldPanelSurface;
  /**
   * Suppress the host's implicit dismiss gestures (`Escape` + backdrop click).
   * The header close button and `FoldPanelRef.close()` still close the panel.
   * Defaults to `false`. See {@link FoldPanelDefaults.disableClose}.
   */
  readonly disableClose?: boolean;
}

/** The DOM `id` of a panel's title, referenced by the dialog's `aria-labelledby`. */
export function foldPanelTitleId(panelId: number): string {
  return `fold-panel-title-${panelId}`;
}

/** Handle returned by `present()`; the caller dismisses via `dismiss()`. */
export interface FoldPanelHandle {
  readonly id: number;
  dismiss(): void;
}
