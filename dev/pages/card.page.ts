import { Component } from "@angular/core";
import { Sh3CardComponent, Sh3PageLayoutComponent } from "../../src/index";

/** `/card` — the `sh3-card` gallery page. */
@Component({
  selector: "gal-card-page",
  standalone: true,
  imports: [Sh3PageLayoutComponent, Sh3CardComponent],
  template: `<sh3-page-layout fluid title="card">
    <div class="gal-row gal-row--wide">
      <sh3-card>card (default)</sh3-card>
      <sh3-card surface="sunken">sunken</sh3-card>
      <sh3-card radius="sm" padding="sm">radius sm · padding sm</sh3-card>
    </div>
  </sh3-page-layout>`,
})
export default class CardPage {}
