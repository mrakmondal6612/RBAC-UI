// backend/routes/userRoutes.js
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController"); // Import the user controller

// Route to get all users
router.get("/", userController.getUsers);

// Route to create a new user
router.post("/", userController.createUser);

// Route to update an existing user by ID
router.put("/:id", userController.updateUser);

// Route to delete a user by ID
router.delete("/:id", userController.deleteUser);

// Export the router
module.exports = router;
