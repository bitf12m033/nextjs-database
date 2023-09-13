import type { Config } from "drizzle-kit";
 
export default {
  schema: "./src/db/schema/*",
  out: "./drizzle",
  driver: 'pg',
  dbCredentials: {
    connectionString: "postgres://default:sj3h1KYIqolE@ep-raspy-wildflower-30748843-pooler.ap-southeast-1.postgres.vercel-storage.com/verceldb?sslmode=require",
  }
} satisfies Config;