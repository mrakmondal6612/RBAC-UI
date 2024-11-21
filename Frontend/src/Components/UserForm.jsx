/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { createUser } from '../../api';
import "./UserForm.css"

export default function UserForm() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createUser ({ username, email, password, role });
        // eslint-disable-next-line no-undef
        refreshUsers(); // Function to refresh user list after adding
        setUsername('');
        setEmail('');
        setPassword('');
        setRole('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Add User</h3>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Role ID"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
            />
            <button type="submit">Add User</button>
        </form>
    );
}

