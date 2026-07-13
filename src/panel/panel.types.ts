import type {
  InputSignal,
  Injector,
  Provider,
  Signal,
  TemplateRef,
  Type,
} from "@angular/core";

/** Which layout edge the panel slides in from. */
export type Sh3PanelSide = "left" | "right";

/** Fields common to every panel the host renders. */
interface PanelBase {
  readonly id: number;
  readonly side: Sh3PanelSide;
  readonly width: Signal<number>;
  /** Invoked on Escape, backdrop click, or the header close button. */
  readonly onClose: () => void;
}

/**
 * Declarative panel: a projected `TemplateRef` plus reactive header metadata.
 * Title/subtitle are `Signal`s so the shared header stays in sync with the
 * caller's `title()`/`subtitle()` inputs with zero manual wiring.
 */
export interface Sh3TemplatePanelDescriptor extends PanelBase {
  readonly kind: "template";
  readonly templateRef: TemplateRef<unknown>;
  readonly title: Signal<string>;
  readonly subtitle: Signal<string>;
}

/**
 * Imperative panel: a component the host mounts. The component owns its own
 * header/body/footer (so rich panels like the org-chart node settings keep
 * their exact design); the host provides only the shell + a {@link Sh3PanelRef}.
 */
export interface Sh3ComponentPanelDescriptor extends PanelBase {
  readonly kind: "component";
  readonly component: Type<unknown>;
  /** Typed at the `open()` boundary; set via `setInput` when present. */
  readonly data?: unknown;
  /** Injector that provides the panel's `Sh3PanelRef` (+ any config providers). */
  readonly injector: Injector;
}

export type Sh3PanelDescriptor =
  | Sh3TemplatePanelDescriptor
  | Sh3ComponentPanelDescriptor;

/**
 * A component opened imperatively. Data-carrying panels declare a typed `data`
 * input; data-less panels (e.g. a help panel) simply omit it.
 */
export interface Sh3PanelContent<TData> {
  readonly data?: InputSignal<TData>;
}

/** Options for `Sh3PanelHostService.open()`. */
export interface Sh3PanelConfig<TData> {
  /** Type-checked against the component's `data` input; omit for data-less panels. */
  readonly data?: TData;
  readonly side?: Sh3PanelSide;
  readonly width?: number;
  /** Extra providers added to the panel's injector (panel-scoped data bus, etc.). */
  readonly providers?: Provider[];
  /**
   * Keep any already-open panels instead of replacing them. Default `false`:
   * one panel at a time — opening a new panel closes the current one.
   */
  readonly stack?: boolean;
}

/** Handle returned by `present()`; the caller dismisses via `dismiss()`. */
export interface Sh3PanelHandle {
  readonly id: number;
  dismiss(): void;
}
