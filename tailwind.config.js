/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        primary: "#106A64",
        secondary: "#F1F6F6",
      },
      fontSize: {
        "4xl": "40px",
        "14p": "14px",
        "20p": "20px",
        "2s": "20px",
      },
      padding: {
        ps: "24px",
      },
    },
  },
  plugins: [],
};
