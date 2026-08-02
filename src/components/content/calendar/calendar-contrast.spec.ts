import { readdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { describe, expect, it } from "vitest";

/**
 * The family never paints **text** with the two faint tokens.
 *
 * Measured on the umbra theme against a card: `--fold-color-text-muted` is
 * 2.78:1 and `--fold-color-text-faded` is 2.00:1, both well under WCAG AA's
 * 4.5; `--fold-color-text-secondary` is 4.86:1. The calendar used the faint two
 * for weekday headers, day numbers, sublines and the overflow chip until axe
 * counted 52 violations across three pages.
 *
 * Asserted at the source rather than in the browser on purpose: a rendered
 * ratio moves with the theme and the surface underneath, so a pixel measurement
 * makes a brittle test. "No text is painted with a token that cannot pass" is
 * the rule that actually holds, and it holds in every theme at once.
 *
 * Backgrounds are exempt — a tone bar and a source dot are shapes, not text.
 */
const FAINT = ["--fold-color-text-muted", "--fold-color-text-faded"];

/** Decorative glyphs inside an `aria-hidden` band, whose meaning is also
 *  carried by the squared-off corner they sit on. */
const ALLOWED = [
  { file: "calendar-month.component.scss", contains: 'content: "\\2039"' },
  { file: "calendar-month.component.scss", contains: 'content: "\\203A"' },
];

const HERE = dirname(fileURLToPath(import.meta.url));

/** Every `color:` declaration in the family, with its file and line. */
function textColours(): readonly {
  file: string;
  line: number;
  text: string;
  block: string;
}[] {
  const found: { file: string; line: number; text: string; block: string }[] =
    [];
  for (const file of readdirSync(HERE).filter((name) =>
    name.endsWith(".scss"),
  )) {
    const lines = readFileSync(join(HERE, file), "utf8").split("\n");
    lines.forEach((text, index) => {
      if (/^\s*color:/.test(text)) {
        found.push({
          file,
          line: index + 1,
          text: text.trim(),
          // A few lines of context, so an allowed decorative glyph is
          // recognisable without hard-coding a line number.
          block: lines.slice(Math.max(0, index - 3), index + 1).join("\n"),
        });
      }
    });
  }
  return found;
}

describe("calendar contrast", () => {
  it("never paints text with a token that cannot reach AA", () => {
    const offenders = textColours()
      .filter((entry) => FAINT.some((token) => entry.text.includes(token)))
      .filter(
        (entry) =>
          !ALLOWED.some(
            (allowed) =>
              allowed.file === entry.file &&
              entry.block.includes(allowed.contains),
          ),
      )
      .map((entry) => `${entry.file}:${entry.line} — ${entry.text}`);

    expect(offenders).toEqual([]);
  });

  it("still allows the faint tokens as backgrounds", () => {
    // The tone bar and the source dot are shapes; contrast rules do not apply,
    // and forcing them brighter would flatten the tone scale.
    const backgrounds = readdirSync(HERE)
      .filter((name) => name.endsWith(".scss"))
      .flatMap((file) => readFileSync(join(HERE, file), "utf8").split("\n"))
      .filter((line) => /^\s*background: var\(--fold-color-text-/.test(line));
    expect(backgrounds.length).toBeGreaterThan(0);
  });
});
