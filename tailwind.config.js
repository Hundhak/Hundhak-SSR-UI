/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(167, 199, 231)',  // Pale Sky Blue
        accent: 'rgb(18, 25, 17)',   // Dark Green
        secondary: '#465f54' // Soft Sage Green
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'hero-gradient': 'linear-gradient(135deg, #f3f1eb, #f1f0ec, #f3f1ea, #efede8)',
      },
    },
  },
  plugins: [],
};
