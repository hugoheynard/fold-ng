import { Component, inject, signal, ViewEncapsulation } from "@angular/core";
import { KindBadgeComponent } from "../../components/kind-badge.component";
import {
  FoldBadgeComponent,
  FoldButtonComponent,
  FoldCalloutComponent,
  FoldCardComponent,
  FoldIconComponent,
  FoldIconRegistry,
  FoldPageLayoutComponent,
  FoldPageSectionComponent,
} from "../../../src/public-api";
import { UI_ICONS } from "../../../src/components/foundations/icon/icons/ui.icons";
import { NAV_ICONS } from "../../../src/components/foundations/icon/icons/nav.icons";
import { COMMERCE_ICONS } from "../../../src/components/foundations/icon/icons/commerce.icons";
import { MUSIC_ICONS } from "../../../src/components/foundations/icon/icons/music.icons";
import { STATUS_ICONS } from "../../../src/components/foundations/icon/icons/status.icons";
import { PEOPLE_ICONS } from "../../../src/components/foundations/icon/icons/people.icons";
import { BRANDS_ICONS } from "../../../src/components/foundations/icon/icons/brands.icons";

interface IconCategory {
  readonly key: string;
  readonly label: string;
  readonly desc: string;
  readonly names: readonly string[];
}

interface IconFeature {
  readonly icon: string;
  readonly title: string;
  readonly body: string;
}

const DEMO_ICON =
  '<svg viewBox="0 0 24 24" fill="currentColor">' +
  '<path d="M12 2l2.5 6.9L21.5 11l-6.9 2.5L12 20l-2.5-6.5L2.5 11l7-2.1z"/></svg>';

/** `/icons` — the `fold-icon` system: why it holds up, how to extend it, and the
 *  full catalogue grouped by category. */
@Component({
  selector: "gal-icons-page",
  standalone: true,
  imports: [
    KindBadgeComponent,
    FoldPageLayoutComponent,
    FoldPageSectionComponent,
    FoldCardComponent,
    FoldCalloutComponent,
    FoldBadgeComponent,
    FoldButtonComponent,
    FoldIconComponent,
  ],
  templateUrl: "./icons.page.html",
  styleUrl: "./icons.page.scss",
  encapsulation: ViewEncapsulation.None,
})
export default class IconsPage {
  private readonly registry = inject(FoldIconRegistry);

  protected readonly iconSizeSteps = ["xs", "sm", "md", "lg", "xl"] as const;
  protected readonly iconColorTokens = [
    "text",
    "text-secondary",
    "primary",
    "info",
    "warning",
    "alert",
    "success",
  ] as const;

  protected readonly features: readonly IconFeature[] = [
    {
      icon: "code",
      title: "Typed names",
      body: "name autocompletes every built-in and compile-errors on a typo — a missing icon is caught before runtime, not after.",
    },
    {
      icon: "copy",
      title: "Shared sprite",
      body: "Each icon is one <symbol> in a hidden sprite; every instance is a tiny <use>. 1500 renders cost 3 symbols, not 1500 copies.",
    },
    {
      icon: "palette",
      title: "currentColor",
      body: "Colour is inherited — set color on any ancestor and the icon follows. No colour prop, no theme fork.",
    },
    {
      icon: "sliders",
      title: "Token sizes",
      body: "xs…xl map to the --fold-icon-size-* scale (or pass a pixel number). A dense theme can rescale every icon at once.",
    },
    {
      icon: "shield",
      title: "Trust-guarded",
      body: "The registry rejects <script> and inline on*= handlers at registration — the unsanitised inject can't become an XSS sink.",
    },
    {
      icon: "lightning",
      title: "Self-contained",
      body: "SVGs are inlined into the package — no HTTP fetch, no .svg loader config, no network on first paint.",
    },
  ];

  protected readonly categories: readonly IconCategory[] = [
    {
      key: "ui",
      label: "UI",
      desc: "Actions, editing, files, view chrome — the everyday verbs.",
      names: Object.keys(UI_ICONS),
    },
    {
      key: "nav",
      label: "Navigation",
      desc: "The app's destinations — roughly one per rail entry.",
      names: Object.keys(NAV_ICONS),
    },
    {
      key: "commerce",
      label: "Commerce",
      desc: "Cart, catalogue, payment, fulfilment — the e-commerce domain.",
      names: Object.keys(COMMERCE_ICONS),
    },
    {
      key: "music",
      label: "Music & transport",
      desc: "Playback, waveforms, the audio domain.",
      names: Object.keys(MUSIC_ICONS),
    },
    {
      key: "status",
      label: "Status",
      desc: "State, severity, achievement.",
      names: Object.keys(STATUS_ICONS),
    },
    {
      key: "people",
      label: "People & roles",
      desc: "Members, leads, rights, roles.",
      names: Object.keys(PEOPLE_ICONS),
    },
    {
      key: "brands",
      label: "Brands",
      desc: "Third-party marks — kept apart from the single-glyph sets.",
      names: Object.keys(BRANDS_ICONS),
    },
  ];

  protected readonly totalCount = this.categories.reduce(
    (n, c) => n + c.names.length,
    0,
  );

  protected readonly usageCode = `<fold-icon name="search" />
<fold-icon name="bin" size="lg" />
<fold-icon name="heart" [size]="18" />
<fold-icon name="edit" title="Edit track" />`;

  protected readonly provideCode = `// app.config.ts — register once at bootstrap
providers: [
  provideFoldIcons({
    "my-logo": "<svg viewBox='0 0 24 24'>…</svg>",
  }),
];`;

  protected readonly runtimeCode = `// …or at runtime — resolves reactively
const icons = inject(FoldIconRegistry);
icons.register("my-logo", svgMarkup);
icons.registerMany({ … });`;

  protected readonly copiedIcon = signal("");
  protected readonly demoRegistered = signal(false);

  protected copyIconName(name: string): void {
    void navigator.clipboard.writeText(name).then(() => {
      this.copiedIcon.set(name);
      setTimeout(() => this.copiedIcon.set(""), 1200);
    });
  }

  protected registerDemoIcon(): void {
    this.registry.register("demo-sparkle", DEMO_ICON);
    this.demoRegistered.set(true);
  }
}
