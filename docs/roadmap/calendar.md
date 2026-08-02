---
version: "0.8.0"
title: "Calendar — hardening"
status: "in-progress"
summary: "Everything the adversarial review turned up on the calendar family, from reproduced data-loss defects to the composability seams that are missing."
---

# Roadmap — `fold-calendar-*`

The family shipped complete in 7 commits on `dev` (7 components + a pure core +
3 gallery pages, 914 package tests, every gate green). It was then put through a
three-angle adversarial review — **competitor benchmark**, **hostile SRP /
composability**, **`dev-rules.md` compliance** — and the blockers were
independently reproduced with a `tsx` probe before being written down.

This page is the complete result. Nothing was dropped for being inconvenient.

> **Format.** `- [x] **Title** — detail.` The `B*` / `E*` / `V*` / `M*` / `D*` /
> `P*` tags are the review IDs, kept so a finding can be traced back to the
> agent that raised it. **Status** `[ ]` todo · `[x]` done.

**Status (2026-08-02).** Everything that did not need a product call is
**done**, in one pass: the eleven defects, the doc, the API and composability
work, the a11y and refactor items, the tests and the gallery. The package went
from 914 to 986 tests. What is still open is `[ ]` below, and all of it is a
decision rather than a task: the **public-surface arbitration** (§3) and the
**deferred features** (§8), plus one cosmetic rename nobody needs.

**Ordering.** Defects first (they lose or corrupt data), then doc truth, then
the API arbitration — **that one has to land before 0.8.0**, because after the
release every removal is a `BREAKING`. Composability, a11y and refactor follow.

---

## 1 · Defects — corruption, crash, wrong render

Reproduced, not theorised. The probe output is quoted where it matters.

- [x] **B1 · Two events with the same id merge silently** — `calendar-layout.ts:73`.
      `collapseGroups` keys its Map on `event:${id}`, so a duplicate id is
      indistinguishable from an explicit `groupId`. Reproduced:
      `bands: 2 | labels: ['A','A'] | groupSize: [2,2]` — the second event is
      **never rendered**, both bands carry the first one's label, a bogus `2`
      counter appears and the range inflates to the union. In the column views
      the four templates `track event.id` → Angular **NG0955 throws at runtime**.
      Fix: identity key including the index (`event:${index}:${id}`); composite
      key or `$index` in the four column templates; dev-mode warning on a
      duplicate id.
- [x] **B2 · One clamp for `maxLanes`, plus `numberAttribute`** — the invariant
      lives in two places and only one enforces it. `calendar-layout.ts:250`
      clamps; `calendar-month.component.ts:184/190` does not. Reproduced:
      `maxLanes=NaN` → 4 bands placed, **0 hidden** (the budget is _disabled_,
      because `lane >= NaN` is always false); `maxLanes=-5` → `repeat(-5, …)`
      makes the CSS parser drop the whole `grid-template-rows` rule. Fix: a
      private `lanes` computed (trunc + finite + max 0) feeding layout,
      `rowTemplate` and the overflow row; add `transform: numberAttribute` to
      `maxLanes` (month) and `limit` (agenda) — without it `maxLanes="2"` as a
      string yields an overflow row of `"22"`.
- [x] **E2 · Reject or normalise a reversed range (`end < start`)** — reproduced:
      `{start: 2026-05-22, end: 2026-05-18}` produces `startCol=4 endCol=0` →
      `grid-column: 5 / 2`, which CSS Grid **silently swaps**, so the band covers
      four days it does not cover. Meanwhile `foldEventsOnDay`
      (`start <= d && end >= d`) never returns it: week, day, list and agenda all
      consider it absent. Same input, two contradictory renders, no error. Fix:
      normalise (swap) or reject in `collapseGroups`, + a dev warning.
- [x] **E1 · Validate dates — `foldIsCalendarDate` is called nowhere** — the
      validator exists, is exported, is tested (`calendar-date.spec.ts:17-39`)
      and **no component calls it**. Reproduced: `month="not-a-date"` → zero
      weeks, i.e. a `role="grid"` with headers and no rows, no error;
      `month="2026-13-45"` → five rows starting `2026-12-28`, a December calendar
      displayed with total confidence. A form field mid-keystroke (`"2026-0"`)
      empties the calendar with no diagnostic. Fix: dev-mode guard
      (`if (ngDevMode && !foldIsCalendarDate(…)) console.warn`) in the
      components; `foldBuildMonthGrid` returns `[]` + warns rather than
      `Array.from({length: NaN})`. Also resolves **4d** (`activeDate` null → grid
      with no tab stop).
- [x] **E3 · `limit: 0` makes the agenda lie** — `calendar-agenda.ts:55,77`.
      `limit: 0` → zero groups → the template prints _“Nothing to handle — all up
      to date.”_ directly under a `todoCount()` badge saying the opposite
      (`todoCount` comes from `foldCountActionable`, which ignores `limit`). Same
      for `limit: -3` and `limit: NaN` (`Math.max(0, NaN) === NaN`,
      `slice(0, NaN) === []`). Fix: clamp `limit` to `>= 1`, treat non-finite as
      the default, and distinguish “nothing ahead” from “truncated” in the empty
      state.
- [x] **E4 · The group representative throws away tone, icon and open edges** —
      `calendar-layout.ts:76-92` keeps `event: existing.event` and merges only
      `start`/`end`/`groupSize`. Reproduced: members `{tone: muted, icon: team}` +
      `{tone: alert, icon: clock}` → the band renders muted/team, so **a first
      cancelled member visually cancels a whole group containing an alert**.
      Worse: a closed representative with an `openEnd: true` member whose union
      overflows the grid yields `continuesAfter: false` — **the open edge is
      lost** (an open-ended contract inside a group is drawn as finished).
      `calendar.types.ts:50` only documents “the first one represents the group”.
      Aggravating: `foldFilterBySource` runs _before_ grouping on the caller's
      side, so switching a source off can change the representative — the chip
      changes colour and name for no visible reason. Fix: `openStart`/`openEnd` =
      OR of the members; decide and **document** tone/icon/subline/sourceKey.
- [x] **Weekend · Split `weekendDays` from `weekStartsOn`** — a design defect: two
      independent locale facts conflated. `foldIsWeekEnd` defines the weekend as
      “the last two columns”, so with a Sunday anchor it shades **Friday +
      Saturday** and treats **Sunday as a working day** (verified). My own
      `calendar-date.spec.ts` locks the error in and the docblock rationalises
      it. Fix: `weekendDays: readonly FoldWeekday[]` input (default
      `['sat','sun']`), derivable from `Intl.Locale#getWeekInfo()` where
      available; fix **the spec and the comment** too.
- [x] **4a/4b · `deferredFocus` ejects the keyboard user; move to
      `afterNextRender`** — `calendar-month.component.ts:227-244`. The effect
      reads `deferredFocus()` and never resets it to null; signals compare by
      equality, so repeating the _exact_ same transition does not re-run the
      effect. Repro (works in the gallery as shipped): PageDown from 20 May →
      June, focus fine; back to May via the toolbar; PageDown from 20 May again →
      `deferredFocus.set` is a no-op → the effect does not run → **focus lands on
      `<body>`**. Fix: consume the latch (untracked set-null after focusing).
      Separately, `effect()` is the wrong primitive for post-render DOM — Angular
      does not contract that ordering, and it already changed between v18 and
      v19 → `afterNextRender`, which also makes the SSR no-op explicit. And
      `cell.focus()` triggers `(focus)` → `onDayFocus` → `focusedDate.set`, a
      write-read cycle through the DOM: `untracked`.
- [x] **M5 · `foldRangeForView('list')` returns the padded window** —
      `calendar-navigation.ts:65-75`. The `list` branch shares `month`'s, with
      the comment “the whole grid, not just the month: the month view paints the
      days on either side”. True for month, **false for list** — a list has no
      padding days. Verified in the gallery: in List view on May the range is
      `2026-04-27 → 2026-05-31`, so late-April events show up in May's list. Fix:
      split the `list` case onto `foldStartOfMonth`/`foldEndOfMonth`.
- [x] **V1 · The `[empty]` slot can swallow a child (rule 4.8)** —
      `calendar-day.component.html:15`, unqualified `<ng-content select="[empty]" />`.
      Verified: `fold-field` (`field.component.ts:53`) and `fold-data-table`
      (`data-table.component.ts:85`) **both** have an `empty` input. A
      `<fold-data-table empty="…">` projected into `<fold-calendar-day>` is
      captured — and since the component has a _single_ `ng-content` with no
      default slot, the child does not render elsewhere: **it disappears**.
      Exactly the scenario rule 4.8 documents for `fold-page-layout`, but worse.
      Fix: tag-qualify (`button[empty], a[empty], div[empty]`) or rename the
      attribute; add a projection test. Same class for the toolbar's
      `select="[actions]"` (4.8 names `actions` explicitly) — mitigated by the
      absence of a default slot to steal, but do not extend the pattern.
- [x] **E5 · Years < 100 and > 9999 break the date primitive** —
      `calendar-date.ts:80-85`. `foldAddDays("0099-12-31", 1)` → `"2000-01-01"`:
      `Date.UTC(99, …)` maps two-digit years onto 1900+, so any year below 100 is
      silently shifted by 1900 → needs `d.setUTCFullYear(year)` after
      construction. And `foldAddDays("9999-12-31", 1)` → `"10000-01-01"`, five
      digits, which **breaks the lexicographic-comparison invariant the whole
      module rests on** (`"10000-01-01" < "2026-01-01"` as strings). The docblock
      sells that comparison as a guarantee; it only holds from 1000 to 9999, and
      that constraint is documented nowhere.

## 2 · Doc truth

The docblocks are the most polished artefact in the folder — and wrong in four
places, which is worse than no doc.

- [x] **V7/M3 · Fix the four lying JSDoc tables** — (1)
      `calendar-month.component.ts:71` advertises `overflowClick` →
      `FoldCalendarWeek<T>` (“the week is passed”) while `:134` declares
      `output<FoldCalendarDate>()` — a consumer reading the doc writes a handler
      that fails at AOT. (2) `calendar-toolbar.component.ts:34-42` omits the
      `today` input, which is declared at `:83` and used in its own `@example`.
      (3) `calendar-list.component.ts` has no `## Outputs` table despite having
      `eventClick`. (4) `calendar-event.directive.ts:15-17` claims the context
      cannot be typed “without heavy machinery” — false, `ngTemplateContextGuard`
      is six lines (see §3).
- [x] **V3 · README: zero calendar rows for seven public components** — rule 4.6:
      _“The README table stays in sync”_. `grep -i calendar README.md` → 0 hits
      across 460 lines, while `FoldDataTableComponent`, `FoldPaginatorComponent`
      and `FoldListboxComponent` have theirs (`README.md:311-323`). Seven shipped
      public components invisible to the consumer's entry point. Add the rows.
- [x] **Scope · Write down what this family will never do** — the benchmark
      insists: three whole markets are out of scope and the consumer finds out
      _after_ adopting. One paragraph at the head of the family (README + root
      docblock): (a) **all-day only** — `FoldCalendarEvent` has no time field at
      all, so “show my meetings” is out of scope permanently, not “not yet”;
      (b) **Gregorian only** — `dayOfMonth: Number(date.slice(8,10))` is
      proleptic string surgery, so `locale="ar-SA-u-ca-islamic"` produces a
      calendar that **contradicts itself** (Hijri month names, Gregorian
      numbers); (c) **read-only** — no drag, no resize, no selection; (d) no
      resource view (staff × day). Decision: own it, but say it.
- [x] **V5/2d · Document the nine theming knobs (none are)** —
      `--fold-calendar-header-row`, `-lane`, `-week-min-height`, `-daynum-size`,
      `-week-height`, `-day-number`, `-agenda-spine`, `-agenda-badge`,
      `-agenda-control`, `-step-size` appear **nowhere**: not in API-SURFACE, not
      in a docblock, not in the gallery, not in the CHANGELOG. The repo already
      has the convention — `app-shell.component.ts:71-73` ships an
      `| input | CSS var | default | meaning |` table. My docblocks found room
      for an essay on date strings but not one theming line. Rule 10.1 counts “a
      token” as user-facing. Fix: a `## Theming` table per component + a
      CHANGELOG section.

## 3 · API & DX — arbitrate before 0.8.0

- [x] **3a · Type the projected template context (`ngTemplateContextGuard`)** —
      the family's only seam is untyped, in a repo that bans `any`. ~6 lines:
      make `FoldCalendarEventDirective<T = unknown>` generic, export
      `FoldCalendarEventContext<T>`, add `static ngTemplateContextGuard`. Result:
      `let-event` and `let-band` typed under `strictTemplates`, autocompletion on
      `event.label`/`tone`/`data`, and `band: FoldCalendarBand<T> | null` becomes
      **visible** instead of surprising. Fix the docblock that claims otherwise.
      Bonus **V6**: `inject(TemplateRef)` with no argument is `TemplateRef<any>`
      on an exported public member — an implicit `any` no lint rule catches.
- [x] **3c/V8 · `foldFilterBySource` refuses its own model's default value** —
      `active = model<ReadonlySet<string> | null>(null)` where `null` = “show
      everything”; the null/empty-Set distinction is necessary and well
      documented, it stays. But `foldFilterBySource` takes a **non-nullable**
      `ReadonlySet<string>`: the one function built to consume that model refuses
      its default, so every consumer rewrites the same ternary — the gallery does
      it verbatim at `calendar-views.page.ts:129-132`. Fix: widen to `| null` and
      return `events` untouched. Separately (rule 5.2.2): `toggle()` never writes
      null, so every `(activeChange)` handler has to eliminate an impossible case
      → add `selectionChange = output<ReadonlySet<string>>()`, emitted from
      `toggle` only.
- [x] **3b/V16 · Generics: missing defaults, a useless `T`, an unwritten model** —
      (1) none of the seven components give `T` a default, while
      `calendar.types.ts` does it everywhere (`FoldCalendarEvent<T = unknown>`) —
      `ComponentFixture<FoldCalendarMonthComponent>` fails for no reason. Add
      `<T = unknown>` to all seven. (2) `FoldCalendarSourceFilterComponent<T>`:
      `T` appears only in `events` and in no output — it buys nothing and costs
      the reference without a type argument. Make it non-generic. (3)
      `fold-calendar-week` declares `date = model.required` and **never writes to
      it** (verified: no `this.date.set`) → forcing a writable signal for
      nothing; move to `input.required`. Month and toolbar genuinely write theirs.
- [x] **V2/2c · Public surface — DECIDED (2026-08-02): keep the geometry, and
      complete it.** The audit counted ~14 exports with no consumer and invoked
      rule 2.4; the SRP review argued the opposite way, that
      `foldCalendarNextFocus` was "the highest-value missing export". Both were
      right on their own axis, and the decision settles the axis rather than the
      symbols: **fold-ng ships a calendar toolkit, not only calendar
      components.** The pure builders stay public, `foldCalendarNextFocus` is
      added (a hand-rolled date grid owes its users the same arrow keys), and
      the README now presents the two tiers as a position instead of leaving
      them as an accident of what happened to be exported.

      `foldFocusDayCell` stays internal on purpose: it reads a `data-fold-day`
          attribute this package writes, so exporting it would freeze that attribute
          into the contract. Same for `foldClampLanes` — the builder clamps for you.

          The counter-argument, recorded so it does not have to be rediscovered: in
          0.x a removal is `BREAKING` and an addition is not, so this is the
          expensive direction to be wrong in. It was taken with two consumers known
          (SH3PHERD and LFC) and the precedent of `computePlacement`, which the
          package already exports with no second consumer.

- [x] **P6/3d · Move `eventCount` and `hiddenCount` onto `FoldCalendarDay`** —
      kills two findings at once. (a) _Perf_: `dayLabel()`
      (`calendar-month.component.ts:256-266`) calls `foldEventsOnDay(…).length` —
      an O(N) filter **with an intermediate array allocation** — for each of 35
      cells on every change-detection cycle, plus 35 `Intl.format()` calls. At
      200 events that is ~7 000 predicate evaluations per tick. `buildDays`
      already walks every day: the count is free. (b) _Data shape_:
      `hiddenByDay: readonly number[]` is a **positional** array, readable only
      when crossed with `week.days[i].date` and the current `weekStartsOn` —
      hence the `hiddenOn()` helper and a **second** `@for` over `week.days` in
      the template. Moving it onto the day removes the helper, the second `@for`,
      and makes the value self-describing. Current template cost: ~112 + 4B + 2O
      method invocations per CD in the month view, 35 of them O(N).

## 4 · Composability — the structural gap

The central charge of all three reviews: _“the family projects the smallest unit
(a chip) and hard-codes every container — that is backwards.”_

- [x] **2a · Day-cell template + `dayModifiers` (the #1 gap)** — the day cell
      renders only `{{ day.dayOfMonth }}` (`calendar-month.component.html:20-37`)
      and `FoldCalendarDay` is closed. No way to mark a public holiday, grey out
      a closure, show “3/8 staffed”, a price, a badge, or disable a range. **Every
      competitor has this lever**: Material `dateClass`/`dateFilter`,
      react-day-picker `modifiers` + `components`, Mantine
      `renderDay`/`getDayProps`, FullCalendar `dayCellContent`. Fix:
      `ng-template[foldCalendarDay]` + a `dayModifiers: (day) => readonly string[]`
      input. Also covers min/max dates and disabled days.
- [x] **2a · Missing templates: agenda heading, toolbar title, `+N` chip** — the
      three other absences that will hurt. (1) The agenda's day heading
      (`calendar-agenda.component.html:68-80`) — precisely where an app puts a
      counter or a quick action. (2) The toolbar title
      (`calendar-toolbar.component.html:26`) — hard-coded `<h2>` plus a frozen
      `foldViewTitle()`, no override; the fixed h2 level breaks the document
      outline of any page not at that level. (3) The overflow chip
      (`calendar-month.component.html:83-93`) — most apps want an avatar stack or
      a popover trigger there. Lesser: weekday headers (no narrow/long format, no
      week-number column), the agenda mode switch (two frozen buttons), the spine
      icon, a week-column empty state (nonexistent), and an `actions` slot on the
      agenda, which the toolbar has and it does not.
- [x] **2b · `FoldCalendarView` is a closed union (OCP violation)** — the
      toolbar↔view seam is real for **replacing**, closed for **extending**.
      `FoldCalendarView = "month"|"week"|"day"|"list"`
      (`calendar-navigation.ts:19`), `views: readonly FoldCalendarView[]`, and
      `named: Record<FoldCalendarView, string>` (`toolbar:105`): a “resource” or
      “timeline” view cannot be offered by the toolbar.
      `foldShiftDate`/`foldRangeForView`/`foldViewTitle` are closed switches with
      no default branch. Extending means editing the library. Fix: widen `views`
      to `readonly { value: string; label: string }[]`, keep the four as
      documented conventions, give the three functions a fallback or a registry.
- [x] **D4 · The list view breaks the projection contract of the other four** —
      `calendar-list.component.html:13-28`. In month/week/day/agenda the
      projected template replaces the **whole** inside of the chip. In the list it
      replaces only the middle: `.foldcall-bar` (`:13`) and `.foldcall-when`
      (`:14`) render **outside** the `@if`, and the default branch supplies **two**
      grid children (`.foldcall-body` + `.foldcall-sub`) in a four-column grid,
      where a projected template supplies **one**. A consumer template emitting
      two elements lands in columns 3 and 4; a single element leaves column 4
      empty. The same template renders structurally differently depending on the
      host view — undocumented, and the cause is that the list's CSS grid leaked
      into its projection boundary.

## 5 · Accessibility

- [x] **M6 · Guarantee the month keyboard path** — done: (1) the day's name now
      says "5 events, 2 not shown"; (4) the gallery demonstrates the drill-down.
      **Not done and deliberately so**: (2) a visually hidden `<ul>` inside the
      cell would be invisible to AT anyway — `aria-label` on the cell replaces
      its contents — and (3) an output has no public "is anyone listening?", so
      the dev warning cannot be written. The docblock now says `dayClick` is
      load-bearing instead. **M7** is fixed: the cell is a `gridcell` `<div>`,
      not a `<button>` whose native role was being overwritten.
      _Original finding:_ — the trade-off (a pure date
      grid + an alternative path) is a **legitimate** reading of WCAG 2.1.1;
      FullCalendar arbitrates the other way. But the alternative path is optional
      and unguaranteed: a consumer wiring only `(eventClick)` — **which is what my
      own `@example` does** — ships a month view where no event is keyboard
      reachable, with no warning. The published gallery has the same defect
      (`calendar-month.page.html:19-26`). Fix: (1) the day's accessible name
      distinguishes shown from hidden (“5 events, 2 not shown”) — the data is in
      `hiddenByDay`; (2) a keyboard route to the day's events plus a visually
      hidden `<ul>` in the cell to give the counter referents; (3) a dev-mode
      warning when `eventClick` is subscribed without `dayClick`; (4) the gallery
      must **demonstrate** the drill-down. See also **M7**: `role="gridcell"` set
      on the `<button>` overrides its native role.
- [x] **V11 · `forced-colors`: the day view has no block at all** — rule 6.5.
      `calendar-day.component.scss` (76 lines) has **no** `forced-colors` block,
      while `.foldcald-daynum.is-today { color: … }` (`:42-44`) is a purely
      chromatic cue: under Windows high contrast, “today” becomes invisible.
      `aria-current="date"` is present (non-visual carrier ✅) but 6.5 requires
      the visual re-expression **as well**. Weaker cases for the same pass:
      `calendar-list.component.scss:100-110` and `_calendar-chip.scss:69-79` —
      tone bars rest entirely on `background`, so under high contrast every row
      looks alike (only `muted` survives, via the strikethrough); consider
      `forced-color-adjust: none` on the bar, the one place it is justified. And
      `calendar-month.component.scss:80-90` — `.is-weekend` and `.is-outside` are
      background-only, and “outside the month” is meaningful.

## 6 · Refactor

- [x] **D1 · Five copies of the same chrome block → a host directive** —
      character-identical in `month:137-154`, `week:97-107`, `day:73-83`,
      `list:75-85`, `agenda:104-114` (`injectedLabels` + `projectedEvent` + `l()` + `eventContent`) — 7 copies of labels + `l()`, 5 of `projectedEvent` +
      `eventContent`, 6 of `locale`. This is **not** acceptable duplication:
      Angular 22 has `hostDirectives` for exactly this. Aggravating: the four
      `computed()`s memoising `Intl.DateTimeFormat` are duplicated across five
      components with slightly different option bags — that is **how** the day
      view ended up with `{weekday: "long", month: "long"}`, which produces
      “Wednesday May” (visible in the gallery screenshot: “MAY SATURDAY 30”, no
      day number, and not a sentence in any locale). Fix:
      `FoldCalendarChromeDirective` + a `FoldCalendarFormatters` service keyed by
      locale, which makes the combinations reviewable in one place.
- [x] **D2/D3 · The tone table is written three times; `calendar-layout` does
      three jobs** — **D2**: the four tones (success/warning/alert/muted + the
      strikethrough) are reimplemented in `_calendar-chip.scss:69-91`,
      `calendar-month.component.scss:227-267` **and**
      `calendar-list.component.scss:100-122` — the list does **not** use the
      shared mixin and redoes the same semantics under `foldcall-*` names. Three
      places to edit to add a tone. Fix: one tone mixin parameterised by class
      prefix. **D3**: `calendar-layout.ts` (370 lines) mixes (a) month geometry +
      lane packing (~260), (b) column-view construction
      (`foldBuildWeek`/`Day`), (c) three one-line filters
      (`foldEventsOnDay`/`InRange`/`FilterBySource`) — while its own docblock
      claims it handles “the only genuinely algorithmic part”. Split into
      `calendar-month-grid.ts` / `calendar-columns.ts` / `calendar-filters.ts`;
      (c) is the group every consumer imports and the least coupled.
- [x] **V4/V5 · Inconsistent knob naming + unparameterised literals** — **V4**:
      three naming schemes in one family, with two collisions:
      `--fold-calendar-week-min-height` (a **row** of the month grid) vs
      `--fold-calendar-week-height` (the **week view**);
      `--fold-calendar-daynum-size` (a box) vs `--fold-calendar-day-number` (a
      **font** size). Plus `--fold-calendar-step-size` scoped to the family while
      the agenda knobs are scoped per component. Fix: a single
      `--fold-calendar-<view>-<knob>` scheme. **V5**: three frozen dimensions next
      to parameterised neighbours — the 3px accent bar (in `_calendar-chip:36`,
      `month:197` **and** `list:28` + `:126`, duplicated inside a container query,
      so it _will_ drift) and the 8px source dot (`source-filter:65-66`). Add
      `--fold-calendar-bar-width` and `--fold-calendar-dot-size`. Minor:
      `var(--fold-motion-fast, 120ms)` ×6 where the package precedent is a bare
      `var(--fold-motion-fast)` — a literal fallback rewrites a scale value inside
      a component and will drift.
- [x] **2d · Add the knobs consumers will ask for** — damning evidence: the
      library's own gallery has to patch its own component inline
      (`style="flex: 0 0 auto"` on `fold-calendar-agenda`,
      `calendar-views.page.html:79`) — the **expanded** agenda width is not
      parameterisable, only the collapsed spine is. Also missing: day-cell min
      height (only the row has one), band/chip border radius (today the global
      `--fold-radius-sm`, so changing it re-rounds the whole app), day-cell
      padding, band horizontal gutter (`margin-inline`), the list's date column
      width (a `7rem` literal that clips in verbose locales), and the container
      query thresholds for week (150/110px) and list (640px). Without these,
      consumers will write global CSS against `.foldcal-band`, `.foldcalw-col`,
      `.foldcala`, `.foldcall-row` — internal class names with no stability
      contract. And `_calendar-chip.scss` is a private partial that ng-packagr
      inlines, so it cannot be `@use`d from outside.

## 7 · Tests, gallery, RTL, date

- [x] **Tests · Confirmed gaps** — **E6**: my spec's comment “May 2026 … has a
      6-row natural grid” is **false** — it is 5 rows
      (`calendar-month.component.spec.ts:101` asserts `7*5`). Current coverage is
      4 rows (Feb 2027) and 5 rows (May 2026); **no test on a natural 6-row
      month**, exactly the case `fixedWeeks` exists for → use August 2026. And Feb
      2026 is 5 rows on a Monday anchor but 4 on a Sunday anchor: the anchor
      changes the row count, untested. **E7**: `hiddenByDay` for a span clipped
      across **three** week rows (verified correct, uncovered); empty `events` at
      component level for the week; negative/NaN/fractional `maxLanes` (only 0 is
      tested); no test asserts the **type** emitted by `overflowClick` against its
      doc. **V12**: the agenda has **no component spec** — it is the most stateful
      component in the family (two models, a collapsed/expanded fork with
      different `aria-expanded`/`aria-label`, a badge, relative naming) and
      nothing is exercised through a host, while the other six have one.
- [x] **Gallery · Playgrounds, defaults, raw px, backticks, and the seam that is
      never shown** — **V13**: `/calendar-views` demos **six** components and
      contains **no** `<dev-playground>`, while `CLAUDE.md` requires “one
      playground per component”; add at minimum toolbar (view × views ×
      weekStartsOn × locale) and agenda (mode × collapsed × limit). **V14**:
      `calendar-month.page.ts:196-205` always emits `weekStartsOn="mon"` and
      `[maxLanes]="3"` even at their defaults; rule 2.5 says emit **only**
      non-default attributes (`fixedWeeks` is already right — copy it). **V15**:
      `calendar-views.page.html:32-38` puts a five-property flex layout inline
      (that belongs in `gallery.css`) and `:24`/`:36-37` use **raw px**
      (`margin-top: 12px`, `gap: 16px`) while rule 4.1 mandates tokens in the
      gallery too. **V16**: `:3` contains markdown backticks inside HTML, which
      render literally. **And most importantly**: `grep -rn foldCalendarEvent demo/`
      returns **nothing** — the family's only composability story is demonstrated
      nowhere.
- [x] **RTL · Half broken, therefore worse than absent** — grid columns flip
      automatically under `direction: rtl`, the decorations do not:
      `.continues-before { margin-left: 0; border-top-left-radius: 0; padding-left: … }`
      and `.continues-after { margin-right: 0 }` are physical, so in RTL a
      continuation squares off on the **wrong** side; the `‹`/`›` chevrons
      (`\2039`/`\203A`) are hard-coded LTR; `.foldcal-day { border-right }` +
      `:last-of-type { border-right: 0 }` puts the separator on the wrong side;
      `text-align: left` in `.foldcal-band` and in the chip mixin; the half-day
      notches are physical too. Two files use `margin-inline` correctly, which
      proves the convention exists and was applied inconsistently. Worst possible
      shape: it looks supported right up until an Arabic locale ships.
- [x] **Date · `foldFromNativeDate` missing + brand `FoldCalendarDate`** —
      `foldFromNativeDate` shipped. The **brand was decided against**: the type
      has to accept a string straight off the wire or out of an
      `<input type="date">` without a cast, which is most of its value; the
      runtime guard plus the dev-mode warnings cover what a brand would have.
      Written into the docblock so the next reader does not re-open it.
      _Original finding:_ — the
      primitive survives the attack (`Temporal.PlainDate.toString()` **is**
      `YYYY-MM-DD`, so the API ages better than a `Date`-based one), but the
      boundary function is missing. There is `foldToNativeDate` (out) and
      **nothing** in: every consumer writes their own conversion, and the obvious
      shape `d.toISOString().slice(0, 10)` is **exactly** the timezone bug this
      whole design exists to kill. I removed the bug from the library and
      relocated it into every call site, undocumented. `foldToday()` already
      contains the correct implementation (local clock) — just expose it.
      Separately: `export type FoldCalendarDate = string` is a bare alias with no
      nominal safety — `event.start = "tomorrow"` compiles, and `API-SURFACE.md`
      reports `ModelSignal<string>`, so the alias evaporates at the public
      boundary. Consider a branded type.
- [x] **Details · dead `dateRange`, agenda spine, `todoCount`, duplicated aria,
      `bandLabel` ×2** — **M4**: `dateRange` is declared in the public
      `FoldCalendarLabels` interface and used **nowhere** (0 references): we are
      having a dead string translated. Either delete it or wire it into the
      list's `rangeLabel`, which hard-codes `Intl.formatRange` and therefore
      cannot be reordered per locale — precisely what the label was invented for.
      **V16**: the collapsed agenda spine always shows `l().agendaTodo` (“To
      handle”) even in `'all'` mode; and the mode switch's `role="group"` reuses
      `l().agenda`, the **same** accessible name as its parent `<aside>` (two
      nested regions, one name) → add a dedicated label. **M8**: `todoCount`
      counts over the **unfiltered** `events`, so an app that pre-filters gets a
      badge that disagrees with its own list; accept an `isActionable` predicate
      input. **M10**: `[attr.title]="bandLabel(band)"` on an `aria-hidden`
      element — harmless, but `bandLabel` is invoked twice per band per CD for the
      same string. **M9**: `onViewChange` silently swallows a mismatch; the guard
      only exists because `FoldViewToggleComponent.valueChange` emits `string`.
      **4c**: `foldFocusDayCell` looks for `[data-fold-calendar]` set in the
      _template_ while the deferred effect starts from `this.host.nativeElement`
      — two roots for the same lookup; and the date is interpolated unvalidated
      into a selector (`SyntaxError` on invalid input) → `CSS.escape` or a guard.

## 8 · Deferred — to arbitrate, not to do now

Gaps the benchmark identified whose absence is **defensible** but must be an
explicit choice rather than an oversight. In estimated order of value:

- [x] **Range selection / drag-to-create — DECIDED AGAINST (2026-08-02).** The
      benchmark called this "the missing half of the flow", reading the family
      as a leave/scheduling widget. It is not one: it is a **pure display**,
      agnostic of what the events mean and of which layer produced them.
      Originating a record is the consumer's flow, with the consumer's
      validation and the consumer's write path — a calendar that opened a
      "create" affordance would be guessing at all three.

      The second consumer settles it. In LFC the first calendar is a sales rep's
              — appointments, plus how long a client has been between **register** and
              **activation**. That is one open-ended band whose tone crosses a threshold
              the app owns (warning, then alert), and it renders today with no library
              change: `openEnd: true`, `end` clamped to the loaded window, `tone`
              computed by the caller. Nothing about it looks like SH3PHERD's leave
              requests, which is the point — the family should keep working for both
              without learning about either.

- [ ] **“See more” popover on the `+N`** (FullCalendar `moreLinkClick: 'popover'`).
- [ ] **`dayMaxEvents` auto-fitted to the real cell height** rather than a fixed
      `maxLanes`.
- [ ] **ISO week numbers** — no ISO-week function in `calendar-date.ts`; expected
      in European B2B.
- [ ] **A `@media print` sheet** — none across the 8 SCSS files; a month calendar
      gets printed.
- [ ] **First day of week derived from the locale** via `Intl.Locale#getWeekInfo()`.
- [ ] **A `formats` input alongside `labels`** — today the `Intl.DateTimeFormat`
      option bags are frozen inside each component, so you can translate but not
      reformat.
- [ ] **Event drag/resize, resource views, time grid, recurrence, timezones** —
      out of scope by decision (see §2, _Scope_).

## 9 · Cosmetic — only if the occasion arises

All within package precedent; the auditor partly argues against themselves here.

- [x] **V9 · Wrapper elements** — done for the month (`role="grid"` and its name
      moved to `:host`, which also removed the second root the keyboard helper
      had to find); the toolbar's flex wrapper stays, it is not free.
      _Original finding:_ — the seven components wrap in an element with
      zero host bindings, while 20+ components in the package use host bindings.
      The auditor concludes this is **not** the smell it looks like (rule 4.3
      targets conditional host classes, and `data-table.component.html:1` also
      opens a wrapper) — except in two free cases: the **month**, whose div exists
      only to carry `role="grid"` + `aria-label` (which belong on `:host`, and
      which would make the `[data-fold-calendar]` marker tracked by
      `foldFocusDayCell` unnecessary), and the **toolbar**, pure flex with no
      semantics.
- [x] **V10 · Three files over the 300-line hard line** — `calendar-layout.ts`
      is gone (split four ways, largest 275) and the month SCSS is at 299.
      `calendar-month.component.ts` is 321, of which ~110 lines are the JSDoc
      table; the roving focus came out into `calendar-roving-focus.ts`.
      _Original finding:_ — `calendar-layout.ts`
      370, `calendar-month.component.scss` 316, `calendar-month.component.ts` 308;
      all already use `templateUrl`/`styleUrl`, so rule 4.5's remedy is exhausted;
      precedent is mixed (`data-table.scss` is 481). Noted as “do not grow”.
- [ ] **CSS prefixes** — `foldcall` (list) and `foldcala` (agenda) are confusable
      and `foldcall` reads as “fold call”. No rule broken (§3 does not govern CSS
      class names) and `foldcal*` follows the `folddt` precedent.
