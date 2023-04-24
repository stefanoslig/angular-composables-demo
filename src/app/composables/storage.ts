import { DestroyRef, inject, signal } from '@angular/core';
import { parseValue } from '../utils/parse-value';

export function useLocalStorage(key: string) {
  // state encapsulated and managed by the composable
  const value = signal('');

  const onDestroy = () => {
    localStorage.setItem(key, JSON.stringify(value()));
    window.removeEventListener('storage', handler);
  };

  const serializedVal = localStorage.getItem(key);
  if (serializedVal !== null) {
    value.set(parseValue(serializedVal));
  }

  function handler(e: StorageEvent) {
    if (e.key === key) {
      const newValue = e.newValue ? parseValue(e.newValue) : null;
      value.set(newValue);
    }
  }

  window.addEventListener('storage', handler, true);

  // lifecycle to teardown side effects.
  inject(DestroyRef).onDestroy(onDestroy);
  window.onbeforeunload = onDestroy;

  // expose managed state as return value
  return { value };
}
