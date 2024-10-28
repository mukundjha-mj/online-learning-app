// src/components/Admin/CourseManagement.jsx
import React, { useEffect, useState } from 'react';
import { fetchCourses, deleteCourse } from '../../services/api'; // Make sure these functions are defined in your API service.

const CourseManagement = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const loadCourses = async () => {
            const coursesData = await fetchCourses();
            setCourses(coursesData);
        };
        loadCourses();
    }, []);

    const handleDelete = async (courseId) => {
        await deleteCourse(courseId);
        setCourses(courses.filter(course => course.id !== courseId));
    };

    return (
        <div className="p-6">
            <h1 className="text-4xl font-bold mb-6">Course Management</h1>
            <table className="min-w-full">
                <thead>
                    <tr>
                        <th className="border px-4 py-2">Course Name</th>
                        <th className="border px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map(course => (
                        <tr key={course.id}>
                            <td className="border px-4 py-2">{course.name}</td>
                            <td className="border px-4 py-2">
                                <button 
                                    onClick={() => handleDelete(course.id)} 
                                    className="bg-red-600 text-white px-4 py-2 rounded-lg"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* Add Course Form goes here */}
        </div>
    );
};

export default CourseManagement;
