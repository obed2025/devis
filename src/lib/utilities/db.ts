import { del, entries, get, set } from "idb-keyval";
import type { Estimate } from "./types";
import { codes } from "currency-codes";

export async function createEstimate(estimate: Estimate) {
  const id = Date.now();

  await set(id, estimate);
  return id;
}

export const getAllEstimates = async (): Promise<[number, Estimate][]> => {
  return (await entries()) as [number, Estimate][];
};

export const deleteEstimate = async (id: number) => await del(id);

export async function getEstimate(id: number): Promise<Estimate | undefined> {
  return (await get(id)) as Estimate | undefined;
}

export const updateEstimate = async (id: number, estimate: Estimate) =>
  await set(id, estimate);

export function format(n: number, currency?: string) {
  if (!codes().includes(currency ?? "")) {
    currency = "RWF";
  }

  return n.toLocaleString(undefined, {
    style: "currency",
    currency: currency || "RWF",
  });
}
