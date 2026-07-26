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
  signal,
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

/**
 * `<fold-listbox>` — a **styleable** single-select, the richer sibling of the
 * native-`<select>`-wrapping {@link FoldSelectComponent}. Reach for it when the
 * options need custom rendering the native popup can't give (an icon, a second
 * line, a status) — otherwise `fold-select` stays the lighter, mobile-native
 * default.
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
    FoldPopoverComponent,
    FoldPopoverTriggerDirective,
  ],
  templateUrl: "./listbox.component.html",
  styleUrl: "./listbox.component.scss",
  host: { "[class]": 'size() + " " + variant()' },
})
export class FoldListboxComponent implements FormValueControl<string> {
  /** Selected value (the chosen option's `value`). A `model()` so `FormField`
   *  and `[(value)]` stay in sync. */
  readonly value = model<string>("");
  /** Disabled state — bound automatically by `FormField`. */
  readonly disabled = input<boolean>(false);
  /** Two-way touched state — set on selection / blur, kept in sync with the field. */
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
  readonly inputId = inject(FoldIdService).next("fold-listbox");
  /** Id of the `role="listbox"` element (own, distinct from the popover panel). */
  protected readonly listId = `${this.inputId}-list`;

  private readonly options = contentChildren(FoldOptionComponent);
  private readonly list = viewChild<ElementRef<HTMLElement>>("list");
  /** Keyboard-active row = index into {@link options}. Lives here, not read from
   *  the DOM, so it stays correct however focus moves. */
  private readonly activeIndex = signal(-1);

  /** The selected option's label, for the trigger. */
  protected readonly selectedLabel = computed<string | undefined>(
    () => this.options().find((o) => o.value() === this.value())?.label,
  );
  /** `aria-activedescendant`: the active option's id, or none. Read by each
   *  `fold-option` to derive its own `is-active` state. */
  readonly activeId = computed<string | null>(
    () => this.options()[this.activeIndex()]?.id ?? null,
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

  constructor() {
    // On open, move focus into the list and arm the active row on the selection
    // (or the first enabled option). Deferred to a microtask so it runs AFTER the
    // popover's render effect has shown the panel in the same flush.
    afterRenderEffect(() => {
      if (this.open()) {
        queueMicrotask(() => {
          if (this.open()) {
            this.list()?.nativeElement.focus();
            this.armActive();
          }
        });
      } else {
        this.activeIndex.set(-1);
      }
    });
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

  /** Keyboard while the list is open and focused. */
  protected onListKeydown(event: KeyboardEvent): void {
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
        this.selectActive();
        break;
      case "Tab":
        this.open.set(false);
        break;
      default:
        this.typeahead(event);
    }
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
      this.setActive(this.options().indexOf(o));
    }
  }

  /** The enabled option under an event target, or null. */
  private enabledOptionFrom(
    target: EventTarget | null,
  ): FoldOptionComponent | null {
    if (!(target instanceof Element)) {
      return null;
    }
    const el = target.closest("[role='option']");
    const o = this.options().find((opt) => opt.id === el?.id);
    return o && !o.disabled() ? o : null;
  }

  /** First (`dir` = 1) or last (`dir` = -1) enabled option index, or -1. */
  private edge(dir: 1 | -1): number {
    const opts = this.options();
    const order = [...opts.keys()];
    for (const idx of dir === 1 ? order : order.reverse()) {
      if (!opts[idx]?.disabled()) {
        return idx;
      }
    }
    return -1;
  }

  private armActive(): void {
    const selected = this.options().findIndex(
      (o) => o.value() === this.value() && !o.disabled(),
    );
    this.setActive(selected >= 0 ? selected : this.edge(1));
  }

  private move(delta: number): void {
    const opts = this.options();
    let i = this.activeIndex();
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
    this.activeIndex.set(index);
    this.options()[index]?.scrollIntoView();
  }

  private selectActive(): void {
    const o = this.options()[this.activeIndex()];
    if (o && !o.disabled()) {
      this.commit(o);
    }
  }

  private commit(option: FoldOptionComponent): void {
    this.value.set(option.value());
    this.touched.set(true);
    this.open.set(false);
  }

  private typeBuffer = "";
  private typeAt = 0;

  /** Multi-letter type-ahead: keystrokes within 500 ms accumulate, so "de" jumps
   *  to "Delete", not just the next "d". Mirrors the dropdown menu's behaviour. */
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
    const opts = this.options();
    const from = query.length === 1 ? 1 : 0;
    const current = Math.max(this.activeIndex(), 0);
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
