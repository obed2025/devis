import { del, entries, get, getMany, set, setMany } from "idb-keyval";
import type { Estimate } from "./types";
import { codes } from "currency-codes";

async function setEstimate(id: number, estimate: Estimate) {
  await set(id, {
    title: estimate.title.trim(),
    scopeOfWork: estimate.scopeOfWork.trim(),
    currency: estimate.currency?.trim(),
    note: estimate.note?.trim(),
    expenses: estimate.expenses.map((val) => ({
      ...val,
      desc: val.desc.trim(),
      unit: val.unit?.trim(),
    })),
    extraExpenses: estimate.extraExpenses?.map((val) => ({
      ...val,
      desc: val.desc.trim(),
    })),
  } satisfies Estimate);
}

export async function createEstimate(estimate: Estimate) {
  const id = Date.now();

  await setEstimate(id, estimate);
  return id;
}

export const getAllEstimates = async (): Promise<[number, Estimate][]> => {
  return (await entries()) as [number, Estimate][];
};

export const deleteEstimate = async (id: number) => {
  let deletedEstimates = JSON.parse(
    localStorage.getItem("deleted") ?? "[]"
  ) as number[];
  deletedEstimates.push(id);

  localStorage.setItem("deleted", JSON.stringify(deletedEstimates));

  await del(id);
};

export async function getEstimate(id: number): Promise<Estimate | undefined> {
  return (await get(id)) as Estimate | undefined;
}

export const updateEstimate = async (id: number, estimate: Estimate) =>
  await setEstimate(id, estimate);

export function format(n: number, currency?: string) {
  if (!codes().includes(currency ?? "")) {
    currency = "RWF";
  }

  return n.toLocaleString(undefined, {
    style: "currency",
    currency: currency || "RWF",
  });
}

export async function getManyEstimates(
  ids: number[]
): Promise<[number, Estimate][]> {
  const estimates = await getMany(ids);
  return ids
    .map((id, idx) => {
      const estimate = estimates[idx] as Estimate | null;
      return estimate ? ([id, estimate] as [number, Estimate]) : null;
    })
    .filter((entry): entry is [number, Estimate] => entry !== null);
}
