const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['"Josefin Sans"', '"Sans"'],
    },
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        "custom-black": "#000",
        "custom-btn": "#4E5F4B",
        "custom-green": "#194E4A",
        "custom-background": "#D1E7CE",
        "custom-blackDifference": "rgb(131,215,205)",
      },
    },
  },
  plugins: [],
};
