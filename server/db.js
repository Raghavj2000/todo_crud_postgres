import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
    user: "postgres",
    password: "root",
    host: "localhost",
    port: 5432,
    database: "perntodo"
});

// Create the "todo" table if it doesn't exist
const createTableQuery = `
CREATE TABLE IF NOT EXISTS todo (
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);
`;



pool.query(createTableQuery)
    .then(() => console.log("Table 'todo' is ready"))
    .catch((err) => console.error("Error creating table: ", err.message));

export default pool;
