/** The tone of a toast — drives its accent colour + icon. */
export type Sh3ToastVariant = "success" | "info" | "warning" | "error";

/** A single transient notification (a queued toast). */
export type Sh3Toast = {
  id: string;
  message: string;
  variant: Sh3ToastVariant;
  durationMs: number;
};
