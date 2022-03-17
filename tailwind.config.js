module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        grey: {
          50: "#FDFDFD",
          75: "#F1F1F1",
          100: "#DADADA",
          200: "#C2C2C2",
          300: "#808080",
          400: "#414141",
          500: "#0F0F0F",
        },
        avocado: {
          50: "#EBF9DF",
          100: "#BFEA9D",
          200: "#98D568",
          300: "#83CE49",
        },
        tangerine: {
          50: "#FFE5CC",
          100: "#FFC38B",
          200: "#FFA95A",
          300: "#FF8616",
        },
      },
    },
  },
  plugins: [],
};
