import React, { useState } from 'react';

const UserProfile = () => {
    const [activeTab, setActiveTab] = useState('courses');

    // Sample user data - replace with actual user data from your context/API
    const user = {
        name: "John Doe",
        email: "john.doe@example.com",
        joined: "January 2024",
        completedCourses: 5,
        inProgress: 3,
        certificates: 4
    };

    const enrolledCourses = [
        {
            id: 1,
            title: "Advanced Web Development",
            progress: 75,
            lastAccessed: "2 days ago",
            image: "/api/placeholder/400/200"
        },
        {
            id: 2,
            title: "Data Science Fundamentals",
            progress: 45,
            lastAccessed: "1 week ago",
            image: "/api/placeholder/400/200"
        },
        {
            id: 3,
            title: "UI/UX Design Principles",
            progress: 90,
            lastAccessed: "1 day ago",
            image: "/api/placeholder/400/200"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Profile Header */}
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl shadow-xl p-8 mb-8">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="relative">
                            <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center text-3xl font-bold text-blue-600 shadow-lg">
                                {user.name.charAt(0)}
                            </div>
                            <div className="absolute bottom-0 right-0 w-8 h-8 bg-green-500 rounded-full border-4 border-white"></div>
                        </div>
                        <div className="text-center md:text-left text-white">
                            <h1 className="text-3xl font-bold mb-2">{user.name}</h1>
                            <p className="text-blue-100 mb-4">{user.email}</p>
                            <p className="text-sm text-blue-100">Member since {user.joined}</p>
                        </div>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                        <div className="text-4xl font-bold text-blue-600 mb-2">{user.completedCourses}</div>
                        <div className="text-gray-600">Completed Courses</div>
                    </div>
                    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                        <div className="text-4xl font-bold text-blue-600 mb-2">{user.inProgress}</div>
                        <div className="text-gray-600">Courses in Progress</div>
                    </div>
                    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                        <div className="text-4xl font-bold text-blue-600 mb-2">{user.certificates}</div>
                        <div className="text-gray-600">Certificates Earned</div>
                    </div>
                </div>

                {/* Tabs */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
                    <div className="flex border-b">
                        <button
                            onClick={() => setActiveTab('courses')}
                            className={`px-8 py-4 text-lg font-medium transition-colors duration-200 ${
                                activeTab === 'courses'
                                    ? 'text-blue-600 border-b-2 border-blue-600'
                                    : 'text-gray-600 hover:text-blue-600'
                            }`}
                        >
                            My Courses
                        </button>
                        <button
                            onClick={() => setActiveTab('certificates')}
                            className={`px-8 py-4 text-lg font-medium transition-colors duration-200 ${
                                activeTab === 'certificates'
                                    ? 'text-blue-600 border-b-2 border-blue-600'
                                    : 'text-gray-600 hover:text-blue-600'
                            }`}
                        >
                            Certificates
                        </button>
                    </div>

                    {/* Courses Content */}
                    {activeTab === 'courses' && (
                        <div className="p-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {enrolledCourses.map(course => (
                                    <div key={course.id} className="bg-white border rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                                        <img
                                            src={course.image}
                                            alt={course.title}
                                            className="w-full h-48 object-cover"
                                        />
                                        <div className="p-6">
                                            <h3 className="font-semibold text-xl mb-2">{course.title}</h3>
                                            <div className="mb-4">
                                                <div className="flex justify-between text-sm text-gray-600 mb-1">
                                                    <span>Progress</span>
                                                    <span>{course.progress}%</span>
                                                </div>
                                                <div className="w-full bg-gray-200 rounded-full h-2">
                                                    <div
                                                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                                                        style={{ width: `${course.progress}%` }}
                                                    ></div>
                                                </div>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-sm text-gray-500">
                                                    Last accessed {course.lastAccessed}
                                                </span>
                                                <button className="text-blue-600 hover:text-blue-700 font-medium">
                                                    Continue
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Certificates Content */}
                    {activeTab === 'certificates' && (
                        <div className="p-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[1, 2, 3, 4].map(cert => (
                                    <div key={cert} className="bg-gray-50 border rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                                        <div className="flex items-center justify-center mb-4">
                                            <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                            </svg>
                                        </div>
                                        <h3 className="text-center font-semibold mb-2">Course Certificate {cert}</h3>
                                        <p className="text-center text-sm text-gray-600 mb-4">Completed on March {cert}, 2024</p>
                                        <button className="w-full px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-200">
                                            View Certificate
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default UserProfile;