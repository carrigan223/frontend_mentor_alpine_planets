const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Antonio", ...defaultTheme.fontFamily.sans],
        spartan: ["Spartan", ...defaultTheme.fontFamily.sans]
      }
    },
    colors: {
      greyBorder: "#979797",
      backgroundColor: "black",
      textColor: "#FFFFFF",
      testColor: "purple"
      // Configure your color palette here
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
