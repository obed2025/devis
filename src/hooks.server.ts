import type { Handle } from "@sveltejs/kit";
import { paraglideMiddleware } from "$lib/paraglide/server";

import { auth } from "$lib/auth";
import { svelteKitHandler } from "better-auth/svelte-kit";
import { sequence } from "@sveltejs/kit/hooks";

const handleParaglide: Handle = ({ event, resolve }) =>
  paraglideMiddleware(event.request, ({ request, locale }) => {
    event.request = request;

    return resolve(event, {
      transformPageChunk: ({ html }) =>
        html.replace("%paraglide.lang%", locale),
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

  return svelteKitHandler({ event, resolve, auth });
};

export const handle = sequence(handleAuth, handleParaglide);
