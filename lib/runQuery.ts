import mysql from "mysql2/promise";

export default async function runQuery(query: string) {
  // Creates a connection to the database
  const db = await mysql.createConnection({
    host: "localhost",
    user: process.env.DB_USERNAME, // A user with READ ONLY access to the database
    password: process.env.DB_PASSWORD, // The password for the user
    database: "sample",
  });

  try {
    const [rows] = await db.query(query);
    return { data: rows };
  } catch (err: any) {
    console.log("Error running the SQL query.");
    return { error: err.message };
  } finally {
    await db.end();
  }
}
