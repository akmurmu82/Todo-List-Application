const express = require("express");
const router = express.Router();
const Todo = require("../models/Todo");
const User = require("../models/User");

// Get all todos for a user
router.get("/", async (req, res) => {
  const { user } = req.query;
  if (!user) return res.status(400).json({ error: "User query required" });

  const foundUser = await User.findOne({ username: user });
  if (!foundUser) return res.status(404).json({ error: "User not found" });

  const todos = await Todo.find({ user: foundUser._id }).sort({
    createdAt: -1,
  });
  res.json(todos);
});

// Create a todo
router.post("/", async (req, res) => {
  const { user } = req.query;
  const data = req.body;

  const foundUser = await User.findOne({ username: user });
  if (!foundUser) return res.status(404).json({ error: "User not found" });

  const todo = new Todo({ ...data, user: foundUser._id });
  await todo.save();
  res.status(201).json(todo);
});

// Update a todo
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  const todo = await Todo.findByIdAndUpdate(id, updates, { new: true });
  if (!todo) return res.status(404).json({ error: "Todo not found" });

  res.json(todo);
});

// Delete a todo
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await Todo.findByIdAndDelete(id);
  res.status(204).send();
});

// Add a note
router.post("/:id/notes", async (req, res) => {
  const { id } = req.params;
  const { content } = req.body;

  const todo = await Todo.findById(id);
  if (!todo) return res.status(404).json({ error: "Todo not found" });

  todo.notes.push({ content });
  await todo.save();
  res.status(201).json(todo);
});

module.exports = router;
