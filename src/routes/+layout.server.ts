import { redirect } from '@sveltejs/kit';
import { PUBLIC_URLS } from '$lib/consts.js';

export const load = ({ locals, url }) => {
  const { user, session } = locals;

  const { pathname } = url;

  if (!user && !session && !PUBLIC_URLS.includes(pathname)) {
    return redirect(307, PUBLIC_URLS[0] + `?redirect=${pathname}`);
  }

  return { user, session };
};
