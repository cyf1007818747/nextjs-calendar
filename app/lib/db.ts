import { Pool } from "pg";
import { PrismaClient } from "@prisma/client";

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
  // Additional configuration like SSL could be added here.
});

const prisma = new PrismaClient();

export { pool, prisma };
