/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            animation: {
                // 'scroll' एनिमेशन का नाम और उसकी स्पीड (20s)
                'scroll': 'scroll 20s linear infinite',
            },
            keyframes: {
                scroll: {
                    // 0% से -100% तक खिसकने का लॉजिक
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
            },
        },
    },
    plugins: [],
};