import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <>
            <div className="min-h-screen bg-gray-50">
                {/* Hero Section */}
                <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                            <div className="space-y-6 md:space-y-8 text-center lg:text-left">
                                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                                    Unlock Your Potential With Expert-Led Online Courses
                                </h1>
                                <p className="text-lg sm:text-xl text-blue-100">
                                    Learn at your own pace with our comprehensive online courses.
                                    Join thousands of students advancing their careers.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                    <Link
                                        to="/courses"
                                        className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-white text-blue-600 rounded-xl font-semibold text-base sm:text-lg hover:bg-blue-50 transition-all duration-200 shadow-lg hover:-translate-y-0.5 text-center"
                                    >
                                        Explore Courses
                                    </Link>
                                    <Link
                                        to="/register"
                                        className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-transparent border-2 border-white rounded-xl font-semibold text-base sm:text-lg hover:bg-white/10 transition-all duration-200 text-center"
                                    >
                                        Get Started
                                    </Link>
                                </div>
                            </div>
                            <div className="hidden lg:block">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-blue-500 rounded-3xl rotate-6 opacity-30"></div>
                                    <img
                                        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.skillstork.org%2Fblog%2Fwp-content%2Fuploads%2F2022%2F11%2Fmodern-education-Skillstork.jpg&f=1&nofb=1&ipt=f906371d803d74617dc16c1dc2c79f5483dd004f2f3c7bb78ed19b2e71d6d32a&ipo=images'https://source.unsplash.com/3tYZjGSBwbk"
                                        alt="Learning Platform Preview"
                                        className="rounded-3xl shadow-2xl relative w-full"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-12 sm:py-16 md:py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12 md:mb-16">
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                                Why Choose Our Platform
                            </h2>
                            <p className="mt-4 text-lg sm:text-xl text-gray-600">
                                Everything you need to succeed in one place
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {[
                                {
                                    title: "Expert Instructors",
                                    description: "Learn from industry professionals with years of experience.",
                                    icon: (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                        />
                                    )
                                },
                                {
                                    title: "Self-Paced Learning",
                                    description: "Study at your own pace with lifetime access to all courses.",
                                    icon: (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M13 10V3L4 14h7v7l9-11h-7z"
                                        />
                                    )
                                },
                                {
                                    title: "Certificates",
                                    description: "Earn certificates upon completion to showcase your skills.",
                                    icon: (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    )
                                }
                            ].map((feature, index) => (
                                <div key={index} className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200">
                                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                                        <svg
                                            className="w-6 h-6 text-blue-600"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            {feature.icon}
                                        </svg>
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-semibold mb-4">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Popular Courses Section */}
                <section className="py-12 sm:py-16 md:py-20 bg-gray-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12 md:mb-16">
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                                Popular Courses
                            </h2>
                            <p className="mt-4 text-lg sm:text-xl text-gray-600">
                                Start learning from our most popular courses
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {[1, 2, 3].map((item) => (
                                <div
                                    key={item}
                                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-200"
                                >
                                    <img
                                        src={`/api/placeholder/400/${300 + item}`}
                                        alt="Course Preview"
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-4 sm:p-6">
                                        <div className="text-sm text-blue-600 font-semibold mb-2">
                                            CATEGORY
                                        </div>
                                        <h3 className="text-lg sm:text-xl font-bold mb-2">
                                            Course Title Here
                                        </h3>
                                        <p className="text-gray-600 mb-4 text-sm sm:text-base">
                                            Brief description of the course and what students will
                                            learn.
                                        </p>
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-500">4.8 ★★★★★</span>
                                            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm sm:text-base">
                                                Learn More
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="text-center mt-8 sm:mt-12">
                            <Link
                                to="/courses"
                                className="inline-block px-6 sm:px-8 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all duration-200 text-base sm:text-lg"
                            >
                                View All Courses
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="py-12 sm:py-16 md:py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
                            {[
                                { number: "100+", label: "Courses" },
                                { number: "50+", label: "Instructors" },
                                { number: "10k+", label: "Students" },
                                { number: "95%", label: "Success Rate" }
                            ].map((stat, index) => (
                                <div key={index} className="p-4">
                                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                                        {stat.number}
                                    </div>
                                    <div className="text-sm sm:text-base text-gray-600">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-12 sm:py-16 md:py-20">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
                            Ready to Start Your Learning Journey?
                        </h2>
                        <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8">
                            Join thousands of students already learning on our platform
                        </p>
                        <Link
                            to="/register"
                            className="inline-block px-6 sm:px-8 py-3 bg-white text-blue-600 rounded-xl font-semibold text-base sm:text-lg hover:bg-blue-50 transition-all duration-200"
                        >
                            Get Started Now
                        </Link>
                    </div>
                </section>
            </div>

            {/* Footer */}
            <footer className="bg-gray-900 text-gray-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Main Footer Content */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
                        {/* Company Info */}
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold text-white mb-6">
                                LearnHub
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                Empowering learners worldwide with quality education and
                                practical skills for the digital age.
                            </p>
                            <div className="flex space-x-4 pt-4">
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white transition-colors duration-200"
                                >
                                    <svg
                                        className="w-6 h-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white transition-colors duration-200"
                                >
                                    <svg
                                        className="w-6 h-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white transition-colors duration-200"
                                >
                                    <svg
                                        className="w-6 h-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white transition-colors duration-200"
                                >
                                    <svg
                                        className="w-6 h-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="text-lg font-semibold text-white mb-6">
                                Quick Links
                            </h4>
                            <ul className="space-y-3">
                                <li>
                                    <Link
                                        to="/courses"
                                        className="text-gray-400 hover:text-white transition-colors duration-200"
                                    >
                                        Browse Courses
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/about"
                                        className="text-gray-400 hover:text-white transition-colors duration-200"
                                    >
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/contact"
                                        className="text-gray-400 hover:text-white transition-colors duration-200"
                                    >
                                        Contact
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/careers"
                                        className="text-gray-400 hover:text-white transition-colors duration-200"
                                    >
                                        Careers
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/blog"
                                        className="text-gray-400 hover:text-white transition-colors duration-200"
                                    >
                                        Blog
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Support */}
                        <div>
                            <h4 className="text-lg font-semibold text-white mb-6">Support</h4>
                            <ul className="space-y-3">
                                <li>
                                    <Link
                                        to="/help"
                                        className="text-gray-400 hover:text-white transition-colors duration-200"
                                    >
                                        Help Center
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/faq"
                                        className="text-gray-400 hover:text-white transition-colors duration-200"
                                    >
                                        FAQs
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/terms"
                                        className="text-gray-400 hover:text-white transition-colors duration-200"
                                    >
                                        Terms of Service
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/privacy"
                                        className="text-gray-400 hover:text-white transition-colors duration-200"
                                    >
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/feedback"
                                        className="text-gray-400 hover:text-white transition-colors duration-200"
                                    >
                                        Send Feedback
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Newsletter */}
                        <div>
                            <h4 className="text-lg font-semibold text-white mb-6">
                                Stay Updated
                            </h4>
                            <p className="text-gray-400 mb-4">
                                Subscribe to our newsletter for the latest updates and exclusive
                                offers.
                            </p>
                            <form className="space-y-3">
                                <div className="flex">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="flex-grow px-4 py-2 bg-gray-800 text-gray-200 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    <button
                                        type="submit"
                                        className="px-6 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition-colors duration-200"
                                    >
                                        Subscribe
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="border-t border-gray-800 py-8">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <div className="text-gray-400 text-sm mb-4 md:mb-0">
                                © 2024 LearnHub. All rights reserved.
                            </div>
                            <div className="flex space-x-6">
                                <Link
                                    to="/terms"
                                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                                >
                                    Terms
                                </Link>
                                <Link
                                    to="/privacy"
                                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                                >
                                    Privacy
                                </Link>
                                <Link
                                    to="/cookies"
                                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                                >
                                    Cookies
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default HomePage;