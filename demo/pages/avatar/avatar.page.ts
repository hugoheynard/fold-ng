import {
  Component,
  computed,
  inject,
  signal,
  ViewEncapsulation,
} from "@angular/core";
import {
  FoldAvatarComponent,
  FoldAvatarDetailComponent,
  FoldAvatarListComponent,
  type FoldAvatarListItem,
  type FoldAvatarVariant,
  type FoldAvatarRing,
  type FoldAvatarRingStyle,
  FoldIconComponent,
  FoldPageLayoutComponent,
  FoldPageSectionComponent,
  FoldSliderComponent,
  FoldTabLayoutComponent,
  FoldTabNavComponent,
  type FoldTabNavItem,
  FoldPaletteRegistry,
  type FoldAutoPaletteName,
} from "../../../src/index";
import { KindBadgeComponent } from "../../kind-badge.component";
import { DevPlaygroundComponent } from "../../playground.component";

/** A clickable avatar demo — its config drives both the rendered vignette and
 *  the markup shown in the code panel when you click it. */
interface AvatarDemo {
  readonly name: string;
  readonly size?: "sm" | "md" | "lg";
  readonly variant?: FoldAvatarVariant;
  readonly square?: boolean;
  readonly image?: boolean;
  readonly muted?: boolean;
  readonly ring?: FoldAvatarRing;
  readonly ringStyle?: FoldAvatarRingStyle;
}
/** A clickable avatar-detail demo (same idea, identity-cell props). */
interface DetailDemo {
  readonly primary: string;
  readonly secondary?: string;
  readonly size?: "sm" | "md" | "lg";
  readonly variant?: FoldAvatarVariant;
  readonly square?: boolean;
  readonly image?: boolean;
}
/** A labelled row of demos. */
interface DemoGroup<T> {
  readonly label: string;
  readonly items: readonly T[];
}

/** `/avatar` — the `fold-avatar` / avatar-detail / avatar-list gallery page. */
@Component({
  selector: "gal-avatar-page",
  standalone: true,
  imports: [
    KindBadgeComponent,
    FoldPageLayoutComponent,
    FoldPageSectionComponent,
    FoldTabLayoutComponent,
    FoldTabNavComponent,
    FoldAvatarComponent,
    FoldAvatarDetailComponent,
    FoldAvatarListComponent,
    FoldSliderComponent,
    FoldIconComponent,
    DevPlaygroundComponent,
  ],
  templateUrl: "./avatar.page.html",
  styleUrl: "./avatar.page.scss",
  encapsulation: ViewEncapsulation.None,
})
export default class AvatarPage {
  protected readonly avatarTabs: FoldTabNavItem[] = [
    { key: "avatar", label: "Avatar" },
    { key: "detail", label: "Detail" },
    { key: "list", label: "List" },
  ];
  protected readonly avatarTab = signal("avatar");

  protected readonly avatarNames = [
    "Clément Aubry",
    "Inès Bernard",
    "Marc Machine",
    "Sofia Duarte",
    "Léa Petit",
    "Tom Rivière",
  ] as const;
  /** A team roster for the avatar-list — a few carry per-face state so the
   *  showcase demonstrates absence + scheduled status in context. */
  protected readonly team: readonly FoldAvatarListItem[] = [
    { name: "Clément Aubry" },
    { name: "Inès Bernard", variant: "ghost" }, // a guest among members
    { name: "Marc Machine", muted: true }, // absent today
    { name: "Sofia Duarte", ring: "accent", ringStyle: "dotted" }, // incoming
    { name: "Léa Petit", ring: "warning", ringStyle: "dotted" }, // leaving
    { name: "Tom Rivière" },
    { name: "Nora Khan" },
  ];
  /** A self-contained image (data URI) for the imageUrl demos — no network. */
  protected readonly demoAvatarImage =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='44' height='44'%3E%3Crect width='44' height='44' fill='%232f855a'/%3E%3Ctext x='22' y='30' font-size='20' fill='white' text-anchor='middle' font-family='sans-serif'%3ES3%3C/text%3E%3C/svg%3E";

  /** The palette registry is a root singleton — switching it recolours every
   *  avatar in the app at once (a given seed keeps one colour, app-wide). */
  private readonly palette = inject(FoldPaletteRegistry);
  protected readonly palettes: readonly FoldAutoPaletteName[] = [
    "vivid",
    "extended",
    "pastel",
  ];
  protected readonly activePalette = signal<FoldAutoPaletteName>("vivid");
  protected setPalette(name: FoldAutoPaletteName): void {
    this.palette.use(name);
    this.activePalette.set(name);
  }

  /* ── avatar + avatar-detail: click a demo → its markup in the code panel ── */
  protected readonly avatarDemos: readonly DemoGroup<AvatarDemo>[] = [
    {
      label: "size · sm / md / lg",
      items: [
        { name: "Clément Aubry", size: "sm" },
        { name: "Clément Aubry", size: "md" },
        { name: "Clément Aubry", size: "lg" },
      ],
    },
    {
      label: "variant · solid / ghost (guest) · square (org)",
      items: [
        { name: "Inès Bernard" },
        { name: "Inès Bernard", variant: "ghost" },
        { name: "Foldpherd", square: true },
      ],
    },
    {
      label: "imageUrl — replaces initials",
      items: [
        { name: "Léa Petit", image: true },
        { name: "Foldpherd", square: true, image: true },
      ],
    },
    {
      label: "state · muted (absence) + status ring (dotted = scheduled)",
      items: [
        { name: "Marc Machine", size: "lg", muted: true },
        {
          name: "Sofia Duarte",
          size: "lg",
          ring: "accent",
          ringStyle: "dotted",
        },
        { name: "Léa Petit", size: "lg", ring: "warning", ringStyle: "dotted" },
        { name: "Tom Rivière", size: "lg", ring: "alert", ringStyle: "dotted" },
        { name: "Nora Khan", size: "lg", ring: "success" },
      ],
    },
  ];
  protected readonly detailDemos: readonly DemoGroup<DetailDemo>[] = [
    {
      label: "two lines (name + email) · sizes",
      items: [
        {
          primary: "Clément Aubry",
          secondary: "clement@sh3pherd.dev",
          size: "sm",
        },
        { primary: "Clément Aubry", secondary: "clement@sh3pherd.dev" },
        {
          primary: "Clément Aubry",
          secondary: "clement@sh3pherd.dev",
          size: "lg",
        },
      ],
    },
    { label: "single line", items: [{ primary: "Inès Bernard" }] },
    {
      label: "ghost (guest) · square (org) · image",
      items: [
        { primary: "Marc Machine", secondary: "Invité", variant: "ghost" },
        { primary: "Foldpherd", secondary: "Organisation", square: true },
        { primary: "Léa Petit", secondary: "Design", image: true },
      ],
    },
  ];

  /** The clicked demo per tab (reference-stable objects → highlight by identity). */
  protected readonly avatarPicked = signal<AvatarDemo | null>(null);
  protected readonly detailPicked = signal<DetailDemo | null>(null);
  protected readonly avatarPickedCode = computed(() => {
    const demo = this.avatarPicked();
    return demo ? avatarDemoCode(demo) : "";
  });
  protected readonly detailPickedCode = computed(() => {
    const demo = this.detailPicked();
    return demo ? detailDemoCode(demo) : "";
  });
  protected readonly demoCopied = signal(false);

  protected copyDemoCode(code: string): void {
    void navigator.clipboard.writeText(code).then(() => {
      this.demoCopied.set(true);
      setTimeout(() => this.demoCopied.set(false), 1500);
    });
  }

  /* ── avatar-list playground: settings → preview → live markup ───────── */
  protected readonly tops = ["first", "last"] as const;
  protected readonly sizes = ["sm", "md", "lg"] as const;
  protected readonly alCount = signal(7);
  protected readonly alLimit = signal(4);
  protected readonly alTop = signal<"first" | "last">("first");
  protected readonly alSize = signal<"sm" | "md" | "lg">("md");
  protected readonly alSquare = signal(false);
  /** The team sliced to the chosen face count — drives the preview. */
  protected readonly alFaces = computed(() =>
    this.team.slice(0, this.alCount()),
  );

  /** The `<fold-avatar-list>` markup reflecting the settings — live. */
  protected readonly alCode = computed(() => {
    const attrs = [
      '[avatars]="team"',
      this.alLimit() > 0 ? `[limit]="${this.alLimit()}"` : "",
      this.alTop() === "first" ? "" : `top="${this.alTop()}"`,
      this.alSize() === "md" ? "" : `size="${this.alSize()}"`,
      this.alSquare() ? "square" : "",
    ].filter(Boolean);
    return `<fold-avatar-list\n  ${attrs.join("\n  ")}\n/>`;
  });
}

/** The `<fold-avatar>` markup for a demo — only the non-default props. */
function avatarDemoCode(d: AvatarDemo): string {
  const attrs = [
    `name="${d.name}"`,
    d.size && d.size !== "md" ? `size="${d.size}"` : "",
    d.variant && d.variant !== "solid" ? `variant="${d.variant}"` : "",
    d.square ? "square" : "",
    d.image ? `[imageUrl]="logoUrl"` : "",
    d.muted ? `[muted]="true"` : "",
    d.ring && d.ring !== "none" ? `ring="${d.ring}"` : "",
    d.ringStyle && d.ringStyle !== "solid" ? `ringStyle="${d.ringStyle}"` : "",
  ].filter(Boolean);
  return `<fold-avatar ${attrs.join(" ")} />`;
}

/** The `<fold-avatar-detail>` markup for a demo — only the non-default props. */
function detailDemoCode(d: DetailDemo): string {
  const attrs = [
    `primary="${d.primary}"`,
    d.secondary ? `secondary="${d.secondary}"` : "",
    d.size && d.size !== "md" ? `size="${d.size}"` : "",
    d.variant && d.variant !== "solid" ? `variant="${d.variant}"` : "",
    d.square ? "square" : "",
    d.image ? `[imageUrl]="logoUrl"` : "",
  ].filter(Boolean);
  return `<fold-avatar-detail ${attrs.join(" ")} />`;
}
