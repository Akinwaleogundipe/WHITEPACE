// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },

      screens: {
        ...defaultTheme.screens,
        'mobile': '320px',
        'tablet': '768px',
        'desktop2': '1152px',
        'desktop': '1440px',
      },
    },


  },
  plugins: [],
};
