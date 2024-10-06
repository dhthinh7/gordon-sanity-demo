/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        border: "rgba(255, 255, 255, 0.50)",
        primary: "#5BB3EF",
      },
      backgroundImage: {
        overlay:
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))",
      },
      fontFamily: {
        SignPainter: "var(--font-geist-mono)",
      },
    },
  },
  // plugins: [require("tailwindcss-animate")],
};
