/** Read `.value` off an input/select/textarea event target as a string, without `$any()`. */
export function readInputValue(event: Event): string {
  const target = event.target;
  if (target instanceof HTMLInputElement) {
    return target.value;
  }
  if (target instanceof HTMLSelectElement) {
    return target.value;
  }
  if (target instanceof HTMLTextAreaElement) {
    return target.value;
  }
  return "";
}
