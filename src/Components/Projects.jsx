import React from 'react';
import { Link } from 'react-router-dom';

// ================= PROJECTS =================
export default function Projects() {
    return (
        <div className="py-16 px-6 bg-purple-50">

            {/* बदलाव: हेडलाइन का कलर 'text-gray-900' किया गया है
               ताकि यह पर्पल बैकग्राउंड पर डार्क और विज़िबल रहे।
            */}
            <h2 className="text-5xl font-black text-gray-900 text-center mb-16 italic uppercase tracking-tighter">
                My Projects
            </h2>

            {/* 1. FinTech Processing System */}
            <div className="grid md:grid-cols-2 gap-8 items-center mb-16 max-w-6xl mx-auto">
                <div>
                    <h3 className="text-3xl font-bold mb-3 text-indigo-900">FinTech Processing System</h3>
                    <p className="text-lg text-gray-700 mb-6">
                        Developed scalable financial system with ETL pipelines, Drools, and Spring Boot APIs.
                    </p>
                    <Link
                        to="/project/fintech"
                        className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-indigo-700 hover:scale-105 transition duration-300 shadow-md"
                    >
                        Read More
                    </Link>
                </div>

                <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
                    alt="FinTech System"
                    className="rounded-2xl shadow-xl hover:rotate-1 transition duration-300 border-4 border-white"
                />
            </div>

            {/* 2. Hotel Management System */}
            <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
                <img
                    src="https://images.unsplash.com/photo-1563013544-824ae1b704d3"
                    alt="Hotel Management"
                    className="rounded-2xl shadow-xl hover:-rotate-1 transition duration-300 order-2 md:order-1 border-4 border-white"
                />

                <div className="order-1 md:order-2">
                    <h3 className="text-3xl font-bold mb-3 text-indigo-900">Hotel Management System</h3>
                    <p className="text-lg text-gray-700 mb-6">
                        Built booking system using Spring Boot, Hibernate, MySQL and authentication.
                    </p>
                    <Link
                        to="/project/hotel"
                        className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-indigo-700 hover:scale-105 transition duration-300 shadow-md"
                    >
                        Read More
                    </Link>
                </div>
            </div>

        </div>
    );
}