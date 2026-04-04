import React from 'react';
import { Link } from 'react-router-dom';
import { FaDatabase, FaServer, FaCheckCircle, FaRocket, FaCode, FaTimes, FaTools, FaCogs } from "react-icons/fa";

const FintechDetail = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-12 px-6">
            <div className="max-w-6xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-100 relative">

                {/* --- Top Navigation --- */}
                <Link to="/" className="text-blue-600 font-bold mb-8 inline-flex items-center gap-2 hover:-translate-x-2 transition-transform duration-300">
                    ← Back to Portfolio
                </Link>

                {/* --- Hero Section --- */}
                <div className="text-center mb-12">
                    <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest">Internship Project @ Kfintech</span>
                    <h1 className="text-5xl md:text-6xl font-black text-gray-900 mt-4 mb-4 italic uppercase tracking-tighter">
                        FinTech Processing System
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Contributed to building a scalable financial ecosystem using **Java, Spring MVC, and ETL pipelines** to automate complex data operations.
                    </p>
                </div>

                {/* --- Main Banner Image --- */}
                <div className="mb-16 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                    <img
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1350&q=80"
                        alt="Financial Data Analytics Dashboard"
                        className="w-full h-[450px] object-cover hover:scale-105 transition-transform duration-700"
                    />
                </div>

                <div className="grid lg:grid-cols-3 gap-12">

                    {/* --- Left Column: Internship Contributions --- */}
                    <div className="lg:col-span-2">
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <FaCheckCircle className="text-blue-600" /> Professional Contributions
                            </h2>
                            <div className="space-y-6">
                                <p className="text-lg text-gray-700 leading-relaxed border-l-4 border-blue-600 pl-4 bg-blue-50 py-2">
                                    Assisted in developing robust backend services using **Java and Spring MVC**, ensuring high application performance and system reliability for financial transactions.
                                </p>

                                <ul className="grid md:grid-cols-1 gap-4 text-gray-700">
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1.5 bg-blue-100 p-1 rounded-full text-blue-600 text-xs font-bold">✓</div>
                                        <span>Collaborated on **API integration** and system integration to ensure a smooth data flow across various financial modules.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1.5 bg-blue-100 p-1 rounded-full text-blue-600 text-xs font-bold">✓</div>
                                        <span>Worked with **MySQL and Liquibase** for critical database operations, schema updates, and structured data management.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1.5 bg-blue-100 p-1 rounded-full text-blue-600 text-xs font-bold">✓</div>
                                        <span>Enhanced user experience by building responsive UI components using **JSP, HTML/CSS, and jQuery**.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1.5 bg-blue-100 p-1 rounded-full text-blue-600 text-xs font-bold">✓</div>
                                        <span>Supported the team in **testing, debugging, and production support**, resolving critical issues to maintain system stability.</span>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        {/* --- Automation & Efficiency --- */}
                        <section className="mb-8">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <FaCogs className="text-blue-600" /> Automation & Efficiency
                            </h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-gray-50 p-6 rounded-2xl shadow-sm border border-gray-100">
                                    <h4 className="font-bold text-gray-900 flex items-center gap-2"><FaRocket className="text-blue-500"/> Operational Growth</h4>
                                    <p className="text-sm text-gray-600 mt-2">Assisted in implementing features to improve automation, resulting in a **60% faster delivery** of functional features.</p>
                                </div>
                                <div className="bg-gray-50 p-6 rounded-2xl shadow-sm border border-gray-100">
                                    <h4 className="font-bold text-gray-900 flex items-center gap-2"><FaTools className="text-blue-500"/> System Reliability</h4>
                                    <p className="text-sm text-gray-600 mt-2">Participated in requirement analysis and debugging to achieve **zero manual errors** in data processing flows.</p>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* --- Right Column: Tech & Infrastructure --- */}
                    <div className="space-y-10">

                        {/* Updated Tech Stack Card */}
                        <section className="bg-gray-900 text-white p-8 rounded-3xl shadow-xl">
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <FaCode className="text-blue-400" /> Tech Stack
                            </h2>
                            <div className="flex flex-wrap gap-2">
                                {['Java', 'Spring MVC', 'MySQL', 'Liquibase', 'jQuery', 'HTML/CSS', 'API Testing', 'JSP', 'Git', 'Maven'].map(tech => (
                                    <span key={tech} className="bg-white/10 backdrop-blur-md text-white px-3 py-1 rounded-lg text-xs font-semibold border border-white/10">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </section>

                        {/* Data Flow Card */}
                        <section className="bg-white border-2 border-dashed border-blue-200 p-8 rounded-3xl text-center">
                            <FaDatabase className="text-5xl text-blue-600 mx-auto mb-4 opacity-80" />
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">Data Management</h2>
                            <p className="text-sm text-gray-500 mb-4 italic">Liquibase Managed Schema</p>
                            <div className="text-left space-y-2 text-xs text-gray-600 font-mono">
                                <div className="bg-blue-50 p-2 rounded flex justify-between"><span>Schema Updates</span> ➔ <span>Liquibase</span></div>
                                <div className="bg-blue-50 p-2 rounded flex justify-between"><span>Backend Logic</span> ➔ <span>Spring MVC</span></div>
                                <div className="bg-blue-50 p-2 rounded flex justify-between"><span>UI Rendering</span> ➔ <span>jQuery & JSP</span></div>
                            </div>
                        </section>

                        {/* Secondary Image */}
                        <div className="rounded-2xl overflow-hidden shadow-lg">
                            <img
                                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
                                alt="System Integration"
                                className="w-full h-48 object-cover"
                            />
                            <p className="p-3 text-xs text-center text-gray-500 italic bg-gray-50 border-t">Module Integration Visualization</p>
                        </div>
                    </div>
                </div>

                {/* --- Bottom Close Button --- */}
                <div className="mt-16 flex justify-center">
                    <Link
                        to="/"
                        className="flex items-center gap-2 bg-gray-900 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-colors duration-300 shadow-lg group"
                    >
                        <FaTimes className="group-hover:rotate-90 transition-transform duration-300" />
                        Close Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FintechDetail;