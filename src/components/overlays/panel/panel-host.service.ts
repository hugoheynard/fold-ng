import { Injector, Service, type Type, inject, signal } from "@angular/core";
import { FoldPanelRef } from "./panel-ref";
import {
  FOLD_PANEL_DEFAULTS,
  panelWidthPx,
  readComponentPanelDefaults,
} from "./panel-defaults";
import type {
  FoldComponentPanelDescriptor,
  FoldPanelConfig,
  FoldPanelContent,
  FoldPanelDescriptor,
  FoldPanelHandle,
  FoldPanelSide,
  FoldPanelSize,
  FoldPanelSurface,
  FoldTemplatePanelDescriptor,
} from "./panel.types";

/**
 * The per-call config with the cascadable fields resolved. They widen to
 * `| undefined` because a layer may leave them unset — `open()` applies the
 * literal floor (`right`/`md`/modal/`glass`/closeable) when building the
 * descriptor.
 */
type ResolvedPanelConfig = Omit<
  FoldPanelConfig<unknown>,
  "side" | "width" | "modal" | "surface" | "disableClose"
> & {
  readonly side: FoldPanelSide | undefined;
  readonly width: number | FoldPanelSize | undefined;
  readonly modal: boolean | undefined;
  readonly surface: FoldPanelSurface | undefined;
  readonly disableClose: boolean | undefined;
};

/**
 * Single source of truth for the layout-owned side-panel region.
 *
 * Two ways to hand a panel to the one host, both rendered through the same
 * `FoldPanelHostComponent` (backdrop, z-index, animation, scroll-lock, focus-trap):
 *
 * - **`open()` — the canonical, imperative API.** Open a component with a typed
 *   `data` input; get a {@link FoldPanelRef} back for the result. No opaque token.
 * - **`present()` — declarative sugar** used by a `<side-panel>` wrapper to
 *   teleport a projected template. Kept for page-coupled form drawers.
 */
@Service()
export class FoldPanelHostService {
  private readonly rootInjector = inject(Injector);
  private readonly hostDefaults = inject(FOLD_PANEL_DEFAULTS, {
    optional: true,
  });
  private nextId = 1;
  private readonly _panels = signal<readonly FoldPanelDescriptor[]>([]);

  /** The active panels, oldest first. Read by the layout host. */
  readonly panels = this._panels.asReadonly();

  // Data-carrying panel: `config.data` is type-checked against the component's
  // `data` input. `FoldPanelContent`'s `data` is the covariant read side
  // (`Signal<TData | undefined>`), so a panel whose data input is **optional**
  // (`data = input<T>()`) is accepted without forcing the caller to spell
  // `open<T | undefined, R>()`; `config.data` still has to be a present `TData`.
  open<TData, TResult = unknown>(
    component: Type<FoldPanelContent<TData>>,
    config: FoldPanelConfig<TData> & { data: TData },
  ): FoldPanelRef<TResult>;
  // Data-less panel (its data, if any, comes via `config.providers`).
  open<TResult = unknown>(
    component: Type<unknown>,
    config?: Omit<FoldPanelConfig<never>, "data">,
  ): FoldPanelRef<TResult>;
  open<TResult = unknown>(
    component: Type<unknown>,
    config: FoldPanelConfig<unknown> = {},
  ): FoldPanelRef<TResult> {
    const id = this.takeId();
    const resolved = this.resolveConfig(component, config);
    const ref = new FoldPanelRef<TResult>(id, () => this.dismiss(id));
    const injector = Injector.create({
      parent: this.rootInjector,
      providers: [
        { provide: FoldPanelRef, useValue: ref },
        ...(resolved.providers ?? []),
      ],
    });
    const descriptor: FoldComponentPanelDescriptor = {
      kind: "component",
      id,
      component,
      data: resolved.data,
      side: resolved.side ?? "right",
      width: signal(panelWidthPx(resolved.width)),
      injector,
      ariaLabel: resolved.ariaLabel,
      modal: resolved.modal ?? true,
      surface: resolved.surface ?? "glass",
      disableClose: resolved.disableClose ?? false,
      onClose: () => ref.close(),
    };
    if (!resolved.stack) {
      this.closeExisting();
    }
    this.add(descriptor);
    return ref;
  }

  /**
   * Merge the three default layers into the effective config, highest priority
   * first: the per-call `config`, then the component's static `foldPanel`, then
   * the app-wide `FOLD_PANEL_DEFAULTS`. Only the defaultable fields cascade —
   * `data`/`providers`/`stack`/`ariaLabel` pass straight through from `config`.
   */
  private resolveConfig(
    component: Type<unknown>,
    config: FoldPanelConfig<unknown>,
  ): ResolvedPanelConfig {
    const fromComponent = readComponentPanelDefaults(component);
    const fromHost = this.hostDefaults ?? {};
    return {
      ...config,
      side: config.side ?? fromComponent.side ?? fromHost.side,
      width: config.width ?? fromComponent.width ?? fromHost.width,
      modal: config.modal ?? fromComponent.modal ?? fromHost.modal,
      surface: config.surface ?? fromComponent.surface ?? fromHost.surface,
      disableClose:
        config.disableClose ??
        fromComponent.disableClose ??
        fromHost.disableClose,
    };
  }

  /**
   * Register a declarative (projected-template) panel; returns a handle. These
   * are self-managed by their `<fold-side-panel>`'s `[open]` binding, so they are
   * not subject to the imperative single-panel replacement.
   */
  present(
    descriptor: Omit<FoldTemplatePanelDescriptor, "id" | "kind">,
  ): FoldPanelHandle {
    const id = this.takeId();
    this.add({ ...descriptor, kind: "template", id });
    return { id, dismiss: () => this.dismiss(id) };
  }

  /**
   * Close every open panel through its own `onClose` — so each opener's
   * `FoldPanelRef`/toggle settles — before a new single panel takes over. Iterates
   * a snapshot, so the `onClose`-driven removals don't disturb the loop.
   */
  private closeExisting(): void {
    for (const panel of this._panels()) {
      panel.onClose();
    }
  }

  /** Remove a panel by id (idempotent — dismissing twice is safe). */
  dismiss(id: number): void {
    this._panels.update((list) => list.filter((panel) => panel.id !== id));
  }

  /** Dismiss every open panel (e.g. on a hard navigation / logout). */
  dismissAll(): void {
    this._panels.set([]);
  }

  private takeId(): number {
    const id = this.nextId;
    this.nextId += 1;
    return id;
  }

  private add(descriptor: FoldPanelDescriptor): void {
    this._panels.update((list) => [...list, descriptor]);
  }
}
