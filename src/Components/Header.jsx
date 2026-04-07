import React from 'react';
// 1. सुनिश्चित करें कि आपकी इमेज का पाथ एकदम सही है
import profilePic from '../assets/TusharProfile.jpeg';

export default function Header() {
    return (
        /* पूरे सेक्शन का कंटेनर */
        <div className="text-center py-20 bg-gradient-to-br from-blue-50 to-indigo-100 shadow-xl rounded-3xl m-6 border border-white/50">

            {/* 2. प्रोफाइल इमेज सेक्शन */}
            <img
                src={profilePic}
                alt="Tushar Rahangdale"
                /* - w-48 h-48: 1.5x बड़ा साइज
                   - object-top: चेहरे को फोकस में रखने के लिए
                   - ring-8: प्रोफेशनल व्हाइट बॉर्डर
                */
                className="w-48 h-48 mx-auto rounded-full mb-8 shadow-2xl object-cover object-top ring-8 ring-white/70 hover:scale-105 transition-transform duration-500"
            />

            {/* 3. नाम (Headline स्टाइल) */}
            <h1 className="text-5xl font-black text-blue-900 italic uppercase tracking-tighter">
                Tushar Rahangdale
            </h1>

            {/* 4. रोल / डेजिग्नेशन */}
            <p className="text-blue-700 mt-3 text-xl font-bold uppercase tracking-widest">
                Java Developer | Full Stack Developer
            </p>

        </div>
    );
}