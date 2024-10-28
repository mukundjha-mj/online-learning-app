import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth'; // adjust this based on your backend setup

// api.js
export const login = async ({ email, password }) => {
    try {
        const response = await fetch(`${API_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
            throw new Error('Login failed');
        }

        const data = await response.json();
        return {
            username: data.username, // Ensure this matches your API response
            email: data.email, // Add other user data as needed
        };
    } catch (error) {
        console.error(error);
        return null;
    }
};


export const register = async (details) => {
    try {
        const res = await axios.post(`${API_URL}/register`, details);
        return res.data;
    } catch (error) {
        // Log the error for debugging
        console.error('Registration Error:', error.response.data);
        return false; // Consider returning the error message instead
    }
};




export const fetchCourses = async () => {
    const response = await fetch(`${API_URL}/courses`);
    return await response.json();
};

export const deleteCourse = async (courseId) => {
    await fetch(`${API_URL}/courses/${courseId}`, {
        method: 'DELETE',
    });
};

export const fetchUsers = async () => {
    const response = await fetch(`${API_URL}/users`);
    return await response.json();
};

export const deleteUser = async (userId) => {
    await fetch(`${API_URL}/users/${userId}`, {
        method: 'DELETE',
    });
};