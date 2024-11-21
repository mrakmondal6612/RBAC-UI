// frontend/src/components/RoleList.js.
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { fetchRoles } from "../../api";

export default function RoleList() {
   const [roles, setRoles] = useState([]);

    useEffect(() => {
        const getRoles = async () => {
            const response = await fetchRoles();
            setRoles(response.data);
        };
        getRoles();
    }, []);

    return (
        <div>
            <h2>Role List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Role Name</th>
                        <th>Permissions</th>
                    </tr>
                </thead>
                <tbody>
                    {roles.map(role => (
                        <tr key={role._id}>
                            <td>{role.name}</td>
                            <td>{role.permissions.join(', ')}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}


