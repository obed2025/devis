import { error } from '@sveltejs/kit';
import { command, getRequestEvent } from '$app/server';
import { db } from '$lib/db';
import * as v from 'valibot';
import { ObjectId } from 'mongodb';

export const deleteEstimate = command(v.string(), async (id) => {
  const { locals } = getRequestEvent();
  const _id = new ObjectId(id);

  if (!locals.user?.id) error(401, 'Un Authorized');
  const userID = new ObjectId(locals.user.id);

  await db.collection('estimates').findOneAndDelete({ _id, userID });
});
