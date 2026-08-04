import { Component, signal } from "@angular/core";
import { KindBadgeComponent } from "../../components/kind-badge.component";
import { ComposedOfComponent } from "../../components/composed-of.component";
import { DevPlaygroundComponent } from "../../components/playground.component";
import {
  FoldButtonComponent,
  FoldDangerZoneComponent,
  FoldPageLayoutComponent,
  FoldPageSectionComponent,
} from "../../../src/public-api";

/** `/danger-zone` — the `fold-danger-zone` destructive-action block (framed +
 *  type-to-confirm), with a live gated demo and a no-gate variant. */
@Component({
  selector: "gal-danger-zone-page",
  standalone: true,
  imports: [
    KindBadgeComponent,
    ComposedOfComponent,
    DevPlaygroundComponent,
    FoldPageLayoutComponent,
    FoldPageSectionComponent,
    FoldButtonComponent,
    FoldDangerZoneComponent,
  ],
  templateUrl: "./danger-zone.page.html",
  styleUrl: "./danger-zone.page.scss",
})
export default class DangerZonePage {
  /** The phrase the gated demo asks the user to retype. */
  protected readonly workspaceName = "acme-prod";
  protected readonly armed = signal(false);
  protected readonly armedNoGate = signal(false);
  protected readonly log = signal<string | null>(null);

  protected fire(label: string): void {
    this.log.set(`${label} — fired ✓`);
  }

  protected readonly code = `<fold-danger-zone
  title="Delete workspace"
  [confirmPhrase]="workspace.name"
  [(armed)]="armed"
>
  <p>This permanently deletes the workspace and everything in it. It cannot be undone.</p>

  <button foldButton emphasis="solid" intent="danger" actions
          [disabled]="!armed()" (click)="delete()">
    Delete workspace
  </button>
</fold-danger-zone>`;
}
