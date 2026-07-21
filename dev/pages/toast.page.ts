import { Component, inject, signal } from "@angular/core";
import { KindBadgeComponent } from "../kind-badge.component";
import {
  Sh3TabLayoutComponent,
  Sh3ChoiceRowComponent,
  Sh3IconComponent,
  Sh3PageLayoutComponent,
  Sh3PageSectionComponent,
  Sh3TabNavComponent,
  Sh3ToastComponent,
  Sh3ToastService,
  type Sh3ChoiceOption,
  type Sh3TabNavItem,
  type Sh3ToastVariant,
} from "../../src/index";

/** `/toast` — the `sh3-toast` gallery page (variants · behavior · usage). */
@Component({
  selector: "gal-toast-page",
  standalone: true,
  imports: [
    KindBadgeComponent,
    Sh3PageLayoutComponent,
    Sh3TabLayoutComponent,
    Sh3PageSectionComponent,
    Sh3TabNavComponent,
    Sh3ToastComponent,
    Sh3ChoiceRowComponent,
    Sh3IconComponent,
  ],
  templateUrl: "./toast.page.html",
})
export default class ToastPage {
  private readonly toastService = inject(Sh3ToastService);
  private toastSeq = 0;

  protected readonly toastTabs: Sh3TabNavItem[] = [
    { key: "variants", label: "Variants" },
    { key: "behavior", label: "Behavior" },
    { key: "usage", label: "Usage" },
  ];
  protected readonly toastTab = signal("variants");

  protected readonly toastVariants = [
    "success",
    "info",
    "warning",
    "error",
  ] as const satisfies readonly Sh3ToastVariant[];
  protected readonly toastMessages: Record<Sh3ToastVariant, string> = {
    success: "Track uploaded",
    info: "Sync in progress",
    warning: "Storage almost full",
    error: "Upload failed",
  };
  protected readonly toastIcons: Record<
    Sh3ToastVariant,
    "check-circle" | "info" | "warning" | "x-circle"
  > = {
    success: "check-circle",
    info: "info",
    warning: "warning",
    error: "x-circle",
  };
  protected readonly demoToastOpen = signal(true);
  protected readonly toastDurationOptions: Sh3ChoiceOption[] = [
    { key: "2000", label: "2s" },
    { key: "4000", label: "4s" },
    { key: "0", label: "sticky" },
  ];
  protected readonly toastDuration = signal("4000");

  protected fireToast(variant: Sh3ToastVariant): void {
    this.toastSeq += 1;
    this.toastService.show(
      `${this.toastMessages[variant]} (#${this.toastSeq})`,
      variant,
      Number(this.toastDuration()),
    );
  }

  protected readonly toastFireCode = [
    "const toast = inject(Sh3ToastService);",
    "",
    'toast.show("Track uploaded", "success");      // policy duration',
    'toast.show("Upload failed", "error", 8000);   // explicit override (ms)',
    'toast.show("Action required", "warning", 0);  // 0 = sticky',
  ].join("\n");
  protected readonly toastConfigCode = [
    "// app.config.ts — providers: [ … ]",
    "provideSh3Toasts({",
    "  defaultDurationMs: 4000,",
    "  durationByVariant: { success: 2000, error: 0 }, // 0 = sticky",
    "}),",
  ].join("\n");
  protected readonly toastStandaloneCode = [
    "<sh3-toast",
    '  variant="success"',
    '  duration="3000"',
    '  (dismiss)="onClose()"',
    ">Track uploaded</sh3-toast>",
  ].join("\n");
}
