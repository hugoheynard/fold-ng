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

## Round 3 — `fold-page-layout` owns its scroll, with no opt-out (⏳ open, P0)

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

## The systemic fix — surfacing breaking changes

The sharpest lesson: three of these were **controlled-pair twins nobody flagged**,
and removing an `output` is a change a consumer's plain `tsc` can't see (Angular
templates aren't type-checked by `tsc` — only AOT/`ngtsc` catches a dead binding).
So a break shipped silently until the next bump. Closed by the **public-API
surface guard** (`scripts/gen-api-surface.ts` + `API-SURFACE.md` +
`api-surface.spec.ts`, dev-rule 8.5): any change to an exported symbol or any
`input`/`model`/`output` now fails at author time, forcing a CHANGELOG entry and
the right bump.
