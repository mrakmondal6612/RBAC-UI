// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import UserList from "./Components/UserList";
import RoleList from "./Components/RoleList";
import UserForm from "./Components/UserForm";
import RoleForm from "./Components/RoleForm";
import "./App.css";

function App() {
  const [refreshUsers, setRefreshUsers] = useState(false);
  const [refreshRoles, setRefreshRoles] = useState(false);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Users</Link>
            </li>
            <li>
              <Link to="/roles">Roles</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <UserForm
                  refreshUsers={() => setRefreshUsers(!refreshUsers)}
                />
                <UserList />
              </>
            }
          />
          <Route
            path="/roles"
            element={
              <>
                <RoleForm refreshRoles={() => setRefreshRoles(!refreshRoles)} />
                <RoleList />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
