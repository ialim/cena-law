module.exports = {
  purge: ["./components/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        GTSuper: ["GT-Super-Display-Bold", "GT-Super-Display-Light"],
        BasierCircle: [
          "BasierCircle-SemiBold",
          "BasierCircle-Bold",
          "BasierCircle-Regular",
          "BasierCircle-Medium",
        ],
      },
      backgroundColor: {
        "brand-dark": "#252B42",
        "brand-secondary": "#DBB468",
        "brand-primary": "#D0A144",
        "brand-input": "#F9F9F9",
        "brand-section": "#DADADA",
      },
      textColor: {
        "brand-muted": "#BDBDBD",
        "brand-dark": "#252B42",
        "brand-secondary": "#737373",
        "brand-primary": "#D0A144",
      },
      divideColor: {
        "brand-Stroke": "#364067",
      },
      borderColor: {
        "brand-border": "#BDBDBD",
      },
      keyframes: {
        fadeInOut: {
          "0%": { opacity: "1", right: "100px" },
          "100%": { opacity: "0", right: "-900px"},
        },
      },
      animation: {
        fadeInOut: "fadeInOut 15s ease-in-out 1"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
  ],
};
