/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // JSM Brand Colors
        'jsm-dark': '#212121',
        'jsm-darker': '#1a1a1a',
        'jsm-purple': '#6B2D8F',
        'jsm-green': '#4CAF50',
        'jsm-silver': '#C0C0C0',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
