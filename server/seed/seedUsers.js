const User = require("./models/User");

async function seedIfNeeded() {
  const existing = await User.countDocuments();
  if (existing === 0) {
    console.log("Seeding users...");
    await User.insertMany([
      { username: "john_doe", displayName: "John Doe" },
      { username: "jane_smith", displayName: "Jane Smith" },
      { username: "bob_brown", displayName: "Bob Brown" },
      { username: "alice_johnson", displayName: "Alice Johnson" },
      { username: "charlie_davis", displayName: "Charlie Davis" },
    ]);
    console.log("✅ Users seeded.");
  } else {
    console.log("Users already exist. Skipping seed.");
  }
}

module.exports = seedIfNeeded;