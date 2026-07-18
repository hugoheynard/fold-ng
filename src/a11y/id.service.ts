import { Injectable } from "@angular/core";

/**
 * Generates unique, SSR-safe element ids.
 *
 * A per-injector counter (`providedIn: 'root'` → one instance per application,
 * and a fresh one per request on the server) so the sequence is deterministic
 * in render order and therefore matches between server and client. That's the
 * point: `crypto.randomUUID()` returns a different value on the server than on
 * the client for the same element, which trips Angular hydration; a counter
 * reset per request does not, and can't collide across requests or grow
 * unbounded.
 *
 * Used by the labelled controls that own their id ({@link Sh3InputComponent},
 * `sh3-select`) and by {@link Sh3FieldIdDirective} for loose native controls.
 */
@Injectable({ providedIn: "root" })
export class Sh3IdService {
  private counter = 0;

  /**
   * The next unique id, e.g. `sh3-input-3`.
   * @param prefix a short, human-readable namespace for the id.
   */
  next(prefix = "sh3"): string {
    this.counter += 1;
    return `${prefix}-${this.counter}`;
  }
}
