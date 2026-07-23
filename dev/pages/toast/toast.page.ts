import { Component, inject, signal } from "@angular/core";
import { KindBadgeComponent } from "../../kind-badge.component";
import {
  FoldTabLayoutComponent,
  FoldChoiceRowComponent,
  FoldIconComponent,
  FoldPageLayoutComponent,
  FoldPageSectionComponent,
  FoldTabNavComponent,
  FoldToastComponent,
  FoldToastService,
  type FoldChoiceOption,
  type FoldTabNavItem,
  type FoldToastVariant,
} from "../../../src/index";

/** `/toast` — the `fold-toast` gallery page (variants · behavior · usage). */
@Component({
  selector: "gal-toast-page",
  standalone: true,
  imports: [
    KindBadgeComponent,
    FoldPageLayoutComponent,
    FoldTabLayoutComponent,
    FoldPageSectionComponent,
    FoldTabNavComponent,
    FoldToastComponent,
    FoldChoiceRowComponent,
    FoldIconComponent,
  ],
  templateUrl: "./toast.page.html",
})
export default class ToastPage {
  private readonly toastService = inject(FoldToastService);
  private toastSeq = 0;

  protected readonly toastTabs: FoldTabNavItem[] = [
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
  ] as const satisfies readonly FoldToastVariant[];
  protected readonly toastMessages: Record<FoldToastVariant, string> = {
    success: "Track uploaded",
    info: "Sync in progress",
    warning: "Storage almost full",
    error: "Upload failed",
  };
  protected readonly toastIcons: Record<
    FoldToastVariant,
    "check-circle" | "info" | "warning" | "x-circle"
  > = {
    success: "check-circle",
    info: "info",
    warning: "warning",
    error: "x-circle",
  };
  protected readonly demoToastOpen = signal(true);
  protected readonly toastDurationOptions: FoldChoiceOption[] = [
    { key: "2000", label: "2s" },
    { key: "4000", label: "4s" },
    { key: "0", label: "sticky" },
  ];
  protected readonly toastDuration = signal("4000");

  protected fireToast(variant: FoldToastVariant): void {
    this.toastSeq += 1;
    this.toastService.show(
      `${this.toastMessages[variant]} (#${this.toastSeq})`,
      variant,
      Number(this.toastDuration()),
    );
  }

  protected readonly toastFireCode = [
    "const toast = inject(FoldToastService);",
    "",
    'toast.show("Track uploaded", "success");      // policy duration',
    'toast.show("Upload failed", "error", 8000);   // explicit override (ms)',
    'toast.show("Action required", "warning", 0);  // 0 = sticky',
  ].join("\n");
  protected readonly toastConfigCode = [
    "// app.config.ts — providers: [ … ]",
    "provideFoldToasts({",
    "  defaultDurationMs: 4000,",
    "  durationByVariant: { success: 2000, error: 0 }, // 0 = sticky",
    "}),",
  ].join("\n");
  protected readonly toastStandaloneCode = [
    "<fold-toast",
    '  variant="success"',
    '  duration="3000"',
    '  (dismiss)="onClose()"',
    ">Track uploaded</fold-toast>",
  ].join("\n");
}
