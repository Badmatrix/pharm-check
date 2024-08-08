/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white:"#ffff",
        background: "#f8f9fa;",
        grayDark: "#343a40",
        danger: "#dc3545",
        warning: "#ffc107",
        success:"#28a745",
        primary: {
          50: "#17a2b8",
          100: "#009efa",
          200: "#007bff",
        },
      },
    },
  },
  plugins: [],
};
