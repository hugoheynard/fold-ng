import {
  afterRenderEffect,
  booleanAttribute,
  Component,
  computed,
  contentChildren,
  ElementRef,
  inject,
  input,
  model,
  viewChild,
} from "@angular/core";
import type { FormValueControl, ValidationError } from "@angular/forms/signals";
import { FoldIdService } from "../../../a11y/id.service";
import { FoldIconComponent } from "../../foundations/icon/icon.component";
import { FoldPopoverComponent } from "../../overlays/popover/popover.component";
import { FoldPopoverTriggerDirective } from "../../overlays/popover/popover-trigger.directive";
import type { FoldPopoverPlacement } from "../../overlays/popover/placement";
import { FoldInputBaseComponent } from "../input/input-base.component";
import { FoldOptionComponent } from "./option.component";
import { FoldListboxNav } from "./listbox-nav";
import {
  FOLD_LISTBOX_OWNER,
  warnOnOrphanValue,
  type FoldListboxOwner,
} from "./listbox-owner";

/** Labels beyond this count collapse to a "+N" tail on the trigger summary. */
const SUMMARY_MAX = 3;

/**
 * `<fold-multiselect>` — the multi-select sibling of {@link FoldListboxComponent}.
 * Same styleable popover + `fold-option` rows, but the value is a set: activating
 * a row **toggles** its membership and the panel **stays open**, so several picks
 * are one interaction. It's a separate component (not a `multiple` flag) because
 * the Signal-Forms value type is genuinely different — `readonly string[]`, not
 * `string` — so `[formField]` and `[(value)]` stay honestly typed.
 *
 * `role="listbox"` + `aria-multiselectable`, full keyboard (↑/↓, `Home`/`End`,
 * type-ahead; `Enter`/`Space` toggle), and each selected row keeps its check. The
 * trigger summarises the selection (the chosen labels, joined).
 *
 * ```html
 * <fold-multiselect label="Genres" [(value)]="genres" placeholder="Pick a few…">
 *   <fold-option value="rock">Rock</fold-option>
 *   <fold-option value="jazz">Jazz</fold-option>
 * </fold-multiselect>
 * ```
 *
 * @selector `fold-multiselect`
 */
@Component({
  selector: "fold-multiselect",
  standalone: true,
  imports: [
    FoldInputBaseComponent,
    FoldIconComponent,
    FoldPopoverComponent,
    FoldPopoverTriggerDirective,
  ],
  templateUrl: "./multiselect.component.html",
  styleUrl: "./multiselect.component.scss",
  host: { "[class]": 'size() + " " + variant()' },
  providers: [
    { provide: FOLD_LISTBOX_OWNER, useExisting: FoldMultiselectComponent },
  ],
})
export class FoldMultiselectComponent
  implements FormValueControl<readonly string[]>, FoldListboxOwner
{
  /** Selected values. A `model()` so `FormField` and `[(value)]` stay in sync. */
  readonly value = model<readonly string[]>([]);
  /** Disabled state — bound automatically by `FormField`. */
  readonly disabled = input<boolean>(false);
  /** Two-way touched state — set on the first toggle, kept in sync with the field. */
  readonly touched = model<boolean>(false);
  /** Validation errors — bound by `FormField`. */
  readonly errors = input<readonly ValidationError.WithOptionalFieldTree[]>([]);
  /** Two-way open state of the popup. */
  readonly open = model(false);

  /** Size preset — see {@link FoldInputComponent.size}. @default 'md' */
  readonly size = input<"sm" | "md" | "lg">("md");
  /** Visual variant — see {@link FoldInputComponent.variant}. @default 'default' */
  readonly variant = input<"default" | "panel">("default");
  /** Optional label displayed above the control. */
  readonly label = input<string>();
  /** Show a required marker on the label. */
  readonly required = input(false, { transform: booleanAttribute });
  /** Show a lighter `(optional)` marker on the label (ignored when required). */
  readonly optional = input(false, { transform: booleanAttribute });
  /** The word inside the optional marker. @default 'optional' */
  readonly optionalLabel = input("optional");
  /** Optional helper text shown under the control. */
  readonly hint = input<string>();
  /** Text shown on the trigger while nothing is selected. */
  readonly placeholder = input<string>();
  /** Preferred popup placement. @default 'bottom-start' */
  readonly placement = input<FoldPopoverPlacement>("bottom-start");

  /** Unique, SSR-safe id for label association (see {@link FoldIdService}). */
  readonly inputId = inject(FoldIdService).next("fold-multiselect");
  /** Id of the `role="listbox"` element (own, distinct from the popover panel). */
  protected readonly listId = `${this.inputId}-list`;

  private readonly options = contentChildren(FoldOptionComponent);
  private readonly list = viewChild<ElementRef<HTMLElement>>("list");

  /** Shared roving/keyboard core; multi-select toggles + stays open on activation. */
  private readonly nav = new FoldListboxNav(() => this.options(), {
    select: (index) => this.toggle(index),
    close: () => this.open.set(false),
  });
  /** `aria-activedescendant`, read by each `fold-option` for its `is-active`. */
  readonly activeId = this.nav.activeId;

  /** The selection as a Set — O(1) membership per option (vs. O(n) `includes`,
   *  which is O(n²) across a long list on every change detection). */
  private readonly selectedSet = computed(() => new Set(this.value()));

  /** The chosen labels (in option order) — joined, collapsing to "…, +N" past
   *  {@link SUMMARY_MAX} so the trigger can't grow unbounded. */
  protected readonly summaryLabel = computed<string | undefined>(() => {
    if (this.value().length === 0) {
      return undefined;
    }
    const set = this.selectedSet();
    const labels = this.options()
      .filter((o) => set.has(o.value()))
      .map((o) => o.label);
    if (labels.length === 0) {
      return undefined;
    }
    if (labels.length <= SUMMARY_MAX) {
      return labels.join(", ");
    }
    return `${labels.slice(0, SUMMARY_MAX).join(", ")} +${labels.length - SUMMARY_MAX}`;
  });
  /** The message to show under the field: the first error, once touched. */
  protected readonly errorMessage = computed<string | undefined>(() => {
    if (!this.touched()) {
      return undefined;
    }
    const first = this.errors()[0];
    return first ? (first.message ?? first.kind) : undefined;
  });
  /** `aria-describedby` target: the error when shown, else the hint, else none. */
  protected readonly describedBy = computed<string | null>(() => {
    if (this.errorMessage()) {
      return `${this.inputId}-error`;
    }
    return this.hint() ? `${this.inputId}-hint` : null;
  });

  /** Has the popup been opened this lifetime — so any close marks touched (blur
   *  parity), even one that picked nothing. */
  private hasOpened = false;

  constructor() {
    // On open, move focus into the list and arm on the first selected row (or the
    // first enabled one). Deferred to a microtask so it runs AFTER the popover's
    // render effect has shown the panel in the same flush. On close, mark touched.
    afterRenderEffect(() => {
      if (this.open()) {
        this.hasOpened = true;
        queueMicrotask(() => {
          if (this.open()) {
            this.list()?.nativeElement.focus();
            this.nav.arm(this.firstSelectedIndex());
          }
        });
      } else {
        this.nav.reset();
        if (this.hasOpened) {
          this.touched.set(true);
        }
      }
    });
    warnOnOrphanValue(
      () => this.value(),
      () => this.options(),
      "fold-multiselect",
    );
  }

  /** A value is selected when it's in the set. */
  isSelected(value: string): boolean {
    return this.selectedSet().has(value);
  }

  /** Open with the keys a native select opens on. */
  protected onTriggerKeydown(event: KeyboardEvent): void {
    if (this.open()) {
      return;
    }
    if (["ArrowDown", "ArrowUp", "Enter", " "].includes(event.key)) {
      event.preventDefault();
      this.open.set(true);
    }
  }

  /** Keyboard while the list is open and focused — delegated to the core. */
  protected onListKeydown(event: KeyboardEvent): void {
    this.nav.onKeydown(event);
  }

  /** Click on a row toggles it (delegated, so projected rows need no wiring). */
  protected onListClick(event: MouseEvent): void {
    const index = this.enabledIndexFrom(event.target);
    if (index >= 0) {
      this.toggle(index);
    }
  }

  /** Hover arms the row, so pointer and keyboard share one active row. */
  protected onListPointermove(event: PointerEvent): void {
    const index = this.enabledIndexFrom(event.target);
    if (index >= 0) {
      this.nav.point(index);
    }
  }

  /** Index of the first selected option (or -1) — where the keyboard arms on open. */
  private firstSelectedIndex(): number {
    return this.options().findIndex(
      (o) => this.value().includes(o.value()) && !o.disabled(),
    );
  }

  /** Index of the enabled option under an event target, or -1. */
  private enabledIndexFrom(target: EventTarget | null): number {
    if (!(target instanceof Element)) {
      return -1;
    }
    const el = target.closest("[role='option']");
    const opts = this.options();
    const index = opts.findIndex((o) => o.id === el?.id);
    return index >= 0 && !opts[index]?.disabled() ? index : -1;
  }

  /** Add or remove the option's value from the set; the panel stays open. */
  private toggle(index: number): void {
    const o = this.options()[index];
    if (!o || o.disabled()) {
      return;
    }
    const v = o.value();
    const current = this.value();
    this.value.set(
      current.includes(v) ? current.filter((x) => x !== v) : [...current, v],
    );
    this.touched.set(true);
  }
}
