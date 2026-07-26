import { Component, computed, signal } from "@angular/core";
import { KindBadgeComponent } from "../../components/kind-badge.component";
import { ComposedOfComponent } from "../../components/composed-of.component";
import { DevPlaygroundComponent } from "../../components/playground.component";
import {
  FoldPageLayoutComponent,
  FoldPageSectionComponent,
  FoldPasswordFieldComponent,
} from "../../../src/public-api";

type Design = "default" | "ticks" | "custom";

/** `/password` — the `fold-password-field` gallery page. */
@Component({
  selector: "gal-password-page",
  standalone: true,
  imports: [
    KindBadgeComponent,
    ComposedOfComponent,
    DevPlaygroundComponent,
    FoldPageLayoutComponent,
    FoldPageSectionComponent,
    FoldPasswordFieldComponent,
  ],
  templateUrl: "./password.page.html",
  styleUrl: "./password.page.scss",
})
export default class PasswordPage {
  protected readonly value = signal("");
  protected readonly valid = signal(false);
  protected readonly revealable = signal(true);
  /** Which checklist rendering the playground shows — the built-in dots, or a
   *  custom projection (inline chips). */
  protected readonly design = signal<Design>("default");

  /** Static snippet for the "Injecting rules" section — regex + zod, no deps. */
  protected readonly rulesExample = [
    "import { foldRegexRule, type FoldPasswordRule } from 'fold-ng';",
    "",
    "rules: FoldPasswordRule[] = [",
    "  { label: 'At least 12 characters', test: (v) => v.length >= 12 },",
    "  foldRegexRule('A symbol', /[^A-Za-z0-9]/),",
    "  // zod (no dependency added by fold-ng):",
    "  { label: 'Valid', test: (v) => schema.safeParse(v).success },",
    "];",
  ].join("\n");

  protected readonly code = computed(() => {
    const reveal = this.revealable() ? [] : ['  [revealable]="false"'];
    if (this.design() !== "custom") {
      const marker = this.design() === "ticks" ? ['  marker="check"'] : [];
      return [
        "<fold-password-field",
        '  label="New password"',
        ...marker,
        ...reveal,
        '  [(value)]="password"',
        '  (validChange)="ok.set($event)"',
        "/>",
      ].join("\n");
    }
    return [
      '<fold-password-field #pw="foldPasswordField"',
      '  label="New password"',
      ...reveal,
      '  [(value)]="password"',
      ">",
      '  <div rules class="chips">',
      "    @for (rule of pw.checklist(); track rule.label) {",
      '      <span [class.is-met]="rule.met">{{ rule.label }}</span>',
      "    }",
      "  </div>",
      "</fold-password-field>",
    ].join("\n");
  });
}
