module.exports = {
  plugins: [
    "tailwindcss",

    ...(process.env.NODE_ENV === "production"
      ? [
          [
            "@fullhuman/postcss-purgecss",
            {
              content: [
                "./node_modules/swiper/**/*.js",
                "./pages/**/*.{js,jsx,ts,tsx}",
                "./components/**/*.{js,jsx,ts,tsx}",
              ],
              safelist: [swiper - container],
              defaultExtractor: (content) =>
                content.match(/[\w-/:]+(?<!:)/g) || [],
            },
          ],
        ]
      : []),
    "postcss-preset-env",
  ],
};
