import { Component } from "@angular/core";
import { Sh3PageLayoutComponent } from "../../src/index";
import { TokenPanelComponent } from "../token-panel.component";

/** `/tokens` — the "design tokens" gallery page (live token editor). */
@Component({
  selector: "gal-tokens-page",
  standalone: true,
  imports: [Sh3PageLayoutComponent, TokenPanelComponent],
  templateUrl: "./tokens.page.html",
})
export default class TokensPage {}
