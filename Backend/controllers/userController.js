// backend/controllers/userController.js
const User = require("../models/User"); // Import the User model
const Role = require("../models/Role"); // Import the Role model (if you need to reference roles)

// Get all users
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find().populate("role"); // Populate role details
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Create a new user
exports.createUser = async (req, res) => {
  const { username, email, password, role } = req.body;

  // Validate input
  if (!username || !email || !password) {
    return res
      .status(400)
      .json({ message: "Username, email, and password are required" });
  }

  try {
    // Check if the role exists
    const foundRole = await Role.findById(role);
    if (!foundRole) {
      return res.status(400).json({ message: "Role not found" });
    }

    // Create a new user
    const newUser = new User({ username, email, password, role });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Update an existing user
exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const { username, email, password, role, isActive } = req.body;

  try {
    // Check if the user exists
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User  not found" });
    }

    // Update user details
    user.username = username || user.username;
    user.email = email || user.email;
    user.password = password || user.password; // You may want to hash the password before saving
    user.role = role || user.role;
    user.isActive = isActive !== undefined ? isActive : user.isActive; // Update only if provided

    await user.save();
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Delete a user
exports.deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ message: "User  not found" });
    }
    res.json({ message: "User  deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
