import { env } from "@/env";
import { neon, neonConfig } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

neonConfig.fetchConnectionCache = true;

if (!(env.DATABASE_URL)) {
  throw new Error("Database URL not found");
}

const sql = neon(env.DATABASE_URL);

export const database = drizzle(sql);