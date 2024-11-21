// frontend/src/components/RoleForm.js
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { createRole } from "../../api";

export default function RoleForm() {
  const [name, setName] = useState("");
  const [permissions, setPermissions] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createRole({ name, permissions: permissions.split(",") });
    // eslint-disable-next-line no-undef
    refreshRoles(); // Function to refresh role list after adding
    setName("");
    setPermissions("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Role</h3>
      <input
        type="text"
        placeholder="Role Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Permissions (comma separated)"
        value={permissions}
        onChange={(e) => setPermissions(e.target.value)}
        required
      />
      <button type="submit">Add Role</button>
    </form>
  );
}
