import { betterAuth } from 'better-auth';
import { mongodbAdapter } from 'better-auth/adapters/mongodb';
import { db } from './db';
import { env } from '$env/dynamic/private';

export const auth = betterAuth({
  database: mongodbAdapter(db),
  socialProviders: {
    google: {
      prompt: 'select_account consent',
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    },
  },
});
