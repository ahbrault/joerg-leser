/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                cream: "var(--cream)",
                foreground: "var(--foreground)",
                gold: "var(--gold)",
                red: "var(--red)",
            },
            fontFamily: {
                baskerville: ['Baskerville', 'serif'],
                sans: ['Inter', 'sans-serif'],
            },
            screens: {
                'xs': '400px',
            },
        },
    },
    plugins: [],
};
