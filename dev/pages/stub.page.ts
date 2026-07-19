import { Component, input } from "@angular/core";
import {
  Sh3CardComponent,
  Sh3PageLayoutComponent,
  type Sh3IconName,
} from "../../src/index";

/**
 * Placeholder page for a nav entry whose demos have not been ported to their own
 * routed page yet. Title + icon come from the route `data` (bound via
 * `withComponentInputBinding`), so every route already renders a real
 * `sh3-page-layout` header while the content migrates in.
 */
@Component({
  selector: "gal-stub-page",
  standalone: true,
  host: { class: "gal-page" },
  imports: [Sh3PageLayoutComponent, Sh3CardComponent],
  template: `<sh3-page-layout
    fluid
    [title]="title()"
    [icon]="icon()"
    description="Cette démo est en cours de migration vers sa propre page routée."
  >
    <sh3-card surface="sunken" style="padding: 28px; text-align: center">
      <p style="margin: 0; color: var(--sh3-color-text-muted)">
        Contenu à migrer depuis l'ancienne galerie.
      </p>
    </sh3-card>
  </sh3-page-layout>`,
})
export class StubPage {
  readonly title = input<string>();
  readonly icon = input<Sh3IconName>();
}
