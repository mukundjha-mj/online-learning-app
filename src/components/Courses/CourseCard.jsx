import React from 'react';

const CourseCard = ({ course }) => {
    return (
        <div className="bg-white rounded-2xl shadow-lg p-6 transition-transform transform hover:-translate-y-2">
            <img 
                src={course.image || '/path/to/default-image.jpg'} 
                alt={course.title} 
                className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900">{course.title}</h3>
            <p className="text-gray-600 mt-2">{course.description}</p>
            <div className="mt-4 flex items-center justify-between">
                <span className="text-sm text-gray-500">Category: {course.category}</span>
                <span className="text-sm text-blue-600 font-semibold">{course.price ? `$${course.price}` : 'Free'}</span>
            </div>
            <button className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200">
                Enroll Now
            </button>
        </div>
    );
};

export default CourseCard;
