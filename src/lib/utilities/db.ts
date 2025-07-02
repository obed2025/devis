import { set } from "idb-keyval";
import type { Estimate } from "./types";

export async function createEstimate(estimate: Estimate) {
  const id = Date.now();

  await set(id, estimate);
  return id;
}
