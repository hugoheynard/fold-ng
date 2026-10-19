import {
  booleanAttribute,
  Component,
  computed,
  contentChild,
  DestroyRef,
  effect,
  inject,
  input,
  linkedSignal,
  model,
  output,
  type TemplateRef,
  untracked,
  viewChildren,
} from "@angular/core";
import { NgTemplateOutlet } from "@angular/common";
import type { FormValueControl, ValidationError } from "@angular/forms/signals";
import { FoldIdService } from "../../../a11y/id.service";
import { FoldLoadingStateComponent } from "../../feedback/state/loading-state.component";
import { FoldPopoverComponent } from "../../overlays/popover/popover.component";
import { FoldPopoverTriggerDirective } from "../../overlays/popover/popover-trigger.directive";
import type { FoldPopoverPlacement } from "../../overlays/popover/placement";
import { FOLD_COMMON_LABELS } from "../common-labels";
import { FoldInputBaseComponent } from "../input/input-base.component";
import {
  FOLD_LISTBOX_OWNER,
  type FoldListboxOwner,
} from "../listbox/listbox-owner";
import { FoldOptionComponent } from "../listbox/option.component";
import type { FoldSelectOption } from "../listbox/select-option";

/**
 * How `fold-combobox` narrows `[options]` against the typed text.
 * `"none"` hands the job to a server (the remote mode): the options are shown
 * as given. A function receives each option and the trimmed, typed term.
 */
export type FoldComboboxFilter<T> =
  | "contains"
  | "startsWith"
  | "none"
  | ((option: FoldSelectOption<T>, term: string) => boolean);

/**
 * `<fold-combobox>` — ONE field you type in, with the propositions opening
 * under it. It replaces the "a `fold-search` to filter + a `fold-listbox` beside
 * it to choose" pair: two controls, two tab stops, and a list that never knew
 * what was typed.
 *
 * Two data modes, one surface:
 *
 * - **local** — pass every option in `[options]`; the text filters them
 *   (`filter`, `"contains"` by default).
 * - **remote** — `filter="none"`, listen to `(searchChange)` (debounced like
 *   `fold-search`, `delayMs`), and feed the answer back into `[options]`, with
 *   `[loading]` while it travels. An empty answer shows `emptyText`.
 *
 * Rich rows: project `<ng-template #option let-o>` — the same seam as
 * `fold-listbox`'s array API; `o` is the {@link FoldSelectOption}, and an object
 * `value` carries whatever the row needs (a thumbnail, a second line).
 * Projected `<fold-option>`s are **not** accepted: filtering needs data, and a
 * projected row is markup.
 *
 * Built on {@link FoldPopoverComponent} (top layer, flip/shift, outside-click
 * and `Escape`), with focus kept in the input: WAI-ARIA combobox —
 * `role="combobox"`, `aria-expanded`, `aria-controls`, `aria-activedescendant`
 * on a `role="listbox"`. ↑/↓ move, `Enter` picks, `Escape` closes, `Tab` leaves.
 * The result count is announced in a polite live region.
 *
 * `clearOnSelect` turns it into an **adder**: a pick emits `selectionChange`
 * and empties the field, without holding a value — for "add an article to the
 * list" flows.
 *
 * @selector `fold-combobox`
 *
 * @example
 * ```html
 * <fold-combobox
 *   label="Ajouter un article"
 *   filter="none"
 *   clearOnSelect
 *   [options]="results()"
 *   [loading]="searching()"
 *   emptyText="Aucun article"
 *   (searchChange)="search($event)"
 *   (selectionChange)="add($event)"
 * >
 *   <ng-template #option let-o>
 *     <img [src]="o.value.thumb" alt="" /> {{ o.label }} <small>{{ o.value.sku }}</small>
 *   </ng-template>
 * </fold-combobox>
 * ```
 */
@Component({
  selector: "fold-combobox",
  standalone: true,
  imports: [
    FoldInputBaseComponent,
    FoldLoadingStateComponent,
    FoldOptionComponent,
    FoldPopoverComponent,
    FoldPopoverTriggerDirective,
    NgTemplateOutlet,
  ],
  templateUrl: "./combobox.component.html",
  styleUrl: "./combobox.component.scss",
  host: { "[class]": 'size() + " " + variant()' },
  providers: [
    { provide: FOLD_LISTBOX_OWNER, useExisting: FoldComboboxComponent },
  ],
})
export class FoldComboboxComponent<T>
  implements FormValueControl<T | null>, FoldListboxOwner<T>
{
  /** The picked value, or `null`. Typing over a pick clears it — the text no
   *  longer names it. Never written when `clearOnSelect` is on. */
  readonly value = model<T | null>(null);
  /** The text in the field. Two-way, so a screen can preset or empty it. */
  readonly query = model("");
  /** Two-way open state of the propositions panel. */
  readonly open = model(false);
  /** The propositions — the whole set (local) or the server's answer (remote). */
  readonly options = input<readonly FoldSelectOption<T>[]>([]);
  /** How the text narrows `options`. `"none"` for a server-side search. @default 'contains' */
  readonly filter = input<FoldComboboxFilter<T>>("contains");
  /** Value equality — supply it for object values. @default `Object.is` */
  readonly compareWith = input<(a: T, b: T) => boolean>();
  /** Quiet period after the last keystroke before `searchChange`, in ms. @default 300 */
  readonly delayMs = input(300);
  /** A search is in flight: the panel shows `fold-loading`. */
  readonly loading = input(false, { transform: booleanAttribute });
  /** Shown in the panel when nothing matches. @default 'No results' */
  readonly emptyText = input("No results");
  /** Message under the spinner. @default the shared `loading` label */
  readonly loadingText = input<string | undefined>();
  /** The word after the announced count — "results", « articles ». @default 'results' */
  readonly resultLabel = input("results");
  /** Pick, emit, then empty the field — an adder, not a picker. */
  readonly clearOnSelect = input(false, { transform: booleanAttribute });

  /** Visible label. */
  readonly label = input<string>();
  /** Accessible name when there is no visible `label` — never both. */
  readonly ariaLabel = input<string | undefined>(undefined);
  readonly placeholder = input<string>();
  readonly hint = input<string>();
  readonly info = input<string>();
  readonly infoLabel = input<string | undefined>();
  readonly required = input(false, { transform: booleanAttribute });
  readonly optional = input(false, { transform: booleanAttribute });
  readonly optionalLabel = input<string | undefined>();
  /** Disabled state — bound automatically by `FormField`. */
  readonly disabled = input(false, { transform: booleanAttribute });
  /** Read-only: the text shows, nothing opens. Named like `fold-input`'s. */
  readonly readOnly = input(false, { transform: booleanAttribute });
  readonly touched = model(false);
  readonly errors = input<readonly ValidationError.WithOptionalFieldTree[]>([]);
  readonly size = input<"sm" | "md" | "lg">("md");
  readonly variant = input<"default" | "panel">("default");
  /** Preferred panel placement. @default 'bottom-start' */
  readonly placement = input<FoldPopoverPlacement>("bottom-start");

  /** The settled, trimmed, de-duplicated term — for a server search. */
  readonly searchChange = output<string>();
  /** The user picked an option — never `null`, fires with `clearOnSelect` too. */
  readonly selectionChange = output<T>();

  readonly inputId = inject(FoldIdService).next("fold-combobox");
  protected readonly listId = `${this.inputId}-list`;
  private readonly common = inject(FOLD_COMMON_LABELS);
  protected readonly loadingWord = computed(
    () => this.loadingText() ?? this.common.loading,
  );

  protected readonly optionTemplate =
    contentChild<TemplateRef<{ $implicit: FoldSelectOption<T> }>>("option");
  private readonly rows =
    viewChildren<FoldOptionComponent<T>>(FoldOptionComponent);

  /** The options the text lets through. The text of the current pick shows
   *  the whole list again: reopening a chosen field must offer the others. */
  protected readonly filtered = computed<readonly FoldSelectOption<T>[]>(() => {
    const opts = this.options();
    const f = this.filter();
    const term = this.query().trim().toLowerCase();
    if (
      f === "none" ||
      term === "" ||
      term === this.pickedLabel()?.toLowerCase()
    ) {
      return opts;
    }
    if (typeof f === "function") {
      return opts.filter((o) => f(o, term));
    }
    return opts.filter((o) => {
      const l = o.label.toLowerCase();
      return f === "startsWith" ? l.startsWith(term) : l.includes(term);
    });
  });

  /** Keyboard-active row; back to none whenever the list changes. */
  private readonly active = linkedSignal({
    source: this.filtered,
    computation: () => -1,
  });

  /** The panel shows when asked AND it has something to say. */
  protected readonly panelOpen = computed(
    () =>
      this.open() &&
      !this.disabled() &&
      !this.readOnly() &&
      (this.loading() ||
        this.filtered().length > 0 ||
        this.query().trim() !== ""),
  );

  readonly activeId = computed(() =>
    this.panelOpen() ? (this.rows()[this.active()]?.id ?? null) : null,
  );

  /** What the live region says — text, since `aria-live` reads text only. */
  protected readonly status = computed(() => {
    if (!this.panelOpen() || this.loading() || this.query().trim() === "") {
      return "";
    }
    const n = this.filtered().length;
    return n === 0 ? this.emptyText() : `${String(n)} ${this.resultLabel()}`;
  });

  protected readonly errorMessage = computed<string | undefined>(() => {
    const first = this.touched() ? this.errors()[0] : undefined;
    return first ? (first.message ?? first.kind) : undefined;
  });
  protected readonly describedBy = computed<string | null>(() => {
    if (this.errorMessage()) {
      return `${this.inputId}-error`;
    }
    return this.hint() ? `${this.inputId}-hint` : null;
  });

  private timer: ReturnType<typeof setTimeout> | null = null;
  private lastEmitted = "";

  constructor() {
    inject(DestroyRef).onDestroy(() => this.stopTimer());
    // A value written from outside shows its label in the field.
    effect(() => {
      const label = this.pickedLabel();
      if (label !== undefined) {
        untracked(() => this.query.set(label));
      }
    });
  }

  isSelected(value: T): boolean {
    const v = this.value();
    return v !== null && this.eq(v, value);
  }

  private pickedLabel(): string | undefined {
    const v = this.value();
    return v === null
      ? undefined
      : this.options().find((o) => this.eq(o.value, v))?.label;
  }

  private eq(a: T, b: T): boolean {
    const cmp = this.compareWith();
    return cmp ? cmp(a, b) : Object.is(a, b);
  }

  /** The text moves now and opens the panel; the event waits (`fold-search`). */
  protected onInput(event: Event): void {
    const text =
      event.target instanceof HTMLInputElement ? event.target.value : "";
    this.query.set(text);
    if (this.value() !== null) {
      this.value.set(null);
    }
    this.open.set(true);
    const term = text.trim();
    this.stopTimer();
    this.timer = setTimeout(() => {
      if (term !== this.lastEmitted) {
        this.lastEmitted = term;
        this.searchChange.emit(term);
      }
    }, this.delayMs());
  }

  /** Keys are handled here and kept from the popover, which would toggle on its own. */
  protected onKeydown(event: KeyboardEvent): void {
    switch (event.key) {
      case "ArrowDown":
      case "ArrowUp":
        event.preventDefault();
        event.stopPropagation();
        if (!this.panelOpen()) {
          this.open.set(true);
        } else {
          this.move(event.key === "ArrowDown" ? 1 : -1);
        }
        break;
      case "Enter":
        if (this.panelOpen() && this.active() >= 0) {
          event.preventDefault();
          this.pick(this.active());
        }
        break;
      case "Escape":
        this.open.set(false);
        break;
      case "Tab":
        this.open.set(false);
        break;
    }
  }

  /** A click in the field must not toggle the popover closed under the caret. */
  protected onFieldClick(event: MouseEvent): void {
    event.stopPropagation();
  }

  protected onPopoverOpenChange(open: boolean): void {
    if (!open) {
      this.open.set(false);
    }
  }

  protected onListClick(event: MouseEvent): void {
    const i = this.rowIndexFrom(event.target);
    if (i >= 0) {
      this.pick(i);
    }
  }

  protected onListPointermove(event: PointerEvent): void {
    const i = this.rowIndexFrom(event.target);
    if (i >= 0) {
      this.active.set(i);
    }
  }

  private rowIndexFrom(target: EventTarget | null): number {
    if (!(target instanceof Element)) {
      return -1;
    }
    const id = target.closest("[role='option']")?.id;
    const i = this.rows().findIndex((r) => r.id === id);
    return i >= 0 && !this.filtered()[i]?.disabled ? i : -1;
  }

  /** ↑/↓ wrap and skip disabled rows. */
  private move(delta: 1 | -1): void {
    const opts = this.filtered();
    let i = this.active();
    for (let left = opts.length; left > 0; left -= 1) {
      i = (i + delta + opts.length) % opts.length;
      if (!opts[i]?.disabled) {
        this.active.set(i);
        this.rows()[i]?.scrollIntoView();
        return;
      }
    }
  }

  private pick(index: number): void {
    const o = this.filtered()[index];
    if (!o || o.disabled) {
      return;
    }
    this.stopTimer();
    if (this.clearOnSelect()) {
      this.query.set("");
      this.lastEmitted = "";
    } else {
      this.value.set(o.value);
      this.query.set(o.label);
    }
    this.selectionChange.emit(o.value);
    this.touched.set(true);
    this.open.set(false);
  }

  private stopTimer(): void {
    if (this.timer !== null) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }
}
