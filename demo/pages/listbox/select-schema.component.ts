import { Component, computed, input } from "@angular/core";

/** One layer row in the architecture diagram. */
interface SchemaLayer {
  /** The element/box at this layer. */
  readonly box: string;
  /** What it does / the attributes it carries. */
  readonly note: string;
  /** Label on the connector *into* this layer (empty on the first). */
  readonly flow: string;
}

interface Schema {
  readonly layers: readonly SchemaLayer[];
  /** The interaction summary under the stack. */
  readonly footer: string;
  /** Whether the stack renders in the native top layer (popover) or leaves the
   *  DOM entirely (native select) — drives the accent. */
  readonly kind: "popover" | "native";
}

const POPOVER = (multi: boolean): Schema => ({
  kind: "popover",
  layers: [
    {
      box: "<button> trigger",
      note: multi
        ? 'aria-haspopup="listbox" · aria-expanded · summarises the picks'
        : 'aria-haspopup="listbox" · aria-expanded · shows the selected label',
      flow: "",
    },
    {
      box: "fold-popover — native top layer",
      note: "escapes overflow + z-index · flip → size → shift · publishes --fold-popover-anchor-width",
      flow: "click / ↓ opens",
    },
    {
      box: multi
        ? 'role="listbox" + aria-multiselectable — holds focus'
        : 'role="listbox" — holds focus',
      note: "aria-activedescendant → the active option's id (focus never leaves)",
      flow: "renders the panel",
    },
    {
      box: "fold-option × N",
      note: "each derives its own selected / active from the owner (a computed reading the FOLD_LISTBOX_OWNER token — nothing pushed in during change detection)",
      flow: "projects rows",
    },
  ],
  footer: multi
    ? "↑/↓ move active · Enter/Space toggles membership · panel stays open · value = readonly string[]"
    : "↑/↓ move active · Enter commits + closes · returns focus to the trigger · value = string",
});

const NATIVE: Schema = {
  kind: "native",
  layers: [
    {
      box: "fold-select",
      note: "a thin wrapper — styled box + custom caret over the real control",
      flow: "",
    },
    {
      box: "native <select>",
      note: "[value] / (change) · Signal Forms · the browser owns keyboard + focus",
      flow: "wraps",
    },
    {
      box: "OS popup (browser / operating system)",
      note: "NOT in your DOM · not styleable · a native mobile wheel for free",
      flow: "opens",
    },
    {
      box: "<option> × N",
      note: "real projected option elements — plain text only",
      flow: "lists",
    },
  ],
  footer:
    "styleable panel / custom rows?  ✗    ·    accessible + mobile-native out of the box?  ✓",
};

/**
 * `<gal-select-schema>` — a small architecture diagram for the select-family tech
 * sections. A stack of layer boxes joined by labelled flow connectors, driven by
 * `kind`, so the popover-based controls and the native wrapper each get an honest
 * picture of where the panel lives and how selection travels.
 */
@Component({
  selector: "gal-select-schema",
  standalone: true,
  templateUrl: "./select-schema.component.html",
  styleUrl: "./select-schema.component.scss",
})
export class SelectSchemaComponent {
  /** Which control to diagram. */
  readonly kind = input.required<"listbox" | "multi" | "select">();

  protected readonly schema = computed<Schema>(() => {
    const k = this.kind();
    if (k === "select") {
      return NATIVE;
    }
    return POPOVER(k === "multi");
  });
}
