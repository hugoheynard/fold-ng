import type {
  InputSignal,
  Injector,
  Provider,
  Signal,
  TemplateRef,
  Type,
} from "@angular/core";

/** Which layout edge the panel slides in from. */
export type FoldPanelSide = "left" | "right";

/** Fields common to every panel the host renders. */
interface PanelBase {
  readonly id: number;
  readonly side: FoldPanelSide;
  readonly width: Signal<number>;
  /** Invoked on Escape, backdrop click, or the header close button. */
  readonly onClose: () => void;
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
   * `fold-panel-header` to label it.
   */
  readonly ariaLabel?: string;
}

export type FoldPanelDescriptor =
  | FoldTemplatePanelDescriptor
  | FoldComponentPanelDescriptor;

/**
 * A component opened imperatively. Data-carrying panels declare a typed `data`
 * input; data-less panels (e.g. a help panel) simply omit it.
 */
export interface FoldPanelContent<TData> {
  readonly data?: InputSignal<TData>;
}

/** Options for `FoldPanelHostService.open()`. */
export interface FoldPanelConfig<TData> {
  /** Type-checked against the component's `data` input; omit for data-less panels. */
  readonly data?: TData;
  readonly side?: FoldPanelSide;
  readonly width?: number;
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
