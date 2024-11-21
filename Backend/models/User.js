// backend/models/User.js
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs"); // For password hashing

// Define the User schema
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true, // Ensure usernames are unique
      trim: true, // Remove whitespace
    },
    email: {
      type: String,
      required: true,
      unique: true, // Ensure emails are unique
      trim: true,
      lowercase: true, // Convert email to lowercase
    },
    password: {
      type: String,
      required: true,
      minlength: 6, // Minimum password length
    },
    role: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Role", // Reference to a Role model (if you have roles)
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true, // Default to active
    },
  },
  { timestamps: true }
); // Automatically manage createdAt and updatedAt fields

// Hash the password before saving the user
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next(); // If the password hasn't changed, skip hashing
  }
  try {
    const salt = await bcrypt.genSalt(10); // Generate salt
    this.password = await bcrypt.hash(this.password, salt); // Hash the password
    next(); // Proceed to save the user
  } catch (error) {
    next(error); // Pass the error to the next middleware
  }
});

// Method to compare passwords
userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password); // Compare hashed password
};

// Create the User model
const User = mongoose.model("User ", userSchema);

// Export the User model
module.exports = User;
