import { Injector, Service, type Type, inject, signal } from "@angular/core";
import { PanelRef } from "./panel-ref";
import type {
  ComponentPanelDescriptor,
  PanelConfig,
  PanelContent,
  PanelDescriptor,
  PanelHandle,
  TemplatePanelDescriptor,
} from "./panel.types";

/**
 * Single source of truth for the layout-owned side-panel region.
 *
 * Two ways to hand a panel to the one host, both rendered through the same
 * `PanelHostComponent` (backdrop, z-index, animation, scroll-lock, focus-trap):
 *
 * - **`open()` — the canonical, imperative API.** Open a component with a typed
 *   `data` input; get a {@link PanelRef} back for the result. No opaque token.
 * - **`present()` — declarative sugar** used by a `<side-panel>` wrapper to
 *   teleport a projected template. Kept for page-coupled form drawers.
 */
@Service()
export class PanelHostService {
  private readonly rootInjector = inject(Injector);
  private nextId = 1;
  private readonly _panels = signal<readonly PanelDescriptor[]>([]);

  /** The active panels, oldest first. Read by the layout host. */
  readonly panels = this._panels.asReadonly();

  // Data-carrying panel: `config.data` is type-checked against the component's
  // `data` input.
  open<TData, TResult = unknown>(
    component: Type<PanelContent<TData>>,
    config: PanelConfig<TData> & { data: TData },
  ): PanelRef<TResult>;
  // Data-less panel (its data, if any, comes via `config.providers`).
  open<TResult = unknown>(
    component: Type<unknown>,
    config?: Omit<PanelConfig<never>, "data">,
  ): PanelRef<TResult>;
  open<TResult = unknown>(
    component: Type<unknown>,
    config: PanelConfig<unknown> = {},
  ): PanelRef<TResult> {
    const id = this.takeId();
    const ref = new PanelRef<TResult>(() => this.dismiss(id));
    const injector = Injector.create({
      parent: this.rootInjector,
      providers: [
        { provide: PanelRef, useValue: ref },
        ...(config.providers ?? []),
      ],
    });
    const descriptor: ComponentPanelDescriptor = {
      kind: "component",
      id,
      component,
      data: config.data,
      side: config.side ?? "right",
      width: signal(config.width ?? 490),
      injector,
      onClose: () => ref.close(),
    };
    this.add(descriptor);
    return ref;
  }

  /** Register a declarative (projected-template) panel; returns a handle. */
  present(
    descriptor: Omit<TemplatePanelDescriptor, "id" | "kind">,
  ): PanelHandle {
    const id = this.takeId();
    this.add({ ...descriptor, kind: "template", id });
    return { id, dismiss: () => this.dismiss(id) };
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

  private add(descriptor: PanelDescriptor): void {
    this._panels.update((list) => [...list, descriptor]);
  }
}
