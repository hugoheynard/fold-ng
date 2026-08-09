import {
  afterRenderEffect,
  booleanAttribute,
  Component,
  computed,
  contentChild,
  contentChildren,
  ElementRef,
  inject,
  input,
  isDevMode,
  model,
  type TemplateRef,
  viewChild,
  viewChildren,
} from "@angular/core";
import { NgTemplateOutlet } from "@angular/common";
import type { FormValueControl, ValidationError } from "@angular/forms/signals";
import { FoldIdService } from "../../../a11y/id.service";
import { FoldIconComponent } from "../../foundations/icon/icon.component";
import { FoldPopoverComponent } from "../../overlays/popover/popover.component";
import { FoldPopoverTriggerDirective } from "../../overlays/popover/popover-trigger.directive";
import type { FoldPopoverPlacement } from "../../overlays/popover/placement";
import { FoldInputBaseComponent } from "../input/input-base.component";
import { FoldOptionComponent } from "./option.component";
import { FoldOptgroupComponent } from "./optgroup.component";
import {
  type FoldSelectItem,
  type FoldSelectOption,
  type FoldSelectOptionGroup,
  isFoldSelectOptionGroup,
} from "./select-option";
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
    FoldOptionComponent,
    FoldOptgroupComponent,
    FoldPopoverComponent,
    FoldPopoverTriggerDirective,
    NgTemplateOutlet,
  ],
  templateUrl: "./multiselect.component.html",
  styleUrl: "./multiselect.component.scss",
  host: { "[class]": 'size() + " " + variant()' },
  providers: [
    { provide: FOLD_LISTBOX_OWNER, useExisting: FoldMultiselectComponent },
  ],
})
export class FoldMultiselectComponent<T>
  implements FormValueControl<readonly T[]>, FoldListboxOwner<T>
{
  /** Selected values. A `model()` so `FormField` and `[(value)]` stay in sync.
   *  Generic over the option value (string by inference; number/enum/object all
   *  work — objects need {@link compareWith}). */
  readonly value = model<readonly T[]>([]);
  /** How two values are compared for membership — supply it for **object**
   *  values; primitives don't need it. @default `Object.is` */
  readonly compareWith = input<(a: T, b: T) => boolean>();
  /** Data-driven options — the alternative to projecting `<fold-option>`. When
   *  set, the value type is linked to the options at compile time. Entries can be
   *  plain options or labelled {@link FoldSelectOptionGroup}s (the array
   *  counterpart to `<fold-optgroup>`). For rich rows, project
   *  `<ng-template #option let-o>`. */
  readonly options = input<readonly FoldSelectItem<T>[]>();
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
  /**
   * Longer explanation behind an `i` at the end of the label line — for the
   * sentence or two a {@link hint} can't carry. Forwarded to `fold-input-base`.
   */
  readonly info = input<string>();
  /** Accessible name of the info button. @default 'More information' */
  readonly infoLabel = input("More information");
  /** Optional helper text shown under the control. */
  readonly hint = input<string>();
  /** Text shown on the trigger while nothing is selected. */
  readonly placeholder = input<string>();
  /** Preferred popup placement. @default 'bottom-start' */
  readonly placement = input<FoldPopoverPlacement>("bottom-start");
  /** Offer a **Select all** bulk action at the top of the panel (adds every
   *  enabled option to the set). @default false */
  readonly allowSelectAll = input(false, { transform: booleanAttribute });
  /** Offer a **Clear** bulk action at the top of the panel (empties the set). The
   *  multiselect counterpart to `fold-listbox`'s trigger `allowClear`. @default false */
  readonly allowClear = input(false, { transform: booleanAttribute });
  /** Label of the select-all action. @default 'Select all' */
  readonly selectAllLabel = input("Select all");
  /** Label of the clear action. @default 'Clear' */
  readonly clearLabel = input("Clear");

  /** Unique, SSR-safe id for label association (see {@link FoldIdService}). */
  readonly inputId = inject(FoldIdService).next("fold-multiselect");
  /** Id of the `role="listbox"` element (own, distinct from the popover panel). */
  protected readonly listId = `${this.inputId}-list`;

  /** Rich per-row template for the `[options]` array API (`<ng-template #option>`). */
  protected readonly optionTemplate =
    contentChild<TemplateRef<{ $implicit: FoldSelectOption<T> }>>("option");
  // `descendants: true` so options nested inside a `<fold-optgroup>` are found,
  // not only direct children — returned in document order, keeping roving order.
  private readonly projectedOptions = contentChildren<FoldOptionComponent<T>>(
    FoldOptionComponent,
    { descendants: true },
  );
  private readonly renderedOptions =
    viewChildren<FoldOptionComponent<T>>(FoldOptionComponent);
  /** The live option instances, from whichever API is in use. */
  private readonly allOptions = computed(() =>
    this.options() ? this.renderedOptions() : this.projectedOptions(),
  );
  private readonly list = viewChild<ElementRef<HTMLElement>>("list");

  /** Compare two values — the injected `compareWith`, else `Object.is`. */
  private eq(a: T, b: T): boolean {
    const cmp = this.compareWith();
    return cmp ? cmp(a, b) : Object.is(a, b);
  }

  /** Shared roving/keyboard core; multi-select toggles + stays open on activation. */
  private readonly nav = new FoldListboxNav(() => this.allOptions(), {
    select: (index) => this.toggle(index),
    close: () => this.open.set(false),
  });
  /** `aria-activedescendant`, read by each `fold-option` for its `is-active`. */
  readonly activeId = this.nav.activeId;

  /** Fast-path membership: a `Set` when values compare by identity (the default,
   *  O(1) per option), or `null` when a `compareWith` is supplied — then
   *  membership falls back to a linear `eq` scan (correct for object values). */
  private readonly selectedSet = computed(() =>
    this.compareWith() ? null : new Set(this.value()),
  );

  /** The chosen labels (in option order) — joined, collapsing to "…, +N" past
   *  {@link SUMMARY_MAX} so the trigger can't grow unbounded. */
  protected readonly summaryLabel = computed<string | undefined>(() => {
    if (this.value().length === 0) {
      return undefined;
    }
    const labels = this.allOptions()
      .filter((o) => this.isSelected(o.value()))
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

  /** Whether the bulk-action bar shows at all (either affordance enabled, and
   *  there is at least one option to act on). */
  protected readonly showBulk = computed(
    () =>
      (this.allowSelectAll() || this.allowClear()) &&
      this.allOptions().length > 0,
  );
  /** Every enabled option is already selected — nothing left for "Select all". */
  protected readonly allEnabledSelected = computed(() => {
    const enabled = this.allOptions().filter((o) => !o.disabled());
    return (
      enabled.length > 0 && enabled.every((o) => this.isSelected(o.value()))
    );
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
      () => this.allOptions(),
      (a, b) => this.eq(a, b),
      "fold-multiselect",
    );
    if (isDevMode()) {
      afterRenderEffect(() => {
        if (this.options() && this.projectedOptions().length > 0) {
          console.warn(
            "[fold-multiselect] both `[options]` and projected <fold-option> given — the array wins, the projected ones are ignored.",
          );
        }
      });
    }
  }

  /** A value is selected when it's in the current set (via `compareWith`). */
  isSelected(value: T): boolean {
    const set = this.selectedSet();
    return set ? set.has(value) : this.value().some((v) => this.eq(v, value));
  }

  /** Narrow an `[options]` entry to a group, or `null` — lets the template
   *  branch on the two shapes with each side fully typed (no `any`). */
  protected asGroup(item: FoldSelectItem<T>): FoldSelectOptionGroup<T> | null {
    return isFoldSelectOptionGroup(item) ? item : null;
  }

  /** Narrow an `[options]` entry to a plain option, or `null`. */
  protected asOption(item: FoldSelectItem<T>): FoldSelectOption<T> | null {
    return isFoldSelectOptionGroup(item) ? null : item;
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
    return this.allOptions().findIndex(
      (o) => this.isSelected(o.value()) && !o.disabled(),
    );
  }

  /** Index of the enabled option under an event target, or -1. */
  private enabledIndexFrom(target: EventTarget | null): number {
    if (!(target instanceof Element)) {
      return -1;
    }
    const el = target.closest("[role='option']");
    const opts = this.allOptions();
    const index = opts.findIndex((o) => o.id === el?.id);
    return index >= 0 && !opts[index]?.disabled() ? index : -1;
  }

  /** Add every enabled option to the set (keeps already-picked disabled ones);
   *  the panel stays open. */
  protected selectAll(): void {
    const toAdd = this.allOptions()
      .filter((o) => !o.disabled())
      .map((o) => o.value())
      .filter((v) => !this.isSelected(v));
    if (toAdd.length > 0) {
      this.value.set([...this.value(), ...toAdd]);
      this.touched.set(true);
    }
  }

  /** Empty the set (the bulk "Clear"). */
  protected clearAll(): void {
    if (this.value().length > 0) {
      this.value.set([]);
      this.touched.set(true);
    }
  }

  /** Add or remove the option's value from the set; the panel stays open. */
  private toggle(index: number): void {
    const o = this.allOptions()[index];
    if (!o || o.disabled()) {
      return;
    }
    const v = o.value();
    const current = this.value();
    this.value.set(
      this.isSelected(v)
        ? current.filter((x) => !this.eq(x, v))
        : [...current, v],
    );
    this.touched.set(true);
  }
}
