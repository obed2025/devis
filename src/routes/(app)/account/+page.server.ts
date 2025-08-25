import { error } from '@sveltejs/kit';

export const load = ({ locals }) => {
  if (!locals.user) error(401, 'Un Authorized');

  const { createdAt, email, name, image } = locals.user;

  return { createdAt, email, name, image };
};
