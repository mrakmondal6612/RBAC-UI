// backend/controllers/roleController.js
const Role = require("../models/Role");

// Get all roles
exports.getRoles = async (req, res) => {
  try {
    const roles = await Role.find();
    res.json(roles);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Create a new role
exports.createRole = async (req, res) => {
  const { name, permissions } = req.body;

  // Validate input
  if (!name) {
    return res.status(400).json({ message: "Role name is required" });
  }

  try {
    const newRole = new Role({ name, permissions });
    await newRole.save();
    res.status(201).json(newRole);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Update an existing role
exports.updateRole = async (req, res) => {
  const { id } = req.params;
  const { name, permissions } = req.body;

  try {
    const updatedRole = await Role.findByIdAndUpdate(
      id,
      { name, permissions },
      { new: true }
    );
    if (!updatedRole) {
      return res.status(404).json({ message: "Role not found" });
    }
    res.json(updatedRole);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Delete a role
exports.deleteRole = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedRole = await Role.findByIdAndDelete(id);
    if (!deletedRole) {
      return res.status(404).json({ message: "Role not found" });
    }
    res.json({ message: "Role deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
