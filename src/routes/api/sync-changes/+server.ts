import { json, type RequestHandler } from "@sveltejs/kit";
import { db } from "$lib/db";
import { ObjectId } from "mongodb";
import type { Estimate } from "$lib/utilities/types";

export const PATCH: RequestHandler = async ({ locals, request }) => {
  const userID = locals.user?.id;

  if (!userID) {
    return new Response(JSON.stringify({ message: "Not authorized" }), {
      status: 401,
    });
  }

  const body = await request.json();
  const localEstimates = body.estimates as [number, Estimate][];
  const localIDs = extractIDs(localEstimates);
  const deletedEstimates = body.deleted as number[];

  const user = await fetchUser(userID);
  const remoteEstimates = (user?.estimates ?? []) as [number, Estimate][];
  const remoteIDs = extractIDs(remoteEstimates);

  const mergedEstimates = mergeEstimates(
    localEstimates,
    remoteEstimates,
    localIDs,
    remoteIDs,
    deletedEstimates
  );

  await db
    .collection("user")
    .updateOne(
      { _id: new ObjectId(userID) },
      { $set: { estimates: mergedEstimates } },
      { upsert: true }
    );

  const updatedUser = await fetchUser(userID);

  return json(updatedUser?.estimates);
};

async function fetchUser(userID: string) {
  return await db.collection("user").findOne({ _id: new ObjectId(userID) });
}

function extractIDs(estimates: [number, Estimate][]): Set<number> {
  return new Set(estimates.map(([id]) => id));
}

function mergeEstimates(
  localEstimates: [number, Estimate][],
  remoteEstimates: [number, Estimate][],
  localIDs: Set<number>,
  remoteIDs: Set<number>,
  deleted: number[]
): [number, Estimate][] {
  const remoteOnly = remoteEstimates.filter(
    ([id]) => !localIDs.has(id) && !deleted.includes(id)
  );

  const localOnly = localEstimates.filter(([id]) => !remoteIDs.has(id));

  const intersection = localEstimates.filter(([id]) => remoteIDs.has(id));

  return [...remoteOnly, ...localOnly, ...intersection];
}
