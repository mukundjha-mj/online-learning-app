import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gradient-to-r from-blue-600 to-indigo-600 shadow-xl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo and Brand */}
                    <div className="flex items-center">
                        <Link to="/" className="text-xl md:text-2xl font-bold text-white">
                            LearnHub
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8">
                        <Link 
                            to="/" 
                            className="text-white font-medium hover:text-blue-100 transition-all duration-200 text-lg relative group"
                        >
                            <span>Home</span>
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
                        </Link>
                        <Link 
                            to="/courses" 
                            className="text-white font-medium hover:text-blue-100 transition-all duration-200 text-lg relative group"
                        >
                            <span>Courses</span>
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
                        </Link>
                        <Link 
                            to="/profile" 
                            className="hidden text-white font-medium hover:text-blue-100 transition-all duration-200 text-lg relative group"
                        >
                            <span>Profile</span>
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
                        </Link>
                        <Link 
                            to="/about" 
                            className=" text-white font-medium hover:text-blue-100 transition-all duration-200 text-lg relative group"
                        >
                            <span>About</span>
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
                        </Link>
                    </div>

                    

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
                        >
                            {isOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="lg:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <Link
                                to="/"
                                className="block px-3 py-2 text-base font-medium text-white hover:bg-white/10 rounded-lg transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                Home
                            </Link>
                            <Link
                                to="/courses"
                                className="block px-3 py-2 text-base font-medium text-white hover:bg-white/10 rounded-lg transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                Courses
                            </Link>
                            <Link
                                to="/profile"
                                className="block px-3 py-2 text-base font-medium text-white hover:bg-white/10 rounded-lg transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                Profile
                            </Link>
                            <div className="pt-4 flex flex-col space-y-2">
                                <Link
                                    to="/login"
                                    className="px-3 py-2 text-center text-white hover:bg-white/10 transition-all duration-200 border-2 border-transparent hover:border-white/50 rounded-xl font-medium"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Sign In
                                </Link>
                                <Link
                                    to="/register"
                                    className="px-3 py-2 text-center bg-white text-blue-600 rounded-xl hover:bg-blue-50 transition-all duration-200 font-medium shadow-lg"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Get Started
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;