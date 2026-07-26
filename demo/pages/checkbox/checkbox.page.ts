import { Component, computed, signal } from "@angular/core";
import { KindBadgeComponent } from "../../components/kind-badge.component";
import { DevPlaygroundComponent } from "../../components/playground.component";
import {
  FoldCardComponent,
  FoldCheckboxComponent,
  FoldPageLayoutComponent,
} from "../../../src/public-api";

/** `/checkbox` — the `fold-checkbox` gallery page (states, sizes, forms, select-all). */
@Component({
  selector: "gal-checkbox-page",
  standalone: true,
  imports: [
    KindBadgeComponent,
    DevPlaygroundComponent,
    FoldPageLayoutComponent,
    FoldCardComponent,
    FoldCheckboxComponent,
  ],
  templateUrl: "./checkbox.page.html",
})
export default class CheckboxPage {
  /* ── static state demos ── */
  protected readonly a = signal(false);
  protected readonly b = signal(true);

  /* ── select-all pattern (parent indeterminate over children) ── */
  protected readonly perms = signal<Record<string, boolean>>({
    read: true,
    write: false,
    admin: false,
  });
  protected readonly permKeys = ["read", "write", "admin"] as const;
  protected readonly allOn = computed(() =>
    this.permKeys.every((k) => this.perms()[k]),
  );
  protected readonly someOn = computed(
    () => !this.allOn() && this.permKeys.some((k) => this.perms()[k]),
  );
  protected setPerm(key: string, on: boolean): void {
    this.perms.update((p) => ({ ...p, [key]: on }));
  }
  protected toggleAll(): void {
    const target = !this.allOn();
    this.perms.set({ read: target, write: target, admin: target });
  }

  /* ── forms demo ── */
  protected readonly consent = signal(false);
  protected readonly consentTouched = signal(false);
  protected readonly consentErrors = computed(() =>
    this.consent()
      ? []
      : [{ message: "You must accept to continue", kind: "required" }],
  );

  /* ── playground ── */
  protected readonly pgChecked = signal(true);
  protected readonly pgIndeterminate = signal(false);
  protected readonly pgDisabled = signal(false);
  protected readonly pgRequired = signal(false);
  protected readonly pgSize = signal<"sm" | "md">("md");

  protected readonly playgroundCode = computed(() => {
    const lines = ["<fold-checkbox", '  label="Subscribe"'];
    if (this.pgSize() !== "md") {
      lines.push(`  size="${this.pgSize()}"`);
    }
    if (this.pgRequired()) {
      lines.push("  required");
    }
    if (this.pgIndeterminate()) {
      lines.push('  [indeterminate]="true"');
    }
    if (this.pgDisabled()) {
      lines.push('  [disabled]="true"');
    }
    lines.push('  [(checked)]="subscribe"', "/>");
    return lines.join("\n");
  });
}
