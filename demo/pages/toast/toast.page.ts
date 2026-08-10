import { Component, inject, signal, ViewEncapsulation } from "@angular/core";
import { KindBadgeComponent } from "../../components/kind-badge.component";
import { ComposedOfComponent } from "../../components/composed-of.component";
import {
  FoldNavLayoutComponent,
  FoldChoiceRowComponent,
  FoldIconComponent,
  FoldPageLayoutComponent,
  FoldPageSectionComponent,
  FoldViewNavComponent,
  FoldToastComponent,
  FoldToastService,
  type FoldChoiceOption,
  type FoldViewNavItem,
  type FoldToastVariant,
} from "../../../src/public-api";

/** `/toast` — the `fold-toast` gallery page (variants · behavior · usage). */
@Component({
  selector: "gal-toast-page",
  standalone: true,
  imports: [
    KindBadgeComponent,
    ComposedOfComponent,
    FoldPageLayoutComponent,
    FoldNavLayoutComponent,
    FoldPageSectionComponent,
    FoldViewNavComponent,
    FoldToastComponent,
    FoldChoiceRowComponent,
    FoldIconComponent,
  ],
  templateUrl: "./toast.page.html",
  styleUrl: "./toast.page.scss",
  encapsulation: ViewEncapsulation.None,
})
export default class ToastPage {
  private readonly toastService = inject(FoldToastService);
  private toastSeq = 0;

  protected readonly toastTabs: FoldViewNavItem[] = [
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

  /** No sequence suffix — the point is that the message is *identical*. */
  protected fireSameToast(): void {
    this.toastService.show(
      "Network unreachable",
      "error",
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
    "  maxVisible: 4,   // beyond it the oldest is evicted",
    "  dedupe: true,    // default — an identical live message tallies ×N",
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
