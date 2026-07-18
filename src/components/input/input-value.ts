/** Read `.value` off an input event target as a string, without `$any()`. */
export function readInputValue(event: Event): string {
  const target = event.target;
  return target instanceof HTMLInputElement ? target.value : "";
}
