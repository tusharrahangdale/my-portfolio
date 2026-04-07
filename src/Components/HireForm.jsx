import { useState } from "react";

export default function HireMe() {
    // showForm: यह स्टेट तय करती है कि पॉपअप (Modal) दिखेगा या नहीं (true/false)
    const [showForm, setShowForm] = useState(false);

    // formData: यह एक Object है जो फॉर्म के सभी इनपुट फील्ड्स का डेटा स्टोर करता है
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        organization: "",
        message: ""
    });

    // loading: जब डेटा बैकएंड (Java) को भेजा जा रहा हो, तब बटन को 'Disable' करने के लिए
    const [loading, setLoading] = useState(false);

    // status: यूज़र को सफलता (Success) या गलती (Error) का मैसेज दिखाने के लिए
    const [status, setStatus] = useState({ type: "", msg: "" });

    // handleChange: जैसे ही यूज़र टाइप करेगा, यह फंक्शन 'formData' स्टेट को अपडेट कर देगा
    const handleChange = (e) => {
        const { name, value } = e.target;
        // ...formData: पुराने डेटा को कॉपी करता है और [name]: value केवल नए बदलाव को सेव करता है
        setFormData({ ...formData, [name]: value });
    };

    // handleSubmit: जब यूज़र 'Submit' बटन दबाएगा, तब यह फंक्शन चलेगा
    const handleSubmit = async (e) => {
        // e.preventDefault(): ब्राउज़र को पेज रिफ्रेश (Reload) करने से रोकता है
        e.preventDefault();

        setLoading(true); // बटन पर "Sending..." दिखाने के लिए
        setStatus({ type: "", msg: "" }); // पुराने मैसेज को साफ करने के लिए

        try {
            // fetch: जावा बैकएंड (Spring Boot) के API एंडपॉइंट को कॉल करना
            const response = await fetch("http://portfolio-backend-production-39fd.up.railway.app", {
                method: "POST", // डेटा भेजने के लिए POST मेथड का उपयोग
                headers: { "Content-Type": "application/json" }, // सर्वर को बताना कि हम JSON भेज रहे हैं
                body: JSON.stringify(formData), // जावास्क्रिप्ट ऑब्जेक्ट को JSON स्ट्रिंग में बदलना
            });

            const data = await response.json(); // बैकएंड से आने वाले JSON रिस्पॉन्स को पढ़ना

            if (response.ok) {
                // Success Condition: अगर जावा ने 200 OK भेजा है
                setStatus({ type: "success", msg: data.message || "Success! Message sent." });
                setFormData({ name: "", email: "", organization: "", message: "" }); // फॉर्म खाली करना

                // 2 सेकंड इंतज़ार करके पॉपअप को अपने आप बंद करना
                setTimeout(() => setShowForm(false), 2000);
            } else {
                // Error Condition: अगर बैकएंड से कोई एरर (जैसे 400 या 500) आया है
                setStatus({ type: "error", msg: data.error || "Something went wrong!" });
            }
        } catch (error) {
            // Network Error: अगर जावा सर्वर (Backend) चालू नहीं है
            setStatus({ type: "error", msg: "Server is offline. Please try again later." });
        } finally {
            setLoading(false); // सबमिशन पूरा होने पर बटन को वापस सामान्य करना
        }
    };

    return (
        <div className="py-20 text-center bg-white">
            <h2 className="text-3xl font-bold mb-6 italic uppercase tracking-tighter">
                Ready to work together?
            </h2>

            {/* मुख्य बटन जो फॉर्म को ओपन करता है */}
            <button
                onClick={() => setShowForm(true)}
                className="bg-green-600 text-white px-8 py-3 rounded-xl text-lg hover:bg-green-700 hover:scale-110 transition duration-300 cursor-pointer shadow-lg font-bold"
            >
                🚀 Hire Me
            </button>

            {/* Conditional Rendering: {showForm && ...} का मतलब है कि यह तभी दिखेगा जब showForm 'true' होगा */}
            {showForm && (
                <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
                    <div className="bg-white p-8 rounded-2xl w-full max-w-md shadow-2xl relative">

                        <h2 className="text-2xl font-black mb-6 text-gray-800 italic uppercase">Send a Request</h2>

                        {/* अलर्ट बॉक्स: केवल तभी दिखेगा जब 'status.msg' में कुछ होगा */}
                        {status.msg && (
                            <div className={`mb-4 p-3 rounded-lg text-sm font-bold ${status.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                {status.msg}
                            </div>
                        )}

                        {/* onSubmit: फॉर्म सबमिशन को हैंडल करने वाला मुख्य फंक्शन */}
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Full Name"
                                required // खाली सबमिट होने से रोकने के लिए
                                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 outline-none"
                            />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email Address"
                                required
                                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 outline-none"
                            />
                            <input
                                name="organization"
                                value={formData.organization}
                                onChange={handleChange}
                                placeholder="Organization (Optional)"
                                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 outline-none"
                            />
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Tell me about your project..."
                                required
                                className="w-full p-3 border border-gray-300 rounded-xl h-32 focus:ring-2 focus:ring-green-500 outline-none"
                            />

                            {/* सबमिट बटन: लोडिंग के दौरान डिसेबल (Disabled) हो जाएगा */}
                            <button
                                type="submit"
                                disabled={loading}
                                className={`w-full py-3 rounded-xl font-bold text-white transition duration-300 ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700 shadow-md'}`}
                            >
                                {loading ? "Sending..." : "Submit Request"}
                            </button>
                        </form>

                        {/* फॉर्म को बंद करने का बटन */}
                        <button
                            onClick={() => setShowForm(false)}
                            className="mt-4 text-gray-500 hover:text-red-500 font-semibold transition"
                        >
                            Close / Cancel
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}