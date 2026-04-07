import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
    return (
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16 text-center">

            <h2 className="section-title"> Contact</h2>

            <div className="flex justify-center gap-8 text-3xl">

                {/* GitHub: अपना यूजरनेम 'your-username' की जगह लिखें */}
                <a href="https://github.com/tusharrahangdale" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition">
                    <FaGithub />
                </a>

                {/* LinkedIn: अपना प्रोफाइल लिंक यहाँ डालें */}
                <a href="https://linkedin.com/in/tushar-rahangdale-1701231a1/" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition">
                    <FaLinkedin />
                </a>

                {/* Instagram: अपना हैंडल यहाँ डालें */}
                <a href="https://instagram.com/tush_are_pawar" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition">
                    <FaInstagram />
                </a>

                {/* WhatsApp: अपना नंबर 91 के साथ यहाँ डालें */}
                <a href="https://wa.me/916264171750" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition">
                    <FaWhatsapp />
                </a>

            </div>

            {/* ईमेल को भी क्लिकेबल बनाने के लिए 'mailto:' का उपयोग करें */}
            <p className="mt-6 text-lg">
                <a href="mailto:tusharrahangdale17@gmail.com" className="hover:underline">
                    tusharrahangdale17@gmail.com
                </a>
            </p>

        </div>
    );
}