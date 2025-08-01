import { redirect } from '@sveltejs/kit';
import { AUTH_URL } from '$lib/consts';

export const load = ({ locals, url }) => {
  const { user, session } = locals;
  const { pathname } = url;

  if (!user && !session && pathname !== AUTH_URL) {
    return redirect(307, `${AUTH_URL}?redirect=${pathname}`);
  }

  return { user, session };
};
