/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'accent-teal': '#7FB3A4',
        'accent-orange': '#FFB84D',
        'main-beige': '#f3f1eb'
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
