import { Component, computed, signal } from "@angular/core";
import { KindBadgeComponent } from "../kind-badge.component";
import {
  Sh3BadgeComponent,
  Sh3CardComponent,
  Sh3PageLayoutComponent,
  Sh3PageSectionComponent,
  Sh3SliderComponent,
  Sh3TimelineComponent,
  type Sh3TimelineDatePlacement,
  type Sh3TimelineNode,
} from "../../src/index";
import { DevPlaygroundComponent } from "../playground.component";

/** `/timeline` — the `sh3-timeline` gallery page (both orientations + playground). */
@Component({
  selector: "gal-timeline-page",
  standalone: true,
  host: { class: "gal-page" },
  imports: [
    KindBadgeComponent,
    Sh3PageLayoutComponent,
    Sh3PageSectionComponent,
    Sh3CardComponent,
    Sh3TimelineComponent,
    Sh3BadgeComponent,
    Sh3SliderComponent,
    DevPlaygroundComponent,
  ],
  templateUrl: "./timeline.page.html",
})
export default class TimelinePage {
  /* ── static demos ── */
  protected readonly tlClicked = signal<string | null>(null);
  protected readonly tlNodes: readonly Sh3TimelineNode[] = [
    {
      key: "start",
      id: null,
      label: "Contract signed",
      date: new Date("2024-01-15"),
      icon: "contracts",
    },
    {
      key: "a1",
      id: "a1",
      label: "Salary raise +6%",
      date: new Date("2024-06-01"),
      icon: "edit",
    },
    {
      key: "a2",
      id: "a2",
      label: "Extended to full-time",
      date: new Date("2024-11-20"),
      icon: "edit",
    },
  ];

  /** Same primitive, horizontal: a progress stepper driven by `done` + `progress`. */
  protected readonly tlSteps: readonly Sh3TimelineNode[] = [
    { key: "created", id: null, label: "Created", done: true, icon: "check" },
    {
      key: "company",
      id: null,
      label: "Company signed",
      done: true,
      icon: "check",
    },
    { key: "employee", id: null, label: "Employee signed", done: false },
    { key: "active", id: null, label: "Active", done: false },
  ];

  /** Custom-content demo: a `state` per node drives a projected #node template. */
  protected readonly tlCustom: readonly Sh3TimelineNode[] = [
    { key: "created", id: null, label: "Créé", done: true, icon: "check" },
    {
      key: "company",
      id: null,
      label: "Signé société",
      done: true,
      icon: "check",
    },
    {
      key: "employee",
      id: "sign_employee",
      label: "Signé employé",
      clickable: true,
      state: "pending",
    },
    { key: "active", id: null, label: "Actif", state: "todo" },
  ];

  /* ── playground ── */
  protected readonly tlpOrientation = signal<"vertical" | "horizontal">(
    "horizontal",
  );
  protected readonly tlpDone = signal(2);
  protected readonly tlpSquare = signal(false);
  protected readonly tlpPlacements = [
    "above",
    "below",
    "inline",
    "hidden",
  ] as const satisfies readonly Sh3TimelineDatePlacement[];
  protected readonly tlpDatePlacement =
    signal<Sh3TimelineDatePlacement>("below");
  protected readonly tlpClickable = signal(false);
  protected readonly tlpVariant = signal<"plain" | "hollow">("plain");
  protected readonly tlpClicked = signal<string | null>(null);
  private readonly TLP_STEPS = [
    { label: "Created", date: "15 Jan" },
    { label: "Company signed", date: "18 Jan" },
    { label: "Employee signed", date: "22 Jan" },
    { label: "Active", date: "1 Feb" },
  ] as const;

  protected readonly tlpNodes = computed<readonly Sh3TimelineNode[]>(() => {
    if (this.tlpOrientation() === "vertical") {
      return this.tlNodes;
    }
    const done = this.tlpDone();
    const clickable = this.tlpClickable();
    return this.TLP_STEPS.map((step, i) => ({
      key: step.label,
      id: null,
      clickable,
      label: step.label,
      displayDate: i < done ? step.date : undefined,
      done: i < done,
      icon: i < done ? "check" : undefined,
    }));
  });

  protected readonly tlpProgress = computed(() => {
    const done = this.tlpDone();
    const n = this.TLP_STEPS.length;
    return done <= 0 ? 0 : Math.round(((done - 1) / (n - 1)) * 100);
  });

  protected readonly timelinePlaygroundCode = computed(() => {
    const horizontal = this.tlpOrientation() === "horizontal";
    const lines = ["<sh3-timeline"];
    if (horizontal) {
      lines.push('  orientation="horizontal"');
      lines.push('  ariaLabel="Signature progress"');
      if (this.tlpClickable()) {
        lines.push('  (nodeClick)="onStep($event)"');
      }
    } else {
      lines.push('  ariaLabel="Contract history"');
      lines.push('  nodeTitle="Go to item"');
      lines.push('  (nodeClick)="onNode($event)"');
    }
    if (this.tlpSquare()) {
      lines.push("  square");
    }
    if (this.tlpVariant() !== "plain") {
      lines.push('  variant="hollow"');
    }
    if (this.tlpDatePlacement() !== "below") {
      lines.push(`  datePlacement="${this.tlpDatePlacement()}"`);
    }
    lines.push('  [nodes]="nodes"', "/>");
    return lines.join("\n");
  });
}
