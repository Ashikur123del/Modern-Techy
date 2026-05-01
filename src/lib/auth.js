import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.MONGO_DB_URL);
const db = client.db("Tiles-Batter");

export const auth = betterAuth({
     emailAndPassword: { 
    enabled: true, 
  },

  database: mongodbAdapter(db, {
    client
  }),
});