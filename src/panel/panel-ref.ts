/**
 * Handle to an imperatively-opened panel. The opener gets it back from
 * `Sh3PanelHostService.open()`; the panel component gets the same instance via
 * `inject(Sh3PanelRef)`. Either side calls `close(result)` — the panel is
 * dismissed and `closed` resolves with the (typed) result.
 */
export class Sh3PanelRef<TResult = unknown> {
  /** Resolves with the close result (or `undefined` if closed without one). */
  readonly closed: Promise<TResult | undefined>;

  private resolveClosed!: (result: TResult | undefined) => void;
  private settled = false;

  constructor(private readonly dismiss: (result: TResult | undefined) => void) {
    this.closed = new Promise((resolve) => {
      this.resolveClosed = resolve;
    });
  }

  /** Dismiss the panel, returning an optional result to the opener. */
  close(result?: TResult): void {
    if (this.settled) {
      return;
    }
    this.settled = true;
    this.dismiss(result);
    this.resolveClosed(result);
  }
}
