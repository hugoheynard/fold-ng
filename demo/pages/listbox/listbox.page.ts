import { Component, computed, signal } from "@angular/core";
import { KindBadgeComponent } from "../../components/kind-badge.component";
import { ComposedOfComponent } from "../../components/composed-of.component";
import {
  FoldCardComponent,
  FoldListboxComponent,
  FoldMultiselectComponent,
  FoldOptionComponent,
  FoldPageLayoutComponent,
  FoldSelectComponent,
} from "../../../src/public-api";

interface Team {
  readonly value: string;
  readonly name: string;
  readonly desc: string;
  readonly tone: "ok" | "warn" | "off";
}

/** `/listbox` — the styleable `fold-listbox` single-select gallery page. */
@Component({
  selector: "gal-listbox-page",
  standalone: true,
  imports: [
    KindBadgeComponent,
    ComposedOfComponent,
    FoldPageLayoutComponent,
    FoldCardComponent,
    FoldListboxComponent,
    FoldMultiselectComponent,
    FoldOptionComponent,
    FoldSelectComponent,
  ],
  templateUrl: "./listbox.page.html",
  styleUrl: "./listbox.page.scss",
})
export default class ListboxPage {
  /* ── basic single-select ── */
  protected readonly currency = signal("EUR");

  /* ── custom-rendered rows (the reason to pick listbox over native) ── */
  protected readonly team = signal("");
  protected readonly teams: readonly Team[] = [
    { value: "prod", name: "Production", desc: "Scène & régie", tone: "ok" },
    {
      value: "hosp",
      name: "Hospitality",
      desc: "Accueil artistes",
      tone: "ok",
    },
    {
      value: "com",
      name: "Communication",
      desc: "Presse & réseaux",
      tone: "warn",
    },
    {
      value: "sec",
      name: "Sécurité",
      desc: "Complet — plus de place",
      tone: "off",
    },
  ];
  protected readonly teamName = computed(
    () => this.teams.find((t) => t.value === this.team())?.name ?? "—",
  );

  /* ── multi-select (toggle, panel stays open) ── */
  protected readonly genres = signal<readonly string[]>(["rock", "jazz"]);

  /* ── vs. the native wrapper, side by side ── */
  protected readonly nativeCurrency = signal("EUR");

  /* ── sizes ── */
  protected readonly sized = signal("md");
}
