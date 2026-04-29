/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: "#0A1931",
          base: "#185ADB",
        },
        surface: "#F4F9F9",
        muted: "#A2AAB3",
        success: "#28A745",
        warning: "#FFC107",
        danger: "#DC3545",
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", "Montserrat", "system-ui", "sans-serif"],
      },
      fontSize: {
        "2xs": "0.571rem",
        xs: "0.714rem",
        sm: "0.857rem",
        base: "1rem",
        lg: "1.214rem",
        xl: "1.429rem",
        "2xl": "1.714rem",
      },
      maxWidth: {
        mobile: "393px",
      },
    },
  },
  plugins: [],
};
