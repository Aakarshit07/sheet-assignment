/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Adds support for 20 columns
        '20': 'repeat(8, minmax(0, 1fr))',
      },
    },
  },
  plugins: [],
}