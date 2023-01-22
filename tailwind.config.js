/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      extend: {
        primary: {
          DEFAULT: "#ff4500",
          400: "#ff5414",
          600: "#ff713d",
        },
        secondary: {
          DEFAULT: "#0079d3", // blue
          400: "#1484d6",
          600: "#298fda",
        },
        gray: {
          "icon-bg": "#e8e8e8",
          "input-bg": "#f6f7f8",
          "text-light": "#787c7e",
          text: "#222222",
        },
      },
    },
  },
  plugins: [],
};
