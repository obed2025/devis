import type { Handle } from '@sveltejs/kit';
import { paraglideMiddleware } from '$lib/paraglide/server';
import { sequence } from '@sveltejs/kit/hooks';
import { auth } from '$lib/utils/auth';
import { svelteKitHandler } from 'better-auth/svelte-kit';
import { building } from '$app/environment';

const handleParaglide: Handle = ({ event, resolve }) =>
  paraglideMiddleware(event.request, ({ request, locale }) => {
    event.request = request;

    return resolve(event, {
      transformPageChunk: ({ html }) =>
        html.replace('%paraglide.lang%', locale),
    });
  });

const handleAuth: Handle = async ({ event, resolve }) => {
  const fetchedSession = await auth.api.getSession({
    headers: event.request.headers,
  });

  if (fetchedSession) {
    const { user, session } = fetchedSession;
    event.locals.session = session;
    event.locals.user = user;
  } else {
    delete event.locals.session;
    delete event.locals.user;
  }

  return svelteKitHandler({ event, resolve, auth, building });
};

export const handle: Handle = sequence(handleParaglide, handleAuth);
