import { Signal, effect, signal } from '@angular/core';
import { timeout } from '../utils/timeout';

export function useFetch<D>(url: Signal<string>) {
  const data = signal<D | null>(null);
  const error = signal<Error | null>(null);

  async function doFetch() {
    const urlValue = url();

    try {
      // artificial delay / random error
      await timeout();

      const res = await fetch(urlValue);
      data.set(await res.json());
      error.set(null);
    } catch (e) {
      data.set(null);
      error.set(e as Error);
    }
  }

  effect(doFetch);

  return { data, error, retry: doFetch };
}
