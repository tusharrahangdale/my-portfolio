import React from 'react';
import { Link } from 'react-router-dom';
import { FaDatabase, FaHotel, FaUsers, FaCreditCard, FaCode, FaTimes } from "react-icons/fa";

const HotelDetail = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-12 px-6">
            <div className="max-w-6xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-100 relative">

                {/* --- Top Navigation --- */}
                <Link to="/" className="text-indigo-600 font-bold mb-8 inline-flex items-center gap-2 hover:-translate-x-2 transition-transform duration-300">
                    ← Back to Portfolio
                </Link>

                {/* --- Hero Section --- */}
                <div className="text-center mb-12">
                    <span className="bg-indigo-100 text-indigo-700 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest">Full Stack Project</span>
                    <h1 className="text-5xl md:text-6xl font-black text-gray-900 mt-4 mb-4 italic uppercase tracking-tighter">
                        Hotel Management System
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        A centralized platform for hoteliers to automate room bookings, manage guest profiles,
                        and generate financial insights using **Java & Spring Boot**.
                    </p>
                </div>

                {/* --- Main Banner Image --- */}
                <div className="mb-16 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                    <img
                        src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                        alt="Luxury Hotel Management Interface"
                        className="w-full h-[450px] object-cover hover:scale-105 transition-transform duration-700"
                    />
                </div>

                <div className="grid lg:grid-cols-3 gap-12">

                    {/* --- Left Column: Detailed Features --- */}
                    <div className="lg:col-span-2">
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <FaHotel className="text-indigo-600" /> Project Scope
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                The application was designed to solve manual entry errors and latency in the hospitality sector.
                                It features a high-performance backend that manages room availability across multiple categories
                                and handles complex booking conflicts in real-time.
                            </p>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-indigo-600 shadow-sm">
                                    <h4 className="font-bold text-gray-900 flex items-center gap-2"><FaUsers /> Guest Lifecycle</h4>
                                    <p className="text-sm text-gray-600 mt-2">Automated Check-in/Check-out processes with digital guest profile management and history tracking.</p>
                                </div>
                                <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-indigo-600 shadow-sm">
                                    <h4 className="font-bold text-gray-900 flex items-center gap-2"><FaCreditCard /> Billing Logic</h4>
                                    <p className="text-sm text-gray-600 mt-2">Custom logic for calculating GST, service taxes, and dynamic pricing based on peak seasons or weekends.</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                🚀 Key Modules
                            </h2>
                            <ul className="space-y-4">
                                <li className="flex gap-4 p-4 hover:bg-indigo-50 rounded-xl transition">
                                    <span className="text-2xl">🛡️</span>
                                    <div>
                                        <h5 className="font-bold text-gray-900">Advanced Authentication</h5>
                                        <p className="text-gray-600">Implemented Spring Security with Bcrypt encryption for secure password hashing and role-based authorization.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4 p-4 hover:bg-indigo-50 rounded-xl transition">
                                    <span className="text-2xl">📉</span>
                                    <div>
                                        <h5 className="font-bold text-gray-900">Analytical Dashboard</h5>
                                        <p className="text-gray-600">Integrated Hibernate criteria queries to fetch monthly revenue reports and room occupancy rates.</p>
                                    </div>
                                </li>
                            </ul>
                        </section>
                    </div>

                    {/* --- Right Column: Tech & Schema --- */}
                    <div className="space-y-10">

                        {/* Tech Stack Card - Added React & Postman */}
                        <section className="bg-indigo-900 text-white p-8 rounded-3xl shadow-xl">
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <FaCode /> Tech Stack
                            </h2>
                            <div className="flex flex-wrap gap-2">
                                {['Java 17', 'Spring Boot', 'Hibernate', 'MySQL', 'React', 'Thymeleaf', 'Tailwind', 'Postman', 'Git'].map(tech => (
                                    <span key={tech} className="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-lg text-xs font-semibold">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </section>

                        {/* Database Card */}
                        <section className="bg-white border-2 border-dashed border-indigo-200 p-8 rounded-3xl text-center">
                            <FaDatabase className="text-5xl text-indigo-600 mx-auto mb-4 opacity-80" />
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">Schema Design</h2>
                            <p className="text-sm text-gray-500 mb-4 italic">Optimized Normalized MySQL DB</p>
                            <div className="text-left space-y-2 text-xs text-gray-600 font-mono">
                                <div className="bg-indigo-50 p-2 rounded">Users 1:M Bookings</div>
                                <div className="bg-indigo-50 p-2 rounded">Rooms 1:M Bookings</div>
                                <div className="bg-indigo-50 p-2 rounded">Bookings 1:1 Payments</div>
                            </div>
                        </section>

                        {/* Secondary Visualization Image */}
                        <div className="rounded-2xl overflow-hidden shadow-lg">
                            <img
                                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
                                alt="Data Analysis Module"
                                className="w-full h-48 object-cover"
                            />
                            <p className="p-3 text-xs text-center text-gray-500 italic bg-gray-50 border-t">Admin Analytics Module Preview</p>
                        </div>
                    </div>
                </div>

                {/* --- Bottom Close Button --- */}
                <div className="mt-16 flex justify-center">
                    <Link
                        to="/"
                        className="flex items-center gap-2 bg-gray-900 text-white px-8 py-3 rounded-full font-bold hover:bg-indigo-700 transition-colors duration-300 shadow-lg group"
                    >
                        <FaTimes className="group-hover:rotate-90 transition-transform duration-300" />
                        Close Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HotelDetail;