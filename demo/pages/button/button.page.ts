import { Component, signal, ViewEncapsulation } from "@angular/core";
import { KindBadgeComponent } from "../../components/kind-badge.component";
import { ComposedOfComponent } from "../../components/composed-of.component";
import {
  FoldButtonComponent,
  FoldCalloutComponent,
  FoldCardComponent,
  FoldIconComponent,
  FoldPageLayoutComponent,
  FoldPageSectionComponent,
  type FoldButtonEmphasis,
  type FoldButtonIntent,
  type FoldButtonSize,
} from "../../../src/public-api";
import type { FoldIconName } from "../../../src/public-api";

interface ButtonFeature {
  readonly icon: FoldIconName;
  readonly title: string;
  readonly body: string;
}

/** `/button` — the `[foldButton]` system: why it holds up, the emphasis × intent
 *  matrix, usage, and the states (loading, disabled, link-as-button). */
@Component({
  selector: "gal-button-page",
  standalone: true,
  imports: [
    KindBadgeComponent,
    ComposedOfComponent,
    FoldPageLayoutComponent,
    FoldPageSectionComponent,
    FoldCardComponent,
    FoldCalloutComponent,
    FoldButtonComponent,
    FoldIconComponent,
  ],
  templateUrl: "./button.page.html",
  styleUrl: "./button.page.scss",
  encapsulation: ViewEncapsulation.None,
})
export default class ButtonPage {
  protected readonly emphases: FoldButtonEmphasis[] = [
    "solid",
    "soft",
    "outline",
  ];
  protected readonly intents: FoldButtonIntent[] = [
    "primary",
    "neutral",
    "warning",
    "danger",
  ];
  protected readonly buttonSizes: FoldButtonSize[] = ["sm", "md", "lg"];

  protected readonly buttonClicks = signal(0);
  protected readonly busy = signal(false);

  protected readonly features: readonly ButtonFeature[] = [
    {
      icon: "code",
      title: "Native host",
      body: "It's an attribute on a real <button> or <a> — so type, disabled, form submit, href and routerLink all come from the platform, not a re-implementation.",
    },
    {
      icon: "grid",
      title: "Two orthogonal axes",
      body: "emphasis (how loud) × intent (what it means). Every cell is expressible — a quiet outline, a soft warning, a filled destructive CTA — from N+M rules, not N×M.",
    },
    {
      icon: "reload",
      title: "Loading, built in",
      body: "loading swaps the leading glyph for a spinner, sets aria-busy, and blocks activation — while staying lit, not dimmed. No width jump; the spinner is icon-sized.",
    },
    {
      icon: "arrow-right",
      title: "Link as a button",
      body: "<a foldButton routerLink> is a real anchor that looks like a button — open-in-new-tab, middle-click, and screen-reader semantics intact. No second component.",
    },
    {
      icon: "shield",
      title: "Accessible by default",
      body: "focus-visible ring, prefers-reduced-motion, and forced-colors (Windows high-contrast) are all honoured; a disabled anchor gets aria-disabled + a non-interactive surface.",
    },
    {
      icon: "palette",
      title: "Token-only surface",
      body: "Every colour is a --fold-* role resolved through a --b-* engine, so the whole matrix reskins with the theme — never a hard-coded hex.",
    },
  ];

  protected readonly usageCode = `<!-- defaults: soft + primary -->
<button foldButton (click)="save()">Save</button>

<!-- the two axes, set independently -->
<button foldButton emphasis="solid" intent="danger">Delete</button>
<button foldButton emphasis="outline" intent="neutral">Cancel</button>

<!-- a link that looks like a button -->
<a foldButton routerLink="/contracts">Contracts</a>

<!-- busy + form submit -->
<button foldButton [loading]="saving()" type="submit">Submit</button>`;
}
