import { Component, input } from "@angular/core";
import {
  FoldCardComponent,
  FoldPageLayoutComponent,
  type FoldIconName,
} from "../../src/index";

/**
 * Placeholder page for a nav entry whose demos have not been ported to their own
 * routed page yet. Title + icon come from the route `data` (bound via
 * `withComponentInputBinding`), so every route already renders a real
 * `fold-page-layout` header while the content migrates in.
 */
@Component({
  selector: "gal-stub-page",
  standalone: true,
  imports: [FoldPageLayoutComponent, FoldCardComponent],
  template: `<fold-page-layout
    fluid
    [title]="title()"
    [icon]="icon()"
    description="Cette démo est en cours de migration vers sa propre page routée."
  >
    <fold-card
      surface="sunken"
      style="--fold-card-padding: 28px; text-align: center"
    >
      <p style="margin: 0; color: var(--fold-color-text-muted)">
        Contenu à migrer depuis l'ancienne galerie.
      </p>
    </fold-card>
  </fold-page-layout>`,
})
export class StubPage {
  readonly title = input<string>();
  readonly icon = input<FoldIconName>();
}
