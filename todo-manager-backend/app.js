const express = require("express");
const sql = require("./database");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

// Define a function to create the todos table if it doesn't exist
async function createTable() {
  await sql`
    CREATE TABLE IF NOT EXISTS todos (
      id SERIAL PRIMARY KEY,
      title TEXT NOT NULL
    )
  `;
}

// Call the function at the start of your application
createTable().catch(console.error);

// Define your routes here

// Get all to-dos
app.get("/todos", async (req, res) => {
  const todos = await sql`SELECT * FROM todos`;
  res.json(todos);
});

// Get a to-do task based on id
app.get("/todos/:id", async (req, res) => {
  const { id } = req.params;
  const todos = await sql`SELECT * FROM todos where id = ${id}`;
  res.json(todos);
});

// Create a new to-do
app.post("/todos", async (req, res) => {
  const { title } = req.body;
  const todo =
    await sql`INSERT INTO todos (title) VALUES (${title}) RETURNING *`;
  res.status(201).json(todo);
});

// Update a to-do
app.put("/todos/:id", async (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  const todo =
    await sql`UPDATE todos SET title = ${title} WHERE id = ${id} RETURNING *`;
  res.json(todo);
});

// Delete a to-do
app.delete("/todos/:id", async (req, res) => {
  const { id } = req.params;
  await sql`DELETE FROM todos WHERE id = ${id}`;
  res.status(204).end();
});
