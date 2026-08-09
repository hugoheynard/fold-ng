# Consumer friction — findings & decisions

Friction surfaced while building a real app (LaFolieDouce PIM) on fold-ng, then
studied from the maintainer's side: for each, the ground truth against the
current build, whether a fix is breaking, and the DX trade-off. Status:
✅ done · 📌 kept-with-rationale · ⏳ open.

## Round 1 — six reported points

| #   | Point                                           | Verdict                                                                                                                | Status                 |
| --- | ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------- |
| 1   | `fold-tabs` had no `model()` for the active tab | Real. `activeKey` → two-way `model`, `tabChange` removed (dev-rule 4.12)                                               | ✅                     |
| 2   | "accent doesn't remap `--fold-color-primary`"   | **False** — it does (`semantic.css`, `[data-surface="accent"] *`), and `surface-sunken` too. Was a discoverability gap | ✅ doc (`surfaces.md`) |
| 3   | `[foldSurface]` directive doesn't paint a fill  | True **by design** — the attribute inverts the palette, the component paints. Was undocumented                         | ✅ doc (`surfaces.md`) |
| 4   | Missing icons (kebab / archive)                 | `more-vertical` already exists (⋮); `archive` + `filter` were genuinely missing                                        | ✅ added               |
| 5   | `fold-input` unfit for inline table editing     | True — it's a commit-continuous `model` control; see below                                                             | 📌 explained           |
| 6   | `fold-paginator` had three required inputs      | Real, minor — `pageSize` now optional (defaults to `pageSizeOptions[0]`)                                               | ✅                     |

### On #5 — why `fold-input` doesn't fit an editable table cell

`fold-input` is `value = model<string>` — it commits **on every keystroke**
(two-way, continuous). An editable data-table cell wants the opposite: a
**commit-on-blur/Enter** field that doesn't fire a write (and a re-render of the
row/table) per character. Those are two different control contracts, not one
component with a flag — the same reasoning as dev-rule 4.9 (momentary vs toggle).
So the app correctly drops to a native `<input>` with `(change)` for inline cells;
that is not a fold-input misuse. If this recurs across consumers, the fold-native
answer is a **separate** `commitOn="blur"` field (or a `fold-cell-input`), not a
mode on `fold-input`. Not built yet — deferred until a second real need (don't
generalise on one use). ⏳

## Round 2 — the `model()` survey (controlled input+output pairs)

The library is already `model`-first for every form control and every `open`
overlay. Scanning for the remaining **controlled `input` + twin `output`** shape
(dev-rule 4.12):

| Component                            | Pair                                                  | Decision                                                                                                                                                             | Status |
| ------------------------------------ | ----------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| `fold-tabs`                          | `activeKey` + `tabChange`                             | → `model`, output removed                                                                                                                                            | ✅     |
| `fold-view-nav`                      | `activeKey` + `activeChange`                          | → `model`, output removed (button items)                                                                                                                             | ✅     |
| `fold-data-table`                    | `selected` + `selectionChange`                        | → `model` (`ReadonlySet`), output removed                                                                                                                            | ✅     |
| `fold-data-table`                    | `sort` + `sortChange`                                 | Not a mirror — `sortChange` emits the clicked column key (intent), input is `FoldTableSort`. A `model` would need the output to emit `FoldTableSort`. Bigger rethink | ⏳     |
| `fold-listbox` / `fold-range-slider` | `value` model **+** `selectionChange` / `rangeChange` | 📌 **kept** — the extra output is a **narrower event** (non-null on pick / commit), not a second way to read `value`. Documented 0.5.2; the dev-rule 4.12 exception  | 📌     |
| `fold-toggle-icon`                   | `active` model **+** `toggled`                        | `toggled` echoes a `MouseEvent` on a model write — the redundant kind. Candidate to drop                                                                             | ⏳     |
| `fold-search`                        | `searchChange` (no `value`)                           | Event emitter, no owned state. Could gain a `value` model if a controlled search is ever needed                                                                      | ⏳     |
| `fold-choice-row`                    | `selected` output (no input)                          | Pure pick event, owns no state — fine as an output                                                                                                                   | 📌     |

Pure event outputs (`clicked`, `activated`, `rowClick`, `nodeClick`,
`filesPicked`, `validChange`, `confirmed`) are correctly outputs — no state to own.

## Round 3 — `fold-page-layout` owns its scroll, with no opt-out (✅ resolved 2026-08-04)

> **Resolved by scroll-system Slice A** (`docs/scroll.md`): `fold-page-layout`
> gained `scroll="flow" | "own"` and now **defaults to `flow`** (owns no scroll
> box), while `fold-app-shell` flipped to owning the content scroll by default
> (`scroll="scroll"`) on an inner box, with a `.content-flow { flex:1 0 auto }`
> grow that pins a short-page footer. The `!important` workaround is deleted. The
> original write-up stays below.

Surfaced building **LaFolieDouce B2B**: an **app-level footer** (in the shell's
`[footer]` slot) that should sit **at the end of scrolled content**.

**Ground truth.** `fold-page-layout`'s `:host` is `overflow-y:auto;
overscroll-behavior:contain; flex:1 1 auto; min-height:0` — it is a
**self-scrolling box by construction**, made for `contentScroll="clip"` (the page
owns its scroll, the shell content is clipped). There is **no input** to make it
flow instead. The shell _does_ support the sticky footer — `footerBehavior="scroll"`
stamps the footer inside `.content` with `.footer-inflow { margin-top:auto }`, a
correct sticky-footer — but that model needs the **shell** to own the scroll and
the page to be **flow content**. With `fold-page-layout` those two collide: the
page keeps scrolling internally, and `overscroll-behavior:contain` **severs the
chain** to `.content`, so the footer at the end of `.content` is **unreachable** —
you hit the bottom of the page and simply cannot get to the footer.

**Verdict.** Real gap, not a misconfiguration. The combo "pages built with
`fold-page-layout`" + "shell-owned scroll + in-flow footer" is unreachable today.
Consumer workaround is a global `!important` override neutralising the internal
scroll (`fold-page-layout { overflow:visible; overscroll-behavior:auto;
flex-shrink:0 }`) — it works, but a `!important` against a lib `:host` is exactly
the smell that flags a missing knob.

**Fix (queued P0, TODO.md → Roadmap 1.0.1 `fold-app-shell` polish):** a `scroll`
input on `fold-page-layout` (`'own' | 'flow'`, default `'own'`); `'flow'` drops
`overflow`/`overscroll`/`min-height` so the page flows and the scroll — and footer
reach — returns to the shell. ⏳

## Round 4 — LaFolieDouce **B2B** build (2026-08-03)

The **second** consumer (the B2B storefront + admin, not the PIM) — exactly the
"2nd user reveals hidden assumptions" that Road to 9.5 §5 calls for. Five
frictions, ground-truthed against **fold-ng 0.8.1**.

| #   | Point                                                                 | Verdict                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Status                 |
| --- | --------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- |
| 1   | Shell footer floats mid-page / unreachable on short pages             | **Confirms Round 3 from the _shell_ side.** `footerBehavior="scroll"` stamps `.footer-inflow { margin-top:auto }`, and a flex **auto margin eats free space _before_ `flex-grow`** → the routed page never grows to fill the scrollport, so the footer rides up. Second consumer, second workaround.                                                                                                                                                             | ⏳ (P0 already queued) |
| 2   | No `fold-textarea` / `fold-date` / `fold-time` — forms drop to native | Real gap. **6** templates hand-roll native `<input type="date">` / `<textarea>`, **5** need an `inputValue()` helper just to type the native event, and the `.date/.note` box chrome is copy-pasted across **3** panels.                                                                                                                                                                                                                                         | ⏳ roadmap             |
| 3   | Icon set misses commerce basics (`truck` / `delivery` / `receipt`)    | `icon="package"` was reused as a placeholder for **both** the Panier page and the Retraits nav tab (and `package` didn't even exist). ✅ Fixed — new **`commerce` category** (7th), 21 glyphs (cart/bag/basket · package(+check/return) · tag/tags/barcode/qr/gift · credit-card/wallet/receipt/coins/banknote/percent · truck/store/warehouse/map-pin).                                                                                                         | ✅                     |
| 4   | Discoverability by **intention**                                      | The `.h` column labels were **hand-rolled** though `fold-element-title variant="eyebrow"` already does exactly that — the author never found it among ~90 exports. ✅ Fixed — an intent-first **"Find one by what you need"** table in the README + a **"Pick by intent"** block in `llms.txt` (intent → component, covering the hand-roll traps); also backfilled the reference table's own gaps (missing select/textarea/date/time rows, dup row, icon count). | ✅ doc                 |
| 5   | A panel with **optional** data forces `open<TData \| undefined, R>()` | `FoldPanelContent<TData>` requires `data?: InputSignal<TData>`; `open()` doesn't infer the no-/optional-data case cleanly — `TS2345` until the generic is widened by hand (the B2B PickupPanel).                                                                                                                                                                                                                                                                 | ⏳                     |

### On #1 — the shell-side half of the scroll gap

Round 3 fixes the **page** (`fold-page-layout` can't cede its scroll). But the
B2B app puts every page in `fold-page-layout` **and still** hit a footer bug — from
the other end: the shell's in-flow footer is glued with `margin-top:auto`, which in
a flex column **consumes the free space before `flex-grow` ever runs**. So even a
page that flows correctly won't push the footer down — the page doesn't grow, the
scrollport equals the content height (nothing to scroll), and on a short page the
footer sits in the middle. The app workaround is **not** the Round 3 overflow
override — it neutralises the margin and grows the page instead:

```scss
router-outlet + * {
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  min-width: 0;
}
.footer-inflow {
  margin-top: 0 !important;
} /* !important beats the shell's scoped rule */
```

**Verdict.** The Round 3 `scroll="flow"` knob is necessary but **not sufficient** —
the shell must also make the routed page **grow** (a `flex:1 0 auto` content
wrapper) rather than push the footer with `margin-top:auto`. Do both together, or
the sticky-footer-on-short-page promise still leaks. Queued alongside the Round 3
P0 in Roadmap 1.0.1.

### On #2 — the native-input gap (the biggest DX tax by volume)

fold ships `fold-input` / `fold-number-input` / `fold-select` but **no
`fold-textarea`, `fold-date`, `fold-time`**. Every form that needs one drops to a
native control, and pays three times: (a) native `<input>`/`<textarea>` markup,
(b) an `inputValue($event)` helper to type the untyped native event, (c) a copy of
the `.date/.note` box chrome (padding + border + radius + `:focus-visible`) — which
is byte-identical across `checkout-panel`, `activation-support-panel`,
`creer-entreprise-panel`. The `_field-box.scss` single-source (from the listbox
work) already holds that chrome, so these siblings are cheap: `fold-textarea`
(multiline `fold-input`, `[(value)]`, optional autosize), `fold-date` / `fold-time`
(native `type=date|time` wrapped in the field box, typed `(valueChange)` — no more
`inputValue`). This is the fix that pays back fastest — 3 duplications + 5 helper
sites collapse.

### On #5 — optional panel data

`open()` infers cleanly when data is required, but an optional-data panel (`data?:
InputSignal<TData>`) makes the caller spell `open<TData | undefined, R>()` to dodge
`TS2345`. A no-data `open(Cmp)` overload (or a `TData = void` default that flows to
the content contract) would lift the common case.

## Round 5 — LaFolieDouce B2B, écran de réglages commerciaux (2026-08-09)

Un seul point, mais rencontré deux fois dans la même journée, sur deux barres
différentes. Ground-truthé contre **fold-ng 0.9.0**.

| #   | Point                                                                         | Verdict                                                                                                                                                                                                                                                                                                                                       | Status     |
| --- | ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| 1   | `fold-view-nav` ne sait pas rester **collée en haut** d'un contenu qui défile | Réel. Une barre d'onglets au-dessus d'une section longue doit rester atteignable ; `fold-view-nav` n'a ni `sticky` ni fond opaque, donc le consommateur écrit les deux — et doit deviner **quel** fond, puisque `background="transparent"` laisse le contenu défiler visiblement dessous. Deux occurrences dans la même app (cf. ci-dessous). | ⏳ roadmap |

### On #1 — la barre d'onglets qui doit tenir en haut

Deux endroits, la même semaine, le même contournement :

- **Réglages ▸ Commercial** — trois sections (Prise de rendez-vous · Définition
  des marchés · Réglage des alertes) derrière une `fold-view-nav` horizontale.
  La première section fait plusieurs écrans de haut (grille hebdomadaire +
  règles + exceptions + aperçu) : sans barre collée, changer de section oblige à
  remonter tout en haut.
- **Réglages** (le niveau au-dessus) — le rail vertical routé, déjà collé par le
  consommateur avec le même trio de propriétés.

Le contournement, dans les deux cas :

```scss
.rc-nav {
  position: sticky;
  top: 0;
  z-index: 1;
  padding-bottom: var(--fold-space-xs);
  border-bottom: 1px solid var(--fold-color-border);
  background: var(--fold-color-surface, transparent); /* ← lequel, au juste ? */
}
```

Trois choses que le consommateur ne devrait pas avoir à décider :

1. **Le fond.** `background="transparent"` est le défaut ; collée, une barre
   transparente laisse le contenu défiler visiblement dessous. Le consommateur
   doit alors choisir un token de surface — et rien ne dit lequel correspond à
   celui du conteneur derrière.
2. **Le `z-index`.** Choisi au doigt mouillé, sans savoir contre quoi il joue.
3. **L'offset `top`.** `0` marche dans une région de scroll ; sous un en-tête de
   shell il faudrait la hauteur de cet en-tête, que le consommateur ne connaît pas.

**Verdict.** Ce n'est pas du style d'application, c'est un **mode de la barre** :
« cette barre reste en tête de son conteneur de défilement ». Elle sait déjà
qu'elle est horizontale ou verticale, compacte ou confortable, transparente ou
non — la position collée appartient à la même famille de décisions, et c'est elle
qui sait quel fond opaque va avec quelle surface. Voir Roadmap 1.0.1.

## The systemic fix — surfacing breaking changes

The sharpest lesson: three of these were **controlled-pair twins nobody flagged**,
and removing an `output` is a change a consumer's plain `tsc` can't see (Angular
templates aren't type-checked by `tsc` — only AOT/`ngtsc` catches a dead binding).
So a break shipped silently until the next bump. Closed by the **public-API
surface guard** (`scripts/gen-api-surface.ts` + `API-SURFACE.md` +
`api-surface.spec.ts`, dev-rule 8.5): any change to an exported symbol or any
`input`/`model`/`output` now fails at author time, forcing a CHANGELOG entry and
the right bump.
