import { env } from '$env/dynamic/private';
import { Estimates } from '$lib/schemas/Estimate';
import mongoose from 'mongoose';

mongoose.connect(env.MONGODB_CONNECTION_STRING);
export const db = mongoose.connection.getClient().db();

export const getEstimates = async (id: string) => {
  const estimates = await Estimates.find({ userID: id }, { _id: 0, __v: 0 });

  return JSON.parse(JSON.stringify(estimates));
};

// ⚠️⚠️⚠️ Remember to add types later
export const createEstimate = async (estimate: any) =>
  await Estimates.create(estimate);
