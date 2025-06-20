const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema(
  {
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  },
  { _id: false }
);

const todoSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "medium",
    },
    completed: { type: Boolean, default: false },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    tags: [String],
    assignedUsers: [String],
    notes: [noteSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Todo", todoSchema);
