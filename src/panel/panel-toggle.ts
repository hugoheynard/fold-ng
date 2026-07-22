import { type Type, type WritableSignal, signal } from "@angular/core";
import type { FoldPanelHostService } from "./panel-host.service";
import type { FoldPanelRef } from "./panel-ref";
import type { FoldPanelContent, FoldPanelSide } from "./panel.types";

/**
 * A single open-or-close panel button's worth of state. Wraps
 * `FoldPanelHostService.open()` so a page can `toggle(data)` without hand-tracking
 * the `FoldPanelRef` and re-syncing when the panel closes from the inside.
 *
 * `isOpen` stays truthful whether the panel is closed by a second toggle, its
 * own close button, or Escape — it mirrors the ref's `closed` promise.
 */
export class FoldPanelToggle<TData> {
  /** Reactive open-state, safe to bind in a template (e.g. an active pill). */
  readonly isOpen: WritableSignal<boolean> = signal(false);

  private ref: FoldPanelRef | null = null;

  constructor(
    private readonly host: FoldPanelHostService,
    private readonly component: Type<FoldPanelContent<TData>>,
    private readonly side: FoldPanelSide = "right",
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
