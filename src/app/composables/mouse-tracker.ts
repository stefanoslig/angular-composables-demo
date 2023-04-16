import { DOCUMENT } from '@angular/common';
import { DestroyRef, inject, signal } from '@angular/core';

export function useMouse() {
  // injectables
  const document = inject(DOCUMENT);

  // state encapsulated and managed by the composable
  const x = signal(0);
  const y = signal(0);

  // a composable can update its managed state over time.
  function update(event: MouseEvent) {
    x.update(() => event.pageX);
    y.update(() => event.pageY);
  }

  document.addEventListener('mousemove', update);

  // lifecycle to teardown side effects.
  inject(DestroyRef).onDestroy(() =>
    document.removeEventListener('mousemove', update)
  );

  // expose managed state as return value
  return { x, y };
}
