import { del, entries, set } from "idb-keyval";
import type { Estimate } from "./types";

export async function createEstimate(estimate: Estimate) {
  const id = Date.now();

  await set(id, estimate);
  return id;
}

export const getAllEstimates = async (): Promise<[number, Estimate][]> => {
  return (await entries()) as [number, Estimate][];
};

export const deleteEstimate = async (id: number) => await del(id);
