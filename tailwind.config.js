/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'light-gray': '#4b5563',
      },
      boxShadow: {
        'main-shadow': '0 2px 4px -2px rgba(16, 24, 40, 0.06), 0 2px 4px -2px rgba(16, 24, 40, 0.1)',
      },
      screens: {
        'tablet': '769px',
        'laptop': '1025px',
      },
    },
  },
  plugins: [],
}