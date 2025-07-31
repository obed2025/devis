import { createEstimate, getEstimates } from '$lib/utils/db';
import type { Actions } from './$types';

export const load = async ({ locals }) => {
  const estimates = await getEstimates(locals.user?.id || '');

  return { estimates };
};

export const actions = {
  default: async (event) => {
    await createEstimate({
      userID: event.locals.user?.id,
      title: event.locals.user?.name + ' - Random title',
      note:
        'Random noteeeeeeee at ' + new Date(Date.now()).toLocaleDateString(),
      amount: Math.floor(Math.random() * 100) + 1,
    });
  },
} satisfies Actions;
