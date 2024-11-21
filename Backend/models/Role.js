// backend/models/Role.js
const mongoose = require("mongoose");

// Define the Role schema
const roleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true, // Ensure role names are unique
    },
    permissions: {
      type: [String], // Array of strings to hold permissions
      default: [], // Default to an empty array if no permissions are provided
    },
  },
  {
    timestamps: true, // Automatically manage createdAt and updatedAt fields
  }
);

// Export the Role model
module.exports = mongoose.model("Role", roleSchema);
