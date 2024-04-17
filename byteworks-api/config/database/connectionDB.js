import 'dotenv/config'
import pg from 'pg'

const pool = new pg.Pool({
    host: process.env.PG_HOST,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
    allowExitOnIdle: true,
});

export default pool;
