import { computed, signal, type Signal } from "@angular/core";

/** The slice of a `fold-option` the keyboard core needs. */
export interface FoldNavOption {
  value(): string;
  disabled(): boolean;
  readonly label: string;
  readonly id: string;
  scrollIntoView(): void;
}

/** What the owning listbox does when the core resolves an intent. */
export interface FoldNavHandlers {
  /** Activate the option at `index` (single-select commits + closes; multi
   *  toggles + stays open). */
  select(index: number): void;
  /** Close the popup (Tab). */
  close(): void;
}

/**
 * The shared roving/keyboard core for `fold-listbox` and `fold-multiselect`. It
 * owns the keyboard-active row (↑/↓ wrapping + disabled-skip, `Home`/`End`,
 * multi-letter type-ahead) and reports it as `activeId` for
 * `aria-activedescendant`; the owner decides what *selecting* means. Plain class,
 * no Angular decorators — instantiated in a component field.
 */
export class FoldListboxNav {
  private readonly active = signal(-1);
  /** The active option's id, or none — the listbox's `aria-activedescendant`. */
  readonly activeId: Signal<string | null> = computed(
    () => this.opts()[this.active()]?.id ?? null,
  );

  private typeBuffer = "";
  private typeAt = 0;

  constructor(
    private readonly opts: () => readonly FoldNavOption[],
    private readonly handlers: FoldNavHandlers,
  ) {}

  /** Index of the active row (or -1). */
  activeIndex(): number {
    return this.active();
  }

  /** Reset when the popup closes. */
  reset(): void {
    this.active.set(-1);
  }

  /** On open, arm `preferred` if it's a real row, else the first enabled one. */
  arm(preferred: number): void {
    this.setActive(preferred >= 0 ? preferred : this.edge(1));
  }

  /** Point at a row from a hover — no scroll, so the pointer doesn't jog the list. */
  point(index: number): void {
    if (index >= 0) {
      this.active.set(index);
    }
  }

  onKeydown(event: KeyboardEvent): void {
    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        this.move(1);
        break;
      case "ArrowUp":
        event.preventDefault();
        this.move(-1);
        break;
      case "Home":
        event.preventDefault();
        this.setActive(this.edge(1));
        break;
      case "End":
        event.preventDefault();
        this.setActive(this.edge(-1));
        break;
      case "Enter":
      case " ":
        event.preventDefault();
        this.handlers.select(this.active());
        break;
      case "Tab":
        this.handlers.close();
        break;
      default:
        this.typeahead(event);
    }
  }

  /** First (`dir` = 1) or last (`dir` = -1) enabled option index, or -1. */
  private edge(dir: 1 | -1): number {
    const opts = this.opts();
    const order = [...opts.keys()];
    for (const idx of dir === 1 ? order : order.reverse()) {
      if (!opts[idx]?.disabled()) {
        return idx;
      }
    }
    return -1;
  }

  private move(delta: number): void {
    const opts = this.opts();
    let i = this.active();
    let remaining = opts.length;
    while (remaining > 0) {
      i = (i + delta + opts.length) % opts.length;
      if (!opts[i]?.disabled()) {
        this.setActive(i);
        return;
      }
      remaining -= 1;
    }
  }

  private setActive(index: number): void {
    if (index < 0) {
      return;
    }
    this.active.set(index);
    this.opts()[index]?.scrollIntoView();
  }

  /** Multi-letter type-ahead: keystrokes within 500 ms accumulate, so "de" jumps
   *  to "Delete", not just the next "d". */
  private typeahead(event: KeyboardEvent): void {
    if (
      event.key.length !== 1 ||
      event.ctrlKey ||
      event.metaKey ||
      event.altKey
    ) {
      return;
    }
    const now = Date.now();
    this.typeBuffer =
      now - this.typeAt > 500 ? event.key : this.typeBuffer + event.key;
    this.typeAt = now;
    const query = this.typeBuffer.toLowerCase();
    const opts = this.opts();
    const from = query.length === 1 ? 1 : 0;
    const current = Math.max(this.active(), 0);
    for (let i = 0; i < opts.length; i += 1) {
      const idx = (current + from + i) % opts.length;
      const o = opts[idx];
      if (o && !o.disabled() && o.label.toLowerCase().startsWith(query)) {
        this.setActive(idx);
        return;
      }
    }
  }
}
