import { Injector, Service, type Type, inject, signal } from "@angular/core";
import { FoldPanelRef } from "./panel-ref";
import type {
  FoldComponentPanelDescriptor,
  FoldPanelConfig,
  FoldPanelContent,
  FoldPanelDescriptor,
  FoldPanelHandle,
  FoldTemplatePanelDescriptor,
} from "./panel.types";

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
  private nextId = 1;
  private readonly _panels = signal<readonly FoldPanelDescriptor[]>([]);

  /** The active panels, oldest first. Read by the layout host. */
  readonly panels = this._panels.asReadonly();

  // Data-carrying panel: `config.data` is type-checked against the component's
  // `data` input.
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
    const ref = new FoldPanelRef<TResult>(id, () => this.dismiss(id));
    const injector = Injector.create({
      parent: this.rootInjector,
      providers: [
        { provide: FoldPanelRef, useValue: ref },
        ...(config.providers ?? []),
      ],
    });
    const descriptor: FoldComponentPanelDescriptor = {
      kind: "component",
      id,
      component,
      data: config.data,
      side: config.side ?? "right",
      width: signal(config.width ?? 490),
      injector,
      ariaLabel: config.ariaLabel,
      onClose: () => ref.close(),
    };
    if (!config.stack) {
      this.closeExisting();
    }
    this.add(descriptor);
    return ref;
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
