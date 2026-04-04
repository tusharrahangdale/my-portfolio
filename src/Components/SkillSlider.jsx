import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    { name: "Java", img: "https://img.icons8.com/color/512/java-coffee-cup-logo.png" },
    { name: "Spring Boot", img: "https://img.icons8.com/color/512/spring-logo.png" },
    { name: "React", img: "https://img.icons8.com/color/512/react-native.png" },
    { name: "MySQL", img: "https://img.icons8.com/color/512/mysql-logo.png" },
    { name: "Postman", img: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
    { name: "HTML", img: "https://img.icons8.com/color/512/html-5--v1.png" },
    { name: "CSS", img: "https://img.icons8.com/color/512/css3.png" },
    { name: "JavaScript", img: "https://img.icons8.com/color/512/javascript--v1.png" },
];

export default function SkillSlider() {
    // लूप को इन्फिनिट रखने के लिए स्किल्स को 3 बार दोहराया गया है
    const duplicatedSkills = [...skills, ...skills, ...skills];

    return (
        <div className="py-10 bg-white overflow-hidden w-full border-b border-gray-100">

            {/* Headline: Projects जैसा स्टाइल */}
            <h2 className="text-5xl font-black text-gray-900 text-center mb-16 italic uppercase tracking-tighter">
                Skills
            </h2>

            <div className="relative flex items-center justify-center">
                {/* Slider Container:
                   यहाँ animate-scroll के बजाय Framer Motion का 'animate' इस्तेमाल हो रहा है
                   ताकि ज़ूम और रोटेशन आपस में न टकराएं।
                */}
                <motion.div
                    className="flex space-x-20 items-center"
                    animate={{
                        x: ["0%", "-33.33%"],
                    }}
                    transition={{
                        duration: 25,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                >
                    {duplicatedSkills.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col items-center justify-center min-w-[150px]"

                            // 1. Zoom & Color Effect: जब हेडलाइन के नीचे (सेंटर) आए
                            whileInView={{
                                scale: 1.5,            // 1.5x ज़ूम
                                filter: "grayscale(0%)", // असली कलर (No Gray)
                                opacity: 1
                            }}

                            /* 2. Viewport Logic:
                               margin: "0px -48% 0px -48%" का मतलब है कि
                               इफेक्ट केवल स्क्रीन के बीच के 4% हिस्से (Headline के ठीक नीचे) में ही ट्रिगर होगा।
                            */
                            viewport={{ once: false, margin: "0px -48% 0px -48%" }}

                            // 3. Normal State: बाकी समय कैसा दिखेगा
                            initial={{
                                scale: 1,              // नॉर्मल साइज
                                filter: "grayscale(100%)", // ब्लैक एंड व्हाइट
                                opacity: 0.4           // थोड़ा हल्का/धुंधला
                            }}

                            // 4. Transition: ज़ूम होने और वापस छोटा होने की स्मूथनेस
                            transition={{
                                type: "spring",
                                stiffness: 200,
                                damping: 15
                            }}
                        >
                            <img
                                src={skill.img}
                                alt={skill.name}
                                className="h-16 w-16 object-contain mb-4 drop-shadow-md"
                            />
                            <p className="text-[11px] font-black text-gray-900 uppercase tracking-widest text-center">
                                {skill.name}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}