import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
  // Additional configuration like SSL could be added here.
});

export default pool;
