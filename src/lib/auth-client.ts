import { createAuthClient } from 'better-auth/client';
import { deleteAllSessions } from './db.remote';

export const authClient = createAuthClient();

export const signIn = async (callbackURL?: string) => {
  await authClient.signIn.social({
    provider: 'google',
    callbackURL,
  });
};

export const signOut = async () => await authClient.signOut();

export const signOutAllDevices = async () => await deleteAllSessions();
