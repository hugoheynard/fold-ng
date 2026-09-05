import {
  booleanAttribute,
  Component,
  computed,
  DestroyRef,
  inject,
  input,
  model,
  output,
} from "@angular/core";
import { FoldInputComponent } from "./input.component";

/**
 * `<fold-search>` — a search box: the magnifier, the clear `×`, an optional
 * **announced result count**, and a **debounced emit**. `searchChange` fires only once typing pauses for
 * `delayMs`, so a fast typer triggers one query instead of one per keystroke;
 * the emitted term is trimmed and de-duplicated.
 *
 * `value` is a `model()`, and that is what makes it a control rather than a
 * one-way sensor. Bind it and the box becomes **steerable from outside** —
 * picking a filter elsewhere can empty the field, which a write-only search
 * cannot do: it would keep showing a term the results no longer honour.
 *
 * Two ways to use it, and they answer different questions:
 *
 * - `[(value)]` — the term as **state**, updated on every keystroke. Filtering
 *   an array already in memory wants this; a debounce there only adds lag.
 * - `(searchChange)` — the term as an **event**, once it settles. A request to
 *   a server wants this.
 *
 * They compose: bind both when a screen filters locally *and* refetches.
 * Writing `value` from outside never emits `searchChange` — whoever wrote it
 * already knows.
 *
 * @selector `fold-search`
 *
 * @example
 * ```html
 * <!-- Local filtering, instant, with the count beside the box -->
 * <fold-search
 *   placeholder="Filter…"
 *   [(value)]="term"
 *   [resultCount]="rows().length"
 *   resultLabel="rows" />
 *
 * <!-- Remote query, once typing settles -->
 * <fold-search
 *   placeholder="Search name, email, job…"
 *   (searchChange)="store.setSearch($event)" />
 * ```
 */
@Component({
  selector: "fold-search",
  standalone: true,
  imports: [FoldInputComponent],
  templateUrl: "./search.component.html",
  styleUrl: "./search.component.scss",
  host: {
    "[class]": "placement()",
  },
})
export class FoldSearchComponent {
  /**
   * The term in the box — the SOURCE of truth, not a copy of it.
   *
   * Two-way, so a screen can clear or preset it: choosing a category that
   * supersedes the search empties the field in the same gesture, instead of
   * leaving a stale term above results that ignore it.
   */
  readonly value = model("");

  readonly placeholder = input("");
  readonly size = input<"sm" | "md" | "lg">("md");
  /** Visual variant, forwarded to the inner `fold-input` (`panel` for side-panel
   *  forms; `default` elsewhere). */
  readonly variant = input<"default" | "panel">("default");

  /**
   * Accessible name, when the design leaves no room for a visible label — the
   * magnifier is decorative and names nothing.
   */
  readonly ariaLabel = input<string | undefined>(undefined);

  /** The `×` that empties the box. On by default: it is what a search box is. */
  readonly clearable = input(true, { transform: booleanAttribute });

  /** Accessible name of the clear button. Override it to translate. */
  readonly clearLabel = input("Clear search");

  /**
   * How many results the term found — `null` (the default) shows nothing.
   *
   * It belongs here rather than beside the box because it is the ANSWER to what
   * the box asked, and because every screen that wrote it by hand forgot the
   * same thing: a count that changes under a search has to be **announced**.
   * It carries `role="status"` and `aria-live="polite"`, so a user who cannot
   * see the grid still learns that four hundred rows became three.
   */
  readonly resultCount = input<number | null>(null);

  /**
   * The word after the number — « pièces », "results", "matches".
   *
   * A plain string and not a template: the count reads `12 pièces`, and a
   * language that needs another order or a plural rule formats the whole thing
   * upstream and passes it as {@link resultLabel} with `resultCount` left null…
   * which it cannot. So: this covers `<number> <word>`, and anything else stays
   * the consumer's own markup beside the box.
   */
  readonly resultLabel = input("results");

  /**
   * Where the count sits: above the box, after it on the same line, or below.
   *
   * `end` and not `right` — the whole library lays out in **logical**
   * properties, so the count follows the reading direction instead of pinning
   * itself to a side of the screen.
   */
  readonly placement = input<"top" | "end" | "bottom">("end");

  /** Quiet period after the last keystroke before emitting, in ms. */
  readonly delayMs = input(300);

  /** Emits the trimmed term once typing pauses for `delayMs` (deduped). */
  readonly searchChange = output<string>();

  protected readonly showCount = computed(() => this.resultCount() !== null);

  protected readonly countText = computed(
    () => `${String(this.resultCount() ?? 0)} ${this.resultLabel()}`,
  );

  private timer: ReturnType<typeof setTimeout> | null = null;
  private lastEmitted = "";

  constructor() {
    // A pending timer that outlives the view would fire a stray emit.
    inject(DestroyRef).onDestroy(() => this.clear());
  }

  /**
   * The value moves **now**, the event waits.
   *
   * The box must show what was typed on the keystroke — deferring the text
   * itself would make the field feel broken — while the query it triggers is
   * what deserves the quiet period. Clearing settles like any other edit: the
   * empty term goes out after the same delay, so a consumer sees one contract
   * and not two.
   */
  protected onInput(value: string): void {
    this.value.set(value);
    const term = value.trim();
    this.clear();
    this.timer = setTimeout(() => {
      if (term !== this.lastEmitted) {
        this.lastEmitted = term;
        this.searchChange.emit(term);
      }
    }, this.delayMs());
  }

  private clear(): void {
    if (this.timer !== null) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }
}
