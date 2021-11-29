module.exports = {
  mode: "jit",
  purge: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./node_modules/swiper/**/*.js",
  ],
  theme: {
    fontFamily: {},
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1568px",
      "3xl": "1720px",
      "4xl": "1920px",
      "5xl": "2140px",
      "6xl": "2340px",
    },
  },
  variants: {},
};
