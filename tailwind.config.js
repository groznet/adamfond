/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./*.html",
        "./**/*.html",
        "./components/**/*.html",
        "./assets/js/**/*.js"
    ],
    theme: {
        extend: {
            colors: {
                primary: '#05affa',
                secondary: '#eeeeee',
                accent: '#ff5c39',
                background: '#ffffff',
                dark: '#111111',
            },
            fontFamily: {
                heading: ['Montserrat', 'sans-serif'],
                body: ['Inter', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
