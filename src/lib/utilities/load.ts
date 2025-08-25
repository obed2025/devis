import { getRequestEvent } from '$app/server';
import { db } from '$lib/db';
import { error } from '@sveltejs/kit';
import { ObjectId } from 'mongodb';
import type { Estimate } from './types';

export async function loadEstimate(id: string) {
  const _id = new ObjectId(id);
  const user_id = getRequestEvent().locals.user?.id;

  if (!user_id) error(401, 'Un Authorized');

  const userID = new ObjectId(user_id);
  const estimate = JSON.parse(
    JSON.stringify(await db.collection('estimates').findOne({ _id, userID }))
  ) as Estimate | null;

  if (!estimate) error(404, 'Not found');

  return { estimate };
}
