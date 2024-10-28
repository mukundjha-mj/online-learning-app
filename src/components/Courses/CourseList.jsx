import { useEffect, useState } from 'react';
import { fetchCourses } from '../../services/api';
import CourseCard from './CourseCard';

const CourseList = () => {
    const [courses, setCourses] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState('all');

    const categories = ['all', 'programming', 'design', 'business', 'marketing'];

    useEffect(() => {
        const getCourses = async () => {
            setIsLoading(true);
            try {
                const data = await fetchCourses();
                console.log('Fetched courses:', data);
                setCourses(data);
            } catch (error) {
                console.error('Error fetching courses:', error);
            } finally {
                setIsLoading(false);
            }
        };
        getCourses();
    }, []);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Header Section */}
            <div className="mb-12">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Explore Courses</h1>
                <p className="text-lg text-gray-600 mb-8">Discover our wide range of courses to enhance your skills</p>
                
                {/* Categories Filter */}
                <div className="flex flex-wrap gap-3">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                                selectedCategory === category
                                    ? 'bg-blue-600 text-white shadow-lg'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            }`}
                        >
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </button>
                    ))}
                </div>
            </div>

            {/* Loading State */}
            {isLoading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3, 4, 5, 6].map((n) => (
                        <div key={n} className="bg-white rounded-2xl shadow-lg p-4 animate-pulse">
                            <div className="w-full h-48 bg-gray-200 rounded-xl mb-4"></div>
                            <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                        </div>
                    ))}
                </div>
            ) : (
                /* Courses Grid */
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courses.length === 0 ? (
                        <div className="col-span-full text-center py-12">
                            <div className="text-gray-500 text-lg">No courses found</div>
                        </div>
                    ) : (
                        courses.map(course => (
                            <div key={course._id} className="transform hover:-translate-y-1 transition-all duration-200">
                                <CourseCard course={course} />
                            </div>
                        ))
                    )}
                </div>
            )}

            {/* Load More Button */}
            {!isLoading && courses.length > 0 && (
                <div className="text-center mt-12">
                    <button className="px-8 py-3 bg-white border-2 border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl">
                        Load More Courses
                    </button>
                </div>
            )}
        </div>
    );
};

export default CourseList;