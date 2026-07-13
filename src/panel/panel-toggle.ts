import { type Type, type WritableSignal, signal } from "@angular/core";
import type { Sh3PanelHostService } from "./panel-host.service";
import type { Sh3PanelRef } from "./panel-ref";
import type { Sh3PanelContent, Sh3PanelSide } from "./panel.types";

/**
 * A single open-or-close panel button's worth of state. Wraps
 * `Sh3PanelHostService.open()` so a page can `toggle(data)` without hand-tracking
 * the `Sh3PanelRef` and re-syncing when the panel closes from the inside.
 *
 * `isOpen` stays truthful whether the panel is closed by a second toggle, its
 * own close button, or Escape — it mirrors the ref's `closed` promise.
 */
export class Sh3PanelToggle<TData> {
  /** Reactive open-state, safe to bind in a template (e.g. an active pill). */
  readonly isOpen: WritableSignal<boolean> = signal(false);

  private ref: Sh3PanelRef | null = null;

  constructor(
    private readonly host: Sh3PanelHostService,
    private readonly component: Type<Sh3PanelContent<TData>>,
    private readonly side: Sh3PanelSide = "right",
  ) {}

  /** Open with `data`, or close if already open. */
  toggle(data: TData): void {
    if (this.ref) {
      this.ref.close();
      return;
    }
    const ref = this.host.open<TData>(this.component, {
      data,
      side: this.side,
    });
    this.ref = ref;
    this.isOpen.set(true);
    void ref.closed.then(() => {
      this.ref = null;
      this.isOpen.set(false);
    });
  }

  /** Close if open (no-op otherwise). */
  close(): void {
    this.ref?.close();
  }
}
