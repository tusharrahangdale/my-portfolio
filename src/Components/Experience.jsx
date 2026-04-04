import React from 'react';

// ================= EXPERIENCE =================
export default function Experience() {
    return (
        <div className="py-16 px-4 md:px-10 bg-gray-100 w-full">

            {/* बदलाव: 'section-title' को हटाकर Tailwind क्लासेस जोड़ी गई हैं
               ताकि लाइट बैकग्राउंड पर टेक्स्ट साफ दिखे।
            */}
            <h2 className="text-5xl font-black text-gray-900 text-center mb-16 italic uppercase tracking-tighter">
                Experience
            </h2>

            <div className="max-w-6xl mx-auto space-y-16">
                {/* 🔹 KFintech */}
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h3 className="text-2xl font-bold mb-3 text-indigo-900">KFintech (Intern)</h3>
                        <ul className="text-lg text-gray-700 space-y-2">
                            <li>• Scalable financial systems</li>
                            <li>• ETL pipelines using Pentaho</li>
                            <li>• Drools rule engine</li>
                            <li>• Multi-client optimization</li>
                        </ul>
                    </div>

                    <img
                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800"
                        className="w-full h-64 object-cover rounded-xl shadow-lg border-4 border-white"
                        alt="Experience Kfintech"
                    />
                </div>

                {/* 🔹 Kodnest */}
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <img
                        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800"
                        className="w-full h-64 object-cover rounded-xl shadow-lg border-4 border-white order-1 md:order-none"
                        alt="Kodnest Training"
                    />

                    <div>
                        <h3 className="text-2xl font-bold mb-3 text-indigo-900">Kodnest Training</h3>
                        <ul className="text-lg text-gray-700 space-y-2">
                            <li>• Java Full Stack training</li>
                            <li>• Spring Boot & Hibernate</li>
                            <li>• React & MySQL</li>
                            <li>• Real-time projects</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}