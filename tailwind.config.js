const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      raleway: ["Raleway", "Sans"],
      quicksand: ["quicksand", "Sans"],
    },
    screens: {
      xs: "475px",
      xxxl: "2300px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        "custom-black": "#000",
        "custom-btn": "#3C483A ",
        "custom-green": "#194E4A",
        "custom-background": "#f6fff5",
        "custom-blackDifference": "rgb(131,215,205)",
      },
    },
  },
  plugins: [],
};
