import type { MouseEvent } from 'react';

export const EASE = [0.16, 1, 0.3, 1] as const;

/** Writes pointer position to CSS vars on the element (drives `.spotlight`) — no re-renders. */
export function trackPointer(e: MouseEvent<HTMLElement>) {
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  el.style.setProperty('--mx', `${e.clientX - r.left}px`);
  el.style.setProperty('--my', `${e.clientY - r.top}px`);
}
