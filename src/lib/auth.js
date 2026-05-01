import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.MONGO_DB_URL);
const db = client.db("Tiles-Batter");

export const auth = betterAuth({
  baseURL: process.env.BETTER_AUTH_URL, 
  secret: process.env.BETTER_AUTH_SECRET,

  emailAndPassword: { 
    enabled: true, 
  },

  database: mongodbAdapter(db, {
    client
  }),

  socialProviders: {
    google: { 
      clientId: process.env.GOOGLE_CLIENT_ID, 
      clientSecret: process.env.GOOGLE_CLIENT_SECRET, 
    }, 
  },
});