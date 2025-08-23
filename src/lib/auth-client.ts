import { createAuthClient } from 'better-auth/client';

export const authClient = createAuthClient();

export const signIn = async (callbackURL?: string) => {
  await authClient.signIn.social({
    provider: 'google',
    callbackURL,
  });
};

export const signOut = async () => await authClient.signOut();
