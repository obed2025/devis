import type { ObjectId } from 'mongodb';
import type { Estimate } from './types';

export const GlobalEstimate = class {
  data: Estimate;

  constructor(data: Estimate) {
    this.data = $state(data);
  }
};

export const selectedEstimates = new (class {
  #ids: ObjectId[] = $state([]);

  add(id: ObjectId) {
    this.#ids = [...new Set([...this.#ids, id])];
  }

  addMany(ids: ObjectId[]) {
    this.#ids = [...new Set([...this.#ids, ...ids])];
  }

  remove(id: ObjectId) {
    this.#ids = this.#ids.filter((existingId) => existingId !== id);
  }

  clear() {
    this.#ids = [];
  }

  get ids() {
    return this.#ids;
  }
})();
