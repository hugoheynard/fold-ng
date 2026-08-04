import { Component, signal } from "@angular/core";
import { KindBadgeComponent } from "../../components/kind-badge.component";
import { ComposedOfComponent } from "../../components/composed-of.component";
import {
  FoldDangerZoneComponent,
  FoldPageLayoutComponent,
  FoldPageSectionComponent,
} from "../../../src/public-api";

/** `/danger-zone` — the `fold-danger-zone` destructive-action block (filled ·
 *  section) with a reveal-on-click type-to-confirm. */
@Component({
  selector: "gal-danger-zone-page",
  standalone: true,
  imports: [
    KindBadgeComponent,
    ComposedOfComponent,
    FoldDangerZoneComponent,
    FoldPageLayoutComponent,
    FoldPageSectionComponent,
  ],
  templateUrl: "./danger-zone.page.html",
  styleUrl: "./danger-zone.page.scss",
})
export default class DangerZonePage {
  protected readonly workspaceName = "acme-prod";
  protected readonly log = signal<string | null>(null);

  protected fire(label: string): void {
    this.log.set(`${label} — fired ✓`);
  }

  protected readonly code = `<!-- section: normal-bg body, danger frame; confirm reveals on click -->
<fold-danger-zone
  appearance="section"
  title="Delete workspace"
  actionLabel="Delete workspace"
  [confirmPhrase]="workspace.name"
  (confirmed)="delete()"
>
  <p>This permanently deletes the workspace and everything in it. It cannot be undone.</p>
</fold-danger-zone>

<!-- filled + a plain (no-phrase) reveal-on-click confirm -->
<fold-danger-zone title="Leave organisation" actionLabel="Leave" (confirmed)="leave()">
  <p>You'll lose access to all shared workspaces.</p>
</fold-danger-zone>`;
}
