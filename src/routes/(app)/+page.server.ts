import { error } from '@sveltejs/kit';
import { db } from '$lib/db';
import { ObjectId } from 'mongodb';
import type { Estimate } from '$lib/utilities/types';

export const load = async ({ locals }) => {
  const userID = locals.user?.id as string;

  const estimatesArray = await db
    .collection('estimates')
    .find({ userID: new ObjectId(userID) })
    .toArray();

  const estimates = JSON.parse(JSON.stringify(estimatesArray)) as
    | Estimate[]
    | null;

  return { estimates };
};
