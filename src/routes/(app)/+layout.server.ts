import { error } from '@sveltejs/kit';

export const load = async ({ locals }) => {
  const userID = locals.user?.id;

  if (!userID) error(401, 'Un Authorized');

  return { userImage: locals.user?.image };
};
