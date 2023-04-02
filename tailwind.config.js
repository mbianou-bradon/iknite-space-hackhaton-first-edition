/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "orange-primary": "#FD661F",
        "orange-secondary": "#FF9460",
        "orange-secondary-light": "#F6CBBB",
        "green-primary": "#3F6745",
        "green-secondary": "#1E3322",
        "green-secondary-light": "#DBE0DA",
        "blue-primary": "#1A20A9",
        "blulish-secondary": "#3D41A4",
        "gray-secondary": "#F5F4F0",
        "pink-secondary": "#DEBAAE"
      }
    },
  },
  plugins: [],
}

