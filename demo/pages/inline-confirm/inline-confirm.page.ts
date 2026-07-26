import { Component, computed, signal } from "@angular/core";
import { KindBadgeComponent } from "../../components/kind-badge.component";
import { ComposedOfComponent } from "../../components/composed-of.component";
import { DevPlaygroundComponent } from "../../components/playground.component";
import {
  FoldButtonComponent,
  FoldButtonIconComponent,
  FoldCardComponent,
  FoldInlineConfirmComponent,
  FoldPageLayoutComponent,
  type FoldButtonIntent,
  type FoldIconName,
} from "../../../src/public-api";

type Family = "simple" | "type" | "password";
type CancelChoice = "label" | "close" | "reset";

/** `/inline-confirm` — the `fold-inline-confirm` gallery page (simple, type, secret). */
@Component({
  selector: "gal-inline-confirm-page",
  standalone: true,
  imports: [
    KindBadgeComponent,
    ComposedOfComponent,
    DevPlaygroundComponent,
    FoldPageLayoutComponent,
    FoldCardComponent,
    FoldButtonComponent,
    FoldButtonIconComponent,
    FoldInlineConfirmComponent,
  ],
  templateUrl: "./inline-confirm.page.html",
  styleUrl: "./inline-confirm.page.scss",
})
export default class InlineConfirmPage {
  /* ── demo rows: a tiny deletable list ── */
  protected readonly rows = signal(["Spring tour", "Summer festival", "Gala"]);
  protected remove(name: string): void {
    this.rows.update((list) => list.filter((r) => r !== name));
  }
  protected resetRows(): void {
    this.rows.set(["Spring tour", "Summer festival", "Gala"]);
  }

  /* ── last emitted value, so the type/secret families are observable ── */
  protected readonly lastConfirm = signal<string | null>(null);
  protected onConfirm(value: string): void {
    this.lastConfirm.set(value === "" ? "(confirmed)" : value);
  }

  /* ── playground ── */
  protected readonly families: readonly Family[] = [
    "simple",
    "type",
    "password",
  ];
  protected readonly intents: readonly FoldButtonIntent[] = [
    "danger",
    "warning",
    "primary",
    "neutral",
  ];
  protected readonly cancelChoices: readonly CancelChoice[] = [
    "label",
    "close",
    "reset",
  ];
  protected readonly confirmIcons: readonly FoldIconName[] = ["bin", "check"];
  protected readonly pgFamily = signal<Family>("simple");
  protected readonly pgIntent = signal<FoldButtonIntent>("danger");
  protected readonly pgCancel = signal<CancelChoice>("label");
  protected readonly pgConfirmIcon = signal<FoldIconName | undefined>(
    undefined,
  );
  protected readonly pgMessage = signal(true);
  protected readonly pgLoading = signal(false);
  protected readonly pgLog = signal<string | null>(null);

  protected readonly pgMatch = computed(() =>
    this.pgFamily() === "type" ? "delete" : "",
  );
  protected readonly pgPassword = computed(
    () => this.pgFamily() === "password",
  );
  /** `label` → no icon (undefined); a choice → that icon name. */
  protected readonly pgCancelIcon = computed<FoldIconName | undefined>(() => {
    const c = this.pgCancel();
    return c === "close" ? "close" : c === "reset" ? "reset" : undefined;
  });

  protected toggleConfirmIcon(icon: FoldIconName): void {
    this.pgConfirmIcon.update((cur) => (cur === icon ? undefined : icon));
  }

  protected onPlaygroundConfirm(value: string): void {
    this.pgLog.set(value === "" ? "confirmed" : `confirmed → “${value}”`);
  }

  protected readonly playgroundCode = computed(() => {
    const lines = ["<fold-inline-confirm"];
    if (this.pgIntent() !== "danger") {
      lines.push(`  intent="${this.pgIntent()}"`);
    }
    if (this.pgFamily() === "type") {
      lines.push(`  [match]="project.name"`);
    }
    if (this.pgFamily() === "password") {
      lines.push("  password");
    }
    if (this.pgMessage()) {
      lines.push('  message="This can\'t be undone."');
    }
    const confirmIcon = this.pgConfirmIcon();
    if (confirmIcon) {
      lines.push(`  confirmIcon="${confirmIcon}"`);
    }
    const cancelIcon = this.pgCancelIcon();
    if (cancelIcon) {
      lines.push(`  cancelIcon="${cancelIcon}"`);
    }
    if (this.pgLoading()) {
      lines.push('  [loading]="pending()"');
    }
    lines.push('  (confirmed)="onConfirm($event)">');
    lines.push('  <button foldButton intent="danger">Delete</button>');
    lines.push("</fold-inline-confirm>");
    return lines.join("\n");
  });
}
