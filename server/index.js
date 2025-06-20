const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const userRoutes = require("./routes/users.routes");
const todoRoutes = require("./routes/todos.routes");
const seedIfNeeded = require("./seed/seedUsers");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/todos", todoRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("MongoDB connected");
    await seedIfNeeded(); // 👈 add this
    app.listen(8080, () => console.log("Server running on port 8080"));
  })
  .catch((err) => console.error("DB connection error:", err));
