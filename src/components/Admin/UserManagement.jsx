// src/components/Admin/UserManagement.jsx
import React, { useEffect, useState } from 'react';
import { fetchUsers, deleteUser } from '../../services/api'; // Ensure these functions are defined in your API service.

const UserManagement = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const loadUsers = async () => {
            const usersData = await fetchUsers();
            setUsers(usersData);
        };
        loadUsers();
    }, []);

    const handleDelete = async (userId) => {
        await deleteUser(userId);
        setUsers(users.filter(user => user.id !== userId));
    };

    return (
        <div className="p-6">
            <h1 className="text-4xl font-bold mb-6">User Management</h1>
            <table className="min-w-full">
                <thead>
                    <tr>
                        <th className="border px-4 py-2">User Name</th>
                        <th className="border px-4 py-2">Email</th>
                        <th className="border px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td className="border px-4 py-2">{user.name}</td>
                            <td className="border px-4 py-2">{user.email}</td>
                            <td className="border px-4 py-2">
                                <button 
                                    onClick={() => handleDelete(user.id)} 
                                    className="bg-red-600 text-white px-4 py-2 rounded-lg"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* Add User Form goes here */}
        </div>
    );
};

export default UserManagement;
