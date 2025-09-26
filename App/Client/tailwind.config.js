// tailwind.config.js
/** @type {import('tailwindcss').Config}*/
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-bg": "#0D0F1A",
        "dark-card": "#1A1C2A",
        "dark-sidebar": "#1E202D",
        "dark-border": "#2D3042",
        "accent-purple": "#8A5DFF",
        "accent-blue": "#5DBBFF",
        "light-text": "#E0E0E0",
        "muted-text": "#8C90A3",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Using a clean sans-serif font
      },
    },
  },
  plugins: [],
};
