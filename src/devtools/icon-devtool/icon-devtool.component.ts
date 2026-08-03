import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  output,
  signal,
} from "@angular/core";
import { FoldIconRegistry } from "../../components/foundations/icon/icon-registry.service";
import { FoldIconComponent } from "../../components/foundations/icon/icon.component";
import { FoldButtonIconComponent } from "../../components/actions/button-icon/button-icon.component";

/** A draggable panel position, in viewport pixels (top-left origin). `null`
 *  until the first drag — the panel sits in its default corner via CSS. */
interface DevtoolPos {
  readonly x: number;
  readonly y: number;
}

const SIZE_STEPS = ["xs", "sm", "md", "lg", "xl"] as const;
type IconSize = (typeof SIZE_STEPS)[number];

/**
 * `<fold-icon-devtool>` — a **dev-only** floating panel that browses the live
 * {@link FoldIconRegistry} (built-ins + whatever the host app has registered),
 * with a search, a preview grid, and a mini playground that builds a
 * `<fold-icon>` snippet and copies it to the clipboard. The panel is **draggable**
 * (grab the header) and **minimisable** (collapses to a pill).
 *
 * **Ship it behind a dev guard.** It is published from the opt-in `fold-ng/devtools`
 * entry so it never lands in a bundle that doesn't ask for it; import it only on a
 * dev path so a production build tree-shakes it away:
 *
 * ```ts
 * import { isDevMode, signal } from "@angular/core";
 * protected readonly showIconTool = signal(false);
 * // template: @if (showIconTool()) { <fold-icon-devtool (closed)="showIconTool.set(false)" /> }
 * // …and only reach the import behind `if (isDevMode())`.
 * ```
 *
 * @selector `fold-icon-devtool`
 */
@Component({
  selector: "fold-icon-devtool",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FoldIconComponent, FoldButtonIconComponent],
  templateUrl: "./icon-devtool.component.html",
  styleUrl: "./icon-devtool.component.scss",
  host: {
    role: "dialog",
    "aria-label": "Icon devtool",
    "[class.minimized]": "minimized()",
    "[style.left.px]": "pos()?.x ?? null",
    "[style.top.px]": "pos()?.y ?? null",
    "[class.docked]": "pos() === null",
  },
})
export class FoldIconDevtoolComponent {
  private readonly registry = inject(FoldIconRegistry);

  /** Emitted when the user closes the panel — the host should stop rendering it. */
  readonly closed = output();

  protected readonly sizeSteps = SIZE_STEPS;

  /** Collapsed to a pill (header only). */
  protected readonly minimized = signal(false);
  /** Free-drag position; `null` = docked in the default corner (CSS). */
  protected readonly pos = signal<DevtoolPos | null>(null);

  /** The live registry names (built-ins + host-registered), sorted. */
  private readonly allNames = computed(() => this.registry.names());

  protected readonly query = signal("");
  /** Names matching the search (case-insensitive substring). */
  protected readonly matches = computed(() => {
    const q = this.query().trim().toLowerCase();
    const names = this.allNames();
    return q ? names.filter((n) => n.includes(q)) : names;
  });

  /** The icon selected into the playground (empty = none). */
  protected readonly selected = signal("");
  /** Playground size preset. */
  protected readonly size = signal<IconSize>("md");

  /** The snippet the copy button writes — size only emitted when non-default. */
  protected readonly snippet = computed(() => {
    const name = this.selected();
    if (!name) {
      return "";
    }
    const size = this.size();
    return size === "md"
      ? `<fold-icon name="${name}" />`
      : `<fold-icon name="${name}" size="${size}" />`;
  });

  /** Flashes true briefly after a successful copy. */
  protected readonly copied = signal(false);

  protected select(name: string): void {
    this.selected.set(name);
  }

  protected setSize(size: IconSize): void {
    this.size.set(size);
  }

  protected onSearch(event: Event): void {
    const target = event.target;
    if (target instanceof HTMLInputElement) {
      this.query.set(target.value);
    }
  }

  protected copy(): void {
    const snippet = this.snippet();
    if (!snippet) {
      return;
    }
    void navigator.clipboard.writeText(snippet).then(() => {
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 1200);
    });
  }

  protected toggleMinimize(): void {
    this.minimized.update((m) => !m);
  }

  protected close(): void {
    this.closed.emit();
  }

  // ── Drag (grab the header) ────────────────────────────────────────────
  private dragDx = 0;
  private dragDy = 0;

  protected onDragStart(event: PointerEvent): void {
    const target = event.target;
    const handle = event.currentTarget;
    if (!(target instanceof HTMLElement) || !(handle instanceof HTMLElement)) {
      return;
    }
    // Ignore drags that start on an interactive header control.
    if (target.closest("button")) {
      return;
    }
    const host = handle.closest("fold-icon-devtool");
    if (!host) {
      return;
    }
    const rect = host.getBoundingClientRect();
    this.dragDx = event.clientX - rect.left;
    this.dragDy = event.clientY - rect.top;
    handle.setPointerCapture(event.pointerId);
    event.preventDefault();
  }

  protected onDragMove(event: PointerEvent): void {
    const handle = event.currentTarget;
    if (
      !(handle instanceof HTMLElement) ||
      !handle.hasPointerCapture(event.pointerId)
    ) {
      return;
    }
    const width = window.innerWidth;
    const height = window.innerHeight;
    const x = Math.max(0, Math.min(event.clientX - this.dragDx, width - 40));
    const y = Math.max(0, Math.min(event.clientY - this.dragDy, height - 40));
    this.pos.set({ x, y });
  }

  protected onDragEnd(event: PointerEvent): void {
    const handle = event.currentTarget;
    if (
      handle instanceof HTMLElement &&
      handle.hasPointerCapture(event.pointerId)
    ) {
      handle.releasePointerCapture(event.pointerId);
    }
  }
}
