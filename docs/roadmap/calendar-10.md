---
version: "0.9"
title: "Calendar — road to 10"
status: "done — three token pairs left to arbitrate"
summary: "What it would take for the calendar family to be the thing an Angular team picks on merit, and provably so — not the thing they tolerate because it ships with the design system."
---

# Roadmap — calendar, road to 10

The hardening pass ([`calendar.md`](./calendar.md)) closed the defects. This one
is about the **ceiling**: what separates "good in its category" from "the one you
would choose even if fold-ng were not already in the project".

**10 is not feature parity with FullCalendar.** Parity would mean drag-create,
recurrence, timezones and resource views — three of which are data problems the
app already owns, and one of which we decided against. 10 means: in the category
this family actually declares (all-day spans, read-only, themeable), it is the
best available option **and can prove it**.

## Where it stands, axis by axis

Scored against the paid options in-category, not against a wish list.

| Axis                | Today | Target | What moves it                                           |
| ------------------- | ----- | ------ | ------------------------------------------------------- |
| Date model & typing | 9.5   | 10     | Temporal bridge (§4)                                    |
| Composability       | 9     | 9.5    | already the category's best; week-column empty slot     |
| Accessibility       | 8.5   | 10     | the design is right and **unproven** — §1               |
| i18n                | 7     | 9      | locale week info, ISO weeks, `formats` — §3             |
| Performance         | 7     | 9.5    | string-heavy internals — §2, measured                   |
| Proof               | 7.5   | 10     | 222 unit tests, **zero e2e**, no visual regression — §1 |
| Scope vs the market | 6     | 8.5    | the time grid is the cap — §5                           |
| Docs & gallery      | 9     | 9.5    | publish the numbers — §2                                |

The two lowest are the two that decide adoption: **proof** and **scope**.

---

## 1 · Proof — `P0`

The accessibility story is currently an argument, not evidence. The package has
Playwright suites for `listbox`, `multiselect` and `popover`; the calendar — the
family most dependent on real rendering (grid, spanning, container queries,
focus) — has none. Two visual bugs already reached the gallery in this family and
were caught by a human looking at it.

- [x] `P0·test` **Playwright suite for the calendar.** 17 tests. Found three
      things a unit test could not: the playground's stage renders inside an
      **iframe** (a page-level locator finds nothing), the deferred focus lands
      a tick after the keypress so it has to be polled, and a pointer aimed at a
      day a band covers hits the **band** — which is the intended reading, and
      now a documented one. _Original scope:_ Roving focus across a
      month, `PageUp`/`PageDown` paging **and the focus landing after it**
      (the regression the unit test now covers, re-proved in a real browser),
      `Home`/`End`, drill-down from a day into the day view, an overflow chip
      opening its day, source chips filtering grid + rail together, agenda
      collapse round-trip.
- [x] `P0·a11y` **axe-core over the calendar pages.** Zero violations on every
      rule except contrast, scoped to the calendar's own elements rather than
      the page — the gallery's chrome has its own story (its teal on white is
      3.06:1) and that is a different component's failing test.

      It caught two real things. **52 contrast failures**: every faint string in
          the family sat on `--fold-color-text-muted` (2.78:1) or `-faded` (2.00:1),
          neither of which can reach AA — all raised to `-secondary` (4.86:1), and
          the choice is now enforced at the **source** by
          `calendar-contrast.spec.ts`, which cannot drift with a theme the way a
          pixel measurement does. And **`scrollable-region-focusable`**: the time
          grid's hour area scrolls, so it needed to be a named tab stop.

          What is left below AA in that subtree is four **shared token pairs** used
          correctly — `on-primary`/`primary` 3.06, `alert-text`/`alert-surface`
          4.01, `text-secondary`/`surface-sunken` 4.18–4.47, and `text-muted` inside
          a nested `fold-view-toggle` 3.16. Fixing any of them re-tunes the whole
          package, so they are **the one thing this roadmap leaves open**. *Original
          scope:*, in the same run. Zero
          violations is a claim worth making only when a machine re-checks it.

- [ ] `P0·test` **Visual regression on the three pages × 2 themes × RTL.**
      Cheap, and it catches exactly the class that got through twice: a chip
      truncated to one letter, a custom chip wrapping out of its lane.
- [ ] `P1·a11y` **One real screen-reader pass** (VoiceOver + NVDA), written up in
      the docblock — what is announced walking a month, and what the drill-down
      sounds like. No competitor in this category publishes that.

## 2 · The engine — `P0`

**Done.** Was: 1 000 events 4.8 ms · 5 000 28.9 ms · 20 000 124 ms. Now:
**0.99 · 5.0 · 22**, every target beaten, with `pnpm bench:calendar` committed
against a budget and a non-zero exit.

The cost is **not** the algorithm, it is the representation: every comparison in
the candidate sort calls `foldDaysBetween`, which re-parses two strings and
builds two `Date`s. A prototype keying spans on epoch-days once — same packing,
same output — runs the filter+sort portion in **1.92 ms instead of 12.61 ms at
5 000 events (6.6×, measured)**.

- [x] `P0·depth` **Numeric span keys.** Compute epoch-day bounds once per span
      and per grid row; sort and clip on numbers. The public model stays strings
      — this is internal only, so nothing about the API changes.
- [x] `P0·depth` **Bucket spans per week row in one pass** instead of filtering
      the whole feed once per row (`O(rows × N)` → `O(N)`).
- [x] `P1·depth` **`foldCountByDay` on the same numeric walk** — it currently
      calls `foldAddDays` (string → Date → string) once per covered day.
- [x] `P1·docs` **Publish the numbers.** A benchmark line in the README and a
      gallery cell that runs it live. Nobody in this category publishes
      performance; being the only one that does is itself the differentiator.

Target: 1 000 events < 2 ms, 5 000 < 8 ms, 20 000 < 30 ms — with the benchmark
committed so it cannot silently regress.

## 3 · Locale — `P1`

`Intl` gives us every month and weekday name for free, which is already ahead of
the libraries that ship translation files. What is still guessed is everything
_around_ the names.

- [x] `P1·i18n` **Derive the week from the locale.** `Intl.Locale#getWeekInfo()`
      returns `firstDay`, `weekend` and `minimalDays`. Both `weekStartsOn` and
      `weekendDays` should default to it and stay overridable — today a French
      app gets Monday by luck and an Egyptian one gets it wrong.
- [x] `P1·i18n` **ISO week numbers**, as an optional leading column. Expected in
      European B2B, absent from `calendar-date.ts` entirely.
- [x] `P1·i18n` **A `formats` input beside `labels`.** The `Intl` option bags now
      live in one table (`FOLD_CALENDAR_FORMATS`); making that table overridable
      per instance is a small change and closes "I can translate but not
      reformat".
- [x] `P2·depth` **A print stylesheet.** A month calendar gets printed; none of
      the eight SCSS files has a `@media print` block.

## 4 · Temporal — `P1`, and the differentiator

`Temporal.PlainDate.toString()` **is** `YYYY-MM-DD`. The primitive chosen for
correctness happens to be exactly Temporal-shaped, which no `Date`-based library
can say.

- [x] `P1·dx` **`foldFromTemporal` / `foldToTemporal`**, typed structurally so
      the package takes no dependency and works whether or not the runtime has
      `Temporal`. Document the family as Temporal-native.
- [ ] `P2·i18n` **Non-Gregorian, honestly.** Today `dayOfMonth` is
      `Number(date.slice(8, 10))` — proleptic string surgery, so an Islamic
      locale gets Hijri month names over Gregorian numbers, a calendar that
      contradicts itself. The real fix is `PlainDate.withCalendar`, which is why
      it waits for §4 rather than being faked with `Intl`.

## 5 · The ceiling — the decision, not a task

Everything above makes the family excellent **inside its declared category**.
Only one thing moves the category itself: **a time grid**. It is the line
between "the leave calendar in my design system" and "a calendar", and it is the
first question anyone evaluating this will ask.

The design is not a compromise, because the primitive already points at it:

- [x] `P2·depth` **`fold-calendar-timegrid` — day and week, hour columns.**
      Time is modelled as **wall-clock `HH:mm`**, not an instant — the same
      decision as the date, for the same reason: an instant re-introduces the
      zone bug the whole module exists to remove, and a calendar shows the hour
      a human sees. The overlap layout is the lane packing already written and
      tested, rotated: interval-graph colouring over minutes instead of days.
      The all-day strip on top is the existing band renderer, unchanged.
      Still **display-only** — no drag, no resize, no create.

Estimated at 2–3 passes with its tests. It is the single largest item here and
the single largest lever; everything else is finish.

## What I would not do, and why

Refusing these is part of being a 10, not a gap in it.

- **Drag / resize / create** — decided (2026-08-02): the family is a pure
  display, and originating a record means guessing at the consumer's validation
  and write path.
- **Recurrence (RRULE)** — a data problem. The app expands a rule into events;
  a display that expanded rules would need to own a rule engine, a timezone and
  an exception model.
- **Timezones** — same boundary. The app converts once, on the way in.
- **Resource / staff × day grid** — a different family on the same date socle,
  already scoped out in SH3PHERD.
- **iCal import/export, undo, conflict detection** — application concerns
  wearing a calendar costume.
