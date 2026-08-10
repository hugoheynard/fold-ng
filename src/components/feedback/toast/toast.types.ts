/** The tone of a toast — drives its accent color + icon. */
export type FoldToastVariant = "success" | "info" | "warning" | "error";

/** A single transient notification (a queued toast). */
export type FoldToast = {
  id: string;
  message: string;
  variant: FoldToastVariant;
  durationMs: number;
  /** Occurrences collapsed into this toast — `1` unless the message recurred. */
  repeats: number;
};
