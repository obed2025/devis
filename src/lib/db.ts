import { env } from "$env/dynamic/private";
import { MongoClient } from "mongodb";

const client = new MongoClient(env.MONGODB_CONNECTION_STRING);
export const db = client.db();
