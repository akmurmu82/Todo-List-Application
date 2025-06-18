const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const User = require("../models/User");

const users = [
  { username: "john_doe", displayName: "John Doe" },
  { username: "jane_smith", displayName: "Jane Smith" },
  { username: "bob_brown", displayName: "Bob Brown" },
  { username: "alice_johnson", displayName: "Alice Johnson" },
  { username: "charlie_davis", displayName: "Charlie Davis" },
];

const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await User.deleteMany({});
    await User.insertMany(users);
    console.log("✅ Seeded users successfully.");
    process.exit();
  } catch (err) {
    console.error("❌ Error seeding users:", err);
    process.exit(1);
  }
};

seed();

// node seed/seedUsers.js
// This script connects to the MongoDB database, deletes any existing users,
// and inserts a predefined list of users into the database. It uses Mongoose for database operations.