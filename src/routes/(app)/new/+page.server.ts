import { db } from '$lib/db';
import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { ObjectId } from 'mongodb';

export const actions = {
  default: async ({ locals, request }) => {
    const userID = new ObjectId(locals.user?.id as string);
    const formData = await request.formData();

    const title = formData.get('title');
    const scopeOfWork = formData.get('scope-of-work');

    const newEstimate = await db.collection('estimates').insertOne({
      title,
      scopeOfWork,
      createdAt: new Date(),
      userID,
    });

    redirect(303, '/open/' + newEstimate.insertedId);
  },
} satisfies Actions;
