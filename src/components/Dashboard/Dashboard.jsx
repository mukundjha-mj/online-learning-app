import { useContext } from 'react';
import { AuthContext, user } from '../../context/AuthContext';
import React from 'react';

const Dashboard = () => {
    const { isAuthenticated } = useContext(AuthContext);
    const { isLoggedIn, logout } = useContext(AuthContext);
    const { user } = useContext(AuthContext);


    // Sample data - replace with actual data from your backend
    const recentCourses = [
        { id: 1, title: "Web Development Bootcamp", progress: 65, image: "/api/placeholder/400/300" },
        { id: 2, title: "Python Programming", progress: 32, image: "/api/placeholder/400/301" },
        { id: 3, title: "UI/UX Design Basics", progress: 89, image: "/api/placeholder/400/302" }
    ];

    const upcomingDeadlines = [
        { id: 1, title: "Submit Final Project", course: "Web Development", due: "2 days" },
        { id: 2, title: "Complete Quiz", course: "Python Programming", due: "5 days" },
        { id: 3, title: "Peer Review", course: "UI/UX Design", due: "1 week" }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Welcome Section */}
                <div className="min-h-screen bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 py-8">
                        <h1 className="text-3xl font-bold">Welcome back, {user ? user.name : "Student"}!</h1>
                        {/* Logout Button */}
                        {isLoggedIn && (
                            <button
                                onClick={logout}
                                className="px-4 py-2 bg-red-500 text-white rounded-lg mt-4"
                            >
                                Logout
                            </button>
                        )}
                    </div>

                    {/* Stats Overview */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white shadow-lg">
                            <div className="text-sm opacity-80">Courses in Progress</div>
                            <div className="text-3xl font-bold mt-2">5</div>
                        </div>
                        <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl p-6 text-white shadow-lg">
                            <div className="text-sm opacity-80">Completed Courses</div>
                            <div className="text-3xl font-bold mt-2">12</div>
                        </div>
                        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white shadow-lg">
                            <div className="text-sm opacity-80">Certificates Earned</div>
                            <div className="text-3xl font-bold mt-2">8</div>
                        </div>
                        <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl p-6 text-white shadow-lg">
                            <div className="text-sm opacity-80">Learning Hours</div>
                            <div className="text-3xl font-bold mt-2">156</div>
                        </div>
                    </div>

                    {/* Main Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Left Column */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Continue Learning Section */}
                            <div className="bg-white rounded-2xl shadow-lg p-6">
                                <h2 className="text-xl font-bold mb-6">Continue Learning</h2>
                                <div className="space-y-6">
                                    {recentCourses.map(course => (
                                        <div key={course.id} className="bg-white border border-gray-100 rounded-xl p-4 hover:shadow-md transition-all duration-200">
                                            <div className="flex gap-4">
                                                <img
                                                    src={course.image}
                                                    alt={course.title}
                                                    className="w-24 h-24 rounded-lg object-cover"
                                                />
                                                <div className="flex-1">
                                                    <h3 className="font-semibold mb-2">{course.title}</h3>
                                                    <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                                                        <div
                                                            className="bg-blue-600 rounded-full h-2"
                                                            style={{ width: `${course.progress}%` }}
                                                        ></div>
                                                    </div>
                                                    <span className="text-sm text-gray-600">{course.progress}% Complete</span>
                                                </div>
                                                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                                                    Continue
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Learning Activity */}
                            <div className="bg-white rounded-2xl shadow-lg p-6">
                                <h2 className="text-xl font-bold mb-6">Weekly Activity</h2>
                                <div className="h-64 flex items-end justify-between gap-2">
                                    {[40, 65, 32, 85, 45, 70, 55].map((height, index) => (
                                        <div key={index} className="w-full bg-blue-600/10 rounded-t-lg relative group">
                                            <div
                                                className="absolute bottom-0 w-full bg-blue-600 rounded-t-lg transition-all duration-300 group-hover:bg-blue-700"
                                                style={{ height: `${height}%` }}
                                            ></div>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex justify-between mt-4 text-sm text-gray-600">
                                    <span>Mon</span>
                                    <span>Tue</span>
                                    <span>Wed</span>
                                    <span>Thu</span>
                                    <span>Fri</span>
                                    <span>Sat</span>
                                    <span>Sun</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-8">
                            {/* Upcoming Deadlines */}
                            <div className="bg-white rounded-2xl shadow-lg p-6">
                                <h2 className="text-xl font-bold mb-6">Upcoming Deadlines</h2>
                                <div className="space-y-4">
                                    {upcomingDeadlines.map(deadline => (
                                        <div key={deadline.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                                            <div>
                                                <h3 className="font-semibold">{deadline.title}</h3>
                                                <p className="text-sm text-gray-600">{deadline.course}</p>
                                            </div>
                                            <div className="text-sm font-medium text-red-600">
                                                Due in {deadline.due}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Recommended Courses */}
                            <div className="bg-white rounded-2xl shadow-lg p-6">
                                <h2 className="text-xl font-bold mb-6">Recommended for You</h2>
                                <div className="space-y-4">
                                    {[1, 2, 3].map((item) => (
                                        <div key={item} className="group cursor-pointer">
                                            <img
                                                src={`/api/placeholder/400/${300 + item}`}
                                                alt="Course Preview"
                                                className="w-full h-32 rounded-xl object-cover mb-2 group-hover:opacity-90 transition-opacity duration-200"
                                            />
                                            <h3 className="font-semibold group-hover:text-blue-600 transition-colors duration-200">
                                                Advanced Course Title
                                            </h3>
                                            <p className="text-sm text-gray-600">4.8 ★★★★★ (2.5k reviews)</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                        </div>
                    </div>
            );
};

            export default Dashboard;
