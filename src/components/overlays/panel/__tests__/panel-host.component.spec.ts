import { readFileSync } from "node:fs";

import { Component, type TemplateRef, ViewChild, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";

import {
  FOLD_SCROLL_FROZEN_CLASS,
  ScrollRegionRegistry,
} from "../../../../a11y/scroll-region-registry.service";
import { FoldPanelHostComponent } from "../panel-host.component";
import { FoldPanelHostService } from "../panel-host.service";
import type {
  FoldPanelSide,
  FoldTemplatePanelDescriptor,
} from "../panel.types";

@Component({ template: `<ng-template #t>x</ng-template>` })
class TplHostComponent {
  @ViewChild("t", { static: true }) tpl!: TemplateRef<unknown>;
}

@Component({ standalone: true, template: `<p>panel body</p>` })
class DummyPanelComponent {}

describe("FoldPanelHostComponent", () => {
  let host: FoldPanelHostService;
  let tpl: TemplateRef<unknown>;

  function present(
    title: string,
    side: FoldPanelSide,
    onClose: () => void = () => undefined,
    opts: {
      modal?: boolean;
      surface?: "glass" | "solid";
      disableClose?: boolean;
    } = {},
  ): void {
    const descriptor: Omit<FoldTemplatePanelDescriptor, "id" | "kind"> = {
      templateRef: tpl,
      side,
      title: signal(title),
      subtitle: signal(""),
      width: signal(480),
      onClose,
      ...(opts.modal !== undefined ? { modal: opts.modal } : {}),
      ...(opts.surface !== undefined ? { surface: opts.surface } : {}),
      ...(opts.disableClose !== undefined
        ? { disableClose: opts.disableClose }
        : {}),
    };
    host.present(descriptor);
  }

  function render() {
    const fixture = TestBed.createComponent(FoldPanelHostComponent);
    fixture.detectChanges();
    const root: HTMLElement = fixture.nativeElement;
    return { fixture, root };
  }

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [FoldPanelHostService] });
    host = TestBed.inject(FoldPanelHostService);
    const tplFixture = TestBed.createComponent(TplHostComponent);
    tplFixture.detectChanges();
    tpl = tplFixture.componentInstance.tpl;
  });

  it("renders one scrim per active panel", () => {
    present("A", "right");
    present("B", "right");
    const { root } = render();
    expect(root.querySelectorAll(".panel-dock").length).toBe(2);
  });

  it("reflects the docking side via data-side on the dock and panel", () => {
    present("Left", "left");
    const { root } = render();
    expect(root.querySelector(".panel-dock")?.getAttribute("data-side")).toBe(
      "left",
    );
    expect(root.querySelector(".panel")?.getAttribute("data-side")).toBe(
      "left",
    );
  });

  it("defaults an unspecified side to right", () => {
    host.open(DummyPanelComponent); // no side in config
    const { root } = render();
    expect(root.querySelector(".panel")?.getAttribute("data-side")).toBe(
      "right",
    );
  });

  /* ── side="center" — the modal dialog ── */

  it("porte data-side=center sur le dock ET sur le panneau", () => {
    present("Dialog", "center");
    const { root } = render();

    expect(root.querySelector(".panel-dock")?.getAttribute("data-side")).toBe(
      "center",
    );
    expect(root.querySelector(".panel")?.getAttribute("data-side")).toBe(
      "center",
    );
  });

  it("🔴 un dialogue n'a PAS de poignée : il ne vient d'aucun bord", () => {
    present("Dialog", "center");
    const { root } = render();

    expect(root.querySelector(".panel-grabber")).toBeNull();
  });

  it("un dialogue reste un dialogue modal, nommé et piégeant le focus", () => {
    present("Dialog", "center");
    const { root } = render();
    const aside = root.querySelector(".panel");

    expect(aside?.getAttribute("role")).toBe("dialog");
    expect(aside?.getAttribute("aria-modal")).toBe("true");
    expect(aside?.getAttribute("aria-label")).toBe("Dialog");
  });

  it("cliquer le scrim d'un dialogue le referme", () => {
    let closed = 0;
    present("Dialog", "center", () => (closed += 1));
    const { root } = render();

    root.querySelector<HTMLElement>(".panel-dock")?.click();

    expect(closed).toBe(1);
  });

  /**
   * 🔴 La seule mise en page qui QUITTE la région de contenu. Les autres côtés
   * s'ancrent en `absolute` dedans — juste pour une feuille qui travaille à
   * CÔTÉ de la page. Un dialogue interrompt la page : il doit couvrir la barre
   * de l'app, ses rails, et ce qu'un consommateur a lui-même épinglé par-dessus
   * la page. Un dock `absolute` à `z-index: 50` ne le peut pas.
   *
   * Lu dans la feuille compilée : jsdom n'applique aucun style de composant,
   * donc `getComputedStyle` passerait sur un dock resté `absolute`.
   */
  it("🔴 le dock d'un dialogue est FIXE, au-dessus des autres surfaces", () => {
    const sheet = readFileSync(
      "src/components/overlays/panel/panel-host.component.scss",
      "utf8",
    ).replace(/\/\*[\s\S]*?\*\//gu, "");
    const rule =
      sheet
        .split("}")
        .find((block) => block.includes('.panel-dock[data-side="center"]')) ??
      "";

    expect(rule).toMatch(/position:\s*fixed/u);
    const z = /z-index:\s*(\d+)/u.exec(rule)?.[1];
    expect(Number(z)).toBeGreaterThan(50);
  });

  /**
   * 🔴 Régression vue à l'écran : la règle de base pose
   * `justify-content: flex-end` pour coller une feuille au bord droit, et
   * `place-items` ne la remet PAS — elle règle la place de l'élément dans sa
   * piste, pas celle de la piste dans la grille. Le dialogue restait plaqué à
   * droite d'un dock pourtant large comme la fenêtre.
   *
   * Le test lit la feuille : jsdom n'applique aucun style de composant, donc
   * une mesure de rectangle passerait sur un dialogue décentré.
   */
  it("🔴 le dock d'un dialogue remet l'alignement du CONTENU, pas seulement des items", () => {
    const sheet = readFileSync(
      "src/components/overlays/panel/panel-host.component.scss",
      "utf8",
    ).replace(/\/\*[\s\S]*?\*\//gu, "");
    const rule =
      sheet
        .split("}")
        .find((block) => block.includes('.panel-dock[data-side="center"]')) ??
      "";

    expect(rule).toMatch(/place-content:\s*center|justify-content:\s*center/u);
  });

  it("renders a grabber for a bottom sheet (and not for a side sheet)", () => {
    present("Bottom", "bottom");
    present("Side", "right");
    const { root } = render();
    const asides = root.querySelectorAll(".panel");
    expect(asides[0]?.getAttribute("data-side")).toBe("bottom");
    expect(asides[0]?.querySelector(".panel-grabber")).not.toBeNull();
    expect(asides[1]?.querySelector(".panel-grabber")).toBeNull();
  });

  it("renders a grabber for an auto panel (it may become a bottom sheet)", () => {
    present("Auto", "auto");
    const { root } = render();
    const aside = root.querySelector(".panel")!;
    expect(aside.getAttribute("data-side")).toBe("auto");
    expect(aside.querySelector(".panel-grabber")).not.toBeNull();
  });

  it("tapping the grabber dismisses the sheet", () => {
    let closed = 0;
    present("Bottom", "bottom", () => (closed += 1));
    const { root } = render();
    root.querySelector<HTMLButtonElement>(".panel-grabber")!.click();
    expect(closed).toBe(1);
  });

  it("the grabber does NOT dismiss a disableClose sheet", () => {
    let closed = 0;
    present("Guarded", "bottom", () => (closed += 1), { disableClose: true });
    const { root } = render();
    root.querySelector<HTMLButtonElement>(".panel-grabber")!.click();
    expect(closed).toBe(0);
  });

  it("Escape closes the top-most (last-opened) panel only", () => {
    let closedA = 0;
    let closedB = 0;
    present("A", "right", () => (closedA += 1));
    present("B", "right", () => (closedB += 1));
    const { fixture } = render();

    document.dispatchEvent(
      new KeyboardEvent("keydown", { key: "Escape", bubbles: true }),
    );
    fixture.detectChanges();
    expect(closedB).toBe(1);
    expect(closedA).toBe(0);
  });

  it("Escape does NOT close a panel that guards close (disableClose)", () => {
    let closed = 0;
    present("Guarded", "right", () => (closed += 1), { disableClose: true });
    const { fixture } = render();

    document.dispatchEvent(
      new KeyboardEvent("keydown", { key: "Escape", bubbles: true }),
    );
    fixture.detectChanges();
    expect(closed).toBe(0);
  });

  it("a backdrop click does NOT close a disableClose panel", () => {
    let closed = 0;
    present("Guarded", "right", () => (closed += 1), { disableClose: true });
    const { root } = render();

    const dock = root.querySelector<HTMLElement>(".panel-dock")!;
    dock.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    expect(closed).toBe(0);
  });

  it("a backdrop click DOES close an ordinary modal panel", () => {
    let closed = 0;
    present("Plain", "right", () => (closed += 1));
    const { root } = render();

    const dock = root.querySelector<HTMLElement>(".panel-dock")!;
    dock.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    expect(closed).toBe(1);
  });

  it("renders nothing when there are no panels", () => {
    const { root } = render();
    expect(root.querySelector(".panel-dock")).toBeNull();
  });

  it("labels a template panel dialog with its title", () => {
    present("My Panel", "right");
    const { root } = render();
    const aside = root.querySelector(".panel")!;
    expect(aside.getAttribute("aria-label")).toBe("My Panel");
    expect(aside.getAttribute("aria-labelledby")).toBeNull();
  });

  it("names a component panel via aria-labelledby → its header title id", () => {
    host.open(DummyPanelComponent);
    const { root } = render();
    const aside = root.querySelector(".panel")!;
    expect(aside.getAttribute("aria-labelledby")).toMatch(
      /^fold-panel-title-\d+$/,
    );
    expect(aside.getAttribute("aria-label")).toBeNull();
  });

  it("uses an explicit aria-label when the config supplies one", () => {
    host.open(DummyPanelComponent, { ariaLabel: "Node settings" });
    const { root } = render();
    const aside = root.querySelector(".panel")!;
    expect(aside.getAttribute("aria-label")).toBe("Node settings");
    expect(aside.getAttribute("aria-labelledby")).toBeNull();
  });

  it("inerts background siblings while open, and restores them on close", () => {
    const { fixture } = render();
    document.body.appendChild(fixture.nativeElement);
    const sibling = document.createElement("div");
    document.body.appendChild(sibling);

    present("A", "right");
    fixture.detectChanges();
    expect(sibling.hasAttribute("inert")).toBe(true);

    host.dismissAll();
    fixture.detectChanges();
    expect(sibling.hasAttribute("inert")).toBe(false);

    fixture.nativeElement.remove();
    sibling.remove();
  });

  it("does NOT inert the background for a non-modal panel", () => {
    const { fixture } = render();
    document.body.appendChild(fixture.nativeElement);
    const sibling = document.createElement("div");
    document.body.appendChild(sibling);

    present("A", "right", () => undefined, { modal: false });
    fixture.detectChanges();
    expect(sibling.hasAttribute("inert")).toBe(false);

    fixture.nativeElement.remove();
    sibling.remove();
  });

  it("still inerts when a modal panel is open alongside a non-modal one", () => {
    const { fixture } = render();
    document.body.appendChild(fixture.nativeElement);
    const sibling = document.createElement("div");
    document.body.appendChild(sibling);

    present("non-modal", "right", () => undefined, { modal: false });
    present("modal", "right");
    fixture.detectChanges();
    expect(sibling.hasAttribute("inert")).toBe(true);

    fixture.nativeElement.remove();
    sibling.remove();
  });

  it("locks body scroll for a modal panel and releases it on close", () => {
    present("A", "right");
    const { fixture } = render();
    expect(document.body.style.overflow).toBe("hidden");

    host.dismissAll();
    fixture.detectChanges();
    expect(document.body.style.overflow).toBe("");
  });

  it("does NOT lock body scroll for a non-modal panel", () => {
    present("A", "right", () => undefined, { modal: false });
    const { fixture } = render();
    fixture.detectChanges();
    expect(document.body.style.overflow).not.toBe("hidden");
  });

  it("freezes the registered scroll regions for a modal panel and thaws them on close", () => {
    // The scroll owner in a shell is an inner box, not `body`, so the host must
    // freeze the region registry too — otherwise the page scrolls behind the modal.
    const registry = TestBed.inject(ScrollRegionRegistry);
    const region = document.createElement("div");
    registry.register(region);

    present("A", "right");
    const { fixture } = render();
    expect(region.classList.contains(FOLD_SCROLL_FROZEN_CLASS)).toBe(true);

    host.dismissAll();
    fixture.detectChanges();
    expect(region.classList.contains(FOLD_SCROLL_FROZEN_CLASS)).toBe(false);
    registry.unregister(region);
  });

  it("does NOT freeze scroll regions for a non-modal panel", () => {
    const registry = TestBed.inject(ScrollRegionRegistry);
    const region = document.createElement("div");
    registry.register(region);

    present("A", "right", () => undefined, { modal: false });
    const { fixture } = render();
    fixture.detectChanges();
    expect(region.classList.contains(FOLD_SCROLL_FROZEN_CLASS)).toBe(false);
    registry.unregister(region);
  });

  it("adds the pass-through modifier to a non-modal dock only", () => {
    present("A", "right", () => undefined, { modal: false });
    const { root } = render();
    expect(
      root
        .querySelector(".panel-dock")
        ?.classList.contains("panel-dock--passthrough"),
    ).toBe(true);
  });

  it("a modal dock keeps capturing clicks (no pass-through modifier)", () => {
    present("A", "right");
    const { root } = render();
    expect(
      root
        .querySelector(".panel-dock")
        ?.classList.contains("panel-dock--passthrough"),
    ).toBe(false);
  });

  it("reflects the surface on the panel (solid vs default glass)", () => {
    present("Solid", "right", () => undefined, { surface: "solid" });
    present("Default", "right");
    const { root } = render();
    const asides = root.querySelectorAll(".panel");
    expect(asides[0]?.getAttribute("data-surface")).toBe("solid");
    expect(asides[1]?.getAttribute("data-surface")).toBe("glass");
  });

  it("reflects modality on aria-modal", () => {
    present("Modal", "right");
    present("NonModal", "right", () => undefined, { modal: false });
    const { root } = render();
    const asides = root.querySelectorAll(".panel");
    expect(asides[0]?.getAttribute("aria-modal")).toBe("true");
    expect(asides[1]?.getAttribute("aria-modal")).toBe("false");
  });

  it("traps focus only for the top-most modal panel", () => {
    present("A", "right", () => undefined, { modal: false });
    const { fixture } = render();
    const cmp = fixture.componentInstance;
    const panel = host.panels()[0]!;
    expect(cmp.isModal(panel)).toBe(false);
    expect(cmp.shouldTrap(panel)).toBe(false);
  });

  it("traps focus for a modal top-most panel", () => {
    present("A", "right");
    const { fixture } = render();
    const cmp = fixture.componentInstance;
    const panel = host.panels()[0]!;
    expect(cmp.shouldTrap(panel)).toBe(true);
  });
});
