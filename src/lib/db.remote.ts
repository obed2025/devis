import { error } from '@sveltejs/kit';
import { command, getRequestEvent } from '$app/server';
import { db } from '$lib/db';
import * as v from 'valibot';
import { ObjectId } from 'mongodb';
import type { Estimate } from './utilities/types';

export const deleteMany = command(v.array(v.string()), async (ids) =>
  ids.forEach(async (id) => await deleteEstimate(id))
);

export const deleteEstimate = command(v.string(), async (id) => {
  const { locals } = getRequestEvent();
  const _id = new ObjectId(id);

  if (!locals.user?.id) error(401, 'Un Authorized');
  const userID = new ObjectId(locals.user.id);

  await db.collection('estimates').findOneAndDelete({ _id, userID });
});

export const updateEstimate = command(
  v.custom<Estimate>((check) => true),
  async (estimate) => {
    const _id = new ObjectId(estimate._id);
    const userID = new ObjectId(estimate.userID);

    if (estimate.userID !== getRequestEvent().locals.user?.id)
      error(401, 'Un Authorized');

    const { expenses, title, currency, extraExpenses, note, scopeOfWork } =
      estimate;

    await db.collection('estimates').findOneAndUpdate(
      { _id, userID },
      {
        $set: { expenses, title, currency, extraExpenses, note, scopeOfWork },
      }
    );
  }
);
