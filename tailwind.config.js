module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        accentOrange: "#FF9050",
        accentBlack: "#2B312E",
        accentGreen: "#539592",
        accentGreenHover: "#448F8C",
        accentGray: "#AEAFAE",
        accentDarkBlue: "#192E46",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
