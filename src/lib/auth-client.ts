import { createAuthClient } from "better-auth/client";

export const authClient = createAuthClient();

export const signIn = async () => {
  await authClient.signIn.social({
    provider: "google",
  });
};

export const signOut = async () => await authClient.signOut();
