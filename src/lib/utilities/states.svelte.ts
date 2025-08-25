import type { Estimate } from './types';

export const GlobalEstimate = class {
  data: Estimate;

  constructor(data: Estimate) {
    this.data = $state(data);
  }
};

export const selectedEstimates = new (class {
  #ids: string[] = $state([]);

  add(id: string) {
    this.#ids = [...new Set([...this.#ids, id])];
  }

  addMany(ids: string[]) {
    this.#ids = [...new Set([...this.#ids, ...ids])];
  }

  remove(id: string) {
    this.#ids = this.#ids.filter((existingId) => existingId !== id);
  }

  clear() {
    this.#ids = [];
  }

  get ids() {
    return this.#ids;
  }
})();
