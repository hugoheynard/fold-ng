import { Component, computed, signal } from "@angular/core";
import { KindBadgeComponent } from "../../components/kind-badge.component";
import { ComposedOfComponent } from "../../components/composed-of.component";
import { DevPlaygroundComponent } from "../../components/playground.component";
import {
  FoldPageLayoutComponent,
  FoldPageSectionComponent,
  FoldPasswordFieldComponent,
} from "../../../src/public-api";

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

  protected readonly code = computed(() =>
    [
      "<fold-password-field",
      '  label="New password"',
      ...(this.revealable() ? [] : ['  [revealable]="false"']),
      '  [(value)]="password"',
      '  (validChange)="ok.set($event)"',
      "/>",
    ].join("\n"),
  );
}
