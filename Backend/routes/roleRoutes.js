// backend/routes/roleRoutes.js
const express = require("express");
const {
  getRoles,
  createRole,
  updateRole,
  deleteRole,
} = require("../controllers/roleController");
const router = express.Router();

router.route("/").get(getRoles).post(createRole);
router.route("/:id").put(updateRole).delete(deleteRole);

module.exports = router;
