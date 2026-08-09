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
  output,
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

/**
 * `<fold-listbox>` — a **styleable** single-select, the richer sibling of the
 * native-`<select>`-wrapping {@link FoldSelectComponent}. Reach for it when the
 * options need custom rendering the native popup can't give (an icon, a second
 * line, a status) — otherwise `fold-select` stays the lighter, mobile-native
 * default. For picking several values, use `fold-multiselect`.
 *
 * Built on {@link FoldPopoverComponent}: the popover owns positioning, the native
 * top layer, outside-click / `Escape` dismissal and focus return. On top of that
 * this adds the ARIA select pattern — a `role="listbox"` that holds focus and
 * drives `aria-activedescendant`, full keyboard (↑/↓, `Home`/`End`, type-ahead,
 * `Enter`) — and Signal-Forms wiring (`FormValueControl<string>`), so `[formField]`
 * and `[(value)]` both work, exactly like `fold-input` / `fold-select`.
 *
 * ```html
 * <fold-listbox label="Devise" [(value)]="currency" placeholder="Choisir…">
 *   <fold-option value="EUR">Euro</fold-option>
 *   <fold-option value="USD">US Dollar</fold-option>
 * </fold-listbox>
 * ```
 *
 * @selector `fold-listbox`
 */
@Component({
  selector: "fold-listbox",
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
  templateUrl: "./listbox.component.html",
  styleUrl: "./listbox.component.scss",
  host: { "[class]": 'size() + " " + variant()' },
  providers: [
    { provide: FOLD_LISTBOX_OWNER, useExisting: FoldListboxComponent },
  ],
})
export class FoldListboxComponent<T>
  implements FormValueControl<T | null>, FoldListboxOwner<T>
{
  /** Selected value (the chosen option's `value`), or `null` when nothing is
   *  picked. A `model()` so `FormField` and `[(value)]` stay in sync. Generic
   *  over the option value — `string` by inference, but `number`, an `enum` or
   *  an object all work (objects need {@link compareWith}). */
  readonly value = model<T | null>(null);
  /** How two values are compared for selection — supply it for **object** values
   *  (reference equality won't match); primitives (string/number/enum) don't need
   *  it. @default `Object.is` */
  readonly compareWith = input<(a: T, b: T) => boolean>();
  /** Data-driven options — the alternative to projecting `<fold-option>`. When
   *  set, the value type is linked to the options at compile time (no projection
   *  seam). Entries can be plain options or labelled {@link FoldSelectOptionGroup}s
   *  (the array counterpart to `<fold-optgroup>`). For rich rows, project
   *  `<ng-template #option let-o>`. */
  readonly options = input<readonly FoldSelectItem<T>[]>();
  /** Disabled state — bound automatically by `FormField`. */
  readonly disabled = input<boolean>(false);
  /** Two-way touched state — set on selection / blur, kept in sync with the field. */
  readonly touched = model<boolean>(false);
  /** Validation errors — bound by `FormField`. */
  readonly errors = input<readonly ValidationError.WithOptionalFieldTree[]>([]);
  /** Two-way open state of the popup. */
  readonly open = model(false);
  /** Fires when the **user picks an option** — carries the chosen value, never
   *  `null`. Use it for the common "do X on selection" case to skip the
   *  `T | null` narrowing that `[(value)]` / `valueChange` require. Clearing the
   *  value (the × button) does **not** fire this; observe `value`/`valueChange`
   *  for that. */
  readonly selectionChange = output<T>();

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
  /** Show a clear (×) affordance on the trigger once a value is picked. */
  readonly allowClear = input(false, { transform: booleanAttribute });
  /** Accessible name of the clear button. @default 'Clear' */
  readonly clearLabel = input("Clear");

  /** Unique, SSR-safe id for label association (see {@link FoldIdService}). */
  readonly inputId = inject(FoldIdService).next("fold-listbox");
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
  /** The live option instances, from whichever API is in use — the `[options]`
   *  array (rendered in the view) when set, else the projected `<fold-option>`s. */
  private readonly allOptions = computed(() =>
    this.options() ? this.renderedOptions() : this.projectedOptions(),
  );
  private readonly list = viewChild<ElementRef<HTMLElement>>("list");

  /** Compare two values — the injected `compareWith`, else `Object.is`. Called
   *  only where both operands are `T`, so no erasure leaks in. */
  private eq(a: T, b: T): boolean {
    const cmp = this.compareWith();
    return cmp ? cmp(a, b) : Object.is(a, b);
  }

  /** Shared roving/keyboard core; single-select commits + closes on activation. */
  private readonly nav = new FoldListboxNav(() => this.allOptions(), {
    select: (index) => this.selectAt(index),
    close: () => this.open.set(false),
  });
  /** `aria-activedescendant`, read by each `fold-option` for its `is-active`. */
  readonly activeId = this.nav.activeId;

  /** The selected option's label, for the trigger. */
  protected readonly selectedLabel = computed<string | undefined>(() => {
    const v = this.value();
    return v === null
      ? undefined
      : this.allOptions().find((o) => this.eq(o.value(), v))?.label;
  });
  /** Whether the clear affordance is currently offered. */
  protected readonly showClear = computed(
    () => this.allowClear() && this.value() !== null && !this.disabled(),
  );
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

  /** Has the popup been opened at least once this lifetime — so closing it (by
   *  Escape, outside-click, Tab or a pick) can mark the field touched, exactly as
   *  a native `<select>` does on blur. Without this a `required` select that the
   *  user opens and dismisses would never surface its error. */
  private hasOpened = false;

  constructor() {
    // On open, move focus into the list and arm the active row on the selection
    // (or the first enabled option). Deferred to a microtask so it runs AFTER the
    // popover's render effect has shown the panel in the same flush. On close,
    // mark touched (blur parity).
    afterRenderEffect(() => {
      if (this.open()) {
        this.hasOpened = true;
        queueMicrotask(() => {
          if (this.open()) {
            this.list()?.nativeElement.focus();
            this.nav.arm(this.selectedIndex());
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
      () => {
        const v = this.value();
        return v === null ? [] : [v];
      },
      () => this.allOptions(),
      (a, b) => this.eq(a, b),
      "fold-listbox",
    );
    if (isDevMode()) {
      afterRenderEffect(() => {
        if (this.options() && this.projectedOptions().length > 0) {
          console.warn(
            "[fold-listbox] both `[options]` and projected <fold-option> given — the array wins, the projected ones are ignored.",
          );
        }
      });
    }
  }

  /** A value is selected when it equals the current one (via `compareWith`). */
  isSelected(value: T): boolean {
    const v = this.value();
    return v !== null && this.eq(v, value);
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

  /** Clear the selection (the `allowClear` ×). */
  protected clear(event: Event): void {
    event.stopPropagation(); // don't let the trigger open
    this.value.set(null);
    this.touched.set(true);
  }

  /** Open with the keys a native select opens on; otherwise type-ahead picks
   *  directly without opening — native-`<select>` parity. */
  protected onTriggerKeydown(event: KeyboardEvent): void {
    if (this.open()) {
      return;
    }
    if (["ArrowDown", "ArrowUp", "Enter", " "].includes(event.key)) {
      event.preventDefault();
      this.open.set(true);
      return;
    }
    this.nav.typeahead(event, (index) => this.selectAt(index));
  }

  /** Keyboard while the list is open and focused — delegated to the core. */
  protected onListKeydown(event: KeyboardEvent): void {
    this.nav.onKeydown(event);
  }

  /** Click on a row selects it (delegated, so projected rows need no wiring). */
  protected onListClick(event: MouseEvent): void {
    const o = this.enabledOptionFrom(event.target);
    if (o) {
      this.commit(o);
    }
  }

  /** Hover arms the row, so pointer and keyboard share one active row. */
  protected onListPointermove(event: PointerEvent): void {
    const o = this.enabledOptionFrom(event.target);
    if (o) {
      this.nav.point(this.allOptions().indexOf(o));
    }
  }

  /** Index of the selected option (or -1) — where the keyboard arms on open. */
  private selectedIndex(): number {
    const v = this.value();
    if (v === null) {
      return -1;
    }
    return this.allOptions().findIndex(
      (o) => this.eq(o.value(), v) && !o.disabled(),
    );
  }

  /** The enabled option under an event target, or null. */
  private enabledOptionFrom(
    target: EventTarget | null,
  ): FoldOptionComponent<T> | null {
    if (!(target instanceof Element)) {
      return null;
    }
    const el = target.closest("[role='option']");
    const o = this.allOptions().find((opt) => opt.id === el?.id);
    return o && !o.disabled() ? o : null;
  }

  private selectAt(index: number): void {
    const o = this.allOptions()[index];
    if (o && !o.disabled()) {
      this.commit(o);
    }
  }

  private commit(option: FoldOptionComponent<T>): void {
    const picked = option.value();
    this.value.set(picked);
    this.selectionChange.emit(picked);
    this.touched.set(true);
    this.open.set(false);
  }
}
