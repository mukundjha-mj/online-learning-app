import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Users, BookOpen, Trophy } from 'lucide-react';

const AboutPage = () => {
    const stats = [
        { label: 'Active Students', value: '15,000+', icon: Users },
        { label: 'Total Courses', value: '200+', icon: BookOpen },
        { label: 'Success Rate', value: '95%', icon: Trophy },
        { label: 'Expert Instructors', value: '50+', icon: CheckCircle },
    ];

    const teamMembers = [
        {
            name: 'Sarah Johnson',
            role: 'Founder & CEO',
            image: '/api/placeholder/100/100',
            bio: 'Former education consultant with 15 years of experience in EdTech.'
        },
        {
            name: 'Michael Chen',
            role: 'Head of Education',
            image: '/api/placeholder/100/100',
            bio: 'PhD in Educational Technology, passionate about innovative learning methods.'
        },
        {
            name: 'Anna Martinez',
            role: 'Chief Technology Officer',
            image: '/api/placeholder/100/100',
            bio: 'Tech industry veteran focused on creating seamless learning experiences.'
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Transforming Education for Everyone
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                            LearnHub is on a mission to make quality education accessible, 
                            engaging, and effective for learners worldwide.
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="flex justify-center mb-4">
                                    <stat.icon className="h-8 w-8 text-blue-600" />
                                </div>
                                <div className="text-3xl font-bold text-gray-900 mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-gray-600">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Our Mission
                        </h2>
                        <p className="text-xl text-gray-600">
                            We believe that education is a fundamental right, not a privilege. 
                            Our platform combines cutting-edge technology with expert instruction 
                            to create an engaging learning experience that adapts to each student's needs.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                Accessible Learning
                            </h3>
                            <p className="text-gray-600">
                                Breaking down barriers to education through affordable, 
                                flexible online courses available anytime, anywhere.
                            </p>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                Quality Content
                            </h3>
                            <p className="text-gray-600">
                                Expertly crafted courses and learning materials designed 
                                to meet the highest educational standards.
                            </p>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                Community Focus
                            </h3>
                            <p className="text-gray-600">
                                Building a supportive learning community where students 
                                can connect, collaborate, and grow together.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
                        Meet Our Team
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="text-center">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-24 h-24 rounded-full mx-auto mb-4"
                                />
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    {member.name}
                                </h3>
                                <p className="text-blue-600 mb-3">{member.role}</p>
                                <p className="text-gray-600">{member.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                        Ready to Start Your Learning Journey?
                    </h2>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            to="/courses"
                            className="px-8 py-3 bg-white text-blue-600 rounded-xl hover:bg-blue-50 transition-all duration-200 font-medium text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                        >
                            Explore Courses
                        </Link>
                        <Link
                            to="/register"
                            className="px-8 py-3 text-white rounded-xl hover:bg-white/10 transition-all duration-200 border-2 border-white text-lg font-medium"
                        >
                            Join Now
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;