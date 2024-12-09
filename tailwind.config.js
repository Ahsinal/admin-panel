/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensures Tailwind applies to all React components
  ],
  theme: {
    extend: {
      colors: {
        'primary-100': '#6A5ACC',
        'primary-200': '#7C68EE',
        'primary-300': '#493C8B',
        'primary-400': '#8B2AE1',
        'primary-500': '#4B0081',
      },
    },
  },
  plugins: [],
}

