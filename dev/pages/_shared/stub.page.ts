import { Component, input } from "@angular/core";
import {
  FoldCardComponent,
  FoldPageLayoutComponent,
  type FoldIconName,
} from "../../../src/index";

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
  templateUrl: "./stub.page.html",
})
export class StubPage {
  readonly title = input<string>();
  readonly icon = input<FoldIconName>();
}
