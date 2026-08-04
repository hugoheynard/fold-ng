import { Component, signal, ViewEncapsulation } from "@angular/core";

import {
  FoldButtonComponent,
  FoldPageLayoutComponent,
  FoldPageSectionComponent,
  FoldPanelFooterComponent,
  FoldPanelHostComponent,
  type FoldPanelHostService,
} from "../../../src/public-api";
import { KindBadgeComponent } from "../../components/kind-badge.component";
import { ComposedOfComponent } from "../../components/composed-of.component";
import { PanelScopeDirective } from "../../components/panel-scope.directive";
import { TabPanelComponent } from "../../components/tab-panel.component";

/** Options a demo trigger passes to `open()`. */
interface DemoPanelConfig {
  readonly side?: "left" | "right";
  readonly width?: number | "sm" | "md" | "lg" | "xl";
  readonly modal?: boolean;
  readonly surface?: "glass" | "solid";
  readonly disableClose?: boolean;
}

/**
 * `/panel` — the layout-owned side-panel region (`fold-panel-host` +
 * `FoldPanelHostService`). Not a standalone component: panels are opened
 * imperatively through the layout. Demoed inside a bounded stage so the panel
 * slides within the page, not the whole gallery.
 */
@Component({
  selector: "gal-panel-page",
  standalone: true,
  imports: [
    KindBadgeComponent,
    ComposedOfComponent,
    PanelScopeDirective,
    FoldPanelHostComponent,
    FoldButtonComponent,
    FoldPanelFooterComponent,
    FoldPageLayoutComponent,
    FoldPageSectionComponent,
  ],
  templateUrl: "./panel.page.html",
  styleUrl: "./panel.page.scss",
  encapsulation: ViewEncapsulation.None,
})
export default class PanelPage {
  /** Background click counter — proves interactivity survives a non-modal panel. */
  protected readonly count = signal(0);

  protected bump(): void {
    this.count.update((n) => n + 1);
  }

  /** Open the demo panel in the stage's own scoped host, with the given options. */
  protected open(host: FoldPanelHostService, config: DemoPanelConfig): void {
    host.open(TabPanelComponent, { side: "right", width: 260, ...config });
  }

  protected readonly openCode = `host.open(MyPanel, { side: 'right' });        // modal · glass · md (defaults)
host.open(MyPanel, { side: 'left', width: 'lg' });  // named size — sm·md·lg·xl (or a px number)`;

  protected readonly behaviorCode = `// Non-modal: the page keeps scrolling & stays interactive,
// focus isn't trapped, and clicking outside does NOT close it.
host.open(MyPanel, { modal: false });

// Opaque sheet instead of the frosted-glass default.
host.open(MyPanel, { surface: 'solid' });

// Guard the casual close: Escape + backdrop no longer dismiss.
// The header close button & FoldPanelRef.close() still work.
host.open(MyPanel, { disableClose: true });`;

  protected readonly footerCode = `<!-- default: Annuler/Confirmer pushed to the trailing edge -->
<fold-panel-footer>
  <button foldButton emphasis="outline" intent="neutral" (click)="cancel()">Annuler</button>
  <button foldButton (click)="save()">Enregistrer</button>
</fold-panel-footer>

<!-- between: a leading block (a running total) + trailing actions -->
<fold-panel-footer align="between">
  <span>Total {{ "{{" }} total {{ "}}" }}</span>
  <button foldButton (click)="checkout()">Commander</button>
</fold-panel-footer>`;

  protected readonly dataCode = `// A required data input — data must be passed.
export class UserPanel implements FoldPanelContent<User> {
  readonly data = input.required<User>();
}
host.open(UserPanel, { data: user });   // T inferred from the value

// An OPTIONAL data input — same call, no manual <T | undefined> widen…
export class NotePanel implements FoldPanelContent<Note> {
  readonly data = input<Note>();        // InputSignal<Note | undefined>
}
host.open(NotePanel, { data: note });   // ✓ infers Note from the value
host.open(NotePanel);                    // ✓ …and can open data-less too

// The data VALUE is still type-checked — a wrong shape is rejected:
host.open(UserPanel, { data: 42 });     // ✗ compile error`;

  protected readonly cascadeCode = `// 1 · app identity — set once at bootstrap (lowest priority)
providers: [provideFoldPanelDefaults({ surface: 'solid' })];

// 2 · the panel's intrinsic nature — declared once on the class
export class CartPanel implements FoldPanelContent<CartData> {
  static readonly foldPanel: FoldPanelDefaults = { modal: false, surface: 'solid' };
}

// 3 · call site is now just the *what* — no repeated *how*
host.open(CartPanel, { data });          // modal:false + solid, from the class
host.open(CartPanel, { modal: true });   // a one-off still wins`;
}
