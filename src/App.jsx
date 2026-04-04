import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import SkillSlider from "./Components/SkillSlider";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import HireForm from "./Components/HireForm";
import FintechDetail from "./Components/FintechDetail";
import HotelDetail from "./Components/HotelDetail";

// HomePage: इसमें पोर्टफोलियो के सारे कॉम्पोनेंट्स एक साथ दिखेंगे
const HomePage = () => (
    <>
        <Header />
        <SkillSlider />
        <Experience />
        <Projects />
        <HireForm />
        <Contact />
    </>
);

export default function App() {
    return (
        <Router>
            {/* बदलाव: पूरे ऐप का बैकग्राउंड और टेक्स्ट का बेस कलर सुनिश्चित करने के लिए
               मुख्य डिव (div) में क्लासेज चेक की गई हैं।
            */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-100 min-h-screen text-gray-900">
                <Routes>
                    {/* Home Route */}
                    <Route path="/" element={<HomePage />} />

                    {/* Project Routes: यहाँ हर प्रोजेक्ट की अपनी डिटेल्स दिखेंगी */}
                    <Route path="/project/fintech" element={<FintechDetail />} />
                    <Route path="/project/hotel" element={<HotelDetail />} />
                </Routes>
            </div>
        </Router>
    );
}