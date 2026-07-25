import { Component, computed, signal, ViewEncapsulation } from "@angular/core";
import { KindBadgeComponent } from "../../components/kind-badge.component";
import { DevPlaygroundComponent } from "../../components/playground.component";
import {
  FoldLinkComponent,
  FoldPageLayoutComponent,
  FoldPageSectionComponent,
  type FoldIconName,
} from "../../../src/public-api";

type LinkTone = "accent" | "muted";
type LinkMode = "anchor" | "button";

/** `/link` — the `fold-link` gallery page: a composition playground + a set of
 *  real-world compositions (inline in prose, back-link, external, CTA…). */
@Component({
  selector: "gal-link-page",
  standalone: true,
  imports: [
    KindBadgeComponent,
    DevPlaygroundComponent,
    FoldPageLayoutComponent,
    FoldPageSectionComponent,
    FoldLinkComponent,
  ],
  templateUrl: "./link.page.html",
  styleUrl: "./link.page.scss",
  encapsulation: ViewEncapsulation.None,
})
export default class LinkPage {
  /** A realistic destination for the anchor form. */
  protected readonly demoHref = "https://fold.sh3pherd.dev/docs";

  /* ── Playground state ───────────────────────────────────────────────────── */
  protected readonly leadingIcons = [
    "none",
    "arrow-back",
    "company",
    "contracts",
    "download",
    "folder-open",
    "globe",
    "mail",
  ] as const;
  protected readonly trailingIcons = [
    "none",
    "chevron-right",
    "arrow-right",
    "globe",
    "download",
  ] as const;

  protected readonly label = signal("View the organisation");
  protected readonly tone = signal<LinkTone>("accent");
  protected readonly mode = signal<LinkMode>("button");
  protected readonly leadingIcon = signal<string>("company");
  protected readonly trailingIcon = signal<string>("chevron-right");
  protected readonly disabled = signal(false);

  /** `undefined` (not the string `"none"`) is what the input wants for "no icon". */
  protected readonly leading = computed<FoldIconName | undefined>(() =>
    this.leadingIcon() === "none" ? undefined : this.leadingIcon(),
  );
  protected readonly trailing = computed<FoldIconName | undefined>(() =>
    this.trailingIcon() === "none" ? undefined : this.trailingIcon(),
  );

  protected readonly linkCode = computed(() => {
    const attrs: string[] = [];
    if (this.tone() !== "accent") {
      attrs.push(`tone="${this.tone()}"`);
    }
    if (this.leading()) {
      attrs.push(`icon="${this.leading()}"`);
    }
    if (this.trailing()) {
      attrs.push(`trailingIcon="${this.trailing()}"`);
    }
    if (this.mode() === "anchor") {
      attrs.push(`href="${this.demoHref}"`);
    } else {
      attrs.push('(clicked)="onClick()"');
      if (this.disabled()) {
        attrs.push('[disabled]="true"');
      }
    }
    const open =
      attrs.length > 0
        ? ["<fold-link", ...attrs.map((a) => `  ${a}`), ">"].join("\n")
        : "<fold-link>";
    const pad = attrs.length > 0 ? "\n  " : "";
    return `${open}${pad}${this.label()}\n</fold-link>`;
  });
}
