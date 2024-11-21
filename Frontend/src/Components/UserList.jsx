// frontend/src/components/UserList.js
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { fetchUsers } from "../../api"; 
import "./UserList.css"

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetchUsers();
      setUsers(response.data);
    };
    getUsers();
  }, []);

  return (
    <div>
      <h2>User List</h2>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.role ? user.role.name : "No Role"}</td>
              <td>{user.isActive ? "Active" : "Inactive"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
