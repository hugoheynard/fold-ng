import {
  Component,
  ElementRef,
  computed,
  effect,
  inject,
  signal,
  viewChild,
} from "@angular/core";
import {
  Sh3AvatarComponent,
  Sh3AvatarDetailComponent,
  Sh3AvatarListComponent,
  type Sh3AvatarListItem,
  type Sh3AvatarVariant,
  type Sh3AvatarRing,
  type Sh3AvatarRingStyle,
  Sh3ContextCardComponent,
  Sh3IconComponent,
  Sh3PageLayoutComponent,
  Sh3PageSectionComponent,
  Sh3SliderComponent,
  Sh3TabNavComponent,
  type Sh3TabNavItem,
  Sh3PaletteRegistry,
  type Sh3AutoPaletteName,
} from "../../src/index";
import {
  applyOverrides,
  colorToken,
  overrideCss,
  radiusToken,
  withOverride,
  type PageTokenGroup,
} from "../token-sandbox";

/** A clickable avatar demo — its config drives both the rendered vignette and
 *  the markup shown in the code panel when you click it. */
interface AvatarDemo {
  readonly name: string;
  readonly size?: "sm" | "md" | "lg";
  readonly variant?: Sh3AvatarVariant;
  readonly square?: boolean;
  readonly image?: boolean;
  readonly muted?: boolean;
  readonly ring?: Sh3AvatarRing;
  readonly ringStyle?: Sh3AvatarRingStyle;
}
/** A clickable avatar-detail demo (same idea, identity-cell props). */
interface DetailDemo {
  readonly primary: string;
  readonly secondary?: string;
  readonly size?: "sm" | "md" | "lg";
  readonly variant?: Sh3AvatarVariant;
  readonly square?: boolean;
  readonly image?: boolean;
}
/** A labelled row of demos. */
interface DemoGroup<T> {
  readonly label: string;
  readonly items: readonly T[];
}

/** `/avatar` — the `sh3-avatar` / avatar-detail / avatar-list gallery page. */
@Component({
  selector: "gal-avatar-page",
  standalone: true,
  imports: [
    Sh3PageLayoutComponent,
    Sh3PageSectionComponent,
    Sh3TabNavComponent,
    Sh3AvatarComponent,
    Sh3AvatarDetailComponent,
    Sh3AvatarListComponent,
    Sh3ContextCardComponent,
    Sh3SliderComponent,
    Sh3IconComponent,
  ],
  templateUrl: "./avatar.page.html",
})
export default class AvatarPage {
  protected readonly avatarTabs: Sh3TabNavItem[] = [
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
  protected readonly team: readonly Sh3AvatarListItem[] = [
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
  private readonly palette = inject(Sh3PaletteRegistry);
  protected readonly palettes: readonly Sh3AutoPaletteName[] = [
    "vivid",
    "extended",
    "pastel",
  ];
  protected readonly activePalette = signal<Sh3AutoPaletteName>("vivid");
  protected setPalette(name: Sh3AutoPaletteName): void {
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
        { name: "Sh3pherd", square: true },
      ],
    },
    {
      label: "imageUrl — replaces initials",
      items: [
        { name: "Léa Petit", image: true },
        { name: "Sh3pherd", square: true, image: true },
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
        { primary: "Sh3pherd", secondary: "Organisation", square: true },
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

  /* ── avatar-list showcase: preview + settings + code + token sandbox ─── */
  protected readonly alCount = signal(7);
  protected readonly alLimit = signal(4);
  protected readonly alTop = signal<"first" | "last">("first");
  protected readonly alSize = signal<"sm" | "md" | "lg">("md");
  protected readonly alSquare = signal(false);
  /** The team sliced to the chosen face count — drives the preview. */
  protected readonly alFaces = computed(() =>
    this.team.slice(0, this.alCount()),
  );

  /** The `<sh3-avatar-list>` markup reflecting the settings — live. */
  protected readonly alShowCode = signal(false);
  protected readonly alCode = computed(() => {
    const attrs = [
      '[avatars]="team"',
      this.alLimit() > 0 ? `[limit]="${this.alLimit()}"` : "",
      this.alTop() === "first" ? "" : `top="${this.alTop()}"`,
      this.alSize() === "md" ? "" : `size="${this.alSize()}"`,
      this.alSquare() ? "square" : "",
    ].filter(Boolean);
    return `<sh3-avatar-list\n  ${attrs.join("\n  ")}\n/>`;
  });
  protected readonly alCopied = signal(false);
  protected copyAlCode(): void {
    void navigator.clipboard.writeText(this.alCode()).then(() => {
      this.alCopied.set(true);
      setTimeout(() => this.alCopied.set(false), 1500);
    });
  }

  /** avatar-list's overridable tokens — its own ring var + the chip surfaces. */
  protected readonly alTokens: readonly PageTokenGroup[] = [
    {
      label: "ring",
      tokens: [
        {
          prop: "--sh3-avatar-list-ring",
          desc: "ring around each face",
          kind: "color",
        },
      ],
    },
    {
      label: "overflow chip",
      tokens: [
        colorToken("primary-surface", "+N chip background"),
        colorToken("primary-text", "+N chip text"),
      ],
    },
    { label: "roundness", tokens: [radiusToken("sm", "square face rounding")] },
  ];
  private readonly alPreviewRef =
    viewChild<ElementRef<HTMLElement>>("alPreview");
  protected readonly alOverrides = signal<Record<string, string>>({});
  protected readonly hasAlOverrides = computed(
    () => Object.keys(this.alOverrides()).length > 0,
  );
  protected setAlOverride(prop: string, value: string): void {
    this.alOverrides.update((o) => withOverride(o, prop, value));
  }
  protected resetAlOverrides(): void {
    this.alOverrides.set({});
  }
  protected readonly alTokensCss = computed(() =>
    overrideCss("sh3-avatar-list", this.alOverrides()),
  );
  protected readonly alCssCopied = signal(false);
  protected copyAlTokensCss(): void {
    void navigator.clipboard.writeText(this.alTokensCss()).then(() => {
      this.alCssCopied.set(true);
      setTimeout(() => this.alCssCopied.set(false), 1500);
    });
  }

  constructor() {
    // Live sandbox: write the token overrides onto the preview element. A DOM
    // write (setProperty/removeProperty) → an effect, not a computed.
    effect(() =>
      applyOverrides(
        this.alPreviewRef()?.nativeElement,
        this.alTokens,
        this.alOverrides(),
      ),
    );
  }
}

/** The `<sh3-avatar>` markup for a demo — only the non-default props. */
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
  return `<sh3-avatar ${attrs.join(" ")} />`;
}

/** The `<sh3-avatar-detail>` markup for a demo — only the non-default props. */
function detailDemoCode(d: DetailDemo): string {
  const attrs = [
    `primary="${d.primary}"`,
    d.secondary ? `secondary="${d.secondary}"` : "",
    d.size && d.size !== "md" ? `size="${d.size}"` : "",
    d.variant && d.variant !== "solid" ? `variant="${d.variant}"` : "",
    d.square ? "square" : "",
    d.image ? `[imageUrl]="logoUrl"` : "",
  ].filter(Boolean);
  return `<sh3-avatar-detail ${attrs.join(" ")} />`;
}
